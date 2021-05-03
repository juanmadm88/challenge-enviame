

class Response {

    private data: String;
   
    constructor(someData?:String) {
        (someData)   ?   this.data = JSON.stringify(someData) : this.data = "empty";
    }

    public getData: Function = (): String => {
        return this.data;
    }

    public setData: Function = (someData: String): void => {
        this.data = someData;
    }
  
}

export default Response;
