import {Component} from '@angular/core';
import {News} from '../model/news';
import {Location} from '@angular/common';

@Component({
    selector: 'news-form',
    templateUrl: './news-form-template.html'
})

export class AddNewsFormComponent {

    dt: Date = new Date;

    model = new News('', this.dt, '', '');

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    constructor(private location: Location) {
    }

    cancel() {
        this.location.back();
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }


}
