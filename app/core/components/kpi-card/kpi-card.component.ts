import { Component, Input } from '@angular/core';
import { MaterialsModuleModule } from 'src/app/modules/materials-module.module';

@Component({
  standalone: true,
  imports: [MaterialsModuleModule],
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss']
})
export class KpiCardComponent {

  @Input() query!: object;
  @Input() title!: string;
  @Input() value!: string;
  @Input() duration!: number;
  @Input() progressBar!: boolean;

  public result = 0;
  public postfix = null;
  public prefix = null;

}
