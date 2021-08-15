'use strict';
const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');
    class Product extends Model {}

    Product.init({
        product_id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        product_name: {type: DataTypes.STRING, allowNull: false},
        price: {type: DataTypes.DECIMAL, allowNull: false, isDecimal: true},
        stock: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 10, isNumeric: true},
        category_id: {type: DataTypes.INTEGER, references: {model: 'Category', key: 'category_id'}}
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Product",
    });
module.exports =  Product;

