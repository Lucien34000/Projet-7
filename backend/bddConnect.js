const mysql = require('mysql');

console.log('Connexion à la base de données...');
let bddConnect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'groupomania_dev',
});
bddConnect.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = bddConnect;