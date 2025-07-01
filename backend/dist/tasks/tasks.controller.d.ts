import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Request } from 'express';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(req: Request, createTaskDto: CreateTaskDto): Promise<{
        project: {
            id: number;
            description: string | null;
            status: import(".prisma/client").$Enums.ProjectStatus;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            startDate: Date | null;
            endDate: Date | null;
            ownerId: number;
        };
        assignee: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: number;
        title: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TaskStatus;
        priority: import(".prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        assigneeId: number | null;
    }>;
    findAll(req: Request): Promise<({
        project: {
            id: number;
            description: string | null;
            status: import(".prisma/client").$Enums.ProjectStatus;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            startDate: Date | null;
            endDate: Date | null;
            ownerId: number;
        };
        assignee: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: number;
        title: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TaskStatus;
        priority: import(".prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        assigneeId: number | null;
    })[]>;
    findOne(id: string, req: Request): Promise<{
        project: {
            id: number;
            description: string | null;
            status: import(".prisma/client").$Enums.ProjectStatus;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            startDate: Date | null;
            endDate: Date | null;
            ownerId: number;
        };
        assignee: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: number;
        title: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TaskStatus;
        priority: import(".prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        assigneeId: number | null;
    }>;
    update(id: string, req: Request, updateTaskDto: UpdateTaskDto): Promise<any>;
    remove(id: string, req: Request): Promise<{
        id: number;
        title: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TaskStatus;
        priority: import(".prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        assigneeId: number | null;
    }>;
    findTaskComments(id: string, req: Request): Promise<({
        author: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        taskId: number;
        authorId: number;
    })[]>;
}
