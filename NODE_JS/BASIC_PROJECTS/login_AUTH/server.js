

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
  }
  
  //predefined module using express
  const express = require('express')
  const app = express()
 //predefined module to keep password and credential secure
  const bcrypt = require('bcrypt')
  //predefined module to keep user iteracted
  const passport = require('passport')
  //predefined module to display error messages
  const flash = require('express-flash')
  const session = require('express-session')
   //predefined module to logout user
  const methodOverride = require('method-override')
  
  const initialize_passport = require('./passport_config')

  initialize_passport(
	passport,

	//if entered email and username not same as one registered
	email => users.find(user => user.email === email),
	id => users.find(user => user.id === id)
  )
  
  //array stored users
  const users = []
  
  //using ejs syntax
  app.set('view-engine', 'ejs')
  app.use(express.urlencoded({ extended: false }))
  //use flash to display error
  app.use(flash())

  app.use(session({
	secret: process.env.SESSION_SECRET,
	//dont save variables if changed
	resave: false,
	saveUninitialized: false
  }))

  //use passport function from passport_config
  app.use(passport.initialize())
  //keep the session live and active
  app.use(passport.session())

  //use the method when user log out
  app.use(methodOverride('_method'))
  //create a route
  app.get('/', checkAuthenticated, (req, res) => {
	res.render('logout.ejs', { name: req.user.name })
  })
  //route for login page
//then once user registers we redirect them to login page
  app.get('/login', checkNotAuthenticated, (req, res) => {
	res.render('login.ejs')
  })
  
  //if user not authenticated keep in login
  //if user logged in no need to login again
  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
		//send message when fails in login info
	failureFlash: true
  }))
  
  //user cannot login without registering
  app.get('/register', checkNotAuthenticated, (req, res) => {
	res.render('register.ejs')
  })
  

  app.post('/register', checkNotAuthenticated, async (req, res) => {
	  //check is password is correct and 
		//await-> wait for it after password is obtained
		// keeping a security level of 10 
	try {
	  const hashedPassword = await bcrypt.hash(req.body.password, 10)	
	  //storing user details in variable array
	  users.push({
		id: Date.now().toString(),
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword
	  })
	  res.redirect('/login')
	} 
	//if user unable to login redirect to register page
	catch {
	  res.redirect('/register')
	}
  })
  
  //creating log out redirect once logged in
  app.delete('/logout', (req, res) => {
	req.logOut()
	res.redirect('/login')
  })
  

  //function to check if user registered
  //if user registered move to next page i.e login page
  function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
	  return next()
	}
  
	res.redirect('/login')
  }
  
  //check if user exist in page
  //function to check if user registered
  //if user not registered or logged in stay in same page
  function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
	  return res.redirect('/')
	}
	next()
  }
  //Listen for connections at port 5000
  app.listen(5000)