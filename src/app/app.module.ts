import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppMenuModule} from './app-menu.module';

import {NewsListComponent} from './news-list/news-list.component';
import {AddNewsFormComponent} from './news-form/news-form.component';
import {NewsViewComponent} from './news-view/news-view.component';
import {PageNotFoundComponent} from './not-found.component';
import {NewsService} from './news.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppMenuModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        NewsListComponent,
        AddNewsFormComponent,
        NewsViewComponent,
        PageNotFoundComponent
    ],
    providers: [NewsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
