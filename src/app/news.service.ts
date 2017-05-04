import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {News} from './model/news';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NewsService {

    private saveNewsPostRequest = 'http://localhost:8081/rest/news/save';
    private headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});

    constructor(private http: Http) {
    }

    save(news: News): Observable<News> {
        return this.http.post(this.saveNewsPostRequest, JSON.stringify(news), {headers: this.headers})
            .map(response => response.json());
    }
}
