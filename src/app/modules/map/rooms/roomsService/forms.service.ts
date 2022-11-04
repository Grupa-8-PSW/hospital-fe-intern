import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from '../../model/form.model';

@Injectable({
    providedIn: 'root'
})
export class FormsService {
    apiHost: string = 'http://localhost:5174/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getForms(): Observable<Form[]> {
        return this.http.get<Form[]>(this.apiHost + 'api/map/Form', { headers: this.headers });
    }

}