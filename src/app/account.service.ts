// injectable
import { Injectable, EventEmitter } from "@angular/core";

// other service
import { LoggingService } from "./logging.service";

@Injectable()

export class AccountService {

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private logging: LoggingService) {

      }

      updateStatus = new EventEmitter<string>();

      onAccountAdded(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.logging.changeStatus(status)
      }
    
      onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logging.changeStatus(newStatus)
      }
} 