import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-chapters',
  templateUrl: 'chapters.page.html',
  styleUrls: ['chapters.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent]
})
export class ChaptersPage {

  constructor() {}

}
