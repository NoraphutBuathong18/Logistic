# Logistics API Server
A Node.js and Express-based REST API server designed to manage and expose structured logistics data from an Oracle Database for analytics and business intelligence systems such as Power BI.

PowerBi: https://app.powerbi.com/view?r=eyJrIjoiYTEzYWZhMjMtYWRmNi00MDQwLWFmMzQtY2VjOTczZTVkMzhiIiwidCI6ImZkMjA2NzE1LTc1MDktNGFlNS05Yjk2LTc2YmI5Nzg4NmE4NCIsImMiOjEwfQ%3D%3D

## Key Achievements & Responsibilities

- Designed and implemented a RESTful API server for managing logistics data
- Designed relational database schema in Oracle DB to support structured logistics data
- Wrote SQL queries using SELECT, JOIN, GROUP BY for analytical and reporting purposes
- Aggregated and exposed data endpoints for integration with Power BI dashboards
- Ensured data integrity using primary keys, foreign keys, and relational constraints
- Structured API endpoints to support scalable data retrieval and integration with external systems

## Features

- RESTful API endpoints for comprehensive logistics management.
- Robust database connection via `oracledb`.
- Cross-Origin Resource Sharing (CORS) enabled for frontend integration.
- Configurable via environment variables.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: Oracle DB (primary), MySQL, PostgreSQL supported via dependencies.
- **Other**: `dotenv` for environment management, `cors` for API access control.

## Installation

1. Clone the repository and navigate to the project root:
   ```bash
   cd Logistics-root
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on your database configuration requirements. Ensure you have the following variables (example):
   ```
   PORT=3000
   DB_HOST=localhost
   DB_PORT=1521
   DB_SERVICE=xe
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Available Routes

The API base URL is `http://localhost:<PORT>/api`. 

- `/api/receipts` - Manage receipts
- `/api/customers` - Manage customer data
- `/api/employees` - Manage employee records
- `/api/deliveries` - Track and manage deliveries
- `/api/products` - Manage product inventory
- `/api/warehouses` - Manage warehouse locations and stock
- `/api/transports` - Manage transport methods and logistics
- `/api/schema` - Database schema operations
- `/api/all` - Aggregate data operations

## License

ISC License
