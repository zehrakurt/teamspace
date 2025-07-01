import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    getDashboardStats(): Promise<{
        totalUsers: number;
        totalProjects: number;
        activeProjects: number;
        completedProjects: number;
        totalTasks: number;
        delayedTasks: number;
        newUsersThisMonth: number;
        projectStatusDistribution: {
            planning: number;
            inProgress: number;
            completed: number;
            onHold: number;
        };
        taskStatusDistribution: {
            todo: number;
            inProgress: number;
            done: number;
        };
    }>;
    getAllUsers(): Promise<{
        _count: {
            projects: number;
            ownedProjects: number;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    updateUserRole(userId: number, role: Role): Promise<{
        _count: {
            projects: number;
            ownedProjects: number;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    approveUser(userId: number): Promise<{
        _count: {
            projects: number;
            ownedProjects: number;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    disableUser(userId: number): Promise<{
        _count: {
            projects: number;
            ownedProjects: number;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
