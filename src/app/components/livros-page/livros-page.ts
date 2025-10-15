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
  categoria: Categoria;
  tamanho: Tamanho;
}

@Component({
  selector: 'app-livros-page',
  imports: [FormsModule],
  templateUrl: './livros-page.html',
  styleUrl: './livros-page.css'
})
export class LivrosPage implements OnInit {

  constructor(private livroService: LivroService) {}

  livrosFiltrados: Livro[] = [];

  categorias: string[] = Object.values(Categoria); // converter enum em array
  tamanhos: string[] = Object.values(Tamanho); // converter enum em array

  filtroCategoria: Categoria | "" = "";
  filtroTamanho: Tamanho | "" = "";

  // Método do ciclo de vida do componente, que dispara após o componente
  ngOnInit() {
    this.livroService.buscarLivros().subscribe(
      (livros) => {
        this.livrosFiltrados = livros;
      }, 
      (erro) => {
        console.error("Erro ao buscar livros!", erro);
      }
    )
  }

  novoLivro: Omit<Livro, 'id'> = {
    autor: "",
    titulo: "",
    texto: "",
    categoria: Categoria.FICCAO,
    tamanho: Tamanho.Pequeno,
  };

  cadastrarLivro() {
    this.livroService.cadastrarLivro(this.novoLivro).subscribe(
      (livro: Livro) => {
        alert("Livro cadastrado com sucesso!");
        console.log(livro);
      },
      (erro) => {
        console.log(erro);
      }
    );
    this.livrosFiltrados = this.livroService.filtrarLivros();
  }

  editarLivro(livroId: number) {
    this.livroService.editarLivro(livroId);
    this.livrosFiltrados = this.livroService.filtrarLivros();
  }

  excluirLivro(livroId: number) {
    this.livroService.excluirLivro(livroId);
    this.livrosFiltrados = this.livroService.filtrarLivros();
  }

  aplicarFiltros() {
    const categoriaSelecionada = this.filtroCategoria || undefined;
    const tamanhoSelecionado = this.filtroTamanho || undefined;
    this.livrosFiltrados = this.livroService.filtrarLivros(categoriaSelecionada, tamanhoSelecionado);
  }

  limparFiltros() {
    this.filtroCategoria = "";
    this.filtroTamanho = "";
    this.livrosFiltrados = this.livroService.filtrarLivros();
  }
}