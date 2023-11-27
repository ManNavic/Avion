import { useState } from 'react'
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import NoShowIcon from '../../assets/svg/NoShow'
import ShowIcon from '../../assets/svg/Show'
const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [token, setToken] = useState('')
  const [loginError, setLoginError] = useState([])
  const [showPassword, setShowPassword] = useState(false)

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'https://long-jade-squirrel-wear.cyclic.app/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      )

      if (response.ok) {
        const data = await response.json()
        setToken(data)
        localStorage.setItem('token', data)
        navigate('/')
      } else {
        const loginResponse = await response.json()
        console.log('res', loginResponse)
        setLoginError(loginResponse.error)
        console.log(loginError)
        console.error('Login failed')
      }
    } catch (error) {
      console.error('An error occurred during login:', error)
    }
  }
  const viewPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className={classes.container}>
      <div className={classes.empty}></div>
      <div className={classes.formContainer}>
        <div className={classes.textContainer}>
          <div className={classes.left}>
            <p className={classes.registerText}>
              Welcome to <span className={classes.span}>Avion</span>
            </p>
            <h2 className={classes.registerTitle}>Sign In</h2>
          </div>
          <div className={classes.right}>
            <p className={classes.registerTextRight}>No Account ?</p>
            <a className={classes.signIn} href="/register">
              Sign up
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.emailInput}>
            <div className={classes.inputText}>
              {formData.email !== '' ? 'Email address' : ''}
            </div>

            <input
              className={classes.input}
              placeholder="Email address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
          </div>

          <div className={classes.passwordInput}>
            <div className={classes.inputText}>
              {formData.password !== '' ? 'Password' : ''}
            </div>
            <input
              className={classes.input}
              placeholder="Password"
              type={showPassword? 'text': 'password'}
              name="password"
              value={formData.password}
              onChange={handleInput}
            />
          </div>

          <div className={classes.errors}>
            {loginError.length > 0 && (
              <p>
                {loginError.map((item, i) => (
                  <p className={classes.errorMsg} key={i}>
                    {item}
                  </p>
                ))}
              </p>
            )}
          </div>
          {!token ? (
            <button type="submit" className={classes.submit}>
              Sign in
            </button>
          ) : (

              <button type="submit" className={classes.submit} disabled>
                Sign in
              </button>
     
          )}
              <div onClick={viewPassword} className={classes.eye}>
              {showPassword ? <ShowIcon /> : <NoShowIcon />}
              </div>
        </form>
      </div>
    </div>
  )
}
export default Login
