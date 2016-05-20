import * as amqp from 'amqplib' 
import * as moment from 'moment'

export class C<T> {
    async getDate(f:T):Promise<string>{
        return moment().format('YYYY-MM-DD');
    }
    async getAMQP():Promise<amqp.Connection>{
        return null;    
    }
}