import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../services/foto.service'

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: [ './listagem.style.css' ]
})
export class ListagemComponent {
  title: string = 'Caelumpic';
  //fotos: Array<FotoComponent> = []
  fotos: FotoComponent[] = []
  servico: FotoService

  constructor(servico: FotoService) {
    this.servico = servico
    this.servico.pegaTodas()
           .subscribe(
             (fotos) => {
                this.fotos = fotos
             }
            )
    //const servico = new FotoService()

  }

  remover(foto: FotoComponent) {
    //console.log(foto._id)
    //if(confirm('Deseja realmente apagar esta maravilhosa foto?')) {
      // Remoção no back-end
      this.servico.apaga(foto)
      .subscribe(
        (resposta) => {
          console.log('Foto removida com sucesso :)', resposta)
          const fotosAtualizadas = this.fotos.filter((fotoAtual) => {
            if(foto._id != fotoAtual._id) {
              return fotoAtual
            }
          })
          // Change Detection
          this.fotos = fotosAtualizadas
        }
      )
    // }
  }

}
