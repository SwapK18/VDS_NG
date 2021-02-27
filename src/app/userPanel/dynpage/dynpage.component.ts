import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageServService } from '../shared/page-serv.service';

@Component({
  selector: 'app-dynpage',
  templateUrl: './dynpage.component.html',
  styleUrls: ['./dynpage.component.css'],
})
export class DynpageComponent implements OnInit {
  order: string;
  pageId: string;
  pageDetails: any;

  constructor(
    private _activeRoute: ActivatedRoute,
    private pageService: PageServService
  ) {}

  ngOnInit() {
    this._activeRoute.params.subscribe((routeParams) => {
      this.loadPage(routeParams.id);
    });
  }

  loadPage(p_idz) {
    this.pageService.getPage(p_idz).subscribe((data) => {
      this.pageDetails = data;
    });
  }
}
