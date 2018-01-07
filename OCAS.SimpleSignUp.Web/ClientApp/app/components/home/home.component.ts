import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { SignUp } from '../../signup'

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public signups: SignUp[];
    public errorMessage: boolean = false;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Signup/Get').subscribe(result => {
            this.signups = result.json() as SignUp[];
        }, error => { console.error(error); this.errorMessage = true; });
    }
}



