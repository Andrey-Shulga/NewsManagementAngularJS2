import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {NewsService} from '../news.service';
import {News} from '../model/news';

@Component({
    selector: 'news-form',
    templateUrl: './news-form-template.html'
})

export class AddNewsFormComponent implements OnInit {
    title = 'Add news';
    currentDateTime: Date = new Date;
    submitted = false;
    model = new News(0, '', this.currentDateTime, '', '');
    newsId: number;

    constructor(private location: Location, private newsService: NewsService, private route: ActivatedRoute) {
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
                .subscribe(news => this.model = news,
                    error => console.error('Error: ' + error),
                    () => console.log('Get by id completed!', this.model)
                );
        }
    }

    onSubmit() {
        this.newsService.save(this.model)
            .subscribe(news => this.model = news,
                error => console.error('Error: ' + error),
                () => console.log('Post save completed!', this.model)
            );
        this.submitted = true;
    }

    edit(news: News) {
        this.model = news;
        this.submitted = false;
    }

    cancel() {
        this.location.back();
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }


}
