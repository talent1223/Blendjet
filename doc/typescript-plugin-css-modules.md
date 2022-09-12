# Typescript and CSS Modules

Currently, this project uses CSS Modules. These posts explain the setup:

- [Typed CSS/SCSS Modules With ReactJS and
  NextJS](https://apoorv.blog/typed-css-modules-reactjs/)
- [Increasing the Value of CSS Modules with
  Typescript](https://spin.atomicobject.com/2020/06/22/css-module-typescript)

## Install

Install this [Typescript plugin
`typescript-plugin-css-modules`](https://github.com/mrmckeb/typescript-plugin-css-modules)

```bash
$ npm install --save-dev typescript-plugin-css-modules
```

Results in

```json
// package.json
"devDependencies": {
    ...
    "typescript-plugin-css-modules": "^3.4.0"
    ...
  },
```

## Update `tsconfig.json`

Add the plugin to `tsconfig.json`. Note: not sure if the "options" stuff is
needed...first try it without.

```json
"compilerOptions": {
  ...
  "plugins": [
    {
      "name": "typescript-plugin-css-modules",
      "options": {
        "classnameTransform": "camelCase",
        "namedExports": true
      }
    }
  ],
  ...
}
```

## Add declaration

Add definitions to a global declaration file: `declarations.d.ts`

```typescript
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
```

## Tell VS Code to use your TypeScript

If you use Visual Studio Code, you need to tell VSCode to use your workspace's
version of TypeScript (instead of whatever version VSCode has available). This
will load plugins from your `tsconfig.json` file which makes everything work.

Create this new file (or add to the existing one) in the project root:
`.vscode/settings.json`

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```
