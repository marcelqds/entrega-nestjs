import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { Order } from './entities/order.entity';
import { CreateOrdersDto } from './dto/create-orders.dto'
import { UpdateOrdersDto } from './dto/update-orders.dto'

@Injectable()
export class OrdersService{

	constructor(
		@InjectModel(Order)
		private orderModel: typeof Order
	){}
	
	create(orderCreateDto: CreateOrdersDto){
		return this.orderModel.create({
			amount: orderCreateDto.amount
		});
	}

	findOne(id: string){
		return 	this.orderModel.findByPk(id);
	}
	
	findAll(){
		return this.orderModel.findAll();
	}

	update(id:string, orderUpdateDto: UpdateOrdersDto){
		return this.orderModel.update(orderUpdateDto, {
			where: {
				id
			}
		})
	}

	remove(id: string){
		return this.orderModel.destroy({
			where:{
				id
			}
		})
	}
	
}
