import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminTokenStorageService } from '../_shared/admin-token-storage.service';
import { ApplyStyleScriptsService } from '../_shared/apply-style-scripts.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  constructor(private router:Router, private applStylScrptService: ApplyStyleScriptsService, private adminTokenStorage: AdminTokenStorageService) {}

  ngOnInit(): void {
    this.applStylScrptService.loadStyle([
      'fontawesome.css',
      'bootstrapmin.css',
      'datatablesbootstrapmin.css',
      'bootstrapsocial.css',
      'bootstrapselect.css',
      'fileinputmin.css',
      'awesomebootstrapcheckbox.css',
      'adminstyle.css'
    ]);

    this.applStylScrptService.loadScript([
      'https://code.jquery.com/jquery-3.5.1.min.js',
      '../../assets/js/bootstrap-select.js',
      '../../assets/js/bootstrap.min.js',
      '../../assets/js/jquery.dataTables.min.js',
      '../../assets/js/dataTables.bootstrap.min.js',
      '../../assets/js/Chart.min.js',
      '../../assets/js/fileinput.js',
      '../../assets/js/chartData.js',
      '../../assets/js/main.js'
    ]);
  }

  logout() {
    this.adminTokenStorage.signOut();
    this.router.navigate(['/admin']);
  }
}