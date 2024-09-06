import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface IUser {
    id: number;
    name: string;
    gender: string;
    email: string,
    phone: string,
    country: string,
    address: string,
    skills: string[],
    description: string
}

export interface ICountry {
    name: string,
    code: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public skills: string[] = ['Java', 'C#', 'PHP'];
    public users: IUser[] = [];
    public user: IUser = {
        id: 0,
        name: '',
        gender: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        skills: [],
        description: ''
    };
    public validateNameUser: boolean = false;
    public countries: ICountry[] = [];

    constructor(private http: HttpClient) {
    }

    private ngOnInit() {
        this.getCountries();
    }

    public upsertUser(): void {
        this.validateNameUser = false;
        if (this.validate()) {
            return;
        }
        const isCreateUser: boolean = 0 === this.user.id;
        if (isCreateUser) {
            this.user.id = this.users.length + 1;
            this.users.push(this.user);
        } else {
            const index: number = this.users.findIndex(user => user.id === this.user.id);
            this.users[index] = this.user;
        }
        this.user = {
            id: 0,
            name: '',
            gender: '',
            email: '',
            phone: '',
            country: '',
            address: '',
            skills: [],
            description: ''
        };
    }

    public onCheckboxChange(skill: string, event: Event): void {
        const inputElement: HTMLInputElement = event.target as HTMLInputElement;
        const isChecked: boolean = inputElement.checked;
        if (isChecked) {
            this.user.skills.push(skill);
        } else {
            this.user.skills = this.user.skills.filter((el: string) => el !== skill);
        }
    }

    public update(id: number): void {
        const userUpdate: IUser | undefined = this.users.find(user => {
            return user.id === id;
        });
        if (userUpdate) {
            this.user = userUpdate;
        }
    }

    public delete(id: number): void {
        this.users = this.users.filter(user => {
            return user.id !== id;
        });
    }

    private validate(): boolean {
        if ('' === this.user.name) {
            this.validateNameUser = true;
        }
        return this.validateNameUser;
    }


    private getCountries(): void {
        this.http.get<ICountry[]>('assets/countries.json').subscribe(data => {
            this.countries = data;
        });
    }
}
