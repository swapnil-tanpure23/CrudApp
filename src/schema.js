const fs = require('fs');

// building the database schema based on the schema file
const buildSchema = (schemaFile) => {
  const schema = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));

  // Iterating through collections in the schema and creating tables if not exists
  Object.keys(schema).forEach((collection) => {
    createTable(collection, schema[collection]);
  });
};

module.exports = { buildSchema };
