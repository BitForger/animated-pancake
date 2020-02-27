import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeysController } from './controllers/keys/keys.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './models/Message';
import { MessagesController } from './controllers/messages/messages.controller';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    MongooseModule.forFeature([
      {
        name: 'message',
        schema: MessageSchema,
      },
    ]),
  ],
  controllers: [
    AppController,
    KeysController,
    MessagesController,
  ],
  providers: [AppService],
})
export class AppModule {
}
