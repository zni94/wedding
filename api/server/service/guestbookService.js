const sequelize = require("../models").sequelize;

// MySQL Connect
const {
    GuestBook, Sequelize: { Op },
} = require("../models");
sequelize.query("SET NAMES utf8");

module.exports = {
    api: {
        insert: (body, callback) => {
            GuestBook
                .create({
                    guestComment: body.guestComment
                })
                .then(data => {
                    callback(true);
                })
                .catch(err => {
                    throw err;
                });
        },
    }
};