export interface UserModel {
    id: string
    name: string;
    email: string;
    gender: string;
    phone: string;
    country: string;
    address: string;
    skills: number[];
    description: string;
}

export interface StudentModel extends UserModel {
    language: string;
}


export interface TeacherModel extends UserModel {
    level: string;
    marital: string;
}


export interface UserRegisterModel {
    id: string
    name: string;
    email: string;
    password: string;
    permissions: string[];
}

export interface UserLoginModel {
    email: string;
    password: string;
}