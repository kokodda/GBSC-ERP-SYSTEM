import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../core';

@Component({
    selector: 'app-branch',
    templateUrl: './branch.component.html',
    styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
    pattern: any = /^\d{11}$/i;
    public com: any;
    public branches: any;

    constructor(public SystemAdministrationServiceobj: SystemAdministrationService) { }

    async ngOnInit() {

        this.SystemAdministrationServiceobj.getBranches().subscribe(res => {
            this.branches = res
        });

        this.com = await this.SystemAdministrationServiceobj.getCompanies();
    }

    async addBranches(value) {
        await this.SystemAdministrationServiceobj.addBranch(value.key);
        this.SystemAdministrationServiceobj.getBranches().subscribe(res => {this.branches = res });  
      }

    async updateBranch(value) {
        await this.SystemAdministrationServiceobj.updateBranch(value.key);
    }

    async deletBranch(value) {
        await this.SystemAdministrationServiceobj.deletBranch(value.key.branchId);
    }




}
