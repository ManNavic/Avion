import { useState } from 'react'
import classes from './Register.module.css'
const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  })
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [regError, setRegError] = useState([])

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false)
      return
    }

    // Clear the passwords match error if they match
    setPasswordsMatch(true)
    const { confirmPassword, ...formDataWithoutConfirm } = formData

    try {
      const response = await fetch(
        'https://long-jade-squirrel-wear.cyclic.app/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataWithoutConfirm)
        }
      )
      if (response.ok) {
        console.log('You have register successful')
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: ''
        })
      } else {
        const responseData = await response.json()

        console.log('errordata', responseData.errors)
        setRegError(responseData.errors) // Update the regError state with the error message
      }
    } catch (error) {
      console.error('Registration failed:', error)
    }

    console.log('Form data submitted:', formDataWithoutConfirm)
  }
  console.log(formData)
  return (
    <div className={classes.container}>
      <div className={classes.empty}></div>
      <div className={classes.formContainer}>
        <div className={classes.textContainer}>
          <div className={classes.left}>
            <p className={classes.registerText}>
              Welcome to <span className={classes.span}>Avion</span>
            </p>
            <h2 className={classes.registerTitle}>Sign up</h2>
          </div>
          <div className={classes.right}>
            <p className={classes.registerTextRight}>Have an Account ?</p>
            <a className={classes.signIn} href="/login">
              Sign in
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

          <div className={classes.nameInputs}>
            <div className={classes.text}>
              <div className={classes.inputText}>
                {formData.firstName !== '' ? 'First Name' : ''}
              </div>
              <input
                className={classes.inputName}
                placeholder="First name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInput}
              />
            </div>
            <div className={classes.text}>
              <div className={classes.inputText} id={classes.lastNameText}>
                {formData.lastName !== '' ? 'Last name' : ''}
              </div>
              <input
              id={classes.lastName}
                className={classes.inputName}
                placeholder="Last name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInput}
              />
            </div>
          </div>

          <div className={classes.passwordInput}>
            <div className={classes.inputText}>
              {formData.password !== '' ? 'Password' : ''}
            </div>
            <input
              className={classes.input}
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
            />
          </div>

          <div className={classes.passwordInput}>
            <div className={classes.inputText}>
              {formData.confirmPassword !== '' ? 'Confirm password' : ''}
            </div>
            <input
              className={classes.input}
              placeholder="Confirm password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInput}
            />
          </div>

          <div className={classes.errors}>
            {!passwordsMatch && <p className={classes.errorMsg}>Password does not match</p>}
            {regError.length > 0 && (
              <p>
                {regError.map((item) => (
                  <p className={classes.errorMsg}>{item}</p>
                ))}
              </p>
            )}
          </div>

          <button type="submit" className={classes.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default Register
