const local_strategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

//function to create a new user when they want to register
function initialize(passport, get_user_email, get_user_Id) {

	//function to check and authenticate user
  const auth_user = async (email, password, done) => {
    const user = get_user_email(email)
	//if no user exist
    if (user == null) {
      return done(null, false, { message: 'Looks like your Email is wrong, Try again' })
    }

    try {

		//compare register password and login passwrd
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Looks like your Password is wrong, Try again.' })
      }
    } catch (error) {
      return done(error)
    }
  }

  passport.use(new local_strategy({ usernameField: 'email' }, auth_user))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, get_user_Id(id))
  })
}

module.exports = initialize