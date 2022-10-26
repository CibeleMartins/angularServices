import { Component, Input} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logging: LoggingService, private accountService: AccountService) {

  }

  onSetTo(status: string) {
    this.accountService.onStatusChanged(this.id, status)
    // this.logging.changeStatus(status)
    this.accountService.updateStatus.emit(status)
  }
  
}
