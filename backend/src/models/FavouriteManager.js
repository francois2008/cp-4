const AbstractManager = require("./AbstractManager");

class FavouriteManager extends AbstractManager {
  static table = "favourite";

  insert(albumId) {
    return this.connection.query(
      `insert into ${FavouriteManager.table} (album_id) values (?)`,
      [albumId]
    );
  }

  findFav() {
    return this.connection.query(
      `select * from album inner join ${FavouriteManager.table} on album.id_album = ${FavouriteManager.table}.album_id`,
      []
    );
  }
}

module.exports = FavouriteManager;
