import { Request, Response } from 'express';
import { ResourceService, CreateResourceData, UpdateResourceData, ResourceFilters } from '../services/resource.service';

export class ResourceController {
  private resourceService: ResourceService;

  constructor() {
    this.resourceService = new ResourceService();
  }

  // 1. Create a resource
  async createResource(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateResourceData = req.body;
      
      if (!data.name) {
        res.status(400).json({ error: 'Name is required' });
        return;
      }

      const resource = await this.resourceService.createResource(data);
      res.status(201).json(resource);
    } catch (error) {
      console.error('Error creating resource:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // 2. List resources with basic filters
  async getResources(req: Request, res: Response): Promise<void> {
    try {
      const filters: ResourceFilters = {
        category: req.query.category as string,
        status: req.query.status as string,
        search: req.query.search as string,
      };

      const resources = await this.resourceService.getResources(filters);
      res.status(200).json(resources);
    } catch (error) {
      console.error('Error fetching resources:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // 3. Get details of a resource
  async getResourceById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const resource = await this.resourceService.getResourceById(id);

      if (!resource) {
        res.status(404).json({ error: 'Resource not found' });
        return;
      }

      res.status(200).json(resource);
    } catch (error) {
      console.error('Error fetching resource:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // 4. Update resource details
  async updateResource(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: UpdateResourceData = req.body;

      const existingResource = await this.resourceService.getResourceById(id);
      if (!existingResource) {
        res.status(404).json({ error: 'Resource not found' });
        return;
      }

      const updatedResource = await this.resourceService.updateResource(id, data);
      res.status(200).json(updatedResource);
    } catch (error) {
      console.error('Error updating resource:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // 5. Delete a resource
  async deleteResource(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const existingResource = await this.resourceService.getResourceById(id);
      if (!existingResource) {
        res.status(404).json({ error: 'Resource not found' });
        return;
      }

      await this.resourceService.deleteResource(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting resource:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
} 