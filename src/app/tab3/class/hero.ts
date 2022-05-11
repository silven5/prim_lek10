
import { IRun } from "./irun";
export class Hero implements IRun
{
    name: string;
    power: number;
    runningSpeed: number;
    about: string[];
    constructor(name: string, power: number,rs:number)
    {
        this.name = name;
        this.power = power;
        this.runningSpeed = rs;
        this.about = [];
        
    }
    show()
    {
        return "Герой на ім'я " + this.name + "З силою " + this.power;
    }
      run() 
    {
        return ("Герой вміє бігати " + " зі швидкістю" + this.runningSpeed);
    }
}