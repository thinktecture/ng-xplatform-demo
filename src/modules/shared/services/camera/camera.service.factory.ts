import {environment} from '../../../../environments/environment';
import {WINDOW} from '../window.token';
import {MobileCameraService} from './mobile.camera.service';
import {WebCameraService} from './web.camera.service';

export const CameraServiceFactory = (window: Window) => {
    // TODO: if environment.mobile, return MobileCameraService
    // TODO: otherwise, return WebCameraService
};

export const CameraServiceFactoryDeps = [WINDOW];
