# ders15

## **router**

> **router** sayfalar arası geçişleri yöneten pakettir
> **routes** bir array dir içine nesne alır. içerisinde yol belirtiriz
**lazy loading** |component: () => import('./components/About.vue')| bu şekilde yapılır
> **router-link** Vue Router içinde sayfa gezinme bağlantılarını oluşturmak için kullanılan bir bileşendir.
>**router-view** Vue Router içinde, sayfa bileşenlerinin dinamik olarak değiştirileceği alanı temsil eden bir bileşendir
> url deki parametrelere ulaşabilemek için **$route.query** diyerek ulaşabiliriz
> **meta** özelliği bir rota nesnesinin içine ek bilgiler eklemek için kullanılır
> **layout** sayfanın tasarım düzenini gösterir
> **navigation guard** larla routerin durumunu belirleyebiliyoruz mesela url e user=== yunus olursa aç gibi

# dersonbes

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
