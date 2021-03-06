import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-payroll',
    templateUrl: './payroll.component.html',
    styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {

    public employees: any;
    public payRoll: any;
    public MasterpayRoll: any;

    constructor(public payrollsetupservice: PayrollSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.payRoll = await this.payrollsetupservice.getPayrolls();

         this.payrollsetupservice.getMasterPayrolls().subscribe(resp => {
            this.MasterpayRoll = resp
         });

        this.employees = await this.employeeservice.GetAllEmployees();
    }

    async addPayroll(value) {
        await this.payrollsetupservice.addPayroll(value.data);
        this.payRoll = await this.payrollsetupservice.getPayrolls();
    }

    async updatePayroll(value) {
        await this.payrollsetupservice.updatePayroll(value);
    }

    async deletePayroll(value) {
        await this.payrollsetupservice.deletePayroll(value.key);
    }

}