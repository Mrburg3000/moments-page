import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/moment';
import { Moment } from '../../../Moments';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MessagesServices } from '../../../services/messages';

@Component({
  selector: 'app-moment',
  imports: [FaIconComponent, RouterLink],
  templateUrl: './moment.html',
  styleUrl: './moment.css',
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messagesService: MessagesServices,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID da rota:', id);

    this.momentService.getMoment(id).subscribe({
      next: (item) => {
        console.log('Moment carregado:', item.data);
        this.moment = item.data;
      },
      error: (err) => {
        console.error('Falha ao carregar o moment:', err);
      },
    });
  }

  removeHandler(id: number) {
    console.log('removeHandler chamado! ID =', id);

    this.momentService.removeMoment(id).subscribe({
      next: () => {
        this.messagesService.add('Moment removido com sucesso!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao deletar moment:', err);
        this.messagesService.add('Erro ao remover o moment. Tente novamente.');
      },
    });
  }
  cacheBuster = Date.now();  // ou new Date().getTime()
}
