module.exports = function (app) {

  const comedianModel = require("../model/comedian/comedian.model.server.js");

  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const bcrypt = require("bcrypt-nodejs");

  passport.use('comedian', new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);


  app.get("/api/comedian/", findComedian);
  app.post("/api/comedian", createComedian);
  app.get("/api/comedian/all", findAllComedians);
  app.get("/api/comedian/:cid", findComedianById);
  app.put("/api/comedian/:cid", updateComedian);
  app.delete("/api/comedian/:cid", deleteComedian);
  app.post ('/api/comedian/register', register);
  app.post  ('/api/comedian/login', passport.authenticate('comedian'), login);
  app.post('/api/comedian/logout', logout);
  app.post ('/api/comedian/loggedin', loggedin);

  function serializeUser(comedian, done) {
    done(null, comedian);
  }

  function deserializeUser(comedian, done) {
    comedianModel
      .findComedianById(comedian._id)
      .then(
        function(comedian){
          done(null, comedian);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    comedianModel
      .findComedianByUsername(username)
      .then(
        function(comedian) {
          if(comedian.username === username &&
            bcrypt.compareSync(password, comedian.password)) {
            return done(null, comedian);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function login(req, res) {
    const comedian = req.user;
    res.json(comedian);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register (req, res) {
    const comedian = req.body;
    comedian.password = bcrypt.hashSync(comedian.password);
    comedianModel
      .createComedian(comedian)
      .then(
        function(comedian){
          if(comedian){
            req.login(comedian, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(comedian);
              }
            });
          }
        }
      );
  }

  function findAllComedians(req, res) {
    comedianModel
      .findAllComedians()
      .then(function (comedians){
        res.json(comedians);
      });
  }

  function findComedianById(req, res) {
    const comedianId = req.params['cid'];
    comedianModel
      .findComedianById(comedianId)
      .then(function (comedian){
        res.json(comedian);
      });
  }

  function findComedian(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
    if(username && password) {
      comedianModel
        .findComedianByCredentials(username, password)
        .then(function (comedian) {
          res.json(comedian);
        });
    } else if(username) {
      comedianModel
        .findComedianByUsername(username)
        .then(function (comedian) {
          res.json(comedian);
        });
    }
  }

  function createComedian(req, res) {
    const comedian = req.body;
    comedianModel
      .createComedian(comedian)
      .then(function (comedian) {
        res.json(comedian);
      });
  }

  function updateComedian(req, res) {
    const comedianId = req.params['cid'];
    const comedian = req.body;
    comedianModel
      .updateComedian(comedianId, comedian)
      .then(function (comedian) {
        res.json(comedian);
      });
  }

  function deleteComedian(req, res) {
    const comedianId = req.params['cid'];
    comedianModel
      .deleteComedian(comedianId)
      .then(function () {
        res.json();
      });
  }

};
