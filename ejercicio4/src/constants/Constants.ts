export default class Constants {
     
    // ** Environment variables **
    
    public static readonly API_KEY_ENVIAME: string | undefined = process.env.API_KEY_ENVIAME;

    public static readonly ENVIAME_BASE_URL: string | undefined = process.env.ENVIAME_BASE_URL;
 
    public static readonly ENVIAME_API_PATH: string | undefined = process.env.ENVIAME_API_PATH;

    public static readonly DB_HOST: string | undefined = process.env.DB_HOST;

    public static readonly DB_PORT: string | undefined = process.env.DB_PORT;

    public static readonly DB_NAME: string | undefined = process.env.DB_NAME;


    //** HTTP **

    public static readonly HTTP_POST: string = "POST";  

    public static readonly HTTP_CREATED_STATUS_CODE: number = 201;

    public static readonly BAD_REQUEST_MESSAGE: string = "Bad Request";

    public static readonly HTTP_BAD_REQUEST_STATUS_CODE: number = 400;

    public static readonly HTTP_INTERNAL_SERVER_ERROR_STATUS_CODE: number = 500;

    public static readonly INTERNAL_SERVER_ERROR_MESSAGE: string = "Internal Server Error";

    //Messages

    public static readonly ERROR_CREATE_DELIVERY: string = "An error has ocurred while trying to create delivery";

    public static readonly ERROR_CREATES_RESPONSE: string = "An error has ocurred while trying to create response";

    
    // Connection Status
    public static DISCONNECTED: string = "Disconnected";

    public static CONNECTED: string = "Connected";

    public static CONNECTING: string = "Connecting";

    public static DISCONNECTING: string = "Disconnecting";

    public static UNKNOW: string = "Unknow";

    //Mssg DB Connection
    public static readonly SUCCESSFUL_CONNECTION: string = "Connection has been established successfully.";
    
    public static readonly ERROR_CONNECTION: string = "Unable to connect to the database: ";
}