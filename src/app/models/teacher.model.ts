import {UserModel} from "./user.model";

export interface TeacherModel extends UserModel {
    major: string;
}
