import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {DatabaseServiceRef} from '../database.service.ref';

@Injectable({
    providedIn: 'root',
    useClass: DatabaseServiceRef
})
export class DatabaseService extends Dexie {
    constructor() {
        super('XplatformWorkshop');
        this._initDatabase();
    }

    private _initDatabase() {
        this.version(1).stores({
            todos: '++id'
        });
    }
}
