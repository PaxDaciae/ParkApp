// database: dbicsg2sn47ys4 ;
// admin_name: ParkApp_Admin ;
// admin_password: ParkAppPass00102@!@!&^@ ;
//

const IpAddress = "35.214.244.56";
const port = "3306";
const adminName = "umm4jx9oxglxd";
const dataBaseName = "dbicsg2sn47ys4";
const submittedPassword = '4)q4g3@_l*D#';

const numberOfSpaces = 25;
let values = [];
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const submittedPassword = 'acabbacass';

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : IpAddress,
    user     : adminName,
    password : submittedPassword,
    database : dataBaseName,
    connectionLimit: 10
})

// connection.connect(function(err){
//     if(err){ throw err} else {console.log("Connected!");}

function updateRow(ID, User, Comments){
    let shippedQuery = 'Update Parking_Sibiu_One set TIME = CURRENT_TIME()';
    if(User != null){
        shippedQuery += `,USER = "${User}"`;
    }
    if(Comments != null){
        shippedQuery += `,COMMENTS = "${Comments}"`
    }
    shippedQuery += `WHERE ID = "${ID}"`;

    console.log(shippedQuery)

    connection.query(`${shippedQuery}`), function(err, response, fields){
        if (err) throw err;
        return console.log(response);
    }
    connection.end();
}

function getRows(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Parking_Sibiu_One', (error, response) => {
            if (error) throw error;
            let targetObject = JSON.parse(JSON.stringify(response));
            // console.log(Object.values(targetObject));
            // Object.keys(targetObject).forEach(key => values.push(targetObject[key], "LALAL"))
            if(targetObject){
                resolve(targetObject);
            }else{
                resolve("error");
            }     
        })
        connection.end();
    })
}

function getNumberOfEmpty(object){
    let counterEmpty = 0;
    Object.keys(object).forEach(key => {
        // console.log(key, Object.values(object))
        if(object[key].USER == null){
            counterEmpty++
        }
        return counterEmpty;
    })
    return counterEmpty;
}
function getNumberOfOccupied(object){
    let counterFilled = 0
    Object.keys(object).forEach(key => {
        // console.log(key, Object.values(object))
        if(object[key].USER != null){
            counterFilled++
        }
    })
    return counterFilled;
}



// updateRow(10, "PH-77-AIM");

getRows().then(targetObject => {console.log("Empty:",getNumberOfEmpty(targetObject), targetObject[0].USER); console.log("Occupied:",getNumberOfOccupied(targetObject)); let spaces = getNumberOfOccupied(targetObject); console.log("spaces",spaces)})

// })



// connection.query('Update Parking_Sibiu_One set user = "IVAN", TIME = CURRENT_TIME() where id=1'), function(err, response, fields){
//     if (err) throw err;
//     return console.log(response);
// }
// connection.end();

// function claimSpot(Id, Name, Comment){
    
  
//     connection.query(`UPDATE 'Parking_Sibiu_One' SET 'USER'=${Name},'TIME'=CURRENT_TIME(),'COMMENTS'=${Comment} WHERE ID = ${Id? Id : }`), function(err, response){
//         if (err) throw err;
//         console.log("Outcome:", response);
//     };
//     connection.end();

// }

// connection.query("UPDATE `Parking_Sibiu_One` SET `USER`='Bob Builderul',`TIME`=CURRENT_TIME(),`COMMENTS`= 'He Builds' WHERE ID = '6'"), function(err, response){
//     if (err) throw err;
//     console.log("Outcome:", response);
// };
// connection.end();

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(submittedPassword, salt, function(err, hash) {
//         console.log("Salt:", salt)
//         console.log("Hash:", hash)
//         console.log("Hashed", submittedPassword, "+", salt, "--->", hash)
//     });
// });

// bcrypt.compare(submittedPassword, "$2b$10$5HWIMHVcPLj0N30iapTV/ONeeOMD4KpI2ZPArQxNAlgIviI7Y5ni6", function(err, result) {
//     console.log("COMPARE:", result)
// });

// function addUser(Name){

// }








// connection.query('SELECT * FROM Parking_Sibiu_One', (error, response) => {
//     if (error) throw error;
//     let targetObject = JSON.parse(JSON.stringify(response))
//     // console.log(Object.values(targetObject));
//     Object.keys(targetObject).forEach(key => values.push(targetObject[key], "LALAL"))
//     return values;
// })
// connection.end();