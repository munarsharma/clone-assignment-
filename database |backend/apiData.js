// const express = require('express');
// const axios = require('axios');
// const pgp = require('pg-promise')({});
// const db = pgp('postgres://localhost:5432/userlist');
//
// const app = express();
//
// app.get('/getdata/:id', function (req, res) {
//   if (!req.params.id) {
//     res.status(500);
//     res.send({ Error: 'No ID' });
//   }
//
//   axios.get(
//     // here I am using JSONPlaceholder API (Fake Online REST API for prototyping)
//     { url: 'https://jsonplaceholder.typicode.com/posts/' + req.params.id },
//     function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         // get data from body ... e.g. title
//         const data = JSON.parse(body);
//         const title = data.title || '';
//
//         // store in Postgresql
//         pg.connect(
//           connectionString,
//           (err, client, done) => {
//             done();
//             // Handle connection errors
//             if (err) {
//               console.log(err);
//               return res.status(500).json({ success: false, data: err });
//             }
//             // SQL Query > Insert Data
//             client.query('INSERT INTO titles(id, title) values($1, $2)', [
//               req.params.id,
//               title,
//             ]);
//
//             res.json({ title: title });
//           }
//         );
//       }
//     }
//   );
// });
