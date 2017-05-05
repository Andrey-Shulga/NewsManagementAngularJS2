import {Component, OnInit} from '@angular/core';

import {NewsService} from '../news.service';
import {News} from '../model/news';
import {Router} from '@angular/router';

@Component({
    templateUrl: './news-list-template.html'
})

export class NewsListComponent implements OnInit {
    title = 'News list';
    newsList: News[];
    checkedNews: News[] = [];

    constructor(private newsService: NewsService, private forward: Router) {
    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.newsService.getAll()
            .subscribe(resBody => this.newsList = resBody,
                error => console.error('Error: ' + error)
            );
    }

    updateChecked(event: any, news: News) {
        let index = this.checkedNews.indexOf(news);
        if (event.target.checked) {
            console.log('adding model with id ' + news.id);
            if (index === -1) {
                this.checkedNews.push(news);
            }
        } else {
            console.log('removing model with id ' + news.id);
            if (index !== -1) {
                this.checkedNews.splice(index, 1);
            }
        }
        console.log(this.checkedNews);
    }

    onSubmit() {
        this.newsService.deleteList(this.checkedNews)
            .finally(() => this.forwardToNewsList())
            .subscribe(
                res => this.checkedNews = res,
                error => console.error('Error: ' + error),
                () => console.log('Post delete list completed!', this.checkedNews)
            );
    }

    private forwardToNewsList() {
        this.forward.navigate(['/news-list']);
    }
}
