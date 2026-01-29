import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/moment';
import { Moment } from '../../../Moments';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MessagesServices } from '../../../services/messages';
import { NgIf, NgForOf } from "@angular/common";
import { Comment } from '../../../Comment';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { CommentService } from '../../../services/comment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-moment',
  imports: [FaIconComponent, RouterLink, NgIf, NgForOf, FormsModule, ReactiveFormsModule, ],
  templateUrl: './moment.html',
  styleUrl: './moment.css',
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  commentForm!: FormGroup;
  submitted = false;
  
  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messagesService: MessagesServices,
    private router: Router,
    private commentService: CommentService
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
    
    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
    
  }

  get text() {
    return this.commentForm.get('text');
  }
  
  get username() {
    return this.commentForm.get('username');
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
  
  async onSubmit(formDirective: FormGroupDirective) {
    
    if(this.commentForm.invalid) {
      return
    }
    
    const data: Comment = this.commentForm.value
    
    data.momentId = Number(this.moment!.id)
    
    await this.commentService .createComment(data) .subscribe((comment) => this.moment!.comments!.push(comment.data));
    
    this.messagesService.add("Comment Send!")
    
    this.commentForm.reset()
    
    formDirective.resetForm()
  }
  
  
  
  cacheBuster = Date.now();  
}
