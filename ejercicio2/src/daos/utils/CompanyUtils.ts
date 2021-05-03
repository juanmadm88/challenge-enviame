import Utils from './Utils';
import Company from '../../models/Company';

class CompanyUtils extends Utils {

    constructor() {
        super();
    }

    private readonly fieldsToFilter = ['name','address','telephone'];

    public getModel: Function = (company: any): Company => {
        return new Company(company.name,company.address, company.telephone) ;
    }

    public getOptions: Function = (filter: any): any => {
        let options: any = {};
        let conditions:any ={};
        
        if(filter.name)  this.getCondition(conditions, filter.name,this.fieldsToFilter[0]);
        
        if(filter.address) this.getCondition(conditions,filter.address,this.fieldsToFilter[1]);
        
        if(filter.telephone)  this.getCondition(conditions,filter.telephone,this.fieldsToFilter[2]);

        if (this.exists(conditions)) {
            options = conditions;
        }

        return options;
    }
}

export default CompanyUtils;
