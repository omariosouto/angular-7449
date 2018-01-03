import { Component, Input, OnInit, ElementRef } from '@angular/core'

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {
  @Input() titulo: string = ''
  tituloCompleto: string = ''

  constructor(private elemento: ElementRef) {
    console.log()
    $(elemento.nativeElement)
    // console.log('Instanciou o componente')
  }

  ngOnInit() {
    // console.log('Bateu no Init', this)
    this.tituloCompleto = this.titulo

    if(this.titulo.length > 7) {
      const tituloModificado = `${this.titulo.substring(0, 5)}...`
      this.titulo = tituloModificado
    }
  }

}
