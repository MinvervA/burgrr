'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    product_name: DataTypes.STRING,
    product_image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    isDelete: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};