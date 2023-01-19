import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Article} from "./model/article";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }


  getArticles$() {
    const url = 'http://newsapi.org/v2/everything?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=3&pageSize=6';
    return this.http.get<any>(url);
    // .pipe(map(article => Article.adapt(article)), catchError(error => throwError(error)));

  }

  // public getArticles(): Observable<Article>{
  //   const url = 'http://newsapi.org/v2/everything?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=3&pageSize=6';
  //   return this.http.get<any>(url);
  //
  // }
}
