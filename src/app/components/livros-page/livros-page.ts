import { Component } from '@angular/core';

interface Livro {
  id: number;
  autor: string;
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-livros-page',
  imports: [],
  templateUrl: './livros-page.html',
  styleUrl: './livros-page.css'
})
export class LivrosPage {

  novoLivro: Omit<Livro, 'id'> = {
    autor: "",
    titulo: "",
    texto: "",
  };

  // Lista de livros
  livros: Livro[] = [
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

  cadastrarLivro() {}

  editarLivro(livroId: number) {}

  excluirLivro(livroId: number) {}
  
}
