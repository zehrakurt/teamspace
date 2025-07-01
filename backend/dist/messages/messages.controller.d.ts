import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Request } from 'express';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    createMessage(req: Request, createMessageDto: CreateMessageDto): Promise<{
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
    getUserMessages(req: Request): Promise<({
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
    getConversation(req: Request, userId: string): Promise<({
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
    markMessageAsRead(req: Request, messageId: string): Promise<{
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
    getUnreadMessageCount(req: Request): Promise<{
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
