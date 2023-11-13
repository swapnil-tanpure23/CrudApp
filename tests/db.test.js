const { createTable, insertData, getRow, updateRow, deleteRow } = require('../src/db');

describe('Database operations', () => {
  // Adding test cases for database operations
  test('createTable should create a table', async () => {
    // Mock SQLite database connection 
    const mockDb = {
      run: jest.fn(),
    };

    // Mock schema
    const schema = {
      users: {
        id: 'INTEGER PRIMARY KEY',
        name: 'TEXT',
        email: 'TEXT',
      },
    };

    // Run
    createTable('users', schema.users, mockDb);

    // Verifying that expected query was executed or not
    expect(mockDb.run).toHaveBeenCalledWith(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)',
      expect.any(Function)
    );
  });


});

