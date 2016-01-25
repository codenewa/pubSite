import {Component, provide} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {
    Router, 
    RouteConfig, 
    ROUTER_DIRECTIVES, 
    ROUTER_PROVIDERS, 
    LocationStrategy, 
    HashLocationStrategy
} from "angular2/router";

import {Login} from "../login/login";

@Component({
    selector:"files-app",
    template:"<router-outlet></router-outlet>",
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {name:"Login", component:Login, path:"/Login"}
])

export class App{
    constructor(router: Router){
        //show login
        router.navigate(["/Login"]);
    }
}

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);