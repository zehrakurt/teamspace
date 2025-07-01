import { ActivitiesService } from './activities.service';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    getUserActivities(req: any): Promise<({
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
    getProjectActivities(id: string): Promise<({
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
    getTaskActivities(id: string): Promise<({
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
    getRecentActivities(): Promise<({
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
