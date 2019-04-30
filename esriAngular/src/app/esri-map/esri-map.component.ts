import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  // this is needed to be able to create the MapView at the DOM element in this component
  @ViewChild('viewDiv') private mapViewEl: ElementRef;
  constructor() { }

  ngOnInit() {
    loadModules([
      'esri/Map',
      'esri/views/MapView'
    ])
      .then(([EsriMap, EsriMapView]) => {
        const map = new EsriMap({
          basemap: 'streets'
        });

        const mapView = new EsriMapView({
          container: this.mapViewEl.nativeElement,
          center: [78.03, 30.32],
          zoom: 12,
          map: map
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

}
