import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Rx';
import {ISyncItem} from '../../models/contracts/syncItem.interface';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export abstract class SyncService {
    constructor(private _apiService: ApiService) {
    }

    public sync(collection: Array<ISyncItem>): Observable<Array<ISyncItem>> {
        return this._apiService.post('sync', collection)
            .pipe(
                map(result => result)
            );
    }
}
