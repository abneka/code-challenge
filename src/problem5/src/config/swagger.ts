import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Resource Management API',
      version: '1.0.0',
      description: 'A complete CRUD backend server built with ExpressJS and TypeScript for resource management',
      contact: {
        name: 'API Support',
        email: 'support@example.com'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ],
    components: {
      schemas: {
        Resource: {
          type: 'object',
          required: ['name'],
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for the resource',
              example: 'cmdv3ur3t0000tk6z0tchfz6w'
            },
            name: {
              type: 'string',
              description: 'Name of the resource',
              example: 'Sample Resource'
            },
            description: {
              type: 'string',
              description: 'Description of the resource',
              example: 'This is a sample resource'
            },
            category: {
              type: 'string',
              description: 'Category of the resource',
              example: 'technology'
            },
            status: {
              type: 'string',
              description: 'Status of the resource',
              enum: ['active', 'inactive'],
              default: 'active',
              example: 'active'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Creation timestamp',
              example: '2024-01-01T00:00:00.000Z'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Last update timestamp',
              example: '2024-01-01T00:00:00.000Z'
            }
          }
        },
        CreateResourceRequest: {
          type: 'object',
          required: ['name'],
          properties: {
            name: {
              type: 'string',
              description: 'Name of the resource',
              example: 'Sample Resource'
            },
            description: {
              type: 'string',
              description: 'Description of the resource',
              example: 'This is a sample resource'
            },
            category: {
              type: 'string',
              description: 'Category of the resource',
              example: 'technology'
            },
            status: {
              type: 'string',
              description: 'Status of the resource',
              enum: ['active', 'inactive'],
              default: 'active',
              example: 'active'
            }
          }
        },
        UpdateResourceRequest: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the resource',
              example: 'Updated Resource Name'
            },
            description: {
              type: 'string',
              description: 'Description of the resource',
              example: 'Updated description'
            },
            category: {
              type: 'string',
              description: 'Category of the resource',
              example: 'updated-category'
            },
            status: {
              type: 'string',
              description: 'Status of the resource',
              enum: ['active', 'inactive'],
              example: 'inactive'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error message',
              example: 'Resource not found'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Path to the API docs
};

export const specs = swaggerJsdoc(options); 