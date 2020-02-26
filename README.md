# Next Redux Boilerplate
Boilerplate code for NextJS, Redux, Styled Components and Storybook in Typescript.

[Ref: React Typescript Cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/)

## Initial Setup
`npm init -y`  
`npm install --save react react-dom next`  
`mkdir pages`  
`mkdir components`  
`mkdir public`  

### Add `Typescript` and `@types` 
`npm install --save-dev typescript @types/react @types/node`  
[⌨️ React in Typescript](https://fettblog.eu/typescript-react/components/)

## Redux
`npm install react-redux @types/react-redux` 
- [😀 React-Redux Tips!](https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/react-redux.html#/0)  
- [Organizing Redux Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)
- [Redux with Ducks](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/)

![redux-diagram](images/redux-diagram.png)

## [Styled Components](https://styled-components.com/docs)
`npm install --save styled-components @types/styled-components`  

*[Next with styled-components](https://github.com/zeit/next.js/tree/canary/examples/with-styled-components) (Added `.babelrc` file as per this example)  
*Consider sanitizing CSS with [CSS.escape](https://github.com/mathiasbynens/CSS.escape)  
*Consider SSR concerns with [Styled Components Tooling](https://styled-components.com/docs/tooling#babel-plugin)   

## Routing 
https://nextjs.org/docs/routing/introduction

## Structure 
(**Depreciated)
https://sergiodxa.com/articles/next-file-structure/

# TODO: 
- StoryBook
- Redux / Redux Sagas
- PropTypes: Autogenerate PropTypes from Interface: [babel-plugin-typescript-to-proptypes](https://github.com/milesj/babel-plugin-typescript-to-proptypes)
- Prettier
- Snack-bar 

