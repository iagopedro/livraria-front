import { Injectable } from '@angular/core';
import { Livro } from '../components/livros-page/livros-page';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  // Lista de livros
  private livros: Livro[] = [
    {
      id: 1,
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      texto: 'Uma das principais obras da literatura brasileira, que narra a história de Bentinho e sua obsessão por Capitu, questionando temas como ciúme, traição e a complexidade das relações humanas.'
    },
    {
      id: 2,  
      titulo: 'O Cortiço',
      autor: 'Aluísio Azevedo',
      texto: 'Romance naturalista que retrata a vida em um cortiço no Rio de Janeiro do século XIX, explorando as condições sociais e os instintos humanos através de personagens marcantes como João Romão e Bertoleza.'
    },
    {
      id: 3,
      titulo: 'Iracema',
      autor: 'José de Alencar',
      texto: 'Lenda do Ceará que conta a história de amor entre a índia Iracema e o português Martim, representando o encontro entre as culturas indígena e europeia no Brasil colonial.'
    },
    {
      id: 4,
      titulo: 'Memórias Póstumas de Brás Cubas',
      autor: 'Machado de Assis',
      texto: 'Romance inovador narrado por um defunto autor, que conta sua vida de forma irônica e filosófica, abordando temas como a sociedade brasileira do século XIX, vaidade e hipocrisia humana.'
    }
  ];

  private novoId = 5;

  cadastrarLivro(novoLivro: Omit<Livro, 'id'>) {
    if (novoLivro.autor && novoLivro.texto && novoLivro.titulo) {
      const livro: Livro = {
        id: this.novoId++,
        autor: novoLivro.autor,
        titulo: novoLivro.titulo,
        texto: novoLivro.texto,
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

  buscarListaLivros() {
    // É possível adicionar uma lógica antes de retornar os dados
    return this.livros;
  }
}
