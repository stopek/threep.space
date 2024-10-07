// @todo - move data to api
import { ISkill } from "./components/Skills/components/Skill";
import { IStage } from "./components/Stages/components/Stage";
import { IKnowItem } from "./components/Knowledge/components/KnowItem";
import { IDesignItem } from "./components/Design/components/DesignItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import { TMenuItem } from "./components/HubMenu";

export const filters_list: string[] = ["react", "angular", "symfony", "code_igniter", "rest"];

export const skillsData: ISkill[] = [
	{
		name: "react",
		percentage: 95,
	},
	{
		name: "angular",
		percentage: 85,
	},
	{
		name: "js_ts",
		percentage: 90,
	},
	{
		name: "symfony",
		percentage: 87,
	},
	{
		name: "code_igniter",
		percentage: 85,
	},
	{
		name: "php_mysql",
		percentage: 84,
	},
	{
		name: "linux_bash",
		percentage: 50,
	},
	{
		name: "python",
		percentage: 25,
	},
];

export const knowledge_items: IKnowItem[] = [
	{
		title: "Frontend Developer",
		description:
			"I started with React and later learned Angular. The knowledge gained from working with these frameworks allowed me to understand current frontend technologies and develop the ability to design dynamic web applications.",
	},
	{
		title: "Backend Developer",
		description:
			"I began my programming journey with backend technologies combined with frontend ones. For a long time, I focused mainly on this approach. During this time, I learned PHP, CodeIgniter, Symfony, and MySQL among others.",
	},
	{
		title: "DevOps",
		description:
			"I have experience in managing Linux servers, configuring, optimizing, and automating tasks. I created an installer for CentOS to configure VPS, which helped me in setting up and managing VPS servers.",
	},
];

export const design_items: IDesignItem[] = [
	{
		name: "Creating Interfaces",
		description:
			"Ability to create interfaces using, among others: CSS/SCSS, HTML, StyledComponents or Tailwindcss with responsive versions in mind",
	},
	{
		name: "Graphic Programs",
		description:
			"Very good knowledge of Adobe Photoshop. Sufficient knowledge of programs like Figma, Adobe XD",
	},
	{
		name: "External Libraries",
		description:
			"Knowledge and ability to use MaterialUI libraries (slightly less of MUI) and PrimeNG",
	},
];

export const stages_list: IStage[] = [
	{
		name: "angular",
		icon: "/stages/angular.png",
	},
	{
		name: "scrum",
		icon: "/stages/scrum.png",
	},
	{
		name: "react",
		icon: "/stages/react.png",
	},
	{
		name: "symfony",
		icon: "/stages/symfony.png",
	},
];

