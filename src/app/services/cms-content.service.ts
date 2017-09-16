import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';


@Injectable()
export class CmsContentService {

  url: string = environment.api_url;

  constructor(private http: Http) {}

  homepageContent(): Observable<any> {
    return this.http.get(`${this.url}/homepage`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(e): Observable<any> {
    return Observable.throw(e.json().message);
  }

}
