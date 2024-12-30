import { WebContents } from 'electron';

import { IEventHandler } from '../common/application/interfaces/event-handler.interface';
import { IpcService } from './application/infrastructure/ipc/ipc.service';
import { WebContentsService } from './application/infrastructure/web-contents/web-contents.service';
import { IEmitterAdapter } from './application/interfaces/emitter-adapter.interface';
import { IHandlerAdapter } from './application/interfaces/message-adapter.interface';
import { IMessageService } from './application/interfaces/message-service.interface';
import { MessageService } from './application/service/message.service';
import { MessageHandler } from './infrastructure/message.handler';

export class MessageModule {
  handler: IHandlerAdapter;
  emitter: IEmitterAdapter;
  messageService: IMessageService;
  messageHandler: IEventHandler;
  constructor(webContents: WebContents) {
    this.handler = new IpcService();
    this.emitter = new WebContentsService(webContents);
    this.messageService = new MessageService(this.handler, this.emitter);
    this.messageHandler = new MessageHandler(this.messageService);
  }
}
