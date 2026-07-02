// data.js – 81 İl Lezzetleri
const cityData = [
  {
    plate: 1,
    name: "Adana",
    dishes: [
      {
        name: "Adana Kebap",
        category: "kebap",
        ingredients: ["500g kuzu kıyma", "100g kuyruk yağı", "2 soğan", "1 yemek kaşığı biber salçası", "pul biber, kimyon, tuz"],
        steps: ["Kıyma ve yağı iyice yoğurun.", "Soğan rendeleyin, salça ve baharatları ekleyin.", "Şişlere geçirip mangalda pişirin."]
      },
      {
        name: "Şırdan Dolması",
        category: "et",
        ingredients: ["şırdan", "pirinç", "soğan", "baharat"],
        steps: ["Şırdanı temizleyin.", "Pirinçli iç harcı hazırlayın.", "Doldurup haşlayın."]
      },
      {
        name: "Beyran Çorbası",
        category: "corba",
        ingredients: ["kuzu eti", "pirinç", "sarımsak", "pul biber"],
        steps: ["Eti haşlayın.", "Pirinç ve sarımsak ekleyin.", "Pul biber ile servis yapın."]
      },
      {
        name: "İçli Köfte (Adana)",
        category: "hamur",
        ingredients: ["bulgur", "kıyma", "soğan", "ceviz"],
        steps: ["Bulguru haşlayın.", "Kıymalı iç hazırlayın.", "Şekil verip kızartın."]
      },
      {
        name: "Sıkma",
        category: "hamur",
        ingredients: ["un", "yoğurt", "tuz", "su"],
        steps: ["Hamur yoğurun.", "Bezeler yapın.", "Sacda pişirin."]
      }
    ]
  },
  {
    plate: 2,
    name: "Adıyaman",
    dishes: [
      {
        name: "Adıyaman Çiğ Köftesi",
        category: "hamur",
        ingredients: ["bulgur", "kıyma", "soğan", "salça", "baharat"],
        steps: ["Bulgur ve kıymayı yoğurun.", "Baharat ve soğan ekleyin.", "Ceviz büyüklüğünde yuvarlayın."]
      },
      {
        name: "Perde Pilavı",
        category: "et",
        ingredients: ["pirinç", "tavuk", "badem", "kuş üzümü", "hamur"],
        steps: ["Pilavı hazırlayın.", "Hamurla kaplayın.", "Fırında pişirin."]
      },
      {
        name: "Kırmızı Mercimek Çorbası",
        category: "corba",
        ingredients: ["kırmızı mercimek", "soğan", "havuç", "salça"],
        steps: ["Mercimeği haşlayın.", "Soğan ve havucu kavurun.", "Blenderdan geçirin."]
      },
      {
        name: "Sarımsaklı Et",
        category: "et",
        ingredients: ["kuşbaşı et", "sarımsak", "tereyağ", "baharat"],
        steps: ["Eti kavurun.", "Sarımsak ekleyin.", "Soteleyin."]
      },
      {
        name: "Peynirli Erişte",
        category: "hamur",
        ingredients: ["erişte", "beyaz peynir", "tereyağ"],
        steps: ["Erişte haşlayın.", "Peynir ve yağ ekleyin.", "Karıştırıp servis yapın."]
      }
    ]
  },
  {
    plate: 3,
    name: "Afyonkarahisar",
    dishes: [
      {
        name: "Afyon Kaymağı",
        category: "tatli",
        ingredients: ["süt", "krema"],
        steps: ["Sütü kaynatın.", "Soğutup kaymağı alın."]
      },
      {
        name: "Afyon Sucuğu",
        category: "et",
        ingredients: ["kıyma", "yağ", "sarımısak", "kimyon"],
        steps: ["Kıymayı baharatlarla yoğurun.", "Bağırsağa doldurun.", "Kurutup dinlendirin."]
      },
      {
        name: "Keşkek",
        category: "et",
        ingredients: ["buğday", "kuşbaşı et", "soğan", "tereyağ"],
        steps: ["Buğday ve eti haşlayın.", "Dövün.", "Tereyağ ile servis yapın."]
      },
      {
        name: "Haşhaşlı Çörek",
        category: "hamur",
        ingredients: ["un", "haşhaş", "şeker", "maya"],
        steps: ["Hamur hazırlayın.", "Haşhaş serpin.", "Fırında pişirin."]
      },
      {
        name: "Afyon Tava",
        category: "et",
        ingredients: ["kuzu eti", "soğan", "domates", "biber"],
        steps: ["Eti kavurun.", "Sebzeleri ekleyin.", "Fırında pişirin."]
      }
    ]
  },
  {
    plate: 4,
    name: "Ağrı",
    dishes: [
      {
        name: "Ağrı Kesme Çorbası",
        category: "corba",
        ingredients: ["un", "yumurta", "yoğurt", "nane"],
        steps: ["Hamur açıp kesin.", "Haşlayın.", "Yoğurt ve nane ekleyin."]
      },
      {
        name: "Kuzu Tandır",
        category: "et",
        ingredients: ["kuzu kol", "soğan", "sarımısak", "baharat"],
        steps: ["Kuzuyu tandırda pişirin.", "Sulu servis yapın."]
      },
      {
        name: "Mıhlama (Ağrı usulü)",
        category: "hamur",
        ingredients: ["mısır unu", "tereyağ", "peynir"],
        steps: ["Tereyağ eritin.", "Mısır unu ve peynir ekleyin.", "Karıştırarak pişirin."]
      },
      {
        name: "Ayran Aşı",
        category: "corba",
        ingredients: ["yoğurt", "un", "nane", "tuz"],
        steps: ["Yoğurt ve unu çırpın.", "Kaynatın.", "Naneli servis yapın."]
      },
      {
        name: "Kalbur Tatlısı",
        category: "tatli",
        ingredients: ["un", "süt", "şeker", "tereyağ"],
        steps: ["Hamur hazırlayın.", "Şekil verip pişirin.", "Şerbet dökün."]
      }
    ]
  },
  {
    plate: 5,
    name: "Amasya",
    dishes: [
      {
        name: "Amasya Çöreği",
        category: "hamur",
        ingredients: ["un", "maya", "şeker", "tarçın"],
        steps: ["Hamur mayalandırın.", "Şekil verin.", "Fırında pişirin."]
      },
      {
        name: "Ayvadolu Kebabı",
        category: "kebap",
        ingredients: ["kuzu eti", "patlıcan", "domates", "biber"],
        steps: ["Eti şişe takın.", "Patlıcan ve sebzelerle birlikte mangalda pişirin."]
      },
      {
        name: "Amasya Mantısı",
        category: "hamur",
        ingredients: ["un", "kıyma", "yoğurt", "tereyağ"],
        steps: ["Hamur açıp kesin.", "Kıyma koyup kapatın.", "Haşlayıp yoğurt ve yağ dökün."]
      },
      {
        name: "Pekmezli Kabak",
        category: "tatli",
        ingredients: ["kabak", "pekmez", "ceviz"],
        steps: ["Kabak dilimleyin.", "Pekmezle pişirin.", "Ceviz serpin."]
      },
      {
        name: "Amasya Elması Tatlısı",
        category: "tatli",
        ingredients: ["elma", "şeker", "tarçın"],
        steps: ["Elmaları oyun.", "Şeker ve tarçınla pişirin."]
      }
    ]
  },
  {
    plate: 6,
    name: "Ankara",
    dishes: [
      {
        name: "Ankara Tava",
        category: "et",
        ingredients: ["kuzu eti", "soğan", "domates", "biber"],
        steps: ["Eti kavurun.", "Sebzeler ekleyip fırında pişirin."]
      },
      {
        name: "Ankara Döneri",
        category: "et",
        ingredients: ["dana eti", "soğan", "süt", "baharat"],
        steps: ["Eti marine edin.", "Döner şişine takıp pişirin."]
      },
      {
        name: "Çubuk Tarhanası",
        category: "corba",
        ingredients: ["tarhana", "su", "domates salçası"],
        steps: ["Tarhanayı suyla açın.", "Salça ekleyip kaynatın."]
      },
      {
        name: "Kalecik Karası (üzüm)",
        category: "tatli",
        ingredients: ["üzüm", "şeker"],
        steps: ["Üzüm suyunu kaynatıp koyulaştırın."]
      },
      {
        name: "Beypazarı Kurusu",
        category: "hamur",
        ingredients: ["un", "su", "maya", "tuz"],
        steps: ["Hamur hazırlayın.", "Şekil verip fırında pişirin."]
      }
    ]
  },
  {
    plate: 7,
    name: "Antalya",
    dishes: [
      {
        name: "Antalya Piyazı",
        category: "sebze",
        ingredients: ["kuru fasulye", "soğan", "sirke", "zeytinyağ"],
        steps: ["Fasulye haşlayın.", "Soğan ve sirke ekleyin.", "Zeytinyağ gezdirin."]
      },
      {
        name: "Arap Eriştesi",
        category: "hamur",
        ingredients: ["eriste", "tavuk", "domates", "sarımsak"],
        steps: ["Erişte haşlayın.", "Tavuk ve sebzelerle soteleyin."]
      },
      {
        name: "Kabak Çiçeği Dolması",
        category: "sebze",
        ingredients: ["kabak çiçeği", "pirinç", "soğan", "zeytinyağ"],
        steps: ["İç harcı hazırlayın.", "Çiçeklere doldurun.", "Zeytinyağlı pişirin."]
      },
      {
        name: "Tahinli Pide",
        category: "hamur",
        ingredients: ["un", "tahin", "şeker"],
        steps: ["Hamur açın.", "Tahin ve şeker sürün.", "Fırında pişirin."]
      },
      {
        name: "Finike Portakalı Tatlısı",
        category: "tatli",
        ingredients: ["portakal", "şeker", "su"],
        steps: ["Portakal dilimlerini şerbetle pişirin."]
      }
    ]
  },
  {
    plate: 8,
    name: "Artvin",
    dishes: [
      {
        name: "Artvin Mıhlaması",
        category: "et",
        ingredients: ["mısır unu", "tereyağ", "peynir", "su"],
        steps: ["Tereyağ eritin.", "Mısır unu ve peynir ekleyin.", "Karıştırarak pişirin."]
      },
      {
        name: "Kuymak (Artvin)",
        category: "hamur",
        ingredients: ["mısır unu", "tereyağ", "peynir"],
        steps: ["Yağ eritin.", "Un ekleyip kavurun.", "Peynir ekleyip karıştırın."]
      },
      {
        name: "Laz Böreği",
        category: "tatli",
        ingredients: ["yufka", "muhallebi", "şerbet"],
        steps: ["Yufkaları yağlayın.", "Muhallebi sürün.", "Katlayıp pişirin ve şerbet dökün."]
      },
      {
        name: "Çoruh Alabalığı",
        category: "deniz",
        ingredients: ["alabalık", "zeytinyağ", "limon", "tuz"],
        steps: ["Balığı temizleyin.", "Yağlayıp ızgarada pişirin.", "Limonla servis yapın."]
      },
      {
        name: "Kaymaklı Çörek",
        category: "hamur",
        ingredients: ["un", "kaymak", "şeker"],
        steps: ["Hamur hazırlayın.", "Kaymak koyun.", "Fırında pişirin."]
      }
    ]
  },
  {
    plate: 9,
    name: "Aydın",
    dishes: [
      {
        name: "Aydın Yayla Çorbası",
        category: "corba",
        ingredients: ["yoğurt", "un", "yumurta", "nane"],
        steps: ["Yoğurt ve unu çırpın.", "Kaynatın.", "Naneli servis yapın."]
      },
      {
        name: "Çöp Şiş",
        category: "kebap",
        ingredients: ["kuzu eti", "soğan", "baharat"],
        steps: ["Eti küp doğrayın.", "Şişe takıp mangalda pişirin."]
      },
      {
        name: "İncir Tatlısı",
        category: "tatli",
        ingredients: ["kuru incir", "ceviz", "şerbet"],
        steps: ["İnciri şerbetle pişirin.", "Ceviz doldurun."]
      },
      {
        name: "Zeytinyağlı Enginar",
        category: "sebze",
        ingredients: ["enginar", "zeytinyağ", "soğan", "havuç"],
        steps: ["Enginarı temizleyin.", "Zeytinyağ ve sebzelerle pişirin."]
      },
      {
        name: "Maydanoz Salatası",
        category: "sebze",
        ingredients: ["maydanoz", "limon", "zeytinyağ", "sumak"],
        steps: ["Maydanozu ince doğrayın.", "Limon ve yağ ekleyin.", "Sumak serpin."]
      }
    ]
  },
  {
    plate: 10,
    name: "Balıkesir",
    dishes: [
      {
        name: "Balıkesir Köfte",
        category: "et",
        ingredients: ["kıyma", "soğan", "baharat", "ekmek içi"],
        steps: ["Kıyma ve baharatları yoğurun.", "Şekil verip ızgarada pişirin."]
      },
      {
        name: "Höşmerim",
        category: "tatli",
        ingredients: ["un", "tereyağ", "şeker"],
        steps: ["Unu yağda kavurun.", "Şeker ekleyip karıştırın."]
      },
      {
        name: "Ayvalık Zeytinyağ",
        category: "sebze",
        ingredients: ["zeytin", "zeytinyağ", "limon"],
        steps: ["Zeytinleri tuzlu suda bekletin.", "Zeytinyağ ile servis yapın."]
      },
      {
        name: "Sıma",
        category: "hamur",
        ingredients: ["un", "su", "maya", "tuz"],
        steps: ["Hamur hazırlayın.", "Şekil verin.", "Sacda pişirin."]
      },
      {
        name: "Kavurma",
        category: "et",
        ingredients: ["kuzu eti", "yağ", "tuz"],
        steps: ["Eti kavurun.", "Yağda muhafaza edin."]
      }
    ]
  },
  {
    plate: 11,
    name: "Bilecik",
    dishes: [
      {
        name: "Bilecik Pide",
        category: "hamur",
        ingredients: ["un", "kıyma", "soğan", "kaşar"],
        steps: ["Hamur açın.", "Kıymalı harcı koyun.", "Kaşar serpip fırında pişirin."]
      },
      {
        name: "Erişte Çorbası",
        category: "corba",
        ingredients: ["erişte", "tavuk suyu", "tereyağ"],
        steps: ["Erişteyi tavuk suyunda haşlayın.", "Tereyağ ekleyin."]
      },
      {
        name: "Cevizli Tatlı",
        category: "tatli",
        ingredients: ["un", "ceviz", "şerbet"],
        steps: ["Hamur hazırlayın.", "Ceviz koyun.", "Şerbet dökün."]
      },
      {
        name: "Peynirli Gözleme",
        category: "hamur",
        ingredients: ["un", "beyaz peynir", "maydanoz"],
        steps: ["Hamur açın.", "Peynirli iç koyun.", "Sacda pişirin."]
      },
      {
        name: "Tarhana Çorbası",
        category: "corba",
        ingredients: ["tarhana", "su", "salça"],
        steps: ["Tarhanayı suyla açın.", "Salça ekleyip kaynatın."]
      }
    ]
  },
  {
    plate: 12,
    name: "Bingöl",
    dishes: [
      {
        name: "Bingöl Ballı",
        category: "tatli",
        ingredients: ["bal", "un", "tereyağ"],
        steps: ["Unu yağda kavurun.", "Bal ekleyip karıştırın."]
      },
      {
        name: "Kavut",
        category: "hamur",
        ingredients: ["un", "tereyağ", "şeker"],
        steps: ["Un ve tereyağ kavurun.", "Şeker ekleyin."]
      },
      {
        name: "Ciğer Sote",
        category: "et",
        ingredients: ["kuzu ciğeri", "soğan", "biber"],
        steps: ["Ciğeri doğrayın.", "Soğan ve biberle soteleyin."]
      },
      {
        name: "Mergi Çorbası",
        category: "corba",
        ingredients: ["yoğurt", "un", "yumurta", "nane"],
        steps: ["Yoğurt, un ve yumurta çırpın.", "Kaynatıp nane ekleyin."]
      },
      {
        name: "Kete",
        category: "hamur",
        ingredients: ["un", "yoğurt", "tereyağ"],
        steps: ["Hamur yoğurun.", "Katlayıp pişirin."]
      }
    ]
  },
  {
    plate: 13,
    name: "Bitlis",
    dishes: [
      {
        name: "Bitlis Köftesi",
        category: "et",
        ingredients: ["kıyma", "soğan", "baharat", "bulgur"],
        steps: ["Kıyma ve bulguru yoğurun.", "Şekil verip pişirin."]
      },
      {
        name: "Kürt Kebabı",
        category: "kebap",
        ingredients: ["kuzu eti", "soğan", "domates", "biber"],
        steps: ["Eti şişe takın.", "Sebzelerle mangalda pişirin."]
      },
      {
        name: "Ayran Aşı",
        category: "corba",
        ingredients: ["yoğurt", "un", "nane"],
        steps: ["Yoğurt ve unu çırpın.", "Kaynatın.", "Naneli servis yapın."]
      },
      {
        name: "Pekmezli Çörek",
        category: "hamur",
        ingredients: ["un", "pekmez", "maya"],
        steps: ["Hamur mayalandırın.", "Pekmez sürün.", "Fırında pişirin."]
      },
      {
        name: "Dövme Pilavı",
        category: "et",
        ingredients: ["dövme", "et", "soğan", "tereyağ"],
        steps: ["Dövmeyi haşlayın.", "Et ve soğanla kavurun."]
      }
    ]
  },
  {
    plate: 14,
    name: "Bolu",
    dishes: [
      {
        name: "Bolu Çoban Köfte",
        category: "et",
        ingredients: ["kıyma", "soğan", "maydanoz", "baharat"],
        steps: ["Kıymayı yoğurun.", "Köfte şekli verip ızgarada pişirin."]
      },
      {
        name: "Bolu Pidesi",
        category: "hamur",
        ingredients: ["un", "kıyma", "kaşar", "biber"],
        steps: ["Hamur açın.", "Kıyma ve biber koyun.", "Kaşar serpip fırında pişirin."]
      },
      {
        name: "Kestane Şekeri",
        category: "tatli",
        ingredients: ["kestane", "şeker", "su"],
        steps: ["Kestaneleri şerbetle pişirin."]
      },
      {
        name: "Mantı (Bolu)",
        category: "hamur",
        ingredients: ["un", "kıyma", "yoğurt", "tereyağ"],
        steps: ["Hamur açıp kesin.", "Kıyma koyup haşlayın.", "Yoğurt ve yağ dökün."]
      },
      {
        name: "Keşkek",
        category: "et",
        ingredients: ["buğday", "kuşbaşı et", "tereyağ"],
        steps: ["Buğday ve eti haşlayın.", "Dövüp tereyağla servis yapın."]
      }
    ]
  },
  {
    plate: 15,
    name: "Burdur",
    dishes: [
      {
        name: "Burdur Şiş",
        category: "kebap",
        ingredients: ["kuzu eti", "soğan", "baharat"],
        steps: ["Eti şişe takın.", "Mangalda pişirin."]
      },
      {
        name: "Burdur Köftesi",
        category: "et",
        ingredients: ["kıyma", "soğan", "baharat"],
        steps: ["Kıymayı yoğurun.", "Şekil verip kızartın."]
      },
      {
        name: "Tarhana Çorbası",
        category: "corba",
        ingredients: ["tarhana", "su", "salça"],
        steps: ["Tarhanayı suyla açın.", "Kaynatın."]
      },
      {
        name: "Burdur Kadayıfı",
        category: "tatli",
        ingredients: ["kadayıf", "ceviz", "şerbet"],
        steps: ["Kadayıfı yağlayın.", "Ceviz serip pişirin.", "Şerbet dökün."]
      },
      {
        name: "Peynirli Mantı",
        category: "hamur",
        ingredients: ["un", "peynir", "yoğurt"],
        steps: ["Hamur açıp kesin.", "Peynir koyup kapatın.", "Haşlayıp yoğurt dökün."]
      }
    ]
  },
  {
    plate: 16,
    name: "Bursa",
    dishes: [
      {
        name: "Bursa İskender",
        category: "kebap",
        ingredients: ["döner eti", "pide", "yoğurt", "domates sosu", "tereyağ"],
        steps: ["Pide üzerine döner koyun.", "Yoğurt ve domates sos gezdirin.", "Tereyağ döküp servis yapın."]
      },
      {
        name: "Bursa Döneri",
        category: "et",
        ingredients: ["dana eti", "soğan", "süt", "baharat"],
        steps: ["Eti marine edin.", "Döner şişinde pişirin."]
      },
      {
        name: "İnegöl Köfte",
        category: "et",
        ingredients: ["kıyma", "soğan", "baharat"],
        steps: ["Kıyma ve soğan yoğurun.", "Şekil verip ızgarada pişirin."]
      },
      {
        name: "Kestane Şekeri",
        category: "tatli",
        ingredients: ["kestane", "şeker", "su"],
        steps: ["Kestaneleri şerbetle pişirin."]
      },
      {
        name: "Cantalok",
        category: "tatli",
        ingredients: ["un", "tereyağ", "şeker"],
        steps: ["Hamur hazırlayın.", "Şeker serpip pişirin."]
      }
    ]
  },
  {
    plate: 17,
    name: "Çanakkale",
    dishes: [
      {
        name: "Çanakkale Salatası",
        category: "sebze",
        ingredients: ["domates", "salatalık", "biber", "soğan", "zeytinyağ"],
        steps: ["Sebzeleri doğrayın.", "Zeytinyağ ve limon ekleyin."]
      },
      {
        name: "Midye Tava",
        category: "deniz",
        ingredients: ["midye", "un", "yumurta", "kızartma yağı"],
        steps: ["Midye temizleyin.", "Una batırıp yumurtalayın.", "Kızartın."]
      },
      {
        name: "Sardalya Izgara",
        category: "deniz",
        ingredients: ["sardalya", "zeytinyağ", "limon"],
        steps: ["Sardalyayı temizleyin.", "Izgarada pişirin.", "Limonla servis yapın."]
      },
      {
        name: "Kabak Çiçeği Dolması",
        category: "sebze",
        ingredients: ["kabak çiçeği", "pirinç", "soğan", "zeytinyağ"],
        steps: ["İç harcı hazırlayın.", "Çiçeğe doldurun.", "Pişirin."]
      },
      {
        name: "Peynirli Ekmek",
        category: "hamur",
        ingredients: ["un", "peynir", "maya"],
        steps: ["Hamur hazırlayın.", "Peynir ekleyip pişirin."]
      }
    ]
  },
  {
    plate: 18,
    name: "Çankırı",
    dishes: [
      {
        name: "Çankırı Saltuk",
        category: "et",
        ingredients: ["kuzu eti", "soğan", "baharat"],
        steps: ["Eti kavurun.", "Soğan ve baharat ekleyin."]
      },
      {
        name: "Tirit",
        category: "et",
        ingredients: ["et", "ekmek", "yoğurt"],
        steps: ["Eti haşlayın.", "Ekmek üzerine koyun.", "Yoğurt dökün."]
      },
      {
        name: "Keşkek",
        category: "et",
        ingredients: ["buğday", "kuşbaşı et", "tereyağ"],
        steps: ["Buğday ve et haşlayın.", "Dövüp tereyağla servis yapın."]
      },
      {
        name: "Çankırı Mantısı",
        category: "hamur",
        ingredients: ["un", "kıyma", "yoğurt"],
        steps: ["Hamur açıp kesin.", "Kıyma koyup haşlayın.", "Yoğurt dökün."]
      },
      {
        name: "Pekmezli Kurabiye",
        category: "tatli",
        ingredients: ["un", "pekmez", "tereyağ"],
        steps: ["Hamur yoğurun.", "Pekmez ekleyip pişirin."]
      }
    ]
  },
  {
    plate: 19,
    name: "Çorum",
    dishes: [
        {
