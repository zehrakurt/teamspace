import { AdminService } from './admin.service';
import { Role } from '@prisma/client';
interface UpdateUserRoleDto {
    role: Role;
}
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
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
    updateUserRole(id: string, updateUserRoleDto: UpdateUserRoleDto): Promise<{
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
    approveUser(id: string): Promise<{
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
    disableUser(id: string): Promise<{
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
export {};
