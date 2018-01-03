import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http'
import { Router } from '@angular/router';
import { FotoService } from '../services/foto.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {

  foto: FotoComponent
  http: Http
  servico: FotoService
  router: Router
  formCadastro: FormGroup

  constructor(servico: FotoService,
              rota: ActivatedRoute,
              router: Router,
              formBuilder: FormBuilder) {


    this.formCadastro = formBuilder.group({
      titulo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      url: ['', Validators.required],
      descricao: []
    })

    this.router = router
    this.foto = new FotoComponent()
    this.servico = servico
    // Atualiza as rotas
    // Cria o serviço
    // Chama a imagem no cadastro component
    // 10 ===== 10.4

    // Pega o Parametro da URL
    rota.params.subscribe(
      (parametros) => {
        const idDaFoto = parametros.id

        if(idDaFoto) {
          this.servico.pegaFotoPorId(idDaFoto)
                      .subscribe(
                        (fotoPronta) => {
                          this.foto = fotoPronta
                        }
                      )
        }
      }
    )
  }


  salvar(event) {
    event.preventDefault()

    // 6.11
    console.log('Pegamos a foto nova:', this.foto)

    if(this.foto._id) {
      console.log('Atualiza')
      this.servico.atualizar(this.foto)
                  .subscribe(
                    (resposta) => {
                      console.log('Foto Alterada com sucesso!', resposta)
                      this.router.navigate([''])
                    }
                  )

    } else {
      console.log('Cadastra')
      // JSON Web Token
      // Salva no localStorage
      // E consulta quando precisar
      // Apache Cordov/Phonegap/Ionic/ Web
      this.servico.cadastrar(this.foto).subscribe(
        resposta => {
          console.log(`Foto com id: ${resposta.text()}`)
          this.foto = new FotoComponent() // Limpando o formulário
        },
        erro => {
          console.log(erro)
        }
      )
    }


  }
}
