import Mapper from './Mapper';

class ResponseMapper extends Mapper {

    constructor() {
        super();
        let model: any = {
            data: {
                type: String,
                unique: false,
                required: false
            }
        };
        this.createSchema(model, {autoIndex: false, timestamps: false, versionKey: false});
    }

    public getEntityModel: Function = (): Promise<any> => {
        return this.getModel('Response');
    }

}
export default ResponseMapper;
