const express = require('express');
const bodyParser = require('body-parser');
const { createTable, insertData, getRow, updateRow, deleteRow } = require('./db');
const { buildSchema } = require('./schema');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Ingest schema files and build DB schema on server startup
const schemaFile = './schema/example.json';
buildSchema(schemaFile);

// endpoints
app.post('/:collection', async (req, res) => {
  const result = await insertData(req.params.collection, req.body);
  res.json(result);
});

app.get('/:collection/:id', async (req, res) => {
  const result = await getRow(req.params.collection, req.params.id);
  res.json(result);
});

app.post('/:collection/:id', async (req, res) => {
  const result = await updateRow(req.params.collection, req.params.id, req.body);
  res.json(result);
});

app.delete('/:collection/:id', async (req, res) => {
  const result = await deleteRow(req.params.collection, req.params.id);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
