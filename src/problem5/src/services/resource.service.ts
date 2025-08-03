import { prisma } from '../prisma/client';
import { Resource } from '@prisma/client';

export interface CreateResourceData {
  name: string;
  description?: string;
  category?: string;
  status?: string;
}

export interface UpdateResourceData {
  name?: string;
  description?: string;
  category?: string;
  status?: string;
}

export interface ResourceFilters {
  category?: string;
  status?: string;
  search?: string;
}

export class ResourceService {
  async createResource(data: CreateResourceData): Promise<Resource> {
    return await prisma.resource.create({
      data: {
        name: data.name,
        description: data.description,
        category: data.category,
        status: data.status || 'active',
      },
    });
  }

  async getResources(filters: ResourceFilters = {}): Promise<Resource[]> {
    const where: any = {};

    if (filters.category) {
      where.category = filters.category;
    }

    if (filters.status) {
      where.status = filters.status;
    }

    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search } },
        { description: { contains: filters.search } },
      ];
    }

    return await prisma.resource.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async getResourceById(id: string): Promise<Resource | null> {
    return await prisma.resource.findUnique({
      where: { id },
    });
  }

  async updateResource(id: string, data: UpdateResourceData): Promise<Resource | null> {
    return await prisma.resource.update({
      where: { id },
      data,
    });
  }

  async deleteResource(id: string): Promise<Resource | null> {
    return await prisma.resource.delete({
      where: { id },
    });
  }
} 