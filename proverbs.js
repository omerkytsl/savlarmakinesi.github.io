// Sample proverb data
// Contains all 283 proverbs from the provided list
const proverbs = [
    {
        id: 1,
        oldTurkish: "Awçı nece al bilse adhığ ança yol bilir",
        modernTurkish: "Avcı ne kadar hile bilse, ayı da o kadar yol bilir."
    },
    {
        id: 2,
        oldTurkish: "Aç ewek, tok tölek",
        modernTurkish: "Aç aceleci, tok yavaş olur."
    },
    {
        id: 3,
        oldTurkish: "Açıglığ er şebük karımas",
        modernTurkish: "Varlıklı kişi çabuk kocamaz."
    },
    {
        id: 4,
        oldTurkish: "Aç ne yemes, tok ne temes",
        modernTurkish: "Aç ne yemez, tok ne demez."
    },
    {
        id: 5,
        oldTurkish: "Agılda oğlak togsa arıkda otı oner",
        modernTurkish: "Ağılda oğlak doğsa ırmakta otu biter."
    },
    {
        id: 6,
        oldTurkish: "Agız yese köz uyadhur",
        modernTurkish: "Ağız yese göz utanır."
    },
    {
        id: 7,
        oldTurkish: "Alımçı arslan, berimçi sıçgan",
        modernTurkish: "Alacaklı arslan, borçlu sıçan gibidir."
    },
    {
        id: 8,
        oldTurkish: "Alın arslan tutar; küçin oyuk tutmas",
        modernTurkish: "Hile ile arslan tutulur, güç ile korkuluk tutulmaz."
    },
    {
        id: 9,
        oldTurkish: "Alın arslan tutar; küçin sıçgan tutmas",
        modernTurkish: "Hile ile arslan tutulur, güç ile sıçan tutulmaz."
    },
    {
        id: 10,
        oldTurkish: "Alp çerikde, bilge tirigde",
        modernTurkish: "Yiğit savaşta, akıllı adam mecliste belli olur."
    },
    {
        id: 11,
        oldTurkish: "Alp eriğ yawrıtma ıkılaç arkasın yagrıtma",
        modernTurkish: "Yiğit adama kötülük etme, iyi koşan atın sırtını yaralatma."
    },
    {
        id: 12,
        oldTurkish: "Alplar birle uruşma, begler birle turuşma",
        modernTurkish: "Yiğitlerle vuruşma, beylerle duruşma."
    },
    {
        id: 13,
        oldTurkish: "Alp yağıda, alçak çoğıda",
        modernTurkish: "Yiğit düşman karşısında, yumuşak huylu adam savaşta belli olur."
    },
    {
        id: 14,
        oldTurkish: "Anası tewlük yuwka yapar, oğlı tetik koşa kapar",
        modernTurkish: "Anası çocuğu kandırmak için yufkayı ince yapar, oğlu da zeki olduğu için yufkayı çifter alır."
    },
    {
        id: 15,
        oldTurkish: "Anğduz bolsa at ölmes",
        modernTurkish: "Andız (Karın ağrısına iyi gelen, yerden kazılıp çıkarılan bir kök) hazır olursa at karın ağrısından ölmez."
    },
    {
        id: 16,
        oldTurkish: "Anınğ yüzinğ titinü baksa bolmas",
        modernTurkish: "Onun yüzüne dik baksa olmaz. (İnsan, onun güzelliği dolayısıyla yüzüne bakamaz.)"
    },
    {
        id: 17,
        oldTurkish: "Anug utru tuşa yokka sanmas",
        modernTurkish: "Konuğun önüne konan yemek ikram edilmemiş sayılmaz."
    },
    {
        id: 18,
        oldTurkish: "Arı kafçıktsa ısrur",
        modernTurkish: "Arı kızdıran adamı sokar."
    },
    {
        id: 19,
        oldTurkish: "Arkasız er çeriğ sıyumas",
        modernTurkish: "Yardımcısı olmadıkça asker yenemez."
    },
    {
        id: 20,
        oldTurkish: "Arpasız at aşumas, arkasız alp çeriğ suyumas",
        modernTurkish: "Arpasız at koşamaz, arkasız yiğit asker bozamaz."
    },
    {
        id: 21,
        oldTurkish: "Arslan karısa sıçgan ötün ködhezür",
        modernTurkish: "Arslan kocalırsa, fare deliğini bekler."
    },
    {
        id: 22,
        oldTurkish: "Arslan kökrese at adhakı tuşalır",
        modernTurkish: "Arslan kükreyince atın ayağı dolaşır, kösteklenir."
    },
    {
        id: 23,
        oldTurkish: "Aşıç ayur tübüm altun, kamuç ayur men kayda men",
        modernTurkish: "Tencere der: dibim altın, kepçe der: ben neredeyim."
    },
    {
        id: 24,
        oldTurkish: "Aş tatığı tuz yogrın yemes",
        modernTurkish: "Aşın tadı tuz ise de, çanakta yalnız tuz yenmez."
    },
    {
        id: 25,
        oldTurkish: "Atan yüki aş bolsa açka az körünür",
        modernTurkish: "İğdiş edilen devenin yükü yemek olsa, aç kimseye az görünür."
    },
    {
        id: 26,
        oldTurkish: "Ata oglı ataç togar",
        modernTurkish: "Çocuk babasına çeker."
    },
    {
        id: 27,
        oldTurkish: "Atası açığ almıla yese oglınınğ tışı kamar",
        modernTurkish: "Babası ekşi elma yese oğlunun dişi kamaşır."
    },
    {
        id: 28,
        oldTurkish: "Atası anası açığ açığ almıla yese oğlı kızı tışı kamar",
        modernTurkish: "Babası, anası ekşi elma yese oğlunun, kızının dişi kamaşır."
    },
    {
        id: 29,
        oldTurkish: "Ata tonı ogulka yarasa atasın tilemes",
        modernTurkish: "Atasının elbisesi uygun gelirse ondan sonra atasını istemez. (Babasının mirasını almak için onun yaşamasını istemez.)"
    },
    {
        id: 30,
        oldTurkish: "At teküzligi ay bolmas",
        modernTurkish: "Atın alnındaki beyazlık Ay yerini tutmaz."
    },
    {
        id: 31,
        oldTurkish: "Adhın kişi nenği nenği nenğ sanmas",
        modernTurkish: "Başkasının malı mal sayılmaz."
    },
    {
        id: 32,
        oldTurkish: "Ay tolun bolsa eliğin imlemes",
        modernTurkish: "Ay dolunay olunca elle gösterilmez."
    },
    {
        id: 33,
        oldTurkish: "Azukluğ aruk ermes",
        modernTurkish: "Azığı olan adam yorulmaz."
    },
    {
        id: 34,
        oldTurkish: "Balık suwda közü taştın",
        modernTurkish: "Balık suda, gözü dışarıda."
    },
    {
        id: 35,
        oldTurkish: "Bar bakır, yok altun",
        modernTurkish: "Var olan bakır, yok olan altın. (Elde bulunan şey bakır gibi değersiz sayılır; elde bulunmayan şey, altın gibi kıymetlidir.)"
    },
    {
        id: 36,
        oldTurkish: "Barçın yamağı barçınka, karış yamağı karışka",
        modernTurkish: "İpekli yaması ipekliye, yünlü yaması yünlüye."
    },
    {
        id: 37,
        oldTurkish: "Barığ otur tutsa yokka sanmas",
        modernTurkish: "Var olan öne konsa yok sayılmaz. (Konuğa, hazır olan şey sunulsa bir şey verilmemiş sayılmaz)"
    },
    {
        id: 38,
        oldTurkish: "Beş erinyeğ tüz ermes",
        modernTurkish: "Beş parmak düz(bir) olmaz."
    },
    {
        id: 39,
        oldTurkish: "Bilmiş yek bilmedhüg kişiden yeg",
        modernTurkish: "Tanınmış şeytan, tanınmadık adamdan iyidir."
    },
    {
        id: 40,
        oldTurkish: "Birin birin minğ bolur, tama tama köl bolur",
        modernTurkish: "Birer birer bin olur, damlaya damlaya göl olur."
    },
    {
        id: 41,
        oldTurkish: "Bir karga birle kış kelmes",
        modernTurkish: "Bir karga ile kış gelmez."
    },
    {
        id: 42,
        oldTurkish: "Bir tilkü terisin ikile soymas",
        modernTurkish: "Bir tilki derisi iki kez soyulmaz."
    },
    {
        id: 43,
        oldTurkish: "Bir toyın başı ağrısa kamuğ toyın başı agrımas",
        modernTurkish: "Toyın (Müslüman olmayan bir din ulusu) başı ağrısa, bütün din ulularının başı ağrımaz."
    },
    {
        id: 44,
        oldTurkish: "Boldaçı buzagu öküz ara belgülüğ",
        modernTurkish: "Öküz olacak buzağı bellidir."
    },
    {
        id: 45,
        oldTurkish: "Bor bolmadhıp sirke bolma",
        modernTurkish: "Şarap olmadan sirke olmaz."
    },
    {
        id: 46,
        oldTurkish: "Boşlaglansa boxuklanır",
        modernTurkish: "Kızan adamın eli boynuna bağlanır."
    },
    {
        id: 47,
        oldTurkish: "Boş nenğe idhi bolmas",
        modernTurkish: "Boş bırakılan malın sahibi olmaz."
    },
    {
        id: 48,
        oldTurkish: "Böri koşnısın yemes",
        modernTurkish: "Kurt komşusunu yemez."
    },
    {
        id: 49,
        oldTurkish: "Börininğ ortak, kuzgununğ yıgaç başında",
        modernTurkish: "Kuzgun, kurdun avladığına ortak olur; kendi avladığını ağacın başında saklar."
    },
    {
        id: 50,
        oldTurkish: "Bugday katında sarkaç suwalır",
        modernTurkish: "Buğday yanında karamuk (böğürtlen) da sulanır."
    },
    {
        id: 51,
        oldTurkish: "Bu kök kirsün kızıl çıksun",
        modernTurkish: "Sözünde durmazsan kılıç kanına bulansın, demir senden öcünü alsın."
    },
    {
        id: 52,
        oldTurkish: "Buşmasar boz kuş tutar, ewmeser ürünğ kuş tutar",
        modernTurkish: "Avcı sıkılmazsa boz kuş tutar, acele etmezse beyaz kuş tutar."
    },
    {
        id: 53,
        oldTurkish: "Buzdan suw tamar",
        modernTurkish: "Buzdan su damlar."
    },
    {
        id: 54,
        oldTurkish: "Bütün ümlüğ kança kolsa olturur",
        modernTurkish: "Donu sağlam olan nereye istese oturur."
    },
    {
        id: 55,
        oldTurkish: "Çaksa tütnür, çalsa bilnür",
        modernTurkish: "Çakmak çakılsa ateş çıkar, söz işitilse dilek anlaşılır."
    },
    {
        id: 56,
        oldTurkish: "Çaxşak üze ot bolmas, çakrak bile uwut bolmas",
        modernTurkish: "Dağ tepelerindeki taşlıkta ot olmaz, dazda (kel) ar (haya) olmaz."
    },
    {
        id: 57,
        oldTurkish: "Ewdeki buzağı öküz bolmas",
        modernTurkish: "Ev danası öküz olmaz."
    },
    {
        id: 58,
        oldTurkish: "Ewek ewge tegmes",
        modernTurkish: "Aceleci evine varamaz."
    },
    {
        id: 59,
        oldTurkish: "Ewek sinğek sütge tüşür",
        modernTurkish: "Aceleci sinek süte düşer."
    },
    {
        id: 60,
        oldTurkish: "Ewliğ todhgursa közü yolka bulur",
        modernTurkish: "Ev sahibi konuğun karnını doyurursa, konuğun gözü yolda olur."
    },
    {
        id: 61,
        oldTurkish: "Egir bolsa er ölmes",
        modernTurkish: "Eğir (karın ağrısına iyi gelen bir kök) bir adamın yanında bulunursa ölmez."
    },
    {
        id: 62,
        oldTurkish: "Eliğ tutgınça ot ut",
        modernTurkish: "El tutacağına ateş tut. (Kefil olacağına ateş tut, çünkü kefil olan pişman olur.)"
    },
    {
        id: 63,
        oldTurkish: "El kaldı törü kalmas",
        modernTurkish: "Vilayet bırakılır, görenek bırakılmaz."
    },
    {
        id: 64,
        oldTurkish: "Emgek eğinde kalmas",
        modernTurkish: "Sıkıntı sırtta kalmaz."
    },
    {
        id: 65,
        oldTurkish: "Emikliğ uragut kösekçi bolur",
        modernTurkish: "Emziklşi kadın itahlı olur."
    },
    {
        id: 66,
        oldTurkish: "Endik uma ewlikni ağırlar",
        modernTurkish: "Şaşkın konuk ev sahibini ağırlar."
    },
    {
        id: 67,
        oldTurkish: "Erdem başı tıl",
        modernTurkish: "Faziletin başı dildir."
    },
    {
        id: 68,
        oldTurkish: "Erdemsiz kut çeltirür",
        modernTurkish: "Fasiletsiz olandan devlet uzaklaşır."
    },
    {
        id: 69,
        oldTurkish: "Erge munğ tegir tag senğirinğe yel tegir",
        modernTurkish: "İnsana sıkıntı gelir; dağ başına, dağ çıkıntısına da yel değer."
    },
    {
        id: 70,
        oldTurkish: "Erik erini yaglığ, ermegü başı kanlığ",
        modernTurkish: "Çalışan adamın dudakları yağlı, erinenin (tembel) başı kanlı olur."
    },
    {
        id: 71,
        oldTurkish: "Erkeç eti em bolur, eçkü eti yel bolur",
        modernTurkish: "Genç teke eti ilaç olur, keçi eti yel olur."
    },
    {
        id: 72,
        oldTurkish: "Ermegüge bulıt yük bolur",
        modernTurkish: "Erinege (üşengeç) bulut yük olur."
    },
    {
        id: 73,
        oldTurkish: "Ermegüge eşik art bolur",
        modernTurkish: "Tembele eşik dağ beli olur."
    },
    {
        id: 74,
        oldTurkish: "Ernğenge eliğ karı böz üm tikemes",
        modernTurkish: "Ergene elli arşın bez don olmaz."
    },
    {
        id: 75,
        oldTurkish: "Er oglı munğadhmas, it oglı külermes",
        modernTurkish: "İnsan uzun süre sıkıntıda kalmaz, it yavrusu tökezlemez."
    },
    {
        id: 76,
        oldTurkish: "Ersek erge tegmes, ewek ewge tegmes",
        modernTurkish: "Azgın kadın koca bulmaz, aceleci eve varamaz."
    },
    {
        id: 77,
        oldTurkish: "Er sözü bir, edher köki üç",
        modernTurkish: "Erinin sözü bir, eğer bağı üç olur."
    },
    {
        id: 78,
        oldTurkish: "Esende ewek yok",
        modernTurkish: "Sağlıkta acele olmaz."
    },
    {
        id: 79,
        oldTurkish: "Esiz anınğ yiğitliği",
        modernTurkish: "Yazık onun yiğitliğine."
    },
    {
        id: 80,
        oldTurkish: "Eşyek ayur başım bolsa sundurida suw içgeymen",
        modernTurkish: "Eşek, aklım olsa denizden su içerim, der."
    },
    {
        id: 81,
        oldTurkish: "Etli tırnğaklı edhirmes",
        modernTurkish: "Et tırnaktan ayrılmaz."
    },
    {
        id: 82,
        oldTurkish: "Edhgü er sünğüki erir atı kalır",
        modernTurkish: "İyi adam ölür, adı (namı) kalır."
    },
    {
        id: 83,
        oldTurkish: "Edhgülügni suw adhakında kemiş başında tile",
        modernTurkish: "İyiliği su ayağına at, başında ara."
    },
    {
        id: 84,
        oldTurkish: "Edhgülükün kel, isizligin kelme",
        modernTurkish: "İyilikle gel, kötülükle gelme."
    },
    {
        id: 85,
        oldTurkish: "Inğan ınğrasa butu bozlar",
        modernTurkish: "Dişi deve inleyince boduk (yavrusu) deve ses verir."
    },
    {
        id: 86,
        oldTurkish: "İş yaragında, sart asıgında",
        modernTurkish: "İş tavında (fırsatında, sırasında, yerinde) tüccar ise karında."
    },
    {
        id: 87,
        oldTurkish: "It çakırı atka tegir, at çakırı ıtku tepmes",
        modernTurkish: "Çakır gözlü köpek ata değer, atın çakırı bir ite değmez. (İtin nazarı ata değer, atın nazarı ite değmez.)"
    },
    {
        id: 88,
        oldTurkish: "It ısırmas, at tepmes teme",
        modernTurkish: "İt ısırmaz, at tepmez deme."
    },
    {
        id: 89,
        oldTurkish: "Itka uwut atsa oldanğ yemes",
        modernTurkish: "İt utansa çarığın altını yemez."
    },
    {
        id: 90,
        oldTurkish: "İgliğ turuğı adh bolur",
        modernTurkish: "Hastanın vasiyeti iyilik getirir."
    },
    {
        id: 91,
        oldTurkish: "İki koçnğar başı bir aşaçta pışmas",
        modernTurkish: "İki koç başı bir tencerede pişmez."
    },
    {
        id: 92,
        oldTurkish: "İkki bogra igeşür, otra kögegün yancılur",
        modernTurkish: "İki boğa çarpışır, arada gök sinek incinir."
    },
    {
        id: 93,
        oldTurkish: "İm bilse er ölmes",
        modernTurkish: "Belgeyi bilen adam ölmez (Parolayı bilen adam ölmez)."
    },
    {
        id: 94,
        oldTurkish: "İzlik bolse er öldimes, içlik bolsa at yağrımas",
        modernTurkish: "Çarık olsa adam ölmez, keçe olsa atın sırtı yağır (yara) olmaz."
    },
    {
        id: 95,
        oldTurkish: "Kaçış bolsa kıyı körmes",
        modernTurkish: "Halk arasında anlaşmazlık ve ürküntü olsa kimse birbirine yan bakamaz."
    },
    {
        id: 96,
        oldTurkish: "Kadaş temiş kaymaduk, kadhım temiş kaymış",
        modernTurkish: "Kardeş demiş tınmamış, dönüp bakmamış; kayın demiş iltifat etmiş."
    },
    {
        id: 97,
        oldTurkish: "Kagun karma bolsa idhisi ikki eligen tegir",
        modernTurkish: "Kavun yağma edilirse sahibi iki eliyle yakalar."
    },
    {
        id: 98,
        oldTurkish: "Kal sawı kalmas, kalgı bagı yazılmaz",
        modernTurkish: "Yaşlı adamın sözü bırakılmaz (tutulur). Kağıl bağı (üzüm asmalarına bağlanan söğüt dalı) çözülmez."
    },
    {
        id: 99,
        oldTurkish: "Kalın bulutuğ tügi karanğku ışığ urunç açar",
        modernTurkish: "Kalın bulutu tipi sürer, karanlık işi rüşvet açar."
    },
    {
        id: 100,
        oldTurkish: "Kalınğ berse kız alır, kerek bolsa kız alır",
        modernTurkish: "Çeyiz veren kız alır, gerekliyse pahalı alır."
    },
    {
        id: 101,
        oldTurkish: "Kalın kaz, kılavuzsuz bolmas",
        modernTurkish: "Kaz sürüsü kılavuzsuz olmaz."
    },
    {
        id: 102,
        oldTurkish: "Kalın kolan cufgasız bolmas",
        modernTurkish: "Kolan (yaban eşeği) sürüsü kılavuzsuz olmaz."
    },
    {
        id: 103,
        oldTurkish: "Kanğdaş kuma urur iğdiş örü tartar",
        modernTurkish: "Baba bir kardeşler dövüşürler, ana bir kardeşler yardımlaşırlar."
    },
    {
        id: 104,
        oldTurkish: "Kanığ kan bile yumas",
        modernTurkish: "Kanı kanla yıkamazlar."
    },
    {
        id: 105,
        oldTurkish: "Xan ışı bolsa katun ışı kalır",
        modernTurkish: "Hanın işi, emri olunca, Hatunun işi geri kalır."
    },
    {
        id: 106,
        oldTurkish: "Kara bulutu yel, rüşvet el açar",
        modernTurkish: "Kara bulutları rüzgar dağıtır (açar), hükümet kapılarını rüşvet açar."
    },
    {
        id: 107,
        oldTurkish: "Kara munğ kelmeginçe kara yalga keçme",
        modernTurkish: "Karabun (sıkıntı), karabela gelmedikçe, kara yalgayı geçme, çünkü sarptır, her zaman karlıdır."
    },
    {
        id: 108,
        oldTurkish: "Karga karısın kim bilir, kişi alasın kim tapar",
        modernTurkish: "Karganın yaşlısını kim bilir, insanın içinden geçeni kim sezer, kim anlar."
    },
    {
        id: 109,
        oldTurkish: "Karga kazga ötgünse butı sınur",
        modernTurkish: "Karga uçuşta ve kuvvette kazı taklit etmek istese ayağı kırılır."
    },
    {
        id: 110,
        oldTurkish: "Karı öküz balduka korkmas",
        modernTurkish: "Yaşlı öküz baltadan korkmaz."
    },
    {
        id: 111,
        oldTurkish: "Kadhınğ kasınğa",
        modernTurkish: "Kayın ağacına katılık yakışır."
    },
    {
        id: 112,
        oldTurkish: "Kadhınğ kasınğa söküt sülinke",
        modernTurkish: "Kayın ağacına katılık, söğüt ağacına tazelik yakışır."
    },
    {
        id: 113,
        oldTurkish: "Kaynar öküz keçiksiz bolmas",
        modernTurkish: "Coşkun su geçitsiz olmaz. (Kaynayan dere geçitsiz olmaz)"
    },
    {
        id: 114,
        oldTurkish: "Kaz kopsa ördek köliğ ıgenür",
        modernTurkish: "Kaz giderse ördek gölü benimser (göle sahip olur)."
    },
    {
        id: 115,
        oldTurkish: "Kek kördi keregü yüdhti",
        modernTurkish: "Sıkıntıyı gördü, çadırını yıktı, sırtladı."
    },
    {
        id: 116,
        oldTurkish: "Kenğeşlig bilig üdhreşir, Kenğeşsiz bilig obraşur",
        modernTurkish: "Danışıklı bilgi güzelleşir, danışıksız bilgi yıpranır."
    },
    {
        id: 117,
        oldTurkish: "Keriş yagrı ogulka kalır",
        modernTurkish: "Sırt yağırı (yarası) oğula kalır."
    },
    {
        id: 118,
        oldTurkish: "Kedhüklük ölimes, küfeçliğ kürimes",
        modernTurkish: "Kepeneği olan kimse yağmurdan ıslanmaz, gem vurulan at haşarılık yapmaz."
    },
    {
        id: 119,
        oldTurkish: "Kılıç tatıksa ış yunçır, er Tatıksa et tıncır",
        modernTurkish: "Kılıç paslanırsa iş kötüleşir, adam Farslılaşırsa kanı bozulur."
    },
    {
        id: 120,
        oldTurkish: "Kılnu bilse kızıl kedher, yarınu bilse yaşıl kedher",
        modernTurkish: "Kendini sevdirmeyi bilse kırmızı giyer, yaranmayı bilse yeşil giyer."
    },
    {
        id: 121,
        oldTurkish: "Kırk yılka tegin bay çıgay tüzlenir",
        modernTurkish: "Kırk yıla değin zengin yoksul bir olur."
    },
    {
        id: 122,
        oldTurkish: "Kış konıkı ot",
        modernTurkish: "Kış konuğu ateştir."
    },
    {
        id: 123,
        oldTurkish: "Kız birle küreşme, kısrak birle yarışma",
        modernTurkish: "Kızla görüşme, kısrakla yarışma."
    },
    {
        id: 124,
        oldTurkish: "Kız kişi sawı yorıglı bolmas",
        modernTurkish: "Pinti adamın ünü yayılmaz."
    },
    {
        id: 125,
        oldTurkish: "Keçikde katığlansa ulgandhu sevinir",
        modernTurkish: "Küçüklükte çabalarsa, büyüdüğünde sevinir."
    },
    {
        id: 126,
        oldTurkish: "Kiçik uluğka turuşmas, kırgug sonğkurka karışmas",
        modernTurkish: "Küçük büyüğe karşı, atmaca sonkura (yırtıcı kuşlardan biri) karşı koyamaz."
    },
    {
        id: 127,
        oldTurkish: "Kiminğ bile kaş bolsa yaşın yakmaz",
        modernTurkish: "Kimin yanında kaş (kara taş) bulunursa ona şimşek dokunmaz."
    },
    {
        id: 128,
        oldTurkish: "Kim kür bolsa köbez bolur",
        modernTurkish: "Kabadayı olan kurumlu olur."
    },
    {
        id: 129,
        oldTurkish: "Kıng ton opramas, kengeşliğ bilig artamas",
        modernTurkish: "Geniş elbise yıpranmaz, danışıklı iş bozuk olmaz."
    },
    {
        id: 130,
        oldTurkish: "Kişi alası içtin Yılkı alası taştın",
        modernTurkish: "İnsanın alası içinde hayvanın alası dışındadır."
    },
    {
        id: 131,
        oldTurkish: "Kişi eti tiriğle tatır",
        modernTurkish: "İnsan etinin tadı sağlığında bulunur."
    },
    {
        id: 132,
        oldTurkish: "Kişi sözleşü yılkı yıdhlaşu",
        modernTurkish: "İnsan söyleşerek, hayvan koklaşarak anlaşır."
    },
    {
        id: 133,
        oldTurkish: "Kizdeki kiz yapar",
        modernTurkish: "Sandıktaki amber kutusuna el sürülmez."
    },
    {
        id: 134,
        oldTurkish: "Kizlençü kelinde",
        modernTurkish: "Gizli şey gelinde bulunur."
    },
    {
        id: 135,
        oldTurkish: "Kowı er kuduğka kirse yel alır",
        modernTurkish: "Kadersiz adam kuyuya girse yel alır."
    },
    {
        id: 136,
        oldTurkish: "Kolan kuduğka tüşse kurbaka aygır bolur",
        modernTurkish: "Kolan (yaban eşeği) kuyuya düşse kara kurbağası aygır olur."
    },
    {
        id: 137,
        oldTurkish: "Korkmış kişige koy başı koş körünür",
        modernTurkish: "Korkmuş adama koyun başı çift görünür."
    },
    {
        id: 138,
        oldTurkish: "Koş kılıç kınga sığmaz",
        modernTurkish: "Çifte kılıç bir kına sığmaz."
    },
    {
        id: 139,
        oldTurkish: "Kökge sagursa yüzge tüşür",
        modernTurkish: "Bir adam göğe tükürse, yüzüne düşer."
    },
    {
        id: 140,
        oldTurkish: "Kök temür keru turmas",
        modernTurkish: "Gök demir (çelik kılıç) boş durmaz."
    },
    {
        id: 141,
        oldTurkish: "Köni barır keyikninğ közinde adhın başı yok",
        modernTurkish: "Düz giden geyiğin gözünden başka yarası yoktur."
    },
    {
        id: 142,
        oldTurkish: "Közden yırasa könülden könülden yeme yırar",
        modernTurkish: "Gözden ırak olan gönülden de ırak olur."
    },
    {
        id: 143,
        oldTurkish: "Köp sögütge kuş konar; körklüğ kişigr söz kelir",
        modernTurkish: "Gür söğüde kuş konar, güzele söz gelir."
    },
    {
        id: 144,
        oldTurkish: "Kösünğüge köğ tüşdi",
        modernTurkish: "Aynaya pas düştü."
    },
    {
        id: 145,
        oldTurkish: "Kulak eşitse köngül bilir, köz görse üdhik kelir",
        modernTurkish: "Kulak işitse gönül bilir, göz sevgilisini görünce coşkunluk gelir."
    },
    {
        id: 146,
        oldTurkish: "Kul yagı, ıt böri",
        modernTurkish: "Kul düşman, it kurttur."
    },
    {
        id: 147,
        oldTurkish: "Kurmış kiriş tügülmes, ukrukun tağ egilmes",
        modernTurkish: "Kurulmuş kiriş düğümlenmez, kement ile dağ eğilmez."
    },
    {
        id: 148,
        oldTurkish: "Kurtga büdhik bilmes yerim tar der",
        modernTurkish: "Koca karı oyun bilmez yerim dar der."
    },
    {
        id: 149,
        oldTurkish: "Kuruğ yıgaç eğilmes, kurmış kiriş tügülmes",
        modernTurkish: "Kuru ağaç eğilmez, kurulu kiriş düğülmez."
    },
    {
        id: 150,
        oldTurkish: "Kuruk kaşuk agızka yaramas, kurug kulakka yakışmas",
        modernTurkish: "Kuru kaşık ağıza, kuru söz kulağa yakışmaz."
    },
    {
        id: 151,
        oldTurkish: "Kuş balası kusınçığ, ıt balası oxşançığ",
        modernTurkish: "Kuş yavrusu kusunç, it yavrusu okşamak için."
    },
    {
        id: 152,
        oldTurkish: "Kuş kanatın er atın",
        modernTurkish: "Kuş kanadıyla, er atıyla."
    },
    {
        id: 153,
        oldTurkish: "Kuş tuzakka menğ uçun ılınur",
        modernTurkish: "Kuş tuzağa yem için takılır."
    },
    {
        id: 154,
        oldTurkish: "Kuş yawuzı sagzıgan, yıgaç yawuzı azgan, yer yawuzı kazgan, budun yawuzı Barsgan",
        modernTurkish: "Kuşların kötüsü saksağan, ağaçların kötüsü kuşburnu (yaban gülü), yerin kötüsü bataklıklı olan yer, halkın kötüsü de Barsganlılardır."
    },
    {
        id: 155,
        oldTurkish: "Kut belgüsi bilig",
        modernTurkish: "Devlet alameti bilgidir."
    },
    {
        id: 156,
        oldTurkish: "Kutluğka koşa yağar",
        modernTurkish: "Talihliye çift yağar."
    },
    {
        id: 157,
        oldTurkish: "Kutsuz kudhuğka kirse kum yağar",
        modernTurkish: "Uğursuz kişi kuyuya girse kum yağar."
    },
    {
        id: 158,
        oldTurkish: "Kudhuğda suw bar ıt burnı tegmes",
        modernTurkish: "Kuyuda su var (su olsa da), itin burnu erişmez."
    },
    {
        id: 159,
        oldTurkish: "Kuzda kar eksümes, koyda yağ eksümes",
        modernTurkish: "Güneş görmeyen yerde kar, koyunda yağ eksik olmaz."
    },
    {
        id: 160,
        oldTurkish: "Küç eldin kirse törü tünğlüktin çıkar",
        modernTurkish: "Zulüm kapıdan girerse, görenek bacadan çıkar."
    },
    {
        id: 161,
        oldTurkish: "Kül ürkünçe köz ürse yik",
        modernTurkish: "Küle üfleyeceğine köze üflemek daha iyidir."
    },
    {
        id: 162,
        oldTurkish: "Kümüş künge ursa altun adhakın kelir",
        modernTurkish: "Gümüş güneşe konsa altın ayağı ile gelir."
    },
    {
        id: 163,
        oldTurkish: "Künde irük yok, begde kıyık yok",
        modernTurkish: "Güneşte gedik yok, beyde caymak yok."
    },
    {
        id: 164,
        oldTurkish: "Künge baksa göz kamar",
        modernTurkish: "Güneşe bakanın gözü kamaşır."
    },
    {
        id: 165,
        oldTurkish: "Künininğ küline tegü yagı",
        modernTurkish: "Kuma kumanın külüne dahi düşmandır."
    },
    {
        id: 166,
        oldTurkish: "Küzegü uzun bolsa elig köymes",
        modernTurkish: "Küskü (maşa) uzun olursa el yanmaz."
    },
    {
        id: 167,
        oldTurkish: "Küz keliği yazın belgürer",
        modernTurkish: "Güzün gelişi yazdan belli olur."
    },
    {
        id: 168,
        oldTurkish: "Muş oglı muyavu togar",
        modernTurkish: "Kedi yavrusu miyavlayarak doğar."
    },
    {
        id: 169,
        oldTurkish: "Muş yagrıka tegişmes, ayur kişi nenği yaraşmas",
        modernTurkish: "Kedi asılı yağa erişemez, elin malı bana yaraşmaz der."
    },
    {
        id: 170,
        oldTurkish: "Neçeme obrak kedhuk erse yagmurka yarar",
        modernTurkish: "Elbise ne kadar yıpranmış da olsa yine yağmurdan korur."
    },
    {
        id: 171,
        oldTurkish: "Neçe munduz erse eş edhgü, nece eğri erse yol edhgü",
        modernTurkish: "Ne kadar kötü olsa da eş ve arkadaş iyidir, ne kadar eğri olsa da yine yol iyidir."
    },
    {
        id: 172,
        oldTurkish: "Neçe yitik biçek erse öz sapın yonumas",
        modernTurkish: "Bıçak ne kadar keskin olsa da kendi sapını yontmaz."
    },
    {
        id: 173,
        oldTurkish: "Oglak yiliksiz oglan biligsiz",
        modernTurkish: "Oğlakta ilik, çocukta bilgi yok."
    },
    {
        id: 174,
        oldTurkish: "Oglan bilgisiz",
        modernTurkish: "Çocuklar akıl edemez."
    },
    {
        id: 175,
        oldTurkish: "Oglan ışı ış bolmas oğlak müngüzi sap bolmas",
        modernTurkish: "Çocukların işi iş olmaz, oğlak boynuzu iyi sap olmaz."
    },
    {
        id: 176,
        oldTurkish: "Oglan suw töker, uluğ yanı sınur",
        modernTurkish: "Çocuk su döker, büyüğün bir yanı incinir.( ayağı kayar, kırılır)"
    },
    {
        id: 177,
        oldTurkish: "Oprak yasıkdın tozluğ ya çıkar",
        modernTurkish: "Tozlu yay kabından, tozlu yay çıkar."
    },
    {
        id: 178,
        oldTurkish: "Ortak erden artuk olmas",
        modernTurkish: "Ortak, ortağından fazla almaz."
    },
    {
        id: 179,
        oldTurkish: "Otağka öpkelep süge sözlemedük",
        modernTurkish: "Ortağa kızıp askerle görüşmedi. (Çadırdaki arkadaşlarına kızarak askerlerle görüşmedi.)"
    },
    {
        id: 180,
        oldTurkish: "Ot tese ağız köymes",
        modernTurkish: "Ateş değmekle ağız yanmaz."
    },
    {
        id: 181,
        oldTurkish: "Ot tütünsüz bolmas, yiğit yazuksuz bolmas",
        modernTurkish: "Ateş dumansız, genç günahsız olmaz."
    },
    {
        id: 182,
        oldTurkish: "Otuğ odhguç birle öçürmes",
        modernTurkish: "Ateş, alevle söndürülemez."
    },
    {
        id: 183,
        oldTurkish: "Ol keçişni suw iletti",
        modernTurkish: "Su o geçidi, köprüyü götürdü."
    },
    {
        id: 184,
        oldTurkish: "Öd keçer kişi tuymas, Yalnğuk oğlu menğgü kalmas",
        modernTurkish: "Zaman geçer insan duymaz, insanoğlu ebedi kalmaz."
    },
    {
        id: 185,
        oldTurkish: "Ödhlek karıtmışka bodhuğ alkımas",
        modernTurkish: "Zamanın yaşlandırdığı kişiye kına, boya ayıp sayılmaz."
    },
    {
        id: 186,
        oldTurkish: "Ögüngüçi üminde artatur",
        modernTurkish: "Kendini öven donunu kirletir."
    },
    {
        id: 187,
        oldTurkish: "Öküş sewinç bolsa katığ oxsunur",
        modernTurkish: "Çok sevinen çok pişman olur."
    },
    {
        id: 188,
        oldTurkish: "Öküz adhakı bolgınça buzağı başı bolsa yeg",
        modernTurkish: "Öküz ayağı olacağına buzağı başı olmak daha iyidir."
    },
    {
        id: 189,
        oldTurkish: "Öldeçi sıcgan muş taşağı kaşır",
        modernTurkish: "Ölecek sıçan kedi taşağı (husye) kaşır."
    },
    {
        id: 190,
        oldTurkish: "Ötlüğ yinçü yerde kalmas",
        modernTurkish: "Delikli inci yerde kalmaz; onun bir alanı bulunur."
    },
    {
        id: 191,
        oldTurkish: "Öz köz ir kışlağ",
        modernTurkish: "Kendi kışlığını kendin yap. (Adam kendi kışlığını kendi yaptı.)"
    },
    {
        id: 192,
        oldTurkish: "Sabanda sandırış bolsa örtkünde irteş bolmas",
        modernTurkish: "Tarla ekilip sürülürken kavga olursa, harman zamanı kavga olmaz."
    },
    {
        id: 193,
        oldTurkish: "Sawın sagrakka tegir",
        modernTurkish: "Güzel sözle sürahiye ulaşılır."
    },
    {
        id: 194,
        oldTurkish: "Saçratgudın korkmuş kuş kırk yıl adhrı yıgaç üze konmas",
        modernTurkish: "Tuzaktan korkan kuş kırk yıl çatal ağaç üzerine konmaz."
    },
    {
        id: 195,
        oldTurkish: "Sakak bıçar, sakal oxşar",
        modernTurkish: "Çene keser, sakal okşar."
    },
    {
        id: 196,
        oldTurkish: "Sakak oxşar, sakal bıçar",
        modernTurkish: "Hileyle sakalı okşayarak çeneyi keser."
    },
    {
        id: 197,
        oldTurkish: "Sart azukı arığ bolsa yolda yer",
        modernTurkish: "Tüccar temiz mal alsa yolda kendisi yer."
    },
    {
        id: 198,
        oldTurkish: "Sartnınğ azukı arığ bolsa yol üze yer",
        modernTurkish: "Satıcının malı temiz olsa yol üzerinde kendisi yer."
    },
    {
        id: 199,
        oldTurkish: "Sınamasa arsıkar, sakınmasa utsukar",
        modernTurkish: "İnsan tecrübe etmezse aldanır, sakınmazsa yutulur."
    },
    {
        id: 200,
        oldTurkish: "Sögüşüp uruşur, otra ton titişür",
        modernTurkish: "Küfürleşerek kavga ederler, arada elbise yırtılır."
    },
    {
        id: 201,
        oldTurkish: "Sögüt sülinğe, kadhıng kasınga",
        modernTurkish: "Söğüte tazelik, kayın ağacına katılık yakışır."
    },
    {
        id: 202,
        oldTurkish: "Sözge süçünse bulun barır",
        modernTurkish: "Sözün tadına dalan tutsak olur."
    },
    {
        id: 203,
        oldTurkish: "Suw içürmesge süt ber",
        modernTurkish: "Su içirmeyene süt ver."
    },
    {
        id: 204,
        oldTurkish: "Suw körmekinçe etük tartma",
        modernTurkish: "Suyu görmedikçe papuç çıkarma."
    },
    {
        id: 205,
        oldTurkish: "Subuzganda ev bolmas, topurganda ow bolmas",
        modernTurkish: "Eski mezarlıkta ev olmaz, gevşek topraklı yerde av olmaz."
    },
    {
        id: 206,
        oldTurkish: "Sundılaç ışı ermes örtgün tepmek",
        modernTurkish: "Harman dövmek çayır kuşunun işi değildir."
    },
    {
        id: 207,
        oldTurkish: "Süsegen, udhka Tenğri müngüz bermes",
        modernTurkish: "Süsegen öküze Allah boynuz vermez."
    },
    {
        id: 208,
        oldTurkish: "Tawgaç yannığ turkusı telim, tenğlemedhip bıcmas",
        modernTurkish: "Çin hükümetinin ipeği çoktur, fakat denkleştirmeden biçmez."
    },
    {
        id: 209,
        oldTurkish: "Tagığ ukrıkın egmes, Tenğizni kaygıkın bügmes",
        modernTurkish: "Dağ kementle eğilmez, denizin önü kayıkla gerilmez, kesilmez."
    },
    {
        id: 210,
        oldTurkish: "Tağ tağka kavuşmas, kişi kişige kawuşur",
        modernTurkish: "Dağ dağa kavuşmaz, insan insana kavuşur."
    },
    {
        id: 211,
        oldTurkish: "Tamu kapuğın açar tawar",
        modernTurkish: "Cehennemin kapısını mal (rüşvet) açar."
    },
    {
        id: 212,
        oldTurkish: "Tapuğ taş yağar, taş başığ yarar",
        modernTurkish: "Emir taşı yarar, taş başı yarar."
    },
    {
        id: 213,
        oldTurkish: "Taşığ ısrumasa öpmiş kerek",
        modernTurkish: "Taşı ısıramayan öpmeli."
    },
    {
        id: 214,
        oldTurkish: "Tatıg közre tikeniğ tüpre",
        modernTurkish: "Tatın (Farslı) gözüne vur, dikeni kökünden çıkar."
    },
    {
        id: 215,
        oldTurkish: "Tatsız Türk bolmas, başsız börk bolmas",
        modernTurkish: "Tatsız Türk olmaz, başsız börk (serpuş) olmaz."
    },
    {
        id: 216,
        oldTurkish: "Tayak bile taymas, tanuk sözün bütmes",
        modernTurkish: "Dayangaç (baston) ile olan kaymaz, şahit sözü ile inanılmaz."
    },
    {
        id: 217,
        oldTurkish: "Tay atatsa at tınır, ogul eredhse ata tınur",
        modernTurkish: "Tay yetiştiği zaman at, oğul yetiştiği zaman baba dinlenir."
    },
    {
        id: 218,
        oldTurkish: "Taygan yüprügin tilkü sewmes",
        modernTurkish: "Tazının yüğrüğünü (koşucu, hızlı koşan) tilki sevmez."
    },
    {
        id: 219,
        oldTurkish: "Taz at tafarçı bolmas",
        modernTurkish: "Alacalı at yük taşımaz."
    },
    {
        id: 220,
        oldTurkish: "Taz keliği börkcige",
        modernTurkish: "Kelin geleceği yer takkeci dükkanıdır."
    },
    {
        id: 221,
        oldTurkish: "Tewey bedük erse mayakı bedük ermes",
        modernTurkish: "Deve büyük olsa da dışkısı büyük olmaz."
    },
    {
        id: 222,
        oldTurkish: "Tewey münüp koy ara yaşmas",
        modernTurkish: "Deveye binerek koyun arasında saklanılmaz."
    },
    {
        id: 223,
        oldTurkish: "Tewi silkinse eşekke yük çıkar",
        modernTurkish: "Deve silkinse eşeğe yük çıkar."
    },
    {
        id: 224,
        oldTurkish: "Tewi yük götürse kamıç yeme kötürür",
        modernTurkish: "Deve yük götürse kaşığı da beraber götürür. (Büyük yük taşıyan deveye kaşık yük sayılmaz.)"
    },
    {
        id: 225,
        oldTurkish: "Tegirmende togmış sıçgan kök kökreginge korkmas",
        modernTurkish: "Değirmende doğmuş sıçan gök gürlemesinden korkmaz."
    },
    {
        id: 226,
        oldTurkish: "Teğme kişi öz bolmas, yat yaguk tüz bolmas",
        modernTurkish: "Değme kişi kendin gibi olmaz, yat (yabancı) hısımla bir olmaz."
    },
    {
        id: 227,
        oldTurkish: "Telim sözüğ uksa bolmas, yalım kaya yıksa bolmas",
        modernTurkish: "İnsan çok sözü anlayamaz, yalçın kayayı yıkamaz."
    },
    {
        id: 228,
        oldTurkish: "Tenğsizde tegirmen turgursa, yarağsızda yar barır",
        modernTurkish: "Uygun olmayan yerde değirmen yapılırsa, beklenmedik anda yarık oluşur."
    },
    {
        id: 229,
        oldTurkish: "Teşük suwda belgürer",
        modernTurkish: "Yarık suda belli olur."
    },
    {
        id: 230,
        oldTurkish: "Tezek karda yatmas, edhgü ısız katmas",
        modernTurkish: "Tezek karda yatmaz; iyi kötüye karışmaz."
    },
    {
        id: 231,
        oldTurkish: "Tılın tergige tegir",
        modernTurkish: "Dil ile sofraya ulaşılır. (İyi sözle insan nimete erişir)"
    },
    {
        id: 232,
        oldTurkish: "Tılın tuğmişni tışın yazmas",
        modernTurkish: "Dil ile bağlanan dişle çözülmez."
    },
    {
        id: 233,
        oldTurkish: "Tikmegince önmes, tilemegince bulmas",
        modernTurkish: "Ağaç dikmedikçe bitmez, dilekte bulunmayan bulamaz."
    },
    {
        id: 234,
        oldTurkish: "Tilki öz yinige ürse udhuz bolur",
        modernTurkish: "Tilki kendi inine karşı ürürse (havlarsa) uyuz olur."
    },
    {
        id: 235,
        oldTurkish: "Tirig esen bolsa tanğ öküş körür",
        modernTurkish: "Yaşayanın başı esen gitse, şaşılacak çok şey görür."
    },
    {
        id: 236,
        oldTurkish: "Tokum yüzüp kudrukta biçek sıma",
        modernTurkish: "Deriyi yüzdükten sonra bıçağı kuyruğunda kırma."
    },
    {
        id: 237,
        oldTurkish: "Tolum anutsa kulun bulur, tolum unutsa bulun bolur",
        modernTurkish: "Silahını hazırlayan tay da bulur, silahını unutan tutsak olur."
    },
    {
        id: 238,
        oldTurkish: "Toyın tapuğsak, Tenğri sefinçsiz",
        modernTurkish: "Toyın (İslam olmayan Türklerin, Buda dininin, din ulusu) tapmak ister, Tanrı memnun değil."
    },
    {
        id: 239,
        oldTurkish: "Tünle bulıt örtense ewlük urı keldürmişçe bolur, Tanğda bulıt örtense ewga yagı kirmişçe bolur",
        modernTurkish: "Bulut, akşam üstü kızarırsa kadın, erkek çocuk doğurmuş gibi olur; sabahleyin kızarırsa eve düşman girmiş gibi olur."
    },
    {
        id: 240,
        oldTurkish: "Tunle yorup kündğ sewnür kiçikde eflenip ulgadhu sewnnür",
        modernTurkish: "Gece yola çıkan gündüz sevinir, küçükken evlenen yaşlanınca sevinir."
    },
    {
        id: 241,
        oldTurkish: "Tütün kopursa işlenür",
        modernTurkish: "Dumanla oynayan islenir."
    },
    {
        id: 242,
        oldTurkish: "Tütüşmeginçe tüzülmes, tüpirmegince açılmas",
        modernTurkish: "Kavga etmeyince düzen olmaz, tipi olmayınca hava açılmaz."
    },
    {
        id: 243,
        oldTurkish: "Tüzün birle uruş, utun birle tireşme",
        modernTurkish: "Yumuşak başlı insanla uğraş, kötülerle uğraşma."
    },
    {
        id: 244,
        oldTurkish: "Ula bolsa yol azmas, bilig bolsa söz yazmas",
        modernTurkish: "Alamet olsa yol şaşmaz, bilgi olursa söz şaşmaz."
    },
    {
        id: 245,
        oldTurkish: "Ulugnı uluglasa kut bulur",
        modernTurkish: "İhtiyara saygı gösteren uğur ve devlet bulur."
    },
    {
        id: 246,
        oldTurkish: "Uluk yağırı ogulka kalır",
        modernTurkish: "Atın omuz başındaki yara oğula kalır."
    },
    {
        id: 247,
        oldTurkish: "Uma kelse kut kelir",
        modernTurkish: "Konuk gelse uğur gelir."
    },
    {
        id: 248,
        oldTurkish: "Umayka tapınsa ogul bolur",
        modernTurkish: "Kim Umaykaya (çocuk doğduktan sonra ana karnındaki eşi) hizmet ederse çocuk doğar."
    },
    {
        id: 249,
        oldTurkish: "Usukmışa sakığ kamuğ suw körünür",
        modernTurkish: "Susamışa ılgın (serab) su gibi görünür."
    },
    {
        id: 250,
        oldTurkish: "Us üşgürse ölür",
        modernTurkish: "Kerkes kuşu bir adamın yüzüne karşı ıslık çalarsa uğur sayılmaz; bu, ölüme işarettir."
    },
    {
        id: 251,
        oldTurkish: "Uygur yıgaç uzun kes, temür kısga kes",
        modernTurkish: "Ağacı uzun, demiri kısa kes."
    },
    {
        id: 252,
        oldTurkish: "Üri kopsa oguş aklışr, yagı kelse imrem tepreşür",
        modernTurkish: "Bir gürültü kopsa hısım, akraba gelir; bir düşman gelse halk yerinden oynar."
    },
    {
        id: 253,
        oldTurkish: "Yawlak tıllığ begden kerü yalnğus tul yeğ",
        modernTurkish: "Kötü dilli kocadan yalnız dul kadın daha iyidir."
    },
    {
        id: 254,
        oldTurkish: "Yagınğ erse kerek yundakı tegır",
        modernTurkish: "Düşman olsa bile ondan gübresi kalır."
    },
    {
        id: 255,
        oldTurkish: "Yagını aşaklasa başka çıkar",
        modernTurkish: "Düşman aşağı görülürse (küçük görülürse) başa biner (çıkar)."
    },
    {
        id: 256,
        oldTurkish: "Yakadakı yalgagalı elıgdeki ıçgınur",
        modernTurkish: "Yakasındaki yemek döküntülerini yalamakla uğraşan kimse elindekini kaybeder."
    },
    {
        id: 257,
        oldTurkish: "Yalksa yeme yag edhgü, köyse yeme kün edhgü",
        modernTurkish: "Bıksa bile yağ iyi, yaksa bile gün iyidir."
    },
    {
        id: 258,
        oldTurkish: "Yalnğuk menğgü tirilmes, sınka kirüb kirü yenmes",
        modernTurkish: "Kişi ebediyen yaşamaz, mezara giren de geri gelmez."
    },
    {
        id: 259,
        oldTurkish: "Yalnğuk oglı munsuz bolmas",
        modernTurkish: "İnsan oğlu ayıpsız (kusursuz) ve hastalıksız olmaz."
    },
    {
        id: 260,
        oldTurkish: "Yalnğuk oglı yokadhur edhgü atı kalır",
        modernTurkish: "İnsanoğlu ölür, iyi ise adı (namı) kalır."
    },
    {
        id: 261,
        oldTurkish: "Yalnğuk ürülmüş kap ol, ağzı yazılıp alkınur",
        modernTurkish: "Adam oğlu şişirilmiş tulum gibidir, ağzı açıldığında söner."
    },
    {
        id: 262,
        oldTurkish: "Yalnğus kaz ötmes",
        modernTurkish: "Bir tek kaz ötmez."
    },
    {
        id: 263,
        oldTurkish: "Yarın bulgansa el bulganır",
        modernTurkish: "Kürek kemiği karışırsa vilayet de karışır."
    },
    {
        id: 264,
        oldTurkish: "Yaş ot köymes, yalafar ölmes",
        modernTurkish: "Yaş ot yanmaz, elçi öldürülmez."
    },
    {
        id: 265,
        oldTurkish: "Yatnınğ yağlığ tiküsinden öznünğ kanlığ yudhruk yeğ",
        modernTurkish: "Yabancının yağlı lokmasından kendinin kanlı yumruğu yeğdir."
    },
    {
        id: 266,
        oldTurkish: "Yadhağ atı çaruk küçi azuk",
        modernTurkish: "Yaya kimsenin atı çarık, kuvveti azıktır."
    },
    {
        id: 267,
        oldTurkish: "Yazıda börü ulısa ewde ıt bugru tartışur",
        modernTurkish: "Kırda kurt ulusa evde köpeğin bağrı sızlar."
    },
    {
        id: 268,
        oldTurkish: "Yazıdaki süwlin edhergeli evdeki takagu ıçgınma",
        modernTurkish: "Kırdaki sülünü ararken evdeki tavuğu kaçırma."
    },
    {
        id: 269,
        oldTurkish: "Yazın katıglansa kışın sewnur",
        modernTurkish: "Yazın çalışan, uğraşan kışın sevinir."
    },
    {
        id: 270,
        oldTurkish: "Yazmas atım bolmas, yanğılmas bilge bolmas",
        modernTurkish: "Şaşmadık atış olmaz, yanılmadık bilgin olmaz."
    },
    {
        id: 271,
        oldTurkish: "Yazmas atım yağmur, yanğılmas bilge yanğku",
        modernTurkish: "Usta atıcı yağmur, yanılmaz bilgin yankı."
    },
    {
        id: 272,
        oldTurkish: "Yer basrukı tağ, budhun basrukı beg",
        modernTurkish: "Yerin baskısı dağ, halkın baskısı da beydir. (Yere dağ baskı yapar, insanlara da bey.)"
    },
    {
        id: 273,
        oldTurkish: "Yıgaç uçunga yeltegir, körklüg kişige söz kelir",
        modernTurkish: "Ağaç ucuna yel değer, güzele söz gelir."
    },
    {
        id: 274,
        oldTurkish: "Yılan kendü eğrisin bilmes tewi boynun eğri ter",
        modernTurkish: "Yılan kendi eğrisini bilmez, deveye boynun eğri der."
    },
    {
        id: 275,
        oldTurkish: "Yılan yarpuzdan kaçar, kanca barsa yarpuz utru kelur",
        modernTurkish: "Yılan yarpuzdan (yılan yiyen bir hayvan) kaçar, nereye gitse karşısına dikilir."
    },
    {
        id: 276,
        oldTurkish: "Yıparlığ kesürgüdin yıpar kitse yıdhu kalır",
        modernTurkish: "Kaptan (kabından) amber gitse kokusu kalır."
    },
    {
        id: 277,
        oldTurkish: "Yırak yer sawın arkış keldürür",
        modernTurkish: "Uzak yerin haberini kervan getirir."
    },
    {
        id: 278,
        oldTurkish: "Yitükliğ anası koyun açar",
        modernTurkish: "Bir şey yitiren kimse onu anasının koynunda arar."
    },
    {
        id: 279,
        oldTurkish: "Yogurkanda artuk adhak kösilse üşiyür",
        modernTurkish: "Ayak yorgandan fazla uzatılırsa üşür."
    },
    {
        id: 280,
        oldTurkish: "Yunt başın yularlar",
        modernTurkish: "Atın başını boş bırakma."
    },
    {
        id: 281,
        oldTurkish: "Yund kazısı yağ",
        modernTurkish: "En iyi yağ atın karnından çıkan yağdır."
    },
    {
        id: 282,
        oldTurkish: "Yurt küçük bolsa anğut bedük ur",
        modernTurkish: "Delik küçük olsa da tıpayı (yamayı) büyük vur."
    },
    {
        id: 283,
        oldTurkish: "Yüfüşlüğ kelin kedhegü yafaş bulur",
        modernTurkish: "Armağanlı gelin, güveyiyi yumşak huylu bulur. (Gelin zengin olduğu için damat ona saygı gösterir.)"
    }
];

// Generate placeholder proverbs for IDs 6-999
for (let i = 283; i <= 999; i++) {
    proverbs.push({
        id: i,
        oldTurkish: `${i} - (Eski Türkçe)`,
        modernTurkish: `(Modern Türkçe) - ${i}`
    });
}

// Function to get a proverb by ID
function getProverbById(id) {
    return proverbs.find(proverb => proverb.id === id) || {
        id: id,
        oldTurkish: `${id}_ (Eski Türkçe Sav Burada)`,
        modernTurkish: `(Modern Türkçe Sav Burada - ${id})`
    };
}