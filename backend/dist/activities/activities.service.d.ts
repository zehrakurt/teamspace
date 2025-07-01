import { PrismaService } from '../prisma/prisma.service';
export declare class ActivitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    createActivity(data: {
        description: string;
        userId: number;
        projectId?: number;
        taskId?: number;
    }): Promise<{
        user: {
            id: number;
            firstName: string;
            lastName: string;
        };
        project: {
            id: number;
            name: string;
        };
        task: {
            id: number;
            title: string;
        };
    } & {
        id: number;
        description: string;
        createdAt: Date;
        userId: number;
        projectId: number | null;
        taskId: number | null;
    }>;
    getUserActivities(userId: number): Promise<({
        user: {
            id: number;
            firstName: string;
            lastName: string;
        };
        project: {
            id: number;
            name: string;
        };
        task: {
            id: number;
            title: string;
        };
    } & {
        id: number;
        description: string;
        createdAt: Date;
        userId: number;
        projectId: number | null;
        taskId: number | null;
    })[]>;
    getProjectActivities(projectId: number): Promise<({
        user: {
            id: number;
            firstName: string;
            lastName: string;
        };
        project: {
            id: number;
            name: string;
        };
        task: {
            id: number;
            title: string;
        };
    } & {
        id: number;
        description: string;
        createdAt: Date;
        userId: number;
        projectId: number | null;
        taskId: number | null;
    })[]>;
    getTaskActivities(taskId: number): Promise<({
        user: {
            id: number;
            firstName: string;
            lastName: string;
        };
        project: {
            id: number;
            name: string;
        };
        task: {
            id: number;
            title: string;
        };
    } & {
        id: number;
        description: string;
        createdAt: Date;
        userId: number;
        projectId: number | null;
        taskId: number | null;
    })[]>;
    getRecentActivities(limit?: number): Promise<({
        user: {
            id: number;
            firstName: string;
            lastName: string;
        };
        project: {
            id: number;
            name: string;
        };
        task: {
            id: number;
            title: string;
        };
    } & {
        id: number;
        description: string;
        createdAt: Date;
        userId: number;
        projectId: number | null;
        taskId: number | null;
    })[]>;
}
