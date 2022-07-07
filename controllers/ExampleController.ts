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
    }

    async sayHello(): Promise<string> {
        return 'Hello, friend'
    }
    

}

