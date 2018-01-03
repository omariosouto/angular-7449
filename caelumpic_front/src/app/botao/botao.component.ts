import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html'
})
export class BotaoComponent {

  constructor() { }
  @Input() classes: string
  @Input() texto: string
  @Input() mensagem: string
  @Output() acao = new EventEmitter()

  executaAcao() {
    if(confirm(this.mensagem)) {
      this.acao.emit(null)
    }
  }

  // <botao classes="btn btn-danger btn-block"
  // texto="Remover"
  // mensagem="Deseja realmente fazer isso?"
  // (acao)="remover(foto)">
  // </botao>
}
