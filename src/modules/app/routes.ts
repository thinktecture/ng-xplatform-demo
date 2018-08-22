import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TodoDetailComponent} from './components/todoDetail/todoDetail.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    /* TODO: Add detail route */
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Thinktecture Todo',
        },
    },
    {
        path: 'info',
        loadChildren: 'modules/info/info.module#InfoModule'
    }
];
