module.exports = function (app) {

  const criticModel = require("../model/critic/critic.model.server.js");

  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const bcrypt = require("bcrypt-nodejs");

  passport.use('critic', new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);


  app.get("/api/critic/", findCritic);
  app.post("/api/critic", createCritic);
  app.get("/api/critic/:crid", findCriticById);
  app.put("/api/critic/:crid", updateCritic);
  app.delete("/api/critic/:crid", deleteCritic);
  app.post ('/api/critic/register', register);
  app.post  ('/api/critic/login', passport.authenticate('critic'), login);
  app.post('/api/critic/logout', logout);
  app.post ('/api/critic/loggedin', loggedin);

  function serializeUser(critic, done) {
    done(null, critic);
  }

  function deserializeUser(critic, done) {
    criticModel
      .findCriticById(critic._id)
      .then(
        function(critic){
          done(null, critic);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    criticModel
      .findCriticByUsername(username)
      .then(
        function(critic) {
          if(critic.username === username &&
            bcrypt.compareSync(password, critic.password)) {
            return done(null, critic);
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
    const critic = req.user;
    res.json(critic);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register (req, res) {
    const critic = req.body;
    critic.password = bcrypt.hashSync(critic.password);
    criticModel
      .createCritic(critic)
      .then(
        function(critic){
          if(critic){
            req.login(critic, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(critic);
              }
            });
          }
        }
      );
  }

  function findCriticById(req, res) {
    const criticId = req.params['crid'];
    criticModel
      .findCriticById(criticId)
      .then(function (critic){
        res.json(critic);
      });
  }

  function findCritic(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
    if(username && password) {
      criticModel
        .findCriticByCredentials(username, password)
        .then(function (critic) {
          res.json(critic);
        });
    } else if(username) {
      criticModel
        .findCriticByUsername(username)
        .then(function (critic) {
          res.json(critic);
        });
    }
  }

  function createCritic(req, res) {
    const critic = req.body;
    criticModel
      .createCritic(critic)
      .then(function (critic) {
        res.json(critic);
      });
  }

  function updateCritic(req, res) {
    const criticId = req.params['crid'];
    const critic = req.body;
    criticModel
      .updateCritic(criticId, critic)
      .then(function (critic) {
        res.json(critic);
      });
  }

  function deleteCritic(req, res) {
    const criticId = req.params['crid'];
    criticModel
      .deleteCritic(criticId)
      .then(function () {
        res.json();
      });
  }

};
