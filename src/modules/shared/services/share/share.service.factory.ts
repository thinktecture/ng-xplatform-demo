import {environment} from '../../../../environments/environment';
import {BrowserFeatureKey} from '../../models/browserFeatureKey.model';
import {FeatureService} from '../feature.service';
import {WINDOW} from '../window.token';
import {CordovaShareService} from './cordova.share.service';
import {MailShareService} from './mail.share.service';
import {WebShareService} from './web.share.service';

export const ShareServiceFactory = (featureService: FeatureService, window: Window) => {
    const feature = featureService.detectFeature(BrowserFeatureKey.WebShareAPI);

    // TODO: if feature.supported, return new WebShareService
    // TODO: if environment.mobile, return new CordovaShareService
    // TODO: otherwise, return new MailShareService
};

export const ShareServiceFactoryDeps = [FeatureService, WINDOW];
