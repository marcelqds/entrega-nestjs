import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';

@Module({
	imports: [ 
		SequelizeModule.forFeature([Order])
	],
	controllers: [ OrdersController ],
	providers: [ OrdersService ],
})
export class OrdersModule {}

