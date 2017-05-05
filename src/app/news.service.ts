import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

import {News} from './model/news';

@Injectable()
export class NewsService {

    private saveNewsPostRequest = 'http://localhost:8081/rest/news/save';
    private getNewsListGetRequest = 'http://localhost:8081/rest/news';
    private deleteNewsByIdPostRequest = 'http://localhost:8081/rest/news/delete';
    private deleteNewsListPostRequest = 'http://localhost:8081/rest/news/delete/list';
    private headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});

    constructor(private http: Http) {
    }

    save(news: News): Observable<News> {
        return this.http.post(this.saveNewsPostRequest, JSON.stringify(news), {headers: this.headers})
            .map(response => response.json())
            .catch(this.handleError);
    }

    getAll(): Observable<News[]> {
        return this.http.get(this.getNewsListGetRequest)
            .map(res => <News[]> res.json())
            .catch(this.handleError);
    }

    getById(id: number): Observable<News> {
        const url = `${this.getNewsListGetRequest}/get/${id}`;
        return this.http.get(url)
            .map(response => <News> response.json())
            .catch(this.handleError);
    }

    deleteById(id: number): Observable<News> {
        return this.http.post(this.deleteNewsByIdPostRequest, JSON.stringify(id), {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    deleteList(newsList: News[]): Observable<News[]> {
        return this.http.post(this.deleteNewsListPostRequest, JSON.stringify(newsList), {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
