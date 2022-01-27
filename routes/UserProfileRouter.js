// 引用 passport
const passport = require('passport')

module.exports = (app) => {
  function auth(req, res, next) {
    if (req.session.User) {
    console.log('authenticated')
    next()
    } else {
    console.log('not authenticated')
    return res.redirect('/login')
    }
  }
    const App = require("../controllers/UserProfileController");
    app.get("/register", App.getregister);
    app.post("/register", App.register);
    app.get("/login", App.getlogin);
    // 加入 middleware，驗證 request 登入狀態
    app.post("/login", App.login, auth, passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login'
    })
    );
    app.get("/user", auth, App.findOne);
    app.get("/logout", App.logout);
  }