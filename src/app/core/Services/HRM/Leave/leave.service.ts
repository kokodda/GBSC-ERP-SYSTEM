import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { LeaveRequest } from '../../../Models/HRM/leaveRequest';
import { Observable } from 'rxjs';
import { LeaveOpening } from '../../../Models/HRM/leaveOpening';

@Injectable()
export class LeaveService {

    public baseUrl: string = "SystemAdmin/api";
    public data: any = [];

    constructor(public ApiService: ApiService) { }

    async getLeaveOpening() {

        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveOpenings`).toPromise();
    }

    getLeaveOpeningById(id): Observable<LeaveOpening> {
        return this.ApiService.get(this.baseUrl + '/Leave/GetLeaveOpening/' + id);
    }

    async getdataToUpdate(leaveId, leaveUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${leaveUrl}/${leaveId}`).toPromise();
    }

    async addLeaveOpening(data) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveOpening`, data).toPromise();
    }

    updateLeaveOpening(data: LeaveOpening) {

        return this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveOpening`, data);
    }

    async deleteLeaveOpening(leaveOpeningId) {

        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveOpening/${leaveOpeningId}`).toPromise();
    }


    async getLeaveOpeningDetail() {

        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveOpeningDetails`).toPromise();
    }

    async addLeaveOpeningDetail(data) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveOpeningDetail`, data).toPromise();
    }

    updateLeaveOpeningDetail(data: LeaveOpening): Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveOpeningDetail`, data);

    }

    async DeleteLeaveOpeningDetail(leaveOpeningdetailId) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveOpeningDetail/${leaveOpeningdetailId}`).toPromise();
    }


    async getLeavePolicyEmployee() {
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeavePolicyEmployees`).toPromise();
    }

    getEmpPolicyById(id): Observable<any> {
        return this.ApiService.get(`${this.baseUrl}/Leave/GetLeavePolicyEmployee/` + id);
    }
 
    async addLeavePolicyEmployee(data) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeavePolicyEmployee`, data).toPromise();

    }

    async updateLeavePolicyEmployee(data) {

        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeavePolicyEmployee`, data).toPromise();

    }

    async DeleteLeavePolicyEmployee(id) {

        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeavePolicyEmployee/${id}`).toPromise();
    }

    async getAllleaverequest() {
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveRequests`).toPromise();

    }

    getleaverequest(id): Observable<LeaveRequest> {

        return this.ApiService.get(this.baseUrl + '/Leave/GetLeaveRequest/' + id);

    }

    addLeaveRequest(data): Observable<any> {
        return this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveRequest`, data);
    }

    updateLeaveRequest(data): Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveRequest`, data);
    }



    async DeleteLeaveRequest(leaverequestId) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveRequest/${leaverequestId}`).toPromise();
    }

    
    getLeaveDays() {
        return this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveDays`);

    }

    getLeaveDaysById(id): Observable<any> {

        return this.ApiService.get(this.baseUrl + '/Leave/GetLeaveDays/' + id);

    }

     addLeaveDay(data): Observable<any> {
        return this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveDay`, data);
    }

    updateLeaveDay(data): Observable<any> {

        return this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveRequest`, data);
    }
 
    DeleteLeaveDay(leaverequestId): Observable<any> {
        return this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveRequest/${leaverequestId}`);
    }


    async getLeaveRequestDetails() {
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveRequestDetails`).toPromise();
    }



    async addLeaveRequestDetail(data) {
        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveRequestDetail`, data).toPromise();
    }

    async updateLeaveRequestDetail(data) {
        return await this.ApiService.put(`${this.baseUrl}/Leave/Updateleaverequestdetail`, data).toPromise();

    }

    async DeleteLeaveRequestDetail(leaverequestdetailId) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/Deleteleaverequestdetail/${leaverequestdetailId}`).toPromise();
    }


    async getLeaveApprovals() {

        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveApprovals`).toPromise();
    }

    async addLeaveApproval(data) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveApproval`, data).toPromise();
    }

    async updateLeaveApproval(data) {

        let leaveapproval = await this.getdataToUpdate(data.key, 'Leave/GetLeaveApproval');
        leaveapproval = { ...leaveapproval, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveApproval`, leaveapproval).toPromise();

    }

    async DeleteLeaveAapproval(leaveapprovalId) {

        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveApproval/${leaveapprovalId}`).toPromise();
    }

    async getLeaveClosings() {

        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveClosings`).toPromise();
    }

    async addLeaveClosing(data) {
        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveClosing`, data).toPromise();
    }

    async updateLeaveClosing(data) {

        let leaveclosing = await this.getdataToUpdate(data.key, 'Leave/GetLeaveClosing');
        leaveclosing = { ...leaveclosing, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveClosing`, leaveclosing).toPromise();
    }

    async DeleteLeaveClosing(leaveclosingId) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveClosing/${leaveclosingId}`).toPromise();
    }

    prepareLeaveData(employees, LeaveType, empleavepolicy, LeavePolicies) {
        console.log(employees)
        console.log(LeaveType)
        console.log(empleavepolicy)
        console.log(LeavePolicies)
        console.log('it worked');
        let fromEmp = [];
        let fromGroup = [];
        employees.forEach(u => {

            empleavepolicy.forEach(emplp => {
                let et = LeaveType.find(lt =>lt.leaveTypeId === emplp.leaveTypeId)
                if (u.userId == emplp.userId) { 

                    fromEmp.push({
                        userId: emplp.userId,
                        gender: u.gender,
                        fullName: u.fullName,
                        leaveTypeId: emplp.leaveTypeId,
                        isMale: emplp.isMale,
                        isFemale: emplp.isFemale,
                        title: et? et.title:'',
                        entitledQuantity: emplp.entitledQuantity,
                        employeeLeavePolicy: true
                    });
                }
            })

            LeavePolicies.forEach(lp => {
                let t = LeaveType.find(lt => lt.leaveTypeId === lp.leaveTypeId);
                if (u.groupId === lp.groupId) {
                    fromGroup.push({
                        userId: u.userId,
                        fullName: u.fullName,
                        gender: u.gender,
                        leaveTypeId: lp.leaveTypeId,
                        isMale: lp.isMale,
                        isFemale: lp.isFemale,
                        title: t? t.title:'',
                        entitledQuantity: lp.entitledQuantity,
                        employeeLeavePolicy: false
                    });

                }

            });

        });
        let abc = []
        fromGroup = fromGroup.filter(g => {
            console.log("G", g);
            
            let y = fromEmp.find((em: any) => {
                console.log("emfrom", em);
                
                if (g.leaveTypeId == em.leaveTypeId && g.userId == em.userId) {
                    console.log(g);
                    // if(em.gender === 'Male')
                    return em;
                }
            });
            if (!y) {
                return g;
            }
            abc.push(y);
        })
        console.log(abc);
        console.log(fromGroup);
        console.log(fromEmp);
        this.data = [...fromGroup, ...fromEmp]
        console.log(this.data);
        return this.data;
        // console.log(LeaveType);
    }
}
