import { Role } from "./role";

export interface Employee {
    FirstName: string,
    LastName: string, 
    FatherName: string,
    DOB: Date,
    POB: string,
    CNIC: string, 
    CNICExpiry: Date,
    Email: string,
    PhotoFilePath: File,
    BloodGroup: string,
    Gender: string,
    MaritalStatus: string,
    Phone: string,
    HomePhone: string,
    Address: string,
    PermanentAddress: string,
    ReligionId: number,
    cityId: number,
    countryId: number,
    companyId: number,
    departmentId: number,
    branchId: number,
    UserLanguages: Array<any>,
    userId: any,
    roleId: number,
    role: Role,
    sectionId: number,
}