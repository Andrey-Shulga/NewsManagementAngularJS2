import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NewsListComponent} from './news-list.component';
import {AddNewsFormComponent} from './add-news-form.component';
import {PageNotFoundComponent} from './not-found.component';


const appRoutes: Routes = [
    {path: 'news-list', component: NewsListComponent},
    {path: 'add-news', component: AddNewsFormComponent},
    {path: '', redirectTo: '/news-list', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        AppComponent,
        NewsListComponent,
        AddNewsFormComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
