import {Injectable} from '@angular/core';
import {ApiServiceRef} from '../api.service.ref';

@Injectable({
    providedIn: 'root',
    useClass: ApiServiceRef
})
export abstract class ApiService {
    public abstract get(urlSuffix: string): any;

    public abstract put(urlSuffix: string, payload: any): any;

    public abstract post(urlSuffix: string, payload: any): any;

    public abstract delete(urlSuffix: string): any;
}
