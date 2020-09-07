import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.sass'],
})
export class MarcasComponent implements OnInit {
  // users: Array<any>;
  public usuariosEncontrados: any = [];
  public page: String = '?page=1';
  public btnPaginador: any;
  public paginador: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.listarUsuarios(this.page);
  }

  listarUsuarios(page) {
    this.userService.getUsers(page).subscribe((res: any) => {
      console.log(res);
      this.usuariosEncontrados = res.data;
      this.botonesPaginadores(res.total_pages);
    });
  }
  botonesPaginadores(btns) {
    this.paginador = document.getElementById('paginador');
    const arrayBotones = [];
    for (let i = 0; i < btns; i += 1) {
      this.btnPaginador = document.createElement('p');
      this.btnPaginador.textContent = i + 1;
      this.paginador.appendChild(this.btnPaginador);
      this.btnPaginador.classList.add('btnPaginador');
      arrayBotones.push(this.btnPaginador);
    }
    this.listarPorPagina(arrayBotones);
  }
  listarPorPagina(botones) {
    console.log(botones, 'este es el array de botones');
    botones.map((boton) => {
      boton.addEventListener('click', (e: MouseEvent) => {
        const numero = (e.target as HTMLElement).innerText;
        this.page = `?page=${numero}`;
        this.listarUsuarios(this.page);
        this.paginador.innerHTML = '';

        console.log(this.paginador, 'Llegamos hasta acá');
        console.log(this.page);
      });
    });
  }
}
