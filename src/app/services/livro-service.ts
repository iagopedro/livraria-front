import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

import { Livro } from '../components/livros-page/livros-page';
import { Categoria } from '../enums/Categoria';
import { Tamanho } from '../enums/Tamanho';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) {}

  private apiUrl = "https://livraria-backend-q4wh.onrender.com/api/livros";

  private livros: Livro[] = [];

  buscarLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  cadastrarLivro(novoLivro: Omit<Livro, 'id'>): Observable<Livro> {
    if (
      novoLivro.autor 
      && novoLivro.texto 
      && novoLivro.titulo 
      && novoLivro.categoria 
      && novoLivro.tamanho
    ) {
      const livro: Omit<Livro, 'id'> = {
        autor: novoLivro.autor,
        titulo: novoLivro.titulo,
        texto: novoLivro.texto,
        categoria: novoLivro.categoria,
        tamanho: novoLivro.tamanho,
      }

      const livroCriado: Observable<Livro> = this.http.post<Livro>(
        this.apiUrl, 
        livro
      );

      if (livroCriado) {
        return livroCriado;
      } else {
        return new Observable;
      }
    } else {
      alert("Preencha todos os campos!");
      return new Observable;
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
