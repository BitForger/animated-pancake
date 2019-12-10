import { model, Model, Schema } from 'mongoose';

export class Message {
  message: string;

  constructor(json: {
    message: string,
  }) {
    this.message = json.message;
  }
}

export interface IMessage extends Document, Message {
}

export const MessageSchema = new Schema({
  message: String,
});
