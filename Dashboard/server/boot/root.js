'use strict';

module.exports = function(server) {
    // Install a `/` route that returns server status
    const router = server.loopback.Router();
    const path = require("path");
    const index = path.join(__dirname, "../../client/index.html")
    router.get('/', (req, res) => {
        res.status(200).sendFile(index)
    });
    server.use(router);
};
