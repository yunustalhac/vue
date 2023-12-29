# ders12

**form kit** hazır inputların bulunduğu form yaparken işimizi kolaylaştıracak bir kütüphanedir
**form kit installition**
> **yarn add @formkit/vue** diyerek form-kit i projemize dahil ediyoruz (var olan bir proje için geçerlidir.)
> **yarn add @formkit/themes** diyerek form-kit in temalarını indiriyoruz
> sonra **main.js** dosyasında import işlemlerini yapıyoruz .(import {plugin, defaultConfig} from '@formkit/vue')  
> son olarakta import ettiklerimizi main.js içinde kullanıyoruz.(app.use(plugin, defaultConfig({ theme: "genesis"})))
**not** projenin birazdaha düzenli olması için form kit için farklı bir ts doysası açabiliriz buda olası karmaşıklıkları engellemeye yardımcı olur 
> **form-kit** kendi notasyonundan olan schemaları ekrana render edebilen bir yapıdır

# dersoniki

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and
disable
Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```
