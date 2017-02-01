const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Fans'
    }, {
      id: '2',
      name: 'Anj',
      room: 'React Anon'
    }, {
      id: '3',
      name: 'Collin',
      room: 'Node Fans'
    }];
  });

  describe('#addUser', () => {
    it('should add new user', () => {
      var users = new Users();
      var user = {
        id: '123',
        name: 'Collin',
        room: 'Node Fans'
      };
      var resUsers = users.addUser(user.id, user.name, user.room);
      expect(users.users).toEqual([user]);
    });
  }); 

  describe('#removeUser', () => {
    it('should remove a user', () => {
      var user = users.removeUser('1');
      var userList = users.getUserList('Node Fans')
      expect(userList.includes('Mike')).toBe(false)
    });

    it('should return the removed user', () => {
      var user = users.removeUser('2');
      expect(user).toEqual({id: '2', name: 'Anj', room: 'React Anon'})
    });

    it('should not remove user', () => {
      var userId = '4';
      var user = users.removeUser(userId);
      expect(user).toNotExist();
    })
  });

  describe('#getUser', () => {
    it('should return a user', () => {
      var user = users.getUser('3');
      expect(user).toEqual({id: '3', name: 'Collin', room: 'Node Fans'})
    });

    it('should not alter the users list', () => {
      var user = users.getUser('2');
      var userList = users.getUserList('React Anon');
      expect(userList.includes('Anj')).toBe(true);
    });

    it('should not find user', () => {
      var user = users.getUser('4');
      expect(user).toNotExist();
    });
  });

  describe('#getUserList', () => {
    it('should return names for node fans', () => {
      var userList = users.getUserList('Node Fans');
      expect(userList).toEqual(['Mike', 'Collin']);
    });

    it('should return names for react anon', () => {
      var userList = users.getUserList('React Anon');
      expect(userList).toEqual(['Anj']);
    });
  });
});