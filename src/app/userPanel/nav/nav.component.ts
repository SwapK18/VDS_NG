import { Component, OnInit } from '@angular/core';
// import navigationData from '../../../app/userPanel/nav/navigation.json';
import { TokenStorageService } from '../shared/token-storage.service';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  // students: Student[] = studentsData;
  navss: any[] = [
    {
      id: 1,
      title: 'HOME',
      description: 'Incidunt et magni est ut.',
      redirect: '',
      isParam: false,
    },
    {
      id: 2,
      title: 'ABOUT US',
      description: 'Sint libero mollitia.',
      redirect: 'aboutus',
      isParam: true,
    },
    {
      id: 3,
      title: 'CAR LISTING',
      description: 'In consequuntur cupiditate et unde minus.',
      redirect: '/user/carlisting',
      isParam: false,
    },
    {
      id: 4,
      title: 'FAQs',
      description: 'Contact us car listing page.',
      redirect: 'faqs',
      isParam: true,
    },
    {
      id: 5,
      title: 'CONTACT US',
      description: 'Contact us car listing page.',
      redirect: '/user/contactus',
      isParam: false,
    },
  ];

  constructor(private tokenStorageService: TokenStorageService) {}
  userName: string;
  isLoggedIN: boolean = false;

  ngOnInit() {
    if (this.tokenStorageService.isLoggedIn()) {
      this.isLoggedIN = true;
    }
    this.getUser();
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  getUser() {
    if (this.tokenStorageService.isLoggedIn() == true) {
      this.userName = this.tokenStorageService.getUser().fullName;
    }
  }
}
