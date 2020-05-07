// Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.

//  >node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

// Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)

// request function request(uri, options, callback)

const fs = require('fs')
const request = require('request');


const fetcher = ((url, download) => {
  request(url, (error, response, body) => {
    if (error) {
  console.log('Error Message:', error); // Print the error if one occurred
    }
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(download, body, 
  function (err) {
    if (err) throw err;
    fs.stat('./index.html', function(err, stats) {
      if (err) throw err;
      console.log(`Downloaded and saved ${stats.size} bytes to ${download}`);//if error is true throw err
    });
  })
})
});


fetcher(process.argv.slice(2)[0], process.argv.slice(2)[1])

