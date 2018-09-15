import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../patient/services/patient.services';
 import { visitValue } from '@angular/compiler/src/util';
import { Loginform } from '../../../models/loginform';
import { InventorysystemService } from '../../../../app/Inventorysystem/service/Inventorysystem.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],

})

export class RegistrationComponent implements OnInit {

    private patientForm: FormGroup;
    public partnerForm: FormGroup;
    public documentForm: FormGroup;
    public referenceForm: FormGroup;

    public editdocumentForm : FormGroup;
    public documents  = [];
    public currentDoc: any = {};
    public addpartnet: any;
    public addDocument: any;
    public updateDocument  = [];

    public addReference: any;

    public partnerDetails: any;
    public currentUser = new Loginform();

    public visitnature : any;

    id: number;

    public Patient : any =' ';





    public documentss: any = [];
    constructor(private formBuilder: FormBuilder, private PatientServiceobj: PatientService, public router: Router, private route : ActivatedRoute) {

        this.referenceForm = this.formBuilder.group({
            'ReferredBy': ['', Validators.required],
            'PersonName': ['', Validators.required],
            'RefAddress': ['', Validators.required],
            'ReferenceTel': ['', Validators.required]
        });
        this.documentForm = this.formBuilder.group({
            'DocumentName': ['', Validators.required],
            'Remarks': ['', Validators.required],
            'FilePath': ['', Validators.required]
        });
        this.partnerForm = this.formBuilder.group({
            'FirstName': ['', Validators.required],
            'MiddleName': ['', Validators.required],
            'LastName': ['', Validators.required],
            'DOB': ['', Validators.required],
            'PlaceOfBirth': ['', Validators.required],
            'Occupation': ['', Validators.required],
            'NIC': ['', Validators.required],
            'PhoneNumber': ['', Validators.required],
        });
        this.patientForm = this.formBuilder.group({
            'RegCity': ['', Validators.required],
            'visitNatureId': ['', Validators.required],
            'FirstName': ['', Validators.required],
            'MiddleName': ['', Validators.required],
            'LastName': ['', Validators.required],
            'DOB': ['', Validators.required],
            'PlaceOfBirth': ['', Validators.required],
            'Occupation': ['', Validators.required],
            'NIC': ['', Validators.required],
            'Gender': ['', Validators.required],
            'PhoneNumber': ['', Validators.required],
            'OfficeAddress': ['', Validators.required],

            'ResidenceAddress': ['', Validators.required],
            'Remarks': ['', Validators.required],
            'OfficeTel': ['', Validators.required],
            'ForeignAddress': ['', Validators.required],
            'Country': ['', Validators.required],
            'City': ['', Validators.required],
            'State': ['', Validators.required],
            'PostalCode': ['', Validators.required],
            'Initial': ['', Validators.required],
            'PrivatePatientCons': ['', Validators.required],
            'PrivateHospital': ['', Validators.required],
            'AuthorizedPerson': ['', Validators.required],
            //'patientId' :['',Validators.required]
        });

        this.editdocumentForm = this.formBuilder.group({
            'DocumentName': ['', Validators.required],
            'Remarks': ['', Validators.required],
            'FilePath': ['', Validators.required]
        });
    }


    addrange() {

        let { value } = this.documentForm;

        let doc = {
            DocumentName: value.DocumentName,
            Remarks: value.Remarks,
            FilePath: value.FilePath
        }

        if (this.documentForm.valid) {
            this.documentss.push(doc);
            console.log(this.documentss);
            this.documentForm.reset();
        } else {
            alert('All fields are required');
        }

    }

    remove(index) {
        this.documentss.splice(index, 1);
    }
    removeaddeddata(i)
    {
        this.Patient.patientDocuments.splice(i,1 )
        console.log(i)
    }

    async onSubmit(value) {
        localStorage.setItem('patientdata', JSON.stringify(value));
        value.partner = this.addpartnet;
        value.patientReference = this.addReference;
        value.patientDocuments = this.addDocument;
        console.log(value);
        await this.PatientServiceobj.addPatient(value);
        this.router.navigate(['/hims/patient/findpatient']);
        this.PatientServiceobj.getPatient();
        
        // this.PatientServiceobj.getPatient();
        // console.log(value);
        // return
    }

    onAddPartner(value) {
        console.log(value);
          this.addpartnet = value
    }


    onupdatedocument(value){
       // this.updateDocument = value
        // console.log(this.documentss)
        console.log(value)
     }

    onAddDocument(value) {
       
      
        this.addDocument = value;
        console.log(this.addDocument)
     
    //     console.log(value);
    //  this.addDocument = value;
    }

    onAddReference(value) {
        console.log(value);
        this.addReference = value;
    }

  async  updatePatient(){
   // this.patientForm.value.patientId = this.id;
     let x = await  this.PatientServiceobj.updatePatient(this.id);
   // console.log(x);
   console.log(this.id)
    }


    async ngOnInit() {

        this.route.params.subscribe((params) => {
            this.id = +params['id'];
  
         
            let x = this.PatientServiceobj.getpatient(this.id).subscribe((Patient : any)=> {
              this.Patient = Patient;
              this.documents = Patient.patientDocuments
              console.log(Patient)
           });
          });


        await this.PatientServiceobj.getPatient()
        let x = this.PatientServiceobj.patients
        console.log(x);
        console.log(this.PatientServiceobj.patients)

        await this.PatientServiceobj.getpatientForupdating(this.partnerDetails);
        let y = this.PatientServiceobj.patientData
        console.log(y);

        await this.PatientServiceobj.GetVisitNatures();
        this.visitnature = this.PatientServiceobj.visitNatures;
        console.log(this.visitnature);

        // if(this.route.url = 'http://localhost:4200/hims/patient/updatepatient/253'){

        // }
   


    }


}
