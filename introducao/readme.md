# Introdução

### 1. O que são padrões de projeto?
Padrões de Projeto são soluções para problemas comuns que encontramos no desenvolvimento ou manutenção de um software orientado a objetos (não são tão bem aplicáveis em outros paradigmas).

### 2. Para que servem os padrões de projeto?
Visam facilitar a reutilização de soluções de projetos e estabelecem um vocabulário comum de projeto, facilitando comunicação, documentação e aprendizado dos sistemas de software.

### 3. Padrões de projeto são diferentes para linguagens diferentes?
Os conceitos definidos pelos padrões permanecem os mesmos, por mais que o código de um padrão apresentado em diferentes linguagens possam ser diferentes.

### 4. Quem criou o termo?
Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides quando escreveram o livro *“Design Patterns: Elements of Reusable Object-Oriented Software”*

### 5. Quais categorias existem?
Dos padrões GOF:
- Padrões de Criação
- Padrões Estruturais
- Padrões Comportamentais

### 6. Quantos e quais são os padrões por categoria?
Dos padrões GOF:

**Padrões de Criação**
- Abstract Factory
- Builder
- Factory Method
- Prototype
- Singleton

**Padrões de Estruturais**
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

**Padrões de Estruturais**
- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

### 7. Faça uma tabela explicando a utilidade de cada um dos padrões GoF
| Padrão            | Conceito                                                                                    |
--------------------|---------------------------------------------------------------------------------------------|
| Abstract Factory  | Permite que um cliente crie famílias de objetos sem especificar suas classes concretas      |
| Builder           | Encapsular a construção de um produto e permitir que ele seja construído em etapas          |
| Factory Method    | As subclasses decidem quais classes concretas serão criadas                                 |
| Prototype         | Permite você criar novas instancias simplesmente copiando instancias existentes             |
| Singleton         | Assegura que somente um objeto de uma determinada classe seja criado em todo o projeto      |
| Adapter           | Envelopa um objeto e fornece a ele uma interface diferente                                  |
| Bridge            | Permite criar uma ponte para variar não apenas a sua implementação, como também as suas abstrações |
| Composite         | Os clientes tratam as coleções de objetos e os objetos individuais de maneira uniforme      |
| Decorator         | Envelopa um objeto para fornecer novos comportamentos                                       |
| Facade            | Simplifica a interface de um conjunto de classes                                            |
| Flyweight         | Uma instancia de uma classe pode ser usada para fornecer muitas “instancias virtuais”       |
| Proxy             | Envelopa um objeto para controlar o acesso a ele                                            |
| Chain of Responsibility | Permite dar a mais de um objeto a oportunidade de processar uma solicitação           |
| Command           | Encapsula uma solicitação como um objeto                                                    |
| Interpreter       | Permite construir um intérprete para uma linguagem                                          |
| Iterator          | Fornece uma maneira de acessar seqüencialmente uma coleção de objetos sem expor a sua implementação |
| Mediator          | Centraliza operações complexas de comunicação e controle entre objetos relacionados         |
| Memento           | Permite restaurar um objeto a um dos seus estados prévios                                   |
| Observer          | Permite notificar outros objetos quando ocorre uma mudança de estado                        |
| State             | Encapsula comportamentos baseados em estados e usa a delegação para alternar comportamentos |
| Strategy          | Encapsula comportamentos intercambiáveis e usa a delegação para decidir qual deles será usado |
| Template Method   | As subclasses decidem como implementar os passos de um algoritimo                           |
| Visitor           | Permite acrescentar novos recursos a um composto de objetos e o encapsulamento não é importante|


### 8. Idem para GRASP
| Padrão            | Conceito                                                                                    |
--------------------|---------------------------------------------------------------------------------------------|
| Information Expert| Determina quando devemos delegar a responsabilidade para um outro objeto que seja especialista naquele domínio |
| Creator           | Determina qual classe deve ser responsável pela criação certos objetos                      |
| Controller        | Atribui a responsabilidade de lidar com os eventos do sistema para uma classe que representa a um cenário de caso de uso do sistema global |
| Low Coupling      | Determina que as classes não devem depender de objetos concretos e sim de abstrações, para permitir que haja mudanças sem impacto |
| High Cohesion     | Este princípio determina que as classes devem se focar apenas na sua responsabilidade       |
| Polymorphism      | As responsabilidades devem ser atribuídas a abstrações e não a objetos concretos, permitindo que eles possam variar conforme a necessidade |
| Pure Fabrication  | É uma classe que não representa nenhum conceito no domínio do problema, ela apenas funciona como uma classe prestadora de serviços, e é projetada para que possamos ter um baixo acoplamento e alta coesão no sistema |
| Indirection       | Este princípio ajuda a manter o baixo acoplamento, através de delegação de responsabilidades através de uma classe mediadora |
| Protected Variations | Protege o sistema com a variação de componentes, encapsulando o comportamento que realmente importa                                  |

### 9. Existem outros padrões além destes? Dê exemplos.
Sim, um exemplo é a *Injeção de Dependência* que é usado para evitar o alto nível de acoplamento de código dentro de uma aplicação. Outro exemplo é o padrão *Repository*, no qual sua utilização contribui no isolamento da camada de acesso a dados com a camada de negócio.

### 10. Você já pensou em criar uma biblioteca de padrões seus? Mostre um exemplo em caso positivo.
Não


## Referências
[Devmedia](https://www.devmedia.com.br/design-patterns-padroes-gof/16781)

[Treina Web](https://www.treinaweb.com.br/blog/padroes-de-projeto-o-que-sao-e-o-que-resolvem/)

[IGTI](https://igti.com.br/blog/uma-introducao-aos-padroes-de-projeto/)

[Medium](https://medium.com/@leandrovboas/padr%C3%B5es-grasp-padr%C3%B5es-de-atribuir-responsabilidades-1ae4351eb204)
