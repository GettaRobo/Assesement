import { Component , OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArticleService} from "./article.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assesement';
  private Data: any;
  constructor(private http: HttpClient, public userService: ArticleService) {}
  apititle = 'api-angular';
  articles = new Array<any>;

  // articles  :
  ngOnInit(): void{

    this.http.get<any>('http://newsapi.org/v2/everything?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=3&pageSize=6').subscribe(data => {
      this.Data = data.total;
      console.log(data);
    })
      // console.log(this.Data);

    this.userService.getArticles().subscribe(response => {
      this.articles = response.name;
    });


    // this.userService.getArticles().subscribe(response => {
    //   this.articles = response?.name;
    // });
      // console.log(this.articles);
  }

}
