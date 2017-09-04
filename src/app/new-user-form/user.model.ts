export class User {
    email: string;
    username: string;
    password: string;
    wins: number;
    ties: number;
    loses: number;

    constructor(email: string, username: string, password: string, wins?: number, ties?: number, loses?: number) {
        email = this.email;
        username = this.username;
        password = this.password;
        wins = this.wins || 0;
        ties = this.ties || 0;
        loses = this.loses || 0;
    }
}