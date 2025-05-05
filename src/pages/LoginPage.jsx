import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "./AuthPages.css"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await login(email, password)
      navigate("/")
    } catch (err) {
      setError("Failed to log in. Please check your credentials.")
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <h1>Login to Your Account</h1>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="auth-button" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            <div className="auth-links">
              <Link to="/forgot-password">Forgot Password?</Link>
              <Link to="/register">Don't have an account? Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
