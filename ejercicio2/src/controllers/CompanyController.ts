import Constants from '../components/Constants';
import ResponseUtils from '../components/utils/ResponseUtils';
import CompanyUtils from '../components/utils/CompanyUtils';
import CompanyService from '../service/CompanyService';

class CompanyController {

    private service: CompanyService;
    private utils: CompanyUtils;

    constructor() {
        this.service = new CompanyService();
        this.utils = new CompanyUtils();
    }

    public get: Function = async (req: any, res: any): Promise<any> => {
        let filter: any = {};

        try {
            filter = this.utils.getFilter(req.query);
        } catch(error) {
            ResponseUtils.sendInvalidReq(res, error.message);
        }
        
        try {
            let response: any = await this.service.get(filter);
            ResponseUtils.sendQuery(res, response);
        } catch (reason) {
            ResponseUtils.sendInternalError(res, Constants.ERROR_MESSAGE_GET_COMPANY);
        }
    }

    public getById: Function = async (req: any, res: any): Promise<any> => {
        if (this.utils.exists(req.query)) {
            ResponseUtils.sendInvalidReq(res, Constants.NOT_SUPPORTED_URL);
            return;
        }

        try {
            let company: any = await this.service.getById(req.params.id);
            ResponseUtils.sendQuery(res, company);
        } catch (reason) {
            ResponseUtils.sendInternalError(res, Constants.ERROR_MESSAGE_GET_COMPANY);
        }
    }

    public create: Function = async (req: any, res: any): Promise<any> => {
        let company: any = req.body;

        try {
            let createdCompany = await this.service.create(company);
            ResponseUtils.sendCreate(res,createdCompany);
        } catch(error) {
            ResponseUtils.sendInternalError(res, error.message);
        }
    }

    public update: Function = async (req: any, res: any): Promise<any> => {
        if (!req.params.id) {
            ResponseUtils.sendInvalidReq(res, Constants.ERROR_NON_EXISTING_ID);
            return;
        }

        let idCompany: number = req.params.id;
        let company: any = req.body;

        try {
            await this.service.update(idCompany, company);
            ResponseUtils.sendEmpty(res);
        } catch(error) {
            ResponseUtils.sendInternalError(res, error.message);
        }
    }

    public delete: Function = async (req: any, res: any): Promise<any> => {
        if (!req.params.id) {
            ResponseUtils.sendInvalidReq(res, Constants.ERROR_NON_EXISTING_ID);
            return;
        }

        let idCompany: number = req.params.id;
        try {
            await this.service.delete(idCompany);
            ResponseUtils.sendEmpty(res);
        } catch(error) {
            ResponseUtils.sendInternalError(res, error.message);
        }
    }

}

export default CompanyController;
