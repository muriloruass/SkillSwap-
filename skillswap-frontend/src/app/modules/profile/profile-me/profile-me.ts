import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../core/services/user';

@Component({
  selector: 'app-profile-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-me.html',
  styleUrls: ['./profile-me.css'],
})
export class ProfileMe {
  private userService = inject(User);

  user: any = null;
  loading = true;
  errorMessage = '';

  ngOnInit() {
    this.userService.getMe().subscribe({
      next: (data: any) => {
        this.user = data;
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar perfil.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}