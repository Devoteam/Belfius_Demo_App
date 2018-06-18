import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../Interfaces/user';
import { setLoadingStatus } from '../../app.utils';
import { Router } from '@angular/router';
import { JWT_TOKEN_KEY } from '../../app.constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;
    private invalidCredentials: boolean;

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

        setLoadingStatus(true);

        this.userService.login(new User(username, password))
            .subscribe(resp => {
                if (resp) {
                    let jwtToken = resp.headers.get('Authorization');
                    jwtToken = jwtToken.slice(7);
                    localStorage.setItem(JWT_TOKEN_KEY, jwtToken);
                    setLoadingStatus(false);
                    this.navigateToHomePage();
                } else {
                    this.invalidCredentials = true;
                    setLoadingStatus(false);
                }

            });

    }

    navigateToHomePage(): void {
        this.router.navigateByUrl('/homepage');
    }

}
