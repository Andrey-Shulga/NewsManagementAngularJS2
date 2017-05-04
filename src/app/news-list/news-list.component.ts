import {Component, OnInit} from '@angular/core';

import {NewsService} from '../news.service';
import {News} from '../model/news';

@Component({
    templateUrl: './news-list-template.html'
})

export class NewsListComponent implements OnInit {
    title = 'News list';
    newsList: News[];

    ngOnInit() {
        this.newsService.getAll()
            .subscribe(resBody => this.newsList = resBody,
                error => console.error('Error: ' + error),
                () => console.log('Get news list completed!', this.newsList)
            );
        this.title = '111';
    }

    constructor(private newsService: NewsService) {
    }
}
