import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-daily-semen-analysis',
    templateUrl: './daily-semen-analysis.component.html',
    styleUrls: ['./daily-semen-analysis.component.scss']
})
export class DailySemenAnalysisComponent implements OnInit {

    public DailySemenAnalysisForm: FormGroup;
    public ProcedureForm: FormGroup;
    public Patients: any;
    public Consultants: any;
    public Procedure: any;
    public Procedurearray: any = [];
    public dailysemenanalysisobj: any;

    constructor(public formBuilder: FormBuilder, public PatientServiceobj: PatientService, public router: Router) {
        this.DailySemenAnalysisForm = this.formBuilder.group({
            'Timein': ['', Validators.required],
            'Timeout': ['', Validators.required],
            'Payment': ['', Validators.required],
            'Remarks': ['', Validators.required],
            'PatientId': ['', Validators.required],
            'ConsultantId': ['', Validators.required],
            'DailySemenAnalysisProcedures': ['', this.formBuilder.array([])],
            // 'ProcedureId' :['',Validators.required] 
        });
    }

    ngOnInit() {
        this.PatientServiceobj.getPatientObservable().subscribe(res => {
            this.Patients = res;
            console.log(this.Patients);
        });

        this.PatientServiceobj.GetConsultants().subscribe(res => {
            this.Consultants = res;
            console.log(this.Consultants);
        });


        this.PatientServiceobj.getProcedure().subscribe(res => {
            this.Procedure = res;
            console.log(this.Procedure);

        });

        this.PatientServiceobj.getDailySemenAnalysis().subscribe(res =>{
            console.log(res);
        })


    }

    addDailySemenAnalysis(value) {
        console.log(this.DailySemenAnalysisForm.value);
        this.DailySemenAnalysisForm.value.DailySemenAnalysisProcedures = this.Procedurearray
        console.log(value);
        this.PatientServiceobj.addDailySemenAnalysis(value).subscribe(res => {
            console.log(res);
        });

        // this.DailySemenAnalysisForm.reset();
        // this.router.navigate(['/hims/patient/dailysemenanalysisview']);
    }

    addProcedure(value) {
        let x = value.key;
        this.Procedurearray.push(x);
        console.log(this.Procedurearray)
    }

    deleteProcedure(value) {
        this.Procedurearray.splice(value.key, 1)
        
    }



}
