import express from 'express';
import User from '../models/User';
// import uuid from 'node-uuid';
let router = express.Router();
// let sessionMap = [];
// function sessionFind(sessionId) {
//   return sessionMap.find(function (item) {
//     return (item.sessionId === sessionId);
//   });
// }
// router.get('/', (req, res)=> {
//
//   User.find((err, data)=> {
//     res.send(data);
//   });
// });

router.post('/', (req, res)=> {
  User.findOne({
    username: req.body.username,
    password: req.body.password
  }, (err, data)=> {
    if (data!==null) {
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }

  });
});

module.exports = router;