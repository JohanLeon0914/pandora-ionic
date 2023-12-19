
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Charapter } from 'src/app/models/Charapters.model';
import { World } from 'src/app/models/World.model';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent, HttpClientModule],
})
export class HomePage {

  charapters: Charapter[];
  world: World[];
  http = inject(HttpClient);

  constructor() {
    this.loadFiles("charapters.json");
    this.loadFiles("world.json")
  }

  loadFiles(file_name: string) {
    const jsonFileUrl = `assets/jsons/${file_name}`;

    this.http.get<Charapter[] | World[]>(jsonFileUrl).subscribe(
      (data) => {
        console.log(data)
        file_name === 'charapters.json' ? this.charapters = data :
          this.world = data
      },
      (error) => {
        console.error('Error al cargar el archivo charapters.json', error);
      }
    );
  }

}
