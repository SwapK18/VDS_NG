import { Component, OnInit } from "@angular/core";
import { AdminAuthService } from "../_shared/admin-auth.service";
import { ApplyStyleScriptsService } from "../_shared/apply-style-scripts.service";

@Component({
  selector: "app-manage-pages",
  templateUrl: "./manage-pages.component.html",
  styleUrls: ["./manage-pages.component.css"],
})
export class ManagePagesComponent implements OnInit {
  allPages: any[] = null;
  pageDetails: any[] = null;
  pageName: string = null;
  sltdPageId: any = null;
  pageContent = null;

  constructor(
    private adminServ: AdminAuthService,
    private applStylScrptService: ApplyStyleScriptsService
  ) {}

  ngOnInit(): void {
    this.loadAllPages();
  }

  loadAllPages() {
    this.adminServ.getAllPages().subscribe((resp) => {
      let datas = null;
      datas = resp;
      this.allPages = datas.data;
    });
  }

  selPageId(event: any) {
    this.sltdPageId = event.target.value;
    this.getDynamicPageData();
  }

  getDynamicPageData() {
    this.adminServ.getAllPages(this.sltdPageId).subscribe((resp) => {
      let dataz = null;
      dataz = resp;
      if (dataz.status === true) {
        this.pageDetails = dataz.data;
        this.pageName = this.pageDetails[0].PageName;
        this.pageContent = this.pageDetails[0].detail;
      }
    });
  }
}
