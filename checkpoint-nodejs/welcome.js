const fs = require('fs');

fs.appendFile('./welcome.txt',"Hello Node", function(err){
    if (err) {
        console.log(err);
    }
})

console.log('file saved');