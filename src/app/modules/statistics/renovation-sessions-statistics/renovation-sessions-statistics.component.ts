import { Component} from '@angular/core';
import RenovationSession from '../../map/model/renovation-session.model';
import { SessionService } from '../session.service'

@Component({
  selector: 'app-renovation-sessions-statistics',
  templateUrl: './renovation-sessions-statistics.component.html',
  styleUrls: ['./renovation-sessions-statistics.component.css']
})
export class RenovationSessionsStatisticsComponent {

  public data: RenovationSession[] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getSessions().subscribe(res => {
      this.data = res;
    })
  }

}
