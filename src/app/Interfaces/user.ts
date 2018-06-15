export class User {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    constructor(username: string) {
        this.username = username;
    }

}
