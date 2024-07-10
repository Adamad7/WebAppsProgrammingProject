-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sty 10, 2024 at 12:26 AM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sklep_wedkarski`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `blog_posts`
--

CREATE TABLE `blog_posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `cover_img` varchar(255) DEFAULT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_posts`
--

INSERT INTO `blog_posts` (`id`, `created_at`, `updated_at`, `title`, `cover_img`, `content`) VALUES
(1, '2024-01-08 21:55:14', '2024-01-08 21:55:14', 'Oman – wędkarski raj – wspomnienia – sezon 2018', 'img/article_1/intext_1.jpg', 'Na styczniowy wyjazd wędkarski do Omanu czekaliśmy z wielką niecierpliwością.\r\nOrganizacją tego wyjazdu zająłem się na długo przed terminem.\r\nChciałem, aby wszystko było zapięte na ostatni guzik, co w moim przypadku jest podstawą podczas przygotowywania każdej wyprawy wędkarskiej.\r\nSzczególnie takiej, gdzie jedzie się daleko od domu.\r\nOkoło pół roku przed terminem wszystko było już z góry zaplanowane i ustalone.\r\nNasza ekipa liczyła 10 osób z różnym doświadczeniem wędkarskim i w bardzo różnym wieku.\r\nW grupie było kilka osób, które były już na podobnych wyprawach wędkarskich w egzotyczne miejsca.\r\n<img src=\"/img/article_1/intext_1.jpg\" alt=\"intext_1\">\r\nPozostało już tylko kilka miesięcy na przygotowanie sprzętowe do wyprawy.\r\nWymagania były dość duże, ponieważ zaplanowaliśmy wyprawę na łowiska, które słyną z największych okazów GT (Giant Trevally) na Świecie.\r\nOman jest mekką łowców tego gatunku, którzy przyjeżdżają tam z wielu miejsc naszego globu.\r\nCzęstymi gośćmi są Amerykanie, a nawet Japończycy.\r\nOman jest miejscem, w którym GT ma bardzo dobre warunki do rozwoju, a w szczególności do rozrodu.\r\nMałe GT, które rodzą się w Omanie, rozpływają się po całym Świecie.\r\nSą praktycznie w wielu miejscach oceanu Indyjskiego oraz Pacyfiku.\r\nPo latach często wracają na swoje rodzime terytorium do Omanu, aby dorosnąć do ogromnych rozmiarów.\r\nAlbowiem ryby powyżej 40 kg nie są tu rzadkością i są regularnie łowione.\r\nAle także ogromne okazy tego gatunku, które przekraczają wagę powyżej 50 kg, a nawet 60 kg!\r\nW miejscu, do którego jedziemy są takie okazy i przy odrobinie szczęścia można z nimi stoczyć walkę życia na ciężkim zestawie do łowienia wielkimi popperami.\r\nJednak w Omanie nie łowi się wyłącznie GT, ale także wiele innych gatunków ryb, które są ciekawe do łowienia.\r\nPrzede wszystkim są to gatunki bardzo silne i ogromnie waleczne.\r\nMożemy tu złowić wspaniałe Giant Queen, różne gatunki tuńczyków, np. wielkie tuńczyki żółtopłetwe lub dużo mniejsze tuńczyki długopłetwe.\r\nJest wiele gatunków ryb z rodziny karanksowatych, do których także należy GT.\r\nW Omanie nie brakuje dużych ilości Amber Jack (Seriola Olbrzymia).\r\nRyb, które słyną ze swojej ogromnej siły i waleczności.\r\nMożna je złowić głównie w okresie wrzesień-październik.\r\nNa skraju raf możemy liczyć na piękne brania dużych Bream, które zażarcie atakują nieduże poppery lub małe stickbaity.\r\nW Omanie łowi się także inne gatunki ryb, jak chociażby wspaniale ubarwione Mahi Mahi, a także Grunter, Wahoo, Bonito, Sada Sada, graniki, snapery, żaglice, barrakudy, czy nawet rekiny.\r\nRyby w Omanie łowi się głównie w strefie przybrzeżnej do około 10 km od brzegu, na rafach oraz daleko od brzegu, na oceanicznych wyspach.\r\nZazwyczaj przy wyspach są najlepsze łowiska i tam można liczyć na największe okazy.\r\n<img src=\"/img/article_1/intext_2.jpg\" alt=\"intext_2\">\r\nWraz z moim bratem Mateuszem, przygotowaliśmy na ten wyjazd po 3 różne zestawy.\r\nJeden bardzo mocny w skali 10 PE, głównie do łowienia dużymi popperami (130-180 gramów) oraz dużymi stickbaitami o podobnej wadze.\r\nTen zestaw jest praktycznie wyłącznie do łowienia z nastawieniem na Giant Trevally.\r\nDrugi zestaw do łowienia w pionie, głównie techniką „speed jigging”To bardzo ciekawa i skuteczna technika do łowienia ryb, które żerują w toni i przemieszczają się stadamiAle nie tylko, ponieważ tą techniką można wywabić z rafy dużego granika, czy snaperaDużą atrakcją tej techniki łowienia są wspaniałe brania. W tej technice przynęta jest prowadzona bardzo szybko i można sobie wyobrazić, jakie następuje branie, kiedy naszą przynętę atakuje duża i bardzo szybka ryba! Ostatni zestaw to „lekki” spinning w skali 4-5 PE, którym będziemy łowili głównie na rafach i na ich obrzeżach za pomocą niedużych popperów, woblerów lub stickbaitów w wielkościach 10-15 cm. Do każdego z zestawów przygotowaliśmy specjalistyczne kołowrotki Okuma Azores Blue, całkowicie odporne na działanie soli morskiej. To bardzo ważne podczas łowienia na egzotycznych morzach, czy oceanach. Kołowrotek musi być odporny na sól. Wówczas jest niezawodny i nie przestanie działać w najmniej oczekiwanym momencie. Do każdego zestawu przygotowaliśmy także specjalne przypony, które zrobiliśmy własnoręcznie z najnowszego materiału przyponowego Regenerator. W naszych pudłach znalazło się oczywiście wiele przynęt, od zwykłych gum, po specjalistyczne wielkie poppery do powierzchniowego łowienia GT. Co najważniejsze, każda z przynęt została uzbrojona w super mocne kotwice oraz super mocne kółka łącznikowe. To podstawa łowienia dużych ryb oceanicznych!\r\n<img src=\"/img/article_1/intext_3.jpg\" alt=\"intext_3\">\r\nW końcu nadszedł czasu wyjazdu.\r\nZ naszą ekipą spotkaliśmy się już na lotnisku w Salalah w Omanie, ponieważ część osób poleciała przez Dubaj, a my przez Katar.\r\nNa lotnisku odebrała nas ekipa z Omanu, z którą wspólnie zorganizowaliśmy tę wyprawę.\r\nPo przejechaniu około 400 km od Salalah, dojechaliśmy do małej wioski rybackiej, w której jest nasza baza.\r\nOczywiście od razu zajęliśmy się przygotowaniem sprzętu, tak aby następnego dnia wypłynąć jak najwcześniej na łowisko.\r\n<img src=\"/img/article_1/intext_4.jpg\" alt=\"intext_4\">\r\nPierwszy dzień, to dzień rekonesansu, kiedy wszyscy będą wczuwali się w łowienie, poznawali nowe łowisko i testowali różne techniki łowienia.\r\nOd razu płyniemy na najlepsze łowisko, które jest oddalone bardzo daleko od brzegu.\r\nPłyniemy na słynne wyspy oceaniczne, gdzie będziemy mieli szansę złowienia największych Giant Trevally.\r\nPo ponad godzinie płynięcia dwoma łodziami z 400 konnymi silnikami, dopływamy do wielkich wysp, które otaczają ogromne rafy z bardzo zróżnicowaną głębokością od 0,5 do 25 metrów.\r\nŁowiska są wspaniałe, a wodna bardzo przejrzysta w niebiesko-zielonym zabarwieniu.\r\nTego dnia łowimy głównie na poppery, jerki i stickbaity.\r\nUdaje nam się złowić różne gatunki ryb, ale największą atrakcją są Mahi Mahi (Koryfena), które łowimy „na wypatrzonego” na płytkich rafach.\r\nW niektórych momentach holujemy po 2-3 ryby na raz.\r\nEuforia i zabawa jest niesamowita.\r\nRyby walczą zaciekle i co chwila oglądamy wspaniałe wyskoki ponad wodę.\r\n<img src=\"/img/article_1/intext_5.jpg\" alt=\"intext_5\">\r\nNiestety wieczorem w bazie, okazuje się, że pogoda nieco zmieni nasze plany na najbliższe dni łowienia.\r\nIdzie duży wiatr, który całkowicie uniemożliwi wypłynięcia na oddalone łowiska i do najlepszych wysp.\r\nPrognoza pokazuje wiatr na najbliższe dni, więc musimy wykorzystać ten czas na łowienie w tzw. strefie przybrzeżnej.\r\nW pierwszym dniu wiatru, łowimy wyłącznie blisko brzegów zasłoniętych bardzo wysokimi skałami.\r\nTam mamy możliwość schronienia się przed bardzo dużym wiatrem.\r\nPrzynęty prowadzimy przy skałach oraz na przybrzeżnych rafach.\r\nUdaje nam się złowić różne gatunki ryb.\r\nBlisko raf i skał wychodzą do naszych przynęt piękne i bardzo waleczne Bream’y, które stanowią wielką atrakcję wędkarstwa w Omanie.\r\nŁowi się je głównie na powierzchniowe przynęty, nieduże stickbaity oraz poppery.\r\nBrania Breamów są niesamowite i bardzo mocne. Ryby są waleczne i silne.\r\nPiękne zwieńczenie dnia. Kolejny dzień mija podobne, na łowieniu blisko brzegu i wyłącznie przy wysokich brzegach.\r\nŁowimy różne gatunki ryb, w tym Bonito, Sada Sada, czy nieduże tuńczyki.\r\nMamy także okazję zobaczyć wielkiego Giant Trevally, który na naszych oczach wspaniale i z impetem atakował mniejsze ryby przy samej powierzchni wody.\r\nWielka ryba z ogromną prędkością przemieszczająca się po łowisku, to niesamowity widok, którego nie zapomnimy na długo!\r\nWielki GT w końcu zaatakował jednego z naszych popperów, ale niestety jego siła nie pozwoliła na szybkie zatrzymanie ryby w trakcie holu.\r\nPo krótkim czasie GT „wbił się” w rafę i przetarł o nią bardzo mocny przypon z fluorocarbonu 1,2 mm.\r\n<img src=\"/img/article_1/intext_6.jpg\" alt=\"intext_6\">\r\nNastępne 4 dni przyjdą na zawsze do naszej pamięci.\r\nNiespotykana ilość brań i niesamowita ilość ryb, które wyholowaliśmy, przeszła naszej najśmielsze oczekiwania.\r\nNikt z nas nie spodziewał się tylu brań, tylu wspaniałych holi i tylu okazów ryb, które udało nam się złowić!\r\nNiesamowite 4 dni, które mam cały czas przed oczami i nie mogę o nich zapomnieć.\r\nWiatr nie ustawał, ale nie był aż tak duży, więc mogliśmy łowić w całej strefie przybrzeżnej do około 10 km od brzegu.\r\nW łowisko weszły stada drapieżników, które przyszły w strefę przybrzeżną w poszukiwaniu ogromnych stad sardeli.\r\nPrzez 4 dni byliśmy w euforii brań i myślę, że każdy z nas poczuł coś wspaniałego i nieoczekiwanego.\r\nTego nie da się opisać własnymi słowami, ale spróbuję przybliżyć Wam chociaż kilka chwil…\r\nDryfując na jednej z raf trafiamy piękne stado Giant Queen i wszystkim nam na łodzi, udaje się złowić tę wspaniałą rybę w jednym momencie.\r\nI to na powierzchniowe poppery!\r\nMożecie sobie wyobrazić brania i hole 5 bardzo silnych ryb na raz, które potrafią wyskakiwać na kilka metrów nad wodę…\r\nTo jest coś nie do opisania.\r\nTo trzeba przeżyć! Na innym dryfie, napływamy na ogromne stada drapieżników, które atakują od dołu duże stado sardeli.\r\nŁowimy ogromną ilość silnych ryb różnych gatunków, z czego prym wiodą Giant Queen, Spotted Grunter, Red Snapper i inne.\r\nMamy wiele sytuacji, kiedy holujemy po 3-4 ryby na raz.\r\nNie oszukam Was, jak powiem, że w najlepszych godzinach łowimy po 30-40 ryb na łódź!\r\nMasa akcji, ogromna ilość brań i wspaniałe hole. To po to tutaj przyjechaliśmy!\r\n<img src=\"/img/article_1/intext_7.jpg\" alt=\"intext_7\">\r\n<img src=\"/img/article_1/intext_8.jpg\" alt=\"intext_8\">\r\n<img src=\"/img/article_1/intext_9.jpg\" alt=\"intext_9\">\r\nPrzychodzi dobra informacja.\r\nWiatr ustaje i przez kolejne dwa dni będziemy łowili na najlepszych miejscówkach.\r\nPłyniemy na odległe wyspy. Ustanawiamy jeden cel – duży GT! Bez niego nie możemy wrócić do Polski.\r\nPogoda nam sprzyja i w końcu dopływamy do łowiska.\r\nW ruch idą wyłącznie najmocniejsze zestawy 10-12 PE, wielkie kołowrotki i wytrzymałe linki.\r\nRzucamy wyłącznie dużymi popperami i stickbaitami.\r\nCzeka nas bardzo ciężkie łowienie, ale liczymy na branie jednej wielkiej ryby.\r\nDopływamy do dużej rafy ze zmienną głębokością od około 5 do 25 metrów.\r\nPrzychodzi moment, który mam przed oczami, jakby było to dosłownie przed chwilą!\r\nŁowię koło Sławka. Mam założonego dużego poppera, a Sławek jeszcze większego, którego dostał od naszego przewodnika.\r\nProwadzimy przynęty dość blisko siebie, więc doskonale widzę swojego poppera i Sławka.\r\nNagle następuje potężne branie i ogromny wir na wodzie.\r\nSławek zacina i jest… Potężny odjazd ryby na kilkadziesiąt metrów i od razu wiemy, co zaatakowało przynętę.\r\nWielki GT! Robimy szybki zwrot łodzią, abyśmy mogli szybciej przejąć kontrolę nad rybą.\r\nOczywiście jeżeli w ogóle można kontrolować wielką rybę, z tak potężną siłą i prędkością…\r\nSławek ma odpowiedni zestaw.\r\nKij 12 PE, kołowrotek 10000 oraz plecionkę 70 kg wytrzymałości.\r\nJednak w pierwszej fazie holu, to ryba rządzi i ona wyznacza co będzie dalej.\r\nPomagamy Sławkowi i udaje nam się zwolnić rybę tuż przed ostrą jak brzytwa rafą.\r\nTa faza jest wygrana, dlatego mamy coraz większe nadzieję, że zobaczymy tego giganta.\r\nHol jest niesamowity, odjazdy na duże odległości. Widać, że ryba jest potwornie silna i szybka.\r\nNa szczęście powoli zaczyna zwalniać i słabnąć. Wykorzystujemy to i podciągamy rybę do łodzi.\r\nPrzewodnik i ja łapiemy rybę i szybko wciągamy ją na pokład.\r\nOkrzyk radości! Jest! Sławek jest roztrzęsiony, cała ekipa w euforii.\r\nSzybko robimy sesję zdjęciową. Dokładnie mierzymy i warzymy rybę.\r\nGiant Trevally ma aż 42 kg! Wspaniały okaz! Razem z przewodnikiem znakujemy rybę specjalnym znacznikiem i wypuszczamy ją do jej królestwa.\r\nSpełniło się nasze marzenie! Każdemu z nas udzieliła się ogromna radość i szczęście. Jesteśmy spełnieni!\r\n<img src=\"/img/article_1/intext_10.jpg\" alt=\"intext_10\">\r\nKolejnego dnia Tadzio ustanawia rekord naszej bazy w gatunku tuńczyka długopłetwego (Long Tale Tuna), łowiąc okaz powyżej 30 kg!\r\nŁowimy wiele ryb różnych gatunków. Klimat, piękna pogoda i spokój jaki panuje w Omanie działa na wszystkie zmysły i tak powoli kończy się nasza przygoda z Omanem…\r\n<img src=\"/img/article_1/intext_11.jpg\" alt=\"intext_11\">\r\nPrzez wiele lat trzymałem się zasady, aby nie brać udziału w wyprawach na egzotyczne łowiska.\r\nBałem się jednego, że po takiej wyprawie będę chciał tam wracać już zawsze.\r\nI tak się stało! Wsiąkłem w wędkarstwo egzotyczne! Tęsknię za Omanem i już czekam na kolejną wyprawę!\r\n<img src=\"/img/article_1/intext_12.jpg\" alt=\"intext_12\">'),
(2, '2024-01-08 21:58:44', '2024-01-08 21:58:44', 'Szkiery Blekinge – u wrót szczupakowego królestwa', 'img/article_2/intext_1.jpg', ' Królestwo szczupaków – taki właśnie epitet przewija się w rozmowach najczęściej, kiedy mówi się o rejonie archipelagu Blekinge. Południowe wybrzeże Szwecji od lat słynie z ogromnej populacji cętkowanych drapieżników, co sprawia, że co roku wędkarscy turyści podróżują w te rejony w nadziei na spotkanie z rybą życia… Szkiery w tym rejonie odwiedzam nie pierwszy raz, jednak tym razem czekało mnie znacznie bardziej odpowiedzialne zadanie, bowiem wyjeżdżałem w charakterze przewodnika naszej grupy.\r\nPogoda, jaka przywitała nas w dniu przyjazdu do Karlskrony była iście jesienna – wiatr, rzęsisty deszcz i temperatura sięgająca zaledwie 10 stopni Celsjusza. Czy może być lepiej? Niestety, nasze szczęście nie trwało zbyt długo, bowiem w ciągu zaledwie kilku godzin zaszła diametralna zmiana – niebo przybrało czysty, błękitny kolor, zaś wiatr zupełnie się uspokoił. Takie warunki nie wróżą niczego dobrego! Wszyscy bowiem wiemy, co się dzieje, gdy dojdzie do tak gwałtownej zmiany, jeśli jeszcze dodamy do tego zupełną flautę, mamy gotowy przepis na niemal pewną katastrofę. Nie poddaliśmy się jednak – szybko rozlokowaliśmy się w domkach, zjedliśmy obiad i ruszyliśmy do boju! Zaczęliśmy łowić tuż przy naszej bazie, w miejscu w którym w zeszłym tygodniu złowiono 116-tkę, a także 5 spośród 10 największych szczupaków w tym sezonie. Niestety, ryby były nieubłagane. Przez pierwsze 2 godziny łowienia widzieliśmy zaledwie kilka szczupaków długości 70-80 cm odprowadzających nasze przynęty, aż do samej łodzi. Przełom nastąpił, gdy napłynąłem w bardzo płytką zatokę, do której uchodziła jedna z okolicznych rzek. Pierwszych kilka rzutów i… Piotr zapina prawdziwą mamuśkę! Szczęście nie trwa jednak długo, ryba rzuca kilka razy potężnym łbem i wypluwa jerka, którego jeszcze kilka sekund temu miała w pysku. Inna spora ryba wychodzi do przynęty jeszcze dwa razy, niestety tym razem nie jest na tyle zaciekawiona, by zaatakować woblera. Przed zachodem słońca, zmieniam miejscówkę na moją „bankówkę”. Nie mija 5 minut i Radek zapina całkiem przyzwoitego (jak na panujące warunki) szczupaka. Ryba jest wyjątkowo silna – kilkakrotnie odjeżdża, uparcie uciekając w stronę dna. W końcu, gdy wydaje się być zmęczona, próbuję ją podebrać, jednak ona nie daje za wygraną. Ostatkiem sił ryba stawia świecę, po której już zupełnie się uspokaja. Szybkie mierzenie – okazuje się, że esox ma równo 80 centymetrów. Sesja fotograficzna i ryba wraca z powrotem do wody. Tym miłym akcentem zakończyliśmy pierwszy dzień łowienia.\r\n<img src=\"/img/article_2/intext_1.jpg\" alt=\"intext_1\">\r\nW poniedziałek rano nadzieja na wielkie ryby z Blekinge znów w nas ożyła. Na niebie pojawiły się delikatne chmury, zaś wiatr nieznacznie marszczył taflę wody. Dosyć szybko złowiliśmy po kilka średniaków, jednak brania ryb zupełnie ustały w momencie, gdy się rozpogodziło. Jako że pogoda była typowo wypoczynkowa, a ryby nie wykazywały się zbytnią chęcią współpracy, dobiliśmy na brzeg, by chwilę odpocząć i zjeść coś ciepłego. Gdy już podładowaliśmy akumulatory, z powrotem zabraliśmy się za łowienie. Do późnego popołudnia zanotowaliśmy kilka niewielkich ryb i pojedyncze, nieśmiałe brania. Ostre słońce i wysoka temperatura nie wpłynęły korzystnie na żerowanie ryb. Podejrzewając, że tego dnia nie zwojujemy już zbyt wiele, postanowiłem, że spróbujemy poszukać okoni w okolicy stromego stoku tuż przy naszej bazie. W ciągu pierwszych kilku rzutów raz po raz czułem delikatne podskubywanie niewielkiego rippera… W następnym rzucie delikatnym sprzętem, czuję tępy opór i jestem niemal pewien, że zahaczyłem o podwodny kabel. Dopiero po kilku sekundach „kabel” ożywa i zaczyna desperacką walkę. Ryba, jak przystało na szczupaki z Blekinge, jest wyjątkowo silna. Za wszelką cenę stara się wysnuć kolejne metry plecionki ze szpuli delikatnego multiplikatora i uciec pomiędzy nabrzeżne głazy. W końcu, szczupak daje za wygraną i ląduje na pokładzie naszej łodzi. Miarka wskazuje 99 cm. Po krótkiej sesji fotograficznej, ryba odpływa, ochlapując mnie przy tym całego.\r\n<img src=\"/img/article_2/intext_2.jpg\" alt=\"intext_2\">\r\nKolejne dni przyniosły wręcz wymarzoną pogodę – wiał dość silny wiatr, zaś niebo naznaczone było pojedynczymi chmurami. Czy można prosić o więcej, będąc na szczupakach? Z dnia na dzień Blekinge coraz bardziej pokazywało pazury. Szczupaki brały praktycznie w każdym miejscu, na które napłynęliśmy i co najważniejsze – nie wybrzydzały! Atakowały jerki, wahadłówki, obrotówki, duże i małe gumy. Dość powiedzieć, że najlepsza spośród miejscówek obdarzyła trójkę uczestników wyprawy przeszło 20 szczupakami w niespełna godzinę! Do szczęścia brakowało nam jedynie ryby, której długość przekroczyłaby magiczne 100 cm…\r\n<img src=\"/img/article_2/intext_3.jpg\" alt=\"intext_3\">\r\nW środę po południu Piotr jak zwykle przekomarzał się z Radkiem i rzucił żartobliwie: „obyś tak do końca wyjazdu nic już nie złowił!”. Radek zaśmiał się i wykonał rzut. To, co zdarzyło się później, będziemy wszyscy długo wspominać! Kij wygina się w pałąk, kołowrotek jęczy, powoli poddając się sile ryby i oddaje kolejne metry plecionki. Radek stwierdza, że tym razem ryba jest naprawdę konkretna. Ryba walczy wykonując długie, majestatyczne odjazdy typowe dla „mamusiek”. Walka się przeciąga, jednak w końcu szczupak zaczyna słabnąć i daje za wygraną. Przykładamy esoxa do miarki i okazuje się, że mierzy dokładnie 102 centymetry! Jest po prostu piękny – delikatny złoty odcień łusek, masywny, gruby kark… Podobnie jak poprzednio, zaraz po sesji, ryba zostaje ostrożnie wypuszczona.\r\n<img src=\"/img/article_2/intext_4.jpg\" alt=\"intext_4\">\r\nLepsza sytuacja miała miejsce na łodzi Jacka, który podczas wieczornych opowieści powiedział, że w czwartek złowili „dwa i pół metra ryby” w jednym rzucie! Jak to możliwe? Cała trójka łowiła na jednej łodzi i zadziałało prawo serii, niemal w tym samym momencie zanotowali brania! Jacek najszybciej wyholował swoją 60 cm rybę. Po nieco dłuższej chwili także Rafał podebrał swojego szczupaka – ryba mierzyła 92 centymetry, jednak została niemal natychmiast wypuszczona, nie doczekawszy się sesji zdjęciowej. Dlaczego tak się stało? Wiatr był na tyle silny, że w ekspresowym tempie pchał łódź w stronę przybrzeżnej kamiennej rafy, a kapitan właśnie walczył z największym spośród złowionych dotychczas szczupaków. Jacek i Rafał zarządzili małą roszadę i łódź zaczęła powoli oddalać się od brzegu. W końcu nastąpiła chwila słodkiego triumfu. Po kilku minutach zmagań, ryba znalazła się w „objęciach” Michała. Szczupak mierzył 104 centymetry i stał się jednocześnie nową „życiówką” Michała!\r\n<img src=\"/img/article_2/intext_5.jpg\" alt=\"intext_5\">\r\nDo końca wyjazdu złowiliśmy jeszcze wiele szczupaków, jednak większość stanowiły „średniaki” długości 70-80 cm. Bilans zamknęliśmy z przeszło 500 rybami, wśród których było kilka sztuk, o długości przekraczającej 90 cm (niestety nie wyczerpaliśmy wszystkich liczb z zakresu 90-99) i ponad 30 szczupaków pomiędzy 80 a 89 cm.\r\n<img src=\"/img/article_2/intext_6.jpg\" alt=\"intext_6\">\r\nSzkiery w Blekinge to łowisko absolutnie wyjątkowe w skali całego szwedzkiego wybrzeża. Co sprawia, że łowisko to jest aż tak wyjątkowe? Po pierwsze, liczna populacja szczupaków! Najczęściej łowi się ryby długości 70-80 cm, jednak ponadmetrowe esoxy to tutaj niemal codzienność. Warto pamiętać, że nie liczy się tylko wielkość ryby, lecz także jej uroda, a tej szczupakom z Blekinge akurat nie brakuje! Tutejsze szczupaki mają rzadko spotykany złocisty koloryt, który idzie w parze z niezbyt smukłą sylwetką… Pomimo że cały rejon kojarzony jest głównie z tymi właśnie rybami, nie sposób nie wspomnieć o okoniach! Garbusy nie są aż tak liczne jak szczupaki, jednak rekompensują ten fakt imponującymi gabarytami. W dobre dni rzadko łowi się ryby mniejsze niż 40 centymetrów, a średnia ilość okoni idzie w dziesiątki… Szkiery w południowej Szwecji różnią się nieco od wybrzeża spotykanego w środkowej części kraju. Na krajobraz archipelagu składają się zarówno pojedyncze nagie skały, jak i niezbyt duże, niemal pozbawione roślinności kamienne wysepki. Z kolei, decydując się na łowienie w okolicy dużych miast, jak np. Karlskrona, nie tylko mamy szansę na wspaniały wędkarski wypoczynek, lecz także na otarcie się o absolutnie szczególne miejsca będące świadkami burzliwej historii Szwecji ciągnącej się od epoki Wikingów, aż do chwili obecnej. Ostatnią rzeczą, o której warto wspomnieć, mówiąc o Blekinge jest charakterystyka łowiska. Szkier można w zasadzie podzielić na dwie części – zatokową i tę graniczącą z otwartym morzem. Wybierając ten pierwszy rodzaj łowiska, zobaczymy znajomy krajobraz – wynurzające się łodygi podwodnej roślinności i brzeg porośnięty gęstymi i szerokimi trzcinowiskami. To właśnie tutaj wczesną wiosną i późną jesienią łowione są największe szczupaki! Zgoła odmienna jest charakterystyka łowisk graniczących z otwartym morzem. Najczęściej obławia się skraj kamiennych raf, bądź też brzegi większych wysp. Od zatok, miejscówki te odróżnia przede wszystkim wielkość łowionych ryb – niestety, są to na ogół średniaki. Warto dodać, że tzw. „kamienne szczupaki” to prawdziwi strongmani, nawet niewielkie ryby, mierzące 70-80 centymetrów, potrafią dać ostro popalić, niejednokrotnie przebijając zatokowe „metrówki”…\r\nMichał Szewczuk, 11.2015'),
(3, '2024-01-08 22:01:39', '2024-01-08 22:01:39', 'Syn, Tata i ryby…', 'img/article_3/intext_1.jpg', 'Chyba do końca życia nie zapomnę pierwszej ryby, którą złowiłem w wieku 6-7 lat. Pierwsza płotka, którą złowiłem na spławikówkę mojego taty. Wędkę dostałem tylko do potrzymania w rękach. Spławik szybko zatonął. Tata powiedział głośno „Pociągnij do góry”. Ja to zrobiłem i na końcu zestawu zaczęła walczyć niewielka rybka. To była moja pierwsza, niezapomniana! Później przyszedł czas na łowienie większych ryb, pierwszych drapieżników. Dostałem od taty swój pierwszy spinning i kołowrotek. Tata nawinął mi grubą żyłkę, na końcu zawiązał przypon i dał mi w prezencie kilka przynęt. Oj jaki byłem z tego dumny! Miałem swój spinning i 4 różne metalowe przynęty – trzy wahadłówki i jedną wirówkę. Nadszedł wolny weekend i tata zabrał mnie nad Narew w okolicach Pułtuska. Tam pojechaliśmy nad rozlewiska Narwi. Tata z kolegą, rozstawili się ze spławikówkami, a ja wziąłem swój spinning i poszedłem łowić dosłownie kilkadziesiąt metrów dalej. Po niedługim czasie, mam branie, potężne, nie do opisania. Ryba walczy zaciekle i w zasadzie zaczyna wciągać mnie do wody… Jest ogromna! Wołam w niebogłosy „Tato szybko. Mam wielką rybę”. Tata przyszedł do mnie z podbierakiem i jak ryba była już blisko brzegu, podebrał ją. Jest! Mam ją! Jest wielka! Emocje sięgnęły zenitu! Jestem zachwycony! Tak zaczęła się moja przygoda z wędkarstwem. Wsiąkłem w nią na dobre. Teraz jak sobie o tym pomyślę, to trochę śmiać mi się chce. Szczupak, którego złowiłem miał pewnie z 50 cm, ale wtedy wydawał mi się ogromny, silny i groźny… Hehehe. Jednak do końca życia nie zapomnę tej chwili. Moje wspomnienia przywołują tę chwilę. Ogromne emocje i pewnie wielka adrenalina, której kiedyś nie byłem w stanie określić.\r\n        <img src=\"/img/article_3/intext_1.jpg\" alt=\"intext_1\">\r\nW moim dzisiejszym wędkarstwie, a jest to moja największa życiowa pasja, takie chwile euforii przychodzą już tylko wtedy, kiedy uda mi się złowić naprawdę konkretny okaz. I nie przesadzam. Złowiłem już wiele ryb w swoim życiu i każda złowiona ryba sprawia mi dużą satysfakcję. Jednak prawdziwa adrenalina leje się ze mnie tylko podczas holu wielkich, rekordowych ryb. I to nie ważne, czy jest to rekordowy pstrąg, szczupak, czy sum. Ryba musi dać mi popalić, abym poczuł to, co czułem jak złowiłem tego swojego pierwszego „wielkiego” szczupaka. Pasja wędkarska jest ze mną od dziecka. Zawdzięczam to mojemu tacie! To on od małego zabierał mnie na Mazury, nad Wisłę, czy Narew. To pod jego okiem złowiłem swoje pierwsze ryby…\r\nW dzisiejszych czasach, wielu z nas ma bardzo ograniczony czasu. Ojcowie często wracają późno do domu, niektórzy nie mają wolnych weekendów. Wielu tatusiów chciałoby spróbować się w wędkarstwie, ale po prostu brakuje im czasu na zaangażowanie się w temat od początku. A co tu dopiero mówić o zabraniu syna na ryby, skoro sami nie mamy na to czasu wystarczająco, aby wgryźć się w temat. Wędkarstwo wbrew pozorom, tak naprawdę nie jest takie proste i wymaga od nas wielu godzin poświęconego czasu. Aby „ogarnąć” te wszystkie metody, przynęty, zanęty, spławiki, kołowrotki i wędki… W dzisiejszych czasach, gdzie mamy ogromny wybór sprzętu, gdzie jest wiele technik połowu, czy metod łowienia, tym bardziej staje się to skomplikowane dla kogoś kto chciałby spróbować od zera i to jeszcze z własnym dzieckiem. Natłok informacji, wielki wybór sprzętowy, tak naprawdę nie ułatwia zadania. A wręcz je komplikuje… Dlatego też, warto rozpocząć swoją przygodę z wędkarstwem i zabrać swojego syna na wyprawę wędkarską, czy szkolenie wędkarskie, zorganizowane przez doświadczonych pasjonatów tego hobby. Pod okiem profesjonalistów, spróbować postawić swoje pierwsze kroki w wędkarstwie. Przyswoić w krótkim czasie ogromną wiedzę, którą tak naprawdę trzeba zdobywać latami! Spróbować odnaleźć się w tym wszystkim i wraz z synem spróbować złowić swoją pierwszą rybę, pod opieką przewodnika wędkarskiego. Taka wyprawa wraz z profesjonalistą jest świetnym rozwiązaniem, szczególnie dla ojców, którzy na co dzień nie mają dużo czasu, a chcą wraz ze swoim synem spędzić miłe chwile na łonie natury, odpoczywając i łowiąc ryby.\r\n<img src=\"/img/article_3/intext_2.jpg\" alt=\"intext_2\">\r\nOd 9 lat jestem przewodnikiem wędkarskim. Swoją pasję, połączyłem z pracą. Bardzo chętnie dzielę się swoją zdobytą wiedzą, wraz z moimi Klientami, których goszczę na wspólnych wyprawach. Przez te wszystkie lata spotkałem się z wieloma ludźmi, w tym z ojcami i ich synami, którzy dzięki naszej pomocy, realizują swoje hobby, czyli wędkarstwo. Sami nie mają czasu na rozgryzanie wielu niuansów związanych z wędkarstwem, nie mają czasu na kupowanie sprzętu, a zależy im, aby po prostu spędzić swój czas z synem, łowiąc ryby w dobrym towarzystwie. Za nami wiele udanych wypraw, wielu zadowolonych ojców, patrzących na szczęście swoich dzieci! Wiele udanych holi dużych ryb i wiele miłych chwil spędzonych z dziką naturą w tle… Czego chcieć więcej, jak widok uśmiechniętego ojca, wraz ze szczęśliwym synem, wypuszczających wielką rybę z powrotem do wody…\r\n<img src=\"/img/article_3/intext_3.jpg\" alt=\"intext_3\">\r\nZapraszam na wyprawy wędkarskie, gdzie ojciec wraz z synem może realizować swoje hobby, pod opieką profesjonalnych przewodników – www.przewodnicywedkarscy.pl. Wyprawy organizujemy zarówno w Polsce, jak i w Europie oraz w różnych miejscach na Świecie.\r\n<img src=\"/img/article_3/intext_4.jpg\" alt=\"intext_4\">\r\nTych ojców, którzy jeszcze nie zaczęli swojej przygody wędkarskiej lub chcą podszlifować swoją wiedzę pod okiem profesjonalnych instruktorów, zapraszam do jedynej w Polsce szkoły wędkarskiej – www.naukawedkowania.pl. Tutaj wraz ze swoimi dziećmi, możecie nauczyć się podstaw łowienia różnymi technikami i metodami oraz rozwinąć swoje wcześniej zdobyte doświadczenia.\r\n<img src=\"/img/article_3/intext_5.jpg\" alt=\"intext_5\">\r\nZapraszam na wspólne wyprawy!\r\nSebastian „rognis_oko” Kalkowski, 07.2016');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `blog_post_comments`
--

CREATE TABLE `blog_post_comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `blog_post_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_post_comments`
--

