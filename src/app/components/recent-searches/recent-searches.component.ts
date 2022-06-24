import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
})

export class RecentSearchesComponent implements OnInit {
  @Input() recentSearch:any;
  
  constructor() { }

  ngOnInit() {}

}
