import { Observable } from 'rxjs';
import { Component } from "@angular/core";
import { UserService } from "../user/user.service";
import { User } from '../user/user';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$!: Observable<User | null>;


  constructor(private userService: UserService){
    this.user$ = userService.getUser();

  }
}