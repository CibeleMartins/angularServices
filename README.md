# Serviços em Angular!

<img src="./src/assets/angularServices.png"/>

<p align="center">
     Sumário
      <p align="center">
  <a href="#sobre"> Sobre </a> |
  <a href="#como-criar-um-serviço"> Como criar um serviço? </a> |
  <a href="#observação"> Observação </a>      
       <br />
    <br />
    <h1 align="center">
 </h1>
  </p>
</p>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.
## Sobre 
<p>Os serviços podem ser uma forma de centralizar uma lógica, ou o armazenamento de dados e também de implementar comunicação entre componentes. Ou seja, quando você tem um código duplicado, que ocorre em diferentes lugares de uma aplicação Angular, um serviço pode ajudar terceirizando e centralizando a execução desse código.</p>

## Como criar um serviço?

<p>Para criar um serviço é necessário criar uma classe c/ a extensão '.service.ts'. Dentro desta classe você pode construir o seu código. Os serviços em Angular, podem e devem ser usados nos componentes, mas não é uma boa prática instanciar a classe do serviço manualmente sempre que for utilizá-lo.</p>

```javascript
    export class AccountService {

        accounts = [
            {
            name: 'Master Account',
            status: 'active'
            },
            {
            name: 'Testaccount',
            status: 'inactive'
            },
            {
            name: 'Hidden Account',
            status: 'unknown'
            }
        ];

        constructor(private logging: LoggingService) {

        }

        updateStatus = new EventEmitter<string>();

        onAccountAdded(name: string, status: string) {
            this.accounts.push({name: name, status: status});
            this.logging.changeStatus(status)
        }
        
        onStatusChanged(id: number, newStatus: string) {
            this.accounts[id].status = newStatus;
            this.logging.changeStatus(newStatus)
        }
    } 
```

<p> Para isso, o Angular tem uma ótima ferramenta que dá acesso aos serviços sem precisar instanciar a classe do referido serviço manualmente nos componentes, o injetor de dependências. Uma dependência é algo que uma classe depende, por exemplo, nessa aplicação o componente de nova conta depende de um método do serviço de conta. O injetor de dependências Angular injeta a classe do serviço automaticamente em um componente e, além disso, funciona de maneira hierárquica, ou seja, de cima para baixo. O nível mais alto em que um serviço pode ser injetado é no app.module.ts</p>

```javascript
    @NgModule({
    declarations: [
        AppComponent,
        AccountComponent,
        NewAccountComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [AccountService, LoggingService], <--------
    bootstrap: [AppComponent]
    })
```
<p>Dessa maneira, a instancia da classe de um serviço fica disponível para toda aplicação. Nos casos em que um serviço, irá ser utilizado apenas em alguns componentes e não em toda a aplicação, a injeção pode ser feita no componente pai dos componentes que precisarão da instancia do serviço.</p>

```javascript
    @Component({
        selector: 'app-account',
        templateUrl: './account.component.html',
        styleUrls: ['./account.component.css'],
        providers: [LoggingService], <---------
    })
```

<h3>Observação:</h3>
<p> 1 - No exemplo acima, o componente './account.component.html' não é pai de nenhum outro componente, mas a nível de demonstração, a injeção do serviço deveria ocorrer dessa maneira</p>
<p> 2 - Os serviços não se propagam, eles apenas descem na árvore de componentes. o nível mais baixo, portanto, é um componente único, sem componentes filhos.</p>

<p>Feito isso, os componentes que estiverem abaixo do componente pai que recebeu a injeção do serviço, poderão utilizar e executar tudo que foi construído dentro da classe do serviço. Mas para isso é preciso injetar o serviço na função contrutora da classe do componente:</p>

```javascript
    constructor(private logging: LoggingService, private accountService: AccountService) {

    }
```

