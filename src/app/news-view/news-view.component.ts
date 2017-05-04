import {Component, OnInit} from "@angular/core";

import {NewsService} from "../news.service";
import {News} from "../model/news";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    templateUrl: './news-view-template.html'
})

export class NewsViewComponent implements OnInit {
    title = 'News view';
    model: News;
    newsId: number;

    constructor(private newsService: NewsService, private route: ActivatedRoute, private forward: Router) {
    }

    ngOnInit() {
        this.getById();
    }

    getById() {
        this.route.params.subscribe((params: Params) => {
            this.newsId = params['id']
        });
        if (this.newsId) {
            this.newsService.getById(this.newsId)
                .subscribe(news => this.model = news,
                    error => console.error('Error: ' + error),
                    () => console.log('Get by id completed!', this.model)
                );
        }
    }

    edit(news: News) {
        this.forward.navigate([`/add-news/${news.id}`])
    }
}
