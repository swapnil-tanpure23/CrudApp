const request = require('supertest');
const app = require('../src/server');

describe('CRUD operations', () => {
  // Adding test cases for CRUD operations 
  test('GET /users/:id should return a user by ID', async () => {
    const response = await request(app).get('/users/1');
    expect(response.statusCode).toBe(200);
   
  });
});

//i am just using only for 1 user i can add more like this but this is for testing purpose