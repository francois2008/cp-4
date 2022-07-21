const models = require("../models");

class TrackController {
  static create = (req, res) => {
    const track = req.body;
    const { id } = req.params;

    models.track
      .insert(track, id)
      .then(([result]) => {
        res.status(201).send({ ...track, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    const { id, trackId } = req.params;
    models.track
      .delete(id, trackId)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static getAll = (req, res) => {
    const { id } = req.params;
    models.track
      .findAll(id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}
module.exports = TrackController;
