## Expressões em JSX, Inserção de Imagens e Variáveis

### O que é o JSX?

É maneira de criar elementos para serem utilizados como Templates de Aplicações React!,
os elementos criados com JSX são similares com o HTML5 e fornecem aos Desenvolvedores uma forma
mais simples de criar componentes. Por que seja similar ao HTML5, o JSX é interpretado pelo navegador,
por isso é utilizado um 'Transpilador' conhecido como Babel.

#### Expressão

Quando formos usar o JavaScript no HTML5 usamos as chaves `{}`, todas as váriaveis e funções são 
adicionadas fora do `return`, também não necessario utilizar a templete string de maneira intregral 
dessa maneira `${Nome}`

![img](Screenshot_7.png)

Podemos usar a concatenação ou adiconar um texto fora da expressão `{}`

![img](Screenshot_8.png)

É por ultimo podemos retornar textos atráves de funções

![img](Screenshot_9.png)


### Inserindo Imagens na nossa Aplicação React
 
Para trabalhar com importação de imagens vamos criar uma pasta dentro de SRC (que é o nosso contéudo interno)
com o nome desejado.

![img](Screenshot_10.png)

Agora dentro de App.js vamos fazer o import da imagem, para importar vamos
usar a seguinte sitaxe `import Print from './Componentes/Imgs/print.png'` e
dentro de `<img src={Print} />` vamos chamar atráves das `{}` o nome que foi dado
para o componente que possui a nossa `<img/>`

![img](Screenshot_11.png)

![img](Screenshot_12.png)

