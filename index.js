var users = [];
var user1 = {
    id: 1,
    name: "abhishek",
    age: 21,
};
var user2 = {
    id: 2,
    name: "mohajan",
    age: 22,
};
users.push(user1);
users.push(user2);
var userInfo = function (user) {
    console.log("id: ".concat(user.id, ", name: ").concat(user.name, ", age: ").concat(user.age, " "));
};
users.forEach(function (user) { return userInfo(user); });
