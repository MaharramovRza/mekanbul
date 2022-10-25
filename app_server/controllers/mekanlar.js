var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next){
    res.render('anasayfa',
    {title:'Anasayfa',
    "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"Civardaki Mekanlari Kesfet!"
    },
    "mekanlar":[
        {
            "ad":"Starbucks",
            "puan":"3",
            "adres":"Centrum Garden AVM",
            "imkanlar":["Kahve","Cay","Kek"],
            "mesafe":"10km" 
        },
        {
            "ad":"Barida Kafe",
            "puan":"4",
            "adres":"SDU Bati Kampusu",
            "imkanlar":["Kahve","Cay","Kek"],
            "mesafe":"1km" 
        }
    ]
});
};

const mekanBilgisi=function(req, res, next){
    res.render('mekanbilgisi',
    {baslik:'Mekan Bilgisi',
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "puan":"3",
        "adres":"Centrum Garden",
        "saatler":[
            {
                "gunler":"Pazartesi-Cuma",
                "acilis":"8:00-22:00",
                "kapali":"false"
            }
        ],
        "imkanlar":["Kahve","Cay","Kek"],
        "koordinatlar":{
            "enlem":"37.7",
            "boylam":"30.5"
        },
        "yorumlar":[
            {
                "yorumYapan":"Asim Sinan Yuksel",
                "yorumMetni":"Berbatttttt",
                "tarih":"20 Ekim 2022",
                "puan":"1"
            },
            {
                "yorumYapan":"Ali",
                "yorumMetni":"Qus iliyi",
                "tarih":"22 Ekim 2022",
                "puan":"5"
            }
        ]
        
    }





});
}

const yorumEkle=function(req, res, next){
    res.render('yorumekle',{title:'Yorum Ekle'});
}


module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}

