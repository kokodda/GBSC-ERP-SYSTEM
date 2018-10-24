import { ModuleWithProviders, Testability } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DailyProcedureComponent } from './daily-procedure/daily-procedure.component';
import { FileRecordComponent } from './file-record/file-record.component';
import { ProceduresortestComponent } from './proceduresortest/proceduresortest.component';
import { SemensanalysislistComponent } from './semensanalysislist/semensanalysislist.component';
import { BiochemistryontreatmentComponent } from './biochemistryontreatment/biochemistryontreatment.component';
import { BiochemistryComponent } from './biochemistry/biochemistry.component';
import { BiopsyComponent } from './biopsy/biopsy.component';
import { InseminationprepComponent } from './inseminationprep/inseminationprep.component';
import { BiochemistrytestComponent } from '../lab/labsetup/biochemistrytest/biochemistrytest.component';
import { ReferencerangeComponent } from './referencerange/referencerange.component';
import { EmbryologysectionComponent } from './embryologysection/embryologysection.component';
import { TestunitComponent } from '../lab/labsetup/testunit/testunit.component';

import { EmbryologistsComponent } from '../lab/labsetup/embryologists/embryologists.component'
import { EmbryologycodesComponent } from '../lab/labsetup/embryologycodes/embryologycodes.component'
import { AuthGuardService, ModuleGuardService } from '../../core';
import { TvopuComponent } from './tvopu/tvopu.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ProtocolComponent } from './protocol/protocol.component';
import { TreatmenttypeComponent } from './treatmenttype/treatmenttype.component';
import { EmbryologyComponent } from './embryology/embryology.component';
import { InsemenationComponent } from './insemenation/insemenation.component';
import { EmbryologyThawingComponent } from './embryology-thawing/embryology-thawing.component';
import { EmbryoFreezeComponent } from './embryo-freeze/embryo-freeze.component';
import { FreezepreparationComponent } from './freezepreparation/freezepreparation.component';
import { ClinicalrecordsComponent } from './clinicalrecords/clinicalrecords.component';

export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: 'lab',
        component: RootComponent,
        canActivate: [AuthGuardService, ModuleGuardService],
        children: [
            { path: 'clinical-records', component: ClinicalrecordsComponent },
            { path: 'test-unit', component: TestunitComponent },
            { path: 'biochemistry-test', component: BiochemistrytestComponent },
            { path: 'daily-procedure', component: DailyProcedureComponent },
            { path: 'file-record', component: FileRecordComponent },
            { path: 'proceduresortest', component: ProceduresortestComponent },
            { path: 'semen-analysis-list', component: SemensanalysislistComponent },
            { path: 'biochemistry-ontreatment', component: BiochemistryontreatmentComponent },
            { path: 'biochemistry-ontreatment/:id', component: BiochemistryontreatmentComponent },
            { path: 'biochemistry', component: BiochemistryComponent },
            { path: 'biopsy', component: BiopsyComponent },
            { path: 'biopsy/:id', component: BiopsyComponent },
            { path: 'insemination-prep', component: InseminationprepComponent },
            { path: 'insemination-prep/:id', component: InseminationprepComponent },
            { path: 'referencerange', component: ReferencerangeComponent },
            { path: 'embryology-section', component: EmbryologysectionComponent },
            { path: 'embryology-section/:id', component: EmbryologysectionComponent },
            { path: 'embryologist', component: EmbryologistsComponent },
            { path: 'embryology-code', component: EmbryologycodesComponent },
            { path: 'tvopu', component: TvopuComponent },
            { path: 'tvopu/:id', component: TvopuComponent },
            { path: 'medicine', component: MedicineComponent },
            { path: 'treatment-type', component: TreatmenttypeComponent },
            { path: 'protocol', component: ProtocolComponent },
            { path: 'embryology', component: EmbryologyComponent },
            { path: 'embryology/:id', component: EmbryologyComponent },
            { path: 'insemenation', component: InsemenationComponent },
            { path: 'insemenation/:id', component: InsemenationComponent },
            { path: 'embryology-thawing', component: EmbryologyThawingComponent },
            { path: 'embryo-freeze', component: EmbryoFreezeComponent },
            { path: 'embryo-freeze/:id', component: EmbryoFreezeComponent },
            { path: 'freeze-prepration', component: FreezepreparationComponent },
            { path: 'freeze-prepration/:id', component: FreezepreparationComponent },

        ]
    }

]);