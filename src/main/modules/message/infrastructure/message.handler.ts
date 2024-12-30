import { IEventHandler } from '../../common/application/interfaces/event-handler.interface';
import { IUseCase } from '../../common/application/interfaces/use-case.interface';
import { IMessageService } from '../application/interfaces/message-service.interface';
import { HandleRendererMessageUseCase } from '../application/use-cases/handle-renderer-message.use-case';

export class MessageHandler implements IEventHandler {
  useCases: IUseCase[];
  constructor(public messagingService: IMessageService) {
    this.useCases = [new HandleRendererMessageUseCase(messagingService)];
  }
}
