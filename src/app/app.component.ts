import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, startWith} from "rxjs";
import {ArticleService} from "./article.service";
import {FormControl} from "@angular/forms";
import _ from "lodash";
import {Article} from "./model/article";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assesement';
  Data: any;

  constructor(private http: HttpClient, public userService: ArticleService) {
  }

  apititle = 'api-angular';
  articles$ = Observable<Article[]>;
  toppings = new FormControl('');
  categoriesList: string[] = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
  myControl = new FormControl('');
  streets: string[] = ['LifeHacker', ''];
  filteredOptions: Observable<string[]> | undefined;

  // articles  :`
  ngOnInit(): void {

    // this.http.get<any>('http://newsapi.org/v2/everything?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=3&pageSize=6').subscribe(data => {
    //   this.Data = data.total;
    //   console.log(this.Data);
    // })
    // console.log(this.Data);
    this.userService.getArticles$().subscribe(res => {
      this.Data = res;
      console.log(this.Data.articles[0]);
    })
    // this.userService.getArticles$().subscribe(response => {
    //   console.log(response);
    //   // this.articles = response.name;
    // });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    // this.userService.getArticles().subscribe(response => {
    //   this.articles = response?.name;
    // });
    // console.log(this.articles);
    // this.articles$ = this.http.get<Article[]>(
    //   'http://newsapi.org/v2/everything?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=3&pageSize=6').map(
    //     data =>_.values(data)).do(console.log);

  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
