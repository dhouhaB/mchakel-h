import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salades',
  templateUrl: './salades.page.html',
  styleUrls: ['./salades.page.scss'],
})
export class SaladesPage implements OnInit {
  list=[

    {picUrl:"",
    itName:"طحينه ",
    itPrice:7 },
    {picUrl:"",
    itName:"بابا غنوج ",
    itPrice:7 },
    {picUrl:"",
    itName:"سلطه خضراء",
    itPrice:7 },
    {picUrl:"",
    itName:"طماطم مخلله",
    itPrice:7 },
    {picUrl:"",
    itName:"باذنجان مخلل",
    itPrice:7 },
    {picUrl:"",
    itName:"مخلل مشكل",
    itPrice:5 },
    {picUrl:"",
    itName:"مشكل سلطات",
    itPrice:17 },
  
     ]

  constructor() { }

  ngOnInit() {
  }

}
