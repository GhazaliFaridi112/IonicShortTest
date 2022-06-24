  import { Component } from '@angular/core';

  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage {

    recentSearch=[{text:"I want to study marketing in England"},
    {text:"institution that offer medical in malaysia"},
      {text:"Danny Williams",image:"../../../assets/person1.jpeg"},
    {text:"Oxford University",image:"../../../assets/person2.jpeg"}]


    peopleYouMayKnow=[{name:"David Bakham",image:"../../../assets/person5.jpeg",place:"United States of america",mutual:"8"},
    {name:"Kristina Henry",image:"../../../assets/person3.jpeg",place:"United States of america",verified:true},
  ]

  topCourses=[{name:"Bachelor Of Computer Science (Hons)",image:"../../../assets/uni1.jpeg",place:"Oxford University"},
  {name:"Bachelor Of Business Administration",image:"../../../assets/uni2.png",place:"The university of melbourne"},
  {name:"Bachelor Of Fine Ars",image:"../../../assets/uni3.jpeg",place:"The university of America"},
  ]

  headers=[{name:'People'},{name:'Courses'},{name:'Institutions'},{name:'Scholarship'},{name:'Fees'},{name:'Attendance'},{name:'Abc'}]

  articles=[{name:"Why the freelance life may get easier",image:"../../../assets/bg1.jpeg",icon:"../../../assets/star.png",short:"content goes here",date:"14 oct, 2020"},{name:"Heading Goes here Heading Goes here ",image:"../../../assets/bg2.jpeg",icon:"../../../assets/shine.png",short:"content goes here",date:"15 oct, 2020"},{name:"Heading Goes here Heading Goes here ",image:"../../../assets/bg3.jpeg",icon:"../../../assets/star.png",short:"content goes here",date:"16 oct, 2020"},
  ]
    constructor() {}

  }
