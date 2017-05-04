import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/finally";

import {NewsService} from "../news.service";
import {News} from "../model/news";

@Component({
    selector: 'news-form',
    templateUrl: './news-form-template.html'
})

export class AddNewsFormComponent implements OnInit {
    title = 'Add news';
    currentDateTime: Date = new Date;
    model = new News(0, '', this.currentDateTime, '', '');
    newsId: number;

    constructor(private location: Location, private newsService: NewsService, private route: ActivatedRoute, private forward: Router) {
    }

    ngOnInit(): void {
        this.getById();
    }

    getById() {
        this.route.params.subscribe((params: Params) => {
            this.newsId = params['id']
        });
        if (this.newsId) {
            this.newsService.getById(this.newsId)
                .subscribe(
                    news => this.model = news,
                    error => console.error('Error: ' + error),
                    () => console.log('Get by id completed!', this.model)
                );
        }
    }

    onSubmit() {
        this.newsService.save(this.model)
            .finally(() => this.forwardToView())
            .subscribe(
                news => this.model = news,
                error => console.error('Error: ' + error),
                () => console.log('Post save completed!', this.model)
            );
    }

    forwardToView() {
        this.forward.navigate([`/news-view/${this.model.id}`])
    }

    cancel() {
        this.location.back();
    }


}
