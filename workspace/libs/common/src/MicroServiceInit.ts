import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from 'apps/account-management/src/app/app.module';

const MicroserviceInit = async (
  packageName: string,
  path: string,
  module: typeof AppModule,
  port: Number
) => {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    module,
    {
      transport: Transport.GRPC,
      options: {
        package: packageName,
        protoPath: path,
        url: `localhost:${port}`,
      },
    }
  );

  return app;
};
export default MicroserviceInit;
