import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { dashboard } from '../../app/DashboardInterfaces';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { debug } from 'util';

//const httpOptions = {
//  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//};

const endpoint = 'http://uschizwsbo4001.corporate.ingrammicro.com/AutoQuoteDashboardAPI/api/dashboards/GetDashboardSetting';
const httpOptions1 = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  private _url: string = endpoint;

  constructor(private http: HttpClient) { }

  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }

  barChart() {
    return [
      { "name": "AUG 2019", "y": 500 }, { "name": "SEP 2019", "y": 19 }, { "name": "OCT 2019", "y": 59 }, { "name": "NOV 2019", "y": 49 }, { "name": "DEC 2019", "y": 21 }, { "name": "JAN 2020", "y": 26 }, { "name": "FEB 2020", "y": 42 }, { "name": "MAR 2020", "y": 9 }
      ]
    //return [
    //  {
    //    name: "Chrome",
    //    y: 62.74,
    //    drilldown: "Chrome"
    //  },
    //  {
    //    name: "Firefox",
    //    y: 10.57,
    //    drilldown: "Firefox"
    //  },
    //  {
    //    name: "Internet Explorer",
    //    y: 7.23,
    //    drilldown: "Internet Explorer"
    //  },
    //  {
    //    name: "Safari",
    //    y: 5.58,
    //    drilldown: "Safari"
    //  },
    //  {
    //    name: "Edge",
    //    y: 4.02,
    //    drilldown: "Edge"
    //  },
    //  {
    //    name: "Opera",
    //    y: 1.92,
    //    drilldown: "Opera"
    //  },
    //  {
    //    name: "Other",
    //    y: 7.62,
    //    drilldown: null
    //  }
    //]
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  //GetList(product): Observable<any> {
  //  return this.http.post<any>(this._url, product, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.handleError));
  //}
  getDashboardData(product): Observable<any> {
    console.log(product);
    debugger;
    return this.http.post<any>(endpoint, JSON.stringify(product), httpOptions1).pipe(
      tap((product) => product),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //GetList(): Observable<dashboard> {
  //  debugger;
  //  console.log(this.http.get<dashboard>(this._url));
  //  //return this.http.get<dashboard>(this._url);

  //  const promise = this.http.get<dashboard>(this._url).toPromise();
  //  console.log(promise);
  //  promise.then((data) => {
  //    console.log("Promise resolved with: " + JSON.stringify(data));
  //  }, (error) => {
  //    console.log("Promise rejected with " + JSON.stringify(error));
  //  });
  //  return promise;
  //}

  //GetList():    Observable<dashboard[]> {
  //  debugger;
  //  //console.log(this.http.get<dashboard[]>(this._url));
  //  //return this.http.get<dashboard[]>(this._url);
  //  return this.http.post<dashboard[]>(this._url,)



  //    //.map((res: Response) => res.json())
  //    //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  //}


}

