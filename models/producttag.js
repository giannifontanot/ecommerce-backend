'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductTag extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    ProductTag.init({
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        product_id: {type: DataTypes.INTEGER, refereces: {model: Product, key: 'id'}},
        tag_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ProductTag',
    });
    return ProductTag;
};