import {Component, OnInit} from '@angular/core';

import {NewsService} from '../news.service';

@Component({
    templateUrl: './news-view-template.html'
})

export class NewsViewComponent implements OnInit {
    title = 'News view';

    constructor(private newsService: NewsService) {
    }

    ngOnInit() {
    }
}
