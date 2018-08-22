import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SHARED_COMPONENTS} from './components';
import {UserInterceptor} from './interceptors/user.interceptor';
import {_window, WINDOW} from './services/window.token';

@NgModule({
    declarations: [
        ...SHARED_COMPONENTS,
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule,
    ],
    exports: [
        SHARED_COMPONENTS,
        HttpClientModule,
        FormsModule,
        CommonModule,
    ]
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                { provide: WINDOW, useFactory: _window },
                { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true }
            ],
        };
    }
}