INSERT INTO `blog_post_comments` (`id`, `created_at`, `updated_at`, `blog_post_id`, `user_id`, `content`) VALUES
(3, '2024-01-09 21:40:19', '2024-01-09 21:40:19', 1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(4, '2024-01-09 21:41:57', '2024-01-09 21:42:03', 3, 1, 'KOmentarz no nie wiem, dobry artykułsss'),
(5, '2024-01-09 21:49:14', '2024-01-09 21:49:14', 1, 3, 'Bardzo dobry artykuł'),
(6, '2024-01-09 21:49:35', '2024-01-09 21:49:35', 3, 3, 'Przyjemnie się czytało, udanych łowów'),
(8, '2024-01-09 22:18:32', '2024-01-09 22:18:40', 1, 1, 'Ale sztukę złowiliście, zazdroszczę');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `total_price` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `created_at`, `updated_at`, `total_price`) VALUES
(1, '2024-01-08 20:27:54', '2024-01-09 14:02:25', -113),
(2, '2024-01-09 15:23:10', '2024-01-09 15:38:19', 540),
(3, '2024-01-09 15:38:27', '2024-01-09 16:29:47', 90),
(4, '2024-01-09 16:29:55', '2024-01-09 16:31:24', 130),
(5, '2024-01-09 16:31:30', '2024-01-09 22:14:59', 502),
(6, '2024-01-09 21:43:15', '2024-01-09 22:19:20', 24.5),
(7, '2024-01-09 21:46:40', '2024-01-09 21:47:14', 240),
(8, '2024-01-09 21:47:46', '2024-01-09 21:47:46', 0),
(9, '2024-01-09 21:50:58', '2024-01-09 21:50:58', 0),
(10, '2024-01-09 22:15:13', '2024-01-09 22:15:28', 130),
(11, '2024-01-09 22:15:33', '2024-01-09 22:15:37', 180),
(12, '2024-01-09 22:15:46', '2024-01-09 22:15:51', 60),
(13, '2024-01-09 22:16:25', '2024-01-09 22:16:29', 60),
(14, '2024-01-09 22:16:34', '2024-01-09 22:16:38', 180),
(15, '2024-01-09 22:16:57', '2024-01-09 22:17:51', 827.5),
(16, '2024-01-09 22:17:59', '2024-01-09 22:17:59', 0),
(17, '2024-01-09 22:19:23', '2024-01-09 22:19:23', 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `cart_items`
--

CREATE TABLE `cart_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`id`, `created_at`, `updated_at`, `product_id`, `cart_id`, `quantity`) VALUES
(2, '2024-01-08 21:59:11', '2024-01-09 14:02:15', 1, 1, 4),
(3, '2024-01-08 21:59:39', '2024-01-09 14:02:14', 20, 1, 3),
(4, '2024-01-09 14:02:25', '2024-01-09 14:02:25', 10, 1, 1),
(5, '2024-01-09 15:38:13', '2024-01-09 15:38:19', 1, 2, 6),
(8, '2024-01-09 16:29:47', '2024-01-09 16:29:47', 1, 3, 1),
(9, '2024-01-09 16:31:24', '2024-01-09 16:31:24', 7, 4, 1),
(13, '2024-01-09 21:33:27', '2024-01-09 22:14:56', 1, 5, 4),
(15, '2024-01-09 21:47:11', '2024-01-09 21:47:14', 10, 7, 4),
(16, '2024-01-09 22:09:39', '2024-01-09 22:09:39', 12, 5, 1),
(17, '2024-01-09 22:14:59', '2024-01-09 22:14:59', 8, 5, 1),
(18, '2024-01-09 22:15:28', '2024-01-09 22:15:28', 7, 10, 1),
(19, '2024-01-09 22:15:37', '2024-01-09 22:15:37', 4, 11, 1),
(20, '2024-01-09 22:15:51', '2024-01-09 22:15:51', 10, 12, 1),
(21, '2024-01-09 22:16:29', '2024-01-09 22:16:29', 10, 13, 1),
(22, '2024-01-09 22:16:38', '2024-01-09 22:16:38', 4, 14, 1),
(23, '2024-01-09 22:17:40', '2024-01-09 22:17:49', 10, 15, 6),
(24, '2024-01-09 22:17:44', '2024-01-09 22:17:50', 1, 15, 5),
(25, '2024-01-09 22:17:46', '2024-01-09 22:17:51', 20, 15, 5),
(26, '2024-01-09 22:19:18', '2024-01-09 22:19:20', 20, 6, 7);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `delivery_details`
--

CREATE TABLE `delivery_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `house_number` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `delivery_method` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `delivery_details`
--

INSERT INTO `delivery_details` (`id`, `created_at`, `updated_at`, `first_name`, `last_name`, `postal_code`, `city`, `street`, `house_number`, `phone_number`, `payment_method`, `delivery_method`) VALUES
(1, '2024-01-09 15:22:52', '2024-01-09 15:22:52', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '605298405', 'blik', 'dpd'),
(2, '2024-01-09 15:23:10', '2024-01-09 15:23:10', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '605298405', 'blik', 'dpd'),
(3, '2024-01-09 15:38:27', '2024-01-09 15:38:27', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '123123123', 'cash', 'inpost'),
(4, '2024-01-09 16:29:55', '2024-01-09 16:29:55', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '123123123', 'debit_card', 'dhl'),
(5, '2024-01-09 16:31:30', '2024-01-09 16:31:30', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '605298405', 'blik', 'dpd'),
(6, '2024-01-09 21:47:46', '2024-01-09 21:47:46', 'Jan', 'Kowalski', '11-030', 'Lublin', 'Nadbystrzycka', '100', '123-444-505', 'credit_card', 'dhl'),
(7, '2024-01-09 22:15:13', '2024-01-09 22:15:13', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '123123123', 'credit_card', 'dhl'),
(8, '2024-01-09 22:15:33', '2024-01-09 22:15:33', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '605298405', 'credit_card', 'dhl'),
(9, '2024-01-09 22:15:46', '2024-01-09 22:15:46', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '123123123', 'credit_card', 'dpd'),
(10, '2024-01-09 22:16:25', '2024-01-09 22:16:25', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '605298405', 'credit_card', 'pocztex'),
(11, '2024-01-09 22:16:34', '2024-01-09 22:16:34', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '605298405', 'credit_card', 'inpost'),
(12, '2024-01-09 22:16:57', '2024-01-09 22:16:57', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '605298405', 'debit_card', 'dhl'),
(13, '2024-01-09 22:17:59', '2024-01-09 22:17:59', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '605298405', 'paypal', 'pocztex'),
(14, '2024-01-09 22:19:23', '2024-01-09 22:19:23', 'Adam', 'Mazur', '21-080', 'Garbów', 'Bogucin', '159', '605298405', 'credit_card', 'dhl');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `fishing_events`
--

CREATE TABLE `fishing_events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `time` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fishing_events`
--

INSERT INTO `fishing_events` (`id`, `created_at`, `updated_at`, `year`, `month`, `day`, `time`, `location`, `description`) VALUES
(1, NULL, NULL, 2024, 0, 10, '10:30', 'Warszawa', 'Zjazd miłośników szczupaków'),
(2, NULL, NULL, 2024, 0, 24, '19:00', 'Zamość', 'Targi producentów żyłek'),
(3, NULL, NULL, 2023, 11, 20, '17:00', 'Lublin', 'Wigilia miłośników wędkarstwa'),
(4, NULL, NULL, 2024, 1, 20, '14:30', 'Gdańsk', 'Targi producentów wędzisk spinningowych'),
(5, NULL, NULL, 2024, 1, 8, '12:00', 'Łódź', 'Konkurs na największego suma'),
(6, NULL, NULL, 2024, 2, 13, '14:00', 'Białystok', 'Targi przynęt'),
(7, NULL, NULL, 2024, 0, 18, '13:40', 'Lublin', 'Konkurs na najlepsze zdjęcie z wyprawy łowieckiej');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `fishing_grounds`
--

CREATE TABLE `fishing_grounds` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `latitude` double(8,2) NOT NULL,
  `longitude` double(8,2) NOT NULL,
  `name` varchar(255) NOT NULL,
  `species` varchar(255) NOT NULL,
  `night_fishing` tinyint(1) NOT NULL,
  `tent` tinyint(1) NOT NULL,
  `voivodeship` varchar(255) NOT NULL,
  `accommodation` tinyint(1) NOT NULL,
  `spinning` tinyint(1) NOT NULL,
  `area` double(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fishing_grounds`
--

INSERT INTO `fishing_grounds` (`id`, `created_at`, `updated_at`, `latitude`, `longitude`, `name`, `species`, `night_fishing`, `tent`, `voivodeship`, `accommodation`, `spinning`, `area`) VALUES
(1, NULL, NULL, 51.36, 22.28, 'Łowisko Przybysławice', 'Karp, Szczupak, Jesiotr, Sum', 1, 1, 'Lubelskie', 0, 1, 0.20),
(2, NULL, NULL, 51.36, 22.34, 'Łowisko Garbów', 'Karp, Szczupak', 1, 1, 'Lubelskie', 0, 1, 0.30),
(3, NULL, NULL, 53.68, 21.61, 'Łowisko Wejsuny', 'Karp, Szczupak, Sum', 0, 1, 'Warmińsko-Mazurskie', 1, 0, 1.10),
(4, NULL, NULL, 51.63, 22.78, 'Łowisko Siemień', 'Sum, Jesiotr', 1, 1, 'Lubelskie', 0, 0, 0.50),
(5, NULL, NULL, 50.54, 21.65, 'Łowisko Tarnobrzeg', 'Sum, Karp', 0, 1, 'Podkarpackie', 0, 1, 0.70);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_01_04_180148_create_newsletters_table', 1),
(6, '2024_01_05_204448_create_blog_posts_table', 1),
(7, '2024_01_05_204513_create_blog_post_comments_table', 1),
(8, '2024_01_08_200001_create_delivery_details_table', 1),
(9, '2024_01_08_200002_create_product_categories_table', 1),
(10, '2024_01_08_200003_create_products_table', 1),
(11, '2024_01_08_200004_create_carts_table', 1),
(12, '2024_01_08_200005_create_cart_items_table', 1),
(13, '2024_01_08_200009_create_orders_table', 1),
(14, '2024_01_09_210209_create_fishing_events_table', 2),
(15, '2024_01_09_214241_create_fishing_grounds_table', 3);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `newsletters`
--

CREATE TABLE `newsletters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `subjects` varchar(255) NOT NULL,
  `favorite_type` varchar(255) NOT NULL,
  `comment` text DEFAULT NULL,
  `consent` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `newsletters`
--

INSERT INTO `newsletters` (`id`, `created_at`, `updated_at`, `email`, `name`, `frequency`, `subjects`, `favorite_type`, `comment`, `consent`) VALUES
(1, '2024-01-09 21:48:56', '2024-01-09 21:48:56', 'jkowalski@onet.pl', 'Jan Kowalski', 'codziennie', 'relacje,promocje,poradniki', 'splawik', 'Nie mam uwag', 1),
(2, '2024-01-09 22:17:22', '2024-01-09 22:17:22', 'email@test.pl', 'Adam', 'codziennie', 'relacje,promocje,poradniki,wydarzenia,wiadomosci', 'spinning', NULL, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `delivery_details_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `created_at`, `updated_at`, `cart_id`, `user_id`, `delivery_details_id`) VALUES
(1, '2024-01-09 15:23:10', '2024-01-09 15:23:10', 1, 1, 2),
(2, '2024-01-09 15:38:27', '2024-01-09 15:38:27', 2, 1, 3),
(3, '2024-01-09 16:29:55', '2024-01-09 16:29:55', 3, 1, 4),
(4, '2024-01-09 16:31:30', '2024-01-09 16:31:30', 4, 1, 5),
(5, '2024-01-09 21:47:46', '2024-01-09 21:47:46', 7, 3, 6),
(6, '2024-01-09 22:15:13', '2024-01-09 22:15:13', 5, 1, 7),
(7, '2024-01-09 22:15:33', '2024-01-09 22:15:33', 10, 1, 8),
(8, '2024-01-09 22:15:46', '2024-01-09 22:15:46', 11, 1, 9),
(9, '2024-01-09 22:16:25', '2024-01-09 22:16:25', 12, 1, 10),
(10, '2024-01-09 22:16:34', '2024-01-09 22:16:34', 13, 1, 11),
(11, '2024-01-09 22:16:57', '2024-01-09 22:16:57', 14, 1, 12),
(12, '2024-01-09 22:17:59', '2024-01-09 22:17:59', 15, 1, 13),
(13, '2024-01-09 22:19:23', '2024-01-09 22:19:23', 6, 2, 14);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `product_category_id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `product_price` double NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `product_manufacturer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `created_at`, `updated_at`, `product_category_id`, `product_name`, `product_description`, `product_price`, `product_image`, `product_manufacturer`) VALUES
(1, '2024-01-08 21:38:48', '2024-01-08 21:38:48', 1, 'Wędka Jaxon Tenesa Easy Spin', 'Opis wędki', 90, 'spinning_rod_1.jpg', 'Jaxon'),
(2, '2024-01-08 21:39:48', '2024-01-08 21:39:48', 1, 'Wędka Dragon Express Spinn 35', 'Opis', 190, 'spinning_rod_2.jpg', 'Dragon'),
(3, '2024-01-08 21:40:31', '2024-01-08 21:40:31', 1, 'Wędka Mikado Bixlite Spin', 'Opis', 150, 'spinning_rod_3.jpg', 'Mikado'),
(4, '2024-01-08 21:41:31', '2024-01-08 21:41:31', 2, 'Wędka Mikado Sasori Feeder', 'Opis', 180, 'carp_rod_1.jpg', 'Mikado'),
(5, '2024-01-08 21:42:22', '2024-01-08 21:42:22', 2, 'Wędka Zaffira Tele Carp Rt Jaxon', 'Opis', 280, 'carp_rod_2.jpg', 'Jaxon'),
(6, '2024-01-08 21:43:42', '2024-01-08 21:43:42', 2, 'Wędka Mikado Ultraviolet Feeder', 'opis', 215, 'carp_rod_3.jpg', 'Mikado'),
(7, '2024-01-08 21:44:17', '2024-01-08 21:44:17', 3, 'Kołowrotek DAM Runshift 3L', 'Opis', 130, 'front_reel_1.jpg', 'DAM'),
(8, '2024-01-08 21:44:57', '2024-01-08 21:44:57', 3, 'Kołowrotek Dragon Magnum FD230i', 'opis', 70, 'front_reel_2.jpg', 'Dragon'),
(9, '2024-01-08 21:45:33', '2024-01-08 21:45:33', 3, 'Kołowrotek Jaxon Bonzo PRI', 'opis', 90, 'front_reel_3.jpg', 'Jaxon'),
(10, '2024-01-08 21:46:06', '2024-01-08 21:46:06', 4, 'Kołowrotek Jaxon Piano VM', 'opis', 60, 'back_reel_1.jpg', 'Jaxon'),
(11, '2024-01-08 21:46:40', '2024-01-08 21:46:40', 4, 'Kołowrotek Jaxon Piano VS', 'opis', 68, 'back_reel_2.jpg', 'Jaxon'),
(12, '2024-01-08 21:47:13', '2024-01-08 21:47:13', 4, 'Kołowrotek Mikado Sasori RD', 'opis', 72, 'back_reel_3.jpg', 'Mikado'),
(13, '2024-01-08 21:47:45', '2024-01-08 21:47:45', 5, 'Żyłka Dragon Millenium Szczupak', 'opis', 15, 'main_string_1.jpg', 'Dragon'),
(14, '2024-01-08 21:48:23', '2024-01-08 21:48:23', 5, 'Żyłka Jaxon Crocodile Spinning', 'opis', 19, 'main_string_2.jpg', 'Jaxon'),
(15, '2024-01-08 21:48:54', '2024-01-08 21:48:54', 5, 'Żyłka Mikado Dino Dynamic II', 'opis', 25, 'main_string_3.jpg', 'Mikado'),
(16, '2024-01-08 21:49:27', '2024-01-08 21:49:27', 5, 'Żyłka Dragon Guide Select', 'opis', 39, 'main_string_4.jpg', 'Dragon'),
(17, '2024-01-08 21:50:11', '2024-01-08 21:50:11', 6, 'Guma Savage Gear Slender Scoop Shad', 'opis', 9, 'artificial_bait_1.jpg', 'Savage Gear'),
(18, '2024-01-08 21:50:42', '2024-01-08 21:50:42', 6, 'Guma Mikado Angry CrayFish', 'opis', 4, 'artificial_bait_2.jpg', 'Mikado'),
(19, '2024-01-08 21:51:16', '2024-01-08 21:51:16', 7, 'Kulki haczykowe Jaxon Method Ground 16mm', 'opis', 9, 'natural_bait_1.jpg', 'Jaxon'),
(20, '2024-01-08 21:51:51', '2024-01-08 21:51:51', 7, 'Kukurydza wędkarska w puszce Traper', 'opis', 3.5, 'natural_bait_2.jpg', 'Traper');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `product_categories`
--

CREATE TABLE `product_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`id`, `created_at`, `updated_at`, `category_name`) VALUES
(1, '2024-01-08 21:31:22', '2024-01-08 21:31:22', 'spinning_rods'),
(2, '2024-01-08 21:31:26', '2024-01-08 21:31:26', 'carp_rods'),
(3, '2024-01-08 21:32:34', '2024-01-08 21:32:34', 'front_reels'),
(4, '2024-01-08 21:33:28', '2024-01-08 21:33:28', 'back_reels'),
(5, '2024-01-08 21:37:27', '2024-01-08 21:37:27', 'main_strings'),
(6, '2024-01-08 21:38:27', '2024-01-08 21:38:27', 'artificial_baits'),
(7, '2024-01-08 21:44:27', '2024-01-08 21:44:27', 'natural_baits');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `cart_id`) VALUES
(1, 'konto_qwertyuio', 'email@test.pl', NULL, '$2y$12$8./oxawwFh/stwSkHJNlTOwR6PTVRmGP4fVGMWfylUkPyXw1SV6R6', NULL, '2024-01-08 20:27:54', '2024-01-09 22:18:15', 16),
(2, 'Adam Mazur', 'adam@mazur.pl', NULL, '$2y$12$CD.wpXDU3abJrwhgDEuXS.LyNdO1ImmbN8KvCVzj8ABj8yoxo1tV.', NULL, '2024-01-09 21:43:15', '2024-01-09 22:19:23', 17),
(3, 'Jan Kowalski', 'jkowalski@onet.pl', NULL, '$2y$12$STqxZv5mD5Npj.r9gUdxqeZmW.6oKVs3D3TQ6Bd7jhZAoNW9EQ0fy', NULL, '2024-01-09 21:46:40', '2024-01-09 21:47:46', 8);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blog_posts_title_unique` (`title`);

--
-- Indeksy dla tabeli `blog_post_comments`
--
ALTER TABLE `blog_post_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_post_comments_blog_post_id_foreign` (`blog_post_id`),
  ADD KEY `blog_post_comments_user_id_foreign` (`user_id`);

--
-- Indeksy dla tabeli `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_items_product_id_foreign` (`product_id`),
  ADD KEY `cart_items_cart_id_foreign` (`cart_id`);

--
-- Indeksy dla tabeli `delivery_details`
--
ALTER TABLE `delivery_details`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeksy dla tabeli `fishing_events`
--
ALTER TABLE `fishing_events`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `fishing_grounds`
--
ALTER TABLE `fishing_grounds`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `newsletters`
--
ALTER TABLE `newsletters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `newsletters_email_unique` (`email`);

--
-- Indeksy dla tabeli `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_cart_id_foreign` (`cart_id`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_delivery_details_id_foreign` (`delivery_details_id`);

--
-- Indeksy dla tabeli `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeksy dla tabeli `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeksy dla tabeli `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_product_category_id_foreign` (`product_category_id`);

--
-- Indeksy dla tabeli `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_categories_category_name_unique` (`category_name`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blog_post_comments`
--
ALTER TABLE `blog_post_comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `delivery_details`
--
ALTER TABLE `delivery_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fishing_events`
--
ALTER TABLE `fishing_events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `fishing_grounds`
--
ALTER TABLE `fishing_grounds`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `newsletters`
--
ALTER TABLE `newsletters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog_post_comments`
--
ALTER TABLE `blog_post_comments`
  ADD CONSTRAINT `blog_post_comments_blog_post_id_foreign` FOREIGN KEY (`blog_post_id`) REFERENCES `blog_posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `blog_post_comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `cart_items_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `cart_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `orders_delivery_details_id_foreign` FOREIGN KEY (`delivery_details_id`) REFERENCES `delivery_details` (`id`),
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_product_category_id_foreign` FOREIGN KEY (`product_category_id`) REFERENCES `product_categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
