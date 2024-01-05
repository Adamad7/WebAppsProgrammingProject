$(document).ready(function () {
    //showArticlesPage();
});

$(function () {
    setInterval("slideSwitch()", 4000);
});

function slideSwitch() {
    var $active = $("#slider IMG.active");
    if ($active.length === 0) $active = $("#slider IMG:last");
    var $next = $active.next().length ? $active.next() : $("#slider IMG:first");
    $active.addClass("last-active");
    $next
        .css({ opacity: 0.0 })
        .addClass("active")
        .animate({ opacity: 1.0 }, 1000, function () {
            $active.removeClass("active last-active");
        });
}

function showArticlesPage() {
    var html = "";
    for (let i = 0; i < articles.length; i++) {
        html += `
        <article class="small">
            <img src="${articles[i].images[0]}" alt="article_img_${i + 1}">
            <div class="article_title_and_button">
                <div class="article_title">${articles[i].title}</div>
                <button onclick="showArticle(${i})">Przeczytaj</button>
            </div>
        </article>
        `;
    }
    document.getElementsByTagName("main")[0].innerHTML = `
    <h2>Witaj na naszym blogu!</h2>

        <div id="slider">
            <img src="img/slider_images/slider_1.jpg" alt="image1" class="active" />
            <img src="img/slider_images/slider_2.jpg" alt="image2" />
            <img src="img/slider_images/slider_3.jpg" alt="image3" />
            <img src="img/slider_images/slider_4.jpg" alt="image4" />
            <img src="img/slider_images/slider_5.jpg" alt="image5" />
            <img src="img/slider_images/slider_6.jpg" alt="image6" />
            <img src="img/slider_images/slider_7.jpg" alt="image7" />
        </div>

        <h2 class="short">Artykuły</h2>

        <div id="articles">
            ${html}
        </div>`;
}

function showArticle(articleId) {
    var html = `<article class="full"><h2>${articles[articleId].title}</h2>`;
    var gallery = "";
    for (let i = 0; i < articles[articleId].images.length; i++) {
        gallery += `<a href="${
            articles[articleId].images[i]
        }" target="_blank" data-lightbox="galeria" data-title="Zdjęcie ${
            i + 1
        }">
        <img src="${articles[articleId].images[i]}" alt="img_${i}"></a>`;
    }
    html += articles[articleId].text;
    html += "</article>";
    html += '<h2 class="short">Gelera</h2>';
    html += '<div id="gallery">';
    html += gallery;
    html += "</div>";
    html +=
        '<button id="go_back" onclick="showArticlesPage()"><i class="fa-solid fa-chevron-left fa-fade"></i>   Wróć</button>';
    document.getElementsByTagName("main")[0].innerHTML = html;
}

