const AbstractManager = require("./AbstractManager");

class FavouriteManager extends AbstractManager {
  static table = "favourite";

  insert(favourite) {
    return this.connection.query(
      `insert into ${FavouriteManager.table} (id) values (? )`,
      [favourite.id]
    );
  }

  update(id, favourite) {
    return this.connection.query(
      `update ${FavouriteManager.table} set ? where id = ?`,
      [favourite, id]
    );
  }
}

module.exports = FavouriteManager;
