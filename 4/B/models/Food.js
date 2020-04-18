 
'use strict';
var bookshelf = require('../bookshelf');
var Contact = bookshelf.Model.extend({
    tableName: 'food',
});
module.exports = Contact;