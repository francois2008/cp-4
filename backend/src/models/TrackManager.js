const AbstractManager = require("./AbstractManager");

class TrackManager extends AbstractManager {
  static table = "track";

  insert(track, id) {
    return this.connection.query(
      `insert into ${TrackManager.table} (title,duration,position,album_id) values (? , ? , ? , ?)`,
      [track.title, track.duration, track.position, id]
    );
  }

  update(track) {
    return this.connection.query(
      `update ${TrackManager.table} set title = ? where id = ?`,
      [track.title, track.id]
    );
  }

  delete(id, trackId) {
    return this.connection.query(
      `delete from ${TrackManager.table} where id = ? and album_id = ?`,
      [trackId, id]
    );
  }

  findAll(id) {
    return this.connection.query(
      `select * from  ${TrackManager.table} where album_id = ? `,
      [id]
    );
  }
}

module.exports = TrackManager;
