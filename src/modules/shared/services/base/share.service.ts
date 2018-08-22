import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ShareServiceFactory, ShareServiceFactoryDeps} from '../share/share.service.factory';

@Injectable({
    providedIn: 'root',
    useFactory: ShareServiceFactory,
    deps: ShareServiceFactoryDeps
})
export abstract class ShareService {
    public abstract share(title: string, text: string, url: string): Observable<boolean>;
}
