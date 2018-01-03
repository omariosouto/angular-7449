import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { FotoComponent } from "../foto/foto.component";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Headers } from "@angular/http";

@Injectable()
export class FotoService {

  URL: string = 'http://localhost:3000/v1/fotos'
  cabecalho: Headers

  constructor(private http: Http) {
    const config = ConfigUrl.url
    console.log(config)


    this.cabecalho = new Headers()
    this.cabecalho.append('Content-type', 'application/json')
  }

  cadastrar(foto: FotoComponent): Observable<Response> {
    return this.http.post(
      this.URL,
      JSON.stringify(foto),
      { headers: this.cabecalho }
    )
  }

  pegaTodas(): Observable<FotoComponent[]> {
    const consulta = this.http
    return consulta.get(this.URL)
            .map( resposta => resposta.json() )
  }

  apaga(foto: FotoComponent): Observable<Response> {
    return this.http.delete(`${this.URL}/${foto._id}`)
  }

  pegaFotoPorId(id: string): Observable<FotoComponent> {
    return this.http.get(`${this.URL}/${id}`)
                     .map( resposta => resposta.json())
  }

  atualizar(foto: FotoComponent): Observable<Response> {
    return this.http.put(
      `${this.URL}/${foto._id}`,
      JSON.stringify(foto),
      { headers: this.cabecalho }
    )
  }

}


class ConfigUrl {
  static urlAPIDev: string = 'http://localhost:3000'
  static urlAPIProd: string = 'http://api.meusistema.com.br'

  constructor() {}

  static get url() {
    // Lógica pra definir qual vai ser
    if(window.location.href.includes('localhost')) {
      return this.urlAPIDev
    } else {
      return this.urlAPIProd
    }
  }

}
