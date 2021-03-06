'use strict';

var picturesController = require('./controllers/pictures-controller');

module.exports = (app) => {
    app.get('/', (req, res) => { res.send("This is GeoPic Deployed with Molly"); });
    app.post.apply(app, ['/api/pictures'].concat(picturesController.addPicture));
    app.get.apply(app, ['/api/pictures'].concat(picturesController.getPictures));
    app.get.apply(app, ['/api/pictures/:pictureId.jpg'].concat(picturesController.getPictureResource));
};
