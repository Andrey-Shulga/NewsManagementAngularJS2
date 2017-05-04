import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/finally";
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

    editModel(news: News) {
        this.forward.navigate([`/add-news/${news.id}`])
    }

    deleteModel(news: News) {
        this.newsService.deleteById(news.id)
            .finally(() => this.forwardToNewsList())
            .subscribe(
                res => this.model = res,
                error => console.error('Error: ' + error),
                () => console.log('Post delete completed!', this.model)
            );
    }

    private forwardToNewsList() {
        this.forward.navigate(['/news-list']);
    }
}
