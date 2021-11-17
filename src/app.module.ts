import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './Security/user/Modules/user.module';
import { User } from './Security/user/Entities/user.entity';
import { CPost } from './Publishing & Social Interaction/commonPost/Entities/post.entity';
import { PostModule } from './Publishing & Social Interaction/commonPost/Modules/post.module';
import { ProfileModule } from './Profile/profile/Modules/profile.module';
import { Profile } from './Profile/profile/Entities/profile.entity';
import { ProductionModule } from './Publishing & Social Interaction/production/Modules/production.module';
import { Production } from './Publishing & Social Interaction/production/Entities/production.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //url: process.env.DATABASE_URL,
      type: 'postgres',
      //extra: {
      //ssl: {
      //rejectUnauthorized: false,
      //},
      //},
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'producersmp',
      entities: [User, CPost, Profile, Production],
      synchronize: true,
      dropSchema: false,
    }),
    UserModule,
    PostModule,
    ProfileModule,
    ProductionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
