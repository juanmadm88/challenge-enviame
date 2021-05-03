import Constants from '../constants/Constants';
class HTTPResponseHandler {
    
    public sendCreate:Function = (res: any,data:any): void => {
        res.status(Constants.HTTP_CREATED_STATUS_CODE);
        res.send(data);
    }

    public sendInvalidReq = (res: any, message: string): void => {
        let response: any = {};
        response.type = Constants.BAD_REQUEST_MESSAGE;
        response.message = message;
        res.status(Constants.HTTP_BAD_REQUEST_STATUS_CODE);
        res.send(response);
    }

    public sendInternalError = (res: any, message: string): void => {
        let response: any = {};
        response.type = Constants.INTERNAL_SERVER_ERROR_MESSAGE;
        response.message = message;
        res.status(Constants.HTTP_INTERNAL_SERVER_ERROR_STATUS_CODE);
        res.send(response);
    }

}

export default new HTTPResponseHandler();