import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../shared/token-storage.service';
import { UserApplyStyleScriptsService } from '../user-apply-style-scripts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoogedIn: boolean;

  constructor(
    private setStyleScript: UserApplyStyleScriptsService,
    private tokenStorageService: TokenStorageService
  ) {
    this.setStyleScript.applyUserStyles([
      'bootstrapmin.css',
      'style.css',
      'owlcarousel.css',
      'owltransitions.css',
      'slick.css',
      'bootstrapslider.css',
      'fontawesome.css',
      'switcher.css',
      'red.css',
      'orange.css',
      'blue.css',
      'pink.css',
      'green.css',
      'purple.css',
    ]);

    this.setStyleScript.loadUserScript([
      '../../assets/js/jquery.min.js',
      '../../assets/js/bootstrap.min.js',
      '../../assets/js/interface.js',
      '../../assets/switcher/js/switcher.js',
      '../../assets/js/bootstrap-slider.min.js',
      '../../assets/js/slick.min.js',
      '../../assets/js/owl.carousel.min.js',
    ]);
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    this.isLoogedIn = this.tokenStorageService.isLoggedIn();
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
