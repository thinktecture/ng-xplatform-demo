import {Injectable} from '@angular/core';
import Dexie from 'dexie';

@Injectable({
    providedIn: 'root',
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
