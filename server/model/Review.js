const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const { v4: uuidv4 } = require('uuid');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.UUID(36),
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  employeeId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Employee',
      key: 'id',
    },
  },
});

module.exports = Review;