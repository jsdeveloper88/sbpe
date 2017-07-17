import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{

  constructor(private http: Http){ }

  getData(from_file): Observable<any>{

    return this.http.get(from_file)
      .map((resp: Response) => {

        let data = resp.json().data;
        return data;
      })
      .catch((error: any) => { return Observable.throw(error);});
  }
}
