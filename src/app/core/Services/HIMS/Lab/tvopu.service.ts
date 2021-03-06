import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';

@Injectable()
export class TvopuService {

    public Url = "Hims/api/Tvopu/"


    constructor(public http: HttpClient, public ApiService: ApiService) { }

    getTvopus(): Observable<any> {
        return this.ApiService.get(this.Url + "GetAllTvopus");
    }

    getTvopusByPatientId(patientId): Observable<any> {
        return this.ApiService.get(this.Url + "GetTvopusByPatientId/" + patientId);
    }

    getTvopuByClinicalRecordId(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "getTvopuByClinicalRecordId/" + id);
    }

    getTvopu(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "GetTvopu/" + id);
    }

    addTvopu(value): Observable<any> {
        return this.ApiService.post(this.Url + "AddTvopu", value);
    }

    updateTvopu(value): Observable<any> {
        return this.ApiService.put(this.Url + "UpdateTvopu", value);
    }

    deleteTvopu(id) {
        this.ApiService.delete(this.Url + "DeleteTvopu/" + id);
    }

}
