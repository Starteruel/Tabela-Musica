import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../musicas.service';
import { musica } from '../musicas';

@Component({
  selector: 'app-tabela-de-musicas',
  templateUrl: './tabela-de-musicas.component.html',
  styleUrls: ['./tabela-de-musicas.component.css']
})
export class TabelaDeMusicasComponent implements OnInit {
delete(_t14: musica) {
throw new Error('Method not implemented.');
}
  musicas: musica[] = [];

  constructor(private musicasService: MusicasService) {}

  ngOnInit(): void {
    this.musicasService.getMusicas().subscribe(data => {
      this.musicas = data;
    });
  }
}
