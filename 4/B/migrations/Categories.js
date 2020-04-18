'use strict';
exports.up = function (knex) {
    return knex.schema
        .createTableIfNotExists('categories', function (table) {
            table.increments('id').primary();
            table.text('name');
           
            ;
        });
};
exports.down = function (knex) {
    return knex.schema
        .dropTable('categories');
};