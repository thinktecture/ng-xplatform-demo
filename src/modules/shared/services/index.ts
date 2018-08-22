import {ApiServiceRef} from './api.service.ref';
import {AppStateService} from './appState.service';
import {ApiService} from './base/api.service';
import {CameraService} from './base/camera.service';
import {DatabaseService} from './base/database.service';
import {ShareService} from './base/share.service';
import {SyncService} from './base/sync.service';
import {TodoService} from './base/todo.service';
import {CameraServiceFactory, CameraServiceFactoryDeps} from './camera/camera.service.factory';
import {DatabaseServiceRef} from './database.service.ref';
import {FeatureService} from './feature.service';
import {NotificationService} from './notification.service';
import {ShareServiceFactory, ShareServiceFactoryDeps} from './share/share.service.factory';
import {SyncServiceRef} from './sync.service.ref';
import {TodoServiceRef} from './todo.service.ref';

export const SHARED_SERVICES = [
    { provide: DatabaseService, useClass: DatabaseServiceRef },
];
