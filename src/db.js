const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');


// creating a table if not exists
const createTable = (collection, schema) => {
  const columns = Object.entries(schema).map(([columnName, columnType]) => `${columnName} ${columnType}`).join(', ');
  const query = `CREATE TABLE IF NOT EXISTS ${collection} (${columns})`;
  
  db.run(query, (err) => {
    if (err) {
      console.error(`Error creating table ${collection}: ${err.message}`);
    } else {
      console.log(`Table ${collection} created successfully.`);
    }
  });
};

// inserting data into a table
const insertData = (collection, data) => {
  const columns = Object.keys(data).join(', ');
  const values = Object.values(data).map(value => `'${value}'`).join(', ');
  const query = `INSERT INTO ${collection} (${columns}) VALUES (${values})`;

  return new Promise((resolve, reject) => {
    db.run(query, function (err) {
      if (err) {
        console.error(`Error inserting data into ${collection}: ${err.message}`);
        reject(err.message);
      } else {
        console.log(`Row added to ${collection} with ID ${this.lastID}`);
        resolve({ id: this.lastID });
      }
    });
  });
};

// geting a row from a table by ID
const getRow = (collection, id) => {
  const query = `SELECT * FROM ${collection} WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.get(query, [id], (err, row) => {
      if (err) {
        console.error(`Error getting row from ${collection}: ${err.message}`);
        reject(err.message);
      } else {
        resolve(row);
      }
    });
  });
};

// updating a row in a table by ID
const updateRow = (collection, id, data) => {
  const updates = Object.entries(data).map(([key, value]) => `${key} = '${value}'`).join(', ');
  const query = `UPDATE ${collection} SET ${updates} WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.run(query, [id], function (err) {
      if (err) {
        console.error(`Error updating row in ${collection}: ${err.message}`);
        reject(err.message);
      } else {
        console.log(`Row updated in ${collection} with ID ${id}`);
        resolve({ id });
      }
    });
  });
};

// deleting a row from a table by ID
const deleteRow = (collection, id) => {
  const query = `DELETE FROM ${collection} WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.run(query, [id], function (err) {
      if (err) {
        console.error(`Error deleting row from ${collection}: ${err.message}`);
        reject(err.message);
      } else {
        console.log(`Row deleted from ${collection} with ID ${id}`);
        resolve({ id });
      }
    });
  });
};

module.exports = { createTable, insertData, getRow, updateRow, deleteRow };
