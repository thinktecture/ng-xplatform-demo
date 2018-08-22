import {Observable} from 'rxjs';

export abstract class ShareService {
    public abstract share(title: string, text: string, url: string): Observable<boolean>;
}
