import Response from '../../models/Response';

class ResponseUtils {

    constructor() {
    }

    public getModel: Function = (response: any): Response => {
        return new Response(response?.data) ;
    }
}

export default ResponseUtils;
