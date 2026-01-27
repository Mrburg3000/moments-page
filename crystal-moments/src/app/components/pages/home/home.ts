import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/moment';
import { Moment } from '../../../Moments';
import { environment } from '../../../../environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgIf, NgForOf } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgIf, NgForOf, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {

  moments: Moment[] = [];
  allMoments: Moment[] = [];
  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private momentService: MomentService, private router: Router) {}
  
  ngOnInit(): void {
    this.loadMoments();
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url === '/') {
        this.loadMoments();
      }
    });
  }
  
  loadMoments(): void {
    this.momentService.getMoments().subscribe({
      next: (items) => {
        console.log('Received moments:', items);
        const data = items.data;
        
        data.map((item) => {
          item.created_At = new Date(item.created_At!).toLocaleDateString('pt-BR');
        });
        
        this.allMoments = data;
        this.moments = data;
      },
      error: (err) => {
        console.error('Error loading moments:', err);
      }
    });
  }
  
}
