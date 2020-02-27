import { Schema, Document } from 'mongoose';

export class Message {
  message: string;

  constructor(json: {
    message: string,
  }) {
    this.message = json.message;
  }
}

export interface IMessage extends Message, Document {
}

export const MessageSchema = new Schema({
  message: String,
});
