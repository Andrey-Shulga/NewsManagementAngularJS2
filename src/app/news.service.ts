import {Injectable} from '@angular/core';
import {News} from './model/news';


@Injectable()
export class NewsService {
    dt: Date = new Date;
    model = new News('', this.dt, '', '');

    setEmptyNews() {
        return Promise.resolve(this.model);
    }
}
