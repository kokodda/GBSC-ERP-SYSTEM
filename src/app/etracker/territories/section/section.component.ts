import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../../app/core';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

    public sections: any;
    public territories: any;
    public companyId: any;

    constructor(public inventoryService: InventorysystemService, public authService: AuthService) {
        this.companyId = this.authService.getUserCompanyId();
    }

    ngOnInit() {

        this.inventoryService.getSectionsByCompany(this.companyId).subscribe(resp => {
            this.sections = resp;
        });

        this.inventoryService.getTerritoriesByCompany(this.companyId).subscribe(t => this.territories = t);
    }

    addSection(value) {

        value.data.companyId = this.companyId;
        this.inventoryService.AddSection(value.data).subscribe(resp => console.log(resp));

    }

    updateSection(value) {

        value.companyId = this.companyId;
        let model = { ...value.oldData, ...value.newData };
        this.inventoryService.UpdateSection(model).subscribe(resp => {
            console.log(resp);
        });

    }

    deleteSection(value) {

        this.inventoryService.DeleteSection(value.key).subscribe(resp=> console.log('Section Deleted'));
    }

}
