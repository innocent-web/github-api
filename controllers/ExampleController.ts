import {FastifyRequest, FastifyReply, FastifyInstance} from "fastify";

export default class ExampleController {

    private router: FastifyInstance
    

    constructor(router: FastifyInstance) {
        this.router = router

        router.get('/api',this.sayHello.bind(this))
        router.get('/api/healthcheck', async(req:FastifyRequest,res:FastifyReply)=>{
            const healthcheck = {
                name: "github-api",
                version: "1.0",
                time: Date.now()
            };
            try {
               res.send(healthcheck) 
            } catch (error) {
                res.status(503).send();
            }
        })
        router.get('/api/timemachine/logs/mcfly', async(req,res)=>{
            const response = {
                js:[
                    {
                        name: "My mom is in love with me",
                        version: "1.0",
                        time: -446723100,
                },{
                    name: "I go to the future and my mom end up with the wrong guy",
                    version: "2.0",
                    time: 1445470140
                },{
                    name: "I go to the past and you will not believe what happens next",
                    version: "3.0",
                    time: -Date.now()
                }]
                    
                
            }
            try {
                res.send(response) 
             } catch (error) {
                 res.status(503).send();
             } 
        })
    }

    async sayHello(): Promise<string> {
        return 'Hello, friend'
    }
    

}

