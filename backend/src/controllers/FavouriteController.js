const models = require("../models");

class FavouriteController {
  static create = (req, res) => {
    const albumId = req.params.id;

    models.favourite
      .insert(albumId)
      .then(([result]) => {
        res.status(201).send({ ...albumId, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static getAll = (req, res) => {
    models.favourite
      .findFav()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static getOne = (req, res) => {
    const { id } = req.params;
    models.album
      .find(id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static newname = (req, res) => {
    const { id } = req.params;
    const album = req.body;

    models.album
      .update(id, album)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })

      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = FavouriteController;
