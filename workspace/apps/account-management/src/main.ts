/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';

import { AppModule } from './app/app.module';
import MicroserviceInit from '../../../libs/common/src/MicroServiceInit';
import { join } from 'path';

async function bootstrap() {
  const app = await MicroserviceInit(
    'account',
    join(__dirname, 'protos/account.proto'),
    AppModule,
    5000
  );
  await app.listen();
  Logger.log('Account management microservice is listening on port 5000');
}

bootstrap();
