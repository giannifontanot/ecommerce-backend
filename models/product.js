'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Product.init({
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        product_name: {type: DataTypes.STRING, allowNull: false},
        price: {type: DataTypes.DECIMAL, allowNull: false, isDecimal: true},
        stock: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 10, isNumeric: true},
        category_id: {type: DataTypes.INTEGER, references: {model: Category, key: 'id'}}
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};