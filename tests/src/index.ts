/// <reference path="../../typings/tsd.d.ts" />
import * as lib from '../../build/index'


describe('TEST:', ()=>{ 
    it('case', async() =>{
        let c = new lib.C<string>();
 
        console.log(await c.getDate('get the current date'));

    });
    it('case', async() =>{
        let c = new lib.C<string>();

        let connect = await c.getAMQP();
        console.log(connect);

    });
});

