import {Component} from '@angular/core';

@Component({
    selector: 'menu-app',
    template: `
        <nav>
            <a routerLink="/news-list" routerLinkActive="active">News List</a><br/><br/>
            <a routerLink="/add-news" routerLinkActive="active">Add News</a>
        </nav>
    `
})

export class MenuAppComponent {
}
