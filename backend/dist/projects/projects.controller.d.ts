import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Request } from 'express';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(req: Request, createProjectDto: CreateProjectDto): Promise<{
        owner: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
        users: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        }[];
    } & {
        id: number;
        status: import(".prisma/client").$Enums.ProjectStatus;
        createdAt: Date;
        name: string;
        description: string | null;
        updatedAt: Date;
        startDate: Date | null;
        endDate: Date | null;
        ownerId: number;
    }>;
    findAll(req: Request): Promise<({
        owner: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
        users: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        }[];
    } & {
        id: number;
        status: import(".prisma/client").$Enums.ProjectStatus;
        createdAt: Date;
        name: string;
        description: string | null;
        updatedAt: Date;
        startDate: Date | null;
        endDate: Date | null;
        ownerId: number;
    })[]>;
    findOne(id: string, req: Request): Promise<{
        tasks: ({
            assignee: {
                id: number;
                email: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: number;
            title: string;
            status: import(".prisma/client").$Enums.TaskStatus;
            createdAt: Date;
            description: string | null;
            priority: import(".prisma/client").$Enums.TaskPriority;
            dueDate: Date | null;
            updatedAt: Date;
            projectId: number;
            assigneeId: number | null;
        })[];
        owner: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
        users: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        }[];
    } & {
        id: number;
        status: import(".prisma/client").$Enums.ProjectStatus;
        createdAt: Date;
        name: string;
        description: string | null;
        updatedAt: Date;
        startDate: Date | null;
        endDate: Date | null;
        ownerId: number;
    }>;
    update(id: string, req: Request, updateProjectDto: UpdateProjectDto): Promise<{
        owner: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
        users: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        }[];
    } & {
        id: number;
        status: import(".prisma/client").$Enums.ProjectStatus;
        createdAt: Date;
        name: string;
        description: string | null;
        updatedAt: Date;
        startDate: Date | null;
        endDate: Date | null;
        ownerId: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    addUserToProject(id: string, userId: string): Promise<{
        owner: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
        users: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        }[];
    } & {
        id: number;
        status: import(".prisma/client").$Enums.ProjectStatus;
        createdAt: Date;
        name: string;
        description: string | null;
        updatedAt: Date;
        startDate: Date | null;
        endDate: Date | null;
        ownerId: number;
    }>;
    removeUserFromProject(id: string, userId: string): Promise<{
        owner: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
        users: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        }[];
    } & {
        id: number;
        status: import(".prisma/client").$Enums.ProjectStatus;
        createdAt: Date;
        name: string;
        description: string | null;
        updatedAt: Date;
        startDate: Date | null;
        endDate: Date | null;
        ownerId: number;
    }>;
    findProjectTasks(id: string, req: Request): Promise<({
        assignee: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        createdAt: Date;
        description: string | null;
        priority: import(".prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        updatedAt: Date;
        projectId: number;
        assigneeId: number | null;
    })[]>;
    findProjectUsers(id: string, req: Request): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
    }[]>;
}
