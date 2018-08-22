import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ShareService} from '../base/share.service';
import {WINDOW} from '../window.token';

@Injectable()
export class MailShareService extends ShareService {
    constructor(@Inject(WINDOW) private readonly _window: Window) {
        super();
    }

    public share(title: string, text: string, url: string): Observable<boolean> {
        // TODO: Implement
        throw new Error('not implemented');
    }
}
