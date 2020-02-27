import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMessage } from '../../models/Message';

@Controller('messages')
export class MessagesController {

  constructor(@InjectModel('message') private readonly messageModel: Model<IMessage>) {
  }

  @Post('/send')
  async sendMessage(@Body() bodyArgs: {message: string}) {
    const createdMessage = new this.messageModel(bodyArgs);
    return createdMessage.save();
  }
}
