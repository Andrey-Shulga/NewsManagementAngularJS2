import {Component} from '@angular/core';
import {News} from '../model/news';
import {Location} from '@angular/common';
import {NewsService} from '../news.service';

@Component({
    selector: 'news-form',
    templateUrl: './news-form-template.html'
})

export class AddNewsFormComponent {

    title = 'Add news';
    dt: Date = new Date;
    submitted = false;
    model = new News(0, '', this.dt, '', '');

    onSubmit() {
        this.newsService.save(this.model)
            .subscribe(resBody => this.model = resBody,
                error => console.error('Error: ' + error),
                () => console.log('Post save completed!', this.model)
            );
        this.submitted = true;
    }

    edit(news: News) {
        this.model = news;
        this.submitted = false;
    }

    constructor(private location: Location, private newsService: NewsService) {
    }

    cancel() {
        this.location.back();
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }


}
