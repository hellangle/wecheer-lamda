import { ApiResponse } from './models/api-response.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ImageEvent {
  imageUrl: string;
  description: string;
  receivedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ImageEventService {
  private apiUrl = `${environment.apiUrl}/images`;

  constructor(private http: HttpClient) { }
  getLastEvent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/last-event`);
  }

  getLastHourEventCount(): Observable<ApiResponse<number>> {
    return this.http.get<ApiResponse<number>>(`${this.apiUrl}/last-hour-event-count`);
  }
}
