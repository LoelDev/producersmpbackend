import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './Security/modules/user.module';
import { User } from './Security/domain/entities/user.entity';
import { CommonPost } from './Publishing/common-post/domain/entities/post.entity';
import { PostModule } from './Publishing/common-post/modules/post.module';
import { ProfileModule } from './Profile/modules/profile.module';
import { Profile } from './Profile/domain/entities/profile.entity';
import { ProductionModule } from './Publishing/production/modules/production.module';
import { Production } from './Publishing/production/domain/entities/production.entity';
import { MusicSampleModule } from './Publishing/music-sample/modules/music-sample.module';
import { MusicSample } from './Publishing/music-sample/domain/entities/music-sample.entity';
import { PlansModule } from './Subscription/modules/plans.module';
import { Plan } from './Subscription/domain/entities/plan.entity';
import { Track } from './Business/tracks/domain/entities/track.entity';
import { TrackModule } from './Business/tracks/modules/track.module';
import { Instrument } from './Business/instruments/domain/entities/instrument.entity';
import { InstrumentModule } from './Business/instruments/modules/instrument.module';
import { ImportZipAudioModule } from './Business/import-zip-audios/modules/import-zip-audio.module';
import { ImportZipAudio } from './Business/import-zip-audios/domain/entities/import-zip-audio.entity';
import { Library } from './Business/libraries/domain/entities/library.entity';
import { LibraryModule } from './Business/libraries/modules/library.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      host: 'ec2-3-208-157-78.compute-1.amazonaws.com',
      port: 5432,
      username: 'rtwkmxscuqcawk',
      password:
        '975ad17dfc88bf6a3eb878472c601e2d68344dc3df404b3f1aba4d700f818b6d',
      database: 'd566t52c0dch7r',
      entities: [
        User,
        CommonPost,
        Profile,
        Production,
        MusicSample,
        Plan,
        Track,
        Instrument,
        ImportZipAudio,
        Library,
      ],
      synchronize: true,
      dropSchema: false,
    }),
    UserModule,
    PostModule,
    ProfileModule,
    ProductionModule,
    MusicSampleModule,
    PlansModule,
    TrackModule,
    InstrumentModule,
    ImportZipAudioModule,
    LibraryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
