"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let NotificationsService = class NotificationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createNotification(createNotificationDto) {
        return this.prisma.notification.create({
            data: {
                type: createNotificationDto.type,
                title: createNotificationDto.title,
                message: createNotificationDto.message,
                userId: createNotificationDto.userId,
                data: createNotificationDto.data || {}
            }
        });
    }
    async getUserNotifications(userId) {
        return this.prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: 50
        });
    }
    async getUnreadCount(userId) {
        return this.prisma.notification.count({
            where: {
                userId,
                status: client_1.NotificationStatus.UNREAD
            }
        });
    }
    async markAsRead(notificationId, userId) {
        return this.prisma.notification.updateMany({
            where: {
                id: notificationId,
                userId
            },
            data: { status: client_1.NotificationStatus.READ }
        });
    }
    async markAllAsRead(userId) {
        return this.prisma.notification.updateMany({
            where: {
                userId,
                status: client_1.NotificationStatus.UNREAD
            },
            data: { status: client_1.NotificationStatus.READ }
        });
    }
    async deleteNotification(notificationId, userId) {
        return this.prisma.notification.deleteMany({
            where: {
                id: notificationId,
                userId
            }
        });
    }
    async notifyProjectAssigned(userId, projectId, projectName) {
        return this.createNotification({
            type: client_1.NotificationType.PROJECT_ASSIGNED,
            title: 'Yeni Proje Atandı',
            message: `"${projectName}" projesine atandınız.`,
            userId,
            data: { projectId }
        });
    }
    async notifyTaskAssigned(userId, taskId, taskTitle) {
        return this.createNotification({
            type: client_1.NotificationType.TASK_ASSIGNED,
            title: 'Yeni Görev Atandı',
            message: `"${taskTitle}" görevi size atandı.`,
            userId,
            data: { taskId }
        });
    }
    async notifyRoleChanged(userId, newRole) {
        return this.createNotification({
            type: client_1.NotificationType.ROLE_CHANGED,
            title: 'Rol Değişikliği',
            message: `Rolünüz "${newRole}" olarak güncellendi.`,
            userId,
            data: { newRole }
        });
    }
    async notifySystemAnnouncement(userIds, title, message) {
        const notifications = userIds.map(userId => ({
            type: client_1.NotificationType.SYSTEM_ANNOUNCEMENT,
            title,
            message,
            userId,
            data: {}
        }));
        return this.prisma.notification.createMany({
            data: notifications
        });
    }
    async notifyTaskDueSoon(userId, taskId, taskTitle, dueDate) {
        return this.createNotification({
            type: client_1.NotificationType.TASK_DUE_SOON,
            title: 'Görev Deadline Yaklaşıyor',
            message: `"${taskTitle}" görevinin bitiş tarihi ${dueDate.toLocaleDateString()} tarihinde.`,
            userId,
            data: { taskId, dueDate }
        });
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map