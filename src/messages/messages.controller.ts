import { Post } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage() {}

  @Post('/:id')
  getMessage() {}
}
