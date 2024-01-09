# ders25

**build app**
> **build** script'i genellikle uygulamanın geliştirme sırasında kullanılan kaynak kodunu daha küçük, sıkıştırılmış ve
> tarayıcı dostu bir formata dönüştürerek, performansı artırmak ve kullanıcı deneyimini iyileştirmek amacıyla
> kullanılır.
> **vite build** komutu, proje kaynak kodunu optimize edip bir üretim paketi oluşturarak uygulamayı dağıtmak için kullanılır
> uygulamayı build ettikten sonra hashing eklenir cache güncel sürümle karıştırıp güncel versiyonu kullanıcıya aktarmaya yarar
> **Rollup** JavaScript modüllerini birleştirme işlevi görür bazı özellikerliri:
> Tree Shaking: Rollup, projede kullanılmayan kodları (dead code) kaldırma yeteneğine sahiptir. Bu sayede üretilen dosyanın boyutu daha küçük olur.
> ES Module Desteği: ECMAScript modüllerini kullanma ve bu modüller arasında bağımlılıkları doğru bir şekilde çözme yeteneği.
> Plugin Sistemi: Rollup, çeşitli eklentiler aracılığıyla farklı dosya türleri veya özellikleri işleyebilir. Örneğin,
> CSS dosyalarını işleme, Babel entegrasyonu gibi.
> githuba build edilmiş bir projeyi yüklersek ignore dosyasının içinde dist seçili olduğu için githuba yükleyezsiniz yükleneceği zaman silinmesi lazım

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
