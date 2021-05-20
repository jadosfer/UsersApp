import { Adress } from './adress';
import { Company } from './company';


export class User {
    id: number;
    name: string;
    email: string;
    adress: Adress; 
    phone: string;
    website: string;
    company: Company;

    constructor() {
        this.id = null;
        this.name = null;
        this.email = null;
        this.adress = new Adress();
        this.phone = null;
        this.website = null;
        this.company = new Company();
    }    
}
