
exports.up = async function(knex) {
  await knex.schema
    .createTable('zoos', table => {
      table.increments('zoo_id')
    })
    .createTable('species', table => {
      table.increments('species_id')
    })
    .createTable('animals', table => {
      table.increments('animal_id')
    })
    .createTable('zoo_animals', table => {
      table.increments('zoo_animal_id')
    })
}

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
}
