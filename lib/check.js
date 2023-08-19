const fs = require('fs');
// const userResponse = require('./test.json')




fs.readFile('./lib/test.json', (err, data) => {
    if (err) throw err;
    // console.log(JSON.parse(data));
    const result = JSON.parse(data);
    // console.log(result[0].text);
    const check = result[0];
    console.log(check.text);
  });

// console.log(data);