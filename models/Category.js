'use strict';
const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Product}) {
            // define association here
            this.hasMany(Product, {
                foreignKey: 'category_id'
            });
        }
    }

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
