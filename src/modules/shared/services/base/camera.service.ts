import {Observable} from 'rxjs';

export abstract class CameraService {
    public abstract getPicture(): Observable<string>;
}
