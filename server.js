const express = require('express');
const fs = require('fs');
const sqlite = require('sql.js');

const filebuffer = fs.readFileSync('db/logs.sqlite3');

if (!filebuffer) {
    // generate new db file
    const newDb = new sqlite3.Database('db/logs.sqlite3');
    newDb.serialize(function() {
        newDb.run("CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT, type INTEGER NOT NULL, timestamp DATETIME NOT NULL, durationSeconds DATETIME, typeData TEXT)");
        newDb.run("INSERT INTO logs (key, value) VALUES (?, ?)", "counter", 0);
    });
}

const db = new sqlite.Database(filebuffer);

const app = express();

app.set('port', (process.env.API_PORT || 3001));

/*
     Log item
      id
      type: eat, sleep, poop
      timestamp (timestamp for poop, start time for eat and sleep)
      durationSeconds (used by eat and sleep) (units: seconds)
      typeData: {} json blob!

      (poop)
        {
            diaperType
        }
      (sleep)
        {

        }
      (eat)
        {
            isBoob (bool)
            side ('left', 'right')
            isFormula (bool)
            amount (mL)
        }
 */

const COLUMNS = [
  'type',
  'isPoop',
  'startTime',
  'endTime',
  'isBoob',
  'isRightBoob',
  'amount',
];

app.get('/api/food', (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    });
    return;
  }

  // WARNING: Not for production use! The following statement
  // is not protected against SQL injections.
  const r = db.exec(`
    select ${COLUMNS.join(', ')} from entries
    where description like '%${param}%'
    limit 100
  `);

  if (r[0]) {
    res.json(r[0].values);
  } else {
    res.json([]);
  }
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
