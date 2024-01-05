// database: dbicsg2sn47ys4 ;
// admin_name: ParkApp_Admin ;
// admin_password: ParkAppPass00102@!@!&^@ ;
//

const IpAddress = "35.214.244.56";
const port = "3306";
const adminName = "dbicsg2sn47ys4";
const dataBaseName = "dbicsg2sn47ys4";

const bcrypt = require('bcrypt');
const saltRounds = 10;
const submittedPassword = 'ParkAppPass00102@!@!&^@';


bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(submittedPassword, salt, function(err, hash) {
        console.log("Salt:", salt)
        console.log("Hash:", hash)
        console.log("Hashed", submittedPassword, "+", salt, "--->", hash)
    });
});