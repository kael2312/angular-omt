import {UserModel} from "./user.model";

export interface TeacherModel extends UserModel {
    role: "teacher";
    foreignLanguageProficiency: string;
    maritalStatus: string;
}
