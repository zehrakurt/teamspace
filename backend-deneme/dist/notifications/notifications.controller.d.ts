import { NotificationsService } from './notifications.service';
import { Request } from 'express';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    getUserNotifications(req: Request): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        status: import(".prisma/client").$Enums.NotificationStatus;
        data: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        userId: number;
    }[]>;
    getUnreadCount(req: Request): Promise<{
        count: number;
    }>;
    markAsRead(id: string, req: Request): Promise<import(".prisma/client").Prisma.BatchPayload>;
    markAllAsRead(req: Request): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteNotification(id: string, req: Request): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
