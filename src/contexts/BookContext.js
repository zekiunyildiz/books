import React from "react";
export const BookContext = React.createContext();

class BookContextProvider extends React.Component {
  state = {
    books: [
      {
        title: "Kırmızı Pazartesi",
        author: "Gabriel Garcia Marquez",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
      {
        title: "Şeker Portakalı",
        author: "Jose Muro de Vasconselos",
        pageNum: 200,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
        topic:
          "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
      },
      {
        title: "En Uzun Yüzyıl",
        author: "İlber Ortaylı",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
      {
        title: "Dracula",
        author: "Bram Stoker",
        pageNum: 200,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
        topic:
          "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
      },
      {
        title: "Karamazov Kardeşler",
        author: "Fyodor Mihayloviç Dostoyevski",
        pageNum: 200,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
        topic:
          "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
      },
      {
        title: "Sultanın Korsanları",
        author: "Emrah Safa Gürkan",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
      {
        title: "Veba Geceleri",
        author: "Orhan Pamuk",
        pageNum: 544,
        imageURL:
          "https://i.idefix.com/cache/500x400-0/originals/0001911676001-1.jpg",
        topic:
          "Orhan Pamuk’un üzerinde 5 yıldır çalıştığı Veba Geceleri, 1901 yılında 3. Veba Pandemisi döneminde Osmanlı’nın 29. Vilayeti Minger adasında geçiyor.  Hem sürükleyici bir siyaset ve aşk romanı hem de Pamuk’un salgın, karantina, devlet ve birey konularını bir masal havasıyla tartıştığı bu tarihi roman, konusuyla yaşadığımız günlere de ışık düşürüyor.",
      },
      {
        title: "Seyir",
        author: "Piraye",
        pageNum: 348,
        imageURL:
          "https://i.idefix.com/cache/500x400-0/originals/0001849381001-1.jpg",
        topic:
          "Bozuktu. Defoluydu. Büyüdü, genç bir kadın oldu ve bir karar verdi; Madem eksiğim ben, bu eksikliği kapatacak olan malzeme başkalarında olmalı.",
      },
      {
        title: "Körlük",
        author: "Jose Saramago",
        pageNum: 336,
        imageURL:
          "https://i.idefix.com/cache/500x400-0/originals/0001704045001-1.jpg",
        topic:
          "Distopik eserlere ilgi duyanların elinden düşürmediği Körlük, yayınlandığı günden bu yana adından söz ettirmeye devam ediyor. Portekiz’li yazar José Saramago’ya 1998’de Nobel Edebiyat Ödülü’nü kazandıran eser, konusuyla olduğu kadar zekice kurgulanmış karakterleriyle de dikkat çekiyor.",
      },
    ],
  };
  render(){
      return(
        <BookContext.Provider value={{...this.state}} >
            {this.props.children}
        </BookContext.Provider>
      )
  }
}

export default BookContextProvider;

// 1 - Default Value ---> this.context
/*
- Context nesnesini oluşturduk.
- Başlangıç değeri verdik ve export ettik
- ilgili component import ettik
- context type yardımıyla contexti ilgili componenta atadık
- this.context yardımıyla ilgili veriye ulaştık.
*/

// 2 - Provider ---> Consumer
/*
- class componet oluşturduk ve veriyi state içerisine koyduk.
- contexte ait Provider ile state te bulunan veriyi aldık
- parent child iliskisi {this.props.children}
- veriyi göndereceğimiz component context import ediyoruz.
- render içerisinde consumer ile provider dan gelen veriyi yakalıyoruz.
*/