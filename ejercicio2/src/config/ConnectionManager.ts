import Constants from '../components/Constants';
import Logger from '../components/Logger';

let mongoose = require('mongoose');

const dbOptions: any = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

class ConnectionManager {

    private static instance: ConnectionManager;
    private connection: Promise<any>;
    private logger: Logger;

    private constructor() {
        this.logger = new Logger('ConnectionManager');
        let urlDB: string = 'mongodb://' + Constants.DB_HOST + ':' + Constants.DB_PORT + '/' + Constants.DB_NAME;
        this.connection = new Promise(async (resolve: any, reject: any) => {
            try {
                resolve(await mongoose.connect(urlDB, dbOptions));
                this.logger.info(Constants.SUCCESSFUL_CONNECTION);
            } catch (error) {
                this.logger.error(Constants.ERROR_CONNECTION + JSON.stringify(error));
            }
        });
    }

    public static getInstance: Function = (): ConnectionManager => {
        if (!ConnectionManager.instance) {
            ConnectionManager.instance = new ConnectionManager();
        }
        return ConnectionManager.instance;
    }

    public getConnection: Function = (): Promise<any> => {
        return this.connection;
    }

    public connectionStatus: Function = (): any => {
        let status: any = {};
        try {
             status = ConnectionManager.buildStatus(mongoose.connection.readyState);
        } catch (error) {
            status.description = JSON.stringify(error);
            this.logger.error(JSON.stringify(error));
        }
        return status;
    }

    // Privates Functions
    private static buildStatus: Function = (statusCode: number): any => {
        let status: any = {};
        status.code = statusCode;
        switch (statusCode) {
            case 0:
                status.description = Constants.DISCONNECTED;
                break;
            case 1:
                status.description = Constants.CONNECTED;
                break;
            case 2:
                status.description = Constants.CONNECTING;
                break;
            case 3:
                status.description = Constants.DISCONNECTING;
                break;
            default:
                status.description = Constants.UNKNOW;
        }

        return status;
    }

}

export default ConnectionManager;
