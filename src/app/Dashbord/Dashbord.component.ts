import { Component, OnInit } from '@angular/core';
import {ItemDetails} from '../Model/itemDetails';

import {DataService} from '../Services/DataService'

@Component({
  selector: 'app-dashboard',
  templateUrl: './Dashbord.component.html',
  styleUrls: ['./Dashbord.component.css'],
  providers: [DataService],
})
export class DashboardComponent implements OnInit {

  datadervice:DataService=new DataService
  ItemDetailsModels:Array<ItemDetails>=new Array<ItemDetails>();
  ItemDetailsResult:Array<ItemDetails>=new Array<ItemDetails>();
  txtSearch:string;
  
  constructor(datadervice:DataService) { 
    this.datadervice=datadervice;
    this.ItemDetailsModels=this.datadervice.GetItemDetails();
    this.ItemDetailsResult =this.ItemDetailsModels;
  }

  ngOnInit(): void {
   
  }

  Search()
  {
     var searchdata=this.txtSearch;
    
     if(this.txtSearch.length>0)
     {
      this.ItemDetailsResult = this.ItemDetailsModels.filter( (data)=> {
        return data.title == searchdata
        });
     }
     else
     {
       this.ItemDetailsResult = this.ItemDetailsModels
     }   
  }

  AscendingOrder()
  {
    this.ItemDetailsResult.sort(function (x, y) {
      return x.price - y.price;
    });
  }

  DescendingOrder()
  {
    this.ItemDetailsResult.sort(function (x, y) {
      return y.price - x.price;
    });
  }

}
