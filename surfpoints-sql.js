const fs = require('fs');
const pgp = require('pg-promise')();

const connectionOptions = {
  host: 'localhost',
  port: 5432,
  database: 'surfpoint_search',
  user: 'nakaz',
  password: null
}

const db = pgp(connectionOptions)

function sqlInsertion({region, continent, locality, location, spot_id}){
  return `INSERT INTO surfpoints VALUES(${spot_id}, '${location}', '${locality}', '${region}', '${continent}');`
}

fs.readFile('./surfpoints-complete.json', (err, file) => {
  if (err) {
    console.error(err)
  }

  JSON.parse(file).forEach((point) => {
    db.none("INSERT INTO surfpoints VALUES (${spot_id}, ${location}, ${locality}, ${region}, ${continent})", point)
      .then(() => {
        console.log('one inserted')
      });
    // fs.appendFile('./surfpoints-insert.sql', sqlInsertion(point), (err) => {
    //   if(err){
    //     console.error(err)
    //   }
    //   console.log('inserted')
    // })

  })


})
