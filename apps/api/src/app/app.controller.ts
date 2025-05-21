
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRole } from '@on-the-mat/shared-types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return "userRole: " + UserRole.ADMIN;
  }
}
