import { BloodType } from "./bloodType";

export default class Blood{
    type: BloodType;
    quantity: number
    
    constructor(type: BloodType, quantity: number){
        this.type = type;
        this.quantity = quantity;
    }
}