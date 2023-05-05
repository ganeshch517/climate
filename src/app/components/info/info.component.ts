import { Component, OnInit } from '@angular/core';
import { ClimateService } from 'src/app/services/climate.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  locationInput: string = '';
  data: any = null;
  isLocationNotFound: boolean = false;

  constructor(private climateService: ClimateService) { }

  ngOnInit(): void {
  }

  getWeatherInfo() {
    this.climateService.getClimateInformation(this.locationInput).subscribe(info => {
      this.isLocationNotFound = false;
      this.data = info;
    }, (err) => {
      if(err.status === 404) {
        this.data = null;
        this.isLocationNotFound = true;
      }
    });
  }

}
