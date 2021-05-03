import Utils from './Utils';

class CompanyUtils extends Utils {

    constructor() {
        super();
    }

    // Publics Functions
    public getFilter: Function = (params: any): any => {
        let filter: any = {};

        if(params.id) filter.id = this.getCondition(params.id);
        if(params.name) filter.name  =  this.getCondition(params.name);
        if(params.address) filter.address =  this.getCondition(params.address);
        if(params.telephone) filter.telephone =  this.getCondition(params.telephone);
        return filter;
    }

}

export default CompanyUtils;
