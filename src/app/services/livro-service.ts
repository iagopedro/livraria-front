import { Injectable } from '@angular/core';
import { Livro } from '../components/livros-page/livros-page';
import { Categoria } from '../enums/Categoria';
import { Tamanho } from '../enums/Tamanho';

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
      texto: 'Uma das principais obras da literatura brasileira, que narra a história de Bentinho e sua obsessão por Capitu, questionando temas como ciúme, traição e a complexidade das relações humanas.',
      categoria: Categoria.ROMANCE,
      tamanho: Tamanho.Medio
    },
    {
      id: 2,  
      titulo: 'O Cortiço',
      autor: 'Aluísio Azevedo',
      texto: 'Romance naturalista que retrata a vida em um cortiço no Rio de Janeiro do século XIX, explorando as condições sociais e os instintos humanos através de personagens marcantes como João Romão e Bertoleza.',
      categoria: Categoria.DRAMA,
      tamanho: Tamanho.Grande
    },
    {
      id: 3,
      titulo: 'Iracema',
      autor: 'José de Alencar',
      texto: 'Lenda do Ceará que conta a história de amor entre a índia Iracema e o português Martim, representando o encontro entre as culturas indígena e europeia no Brasil colonial.',
      categoria: Categoria.ROMANCE,
      tamanho: Tamanho.Pequeno
    },
    {
      id: 4,
      titulo: 'Memórias Póstumas de Brás Cubas',
      autor: 'Machado de Assis',
      texto: 'Romance inovador narrado por um defunto autor, que conta sua vida de forma irônica e filosófica, abordando temas como a sociedade brasileira do século XIX, vaidade e hipocrisia humana.',
      categoria: Categoria.FICCAO,
      tamanho: Tamanho.Grande
    },
    {
      id: 5,
      titulo: 'O Exorcista',
      autor: 'William Peter Blatty',
      texto: 'Clássico do terror que narra a possessão demoníaca de uma jovem garota e os esforços de dois padres para salvá-la, explorando temas de fé e mal.',
      categoria: Categoria.TERROR,
      tamanho: Tamanho.Medio
    },
    {
      id: 6,
      titulo: 'Drácula',
      autor: 'Bram Stoker',
      texto: 'O romance gótico que criou o arquétipo do vampiro moderno, seguindo a luta contra o Conde Drácula na Inglaterra vitoriana.',
      categoria: Categoria.TERROR,
      tamanho: Tamanho.Grande
    },
    {
      id: 7,
      titulo: 'Steve Jobs',
      autor: 'Walter Isaacson',
      texto: 'Biografia definitiva do cofundador da Apple, baseada em entrevistas exclusivas e explorando sua personalidade complexa e revolucionária.',
      categoria: Categoria.BIOGRAFIA,
      tamanho: Tamanho.Grande
    },
    {
      id: 8,
      titulo: 'Einstein: Sua Vida, Seu Universo',
      autor: 'Walter Isaacson',
      texto: 'Retrato abrangente de Albert Einstein, desde sua juventude rebelde até suas contribuições revolucionárias para a física.',
      categoria: Categoria.BIOGRAFIA,
      tamanho: Tamanho.Grande
    },
    {
      id: 9,
      titulo: 'Neuromancer',
      autor: 'William Gibson',
      texto: 'Romance pioneiro do cyberpunk que definiu o gênero, explorando realidade virtual e inteligência artificial em um futuro distópico.',
      categoria: Categoria.FICCAO,
      tamanho: Tamanho.Medio
    },
    {
      id: 10,
      titulo: 'Fundação',
      autor: 'Isaac Asimov',
      texto: 'Primeiro livro da série Fundação, explorando a psicohistória e o futuro da humanidade em uma galáxia em declínio.',
      categoria: Categoria.FICCAO,
      tamanho: Tamanho.Medio
    },
    {
      id: 11,
      titulo: 'Orgulho e Preconceito',
      autor: 'Jane Austen',
      texto: 'Romance clássico que retrata a sociedade inglesa do século XIX através da história de amor entre Elizabeth Bennet e Sr. Darcy.',
      categoria: Categoria.ROMANCE,
      tamanho: Tamanho.Medio
    },
    {
      id: 12,
      titulo: 'O Iluminado',
      autor: 'Stephen King',
      texto: 'Thriller psicológico sobre um escritor que gradualmente perde a sanidade enquanto cuida de um hotel isolado durante o inverno.',
      categoria: Categoria.TERROR,
      tamanho: Tamanho.Grande
    },
    {
      id: 13,
      titulo: 'Nelson Mandela: Longa Caminhada para a Liberdade',
      autor: 'Nelson Mandela',
      texto: 'Autobiografia do líder sul-africano, narrando sua luta contra o apartheid e sua jornada para a liberdade.',
      categoria: Categoria.BIOGRAFIA,
      tamanho: Tamanho.Grande
    },
    {
      id: 14,
      titulo: 'A Metamorfose',
      autor: 'Franz Kafka',
      texto: 'Novela que narra a transformação de Gregor Samsa em um inseto gigante, explorando alienação e absurdo da existência.',
      categoria: Categoria.FICCAO,
      tamanho: Tamanho.Pequeno
    },
    {
      id: 15,
      titulo: 'Romeu e Julieta',
      autor: 'William Shakespeare',
      texto: 'Tragédia clássica sobre o amor proibido entre dois jovens de famílias rivais em Verona.',
      categoria: Categoria.ROMANCE,
      tamanho: Tamanho.Pequeno
    },
    {
      id: 16,
      titulo: 'Hamlet',
      autor: 'William Shakespeare',
      texto: 'Tragédia sobre o príncipe da Dinamarca que busca vingar a morte de seu pai, explorando temas de vingança, loucura e moralidade.',
      categoria: Categoria.DRAMA,
      tamanho: Tamanho.Medio
    },
    {
      id: 17,
      titulo: 'O Corvo',
      autor: 'Edgar Allan Poe',
      texto: 'Poema narrativo sobre um homem atormentado pela visita de um corvo que repete "Nunca mais", explorando perda e desespero.',
      categoria: Categoria.TERROR,
      tamanho: Tamanho.Pequeno
    },
    {
      id: 18,
      titulo: 'Frida: Uma Biografia',
      autor: 'Hayden Herrera',
      texto: 'Biografia completa da artista mexicana Frida Kahlo, explorando sua arte, relacionamentos e luta contra adversidades.',
      categoria: Categoria.BIOGRAFIA,
      tamanho: Tamanho.Medio
    },
    {
      id: 19,
      titulo: '1984',
      autor: 'George Orwell',
      texto: 'Distopia sobre uma sociedade totalitária onde o governo controla todos os aspectos da vida, explorando vigilância e opressão.',
      categoria: Categoria.FICCAO,
      tamanho: Tamanho.Medio
    },
    {
      id: 20,
      titulo: 'Jane Eyre',
      autor: 'Charlotte Brontë',
      texto: 'Romance gótico sobre uma jovem órfã que supera adversidades e encontra amor, explorando independência feminina e moralidade.',
      categoria: Categoria.ROMANCE,
      tamanho: Tamanho.Grande
    }
  ];

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

  buscarListaLivros() {
    // É possível adicionar uma lógica antes de retornar os dados
    return this.livros;
  }

  filtrarLivros(categoria?: Categoria, tamanho?: Tamanho): Livro[] {
    return this.livros.filter(livro => {
      const categoriaMatch: boolean = !categoria || livro.categoria === categoria;
      const tamanhoMatch: boolean = !tamanho || livro.tamanho === tamanho;
      return categoriaMatch && tamanhoMatch;
    })
  }
}
