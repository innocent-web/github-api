import {
	FastifyInstance,
	FastifyRequest,
	FastifyReply
} from "fastify";
import { nextTick } from "process";

import { User } from "../models/user"

export default class UserController {
  private router : FastifyInstance;
	private url    : string = '/api/users/'; 

  constructor (router: FastifyInstance)
	{
		this.router = router;
		this.router.post(`${this.url}register`, this.register);    

	}
  async  register(req:FastifyRequest, res:FastifyReply)
	{
		
		try {
			await User.create({ id:1,username: "Jane", password: "pass", token:"454f78f45" });
      res
			.send({
				'user'  : 'myuseranme',
				'token' : 'f98f78978f7987e9989b7987987a9897' 
			})
		} catch (error) {
			res.send({msg:'failled', status:500, route:'/api/users/register'});
		}
    
		
	}
}