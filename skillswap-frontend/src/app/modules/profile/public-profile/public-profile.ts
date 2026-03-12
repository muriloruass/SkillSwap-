import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../core/services/user';

@Component({
  selector: 'app-public-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './public-profile.html',
  styleUrls: ['./public-profile.css'],
})
export class PublicProfile {
  private route = inject(ActivatedRoute);
  private userService = inject(User);

  user: any = null;
  loading = true;
  errorMessage = '';

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');

    if (!username) {
      this.errorMessage = 'Username inválido.';
      this.loading = false;
      return;
    }

    this.userService.getPublicProfile(username).subscribe({
      next: (data: any) => {
        this.user = data;
      },
      error: () => {
        this.errorMessage = 'Perfil não encontrado.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}