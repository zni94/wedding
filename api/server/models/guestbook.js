module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "guestbook",
    {
      guestComment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false,
    }
  );
};
