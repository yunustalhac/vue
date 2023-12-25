# dersyedi

# ders7

>**v-html**
>scriptdeki kodu string olarak değilde html olarak okumasına yarar
>xss güvenlik açığını önlemek için önemli bir directive dir
>**xss**  HTML kodlarının arasına istemci tabanlı kod gömülmesi yoluyla kullanıcının tarayıcısında istenilen kodun çalıştırılabilmesi
>## **xss**
>xss açığı arif abinin bize ramazan ayında yaptığımız çalışmada anlattığı hack yöntemine benzettim **konu** arif abi dediki ben haber yedi hackleyip oradan twitteri size hackletebilirmiyim diye bir soru sordu ve ekledi bi haber fotoğrafına özellik verip **(flex verip opacity 0 ve label ile birbirine bağlamak) ** tıklanıldığı zaman saldırıyı yapan kişi fotoğrafa tıklayan kişi olur "diye anlatmıştı. tahminimce arif abinin anlattığı hack xss le alakalı
>**v-bind** kestirmesi ":"dır
>html kısmındaki bir attributes i script kısmındaki bir şeye bind edip oradan yönetilebilir
>**falsy**
>1.  `false`: Boolean false değeri.
2.  `0`: Sayısal sıfır.
3.  `-0`: Negatif sıfır.
4.  `0n`: BigInt sıfır.
5.  `""` veya `''`: Boş string (dizgi).
6.  `null`: Boş değer.
7.  `undefined`: Tanımsız değer.
8.  `NaN`: "Not a Number" (Sayı değil) özel değeri.
    bunlardır

>**v-if** vue de şart koşmaya yarar
>**v-for** vue de döngü kurmaya yarar
>**:key** v-for a bir kimlik kazandırır
>**vue2 ve vue3 farkı** vue2 de root element gerekiyordu mesela kodu çalıştırmak için template altında kodunuzu bir div arasına almamız gerekiyordu ama vue üçde böyle bişey zorunlu değil

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

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
