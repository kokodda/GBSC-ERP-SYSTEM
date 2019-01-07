import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { PatientService } from '../../../../app/core';
import { InsemenationService } from '../../../../app/core/Services/HIMS/Lab/insemenation.service';

@Component({
    selector: 'app-insemenation-records',
    templateUrl: './insemenation-records.component.html',
    styleUrls: ['./insemenation-records.component.scss']
})
export class InsemenationRecordsComponent implements OnInit {

<<<<<<< HEAD
    private patients: any;
    private spouse: any;
    private patient: any;
    private tests: any;
    private id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(private insemenationService: InsemenationService,
        private patientService: PatientService) {
=======
    public patients: any;
    public spouse: any;
    public patient: any;
    public tests: any;
    public id: any;

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    constructor(public insemenationService: InsemenationService,
        public patientService: PatientService) {
>>>>>>> 989fc8cb58daeccd112ddd1a19627eb3494c5d9d

        this.tests = [];
    }

    ngOnInit() {

        this.patientcb.onValueChanged.subscribe(res => {
            this.populatePatientDate(res.component.option("value"))

        });

        this.patientService.getPatientCb().subscribe(patients => this.patients = patients);

    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;

            this.insemenationService
                .getPatientInsemenationsPatientId(this.patient.patientId).subscribe(resp => {
                    console.log(resp)
                    this.tests = resp;
                });

        });
    }

}
