import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { musica } from './musicas';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {
  getMusics() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/musicas';

  constructor(private http: HttpClient) {}

  delete(musica: musica): Observable<void>{
    return this.http.delete<void>('http://localhost:3000/musics/' + musica.id);
   }

  getMusicas(): Observable<musica[]> {
    return this.http.get<musica[]>(this.apiUrl);
  }
}
