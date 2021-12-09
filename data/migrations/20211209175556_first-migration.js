
exports.up = async function(knex) {
  await knex.schema
    .createTable('zoos')
    .createTable('animals')
    .createTable()
    .createTable()
}

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists('zoos')
}
