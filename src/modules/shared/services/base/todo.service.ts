import {DatabaseService} from './database.service';
import {ITodoItem} from '../../models/contracts/todoItem.interface';
import Dexie from 'dexie';

export class TodoService {
    protected table: Dexie.Table<ITodoItem, number>;

    constructor(private _databaseService: DatabaseService) {
        this.table = this._databaseService.table('todos');
    }

    public getAll(includeDeleted: boolean): Promise<Array<ITodoItem>> {
        if (includeDeleted) {
            // TODO
        }
        // TODO
        throw new Error('not implemented');
    }

    public async get(id: string): Promise<ITodoItem> {
        // TODO
        throw new Error('not implemented');
    }

    public add(item: ITodoItem): Promise<number> {
        // TODO
        throw new Error('not implemented');
    }

    public async update(item: ITodoItem): Promise<boolean> {
        item.changed = true;
        // TODO
        throw new Error('not implemented');
    }

    public async delete(item: ITodoItem): Promise<boolean> {
        if (!item.syncId) {
            // TODO
            throw new Error('not implemented');
            return Promise.resolve(true);
        } else {
            item.deleted = true;
            // TODO
            throw new Error('not implemented');
        }
    }

    public async overwrite(list: Array<ITodoItem>): Promise<Array<ITodoItem>> {
        // Delete IDs to prevent duplicate key
        list.forEach(item => delete item.id);

        await this.table.clear();
        await this.table.bulkAdd(list);
        return this.getAll(false);
    }

    public clear(): Promise<void> {
        return this.table.clear();
    }
}
