import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../core';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    emp: any;
    constructor(public employee: EmployeeService, public router: Router) { }

    async ngOnInit() {

        await this.employee.GetAllEmployees();
        this.emp = this.employee.employeereg;
        console.log(this.emp);
    }


    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.onadd.bind(this)
                }
            });
    }

    onadd() {
        this.router.navigate(['hrm/employee/registration'])
    }

    onupdate(d) {

        // this.router.navigate(['hrm/employee/registration'])
    console.log(d);
    
    }
}
