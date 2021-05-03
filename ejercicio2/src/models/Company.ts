
class Company {

    private name: String;
    private address: String;
    private telephone: String;


    constructor(aName?:String,anAddress?:String,aTelephone?:String) {
        (aName)   ?   this.name = aName : this.name = "unknown";
        this.address = anAddress;
        this.telephone = aTelephone;
    }

    public getName: Function = (): String => {
        return this.name;
    }

    public setName: Function = (aName: String): void => {
        this.name = aName;
    }

    public getAddress: Function = (): String => {
        return this.address;
    }

    public setAddress: Function = (anAddress: String): void => {
        this.address = anAddress;
    }

    public getTelephone: Function = (): String => {
        return this.telephone;
    }

    public setTelephone: Function = (aTelephone: String): void => {
        this.telephone = aTelephone;
    }

}

export default Company;
