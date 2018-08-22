import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {pluck} from 'rxjs/operators/pluck';
import {switchMap} from 'rxjs/operators/switchMap';
import {ITodoItem} from '../../../shared/models/contracts/todoItem.interface';
import {CameraService} from '../../../shared/services/base/camera.service';
import {TodoService} from '../../../shared/services/base/todo.service';
import {finalize} from 'rxjs/operators';

@Component({
    templateUrl: './todoDetail.component.html'
})
export class TodoDetailComponent implements OnInit {
    public todoItem$: Observable<ITodoItem>;
    public image$: Observable<string>;

    constructor(/* TODO: Inject ActivatedRoute and TodoService */) {
    }

    public ngOnInit(): void {
        // TODO
    }

    public getPicture(): void {
        // TODO
    }
}
