import { useEffect, useState, useRef } from 'react'
import classes from './Profile.module.css'
import LockIcon from '../../assets/svg/Lock'
import UnlockIcon from '../../assets/svg/Unlock'
import NoShowIcon from '../../assets/svg/NoShow'
import ShowIcon from '../../assets/svg/Show'
const Profile = () => {
  const ref = useRef()
  const [user, setUser] = useState({})
  const [userToSend, setUserToSend] = useState({
    profile: [
      {
        firstName: '',
        lastName: '',
        additionalInfo: [
          {
            birthday: '',
            phoneNumber: ''
          }
        ]
      }
    ]
  })
  const [testUserToSend, setTestUserToSend] = useState({
    profile: [
      {
        firstName: '',
        lastName: '',
        additionalInfo: [
          {
            birthday: '',
            phoneNumber: ''
          }
        ]
      }
    ]
  })
  console.log('usertosend', userToSend)
  console.log('testusertosend', testUserToSend)
  const [lockEmail, setLockEmail] = useState(true)
  const [lockBirthday, setLockBirthday] = useState(true)
  const [lockFisrt, setLockFisrt] = useState(true)
  const [lockLast, setLockLast] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [lockNumber, setLockNumber] = useState(true)
  const [passwordChange, setPasswordChange] = useState({
    password: '',
    confirmPassword: ''
  })
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  console.log(userToSend)
  const handlePasswordInput = (e) => {
    const { name, value } = e.target
    setPasswordChange((prevPasswordChange) => ({
      ...prevPasswordChange,
      [name]: value
    }))
  }
  const handleInput = (e) => {
    const { name, value } = e.target
    setUserToSend((prevUserToSend) => {
      const newProfile = { ...prevUserToSend.profile?.[0] } || {}
      const newAdditionalInfo = { ...newProfile.additionalInfo?.[0] } || {}

      if (name === 'email') {
        return {
          ...prevUserToSend,
          [name]: value
        }
      } else if (name === 'firstName' || name === 'lastName') {
        newProfile[name] = value
      } else if (name === 'birthday' || name === 'phoneNumber') {
        newAdditionalInfo[name] = value
      }
      return {
        ...prevUserToSend,
        profile: [
          {
            ...newProfile,
            additionalInfo: [newAdditionalInfo]
          }
        ]
      }
    })
  }

  const token = localStorage.getItem('token')
  const fetchUser = async () => {
    try {
      if (token) {
        const response = await fetch(
          'https://long-jade-squirrel-wear.cyclic.app/user',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        if (response.ok) {
          const userData = await response.json()
          setUser(userData)
        } else {
          console.error('Failed to fetch user data')
        }
      }
    } catch (error) {
      console.error('An error occurred while fetching user data:', error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [token])

  const handleLockEmail = (value) => {
    if (value === 'email') {
      setLockEmail(!lockEmail)
    } else if (value === 'birthday') {
      setLockBirthday(!lockBirthday)
    } else if (value === 'fisrt') {
      setLockFisrt(!lockFisrt)
    } else if (value === 'last') {
      setLockLast(!lockLast)
    } else if (value === 'number') {
      setLockNumber(!lockNumber)
    } else if (value === 'password') {
      setShowPassword(!showPassword)
    } else if (value === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword)
    }
  }
  const isEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isEqual(userToSend, testUserToSend)) {
      console.log('error')
    } else {
      try {
        const response = await fetch(
          'https://long-jade-squirrel-wear.cyclic.app/user/profile',
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(userToSend)
          }
        )
        if (response.ok) {
          console.log('profile updated')
          setLockBirthday(true)
          setLockFisrt(true)
          setLockLast(true)
          setLockNumber(true)
        } else {
          const responseData = await response.json()

          console.log('errordata', responseData.errors)
        }
      } catch (error) {
        console.error('update failed:', error)
      }
    }
  }
  const handlePasswordSubmit = async (e) => {
    e.preventDefault()

    if (passwordChange.password !== passwordChange.confirmPassword) {
      setPasswordsMatch(false)
      return
    }
    setPasswordsMatch(true)
    const { confirmPassword, ...formDataWithoutConfirm } = passwordChange
    console.log(formDataWithoutConfirm)
    try {
      const response = await fetch(
        'https://long-jade-squirrel-wear.cyclic.app/user/password',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formDataWithoutConfirm)
        }
      )
      if (response.ok) {
        console.log('Password changed')
      } else {
        const responseData = await response.json()

        console.log('errordata', responseData.errors)
      }
    } catch (error) {
      console.error('change failed:', error)
    }
  }
  console.log('first', userToSend.profile[0].firstName)
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <label className={classes.label}>Change account details</label>
        <div className={classes.inputContainer}>
          <div className={classes.inputText}>
            {userToSend.profile[0].firstName !== '' ? 'First name' : ''}
          </div>
          <input
            className={classes.input}
            placeholder={user.profile?.[0].firstName || 'First name'}
            type="text"
            name="firstName"
            value={userToSend.profile[0].firstName}
            onChange={handleInput}
            disabled={lockFisrt}
          />
          <div
            onClick={() => handleLockEmail('fisrt')}
            className={classes.lock}
          >
            {lockFisrt ? <LockIcon /> : <UnlockIcon />}
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputText}>
            {userToSend.profile[0].lastName !== '' ? 'Last name' : ''}
          </div>
          <input
            className={classes.input}
            placeholder={user.profile?.[0].lastName || 'Last name'}
            type="text"
            name="lastName"
            value={userToSend.profile[0].lastName}
            onChange={handleInput}
            disabled={lockLast}
          />
          <div onClick={() => handleLockEmail('last')} className={classes.lock}>
            {lockLast ? <LockIcon /> : <UnlockIcon />}
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputText}>
            {userToSend.profile[0].additionalInfo[0].birthday !== ''
              ? 'Birthday'
              : ''}
          </div>
          <input
            className={classes.input}
            placeholder={
              user.profile?.[0]?.additionalInfo?.[0]?.birthday || 'Birthday'
            }
            type="text"
            name="birthday"
            ref={ref}
            onChange={handleInput}
            value={userToSend.profile[0].additionalInfo.birthday}
            onFocus={() => (ref.current.type = 'date')}
            onBlur={() => (ref.current.type = 'text')}
            disabled={lockBirthday}
          />

          <div
            onClick={() => handleLockEmail('birthday')}
            className={classes.lock}
          >
            {lockBirthday ? <LockIcon /> : <UnlockIcon />}
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputText}>
            {userToSend.profile[0].additionalInfo[0].phoneNumber !== ''
              ? 'Phone number'
              : ''}
          </div>
          <input
            className={classes.input}
            placeholder={
              user.profile?.[0]?.additionalInfo?.[0]?.phoneNumber ||
              'Phone Number'
            }
            type="text"
            name="phoneNumber"
            value={userToSend.profile[0].additionalInfo.phoneNumber}
            onChange={handleInput}
            disabled={lockNumber}
          />
          <div
            onClick={() => handleLockEmail('number')}
            className={classes.lock}
          >
            {lockNumber ? <LockIcon /> : <UnlockIcon />}
          </div>
        </div>
        <div className={classes.submitContainer}>
          <button className={classes.submit}>Submit</button>
        </div>
      </form>

      <form onSubmit={handlePasswordSubmit} className={classes.form}>
      <label className={classes.label}>Change password</label>
        <div className={classes.inputContainer}>
          <div className={classes.inputText}>
            {passwordChange.password !== '' ? 'Password' : ''}
          </div>
          <input
            className={classes.input}
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={passwordChange.password}
            onChange={handlePasswordInput}
          />{' '}
          <div
            onClick={() => handleLockEmail('password')}
            className={classes.eye}
          >
            {showPassword ? <ShowIcon /> : <NoShowIcon />}
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputText}>
            {passwordChange.confirmPassword !== '' ? 'Confirm password' : ''}
          </div>
          <input
            className={classes.input}
            placeholder="Confirm password"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={passwordChange.confirmPassword}
            onChange={handlePasswordInput}
          />
          <div
            onClick={() => handleLockEmail('confirmPassword')}
            className={classes.eye}
          >
            {showConfirmPassword ? <ShowIcon /> : <NoShowIcon />}
          </div>
        </div>

        <div className={classes.submitContainer}>
          <button className={classes.submit}>Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Profile
