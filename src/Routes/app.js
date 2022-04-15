const FS = require('fs')

exports.app =  function (res) {
    FS.readFile('./src/Views/app.html', (err, data) => {
      res.setHeader('content-type', 'text/html');
      res.statuscode = 200;
      if (err)
         console.log(err);
      else
         res.write(data);
      res.end();
   });
}