import {ItemDetails} from '../Model/ItemDetails'
import {Injectable} from '@angular/core';
import itemjsondata from '../JsonData/ItemDetails.json';

@Injectable()
export class DataService
{
    ItemDetailsModels:Array<ItemDetails>=new Array<ItemDetails>();

    constructor() {
        this.ItemDetailsModels = itemjsondata;
     }

     GetItemDetails()
     {
         return  this.ItemDetailsModels;
     }
}
