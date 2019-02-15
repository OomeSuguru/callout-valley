'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Comment = loader.databese.define('comments', {
  commentId: {
    type: Sequelize
  }
})