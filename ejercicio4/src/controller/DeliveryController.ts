import {Request, Response} from "express";
import { DeliveryService } from "../service/DeliveryService";
import HTTPResponseHandler from "../handlers/HTTPResponseHandler";
import {DeliveryUtils} from '../utils/DeliveryUtils';

export class DeliveryController {

    private deliveryService: DeliveryService;
    private utils:DeliveryUtils;
    
    constructor() {
        this.deliveryService = new DeliveryService();
        this.utils = new DeliveryUtils();
    }

    public create = async(req: Request , res: Response ) => {
        try{
            let data = await this.deliveryService.create(req);
            HTTPResponseHandler.sendCreate(res,data);
        }catch(err) {
            console.log('error: ',err);
           HTTPResponseHandler.sendInternalError(res , err.message);
        }
    }
}