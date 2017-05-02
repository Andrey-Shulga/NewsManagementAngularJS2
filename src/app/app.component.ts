import {Component} from "@angular/core";


@Component({
    selector: 'my-app',
    template: `
        <nav>
            <a routerLink="/news-list" routerLinkActive="active">News List</a>
            <a routerLink="/add-news" routerLinkActive="active">Add News</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
}
