var users;
users = [];
var user1;
user1 = { userName: 'anis', userId: 101 };
users.push(user1);
var user2;
user2 = { userName: 'rabu', userId: 102 };
users.push(user2);
var user3;
user3 = { userName: 'lucky', userId: 103 };
users.push(user3);
var getRequest;
getRequest = 'GET';
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler('GET');
