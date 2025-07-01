import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { ActivitiesService } from '../activities/activities.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private prisma;
    private notificationsService;
    private activitiesService;
    constructor(prisma: PrismaService, notificationsService: NotificationsService, activitiesService: ActivitiesService);
    create(createTaskDto: CreateTaskDto, userId: number): Promise<{
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
    findAll(userId: number, userRole: string): Promise<({
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
    findOne(id: number, userId: number, userRole: string): Promise<{
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
    update(id: number, updateTaskDto: UpdateTaskDto, userId: number, userRole: string): Promise<any>;
    private getStatusText;
    remove(id: number, userId: number, userRole: string): Promise<{
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
    findTaskComments(id: number, userId: number, userRole: string): Promise<({
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
