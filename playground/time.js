// Jan 1st 1970 00:00:00 am UTC

// JS timestamps stored in milliseconds 
// 1000 = 1 second 

var moment = require('moment');

var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('MMM Do, YYYY'));

