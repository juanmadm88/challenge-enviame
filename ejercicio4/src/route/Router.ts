import { DeliveryController } from "../controller/DeliveryController";

export class Router {

    private routes: any;
    private deliveryController:DeliveryController;

    constructor() {
        this.deliveryController = new DeliveryController();
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/delivery')
            .post(this.deliveryController.create);

    }

    public getRoutes() {
        return this.routes;
    }

}
