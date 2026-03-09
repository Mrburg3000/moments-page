import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/moment';
import { Moment } from '../../../Moments';
import { environment } from '../../../../environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgIf, NgForOf, DatePipe } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-home',
  imports: [NgIf, NgForOf, RouterLink, DatePipe, FaIconComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {

  moments: Moment[] = [];
  allMoments: Moment[] = [];
  baseApiUrl: string = environment.baseApiUrl;
  faSearch = faSearch;
  searchTerm: string = '';
  
  
  constructor(private momentService: MomentService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('ngOnInit chamado');
    this.loadMoments();
  }


private routerSubscription: any
  
  loadMoments(): void {
    console.log('loadMoments chamado');
    this.momentService.getMoments().subscribe({
      next: (items) => {
        const data = items.data;
        this.allMoments = data;
        this.moments = data;
        this.cdr.detectChanges();
      },
    });
  }
  
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value)
    });
  }
  
}
