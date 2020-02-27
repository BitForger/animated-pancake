import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IMessage } from '../models/Message';
import { Model } from 'mongoose';

@Injectable()
export class MessageService {
  constructor(@InjectModel('message') private readonly messageModel: Model<IMessage>) {
  }

  getAll(): Promise<IMessage[]> {
    return this.messageModel.find().exec();
  }

  async create(message: {message: string, keyHash: string}): Promise<IMessage> {
    const m = new this.messageModel(message);
    return await m.save();
  }
}
