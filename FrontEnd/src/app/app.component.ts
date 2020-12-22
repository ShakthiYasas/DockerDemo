import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:5000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: any = 'Docker-Angular';

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getTitle()
        .subscribe((res: any) => {
          this.title = res;
          console.log(this.title);
        }, err => {
          console.log(err);
        });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getTitle(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl)
      .pipe(
        tap(product => console.log('Found the title')),
        catchError(this.handleError('getTitle', []))
      );
  }
}
