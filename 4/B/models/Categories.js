 
'use strict';
var bookshelf = require('../bookshelf');
var Contact = bookshelf.Model.extend({
    tableName: 'categories',
});
module.exports = Contact;