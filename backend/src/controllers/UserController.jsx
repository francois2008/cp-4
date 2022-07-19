const models = require("../models");

class UserController {
  static create = (req, res) => {
    const user = req.body;
    const { id } = req.params;

    models.user
      .insert(user, id)
      .then(([result]) => {
        res.status(201).send({ ...user, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    const { id, userId } = req.params;
    models.user
      .delete(id, userId)
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
    models.user
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
module.exports = UserController;
