import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../services/livro-service';
import { Categoria } from '../../enums/Categoria';
import { Tamanho } from '../../enums/Tamanho';

export interface Livro {
  id: number;
  autor: string;
  titulo: string;
  texto: string;
  categoria?: Categoria;
  tamanho?: Tamanho;
}

@Component({
  selector: 'app-livros-page',
  imports: [FormsModule],
  templateUrl: './livros-page.html',
  styleUrl: './livros-page.css'
})
export class LivrosPage implements OnInit {

  constructor(private livroService: LivroService) {}

  livros: Livro[] = [];

  // Ciclo de vida de componentes
  ngOnInit() {
    this.livros = this.livroService.buscarListaLivros();
  }

  novoLivro: Omit<Livro, 'id'> = {
    autor: "",
    titulo: "",
    texto: "",
  };

  cadastrarLivro() {
    this.livroService.cadastrarLivro(this.novoLivro);
    this.livros = this.livroService.buscarListaLivros();
  }

  editarLivro(livroId: number) {
    this.livroService.editarLivro(livroId);
  }

  excluirLivro(livroId: number) {
    this.livroService.excluirLivro(livroId);
    this.livros = this.livroService.buscarListaLivros();
  }
}
