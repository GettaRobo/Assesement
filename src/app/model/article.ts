export interface Article {

  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: string[];
  title: string;
  id: string;
  name: string;


  // public constructor(article: any) {
  //   this.author = article.author;
  //   this.content = article.content;
  //   this.description = article.description;
  //   this.id = article.id;
  //   this.name = article.name;
  // }
  //
  // static adapt(station: any): Article {
  //   return new Article(station);
  // }
}
