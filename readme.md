## Webmotors teste

#### Introdução

Decidi usar "javascript puro" para desenvolvimento da aplicação.

Quando utilizei as aspas no parágrafo acima, foi de propósito mesmo. Isso significa que estou utilizando algumas ferramentas para implementar a aplicação. Veja abaixo a lista:

- babel
- parcel
- r9x
- shx
- autoprefixer
- whatwg-fetch
- line-awesome

Também estou utilizando algumas extensões do vscode que você deveria instalar para visualizar melhor o código desse projeto. Segue abaixo:


- es6-string-css
- es6-string-html
- Color Pick
- Color Highlight
- Color Manager
- Bracket Pair Colorizer 2

Antes de avaliar o código, por favor, instale essas extensões.

#### R9X

Embora tenha ficado bem claro que não, decidi usar uma biblioteca reativa (r9x) de minha própria autoria. O objetivo dessa biblioteca é tornar a escrita de componentes simples.

R9x elimina um monte de burocracias e horas de estudo de documentação porque sai da frente e deixa o programador utilizar javascript.

R9X apenas padroniza o código e permite criar propriedades reativas e observáveis para reagir a mudanças e atualizar as views da aplicação.

Abaixo um componente em r9x:

```js

//appTab.compnent.js

import styles from './appTabs.styles'
import template from './appTabs.template'

export default () => {

    const tagName = 'app-tabs'

    return {
        tagName,
        styles,
        template
    }
}

```

```js

//appTab.template.js
export default ({ props, state }) => /*html*/ `
    <div class="tabs-wrapper">
        <div class="tab">
            TAB 1
        </div>
        <div class="tab">
            TAB 2
        </div>
    </div>
`
```

```js

//appTab.styles.js
export default () => /*css*/ `
    app-tabs .tabs-wrapper {
        display:block;
        float:left;
        width:100%;
    }

    app-tabs .tab {
        display:block;
        float:left;
        border-bottom:3px transparent solid;
        font-size: 1.2em;
        line-height:.5em;
        text-transform:uppercase;
        color:#666;
        transition: .2s ease-in;
    }

```

Como pode perceber, o controlador, a view e o css da view são funções javascript que retornam uma string contendo css ou html, ou ainda um objeto de controle.

Caso queira, pode ler mais sobre r9x aqui https://github.com/devfreelex/R9X_JS ou aqui https://devfreelex.github.io/r9x-io

### Recursos

A aplicação está dividida em componentes. Cada componente é um recurso que pode ou não possuir dependências.
A maior parte dos componentes do filtro depende de appList ou appInput, dois dos componentes presentes na pasta src/components.

Veja abaixo a estrutura do projeto:

```raw
/dist               diretório gerado pelo parcel onde fica o build em dev ou production mode
/src                diretório que contém recursos da aplicação
|---> /assets       diretório que armazena principalmente arquivos css padrão para o projeto
|---> /components   diretŕoio que armazena os componentes do projeto
|---> /services     diretório com serviços utilizados para requisições http
|---> main.js       módulo principal da aplicação
|---> store.js      store de dados observáveis do projeto
package.json        arquivo contendo configurações do projeto
index.html          Bootstrap do projeto
```

### Padrões

- A maior parte da aplicação foi construída utilizando Factory Functions.
- O padrão de reatividade adotado foi de dados observáveis (Observer Pattern)
- Para os templates (html) da aplicação Template Literals

### Start 

Para iniciar o projeto na porta 3000 execute o comando abaixo:

```raw
npm run dev
```

### build

Para gerar um build para produção utilize o comando abaixo:

```
npm run build
```


### Subindo o projeto em produção

Depois de gerar o build da aplicação, tudo o que precisa fazer é utilizar um servidor web para carregar o arquivo index.html presente na pasta dist.

Todas as preocupações com compatibilidade crossbrowser foram levadas em consideração. Mais sobre isso no arquivo package.json onde está configurado o recurso de compatibilidade.