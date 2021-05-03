import Constants from '../components/Constants';
import Logger from '../components/Logger';
import CompanyDAO from '../daos/CompanyDAO';

class CompanyService {

    private dao: CompanyDAO;
    private logger: Logger;

    constructor() {
        this.dao = new CompanyDAO();
        this.logger = new Logger('CompanyService');
    }

    public get: Function = async (filter: any): Promise<any> => {
        try {
            return await this.dao.get(filter);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_GET_COMPANY + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_GET_COMPANY);
        }
    }

    public getById: Function = async (id: number): Promise<any> => {
        try {
            return await this.dao.getById(id);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_GET_COMPANY_BY_ID + ' ' + id + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_GET_COMPANY_BY_ID);
        }
    }

    public create: Function = async (company: any): Promise<any> => {
        try {
            return await this.dao.create(company);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_CREATE_COMPANY + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_CREATE_COMPANY);
        }
    }

    public update: Function = async (id: number, company: any): Promise<any> => {
        try {
            return await this.dao.update(id, company);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_UPDATE_COMPANY + id + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_UPDATE_COMPANY);
        }
    }

    public delete: Function = async (id: number): Promise<any> => {
        try {
            return await this.dao.delete(id);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_DELETE_COMPANY + id + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_DELETE_COMPANY);
        }
    }
}

export default CompanyService;
