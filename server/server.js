const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const debug = require('debug')('ManageQuestion:server.js');
const http = require('http');

const port = normalizePort(process.env.PORT || '3003');
app.set('port', port);

app.use(morgan('combined'))

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors())

function getConnection(){
    return mysql.createConnection({
        host: '54.68.60.227',
        user: 'proj',
        password: 'Oui_plic2',
        database: 'GrammarBE2'
    })
}

const router = express.Router()
router.get('/messages', (req, res) => {
    console.log("Show some messages or whatever...")
    res.end()
})

app.use(router)

// app.get('/questions', cors(), (req, res) => {
//     console.log("Fetching questions")
   
//     const connection = getConnection()

//     connection.query('SELECT questionNo,question,testTypeName,lessonName,subLessonName,choices FROM Question q join Lesson l on q.Lesson_LessonNo = l.LessonNo join Test t on q.test_testno = t.testno join TestType tt on t.testType_TestTypeNo = tt.testTypeNo join SubLesson s on q.subLessonNo = s.subLessonNo join Choice c on q.questionNo = c.question_questionNo', 
//     function (error, rows, fields) {
//         if (error) { 
//             console.log(error) 
//             res.sendStatus(500)
//             throw error
//         };
//         console.log("I think we fetched successfully")
//         res.json(rows)
//     })
//     res.setHeader('Access-Control-Allow-Origin', '*');
// })

// app.get('/choices', cors(), (req, res) => {
//   console.log("Fetching questions")
 
//   const connection = getConnection()

//   connection.query('SELECT questionNo,choices,choiceType FROM Question q join Choice c on q.questionNo = c.question_questionNo', 
//   function (error, rows, fields) {
//       if (error) { 
//           console.log(error) 
//           res.sendStatus(500)
//           throw error
//       };
//       console.log("I think we fetched successfully")
//       res.json(rows)
//   })
//   res.setHeader('Access-Control-Allow-Origin', '*');
// })

app.get('/questions', cors(), (req, res) => {
  console.log("Fetching questions")
 
  const connection = getConnection()

  connection.query('SELECT * FROM Question', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("I think we fetched successfully")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/userData/(:username)', cors(), (req, res) => {
  console.log("Fetching profile")
  console.log(req.params.username)
  const connection = getConnection()

  connection.query('SELECT * FROM User WHERE Username = '+req.params.username, 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("I think we fetched successfully")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/userId/(:username)', cors(), (req, res) => {
  console.log("Fetching User Id")
  console.log(req.params.username)
  const connection = getConnection()

  connection.query('SELECT UserNo FROM User WHERE Username = '+req.params.username, 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("I think we fetched successfully")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from ROOT")
})

app.post('/users', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  
  console.log(req.body.username)
  console.log(req.body.password)
  
  const connection = getConnection()

  connection.query(
    "SELECT * From User WHERE Username = ? AND Password = ?",
    [username, password], function (err, row, field) {
      if (err) {
        console.log(err);
        res.send({ 'success': false, 'message': 'Could not connect to db'});
      }

      if (row.length > 0) {
        res.send({ 'success': true, 'user': username});
      }
      else {
        res.send({ 'success': false, 'message': 'Username or password is incorrect.'})
      }
    }
  )
})

app.post('/register', function(req, res, next) {
  console.log(req.body.username)
  console.log(req.body.password)
  console.log(req.body.name)
  console.log(req.body.surname)
  console.log(req.body.email)
  
  const connection = getConnection()

  connection.query(
    'INSERT INTO User(Username,Password,Name,Surname,Email) VALUES ("' + req.body.username + '","' + req.body.password + '","' + req.body.name + '","' + req.body.surname + '","' + req.body.email + '")',
      function (error, rows, fields) {
        if (error) { 
            console.log(error) 
            res.sendStatus(500)
            throw error
        };
        console.log("Register successfully")
        res.json(rows)
    }
  )
})

app.post('/answers', function(req, res, next) {
  console.log(req.body.userNo)
  console.log(req.body.testNo)
  console.log(req.body.questionNo)
  console.log(req.body.answer)
  
  const connection = getConnection()

  connection.query(
    'INSERT INTO UserTestAnswer(UserTest_UserNo,UserTest_TestNo,Question_QuestionNo,Answer) VALUES (' + req.body.userNo + ',' + req.body.testNo + ',' + req.body.questionNo + ',"' + req.body.answer + '")',
      function (error, rows, fields) {
        if (error) { 
            console.log(error) 
            res.sendStatus(500)
            throw error
        };
        console.log("Add successfully")
        res.json(rows)
    }
  )
})

//localhost:3003
app.listen(port, function () {
    console.log('Server running at http://localhost:' + port);
  });
  app.on('error', onError);
  app.on('listening', onListening);
  
  /**
   * Normalize a port into a number, string, or false.
   */
  
  function normalizePort(val) {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  
  /**
   * Event listener for HTTP server.js "error" event.
   */
  
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server.js "listening" event.
   */
  
  function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }