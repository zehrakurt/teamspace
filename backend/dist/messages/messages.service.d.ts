import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesService {
    private prisma;
    constructor(prisma: PrismaService);
    createMessage(senderId: number, createMessageDto: CreateMessageDto): Promise<{
        sender: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
        receiver: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: number;
        content: string;
        createdAt: Date;
        isRead: boolean;
        senderId: number;
        receiverId: number;
    }>;
    getUserMessages(userId: number): Promise<({
        sender: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
        receiver: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: number;
        content: string;
        createdAt: Date;
        isRead: boolean;
        senderId: number;
        receiverId: number;
    })[]>;
    getConversation(userId: number, otherUserId: number): Promise<({
        sender: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
        receiver: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: number;
        content: string;
        createdAt: Date;
        isRead: boolean;
        senderId: number;
        receiverId: number;
    })[]>;
    markMessageAsRead(messageId: number, userId: number): Promise<{
        sender: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
        receiver: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: number;
        content: string;
        createdAt: Date;
        isRead: boolean;
        senderId: number;
        receiverId: number;
    }>;
    getUnreadMessageCount(userId: number): Promise<{
        count: number;
    }>;
    getAllUsers(): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
}
