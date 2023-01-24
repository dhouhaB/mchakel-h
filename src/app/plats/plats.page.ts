import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.page.html',
  styleUrls: ['./plats.page.scss'],
})
export class PlatsPage implements OnInit {

  list=[

    {picUrl:"../../assets/icon/paradise150.png",
    itName:"دجاج(1/2 دجاج - أرز-طحينه-سلطة خضراء-خضار)",
    itPrice:29 },
    {picUrl:"",
    itName:"شيش طاووك(أرز-سلطة-خضار)",
    itPrice:29 },
    {picUrl:"",
    itName:"  أرز بالكبده(سلطة-طحينه)",
    itPrice:26 },
    {picUrl:"",
    itName:" أرز بالسجق(-سلطة-طحينه)",
    itPrice:29 },
    {picUrl:"",
    itName:"وجبة مكس (كبده وسجق-أرز-سلطة-طحينة)",
    itPrice:30 },
    {picUrl:"",
    itName:"موزة (موزة-أرز-سلطة-ملوخية-خبز)",
    itPrice:60 },
    {picUrl:"",
    itName:"حمام (حمام -أرز-سلطة خضراء - ملوخية) ",
    itPrice:65 },
    {picUrl:"",
    itName:"وجبة كفته ( أرز-طحينه-سلطة خضراء-خضار)",
    itPrice:35 }
     ]







  constructor() { }

  ngOnInit() {
  }

}
