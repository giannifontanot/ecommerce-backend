const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
      product_id:{
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: false,
          autoIncrement: false,
      },
      tag_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: false,
          autoIncrement: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
