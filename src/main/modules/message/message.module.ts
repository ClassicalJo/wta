import { IpcService } from './application/infrastructure/ipc/ipc.service';
import { MessageService } from './application/service/message.service';
import { MessageHandler } from './infrastructure/message.handler';

const adapter = new IpcService();
export const messageService = new MessageService(adapter);
export const messageHandler = new MessageHandler(messageService);
