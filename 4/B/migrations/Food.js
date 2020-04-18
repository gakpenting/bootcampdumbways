'use strict';
exports.up = function (knex) {
    return knex.schema
        .createTableIfNotExists('food', function (table) {
            table.increments('id').primary();
            table.text('name');
            table.text('stok');
            table.text('image');
            table.text('deskripsi');
            table.text('category_id');
        });
};
exports.down = function (knex) {
    return knex.schema
        .dropTable('channel');
};