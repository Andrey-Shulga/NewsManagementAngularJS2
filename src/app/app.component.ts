import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
        <div id="menu" align="center">
        <nav>
            <a routerLink="/news-list" routerLinkActive="active">News List</a>
            <a routerLink="/add-news" routerLinkActive="active">Add News</a>
        </nav>
        </div>
        <div id="body">
        <router-outlet></router-outlet>
        </div>
    `
})

export class AppComponent {
}
