module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "attendance",
        {
            kind: { // bride and groom
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: { // user name
                type: DataTypes.STRING,
                allowNull: false,
            },
            contact: { // user contact
                type: DataTypes.STRING,
                allowNull: false,
            },
            attendance: { // user attendance (Y/N)
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    );
};
