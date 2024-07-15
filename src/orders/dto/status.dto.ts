import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, orderStatusList } from '../enum/order.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(orderStatusList, {
    message: `Valid statuses are: ${orderStatusList}`,
  })
  status: OrderStatus;
}