export const works_list: Type.IWork[] = [
	{
		name: "eMERCATOR - Product Store",
		description: {
			pl: "<em>Sklep z produktami firmy eMercator</em><strong>Rola w projekcie:</strong><ol><li>Praca w 12-osobowym zespole w metodyce SCRUM przez 2 lata</li><li>Główny frontend developer projektu (Angular)</li><li>Rozwój projektu zgodnie z wymaganiami biznesowymi</li><li>Kompletny refaktoring kodu pod kątem SSR (Server-Side Rendering)</li><li>Wdrożenie Angular SSR</li><li>Optymalizacja wydajności</li></ol>",
			en: "<em>eMercator Product Store</em><strong>Role in the project:</strong><ol><li>Working in a 12-person team using SCRUM methodology</li><li>Main frontend developer for the project (Angular)</li><li>Developing the project according to business requirements</li><li>Complete refactoring of the code for SSR (Server-Side Rendering)</li><li>Implementing Angular SSR</li><li>Performance optimization</li></ol>",
		},
		category: ["angular", "createit"],
		stack: ["angular", "prime", "ts", "tailwind", "jest", "legacy"],
		image: "/works/emercator.jpg",
		slug: "emercator",
		inside: {
			preview: "https://emercator.com",
		},
		last: true,
	},
	{
		order: 10,
		name: "Deskou - Finding places to work",
		image: "/works/deskou.jpg",
		description: {
			pl: "<em>Portal, umożliwiający znalezienie obiektu noclegowego z naciskiem na komfort pracy</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie portalu w oparciu o UI</li><li>Kontakt z klientem i zespołem</li><li>Późniejsza rozbudowa</li><li>Integracja z REST Laravel</li><li>Praca w 3-osobowym zespole</li></ol>",
			en: "<em>Portal for finding accommodation with a focus on work comfort</em><strong>Role in the project:</strong><ol><li>Creating the portal based on the UI</li><li>Communication with the client and the team</li><li>Subsequent development</li><li>Integration with REST Laravel</li><li>Working in a 3-person team</li></ol>",
		},
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Logowanie, rejestracja gospodarzy, rejestracja gości</li><li>Zmiana hasła, przypomnienie hasła, aktywacja konta, autoryzacja przez social media</li><li>Zarządzanie obiektami, oceny pobytu</li><li>Profil użytkownika, listy ulubionych obiektów</li><li>Newsletter, treści stron, artykuły</li></ol>",
			en: "<strong>Main functions:</strong><ol><li>Login, host registration, guest registration</li><li>Password change, password reminder, account activation, social media authorization</li><li>Managing properties, stay reviews</li><li>User profile, favorite properties list</li><li>Newsletter, page content, articles</li></ol>",
		},
		category: ["react", "ventus"],
		stack: ["react", "ts", "material"],
		slug: "deskou",
		inside: {
			preview: "https://deskou.pl",
			ui: "https://www.figma.com/design/pIqJaaQC1R876wEnoPvtNG/Desk-Away?node-id=587-0&t=FaNfxLogMtuKWro2-1",
		},
		last: true,
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Lista integracji wraz z zarządzaniem</li><li>Lista komunikatów, wykresy</li><li>Rozbudowane wyszukiwarki i filtrowanie</li><li>Podgląd szczegółów komunikatów i pobieranie</li></ol>",
			en: "<strong>Main functions:</strong><ol><li>Integration list with management</li><li>Message list, charts</li><li>Advanced search and filtering</li><li>Message details preview and download</li></ol>",
		},
		order: 8,
		stack: ["react", "ts", "material", "storybook", "jest"],
		name: "MERTEGRA - Diagnostic tool",
		description: {
			pl: "<em>Narzędzie diagnostyczne, monitorujące ruch komunikatów pomiędzy różnymi ERP a głównym Hubem</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie narzędzia połączonego z API NestJS</li><li>Ustalanie działania z zespołem UI/UX</li><li>Utworzenie narzędzia bez backendu</li><li>Tworzenie testów</li><li>Tworzenie Storybooka</li><li>Poprawki i dalszy rozwój</li><li>Silne typowanie z TypeScript</li></ol>",
			en: "<em>Diagnostic tool monitoring message traffic between various ERPs and the main Hub</em><strong>Role in the project:</strong><ol><li>Creating a tool connected to the NestJS API</li><li>Collaborating with the UI/UX team</li><li>Developing the tool without backend</li><li>Writing tests</li><li>Creating a Storybook</li><li>Fixing bugs and further development</li><li>Strongly typed with TypeScript</li></ol>",
		},
		category: ["react", "createit"],
		inside: {
			preview: "/mertegra",
			storybook: "/mertegra-storybook",
		},
		image: "/works/mertegra.jpg",
		slug: "mertegra",
		last: true,
	},
	{
		order: 10,
		name: "LocalBini - Platform with experience purchases",
		description: {
			pl: "<em>Portal bookingowy oferujący nabywanie doświadczeń</em><strong>Rola w projekcie:</strong><ol><li>Praca w międzynarodowym zespole, 10 osób, zgodnie z metodyką SCRUM</li><li>Rozwój istniejącej platformy</li><li>Rozbudowa Storybooka, tworzenie testów jednostkowych, naprawa błędów</li></ol>",
			en: "<em>Booking portal offering experience purchases</em><strong>Role in the project:</strong><ol><li>Working in an international team of 10 people, following SCRUM methodology</li><li>Developing the existing platform</li><li>Expanding Storybook, writing unit tests, fixing bugs</li></ol>",
		},
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Rezerwacje, oceny, przeglądanie ofert</li><li>Zarządzanie wszelkimi danymi</li><li>Panel administratora oraz panele klientów</li><li>Backend oparty na AWS</li></ol>",
			en: "<strong>Main functions:</strong><ol><li>Reservations, reviews, browsing offers</li><li>Comprehensive data management</li><li>Admin panel and customer panels</li><li>AWS-based backend</li></ol>",
		},
		category: ["react", "ventus"],
		stack: ["react", "ts", "material", "storybook"],
		image: "/works/localbini.jpg",
		slug: "localbini",
		inside: {
			preview: "https://localbini.com",
		},
		last: true,
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Rejestracja użytkowników na różnych poziomach</li><li>Uzupełnianie profilu o złożone parametry/typy usług</li><li>Powiadomienia wg kryteriów kontrahentów</li><li>Rozbudowane wyszukiwarki</li><li>Integracje: PayPal, CEiDG, TPay, VIES</li><li>Standardowe systemy płatności, w tym subskrypcje</li><li>Wersje językowe zarządzane z poziomu CMS, obsługa walut</li><li>Rozbudowany CMS do zarządzania wszelkimi aspektami (treści stron, newslettery, administracja i role, reklamy, płatności, zlecenia, logi oraz wszystko, co jest niezbędne w branży EMS do zawarcia umowy pomiędzy firmami)</li><li>Panele zalogowanych zleceniodawców i wykonawców</li></ol>",
			en: "<strong>Main functions:</strong><ol><li>User registration at various levels</li><li>Profile completion with complex parameters/service types</li><li>Notifications based on contractor criteria</li><li>Advanced search functions</li><li>Integrations: PayPal, CEiDG, TPay, VIES</li><li>Standard payment systems, including subscriptions</li><li>Language versions managed from the CMS, currency support</li><li>Comprehensive CMS for managing all aspects (page content, newsletters, administration and roles, advertisements, payments, orders, logs, and everything necessary in the EMS industry to conclude agreements between companies)</li><li>Panels for logged-in clients and contractors</li></ol>",
		},
		order: 8,
		name: "SafeRFQ - Order exchange platform for EMS",
		description: {
			pl: "<em>Giełda zleceń dla branży EMS (Electronic Manufacturing Services)</em><strong>Rola w projekcie:</strong><ol><li>Tworzenie portalu od zera w oparciu o Symfony zgodnie z dokumentacją i wytycznymi klienta</li><li>Kontakt z klientem, estymacja zadań, dalszy rozwój projektu</li></ol>",
			en: "<em>Order exchange platform for the EMS (Electronic Manufacturing Services) industry</em><strong>Role in the project:</strong><ol><li>Creating the portal from scratch using Symfony according to client documentation and guidelines</li><li>Client communication, task estimation, further project development</li></ol>",
		},
		category: ["symfony", "mediart"],
		stack: ["symfony", "mysql", "js", "scss"],
		image: "/works/saferfq.jpg",
		slug: "saferfq",
		inside: {
			docs: "https://drive.google.com/file/d/1WjuB9B0OhO-7iBRDY9y5rlapGvJfow6w/view?usp=sharing",
		},
		last: true,
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Prowadzenie i zarządzanie sprawami</li><li>Obliczanie bilansów</li><li>Generowanie wezwań</li><li>Obliczanie odsetek</li><li>Przydzielanie załączników</li><li>Dodawanie akcji do spraw</li><li>Zarządzanie dłużnikami</li><li>Zarządzanie kontrahentami</li><li>Zarządzanie kategoriami odsetek i okresami</li><li>Zarządzanie statusami spraw</li></ol>",
			en: "<strong>Main features:</strong><ol><li>Case management and handling</li><li>Balances calculation</li><li>Summons generation</li><li>Interest calculation</li><li>Attachment allocation</li><li>Action adding to cases</li><li>Debtor management</li><li>Contractor management</li><li>Interest categories and periods management</li><li>Case statuses management</li></ol>",
		},
		order: 7,
		name: "Pactum - Debt collection agency tool",

		description: {
			pl: "<em>System usprawniający pracę firmy windykacyjnej</em>",
			en: "<em>A system that streamlines the work of a debt collection company</em>",
		},
		category: ["symfony", "mediart"],
		stack: ["symfony", "mysql", "scss", "js"],
		image: "/works/pactumwindykacja.jpg",
		slug: "pactum-windykacja",
		inside: {
			docs: "https://docs.google.com/document/d/1I9qdYkCj_FAG3aUvCyrOwTo39_axka4O/edit?rtpof=true",
		},
		last: true,
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Profile graczy</li><li>Różne wykresy i obliczenia</li><li>Historia postępów wszystkich graczy</li><li>Grupy połączone w klany</li></ol>",
			en: "<strong>Main functions:</strong><ol><li>Player profiles</li><li>Various charts and calculations</li><li>Progress history of all players</li><li>Groups combined into clans</li></ol>",
		},
		order: 7,

		stack: ["react", "symfony", "mysql", "lemp", "bash"],
		name: "WotFans - World of Tanks Statistics Platform",
		description: {
			pl: "<em>Portal dla graczy World of Tanks</em><strong>Rola w projekcie:</strong><ol><li>Tworzenie aplikacji frontendowej</li><li>Tworzenie API w Symfony</li><li>Integracja z API Wargaming</li><li>Analiza danych z API twórcy gry</li><li>Konfiguracja i zarządzanie VPS</li></ol>",
			en: "<em>Portal for World of Tanks players</em><strong>Role in the project:</strong><ol><li>Developing the frontend application</li><li>Creating the API with Symfony</li><li>Integration with the Wargaming API</li><li>Data analysis from the game's API</li><li>VPS configuration and management</li></ol>",
		},
		category: ["react", "symfony", "freelancer"],
		image: "/works/wotfans.jpg",
		slug: "wotfansapi",
		inside: {
			github_backend: "https://github.com/stopek/symfony-wargaming-api",
			github_front: "https://github.com/stopek/react-wotfans",
		},
		last: true,
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Przeglądanie ofert domków oraz ich rezerwacje</li><li>Kalendarz dostępności</li><li>Strony tekstowe, blog</li></ol>",
			en: "<strong>Main functions:</strong><ol><li>Browsing cottage offers and making reservations</li><li>Availability calendar</li><li>Text pages, blog</li></ol>",
		},
		order: 6,
		name: "Kaszubski Zakątek - Kashubia cottage booking",
		description: {
			pl: "<em>Strona z rezerwacjami domków na Kaszubach</em><strong>Rola w projekcie:</strong><ol><li>Tworzenie strony zgodnie z dostarczonym UI</li><li>Wdrożenie autorskiego CMS opartego na Symfony</li><li>Kontakt z klientem</li><li>Poprawki oraz dalszy rozwój strony</li></ol>",
			en: "<em>Holiday cottage booking website in Kashubia</em><strong>Role in the project:</strong><ol><li>Creating the website according to the provided UI</li><li>Implementing a custom CMS based on Symfony</li><li>Client communication</li><li>Bug fixes and further website development</li></ol>",
		},
		category: ["symfony", "freelancer"],
		stack: ["symfony", "mysql", "scss", "js"],
		image: "/works/kaszubskizakatek.jpg",
		slug: "kaszubski-zaktek",
		inside: {
			preview: "https://kaszubskizakatek.pl",
			ui: "https://www.figma.com/design/3KyLbfzU5xtzUAfTadFO5E/index?node-id=65-137&t=yyBxjiMVjQEMi5Dq-1",
		},
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Produkty, zamówienia, karta produktu, wyszukiwarka</li><li>Proces zakupowy, koszyk z etapami</li><li>Płatności, panel klienta</li><li>Logowanie, rejestracja, zmiana hasła</li></ol>",
			en: "<strong>Main features:</strong><ol><li>Products, orders, product details, search functionality</li><li>Checkout process, step-by-step shopping cart</li><li>Payment methods, customer panel</li><li>Login, registration, password management</li></ol>",
		},
		order: 8,
		stack: ["react", "ts", "redux", "css", "html", "material", "styled"],
		name: "Project Gadgets - Store with Gadgets",
		description: {
			pl: "<em>Sklep internetowy firmy sprzedającej gadżety</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie sklepu zgodnie z dostarczonym UI</li><li>Integracja z REST API w Laravel</li><li>Poprawki błędów oraz dalszy rozwój</li></ol>",
			en: "<em>An e-commerce store selling gadgets</em><strong>Role in the project:</strong><ol><li>Building the store from scratch based on provided UI</li><li>Integration with Laravel REST API</li><li>Bug fixes and ongoing development</li></ol>",
		},
		category: ["react", "ventus"],
		image: "/works/projektgadzet.jpg",
		slug: "projekt-gadet",
		inside: {
			preview: "https://projekt-gadzet.pl/",
			ui: "https://drive.google.com/drive/u/0/folders/1VcVj77g6pB5Psp9m9WOwlLzpRH1NEq64",
		},
		last: true,
	},
	{
		order: 8,
		name: "createIT - Recruitment Task",
		description: {
			pl: "<em>Zadanie rekrutacyjne do firmy, z którą miałem przyjemność współpracować<small>Projekt prezentowany jako przykład stosowanego przeze mnie flow GitHuba</small></em>",
			en: "<em>Recruitment task for a company I had the pleasure to collaborate with <small>Project showcased as an example of my GitHub workflow</small></em>",
		},
		category: ["react", "createit"],
		stack: ["react", "ts", "styled"],
		image: "/works/createit.jpg",
		slug: "createit-recruitment-task",
		inside: {
			preview: "/taskcreateit",
			github: "https://github.com/stopek/task-create-it",
		},
		last: true,
	},
	{
		order: 4,
		name: "SalonObuwniczy - footwear store",
		description: {
			pl: "",
			en: 'The "Salon Obuwniczy" project is an online store of a company selling footwear. My role involved working on an existing tool/store created by another company, developing the store, and making improvements.',
		},
		category: ["rest", "ventus"],
		stack: ["php", "mysql", "css", "html", "legacy"],
		image: "/works/salonobuwniczy.jpg",
		slug: "salon-obuwniczy",
		inside: {
			preview: "https://www.salonobuwniczy.pl",
		},
	},
	{
		order: 7,
		name: "Templates HTML/CSS/JS",
		description: {
			pl: "<em>Zbiór realizacji opartych na tym samym stosie technologicznym HTML/CSS/JS</em><strong>Realizacje:</strong><ol><li>Bank Spółdzielczy - Akcja Promocyjna</li><li>BIOLINE - Manufaktura Kosmetyków</li><li>Dominplus - Dom Nieruchomości</li><li>GrantStudio - Projektant Wnętrz</li><li>Pracownia Florystyczna - Kwiaty każdego dnia</li><li>POLTRADE - Producent Żywic</li><li>PożyczkaFM - Usługi Finansowe</li><li>Pożyczkowo - Usługi Finansowe</li><li>Salon Obuwniczy - Szablon Allegro</li></ol>",
			en: "<em>Collection of projects built on the same technology stack: HTML/CSS/JS</em><strong>Projects:</strong><ol><li>Bank Spółdzielczy - Promotional Campaign</li><li>BIOLINE - Cosmetics Manufacturing</li><li>Dominplus - Real Estate Agency</li><li>GrantStudio - Interior Designer</li><li>Pracownia Florystyczna - Daily Flowers</li><li>POLTRADE - Resin Manufacturer</li><li>PożyczkaFM - Financial Services</li><li>Pożyczkowo - Financial Services</li><li>Salon Obuwniczy - Allegro Template</li></ol>",
		},
		category: ["ventus", "rest"],
		stack: ["html", "css", "js", "jquery"],
		image: "/works/szablony.jpg",
		slug: "szablony-htmlcssjs",
		inside: {
			preview: "/bioline",
			github: "https://github.com/stopek/html-projects",
		},
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Przegląd ofert i rezerwacja</li><li>Strony tekstowe, blog, formularz kontaktowy</li></ol>",
			en: "<strong>Main features:</strong><ol><li>Browsing offers and booking</li><li>Text pages, blog, contact form</li></ol>",
		},
		order: 7,
		name: "Love Camper - platform with camper rental",
		description: {
			pl: "<em>Strona oferująca wynajem kamperów</em><strong>Rola w projekcie:</strong><ol><li>Tworzenie strony bez dostarczonego UI</li><li>Implementacja autorskiego CMS w Symfony</li><li>Komunikacja z klientem (od początku do końca)</li></ol>",
			en: "<em>Website offering camper rental services</em><strong>Role in the project:</strong><ol><li>Building the website without provided UI</li><li>Implementing a custom Symfony-based CMS</li><li>End-to-end client communication</li></ol>",
		},
		category: ["symfony", "freelancer"],
		stack: ["symfony", "mysql", "scss", "js", "html"],
		image: "/works/pokochajkampera.jpg",
		slug: "pokochaj-kampera",
		inside: {
			preview: "https://pokochajkampera.pl/",
		},
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Lista obrazów, vouchery</li><li>Proces zakupowy</li><li>Wystawianie i zarządzanie obrazami</li><li>Strony tekstowe, aktualności</li><li>Profile artystów</li><li>Panel zalogowanego klienta</li><li>Tworzenie portfolio artysty</li><li>Logowanie, rejestracja, przypominanie hasła</li></ol>",
			en: "<strong>Main features:</strong><ol><li>List of artworks, vouchers</li><li>Purchase process</li><li>Artwork submission and management</li><li>Text pages, news updates</li><li>Artist profiles</li><li>Logged-in client panel</li><li>Artist portfolio creation</li><li>Login, registration, password reminder</li></ol>",
		},
		order: 7,
		stack: ["react", "material", "styled"],
		name: "MKART - Online art gallery",
		description: {
			pl: "<em>Internetowa galeria sztuki</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie aplikacji zgodnie z dostarczonym UI</li><li>Integracja z REST API Laravel</li><li>Kontakt z klientem, wdrażanie poprawek</li></ol>",
			en: "<em>Online art gallery</em><strong>Role in the project:</strong><ol><li>Developing the application according to UI specifications</li><li>Integration with Laravel REST API</li><li>Client communication, implementing adjustments</li></ol>",
		},
		category: ["react", "ventus"],
		image: "/works/mkartgallery.jpg",

		slug: "mkart-gallery",
		inside: {
			ui: "https://drive.google.com/drive/u/0/folders/1cG_6lSl3QtR-ZN1qX7nKIGauO4dZIy7u",
		},
	},
	{
		order: 7,
		name: "CentOS 8 - VPS management tool",
		description: {
			pl: "<em>Narzędzie usprawniające pracę z serwerami VPS opartymi na CentOS<small>Instalator umożliwia zarządzanie serwerem poprzez nawigację po menu i submenu za pomocą strzałek, przeprowadzając proces weryfikacji zależności oraz pobierania i zapisywania danych</small></em><strong>Główne funkcje:</strong><ol><li>Instalacja GIT, YARN, CLI Symfony, Composer</li><li>Instalacja i konfiguracja Nextcloud</li><li>Instalacja Cloudflare SSL</li><li>Szczegóły zainstalowanych usług</li><li>Generowanie i zmiana kluczy SSH</li><li>Instalacja NGINX, MySQL oraz PhpMyAdmin</li><li>Utworzenie konfiguracji dla projektów Symfony</li><li>Instalacja PHP w różnych wersjach oraz możliwość dodawania rozszerzeń</li><li>Integracja funkcji (np. konfiguracja Symfony + Instalacja SSL)</li></ol>",
			en: "<em>Tool that enhanced my work with CentOS-based VPS servers<small>The installer allowed server management through navigation menus and submenus using arrows, guiding through dependency verification, data retrieval, and storage</small></em><strong>Main features:</strong><ol><li>Installation of GIT, YARN, CLI Symfony, Composer</li><li>Installation and configuration of Nextcloud</li><li>Cloudflare SSL installation</li><li>Details of installed services</li><li>SSH key generation and modification</li><li>Installation of NGINX, MySQL, and PhpMyAdmin</li><li>Configuration setup for Symfony projects</li><li>PHP installation with version control and extension management</li><li>Mutual feature integration (e.g., Symfony configuration + SSL installation)</li></ol>",
		},
		category: ["freelancer", "rest"],
		stack: ["bash", "centos"],
		slug: "centos-8-installator",
		inside: {
			github: "https://github.com/stopek/centos8-installator",
			docs: "https://drive.google.com/drive/folders/1O6IrhV9hEKvNyTSAljH8y6FHz2jfJAFQ?usp=sharing",
		},
	},
	{
		order: 7,
		stack: ["python"],
		name: "GreenHouse - Accelerating Plant Growth",
		image: "/works/greenhouse.jpg",
		description: {
			pl: "<em>Hobbystyczny projekt szklarni przyspieszającej wzrost roślin</em><strong>Wykonane prace:</strong><ol><li>Oprogramowanie układu ESP32-C zgodnie z opisem dostępnym w sekcji 'MULTIMEDIA'</li><li>Utworzenie narzędzia umożliwiającego zdalne zarządzanie szklarnią</li><li>Zmontowanie półki z paneli podłogowych oraz prętów z Castoramy</li><li>Utworzenie listw z profili mlecznych z Castoramy oraz taśmy RGB</li><li>Montaż całości i dalsza hodowla pomidorów i papryczek</li></ol>",
			en: "<em>Hobby greenhouse project accelerating plant growth</em><strong>Completed tasks:</strong><ol><li>Programming ESP32-C system as described in the 'MULTIMEDIA' section</li><li>Creation of a tool enabling remote greenhouse management</li><li>Assembly of shelves from floor panels and rods from Castorama</li><li>Creation of strips from milky profiles from Castorama and RGB tape</li><li>Assembly of the entire structure and further cultivation of tomatoes and peppers</li></ol>",
		},
		category: ["freelancer", "rest"],
		slug: "greenhouse",
		inside: {
			github: "https://github.com/stopek/greenhouse-python",
			multimedia:
				"https://drive.google.com/drive/folders/1O6IrhV9hEKvNyTSAljH8y6FHz2jfJAFQ?usp=sharing",
		},
	},
	{
		order: 3,
		name: "Witold Drozdowski - Law Company",
		description: {
			pl: "<em>Strona wizytówkowa kancelarii prawnej Witolda Drozdowskiego.</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie strony bez dostarczonego UI</li><li>Kontakt z klientem</li><li>Realizacja od początku do końca (end-to-end)</li></ol>",
			en: "<em>Website for Witold Drozdowski's law firm.</em><strong>Role in the project:</strong><ol><li>Developed the website without provided UI</li><li>Client communication</li><li>End-to-end implementation</li></ol>",
		},
		category: ["code_igniter", "freelancer"],
		stack: ["code_igniter", "php", "mysql", "scss", "html"],
		image: "/works/kancelaria.jpg",
		slug: "kancelaria-prawna",
		inside: {
			preview: "https://kancelariadrozdowski.pl/",
		},
	},
	{
		order: 7,
		name: "PlantCare - Houseplant Care",
		description: {
			pl: "Plantcare to mój pierwszy projekt w Arduino (ESP32), który miał badać jakość nawodnienia roślin, temperaturę wewnątrz i na zewnątrz gleby oraz nasłonecznienie. Celem było stworzenie urządzenia monitorującego rośliny, podobnego do tego sprzedawanego na Allegro.",
			en: "Plantcare is my first Arduino (ESP32) project aimed at examining the quality of plant watering, soil temperature inside and outside, and sunlight. The goal was to create a plant monitoring device similar to those sold on Allegro.",
		},
		category: ["freelancer"],
		stack: ["cpp"],
		image: "/works/plantcare.jpg",
		slug: "plantcare",
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Tworzenie i zarządzanie klientami</li><li>Zarządzanie zadaniami do wykonania</li><li>Chat klient-pracownik</li><li>Możliwość przekazywania załączników</li><li>Tworzenie zadań przez klientów</li><li>Zarządzanie sektorami</li><li>Poziomy autoryzacji (administrator, klienci)</li></ol>",
			en: "<strong>Main features:</strong><ol><li>Client creation and management</li><li>Task management</li><li>Client-worker chat</li><li>Attachment handling</li><li>Client task creation</li><li>Sector management</li><li>Authorization levels (administrator, clients)</li></ol>",
		},
		order: 6,
		name: "Aspert - Job Management System",
		description: {
			pl: "<em>System usprawniający pracę firmy IT realizującej swoje usługi.</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie systemu zgodnie z przekazanymi wytycznymi</li><li>Kontakt z klientem, wprowadzanie zmian oraz poprawki</li></ol>",
			en: "<em>System improving the workflow of an IT company providing its services.</em><strong>Role in the project:</strong><ol><li>Development of the system according to provided guidelines</li><li>Client communication, implementing changes and fixes</li></ol>",
		},
		category: ["symfony", "mediart"],
		stack: ["symfony", "mysql", "scss", "js"],
		slug: "esa",
	},
	{
		order: 7,
		name: "Hanplast Energy - Photovoltaic Company",
		description: {
			pl: "<em>Strona wizytówkowa firmy fotowoltaicznej</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie strony zgodnie z dostarczonym UI</li><li>Kontakt z klientem</li><li>Wdrożenie firmowego CMS do zarządzania stroną</li><li>Implementacja poprawek</li></ol>",
			en: "<em>Website for a photovoltaic company</em><strong>Role in the project:</strong><ol><li>Developed the website according to provided UI</li><li>Client communication</li><li>Implemented a corporate CMS for site management</li><li>Implemented fixes and updates</li></ol>",
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "scss", "css", "js", "jquery", "php", "mysql"],
		image: "/works/hanplast.jpg",
		slug: "hanplast-energy",
		inside: {
			preview: "https://hanplast.energy",
		},
	},
	{
		order: 6,
		name: "Silky24 - Store with wood saws",
		description: {
			pl: "<em>Sklep firmy oferującej piły do drewna</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie sklepu zgodnie z dostarczonym UI</li><li>Kontakt z klientem</li><li>Wdrożenie firmowego CMS</li></ol>",
			en: "<em>Online store for a company offering wood saws</em><strong>Role in the project:</strong><ol><li>Created the store based on provided UI designs</li><li>Client communication</li><li>Implemented company's CMS</li></ol>",
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "scss", "js"],
		image: "/works/silky24.jpg",
		slug: "silky24",
		inside: {
			archive: "https://web.archive.org/web/20180515005059/http://www.silky24.pl:80/",
		},
	},
	{
		order: 6,
		name: "Zooleszcz - Order Printer",
		description: {
			pl: "<em>Narzędzie dla firmy Zooleszcz, które usprawniało proces produkcji<small>Program na Windows nasłuchiwał nowych realizacji a następnie na drukarce do naklejek drukował odpowiednio przygotowane naklejki</small></em><strong>Rola w projekcie:</strong><ol><li>Utworzenie narzędzia na Windows korzystającego z API Panelu</li><li>Utworzenie CMS do zdalnego zarządzania realizacjami</li><li>Wystawienie API dla narzędzia do wydruku</li><li>Integracja Panelu z istniejącym sklepem firmy</li><li>Kontakt z klientem</li></ol>",
			en: "<em>Tool for Zooleszcz company that optimized the production process<small>The Windows program listened for new orders and printed stickers accordingly on a label printer</small></em><strong>Role in the project:</strong><ol><li>Developed a Windows tool using the Panel's API</li><li>Created a CMS for remote management of orders</li><li>Exposed an API for the printing tool</li><li>Integrated the Panel with the company's existing store</li><li>Client communication</li></ol>",
		},
		category: ["freelancer", "rest"],
		stack: ["csharp", "php"],
		image: "/works/printorder.jpg",
		slug: "drukarka-naklejek-zamwie",
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Zarządzanie kursami, klasami oraz uczestnikami</li><li>Przeprowadzanie kursów</li><li>Zarządzanie kalendarzami, komentarzami, wiadomościami</li><li>Logika autoryzacyjna</li><li>Proces zamawiania kursów oraz płatności</li><li>Strony tekstowe, blog</li></ol>",
			en: "<strong>Main features:</strong><ol><li>Management of courses, classes, and participants</li><li>Course conducting</li><li>Management of calendars, comments, messages</li><li>Authorization logic</li><li>Course ordering and payment process</li><li>Text pages, blog</li></ol>",
		},
		order: 6,
		stack: ["react", "redux", "material", "styled", "html"],
		name: "Melpomeny - Platform for Playwrights",
		description: {
			pl: "<em>Platforma z kursami dla dramatopisarzy</em><strong>Rola w projekcie:</strong><ol><li>Implementacja narzędzia zgodnie z dostarczonym interfejsem użytkownika (UI) oraz specyfikacją</li><li>Integracja z API REST w Laravelu</li></ol>",
			en: "<em>A platform with courses for playwrights</em><strong>Role in the project:</strong><ol><li>Development of the tool according to the provided UI and specifications</li><li>Integration with Laravel REST API</li></ol>",
		},
		category: ["react", "ventus"],
		image: "/works/dramatopisarze.jpg",

		slug: "klub-melpomeny",
		inside: {
			ui: "https://drive.google.com/drive/u/2/folders/1YqTKqHguxUrBgY7hrUEzuOsTN-EOjDpP",
		},
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Lista kursów, wyszukiwarka, dodawanie do ulubionych</li><li>Proces zakupowy, płatności online</li><li>Logowanie, rejestracja, konta premium</li><li>System wiadomości</li><li>Mapa z lokalizacją innych obiektów (np. gastronomia)</li><li>Lista znajomych</li></ol>",
			en: "<strong>Main features:</strong><ol><li>List of courses, search functionality, adding to favorites</li><li>Purchase process, online payments</li><li>Login, registration, premium accounts</li><li>Messaging system</li><li>Map showing other locations (etc. restaurants)</li><li>Friends list</li></ol>",
		},
		order: 6,
		name: "KURSBOX - Platform with courses",
		description: {
			pl: "<em>Portal oferujący sprzedaż kursów</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie portalu zgodnie z częściowo dostarczonym UI</li><li>Integracja z REST API Laravel</li><li>Poprawa błędów</li></ol>",
			en: "<em>Platform offering course sales</em><strong>Role in the project:</strong><ol><li>Created the portal based on partially provided UI designs</li><li>Integration with Laravel REST API</li><li>Bug fixes</li></ol>",
		},
		category: ["react", "ventus"],
		stack: ["react", "redux", "styled", "scss", "html"],
		image: "/works/kursbox.jpg",

		slug: "kursbox",
		inside: {
			ui: "https://drive.google.com/drive/folders/1OPoGnDv3avXX63IHIChTm5Dlp0Kh-75-?usp=sharing",
		},
	},
	{
		about: {
			pl: "<strong>Funkcje:</strong><ol><li>Przeglądanie i wyszukiwanie noclegów</li><li>Zgłaszanie noclegów i pytania do obiektów</li><li>Przypisywanie noclegów duchownym</li><li>Rejestracja, logowanie, przypominanie hasła, autoryzacja przez Facebook i Google</li><li>Rezerwacje, ulubione, wydarzenia</li><li>Tworzenie pocztówek powiązanych z obiektami</li><li>CMS dla administratora, właścicieli obiektów i gości</li></ol>",
			en: "<strong>Features:</strong><ol><li>Browsing and searching for accommodations</li><li>Reporting accommodations and asking questions</li><li>Assigning accommodations to clergy</li><li>Registration, login, password reminder, Facebook and Google authorization</li><li>Reservations, favorites, events</li><li>Creating postcards linked to accommodations</li><li>CMS for admin, facility owners, and guests</li></ol>",
		},
		order: 6,
		name: "Booking system for pilgrims",
		category: ["symfony", "mediart"],
		stack: ["symfony"],
		description: {
			pl: "<em>System rezerwacyjny dla pielgrzymów</em><strong>Rola:</strong><ol><li>Tworzenie projektu zgodnie z wymaganiami</li><li>Wdrożenie CMS opartego na Symfony</li><li>Kontakt z klientem</li></ol>",
			en: "<em>Booking system for pilgrims</em><strong>Role in the project:</strong><ol><li>Project development according to requirements</li><li>Implementing a CMS based on Symfony</li><li>Client communication</li></ol>",
		},
		slug: "nocleg-pielgzyma",
	},
	{
		order: 6,
		name: "Social-Ninja - SEO Company Site",
		description: {
			pl: "<em>Strona wizytówkowa firmy zajmującej się pozycjonowaniem stron</em><strong>Rola w projekcie:</strong><ol><li>Tworzenie projektu graficznego (Photoshop)</li><li>Implementacja zgodnie z projektem (HTML/CSS/JS/PHP)</li><li>Kontakt z klientem</li><li>Realizacja end-to-end</li></ol>",
			en: "<em>Single-page website for an SEO company</em><strong>Role in the project:</strong><ol><li>Graphic design creation (Photoshop)</li><li>Implementation according to the design (HTML/CSS/JS/PHP)</li><li>Client communication</li><li>End-to-end project execution</li></ol>",
		},
		category: ["rest", "freelancer"],
		stack: ["html", "css", "php", "photoshop"],
		image: "/works/socialninja.jpg",
		slug: "social-ninja",
	},
	{
		order: 6,
		name: "Belma - Product System",
		description: {
			pl: "<em>System produktowy Belma</em><strong>Rola w projekcie:</strong><ol><li>Odświeżenie strony na podstawie dostarczonego UI, bazując na poprzedniej wersji</li></ol>",
			en: "<em>Belma product system</em><strong>Role in the project:</strong><ol><li>Refreshing the website based on the provided UI, building upon the previous version</li></ol>",
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "scss", "js", "legacy"],
		image: "/works/belma.jpg",

		slug: "belma",
		inside: {
			archive: "https://web.archive.org/web/20221206214915/https://belma.pl/",
		},
	},
	{
		about: {
			pl: "<strong>Główne funkcje:</strong><ol><li>Przeglądanie i wyszukiwanie wydarzeń</li><li>Panel zalogowanego organizatora i klienta</li><li>Płatności z podziałem na pakiety</li><li>Rezerwacje, kalendarze</li><li>Rejestracja, logowanie</li></ol>",
			en: "<strong>Features:</strong><ol><li>Browsing and searching events</li><li>Logged-in organizer and client panel</li><li>Payments divided into packages</li><li>Reservations, calendars</li><li>Registration, login</li></ol>",
		},
		order: 5,
		name: "Besist - internet entertainment hub",
		description: {
			pl: "<strong>Rola w projekcie:</strong><ol><li>Praca w zespole składającym się z 3 osób</li><li>Utworzenie portalu zgodnie z dostarczonym UI</li><li>Poprawki błędów</li></ol>",
			en: "<strong>Role in the project:</strong><ol><li>Worked in a team of 3 people</li><li>Created the portal based on provided UI designs</li><li>Bug fixes</li></ol>",
		},
		category: ["react", "ventus"],
		stack: ["react", "js"],
		image: "/works/besist.jpg",
		slug: "besist-internetowe-centrum-rozrywki",
		inside: {
			preview: "https://besist.com",
		},
	},
	{
		order: 5,
		name: "Hypertectum - Waterproofing systems",
		description: {
			pl: "<em>Sklep firmy oferującej profesjonalne systemy hydroizolacyjne</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie sklepu w oparciu o dostarczone UI</li><li>Kontakt z klientem, estymacja zadań</li><li>Wdrożenie firmowego CMS</li></ol>",
			en: "<em>Store for a company offering professional waterproofing systems</em><strong>Role in the project:</strong><ol><li>Created the store based on provided UI</li><li>Client communication, task estimation</li><li>Implemented company's CMS</li></ol>",
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "scss", "css", "js", "jquery", "php", "mysql"],
		image: "/works/hypertectum.jpg",
		slug: "hypertectum",
		inside: {
			preview: "https://hypertectum.pl/",
		},
	},
	{
		order: 5,
		name: "Financial Platform with loans",
		description: {
			pl: "<em>Portal finansowy oferujący pożyczki finansowe</em><strong>Rola w projekcie:</strong><ol><li>Rozwój istniejącej platformy</li><li>Implementacja zmian zgodnie z wymaganiami biznesowymi</li><li>Bezpośredni kontakt z klientem</li><li>Refaktoryzacja kodu oraz poprawki</li></ol>",
			en: "<em>Financial portal offering financial loans</em><strong>Role in the project:</strong><ol><li>Development of the existing platform</li><li>Implementation of changes according to business guidelines</li><li>Direct client communication</li><li>Code refactoring and fixes</li></ol>",
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "mysql", "php", "html", "js", "legacy"],
		image: "/works/platformafinansowa.jpg",
		slug: "platforma-finansowa",
		inside: {
			preview: "https://www.platformafinansowa.pl/",
		},
	},
	{
		order: 5,
		name: "RastSC - Fishing Wholesaler",
		description: {
			pl: "<em>Sklep hurtowni RastSC</em><strong>Rola w projekcie:</strong><ol><li>Stworzenie odświeżonej wersji sklepu na podstawie dostarczonego UI</li><li>Refaktoryzacja istniejącego kodu</li></ol>",
			en: "<em>RastSC wholesale store</em><strong>Role in the project:</strong><ol><li>Created a refreshed version of the store based on provided UI</li><li>Refactored existing codebase</li></ol>",
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "css", "js", "php", "mysql", "legacy"],
		image: "/works/rastsc.jpg",
		slug: "rastsc",
		inside: {
			preview: "https://www.rastsc.pl",
		},
	},
	{
		about: {
			pl: "<strong>Funkcjonalności:</strong><ol><li>Zarządzanie profilem organizacji</li><li>Łączenie użytkownika z organizacją</li><li>Płatności online</li><li>Lista oraz wyszukiwarka organizacji</li><li>Rejestracja, logowanie</li></ol>",
			en: "<strong>Features:</strong><ol><li>Organization profile management</li><li>User linking with organizations</li><li>Online payments</li><li>List and search functionality for organizations</li><li>Registration, login</li></ol>",
		},
		order: 5,
		stack: ["react", "js", "ts", "styled", "scss", "html"],
		name: "OPP - Public Benefit Organizations",
		description: {
			pl: "<em>Platforma zrzeszająca organizacje pożytku publicznego</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie strony zgodnie z dostarczonym UI</li><li>Poprawa błędów</li></ol>",
			en: "<em>Platform for aggregating public benefit organizations</em><strong>Role in the project:</strong><ol><li>Created the website according to provided UI designs</li><li>Bug fixes</li></ol>",
		},
		category: ["react", "ventus"],
		image: "/works/organizacjepozytku.jpg",

		slug: "organizacje-poytku-publicznego",
		inside: {
			ui: "https://drive.google.com/drive/u/2/folders/1C9Ys6Bl-NYVQkniuJ4Y6XmuduJJQ-73a",
		},
	},
	{
		about: {
			pl: "<strong>Funkcje:</strong><ol><li>Tworzenie i przeglądanie ofert pracy</li><li>Podawanie stawek przez pracowników</li><li>Wybieranie ofert przez pracodawców</li><li>Komunikacja między zleceniodawcą a zleceniobiorcą (chat, notyfikacje)</li><li>Dodawanie terminów, załączników, statusów umów i płatności</li><li>Oceny pracodawcy i pracownika</li><li>Przechowywanie i przekazywanie pieniędzy po ukończeniu prac</li><li>Rejestracja, logowanie, wyszukiwarka</li><li>Weryfikacje pracodawcy i pracownika</li><li>Obsługa wielu języków i walut</li><li>Tworzenie stron i profili pracowników</li></ol>",
			en: "<strong>Features:</strong><ol><li>Creating and browsing job offers</li><li>Workers specifying their rates</li><li>Employers selecting offers</li><li>Communication between employers and workers (chat, notifications)</li><li>Adding deadlines, attachments, contract and payment statuses</li><li>Employer and worker ratings</li><li>Holding and transferring funds after work completion</li><li>Registration, login, search</li><li>Employer and worker verifications</li><li>Support for multiple languages and currencies</li><li>Creating worker pages and profiles</li></ol>",
		},
		order: 5,
		stack: ["react", "redux", "bootstrap", "styled", "scss", "socket", "html"],
		name: "Dwa Etaty - Job Marketplace",
		description: {
			pl: "<em>2etaty.pl – internetowa giełda pracy</em><strong>Rola:</strong><ol><li>Projektowanie i implementacja funkcji</li><li>Tworzenie interfejsów użytkownika</li><li>Komunikacja z klientem</li></ol>",
			en: "<em>2etaty.pl – online job marketplace</em><strong>Role in the project:</strong><ol><li>Designing and implementing features</li><li>Creating user interfaces</li><li>Client communication</li></ol>",
		},
		category: ["react", "ventus"],
		image: "/works/2etaty.jpg",
		slug: "dwa-etaty",
		inside: {
			ui: "https://drive.google.com/drive/u/2/folders/1oDgsEflTFaoAYkcocdK9Ke6bJU3ZxUGi",
			archive: "https://web.archive.org/web/20211125194932/https://2etaty.pl/",
		},
	},
	{
		order: 5,
		name: "SkrawMech - CNC services",
		description: {
			pl: "<em>Strona wizytówkowa firmy oferującej usługi CNC</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie strony zgodnie z dostarczonym UI</li><li>Kontakt z klientem</li><li>Wdrożenie firmowego CMS do zarządzania treścią</li><li>Wdrażanie poprawek</li></ol>",
			en: "<em>Single-page website for a company offering CNC services</em><strong>Role in the project:</strong><ol><li>Created the website according to provided UI</li><li>Client communication</li><li>Implemented company's CMS for content management</li><li>Implemented revisions</li></ol>",
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "php", "mysql", "scss", "html"],
		image: "/works/skrawmech.jpg",
		slug: "skrawmech",
		inside: {
			archive: "https://web.archive.org/web/20211224232936/https://skraw-mech.com.pl/",
		},
	},
	{
		order: 5,
		stack: ["code_igniter", "html", "css", "js", "jquery", "php", "jquery", "mysql"],
		name: "CitySpace - Small Architecture",
		description: {
			pl: "<em>System produktowy dla firmy specjalizującej się w ogrodzeniach i małej architekturze</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie strony zgodnie z dostarczonym UI</li><li>Wdrożenie firmowego CMS do zarządzania treściami tekstowymi</li><li>Kontakt z klientem</li></ol>",
			en: "<em>Product system for a company specializing in fences and small architecture</em><strong>Role in the project:</strong><ol><li>Created the website based on provided UI designs</li><li>Implemented the company's CMS to manage textual content</li><li>Client liaison</li></ol>",
		},
		category: ["code_igniter", "mediart"],
		image: "/works/cityspace.jpg",

		slug: "cityspace",
		inside: {
			archive: "https://web.archive.org/web/20220325003227/https://www.cityspace.com.pl/",
		},
	},
	{
		order: 5,
		name: "SprezMot - Manufacturing Springs ",
		description: {
			pl: "<em>Strona produktowa firmy produkującej sprężyny</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie strony zgodnie z dostarczonymi UI</li></ol>",
			en: "<em>Product page for a company manufacturing springs</em><strong>Role in the project:</strong><ol><li>Created the page according to provided UI designs</li></ol>",
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "css", "jquery", "php", "mysql"],
		image: "/works/sprezmot.jpg",
		slug: "sprezmot",
		inside: {
			archive: "https://web.archive.org/web/20220817064434/https://sprez-mot.pl/",
		},
	},
	{
		about: {
			pl: "<strong>Funkcjonalności:</strong><ol><li>Importowanie produktów z plików XML</li><li>Przeglądanie i porównywanie produktów</li><li>Analiza dużej ilości rekordów</li><li>Optymalizacja wydajności</li></ol>",
			en: "<strong>Features:</strong><ol><li>Importing products from XML files</li><li>Viewing and comparing products</li><li>Analyzing large amounts of records</li><li>Performance optimization</li></ol>",
		},
		name: "Sellie - Google Promotion Tool",
		description: {
			pl: "<em>Narzędzie, którego zadadaniem był import produktów z plików XML oraz ich porównywarka/przeglądarka</em><strong>Rola w projekcie:</strong><ol><li>Ustalanie wymagań z klientem</li><li>Wprowadzanie poprawek i ulepszeń</li><li>Tworzenie nowych funkcji</li></ol>",
			en: "<em>The tool importing products from XML files and their comparison/viewing tool</em><strong>Role in the project:</strong><ol><li>Defining requirements with the client</li><li>Implementing fixes and improvements</li><li>Creating new features</li></ol>",
		},
		category: ["code_igniter", "freelancer"],
		stack: ["code_igniter", "php", "mysql", "scss", "html"],
		image: "/works/sellie.jpg",
		slug: "sellie",
		inside: {
			preview: "https://sellie.pl/",
		},
	},
	{
		image: "/works/okuchnie.jpg",
		name: "Custom-made kitchen",
		description: {
			pl: "<em>Strona produktowa firmy tworzącej meble na wymiar</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie projektu (Photoshop)</li><li>Utworzenie strony</li><li>Realizacja end-to-end, kontakt z klientem</li></ol>",
			en: "<em>Product page for a custom furniture company</em><strong>Role in the project:</strong><ol><li>Creating the design (Photoshop)</li><li>Developing the website</li><li>End-to-end implementation, client communication</li></ol>",
		},
		category: ["rest", "freelancer"],
		stack: ["php", "html", "css", "photoshop"],
		slug: "okuchnie",
		inside: {
			preview: "http://www.okuchnie.pl/",
		},
	},
	{
		name: "Wirtu - Cashback Store",
		description: {
			pl: "<em>Portal dla sprzedawców oferujących swoje produkty z cashbackiem</em><strong>Rola w projekcie:</strong><ol><li>Wsparcie zespołu, wdrażanie poprawek</li><li>Tworzenie nowych interfejsów użytkownika i landing pages</li></ol>",
			en: "<em>Portal for sellers offering their products with cashback</em><strong>Role in the project:</strong><ol><li>Supporting the team, implementing fixes</li><li>Creating new user interfaces and landing pages</li></ol>",
		},
		category: ["rest", "ventus"],
		stack: ["php", "css", "html", "legacy"],
		image: "/works/wirtu.jpg",
		slug: "wirtu",
		inside: {
			archive: "https://web.archive.org/web/20161031073805/https://wirtu.pl/",
		},
	},
	{
		about: {
			pl: "<strong>Funkcjonalności:</strong><ol><li>Przeglądanie asortymentu</li><li>Wybór lokalizacji kiosku</li></ol>",
			en: "<strong>Features:</strong><ol><li>Browsing the assortment</li><li>Selecting the kiosk location</li></ol>",
		},
		name: "Confectionery Infokiosk",
		description: {
			pl: "<em>Kiosk prezentujący asortyment cukierni<small>Program pod Windows zainstalowany na PC Stick komunikuje się z wystawionym API</small></em><strong>Rola w projekcie:</strong><ol><li>Utworzenie programu na Windows</li><li>Utworzenie CMS do zarządzania danymi na wszystkich ekranach</li></ol>",
			en: "<em>Kiosk displaying the bakery's assortment<small>A Windows program installed on a PC Stick communicates with an exposed API</small></em><strong>Role in the project:</strong><ol><li>Creating the Windows program</li><li>Creating a CMS to manage data on all screens</li></ol>",
		},
		category: ["rest", "freelancer"],
		stack: ["csharp", "php", "mysql", "html", "css"],
		image: "/works/infokiosk.jpg",

		slug: "infokiosk",
	},
	{
		about: {
			pl: "<strong>Funkcjonalności:</strong><ol><li>Organizowanie rozgrywek (puchary, ligi, turnieje, spotkania towarzyskie)</li><li>Systemy rankingów, profile graczy, poziomy użytkowników</li><li>CMS do zarządzania funkcjonalnościami</li></ol>",
			en: "<strong>Features:</strong><ol><li>Organizing competitions (cups, leagues, tournaments, friendly matches)</li><li>Ranking systems, player profiles, user levels</li><li>CMS for managing functionalities</li></ol>",
		},
		name: "PESARENA - Soccer League",
		description: {
			pl: "<em>Portal dla graczy Pro Evolution Soccer<strong>Sentymentalny projekt tworzony i rozwijany na przełomie 2008-2014</strong></em><strong>Rola w projekcie:</strong><ol><li>Tworzenie i rozwijanie portalu przez 2 lata</li><li>Kontakt z organizatorami i graczami, wdrażanie feedbacku i nowych pomysłów</li></ol>",
			en: "<em>Portal for Pro Evolution Soccer players<small>A sentimental project developed between 2008-2014</small></em><strong>Role in the project:</strong><ol><li>Creating and developing the portal for 2 years</li><li>Communicating with organizers and players, implementing feedback and new ideas</li></ol>",
		},
		category: ["rest", "freelancer"],
		stack: ["php", "html", "css", "photoshop"],
		image: "/works/pesarena.jpg",
		slug: "pesarena",
		inside: {
			archive: "https://web.archive.org/web/20140210082337/http://pesarena.pl/",
			github: "https://github.com/stopek/php-pesarena",
		},
	},
	{
		order: 0,
		name: "N.A.G.M - Slot Games",
		description: {
			pl: "<em>Gra instalowana na maszynach do gier slotowych</em><strong>Rola w projekcie:</strong><ol><li>Debugowanie i naprawianie błędów</li><li>Wdrażanie zmian</li><li>Optymalizacja działania</li></ol>",
			en: "<em>Game installed on slot machines</em><strong>Role in the project:</strong><ol><li>Debugging and fixing errors</li><li>Implementing changes</li><li>Performance optimization</li></ol>",
		},
		category: ["react", "createit"],
		stack: ["react", "webpack", "js", "legacy"],
		image: "/works/nagm.jpg",
		slug: "nagm-automat-z-grami-losujcymi",
	},
	{
		name: "Mediart",
		description: {
			pl: "<em>Strona reklamowa firmy, z którą współpracowałem</em><strong>Rola w projekcie:</strong><ol><li>Utworzenie strony zgodnie z dostarczonym UI</li><li>Wdrożenie firmowego CMS do zarządzania stroną</li></ol>",
			en: "<em>Advertising website for a company I collaborated with</em><strong>Role in the project:</strong><ol><li>Creating the website according to the provided UI</li><li>Implementing the company's CMS for site management</li></ol>",
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "scss", "js"],
		slug: "mediart",
		image: "/works/mediart.jpg",
		inside: {
			archive: "https://web.archive.org/web/20210404052103/https://www.mediart.pl/",
		},
	},

	// -- old --------------------------------
	{
		order: 0,
		old: true,
		name: "Zs2 Rypin",
		description: {
			pl: "Jest to strona główna technikum, do którego uczęszczałem. Projekt ten był jednym z pierwszych jakie wykonałem i do tej pory nie uległ zmianom.",
			en: "Is the main page of the technical school attended by the author. This project was one of the first ones he executed, and it has remained unchanged to this day.",
		},
		category: ["freelancer"],
		stack: ["php", "html", "css", "legacy"],
		slug: "zs2rypin",
		image: "/works/zs2rypin.jpg",
		inside: {
			preview: "https://zs2rypin.pl",
		},
	},
	{
		order: 0,
		old: true,
		stack: ["code_igniter", "html", "scss", "js", "php", "mysql", "jquery", "legacy"],
		name: "Hotel Słoneczny Młyn",
		description: {
			pl: 'Projekt "Sloneczny.eu" to klasyczna strona hotelowa, stworzona dla hotelu o spersonalizowanym wyglądzie. Strona zawiera podstawowe informacje o hotelu oraz oferowane usługi. Moja rola w projekcie polegała na utworzeniu systemu w oparciu o dostarczoną dokumentację oraz projekt graficzny.',
			en: 'The "Sloneczny.eu" project is a classic hotel website, created for a hotel with a personalized appearance. The website contains basic information about the hotel and the services offered. My role in the project was to create a system based on the provided documentation and graphic design.',
		},
		category: ["code_igniter", "mediart"],
		slug: "hotel-soneczny-myn",
		inside: {
			archive: "https://web.archive.org/web/20220419180236/https://www.sloneczny.eu/",
		},
	},
	{
		order: 0,
		old: true,
		name: "Psychological tests tool",
		description: {
			pl: 'Projekt "BBCLAB TESTS" to platforma do przeprowadzania spersonalizowanych badań przez instytut psychologii. Projekt dostępny jedynie na GitHub’ie. Moja rola w projekcie polegała na ustaleniu wymagań z klientem i utworzeniu systemu do przeprowadzania, gromadzenia i analizowania wyników badań ankietowych.',
			en: 'The "BBCLAB TESTS" project is a platform for conducting personalized research by the psychology institute. The project is available only on GitHub. My role in the project was to determine requirements with the client and create a system for conducting, collecting, and analyzing survey results.',
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "php", "scss", "mysql", "html"],
		slug: "testy-psychologiczne-dla-ukw",
	},
	{
		order: 0,
		old: true,
		name: "Spare",
		description: {
			pl: 'Projekt "Spare.com.pl" to sklep dla firmy produkującej wózki widłowe oraz podobne. Moja rola w projekcie polegała na ustaleniu wymagań z klientem i utworzeniu systemu zgodnie z dostarczonym projektem graficznym.',
			en: 'The "Spare.com.pl" project is a store for a company producing forklifts and similar products. My role in the project was to determine requirements with the client and create the system according to the provided graphic design.',
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "css", "js", "jquery", "centos", "php", "mysql"],
		slug: "spare",
		image: "/works/spare.jpg",
		inside: {
			archive: "https://web.archive.org/web/20231128143016/https://www.spare.com.pl/",
		},
	},
	{
		order: 0,
		old: true,
		name: "Abler",
		description: {
			pl: 'Projekt "Abler.pl" to standardowa strona reklamowa ze sklepem połączona z ERP Symfonia. Moja rola w projekcie polegała na modyfikacji istniejącego systemu oraz poprawianiu błędów.',
			en: 'The "Abler.pl" project is a standard advertising website with a store connected to ERP Symfonia. My role in the project involved modifying the existing system and fixing bugs.',
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "scss", "js", "jquery", "php", "mysql", "legacy"],
		slug: "abler",
		image: "/works/abler.jpg",
		inside: {
			archive: "https://web.archive.org/web/20220124160051/https://www.abler.pl/",
		},
	},
	{
		order: 0,
		old: true,
		name: "Prymus",
		description: {
			pl: 'Projekt "Prymus24.pl" to strona hurtowni z częściami RTV/AGD, zintegrowana z ERP Subiekt’a. Moja rola w projekcie polegała na wymianie interfejsu użytkownika przy zachowaniu aktualnych funkcjonalności.',
			en: 'The "Prymus24.pl" project is a wholesaler website for electronic and household appliances parts, integrated with ERP Subiekt. My role in the project was to update the user interface while maintaining the current functionality.',
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "css", "js", "jquery", "php", "mysql", "legacy"],
		slug: "prymus-dzia-klimatyzacji",
		image: "/works/prymus.jpg",
		inside: {
			archive: "https://web.archive.org/web/20220522135600/https://www.prymus24.pl/",
		},
	},
	{
		order: 0,
		old: true,
		name: "Studio3d",
		description: {
			pl: 'Projekt "Studio3d.com.pl" to sklep firmy sprzedającej grawerowane statuetki. Moja rola w projekcie polegała na wprowadzaniu zmian, rozbudowie sklepu oraz poprawach błędów.',
			en: 'The "Studio3d.com.pl" project is a store for a company selling engraved figurines. My role in the project was to implement changes, expand the store, and fix errors.',
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "css", "php", "mysql", "legacy"],
		slug: "studio3d",
		image: "/works/studio3d.jpg",
		inside: {
			preview: "https://www.studio3d.com.pl/",
		},
	},
	{
		order: 0,
		old: true,
		stack: ["code_igniter", "html", "css", "js", "jquery", "centos", "php", "mysql"],
		name: "Salonik dla Pupila",
		description: {
			pl: 'Projekt "Salonik-dla-pupila.pl" to strona sklepu z produktami dla kotów/psów, połączona z ERP Subiekt’a. Moja rola w projekcie polegała na wymianie interfejsu użytkownika przy zachowaniu aktualnych funkcjonalności.',
			en: 'The "Salonik-dla-pupila.pl" project is a website for a store selling products for cats/dogs, integrated with ERP Subiekt. My role in the project was to update the user interface while maintaining the current functionality.',
		},
		category: ["code_igniter", "mediart", "legacy"],
		slug: "salonik-dla-pupila",
		image: "/works/salonikdlapupila.jpg",
		inside: {
			preview: "https://www.salonik-dla-pupila.pl",
		},
	},
	{
		order: 0,
		old: true,
		stack: ["code_igniter", "html", "css", "js", "jquery", "centos", "php", "mysql", "legacy"],
		name: "Muzeum Mydła i Historii Brudu",
		description: {
			pl: 'Projekt "Muzeum Mydła" to strona internetowa Bydgoskiego Muzeum Mydła, zaprojektowana zgodnie z wytycznymi klienta. Jest to klasyczna strona z możliwością rezerwacji biletów na wizytę. System rezerwacji biletów zosta...',
			en: 'The "Soap Museum" project is a website for the Bydgoszcz Soap Museum, designed according to the client\'s guidelines. It is a classic website with the option to book tickets for a visit. The ticket booking system was...',
		},
		category: ["code_igniter", "mediart"],
		image: "/works/muzeummydla.jpg",
		slug: "muzeum-myda-i-historii-brudu",
		inside: {
			archive: "https://web.archive.org/web/20220425162720/https://muzeummydla.pl/",
		},
	},
	{
		order: 0,
		old: true,
		name: "UniShop",
		description: {
			pl: "UniShop to największy projekt, nad którym pracowałem po godzinach przez ponad rok. Projekt ten był w stylu RedCart, umożliwiając użytkownikom tworzenie i zarządzanie swoimi sklepami na jednym serwerze. Wewnątrz znajdowało się kilka osobnych paneli do zarządzania na różnych poziomach, skrypty tworzące subdomeny itp. Projekt jest dostępny tylko prywatnie na GitHub.",
			en: "UniShop is the largest project I worked on after hours for over a year. This project was similar to RedCart, allowing users to create and manage their shops on one server. Inside, there were several separate management panels at different levels, scripts creating subdomains, etc. The project is only available privately on GitHub.",
		},
		category: ["symfony", "freelancer"],
		stack: ["symfony", "php", "html", "mysql", "css", "centos", "lemp", "bash"],
		slug: "unishop",
	},
	{
		order: 0,
		old: true,
		name: "Bozka",
		description: {
			pl: 'Projekt "Bozka.eu" to strona Pani z miłym głosem, która sprzedawała kapelusze. Moja rola w projekcie polegała na pracy nad istniejącym systemem, naprawie błędów oraz wprowadzaniu modyfikacji.',
			en: 'The "Bozka.eu" project is a website of a lady with a nice voice who sold hats. My role in the project involved working on the existing system, fixing bugs, and making modifications.',
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "scss", "css", "js", "jquery", "php", "mysql", "legacy"],
		slug: "bozka",
		image: "/works/bozkaeu.jpg",
		inside: {
			archive: "https://web.archive.org/web/20211228084657/https://www.bozka.eu/",
		},
	},
	{
		order: 0,
		old: true,
		name: "Amb Perfumy",
		description: {
			pl: 'Projekt "Amb Perfumy" to sklep internetowy firmy zajmującej się sprzedażą perfum. Podobnie jak w przypadku "Amb Zabawki", moja rola polegała na utworzeniu sklepu opartego o CMS Shoper oraz na wprowadzaniu modyfikacji na tym CMS.',
			en: 'The "Amb Perfumy" project is an online store of a company selling perfumes. Similar to the "Amb Zabawki" project, my role involved creating a store based on the Shoper CMS and making modifications to this CMS.',
		},
		category: ["php", "ventus"],
		stack: ["php", "mysql", "css", "html", "centos"],
		slug: "amb-perfumy",
		image: "/works/ambperfumy.jpg",
		inside: {
			preview: "https://www.ambperfumy.pl/",
		},
	},
	{
		order: 0,
		old: true,
		name: "Amb Zabawki",
		description: {
			pl: 'Projekt "Amb Zabawki" to sklep internetowy firmy zajmującej się sprzedażą zabawek. Moja rola polegała na utworzeniu sklepu opartego o CMS Shoper oraz na wprowadzaniu modyfikacji na tym CMS.',
			en: 'The "Amb Zabawki" project is an online store of a company selling toys. My role involved creating a store based on the Shoper CMS and making modifications to this CMS.',
		},
		category: ["php", "ventus"],
		stack: ["php", "mysql", "css", "html", "centos"],
		slug: "amb-zabawki",
		image: "/works/ambzabawki.jpg",
		inside: {
			preview: "https://www.ambzabawki.pl/",
		},
	},
	{
		name: "Satellcad",
		description: {
			pl: 'Projekt "Satellcad.pl" to strona firmy sprzedającej akcesoria geodezyjne oraz budowlane. Moja rola w projekcie polegała na ustaleniu wymagań z klientem i utworzeniu systemu zgodnie z dostarczonym projektem graficznym.',
			en: 'The "Satellcad.pl" project is a website for a company selling geodetic and construction accessories. My role in the project was to determine requirements with the client and create the system according to the provided graphic design.',
		},
		category: ["code_igniter", "mediart"],
		stack: ["code_igniter", "html", "scss", "css", "js", "jquery", "php", "mysql"],
		slug: "satellcad",
		inside: {
			archive: "https://web.archive.org/web/20220519042431/https://satellcad.pl/",
		},
	},
];

export const hub_urls: TMenuItem[] = [
	{
		url: "https://github.com/stopek",
		Icon: GitHubIcon,
		label: "GitHub",
	},
	{
		url: "https://www.linkedin.com/in/threep",
		Icon: LinkedInIcon,
		label: "LinkedIn",
	},
	{
		to: "/portfolio",
		Icon: BusinessCenterIcon,
		label: "Portfolio",
		margin: 20,
	},
	{
		url: "https://www.facebook.com/pawel.stopek",
		Icon: FacebookIcon,
		label: "Facebook",
	},
	{
		url: "https://znanyfotograf.com/pawel-stopczynski",
		Icon: LinkedCameraIcon,
		label: "Photography",
	},
];
