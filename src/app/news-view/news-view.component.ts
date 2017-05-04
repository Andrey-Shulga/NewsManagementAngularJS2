import {Component, OnInit} from '@angular/core';

import {NewsService} from '../news.service';
import {News} from '../model/news';

@Component({
    templateUrl: './news-view-template.html'
})

export class NewsViewComponent implements OnInit {
    title = 'News view';
    model: News;

    constructor(private newsService: NewsService) {
    }

    ngOnInit() {
    }
}
