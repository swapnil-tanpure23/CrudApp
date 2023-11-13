# CrudApp
<h5>Generic Database Proxy</h5>h5>
<h2>Overview:</h2>h2>
The Generic Database Proxy is a versatile REST API designed to handle CRUD (Create, Read, Update, Delete) operations on a SQL database without prior knowledge of the database schema. The project is implemented in JavaScript using Node.js and leverages a chosen server framework (e.g., Express) along with a SQL database (e.g., SQLite) to provide a flexible and dynamic database interaction layer.

Features
Dynamic Schema Ingestion: The database proxy ingests schema files, allowing the system to create tables and add columns dynamically on every server startup. This enables adaptability to various database structures without manual intervention.

RESTful API Endpoints: The API provides standard CRUD operations mapped to RESTful endpoints:

POST /:collection for creating records
GET /:collection/:id for retrieving a record by ID
POST /:collection/:id for updating a record by ID
DELETE /:collection/:id for deleting a record by ID
Schema-Driven Operations: The API automatically checks for the existence of tables specified in the schema and creates or adds columns if not detected. This ensures that database operations align with the provided schema.

Choice of SQL Flavor: The project supports various SQL flavors, and you can configure it to work with databases like MySQL, Postgres, or use a local SQLite instance. The flexibility allows for easy integration with different SQL databases.
