const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (name,alias,password,) values (? , ? , ? )`,
      [user.name, user.alias, user.password]
    );
  }

  update(id, user) {
    return this.connection.query(
      `update ${UserManager.table} set ? where id = ?`,
      [user, id]
    );
  }
}

module.exports = UserManager;
