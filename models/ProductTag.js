'use strict';
const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class ProductTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product, Tag}) {
        // define association here

    }
}

ProductTag.init({
    producttag_id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    product_id: {type: DataTypes.INTEGER, references: {model: 'Product', key: 'product_id'}},
    tag_id: {type: DataTypes.INTEGER, references: {model: 'Tag', key: 'tag_id'}},
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ProductTag',
});
module.exports = ProductTag;