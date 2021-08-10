'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tag extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Product}) {
            // define association here
            this.belongsToMany(Product, {
                through: {
                    model: "ProductTag",
                    unique: false,
                },
            });

        }
    };
    Tag.init({
        tag_id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        tag_name: {type: DataTypes.STRING}
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Tag",
    });
    return Tag;
};