const articles = [
    {
        title: "Oman – wędkarski raj – wspomnienia – sezon 2018",
        images: [
            "img/article_1/intext_1.jpg",
            "img/article_1/intext_2.jpg",
            "img/article_1/intext_3.jpg",
            "img/article_1/intext_4.jpg",
            "img/article_1/intext_5.jpg",
            "img/article_1/intext_6.jpg",
            "img/article_1/intext_7.jpg",
            "img/article_1/intext_8.jpg",
            "img/article_1/intext_9.jpg",
            "img/article_1/intext_10.jpg",
            "img/article_1/intext_11.jpg",
            "img/article_1/intext_12.jpg",
            "img/article_1/gallery_1.jpg",
            "img/article_1/gallery_2.jpg",
            "img/article_1/gallery_3.jpg",
            "img/article_1/gallery_4.jpg",
            "img/article_1/gallery_5.jpg",
            "img/article_1/gallery_6.jpg",
            "img/article_1/gallery_7.jpg",
            "img/article_1/gallery_8.jpg",
            "img/article_1/gallery_9.jpg",
            "img/article_1/gallery_10.jpg",
        ],
        text: `
Na styczniowy wyjazd wędkarski do Omanu czekaliśmy z wielką niecierpliwością.
Organizacją tego wyjazdu zająłem się na długo przed terminem.
Chciałem, aby wszystko było zapięte na ostatni guzik, co w moim przypadku jest podstawą podczas przygotowywania każdej wyprawy wędkarskiej.
Szczególnie takiej, gdzie jedzie się daleko od domu.
Około pół roku przed terminem wszystko było już z góry zaplanowane i ustalone.
Nasza ekipa liczyła 10 osób z różnym doświadczeniem wędkarskim i w bardzo różnym wieku.
W grupie było kilka osób, które były już na podobnych wyprawach wędkarskich w egzotyczne miejsca.

<img src="img/article_1/intext_1.jpg" alt="intext_1">

Pozostało już tylko kilka miesięcy na przygotowanie sprzętowe do wyprawy.
Wymagania były dość duże, ponieważ zaplanowaliśmy wyprawę na łowiska, które słyną z największych okazów GT (Giant Trevally) na Świecie.
Oman jest mekką łowców tego gatunku, którzy przyjeżdżają tam z wielu miejsc naszego globu.
Częstymi gośćmi są Amerykanie, a nawet Japończycy.
Oman jest miejscem, w którym GT ma bardzo dobre warunki do rozwoju, a w szczególności do rozrodu.
Małe GT, które rodzą się w Omanie, rozpływają się po całym Świecie.
Są praktycznie w wielu miejscach oceanu Indyjskiego oraz Pacyfiku.
Po latach często wracają na swoje rodzime terytorium do Omanu, aby dorosnąć do ogromnych rozmiarów.
Albowiem ryby powyżej 40 kg nie są tu rzadkością i są regularnie łowione.
Ale także ogromne okazy tego gatunku, które przekraczają wagę powyżej 50 kg, a nawet 60 kg!
W miejscu, do którego jedziemy są takie okazy i przy odrobinie szczęścia można z nimi stoczyć walkę życia na ciężkim zestawie do łowienia wielkimi popperami.
Jednak w Omanie nie łowi się wyłącznie GT, ale także wiele innych gatunków ryb, które są ciekawe do łowienia.
Przede wszystkim są to gatunki bardzo silne i ogromnie waleczne.
Możemy tu złowić wspaniałe Giant Queen, różne gatunki tuńczyków, np. wielkie tuńczyki żółtopłetwe lub dużo mniejsze tuńczyki długopłetwe.
Jest wiele gatunków ryb z rodziny karanksowatych, do których także należy GT.
W Omanie nie brakuje dużych ilości Amber Jack (Seriola Olbrzymia).
Ryb, które słyną ze swojej ogromnej siły i waleczności.
Można je złowić głównie w okresie wrzesień-październik.
Na skraju raf możemy liczyć na piękne brania dużych Bream, które zażarcie atakują nieduże poppery lub małe stickbaity.
W Omanie łowi się także inne gatunki ryb, jak chociażby wspaniale ubarwione Mahi Mahi, a także Grunter, Wahoo, Bonito, Sada Sada, graniki, snapery, żaglice, barrakudy, czy nawet rekiny.
Ryby w Omanie łowi się głównie w strefie przybrzeżnej do około 10 km od brzegu, na rafach oraz daleko od brzegu, na oceanicznych wyspach.
Zazwyczaj przy wyspach są najlepsze łowiska i tam można liczyć na największe okazy.

<img src="img/article_1/intext_2.jpg" alt="intext_2">

Wraz z moim bratem Mateuszem, przygotowaliśmy na ten wyjazd po 3 różne zestawy.
Jeden bardzo mocny w skali 10 PE, głównie do łowienia dużymi popperami (130-180 gramów) oraz dużymi stickbaitami o podobnej wadze.
Ten zestaw jest praktycznie wyłącznie do łowienia z nastawieniem na Giant Trevally.
Drugi zestaw do łowienia w pionie, głównie techniką „speed jigging”To bardzo ciekawa i skuteczna technika do łowienia ryb, które żerują w toni i przemieszczają się stadamiAle nie tylko, ponieważ tą techniką można wywabić z rafy dużego granika, czy snaperaDużą atrakcją tej techniki łowienia są wspaniałe brania. W tej technice przynęta jest prowadzona bardzo szybko i można sobie wyobrazić, jakie następuje branie, kiedy naszą przynętę atakuje duża i bardzo szybka ryba! Ostatni zestaw to „lekki” spinning w skali 4-5 PE, którym będziemy łowili głównie na rafach i na ich obrzeżach za pomocą niedużych popperów, woblerów lub stickbaitów w wielkościach 10-15 cm. Do każdego z zestawów przygotowaliśmy specjalistyczne kołowrotki Okuma Azores Blue, całkowicie odporne na działanie soli morskiej. To bardzo ważne podczas łowienia na egzotycznych morzach, czy oceanach. Kołowrotek musi być odporny na sól. Wówczas jest niezawodny i nie przestanie działać w najmniej oczekiwanym momencie. Do każdego zestawu przygotowaliśmy także specjalne przypony, które zrobiliśmy własnoręcznie z najnowszego materiału przyponowego Regenerator. W naszych pudłach znalazło się oczywiście wiele przynęt, od zwykłych gum, po specjalistyczne wielkie poppery do powierzchniowego łowienia GT. Co najważniejsze, każda z przynęt została uzbrojona w super mocne kotwice oraz super mocne kółka łącznikowe. To podstawa łowienia dużych ryb oceanicznych!

<img src="img/article_1/intext_3.jpg" alt="intext_3">

W końcu nadszedł czasu wyjazdu.
Z naszą ekipą spotkaliśmy się już na lotnisku w Salalah w Omanie, ponieważ część osób poleciała przez Dubaj, a my przez Katar.
Na lotnisku odebrała nas ekipa z Omanu, z którą wspólnie zorganizowaliśmy tę wyprawę.
Po przejechaniu około 400 km od Salalah, dojechaliśmy do małej wioski rybackiej, w której jest nasza baza.
Oczywiście od razu zajęliśmy się przygotowaniem sprzętu, tak aby następnego dnia wypłynąć jak najwcześniej na łowisko.

<img src="img/article_1/intext_4.jpg" alt="intext_4">

Pierwszy dzień, to dzień rekonesansu, kiedy wszyscy będą wczuwali się w łowienie, poznawali nowe łowisko i testowali różne techniki łowienia.
Od razu płyniemy na najlepsze łowisko, które jest oddalone bardzo daleko od brzegu.
Płyniemy na słynne wyspy oceaniczne, gdzie będziemy mieli szansę złowienia największych Giant Trevally.
Po ponad godzinie płynięcia dwoma łodziami z 400 konnymi silnikami, dopływamy do wielkich wysp, które otaczają ogromne rafy z bardzo zróżnicowaną głębokością od 0,5 do 25 metrów.
Łowiska są wspaniałe, a wodna bardzo przejrzysta w niebiesko-zielonym zabarwieniu.
Tego dnia łowimy głównie na poppery, jerki i stickbaity.
Udaje nam się złowić różne gatunki ryb, ale największą atrakcją są Mahi Mahi (Koryfena), które łowimy „na wypatrzonego” na płytkich rafach.
W niektórych momentach holujemy po 2-3 ryby na raz.
Euforia i zabawa jest niesamowita.
Ryby walczą zaciekle i co chwila oglądamy wspaniałe wyskoki ponad wodę.

<img src="img/article_1/intext_5.jpg" alt="intext_5">

Niestety wieczorem w bazie, okazuje się, że pogoda nieco zmieni nasze plany na najbliższe dni łowienia.
Idzie duży wiatr, który całkowicie uniemożliwi wypłynięcia na oddalone łowiska i do najlepszych wysp.
Prognoza pokazuje wiatr na najbliższe dni, więc musimy wykorzystać ten czas na łowienie w tzw. strefie przybrzeżnej.
W pierwszym dniu wiatru, łowimy wyłącznie blisko brzegów zasłoniętych bardzo wysokimi skałami.
Tam mamy możliwość schronienia się przed bardzo dużym wiatrem.
Przynęty prowadzimy przy skałach oraz na przybrzeżnych rafach.
Udaje nam się złowić różne gatunki ryb.
Blisko raf i skał wychodzą do naszych przynęt piękne i bardzo waleczne Bream’y, które stanowią wielką atrakcję wędkarstwa w Omanie.
Łowi się je głównie na powierzchniowe przynęty, nieduże stickbaity oraz poppery.
Brania Breamów są niesamowite i bardzo mocne. Ryby są waleczne i silne.
Piękne zwieńczenie dnia. Kolejny dzień mija podobne, na łowieniu blisko brzegu i wyłącznie przy wysokich brzegach.
Łowimy różne gatunki ryb, w tym Bonito, Sada Sada, czy nieduże tuńczyki.
Mamy także okazję zobaczyć wielkiego Giant Trevally, który na naszych oczach wspaniale i z impetem atakował mniejsze ryby przy samej powierzchni wody.
Wielka ryba z ogromną prędkością przemieszczająca się po łowisku, to niesamowity widok, którego nie zapomnimy na długo!
Wielki GT w końcu zaatakował jednego z naszych popperów, ale niestety jego siła nie pozwoliła na szybkie zatrzymanie ryby w trakcie holu.
Po krótkim czasie GT „wbił się” w rafę i przetarł o nią bardzo mocny przypon z fluorocarbonu 1,2 mm.

<img src="img/article_1/intext_6.jpg" alt="intext_6">

Następne 4 dni przyjdą na zawsze do naszej pamięci.
Niespotykana ilość brań i niesamowita ilość ryb, które wyholowaliśmy, przeszła naszej najśmielsze oczekiwania.
Nikt z nas nie spodziewał się tylu brań, tylu wspaniałych holi i tylu okazów ryb, które udało nam się złowić!
Niesamowite 4 dni, które mam cały czas przed oczami i nie mogę o nich zapomnieć.
Wiatr nie ustawał, ale nie był aż tak duży, więc mogliśmy łowić w całej strefie przybrzeżnej do około 10 km od brzegu.
W łowisko weszły stada drapieżników, które przyszły w strefę przybrzeżną w poszukiwaniu ogromnych stad sardeli.
Przez 4 dni byliśmy w euforii brań i myślę, że każdy z nas poczuł coś wspaniałego i nieoczekiwanego.
Tego nie da się opisać własnymi słowami, ale spróbuję przybliżyć Wam chociaż kilka chwil…
Dryfując na jednej z raf trafiamy piękne stado Giant Queen i wszystkim nam na łodzi, udaje się złowić tę wspaniałą rybę w jednym momencie.
I to na powierzchniowe poppery!
Możecie sobie wyobrazić brania i hole 5 bardzo silnych ryb na raz, które potrafią wyskakiwać na kilka metrów nad wodę…
To jest coś nie do opisania.
To trzeba przeżyć! Na innym dryfie, napływamy na ogromne stada drapieżników, które atakują od dołu duże stado sardeli.
Łowimy ogromną ilość silnych ryb różnych gatunków, z czego prym wiodą Giant Queen, Spotted Grunter, Red Snapper i inne.
Mamy wiele sytuacji, kiedy holujemy po 3-4 ryby na raz.
Nie oszukam Was, jak powiem, że w najlepszych godzinach łowimy po 30-40 ryb na łódź!
Masa akcji, ogromna ilość brań i wspaniałe hole. To po to tutaj przyjechaliśmy!

<img src="img/article_1/intext_7.jpg" alt="intext_7">
<img src="img/article_1/intext_8.jpg" alt="intext_8">
<img src="img/article_1/intext_9.jpg" alt="intext_9">





Przychodzi dobra informacja.
Wiatr ustaje i przez kolejne dwa dni będziemy łowili na najlepszych miejscówkach.
Płyniemy na odległe wyspy. Ustanawiamy jeden cel – duży GT! Bez niego nie możemy wrócić do Polski.
Pogoda nam sprzyja i w końcu dopływamy do łowiska.
W ruch idą wyłącznie najmocniejsze zestawy 10-12 PE, wielkie kołowrotki i wytrzymałe linki.
Rzucamy wyłącznie dużymi popperami i stickbaitami.
Czeka nas bardzo ciężkie łowienie, ale liczymy na branie jednej wielkiej ryby.
Dopływamy do dużej rafy ze zmienną głębokością od około 5 do 25 metrów.
Przychodzi moment, który mam przed oczami, jakby było to dosłownie przed chwilą!
Łowię koło Sławka. Mam założonego dużego poppera, a Sławek jeszcze większego, którego dostał od naszego przewodnika.
Prowadzimy przynęty dość blisko siebie, więc doskonale widzę swojego poppera i Sławka.
Nagle następuje potężne branie i ogromny wir na wodzie.
Sławek zacina i jest… Potężny odjazd ryby na kilkadziesiąt metrów i od razu wiemy, co zaatakowało przynętę.
Wielki GT! Robimy szybki zwrot łodzią, abyśmy mogli szybciej przejąć kontrolę nad rybą.
Oczywiście jeżeli w ogóle można kontrolować wielką rybę, z tak potężną siłą i prędkością…
Sławek ma odpowiedni zestaw.
Kij 12 PE, kołowrotek 10000 oraz plecionkę 70 kg wytrzymałości.
Jednak w pierwszej fazie holu, to ryba rządzi i ona wyznacza co będzie dalej.
Pomagamy Sławkowi i udaje nam się zwolnić rybę tuż przed ostrą jak brzytwa rafą.
Ta faza jest wygrana, dlatego mamy coraz większe nadzieję, że zobaczymy tego giganta.
Hol jest niesamowity, odjazdy na duże odległości. Widać, że ryba jest potwornie silna i szybka.
Na szczęście powoli zaczyna zwalniać i słabnąć. Wykorzystujemy to i podciągamy rybę do łodzi.
Przewodnik i ja łapiemy rybę i szybko wciągamy ją na pokład.
Okrzyk radości! Jest! Sławek jest roztrzęsiony, cała ekipa w euforii.
Szybko robimy sesję zdjęciową. Dokładnie mierzymy i warzymy rybę.
Giant Trevally ma aż 42 kg! Wspaniały okaz! Razem z przewodnikiem znakujemy rybę specjalnym znacznikiem i wypuszczamy ją do jej królestwa.
Spełniło się nasze marzenie! Każdemu z nas udzieliła się ogromna radość i szczęście. Jesteśmy spełnieni!

<img src="img/article_1/intext_10.jpg" alt="intext_10">


Kolejnego dnia Tadzio ustanawia rekord naszej bazy w gatunku tuńczyka długopłetwego (Long Tale Tuna), łowiąc okaz powyżej 30 kg!
Łowimy wiele ryb różnych gatunków. Klimat, piękna pogoda i spokój jaki panuje w Omanie działa na wszystkie zmysły i tak powoli kończy się nasza przygoda z Omanem…

<img src="img/article_1/intext_11.jpg" alt="intext_11">


Przez wiele lat trzymałem się zasady, aby nie brać udziału w wyprawach na egzotyczne łowiska.
Bałem się jednego, że po takiej wyprawie będę chciał tam wracać już zawsze.
I tak się stało! Wsiąkłem w wędkarstwo egzotyczne! Tęsknię za Omanem i już czekam na kolejną wyprawę!
<img src="img/article_1/intext_12.jpg" alt="intext_12">

`,
    },
    {
        title: "Szkiery Blekinge – u wrót szczupakowego królestwa",
        images: [
            "img/article_2/intext_1.jpg",
            "img/article_2/intext_2.jpg",
            "img/article_2/intext_3.jpg",
            "img/article_2/intext_4.jpg",
            "img/article_2/intext_5.jpg",
            "img/article_2/intext_6.jpg",
        ],
        text: `
    Królestwo szczupaków – taki właśnie epitet przewija się w rozmowach najczęściej, kiedy mówi się o rejonie archipelagu Blekinge. Południowe wybrzeże Szwecji od lat słynie z ogromnej populacji cętkowanych drapieżników, co sprawia, że co roku wędkarscy turyści podróżują w te rejony w nadziei na spotkanie z rybą życia… Szkiery w tym rejonie odwiedzam nie pierwszy raz, jednak tym razem czekało mnie znacznie bardziej odpowiedzialne zadanie, bowiem wyjeżdżałem w charakterze przewodnika naszej grupy.

Pogoda, jaka przywitała nas w dniu przyjazdu do Karlskrony była iście jesienna – wiatr, rzęsisty deszcz i temperatura sięgająca zaledwie 10 stopni Celsjusza. Czy może być lepiej? Niestety, nasze szczęście nie trwało zbyt długo, bowiem w ciągu zaledwie kilku godzin zaszła diametralna zmiana – niebo przybrało czysty, błękitny kolor, zaś wiatr zupełnie się uspokoił. Takie warunki nie wróżą niczego dobrego! Wszyscy bowiem wiemy, co się dzieje, gdy dojdzie do tak gwałtownej zmiany, jeśli jeszcze dodamy do tego zupełną flautę, mamy gotowy przepis na niemal pewną katastrofę. Nie poddaliśmy się jednak – szybko rozlokowaliśmy się w domkach, zjedliśmy obiad i ruszyliśmy do boju! Zaczęliśmy łowić tuż przy naszej bazie, w miejscu w którym w zeszłym tygodniu złowiono 116-tkę, a także 5 spośród 10 największych szczupaków w tym sezonie. Niestety, ryby były nieubłagane. Przez pierwsze 2 godziny łowienia widzieliśmy zaledwie kilka szczupaków długości 70-80 cm odprowadzających nasze przynęty, aż do samej łodzi. Przełom nastąpił, gdy napłynąłem w bardzo płytką zatokę, do której uchodziła jedna z okolicznych rzek. Pierwszych kilka rzutów i… Piotr zapina prawdziwą mamuśkę! Szczęście nie trwa jednak długo, ryba rzuca kilka razy potężnym łbem i wypluwa jerka, którego jeszcze kilka sekund temu miała w pysku. Inna spora ryba wychodzi do przynęty jeszcze dwa razy, niestety tym razem nie jest na tyle zaciekawiona, by zaatakować woblera. Przed zachodem słońca, zmieniam miejscówkę na moją „bankówkę”. Nie mija 5 minut i Radek zapina całkiem przyzwoitego (jak na panujące warunki) szczupaka. Ryba jest wyjątkowo silna – kilkakrotnie odjeżdża, uparcie uciekając w stronę dna. W końcu, gdy wydaje się być zmęczona, próbuję ją podebrać, jednak ona nie daje za wygraną. Ostatkiem sił ryba stawia świecę, po której już zupełnie się uspokaja. Szybkie mierzenie – okazuje się, że esox ma równo 80 centymetrów. Sesja fotograficzna i ryba wraca z powrotem do wody. Tym miłym akcentem zakończyliśmy pierwszy dzień łowienia.

<img src="img/article_2/intext_1.jpg" alt="intext_1">

W poniedziałek rano nadzieja na wielkie ryby z Blekinge znów w nas ożyła. Na niebie pojawiły się delikatne chmury, zaś wiatr nieznacznie marszczył taflę wody. Dosyć szybko złowiliśmy po kilka średniaków, jednak brania ryb zupełnie ustały w momencie, gdy się rozpogodziło. Jako że pogoda była typowo wypoczynkowa, a ryby nie wykazywały się zbytnią chęcią współpracy, dobiliśmy na brzeg, by chwilę odpocząć i zjeść coś ciepłego. Gdy już podładowaliśmy akumulatory, z powrotem zabraliśmy się za łowienie. Do późnego popołudnia zanotowaliśmy kilka niewielkich ryb i pojedyncze, nieśmiałe brania. Ostre słońce i wysoka temperatura nie wpłynęły korzystnie na żerowanie ryb. Podejrzewając, że tego dnia nie zwojujemy już zbyt wiele, postanowiłem, że spróbujemy poszukać okoni w okolicy stromego stoku tuż przy naszej bazie. W ciągu pierwszych kilku rzutów raz po raz czułem delikatne podskubywanie niewielkiego rippera… W następnym rzucie delikatnym sprzętem, czuję tępy opór i jestem niemal pewien, że zahaczyłem o podwodny kabel. Dopiero po kilku sekundach „kabel” ożywa i zaczyna desperacką walkę. Ryba, jak przystało na szczupaki z Blekinge, jest wyjątkowo silna. Za wszelką cenę stara się wysnuć kolejne metry plecionki ze szpuli delikatnego multiplikatora i uciec pomiędzy nabrzeżne głazy. W końcu, szczupak daje za wygraną i ląduje na pokładzie naszej łodzi. Miarka wskazuje 99 cm. Po krótkiej sesji fotograficznej, ryba odpływa, ochlapując mnie przy tym całego.

<img src="img/article_2/intext_2.jpg" alt="intext_2">

Kolejne dni przyniosły wręcz wymarzoną pogodę – wiał dość silny wiatr, zaś niebo naznaczone było pojedynczymi chmurami. Czy można prosić o więcej, będąc na szczupakach? Z dnia na dzień Blekinge coraz bardziej pokazywało pazury. Szczupaki brały praktycznie w każdym miejscu, na które napłynęliśmy i co najważniejsze – nie wybrzydzały! Atakowały jerki, wahadłówki, obrotówki, duże i małe gumy. Dość powiedzieć, że najlepsza spośród miejscówek obdarzyła trójkę uczestników wyprawy przeszło 20 szczupakami w niespełna godzinę! Do szczęścia brakowało nam jedynie ryby, której długość przekroczyłaby magiczne 100 cm…

<img src="img/article_2/intext_3.jpg" alt="intext_3">

W środę po południu Piotr jak zwykle przekomarzał się z Radkiem i rzucił żartobliwie: „obyś tak do końca wyjazdu nic już nie złowił!”. Radek zaśmiał się i wykonał rzut. To, co zdarzyło się później, będziemy wszyscy długo wspominać! Kij wygina się w pałąk, kołowrotek jęczy, powoli poddając się sile ryby i oddaje kolejne metry plecionki. Radek stwierdza, że tym razem ryba jest naprawdę konkretna. Ryba walczy wykonując długie, majestatyczne odjazdy typowe dla „mamusiek”. Walka się przeciąga, jednak w końcu szczupak zaczyna słabnąć i daje za wygraną. Przykładamy esoxa do miarki i okazuje się, że mierzy dokładnie 102 centymetry! Jest po prostu piękny – delikatny złoty odcień łusek, masywny, gruby kark… Podobnie jak poprzednio, zaraz po sesji, ryba zostaje ostrożnie wypuszczona.

<img src="img/article_2/intext_4.jpg" alt="intext_4">

Lepsza sytuacja miała miejsce na łodzi Jacka, który podczas wieczornych opowieści powiedział, że w czwartek złowili „dwa i pół metra ryby” w jednym rzucie! Jak to możliwe? Cała trójka łowiła na jednej łodzi i zadziałało prawo serii, niemal w tym samym momencie zanotowali brania! Jacek najszybciej wyholował swoją 60 cm rybę. Po nieco dłuższej chwili także Rafał podebrał swojego szczupaka – ryba mierzyła 92 centymetry, jednak została niemal natychmiast wypuszczona, nie doczekawszy się sesji zdjęciowej. Dlaczego tak się stało? Wiatr był na tyle silny, że w ekspresowym tempie pchał łódź w stronę przybrzeżnej kamiennej rafy, a kapitan właśnie walczył z największym spośród złowionych dotychczas szczupaków. Jacek i Rafał zarządzili małą roszadę i łódź zaczęła powoli oddalać się od brzegu. W końcu nastąpiła chwila słodkiego triumfu. Po kilku minutach zmagań, ryba znalazła się w „objęciach” Michała. Szczupak mierzył 104 centymetry i stał się jednocześnie nową „życiówką” Michała!

<img src="img/article_2/intext_5.jpg" alt="intext_5">

Do końca wyjazdu złowiliśmy jeszcze wiele szczupaków, jednak większość stanowiły „średniaki” długości 70-80 cm. Bilans zamknęliśmy z przeszło 500 rybami, wśród których było kilka sztuk, o długości przekraczającej 90 cm (niestety nie wyczerpaliśmy wszystkich liczb z zakresu 90-99) i ponad 30 szczupaków pomiędzy 80 a 89 cm.

<img src="img/article_2/intext_6.jpg" alt="intext_6">

Szkiery w Blekinge to łowisko absolutnie wyjątkowe w skali całego szwedzkiego wybrzeża. Co sprawia, że łowisko to jest aż tak wyjątkowe? Po pierwsze, liczna populacja szczupaków! Najczęściej łowi się ryby długości 70-80 cm, jednak ponadmetrowe esoxy to tutaj niemal codzienność. Warto pamiętać, że nie liczy się tylko wielkość ryby, lecz także jej uroda, a tej szczupakom z Blekinge akurat nie brakuje! Tutejsze szczupaki mają rzadko spotykany złocisty koloryt, który idzie w parze z niezbyt smukłą sylwetką… Pomimo że cały rejon kojarzony jest głównie z tymi właśnie rybami, nie sposób nie wspomnieć o okoniach! Garbusy nie są aż tak liczne jak szczupaki, jednak rekompensują ten fakt imponującymi gabarytami. W dobre dni rzadko łowi się ryby mniejsze niż 40 centymetrów, a średnia ilość okoni idzie w dziesiątki… Szkiery w południowej Szwecji różnią się nieco od wybrzeża spotykanego w środkowej części kraju. Na krajobraz archipelagu składają się zarówno pojedyncze nagie skały, jak i niezbyt duże, niemal pozbawione roślinności kamienne wysepki. Z kolei, decydując się na łowienie w okolicy dużych miast, jak np. Karlskrona, nie tylko mamy szansę na wspaniały wędkarski wypoczynek, lecz także na otarcie się o absolutnie szczególne miejsca będące świadkami burzliwej historii Szwecji ciągnącej się od epoki Wikingów, aż do chwili obecnej. Ostatnią rzeczą, o której warto wspomnieć, mówiąc o Blekinge jest charakterystyka łowiska. Szkier można w zasadzie podzielić na dwie części – zatokową i tę graniczącą z otwartym morzem. Wybierając ten pierwszy rodzaj łowiska, zobaczymy znajomy krajobraz – wynurzające się łodygi podwodnej roślinności i brzeg porośnięty gęstymi i szerokimi trzcinowiskami. To właśnie tutaj wczesną wiosną i późną jesienią łowione są największe szczupaki! Zgoła odmienna jest charakterystyka łowisk graniczących z otwartym morzem. Najczęściej obławia się skraj kamiennych raf, bądź też brzegi większych wysp. Od zatok, miejscówki te odróżnia przede wszystkim wielkość łowionych ryb – niestety, są to na ogół średniaki. Warto dodać, że tzw. „kamienne szczupaki” to prawdziwi strongmani, nawet niewielkie ryby, mierzące 70-80 centymetrów, potrafią dać ostro popalić, niejednokrotnie przebijając zatokowe „metrówki”…

Michał Szewczuk, 11.2015
    `,
    },
    {
        title: "Syn, Tata i ryby…",
        images: [
            "img/article_3/intext_1.jpg",
            "img/article_3/intext_2.jpg",
            "img/article_3/intext_3.jpg",
            "img/article_3/intext_4.jpg",
            "img/article_3/intext_5.jpg",
        ],
        text: `
        Chyba do końca życia nie zapomnę pierwszej ryby, którą złowiłem w wieku 6-7 lat. Pierwsza płotka, którą złowiłem na spławikówkę mojego taty. Wędkę dostałem tylko do potrzymania w rękach. Spławik szybko zatonął. Tata powiedział głośno „Pociągnij do góry”. Ja to zrobiłem i na końcu zestawu zaczęła walczyć niewielka rybka. To była moja pierwsza, niezapomniana! Później przyszedł czas na łowienie większych ryb, pierwszych drapieżników. Dostałem od taty swój pierwszy spinning i kołowrotek. Tata nawinął mi grubą żyłkę, na końcu zawiązał przypon i dał mi w prezencie kilka przynęt. Oj jaki byłem z tego dumny! Miałem swój spinning i 4 różne metalowe przynęty – trzy wahadłówki i jedną wirówkę. Nadszedł wolny weekend i tata zabrał mnie nad Narew w okolicach Pułtuska. Tam pojechaliśmy nad rozlewiska Narwi. Tata z kolegą, rozstawili się ze spławikówkami, a ja wziąłem swój spinning i poszedłem łowić dosłownie kilkadziesiąt metrów dalej. Po niedługim czasie, mam branie, potężne, nie do opisania. Ryba walczy zaciekle i w zasadzie zaczyna wciągać mnie do wody… Jest ogromna! Wołam w niebogłosy „Tato szybko. Mam wielką rybę”. Tata przyszedł do mnie z podbierakiem i jak ryba była już blisko brzegu, podebrał ją. Jest! Mam ją! Jest wielka! Emocje sięgnęły zenitu! Jestem zachwycony! Tak zaczęła się moja przygoda z wędkarstwem. Wsiąkłem w nią na dobre. Teraz jak sobie o tym pomyślę, to trochę śmiać mi się chce. Szczupak, którego złowiłem miał pewnie z 50 cm, ale wtedy wydawał mi się ogromny, silny i groźny… Hehehe. Jednak do końca życia nie zapomnę tej chwili. Moje wspomnienia przywołują tę chwilę. Ogromne emocje i pewnie wielka adrenalina, której kiedyś nie byłem w stanie określić.
        <img src="img/article_3/intext_1.jpg" alt="intext_1">
W moim dzisiejszym wędkarstwie, a jest to moja największa życiowa pasja, takie chwile euforii przychodzą już tylko wtedy, kiedy uda mi się złowić naprawdę konkretny okaz. I nie przesadzam. Złowiłem już wiele ryb w swoim życiu i każda złowiona ryba sprawia mi dużą satysfakcję. Jednak prawdziwa adrenalina leje się ze mnie tylko podczas holu wielkich, rekordowych ryb. I to nie ważne, czy jest to rekordowy pstrąg, szczupak, czy sum. Ryba musi dać mi popalić, abym poczuł to, co czułem jak złowiłem tego swojego pierwszego „wielkiego” szczupaka. Pasja wędkarska jest ze mną od dziecka. Zawdzięczam to mojemu tacie! To on od małego zabierał mnie na Mazury, nad Wisłę, czy Narew. To pod jego okiem złowiłem swoje pierwsze ryby…

W dzisiejszych czasach, wielu z nas ma bardzo ograniczony czasu. Ojcowie często wracają późno do domu, niektórzy nie mają wolnych weekendów. Wielu tatusiów chciałoby spróbować się w wędkarstwie, ale po prostu brakuje im czasu na zaangażowanie się w temat od początku. A co tu dopiero mówić o zabraniu syna na ryby, skoro sami nie mamy na to czasu wystarczająco, aby wgryźć się w temat. Wędkarstwo wbrew pozorom, tak naprawdę nie jest takie proste i wymaga od nas wielu godzin poświęconego czasu. Aby „ogarnąć” te wszystkie metody, przynęty, zanęty, spławiki, kołowrotki i wędki… W dzisiejszych czasach, gdzie mamy ogromny wybór sprzętu, gdzie jest wiele technik połowu, czy metod łowienia, tym bardziej staje się to skomplikowane dla kogoś kto chciałby spróbować od zera i to jeszcze z własnym dzieckiem. Natłok informacji, wielki wybór sprzętowy, tak naprawdę nie ułatwia zadania. A wręcz je komplikuje… Dlatego też, warto rozpocząć swoją przygodę z wędkarstwem i zabrać swojego syna na wyprawę wędkarską, czy szkolenie wędkarskie, zorganizowane przez doświadczonych pasjonatów tego hobby. Pod okiem profesjonalistów, spróbować postawić swoje pierwsze kroki w wędkarstwie. Przyswoić w krótkim czasie ogromną wiedzę, którą tak naprawdę trzeba zdobywać latami! Spróbować odnaleźć się w tym wszystkim i wraz z synem spróbować złowić swoją pierwszą rybę, pod opieką przewodnika wędkarskiego. Taka wyprawa wraz z profesjonalistą jest świetnym rozwiązaniem, szczególnie dla ojców, którzy na co dzień nie mają dużo czasu, a chcą wraz ze swoim synem spędzić miłe chwile na łonie natury, odpoczywając i łowiąc ryby.

<img src="img/article_3/intext_2.jpg" alt="intext_2">

Od 9 lat jestem przewodnikiem wędkarskim. Swoją pasję, połączyłem z pracą. Bardzo chętnie dzielę się swoją zdobytą wiedzą, wraz z moimi Klientami, których goszczę na wspólnych wyprawach. Przez te wszystkie lata spotkałem się z wieloma ludźmi, w tym z ojcami i ich synami, którzy dzięki naszej pomocy, realizują swoje hobby, czyli wędkarstwo. Sami nie mają czasu na rozgryzanie wielu niuansów związanych z wędkarstwem, nie mają czasu na kupowanie sprzętu, a zależy im, aby po prostu spędzić swój czas z synem, łowiąc ryby w dobrym towarzystwie. Za nami wiele udanych wypraw, wielu zadowolonych ojców, patrzących na szczęście swoich dzieci! Wiele udanych holi dużych ryb i wiele miłych chwil spędzonych z dziką naturą w tle… Czego chcieć więcej, jak widok uśmiechniętego ojca, wraz ze szczęśliwym synem, wypuszczających wielką rybę z powrotem do wody…

<img src="img/article_3/intext_3.jpg" alt="intext_3">

Zapraszam na wyprawy wędkarskie, gdzie ojciec wraz z synem może realizować swoje hobby, pod opieką profesjonalnych przewodników – www.przewodnicywedkarscy.pl. Wyprawy organizujemy zarówno w Polsce, jak i w Europie oraz w różnych miejscach na Świecie.

<img src="img/article_3/intext_4.jpg" alt="intext_4">

Tych ojców, którzy jeszcze nie zaczęli swojej przygody wędkarskiej lub chcą podszlifować swoją wiedzę pod okiem profesjonalnych instruktorów, zapraszam do jedynej w Polsce szkoły wędkarskiej – www.naukawedkowania.pl. Tutaj wraz ze swoimi dziećmi, możecie nauczyć się podstaw łowienia różnymi technikami i metodami oraz rozwinąć swoje wcześniej zdobyte doświadczenia.

<img src="img/article_3/intext_5.jpg" alt="intext_5">

Zapraszam na wspólne wyprawy!

Sebastian „rognis_oko” Kalkowski, 07.2016`,
    },
];
