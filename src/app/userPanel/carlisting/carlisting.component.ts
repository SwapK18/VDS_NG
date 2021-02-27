import { Component, OnInit } from '@angular/core';
import { PageServService } from '../shared/page-serv.service';

@Component({
  selector: 'app-carlisting',
  templateUrl: './carlisting.component.html',
  styleUrls: ['./carlisting.component.css'],
})
export class CarlistingComponent implements OnInit {
  allBrands: any;
  allFuealType: any;
  carCount: number;
  allCars: any;
  selectedItemsList = [];
  checkedBrandNames = [];
  checkedTypeNames = [];

  filterDataObj: any = {};

  constructor(private pageWebService: PageServService) {}

  changeSelection() {
    this.fetchCheckedBrandNames();
  }

  fetchCheckedBrandNames() {
    this.checkedBrandNames = [];
    this.allBrands.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedBrandNames.push(value.BrandName);
      }
    });
    this.filterDataObj['BrandName'] = this.checkedBrandNames;
    this.getAllData();
  }

  fetchCheckedFuealTypes() {
    this.checkedTypeNames = [];
    this.allFuealType.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedTypeNames.push(value.typeName);
      }
    });
    this.filterDataObj['typeName'] = this.checkedTypeNames;
    this.getAllData();
  }

  getAllData() {
    this.allCars = [];
    this.pageWebService
      .getAllVehByFilter(this.checkedBrandNames, this.checkedTypeNames)
      .subscribe((params) => {
        if (params.status === true) {
          this.allCars = params.data;
          this.carCount = this.allCars.length;
        } else if (params.status === false) {
        }
      });
  }

  ngOnInit() {
    // get all Brands
    this.pageWebService.getAllVehBrands().subscribe((params) => {
      this.allBrands = params;
    });

    // get all Vehical Fueal Types
    this.pageWebService.getAllVehFuealType().subscribe((params) => {
      this.allFuealType = params;
    });

    // get all cars
    this.pageWebService.getAllCars().subscribe((p_cars) => {
      let paramData: any;
      paramData = p_cars;
      this.allCars = paramData.data;
      this.carCount = this.allCars.length;
    });
  }
}
