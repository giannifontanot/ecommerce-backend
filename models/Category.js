'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Product}) {
            // define association here
            this.belongsTo(Product, {foreignKey:'category_id'});
        }
    };
    Category.init({
        category_id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        category_name: {type: DataTypes.STRING, allowNull: false}
    }, {
        sequelize,
        modelName: 'Catego',
        tableName: 'CATEGORIES',
    });
    return Category;
};