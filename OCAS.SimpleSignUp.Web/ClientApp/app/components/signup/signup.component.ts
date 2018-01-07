import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms';
import { SignUp } from '../../signup'

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    activities: string[] = ['Gaming','Camping','Fishing'];
    public myform: FormGroup;
    private baseurl: string;
    private signup1: SignUp = new SignUp(); 

    constructor(private http: Http,
        @Inject('BASE_URL') baseUrl: string,
        private router: Router) {
        this.baseurl = baseUrl;
    }

    ngOnInit() {
        this.myform = new FormGroup({
            firstName: new FormControl(this.signup1.FirstName, Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl(this.signup1.EmailAddress, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
            activity: new FormControl(),
            comments: new FormControl('')
        });
    }

    get firstName() { return this.myform.get('firstName'); }

    get lastName() { return this.myform.get('lastName'); }

    get email() { return this.myform.get('email'); }

    Save() {
        if (!this.myform.invalid) {
            var signup: SignUp;
            signup = new SignUp();
            signup.FirstName = this.myform.value.firstName;
            signup.LastName = this.myform.value.lastName;
            signup.EmailAddress = this.myform.value.email;
            signup.Activity = this.myform.value.activity;
            signup.Comments = this.myform.value.comments;
            this.http.post(this.baseurl + 'api/Signup', signup).subscribe(result => {
                this.router.navigate(['/']);
            }, error => console.error(error));
        }
    }

}
