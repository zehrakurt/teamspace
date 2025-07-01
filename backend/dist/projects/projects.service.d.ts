import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsService {
    private prisma;
    private notificationsService;
    constructor(prisma: PrismaService, notificationsService: NotificationsService);
    create(createProjectDto: CreateProjectDto, ownerId: number): Promise<{
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
    findAll(userId: number): Promise<({
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
    findOne(id: number, userId: number): Promise<{
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
    update(id: number, updateProjectDto: UpdateProjectDto, userId: number): Promise<{
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
    remove(id: number): Promise<{
        message: string;
    }>;
    addUserToProject(projectId: number, userToAddId: number): Promise<{
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
    removeUserFromProject(projectId: number, userToRemoveId: number): Promise<{
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
    findProjectTasks(projectId: number, userId: number): Promise<({
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
    findProjectUsers(projectId: number, userId: number): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
    }[]>;
    updateUsersOnProject(projectId: number, userIds: number[]): Promise<{
        users: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            firstName: string | null;
            lastName: string | null;
            role: import(".prisma/client").$Enums.Role;
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
}
