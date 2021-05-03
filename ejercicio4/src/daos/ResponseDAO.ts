import Constants from '../constants/Constants';
import ResponseMapper from './mappers/ResponseMapper';
import ResponseUtils from './utils/ResponseUtils';

class ResponseDAO {

    private mapper: ResponseMapper;
    private utils: ResponseUtils;

    constructor() {
        this.utils = new ResponseUtils();
        this.mapper = new ResponseMapper();
    }

    public create: Function = async (response: any): Promise<any> => {
        const responseDB: any = this.utils.getModel(response);

        try {
            const responseModel = await this.mapper.getEntityModel();
            return await responseModel.create(responseDB);
        } catch(error) {
            console.log("error ",error)
            throw new Error(Constants.ERROR_CREATES_RESPONSE);
        }
    }
}
export default ResponseDAO;
