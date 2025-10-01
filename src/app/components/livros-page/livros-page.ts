import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../services/livro-service';

export interface Livro {
  id: number;
  autor: string;
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-livros-page',
  imports: [FormsModule],
  templateUrl: './livros-page.html',
  styleUrl: './livros-page.css'
})
export class LivrosPage implements OnInit{

  constructor(private livroService: LivroService) {}

  livros: Livro[] = [];

  // Ciclo de vida de componentes
  ngOnInit() {
    this.livros = this.livroService.livros;
  }

  novoLivro: Omit<Livro, 'id'> = {
    autor: "",
    titulo: "",
    texto: "",
  };

  cadastrarLivro() {
    this.livroService.cadastrarLivro(this.novoLivro);
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
  
}
