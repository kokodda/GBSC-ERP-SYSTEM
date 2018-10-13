import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-qualification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {

    public qualification: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {
        await this.dataService.getAllqualifications();
        this.qualification = this.dataService.qualification;

    }


    addNewqualification(qfc) {
        this.dataService.addQualification(qfc.data);

    }

    EditNewqualification(qfction) {
        this.dataService.updateQualification(qfction);
    }

    deletequalification(qualificatin) {

        this.dataService.DeleteQualification(qualificatin.key);
    }


}