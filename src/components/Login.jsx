import { useState } from 'react'
import { LogIn } from 'lucide-react'
import './Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (username === 'TUD' && password === 'AI2026') {
      localStorage.setItem('authenticated', 'true')
      onLogin()
    } else {
      setError('Ungültige Zugangsdaten.')
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Zugang erforderlich</h2>
        <p className="login-subtitle">
          Bitte melden Sie sich an, um die Seite zu sehen.
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="username">Benutzername</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Passwort</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="cta-button">
            Anmelden <LogIn size={18} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
