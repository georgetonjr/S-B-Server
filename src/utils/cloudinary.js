const cloudinary = require('cloudinary').v2;
const config = require('../config/config.json');

cloudinary.config({
  cloud_name: config.CLOUDINARY.CLOUDINARY_NAME,
  api_key: config.CLOUDINARY.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY.CLOUDINARY_API_SECRET,
});

module.exports = { cloudinary };