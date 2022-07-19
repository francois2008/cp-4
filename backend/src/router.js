const express = require("express");

const {
  TrackController,
  AlbumController,
  UserController,
} = require("./controllers");

const router = express.Router();

router.post("/albums/:id/tracks", TrackController.create);
router.delete("/albums/:id/tracks/:trackId", TrackController.delete);
router.get("/albums/:id/tracks", TrackController.getAll);

router.post("/albums", AlbumController.create);
router.get("/albums", AlbumController.getAll);
router.get("/albums/:id", AlbumController.getOne);
router.put("/albums/:id", AlbumController.newname);

router.post("/users", UserController.add);

module.exports = router;
