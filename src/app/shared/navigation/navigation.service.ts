import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from 'src/app/home/home.model';


@Injectable({
    providedIn: 'root'
  })
export class NavigationService {


  constructor(private httpClient: HttpClient) { }


  public gamesList(): Observable<Item[]> {
    return this.httpClient.get<Item[]>("/assets/gameList.json");
  }

}

