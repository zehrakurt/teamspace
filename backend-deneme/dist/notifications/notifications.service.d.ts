import { PrismaService } from '../prisma/prisma.service';
import { NotificationType } from '@prisma/client';
export interface CreateNotificationDto {
    type: NotificationType;
    title: string;
    message: string;
    userId: number;
    data?: any;
}
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    createNotification(createNotificationDto: CreateNotificationDto): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        status: import(".prisma/client").$Enums.NotificationStatus;
        data: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        userId: number;
    }>;
    getUserNotifications(userId: number): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        status: import(".prisma/client").$Enums.NotificationStatus;
        data: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        userId: number;
    }[]>;
    getUnreadCount(userId: number): Promise<number>;
    markAsRead(notificationId: number, userId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
    markAllAsRead(userId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteNotification(notificationId: number, userId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
    notifyProjectAssigned(userId: number, projectId: number, projectName: string): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        status: import(".prisma/client").$Enums.NotificationStatus;
        data: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        userId: number;
    }>;
    notifyTaskAssigned(userId: number, taskId: number, taskTitle: string): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        status: import(".prisma/client").$Enums.NotificationStatus;
        data: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        userId: number;
    }>;
    notifyRoleChanged(userId: number, newRole: string): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        status: import(".prisma/client").$Enums.NotificationStatus;
        data: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        userId: number;
    }>;
    notifySystemAnnouncement(userIds: number[], title: string, message: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    notifyTaskDueSoon(userId: number, taskId: number, taskTitle: string, dueDate: Date): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        status: import(".prisma/client").$Enums.NotificationStatus;
        data: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        userId: number;
    }>;
}
