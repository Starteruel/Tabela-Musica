
import { Component } from '@angular/core';
import { musica } from '../musicas';
import { MusicasService } from '../musicas.service';
@Component({
  selector: 'app-tabela-de-musicas',
  templateUrl: './tabela-de-musicas.component.html',
  styleUrl: './tabela-de-musicas.component.css'
})
export class TabelaDeMusicasComponent {

  musicas: musica[] =[];
  constructor(private service: MusicasService){}

  ngOnInit(){
    this.loadMusicas()
  }

  loadMusicas(){
    this.service.getMusicas().subscribe({
      next: data => this.musicas = data
    })
  }

  delete(musica: musica){
   this.service.delete(musica).subscribe({
      next: () => this.loadMusicas()
   })
  }

}
