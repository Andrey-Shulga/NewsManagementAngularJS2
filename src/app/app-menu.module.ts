import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NewsListComponent} from './news-list/news-list.component';
import {NewsViewComponent} from './news-view/news-view.component';
import {AddNewsFormComponent} from './news-form/news-form.component';
import {PageNotFoundComponent} from './not-found.component';

const appRoutes: Routes = [
    {path: 'news-list', component: NewsListComponent},
    {path: 'add-news', component: AddNewsFormComponent},
    {path: 'add-news/:id', component: AddNewsFormComponent},
    {path: 'news-view/:id', component: NewsViewComponent},
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
