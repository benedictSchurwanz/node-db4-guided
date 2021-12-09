
exports.up = async function(knex) {
  await knex.schema
    .createTable('zoos')
    .createTable('species')
    .createTable('animals')
    .createTable('zoo_animals')
}

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
}
