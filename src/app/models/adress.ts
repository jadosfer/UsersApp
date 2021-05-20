import { Geo } from "./geo";

export class Adress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;    
    
    constructor() {
        this.street = null;
        this.suite = null;
        this.city = null;
        this.zipcode = null;
        this.geo = new Geo();
    }
}
