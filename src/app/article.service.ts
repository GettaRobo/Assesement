import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "./model/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  public getArticles(): Observable<any>{
    const url = 'http://newsapi.org/v2/everything?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=3&pageSize=6';
    return this.http.get<any>(url);

  }
  // public getArticles(): Observable<Article>{
  //   const url = 'http://newsapi.org/v2/everything?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=3&pageSize=6';
  //   return this.http.get<any>(url);
  //
  // }
}
