const express = require('express'); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 5101; //Save the port number where your server will be listening


app.listen(port, () => { //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});


// The node-cron module is tiny task scheduler in pure JavaScript for node.js based on GNU crontab.
// This module allows you to schedule task in node.js using full crontab syntax.
// Generate schedule : https://crontab.guru/ 
const cron = require('node-cron');
cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});
