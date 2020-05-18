// import warmUp from "./warmup";
import { htmlGenerator } from "./warmup";

export class Clock {
    constructor(){
        let now = new Date();
        this.sec = now.getSeconds();
        this.min = now.getMinutes();
        this.hr = now.getHours();
        this.el = document.getElementById("clock");   
        setInterval(this._tick.bind(this), 1000);      
    }

    printTime(){
        let timeNow = `${this.hr} : ${this.min} : ${this.sec}`;
        htmlGenerator(timeNow, this.el);
    }

    _tick(){
        this.sec++;

        if (this.sec === 60){
            this.min++;
            this.sec = 0;
        } 

        if (this.min === 60) {
            this.hr++;
            this.min = 0;
        } 

        if (this.hr === 24) {
            this.hr = 0;
        }

        this.printTime();
    }
}

const clock = new Clock();

