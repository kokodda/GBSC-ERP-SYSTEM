import { Component, OnInit, ViewChild } from '@angular/core';
import { AttendancesetupService, EmployeeService ,HrmsService, AuthService, UserService} from '../../../../core';
import { Employee } from '../../../../core/Models/HRM/employee';
import { DxTreeViewComponent } from 'devextreme-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
    selector: 'app-assignroster',
    templateUrl: './assignroster.component.html',
    styleUrls: ['./assignroster.component.scss']
})
export class AssignrosterComponent implements OnInit {
    @ViewChild(DxTreeViewComponent) treeView;

    public updatingModel: any;
    public shifts: any;
    public employee: any;
    popupVisible = false;
    public assignrosters: any;
    public rosterAsign: any;
    public rosterData: any = {};
    public roster: any;
    selectedRows: number[];
    prefix: string;
    selectionChangedBySelectbox: boolean;
    public selectedUsers = [];
    public calendarForm: FormGroup;
    public currentdate: any;

    public offDaysDateList: any = [];
    public Daysoffs: any;

    public departments : any;
    public departmentId : any; 



    constructor(public userService : UserService, public authService: AuthService, public attendancesetupservice: AttendancesetupService,
        public empservice: EmployeeService, public hrmsServiceobj : HrmsService , private formBuilder: FormBuilder , public router : Router) {
        this.calendarForm = this.formBuilder.group({
            Dayoff: [''],
            Remarks: [''],
            Daysoffs: this.formBuilder.array([])
        });
    }

    async ngOnInit() {

        // this.assignrosters = await this.attendancesetupservice.getAsignRosters();
        // console.log(this.assignrosters);
        this.attendancesetupservice.GetAsignRosters().subscribe(res=>{
            this.assignrosters = res;
         });

 
        // this.roster = await this.attendancesetupservice.getRosters();

        this.attendancesetupservice.GetRosters().subscribe(res=>{
            this.roster = res;
         });

        // this.employee = await this.empservice.GetAllEmployees();



        // this.shifts = await this.attendancesetupservice.getShifts();

        this.attendancesetupservice.GetShifts().subscribe(res=>{
            this.shifts = res;
         });

        this.empservice.getAllEmployees().subscribe(res=>{
            this.employee = res;
         });


        this.hrmsServiceobj.GetAllDepartments().subscribe(res=>{
            this.departments = res ;
         });

    }
    
    addOffDaysList(value) {
        this.calendarForm.value.Daysoffs = value;
        delete this.calendarForm.value.Dayoff;
        delete this.calendarForm.value.Remarks;
        this.Daysoffs = this.calendarForm.value; 
 
    } 
    public inputvaluelist: any = []; 

    changeremarks(e, i) {
        this.inputvaluelist[i].Remarks = e.target.value
    }


    onDepartmentChange(value){
        this.departmentId = value;
        if(this.departmentId){
            this.empservice.GetEmployeesByDepartmentId(this.departmentId).subscribe(res=> {
                    this.employee = res;
            });
        }
    }


    click(formatDate, todate) {
        var currentDate = new Date(formatDate.value);
        var endDate = new Date(todate.value);
        //   let counter = 0;
        this.inputvaluelist.push({
            Dayoff: this.formatDate(new Date(currentDate)),
            Remarks: 'On'
        });
        
        while (currentDate < endDate) {
            currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
            let a: any = {
                Dayoff: this.formatDate(new Date(currentDate)),
                Remarks: 'On'
            };
            this.inputvaluelist.push(a);
            //   counter ++;
        }
 
        return this.inputvaluelist;
    }





    addrange() {
        let { value } = this.calendarForm;
        let doc = {
            Dayoff: value.Dayoff,
            Remarks: value.Remarks
        }
        this.offDaysDateList.push(doc);
    }
    remove(index) {
        this.offDaysDateList.splice(index, 1);
    }

    openOffDayModel() {
        this.currentdate = this.formatDate(new Date());
     }

    formatDate(date: Date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }


    showInfo() {
        this.popupVisible = true;
    }

    selectionChangedHandler(e) {
 
        
        this.rosterData.UserAssignRosters = e.selectedRowsData.map(u => {
            return {
                userId: u.userId,

            };
        });
        if (!this.selectionChangedBySelectbox) {
            this.prefix = null;
        }

        this.selectionChangedBySelectbox = false;
    }

    addselecteduser() {
        this.popupVisible = false;
    }
    

    async addassignroster(value) {
        this.rosterData = { ...this.rosterData, ...value.data };
        this.rosterData.Daysoffs = this.Daysoffs.Daysoffs.map(d => d);
         await this.attendancesetupservice.addAsignRoster(this.rosterData);
        this.assignrosters = await this.attendancesetupservice.getAsignRosters();
     }

    async updatingAssignroster(value) {

        this.updatingModel = { ...value.oldData, ...value.newData };
    }

    async updateassignroster() {
        await this.attendancesetupservice.updateAsignRoster(this.updatingModel);
    }

    async deleteassignroster(value) {
        await this.attendancesetupservice.DeleteAsignRoster(value.key);
    }



    // public exportButtonHandler(value) {
    //     this.excelExportService.exportData(value, new IgxExcelExporterOptions("ExportFileFromData"));
    // }


    routeForUpdateAssignroster(id){
           this.router.navigate(['/hrm/attendance/updateassignroster/'+id.key]);
    }


    onClickMe(d){
        this.router.navigate(['/hrm/attendance/assignrosterexcelsheet/'+d.key]);
    }
  
}
