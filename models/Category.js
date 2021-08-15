'use strict';
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}


Category.init({
    category_id: {type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
    category_name: {type: DataTypes.STRING, allowNull: false}
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Category",
});

module.exports = Category;
