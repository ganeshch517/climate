import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  constructor(private http: HttpClient) { }

  public getClimateInformation(location: string) {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${location},IN&APPID=aebdd7758f13157e1f0b407b96d57ed5&units=metric`);
  }

}
