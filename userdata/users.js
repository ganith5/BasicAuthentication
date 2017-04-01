/**
 * Created by pavithraabhishek on 4/1/17.
 */

var users = [
    {"username": "pavithra", "password": "pavi1"},
    {"username": "user", "password": "password"}
]


var verifyUsers = function verifyCredentials(username, password) {
    console.log("2) Called verifyUsers....." + users);
    console.log("3) Username : " + username + "Pwd : " + password);
    var user = users.find(
        function(u){
        console.log("4) Username : " + u.username + " user.password = " + u.password);
        console.log("5) Matched~!");
        return u.username === username && u.password === password;
    });

    return user;
}

exports.verifyUsers = verifyUsers;
