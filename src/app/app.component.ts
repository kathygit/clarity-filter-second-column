import { Component } from '@angular/core';
import { OrFilter } from './or-filter';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  nameOrFilter = new OrFilter('name');
  revisionOrFilter = new OrFilter('revision');
  typeOrFilter = new OrFilter('type');
  statusOrFilter = new OrFilter('status');

  designs = [
    {name: 'Cubist', revision: 'v0.1', type: 'Abstract', status: 'In production'},
    {name: 'Symbolist', revision: 'v1.1', type: 'Realist', status: 'In production'},
    {name: 'R. Crumb', revision: 'v2.0', type: 'Comic', status: 'Design review'},
    {name: 'Matt Fraction', revision: 'v0.1', type: 'Comic', status: 'Design review'},
    {name: 'Goya', revision: 'v0.1', type: 'Realist', status: 'WIP'},
    {name: 'Degas', revision: 'v1.0', type: 'Sculpture', status: 'WIP'},
    {name: 'Kadinsky', revision: 'v0.1', type: 'Abstract', status: 'WIP'}
  ];

  dgRefresh(event: any) {
    console.log(event);
  }

}
