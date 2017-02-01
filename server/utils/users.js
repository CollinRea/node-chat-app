class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    let user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    let foundUser = this.getUser(id);
    if (foundUser) {
      let newUsersArray = this.users.filter((user) => user !== foundUser);
      this.users = newUsersArray;
    }
    return foundUser;
  }

  getUser(id) {
    let foundUser = this.users.find((user) => user.id === id);
    return foundUser;
  } 

  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};