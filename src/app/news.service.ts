import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {News} from './model/news';

@Injectable()
export class NewsService {
    dt: Date = new Date;
    model = new News('', this.dt, '', '');
    private saveNewsPostRequest = 'http://localhost:8081/rest/news/save';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    setEmptyNews() {
        return Promise.resolve(this.model);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    save(news: News): Promise<News> {
        return this.http
            .post(this.saveNewsPostRequest, JSON.stringify(news), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as News)
            .catch(this.handleError);
    }
}
