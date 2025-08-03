# Resource Management API

A complete CRUD backend server built with ExpressJS and TypeScript, featuring a resource management system with database persistence using Prisma ORM and comprehensive API documentation with Swagger.

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, Delete resources
- **Advanced Filtering**: Search by name, filter by category and status
- **TypeScript**: Fully typed codebase for better development experience
- **Database Integration**: SQLite database with Prisma ORM
- **RESTful API**: Clean and intuitive API endpoints
- **Error Handling**: Comprehensive error handling and validation
- **Interactive API Documentation**: Swagger UI for testing and documentation
- **OpenAPI 3.0 Specification**: Standard-compliant API documentation

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd problem5
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npm run setup
   ```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

The server will start on `http://localhost:3000`

## 📚 API Documentation

### Interactive Swagger UI
Access the interactive API documentation at: **http://localhost:3000/api-docs**

The Swagger UI provides:
- **Interactive Testing**: Test all API endpoints directly from the browser
- **Request/Response Examples**: See example requests and responses
- **Schema Documentation**: Complete data model documentation
- **Filtering**: Search and filter through available endpoints
- **Try It Out**: Execute API calls with real data

### API Documentation Features
- **OpenAPI 3.0 Specification**: Standard-compliant documentation
- **Request Validation**: Automatic validation of request bodies
- **Response Schemas**: Detailed response structure documentation
- **Error Handling**: Comprehensive error response documentation
- **Query Parameters**: Documented filtering and search options

## 📊 Database Management

### Generate Prisma Client
```bash
npm run db:generate
```

### Push Schema Changes
```bash
npm run db:push
```

### Run Migrations
```bash
npm run db:migrate
```

### Open Prisma Studio (Database GUI)
```bash
npm run db:studio
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000/api/resources
```

### 1. Create a Resource
**POST** `/api/resources`

**Request Body:**
```json
{
  "name": "Sample Resource",
  "description": "This is a sample resource",
  "category": "technology",
  "status": "active"
}
```

**Response:**
```json
{
  "id": "clx1234567890",
  "name": "Sample Resource",
  "description": "This is a sample resource",
  "category": "technology",
  "status": "active",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### 2. List Resources (with filters)
**GET** `/api/resources`

**Query Parameters:**
- `category` (optional): Filter by category
- `status` (optional): Filter by status
- `search` (optional): Search in name and description

**Examples:**
```
GET /api/resources
GET /api/resources?category=technology
GET /api/resources?status=active
GET /api/resources?search=sample
GET /api/resources?category=technology&status=active&search=sample
```

### 3. Get Resource by ID
**GET** `/api/resources/:id`

**Response:**
```json
{
  "id": "clx1234567890",
  "name": "Sample Resource",
  "description": "This is a sample resource",
  "category": "technology",
  "status": "active",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### 4. Update Resource
**PUT** `/api/resources/:id`

**Request Body:**
```json
{
  "name": "Updated Resource Name",
  "description": "Updated description",
  "category": "updated-category",
  "status": "inactive"
}
```

### 5. Delete Resource
**DELETE** `/api/resources/:id`

**Response:** `204 No Content`

## 🏗️ Project Structure

```
├── 📁 src/
│   ├── app.ts                 # Main Express application
│   ├── index.ts              # Server entry point
│   ├── config/
│   │   └── swagger.ts        # Swagger configuration
│   ├── routes/
│   │   └── resource.routes.ts # Resource API routes with Swagger docs
│   ├── controllers/
│   │   └── resource.controller.ts # Request/response handlers
│   ├── services/
│   │   └── resource.service.ts # Business logic layer
│   └── prisma/
│       └── client.ts         # Prisma client singleton
├── prisma/
│   └── schema.prisma         # Database schema
├── README.md                 # This file
├── package.json             # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 🧪 Testing the API

### Using Swagger UI (Recommended)
1. Start the server: `npm run dev`
2. Open your browser and go to: `http://localhost:3000/api-docs`
3. Use the interactive interface to test all endpoints

### Using Command Line Tools

You can test the API using tools like:
- **Postman**
- **cURL**
- **Thunder Client** (VS Code extension)

### Example cURL Commands

**Create a resource:**
```bash
curl -X POST http://localhost:3000/api/resources \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Resource", "description": "Test description", "category": "test"}'
```

**Get all resources:**
```bash
curl http://localhost:3000/api/resources
```

**Get resource by ID:**
```bash
curl http://localhost:3000/api/resources/clx1234567890
```

**Update resource:**
```bash
curl -X PUT http://localhost:3000/api/resources/clx1234567890 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Name"}'
```

**Delete resource:**
```bash
curl -X DELETE http://localhost:3000/api/resources/clx1234567890
```

## 🔧 Configuration

### Environment Variables
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

### Database Configuration
The application uses SQLite as the database. The database file is located at `prisma/dev.db`.

### Swagger Configuration
- **Documentation URL**: `/api-docs`
- **OpenAPI Version**: 3.0.0
- **Interactive Testing**: Enabled
- **Request/Response Examples**: Included

## 🐛 Troubleshooting

1. **Database connection issues**: Run `npm run setup` to regenerate the Prisma client and push the schema
2. **TypeScript compilation errors**: Ensure all dependencies are installed with `npm install`
3. **Port already in use**: Change the PORT environment variable or kill the process using the port
4. **Swagger documentation not loading**: Ensure the server is running and check the `/api-docs` endpoint

## 📝 License

This project is licensed under the MIT License. 