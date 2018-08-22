import {Injectable} from '@angular/core';
import {ISyncItem} from '../../models/contracts/syncItem.interface';
import {SyncServiceRef} from '../sync.service.ref';

@Injectable({
    providedIn: 'root',
    useClass: SyncServiceRef
})
export abstract class SyncService {
    abstract sync(collection: Array<ISyncItem>): any;
}
