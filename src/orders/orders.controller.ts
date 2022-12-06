import { 
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Body,
	Param,
	HttpCode
} from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrdersDto } from './dto/create-orders.dto'


@Controller('orders')
export class OrdersController{

	constructor(private readonly ordersService: OrdersService){}
	
	@Post()
	create(@Body() data: CreateOrdersDto){
		return this.ordersService.create(data)
	}

	@Get(':id')
	findOne(@Param() { id }){
		return 	`Search orders id: ${id} and returns`
	}

	@Get()
	findAll(){
		return this.ordersService.findAll();
	}

	@Put(':id')
	update(@Param() { id }, @Body() data: Object){
		return this.ordersService.update(id, data);
	}
	
	@Delete(':id')
	@HttpCode(204)
	remove(@Param() { id }){
		return this.ordersService.remove(id)
	}
}
