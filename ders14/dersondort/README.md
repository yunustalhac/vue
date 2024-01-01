# ders14

**components**
> bir kere tanımlanıp birden çok kez kullanılan şeylere component denir
> mantıksal olarak components klasörü altındaki dosyalarla view klasörü altındaki vue dosyaları arasında bir fark yok
> component dışından gelen parametreleri alabilmek için defineProps kullanılır
> yukarıdaki bir dosyaya event göndermek istiyorsak **$emit** kullanılır
> **$emit** yerine **defineEmits** kullanılabilir
> **slot** yukarı component den gelen değerle çalışır değer gelmezse içindeki default değer le çalışır 

# dersondort

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
