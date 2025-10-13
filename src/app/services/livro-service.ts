import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Livro } from '../components/livros-page/livros-page';
import { Categoria } from '../enums/Categoria';
import { Tamanho } from '../enums/Tamanho';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) {}

  private apiUrl = "http://localhost:8080/api/livros"

  private livros: Livro[] = [];

  buscarLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  private novoId = 21;

  cadastrarLivro(novoLivro: Omit<Livro, 'id'>) {
    if (
      novoLivro.autor 
      && novoLivro.texto 
      && novoLivro.titulo 
      && novoLivro.categoria 
      && novoLivro.tamanho
    ) {
      const livro: Livro = {
        id: this.novoId++,
        autor: novoLivro.autor,
        titulo: novoLivro.titulo,
        texto: novoLivro.texto,
        categoria: novoLivro.categoria,
        tamanho: novoLivro.tamanho,
      }

      this.livros.push(livro);

      novoLivro.autor = "";
      novoLivro.titulo = "";
      novoLivro.texto = "";

      alert("Livro cadastrado com sucesso!");
    } else {
      alert("Preencha todos os campos!");
    }
  }

  editarLivro(livroId: number) {
    const livro: Livro | undefined = this.livros.find((livro) => {
      return livro.id === livroId;
    });

    if (livro) {
      const novoAutor = prompt("Digite o novo autor: ", livro.autor);
      const novoTitulo = prompt("Digite o novo título: ", livro.titulo);
      const novoTexto = prompt("Digite o novo texto: ", livro.texto);

      if (novoAutor && novoTitulo && novoTexto) {
        livro.autor = novoAutor;
        livro.titulo = novoTitulo;
        livro.texto = novoTexto;

        alert("Livro editado com sucesso!");
      } else {
        alert("Livro não encontrado");
      }
    } 
  }

  excluirLivro(livroId: number) {
    if (confirm("Você realmente deseja excluir este livro?")) {
      const livrosFiltrados: Livro[] = this.livros.filter(livro => livro.id !== livroId);
      this.livros = livrosFiltrados;
    }
  }

  filtrarLivros(categoria?: Categoria, tamanho?: Tamanho): Livro[] {
    return this.livros.filter(livro => {
      const categoriaMatch: boolean = !categoria || livro.categoria === categoria;
      const tamanhoMatch: boolean = !tamanho || livro.tamanho === tamanho;
      return categoriaMatch && tamanhoMatch;
    })
  }
}
