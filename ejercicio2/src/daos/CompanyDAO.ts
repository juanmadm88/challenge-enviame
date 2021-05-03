import CompanyMapper from './mappers/CompanyMapper';
import CompanyUtils from './utils/CompanyUtils';

import Logger from '../components/Logger';


class CompanyDAO {

    private mapper: CompanyMapper;
    private utils: CompanyUtils;
    private logger: Logger;

    constructor() {
        this.logger = new Logger('CompanyDAO');

        this.utils = new CompanyUtils();
        this.mapper = new CompanyMapper();
    }

    public get: Function = async (filter: any): Promise<any> => {
        let options: any = this.utils.getOptions(filter);

        try {

            let companyModel = await this.mapper.getEntityModel();
            return await companyModel.find(options).exec();
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

    public getById: Function = async (id: number): Promise<any> => {
        try {
            let companyModel = await this.mapper.getEntityModel();
            return await companyModel.findById(id).exec();
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

    public create: Function = async (company: any): Promise<any> => {
        let companyDB: any = this.utils.getModel(company);

        try {
            let companyModel = await this.mapper.getEntityModel();
            return await companyModel.create(companyDB);
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

    public update: Function = async (id: number, company: any): Promise<any> => {
        let companyDB: any = this.utils.getModel(company);
        let objectID: any = this.mapper.getObjectId(id);

        try {
            let companyModel = await this.mapper.getEntityModel();
            return await companyModel.updateOne({_id: objectID}, companyDB);
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

    public delete: Function = async (id: number): Promise<any> => {
        let objectID: any = this.mapper.getObjectId(id);
        try {
            let companyModel = await this.mapper.getEntityModel();
            let response = await companyModel.deleteOne({_id: objectID}).exec();
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

}

export default CompanyDAO;
