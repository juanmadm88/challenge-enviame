import CompanyController from '../controllers/CompanyController';

class Router {

    private static instance: Router;
    private routes: any;
    private companyController: CompanyController;

    private constructor() {
        this.companyController = new CompanyController();
    }

    public static getInstance: Function = (): Router => {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    }

    public init: Function = (express: any): void => {
        this.routes = express.Router();

        this.routes.route('/companies')
            .get(this.companyController.get)
            .post(this.companyController.create);
            
        this.routes.route('/companies/:id')
            .get(this.companyController.getById)
            .put(this.companyController.update)
            .delete(this.companyController.delete);
    }

    public getRoutes: Function = (): any => {
        return this.routes;
    }
}

export default Router;
