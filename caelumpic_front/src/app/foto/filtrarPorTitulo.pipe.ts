import { Pipe } from '@angular/core'
import { FotoComponent } from './foto.component';

@Pipe({
  name: 'filtrarPorTitulo'
})
export class FiltraPorTitulo {
  transform(fotos: FotoComponent[], valor) {
      console.log(valor)
      // Fazer o filtro
      return fotos.filter((foto) => {
          return foto.titulo.toLowerCase().includes(valor.toLowerCase())
      })
  }
}
