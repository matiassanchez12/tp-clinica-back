var express = require("express");
var router = express.Router();
var cloudinary = require("cloudinary");

router.delete("/", async function (req, res, next) {
  const id_image = req.params;

  await cloudinary.v2.uploader.destroy(id_image);

  res.status(200).send({ message: "Imagen eliminada" });
});

module.exports = router;
