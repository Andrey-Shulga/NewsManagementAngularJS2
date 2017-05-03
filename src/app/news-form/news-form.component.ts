import {Component} from '@angular/core';
import {News} from '../model/news';
import {Location} from '@angular/common';
import {NewsService} from '../news.service';

@Component({
    selector: 'news-form',
    templateUrl: './news-form-template.html',
    providers: [NewsService]
})

export class AddNewsFormComponent {

    title = 'Add news';
    dt: Date = new Date;
    submitted = false;
    private model: News;

    ngOnInit() {
        this.model = this.newsService.setEmptyNews();
    }
    onSubmit() {
        this.submitted = true;
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
