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
    private model = new News('', this.dt, '', '');
    // ngOnInit() {
    //     this.newsService.setEmptyNews().then(model => this.model = model);
    // }
    onSubmit(): void {
        this.submitted = true;
        if (!this.model) {
            return;
        }
        this.newsService.save(new News(this.model.title, this.model.date, this.model.brief, this.model.content))
            .then(model => this.model = model);
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
