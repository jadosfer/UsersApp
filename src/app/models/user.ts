import { Address } from './address';
import { Company } from './company';


export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address; 
    phone: string;
    website: string;
    company: Company;

    constructor() {
        this.id = null;
        this.name = null;
        this.username = null;
        this.email = null;
        this.address = new Address();
        this.phone = null;
        this.website = null;
        this.company = new Company();
    }    
}
