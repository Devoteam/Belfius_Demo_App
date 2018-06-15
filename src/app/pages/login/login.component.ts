import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../Interfaces/user';
import { setJwtTokenInLocalstorage } from '../../app.utils';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm(): void {
        this.loginForm = this.formBuilder.group({
            username: ['arno.bruynseels@devoteam.com', Validators.email],
            password: ['test', Validators.required]
        });
    }

    login(): void {
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        this.userService.login(new User(username, password))
            .subscribe(resp => {
                let jwtToken = resp.headers.get('Authorization');
                jwtToken = jwtToken.slice(7);
                setJwtTokenInLocalstorage(jwtToken);
                this.navigateToHomePage();
            });
    }

    navigateToHomePage(): void {
        this.router.navigate(['/homepage']);
    }
}
