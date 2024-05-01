// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true,
  })],
  providers: [AuthService],
})
export class AppModule {}
