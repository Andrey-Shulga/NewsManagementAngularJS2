import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppMenuModule} from './app-menu.module';

import {NewsListComponent} from './news-list/news-list.component';
import {AddNewsFormComponent} from './add-news-form/news-form.component';
import {PageNotFoundComponent} from './not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppMenuModule
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
