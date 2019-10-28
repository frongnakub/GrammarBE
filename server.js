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

app.get('/pretest1', cors(), (req, res) => {
  console.log("Fetching questions")
 
  const connection = getConnection()

  connection.query('SELECT * FROM Question WHERE Test_TestNo = 1', 
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

app.get('/pretest2', cors(), (req, res) => {
  console.log("Fetching questions")
 
  const connection = getConnection()

  connection.query('SELECT * FROM Question WHERE Test_TestNo = 2', 
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

app.get('/testNo', cors(), (req, res) => {
  console.log("Fetching questions")
 
  const connection = getConnection()

  connection.query('SELECT * FROM UserTestAnswer', 
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

app.get('/results1/(:username)', cors(), (req, res) => {
  console.log("Fetching results")
  console.log(req.params.username)
  const connection = getConnection()

  connection.query('SELECT Question_QuestionNo, Answer, Results, LessonName FROM UserTestAnswer ua JOIN User u on ua.UserTest_UserNo = u.UserNo join Question q on ua.Question_QuestionNo = q.QuestionNo join Lesson l on q.Lesson_LessonNo = l.LessonNo WHERE u.Username = '+req.params.username, 
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

app.get('/results/(:username)', cors(), (req, res) => {
  console.log("Fetching results")
  console.log(req.params.username)
  const connection = getConnection()

  connection.query('SELECT COUNT(Results) as Correct FROM UserTestAnswer ua JOIN User u on ua.UserTest_UserNo = u.UserNo WHERE Results = "Correct" AND UserTest_TestNo = 1 AND u.Username = '+req.params.username, 
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

app.get('/resultLesson/(:username)', cors(), (req, res) => {
  console.log("Fetching results")
  console.log(req.params.username)
  const connection = getConnection()

  connection.query('SELECT QuestionNo, LessonName FROM UserTestAnswer ua JOIN User u on ua.UserTest_UserNo = u.UserNo JOIN Question q on ua.Question_QuestionNo = q.QuestionNo JOIN Lesson l on q.Lesson_LessonNo = l.LessonNo WHERE Results = "Wrong" AND UserTest_TestNo = 1 AND u.Username = '+req.params.username, 
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

app.get('/resultLesson2/(:username)', cors(), (req, res) => {
  console.log("Fetching results")
  console.log(req.params.username)
  const connection = getConnection()

  connection.query('SELECT QuestionNo, LessonName FROM UserTestAnswer ua JOIN User u on ua.UserTest_UserNo = u.UserNo JOIN Question q on ua.Question_QuestionNo = q.QuestionNo JOIN Lesson l on q.Lesson_LessonNo = l.LessonNo WHERE Results = "Wrong" AND UserTest_TestNo = 2 AND u.Username = '+req.params.username, 
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


// app.get('/resultI/(:username)', cors(), (req, res) => {
//   console.log("Fetching results")
//   console.log(req.params.username)
//   const connection = getConnection()

//   connection.query('SELECT COUNT(Results) as Incorrect FROM UserTestAnswer ua JOIN User u on ua.UserTest_UserNo = u.UserNo WHERE Results = "Wrong" AND UserTest_TestNo = 1 AND u.Username = '+req.params.username, 
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

// app.get('/results2/(:username)', cors(), (req, res) => {
//   console.log("Fetching results")
//   console.log(req.params.username)
//   const connection = getConnection()

//   connection.query('SELECT COUNT(Results) as Correct FROM UserTestAnswer ua JOIN User u on ua.UserTest_UserNo = u.UserNo WHERE Results = "Correct" AND UserTest_TestNo = 2 AND u.Username = '+req.params.username, 
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

// app.get('/resultII/(:username)', cors(), (req, res) => {
//   console.log("Fetching results")
//   console.log(req.params.username)
//   const connection = getConnection()

//   connection.query('SELECT COUNT(Results) as Incorrect FROM UserTestAnswer ua JOIN User u on ua.UserTest_UserNo = u.UserNo WHERE Results = "Wrong" AND UserTest_TestNo = 2 AND u.Username = '+req.params.username, 
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

app.get('/presentSimple', cors(), (req, res) => {
  console.log("Getting detail of present simple.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 16', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/presentContinuous', cors(), (req, res) => {
  console.log("Getting detail of present continuous.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 17', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/presentPerfect', cors(), (req, res) => {
  console.log("Getting detail of present perfect.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 18', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/presentPerfectContinuous', cors(), (req, res) => {
  console.log("Getting detail of present perfect continuous.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 19', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/pastSimple', cors(), (req, res) => {
  console.log("Getting detail of past simple.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 20', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/pastContinuous', cors(), (req, res) => {
  console.log("Getting detail of past continuous.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 21', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/pastPerfect', cors(), (req, res) => {
  console.log("Getting detail of past perfect.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 22', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/pastPerfectContinuous', cors(), (req, res) => {
  console.log("Getting detail of past perfect continuous.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 23', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/futureSimple', cors(), (req, res) => {
  console.log("Getting detail of future simple.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 24', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/futureContinuous', cors(), (req, res) => {
  console.log("Getting detail of future continuous.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 25', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/futurePerfect', cors(), (req, res) => {
  console.log("Getting detail of future perfect.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 26', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/futurePerfectContinuous', cors(), (req, res) => {
  console.log("Getting detail of future perfect continuous.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 27', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/article', cors(), (req, res) => {
  console.log("Getting detail of article.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 4', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/singularPlural', cors(), (req, res) => {
  console.log("Getting detail of singular and plural.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 5', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/pronoun', cors(), (req, res) => {
  console.log("Getting detail of pronoun.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 6', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/preposition', cors(), (req, res) => {
  console.log("Getting detail of preposition.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 7', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/auxiliary', cors(), (req, res) => {
  console.log("Getting detail of auxiliary.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 8', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/adverb', cors(), (req, res) => {
  console.log("Getting detail of adverb.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 9', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/conjunction', cors(), (req, res) => {
  console.log("Getting detail of conjunction.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 10', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/gerund', cors(), (req, res) => {
  console.log("Getting detail of gerund and infinitive.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 11', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/participle', cors(), (req, res) => {
  console.log("Getting detail of participle.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 12', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/comparison', cors(), (req, res) => {
  console.log("Getting detail of comparison.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 13', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/active', cors(), (req, res) => {
  console.log("Getting detail of active and passive.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 14', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/ifclause', cors(), (req, res) => {
  console.log("Getting detail of if-clause.")
 
  const connection = getConnection()

  connection.query('SELECT * FROM LessonDetail WHERE Lesson_LessonNo = 15', 
  function (error, rows, fields) {
      if (error) { 
          console.log(error) 
          res.sendStatus(500)
          throw error
      };
      console.log("We get all details.")
      res.json(rows)
  })
  res.setHeader('Access-Control-Allow-Origin', '*');
})

app.get('/presentSimpleExercise', cors(), (req, res) => {
  console.log("Fetching questions")
 
  const connection = getConnection()

  connection.query('SELECT * FROM Question WHERE Test_TestNo = 3', 
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

app.get('/presentContinuousExercise', cors(), (req, res) => {
  console.log("Fetching questions")
 
  const connection = getConnection()

  connection.query('SELECT * FROM Question WHERE Test_TestNo = 4', 
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

app.get('/presentPerfectExercise', cors(), (req, res) => {
  console.log("Fetching questions")
 
  const connection = getConnection()

  connection.query('SELECT * FROM Question WHERE Test_TestNo = 5', 
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

app.get('/presentPerfectContinuousExercise', cors(), (req, res) => {
  console.log("Fetching questions")
 
  const connection = getConnection()

  connection.query('SELECT * FROM Question WHERE Test_TestNo = 6', 
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
  console.log(req.body.userAnswer)
  console.log(req.body.results)

  const connection = getConnection()

  connection.query(
    'INSERT INTO UserTestAnswer(UserTest_UserNo,UserTest_TestNo,Question_QuestionNo,Answer,Results) VALUES (' + req.body.userNo + ',' + req.body.testNo + ',' + req.body.questionNo + ',"' + req.body.userAnswer + '","' + req.body.results + '")',
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

app.listen(port, function () {
//localhost:3003
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