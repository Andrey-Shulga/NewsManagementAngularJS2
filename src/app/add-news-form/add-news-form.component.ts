import {Component} from "@angular/core";
import {News} from "../model/news";

@Component({
    selector: 'news-form',
    templateUrl: './add-news-form.html'
})

export class AddNewsFormComponent {

    model = new News(1, 'Title', new Date, 'Brief', 'Content');

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }


}
