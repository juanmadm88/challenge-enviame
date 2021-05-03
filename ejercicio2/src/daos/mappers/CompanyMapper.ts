import Mapper from './Mapper';

class CompanyMapper extends Mapper {

    constructor() {
        super();
        let model: any = {
            name: {
                type: String,
                unique: false,
                required: true
            },
            address: {
                type: String,
                unique: false,
                required: false
            },
            telephone: {
                type: Number,
                unique: false,
                required: false
            }
        };
        this.createSchema(model, {autoIndex: false, timestamps: false, versionKey: false});
    }

    public getObjectId: Function = (id: any): any => {
        return this.objectId(id);
    }

    public getEntitySchema: Function = (): any => {
        return this.getSchema();
    }

    public getEntityModel: Function = (): Promise<any> => {
        return this.getModel('Company');
    }

}

export default CompanyMapper;
