import { Component } from '@angular/core';

@Component({
  selector: 'user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  host:{  
    'class': 'user-avatar'  
  },
  standalone: true
})
export class UserAvatarComponent {

}
