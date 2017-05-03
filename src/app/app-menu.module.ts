import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NewsListComponent} from './news-list/news-list.component';
import {AddNewsFormComponent} from './add-news-form/news-form.component';
import {PageNotFoundComponent} from './not-found.component';

const appRoutes: Routes = [
    {path: 'news-list', component: NewsListComponent},
    {path: 'add-news', component: AddNewsFormComponent},
    {path: '', redirectTo: '/news-list', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppMenuModule {
}
