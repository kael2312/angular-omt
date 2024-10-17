import {UserModel} from "./user.model";

export interface StudentModel extends UserModel {
    role: "student";
    foreignLanguage: string;
}
