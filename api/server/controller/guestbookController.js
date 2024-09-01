const guestbook = require("../service/guestbookService");

module.exports = {
    api: {
        // guestbook create
        insert: (req, resp) => {
            guestbook.api.insert(req.body, result => {
                resp.send(result);
            });
        },
    },
};