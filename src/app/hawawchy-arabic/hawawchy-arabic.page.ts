import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hawawchy-arabic',
  templateUrl: './hawawchy-arabic.page.html',
  styleUrls: ['./hawawchy-arabic.page.scss'],
})
export class HawawchyArabicPage implements OnInit {

  list=[

    {picUrl:"../assets/icon/hawawchi",
    itName:"حواوشى اسكندرانى  لحم ",
    itPrice:19 },
    {picUrl:"",
    itName:"حواوشى اسكندرانى  دجاج",
    itPrice:18 },
    {picUrl:"",
    itName:"حواوشى اسكندرانى  سجق",
    itPrice:19 },
    {picUrl:"",
    itName:"طماطم مخلله",
    itPrice:7 },
    {picUrl:"",
    itName:" حواوشى اسكندرانى  مشكل جبن",
    itPrice:7 },
    {picUrl:"",
    itName:"حواوشي مصري",
    itPrice:19 },
    {picUrl:"",
    itName:"اضافه جبنه للحواوشى ",
    itPrice:5 },
  
     ]






  constructor() { }

  ngOnInit() {
  }

}
