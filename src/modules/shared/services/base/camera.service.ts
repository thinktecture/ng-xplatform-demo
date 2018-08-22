import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CameraServiceFactory, CameraServiceFactoryDeps} from '../camera/camera.service.factory';

@Injectable({
    providedIn: 'root',
    useFactory: CameraServiceFactory,
    deps: CameraServiceFactoryDeps
})
export abstract class CameraService {
    public abstract getPicture(): Observable<string>;
}
