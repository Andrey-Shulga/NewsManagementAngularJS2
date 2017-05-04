import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {NewsService} from '../news.service';
import {News} from '../model/news';

@Component({
    selector: 'news-form',
    templateUrl: './news-form-template.html'
})

export class AddNewsFormComponent implements OnInit {
    title = 'Add news';
    dt: Date = new Date;
    submitted = false;
    model = new News(0, '', this.dt, '', '');

    constructor(private location: Location, private newsService: NewsService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        if (this.model.id !== 0) {
            this.newsService.getById(this.model.id)
                .subscribe(news => this.model = news,
                    error => console.error('Error: ' + error),
                    () => console.log('Get news by id completed!', this.model));
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
