import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api/api'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await API.post('/login', {
        email,
        password
      })

      localStorage.setItem('token', response.data.token)

      alert('Login successful')

      navigate('/')
    } catch (error) {
      console.error(error)

      alert('Invalid credentials')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded-xl w-96"
      >
        <h1 className="text-3xl text-white font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
        />

        <button
          className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg text-white"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login