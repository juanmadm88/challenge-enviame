import { Request } from "express";
import {DeliveryUtils} from '../utils/DeliveryUtils';
import Constants from '../constants/Constants';
import ResponseDAO from '../daos/ResponseDAO';
let axios = require('axios');

export class DeliveryService {

    private utils: DeliveryUtils;
    private responseDAO: ResponseDAO;

    constructor() {
        this.utils = new DeliveryUtils();
        this.responseDAO = new ResponseDAO();
    }

    public create = async(req: Request) => {
        try{
            const options = this.utils.buildOptions(req.body);
            const response = await axios(options);
            await this.responseDAO.create(response?.data);
            return response?.data;
        }catch(error){
            console.log("error ",error.message);
            throw new Error(Constants.ERROR_CREATE_DELIVERY)
        }
    }
}
