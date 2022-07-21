const AbstractManager = require("./AbstractManager");

class AlbumManager extends AbstractManager {
  static table = "album";

  insert(album) {
    return this.connection.query(
      `insert into ${AlbumManager.table} (title,artist,released,category) values (? , ? , ? ,?)`,
      [album.title, album.artist, album.released, album.category]
    );
  }

  update(id, album) {
    return this.connection.query(
      `update ${AlbumManager.table} set ? where id = ?`,
      [album, id]
    );
  }
}

module.exports = AlbumManager;
