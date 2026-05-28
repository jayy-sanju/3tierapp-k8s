import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

dotenv.config()

const prisma = new PrismaClient()

const app = express()

app.use(cors())
app.use(express.json())

// Register
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })

    res.json({
      message: 'User created',
      user
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Internal server error'
    })
  }
})

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(401).json({
        message: 'Invalid credentials'
      })
    }

    const validPassword = await bcrypt.compare(
      password,
      user.password
    )

    if (!validPassword) {
      return res.status(401).json({
        message: 'Invalid credentials'
      })
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d'
      }
    )

    res.json({
      token
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Internal server error'
    })
  }
})

app.get('/', (req, res) => {
  res.json({
    message: 'Auth Service Running'
  })
})

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`)
})

app.get("/health", (req, res) => {
  res.json({
    message: "Auth service healthy",
    pod: process.env.HOSTNAME
  })
})