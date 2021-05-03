

import Constants from '../constants/Constants';
export class DeliveryUtils {
    
    private readonly pathEntity: string = '/companies/401/deliveries';
    
    constructor(){}

    private buildEndpoint = (): string => {
        let endpoint: string =`${Constants.ENVIAME_BASE_URL}${Constants.ENVIAME_API_PATH}${this.pathEntity}`;
        return endpoint;
    }

    public buildOptions = (body:any):any =>{
        let options:any = {};
        options.method = Constants.HTTP_POST;
        options.url = this.buildEndpoint();
        options.headers = this.buildHeaders();
        options.data = JSON.stringify(body);
        return options;
    }

    private buildHeaders = ():any =>{
        let headers = { 
                            'Accept': 'application/json', 
                            'api-key': Constants.API_KEY_ENVIAME, 
                            'Content-Type': 'application/json'
        }
        return headers;
    }
}
















