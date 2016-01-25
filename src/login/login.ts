import {Component, View} from "angular2/core";


@Component({
    selector:"Login"
})

@View({
    templateUrl:"src/login/login.html"
})

export class Login{
    public constructor(){
        
    }
    
    public login(){
        alert('hello again');
    }
}