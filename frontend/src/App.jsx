import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-cyan-400">
          CloudCart
        </h1>

        <Link
          to="/login"
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg"
        >
          Login
        </Link>
      </nav>

      <div className="flex flex-col justify-center items-center h-[80vh]">
        <h2 className="text-6xl font-bold mb-6">
          Cloud Native Shopping Platform
        </h2>

        <p className="text-slate-400 text-xl mb-8">
          DevOps Portfolio Project using Kubernetes, Jenkins, Terraform and Docker
        </p>

        <Link
          to="/login"
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App