import { BloodType } from "./bloodType";

export default class Blood{
    bloodType: BloodType;
    quantity: number
    
    constructor(type: BloodType, quantity: number){
        this.bloodType = type;
        this.quantity = quantity;
    }
}