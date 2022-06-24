import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-you-may-know',
  templateUrl: './people-you-may-know.component.html',
  styleUrls: ['./people-you-may-know.component.scss'],
})
export class PeopleYouMayKnowComponent implements OnInit {
  @Input() peopleYouMayKnow:any;
  constructor() { }

  ngOnInit() {}

}
