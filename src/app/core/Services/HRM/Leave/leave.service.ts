import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class LeaveService {

    private baseUrl: string = "SystemAdmin/api";

    constructor(private ApiService: ApiService) { }

    async getLeaveOpening() {

        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveOpenings`).toPromise();
    }

    async getdataToUpdate(leaveId, leaveUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${leaveUrl}/${leaveId}`).toPromise();
    }

    async addLeaveOpening(data) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveOpening`, data).toPromise();
    }

    async updateLeaveOpening(data) {

        let leaveopen = await this.getdataToUpdate(data.key, 'GetLeaveOpening');
        leaveopen = { ...leaveopen, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveOpening`, leaveopen).toPromise();

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

    async updateLeaveOpeningDetail(data) {

        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveOpeningDetail`, data).toPromise();

    }

    async DeleteLeaveOpeningDetail(leaveOpeningdetailId) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveOpeningDetail/${leaveOpeningdetailId}`).toPromise();
    }


    async getLeavePolicyEmployee() {
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeavePolicyEmployees`).toPromise();
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

    async addLeaveRequest(data) {
        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveRequest`, data).toPromise();
    }

    async updateLeaveRequest(data) {

        let leaverqst = await this.getdataToUpdate(data.key, 'GetLeaveRequest');
        leaverqst = { ...leaverqst, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveRequest`, leaverqst).toPromise();
    }



    async DeleteLeaveRequest(leaverequestId) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveRequest/${leaverequestId}`).toPromise();
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
}
