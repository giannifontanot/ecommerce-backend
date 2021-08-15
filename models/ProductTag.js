'use strict';
const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class ProductTag extends Model {
}

ProductTag.init({
    //producttag_id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    tag_id:     {type: DataTypes.INTEGER, references: {model: 'Tag',     key: 'tag_id',     primaryKey: true}},
    product_id: {type: DataTypes.INTEGER, references: {model: 'Product', key: 'product_id', primaryKey: true}},
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ProductTag',
});
module.exports = ProductTag;