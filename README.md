# VERA Hukuk

React 19, TypeScript ve Vinext (Vite) ile hazırlanmış Türkçe hukuk bürosu web sitesi. Tasarım, gerçek bir büroyu temsil etmeyen örnek bir marka kullanır.

## Geliştirme

```bash
npm install
npm run dev
```

Terminalde yazdırılan yerel adresi açın. Varsayılan port doluysa geliştirme sunucusu sonraki uygun portu kullanır.

```bash
npm run build
npm run lint
npx tsc --noEmit
```

## Düzenleme

- `app/page.tsx`: Metinler, çalışma alanları, soru-cevaplar, menü ve görüşme notu aracı.
- `app/globals.css`: Renkler, tipografi, mobil yerleşimler ve hareketler.
- `app/layout.tsx`: Türkçe sayfa dili, başlık ve açıklama.
- `public/favicon.svg`: Marka simgesi.

Hizmet içerikleri `services`, soru-cevaplar `faqs` dizisinden düzenlenebilir.

## Form davranışı

Form, istemci tarafında doğrulama yapar ve indirilebilir bir UTF-8 metin notu oluşturur. Sunucuya veri göndermez, mesaj iletmez, randevu oluşturmaz ve kalıcı depolama kullanmaz. Gerçek kullanım için büro kimliği, iletişim bilgileri ve güvenli bir form sunucusu eklenmelidir. Demo açıklamaları, gerçek işlevler bağlandıktan sonra güncellenmelidir.

## Görseller ve yazı tipleri

Görseller indirilmeden doğrudan `img src` ile Unsplash üzerinden yüklenir. Ana görselde `srcSet`, alt görselde gecikmeli yükleme kullanılır. Mimari fotoğraflar bir büroya aitmiş gibi sunulmaz.

- Nathan Cima: https://unsplash.com/photos/A4Qca4vX1Q0
- Sütun fotoğrafı: https://images.unsplash.com/photo-1636652966850-5ac4d02370e9
- Google Fonts: DM Sans ve Playfair Display. Ağ bağlantısı yoksa sistem yazı tipleri kullanılır.

Harici görsellerin ve fontların erişilebilirliği bu hizmetlere bağlıdır.

## Erişilebilirlik

Klavye ile kullanılabilen menü ve modallar, Escape ile kapatma, modal odak yönetimi, içeriğe geç bağlantısı, erişilebilir akordeonlar, form etiketleri ve azaltılmış hareket tercihi desteği bulunur.
