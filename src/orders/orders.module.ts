import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { envs, ORDER_SERVICE } from '../config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [OrdersController],
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.ordersMicroserviceHost,
          port: +envs.ordersMicroservicePort,
        },
      },
    ]),
  ],
})
export class OrdersModule {}
