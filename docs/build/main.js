webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.people = __webpack_require__(272);
    }
    HomePage.prototype.openAudioList = function (audioList, name, slug) {
        this.navCtrl.push(AudioListPage, { audioList: audioList, name: name, slug: slug });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\audios-politicos\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Selecione o político</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let person of people" (click)="openAudioList(person.audio, person.name, person.slug)" icon-start>\n\n      <img src="assets/imgs/{{person.slug}}.jpg" /> {{ person.name }}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\audios-politicos\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

var AudioListPage = /** @class */ (function () {
    function AudioListPage(params, nativeAudio) {
        this.nativeAudio = nativeAudio;
        this.audiosPlayed = [];
        this.audioList = params.data.audioList;
        this.name = params.data.name;
        this.slug = params.data.slug;
    }
    AudioListPage.prototype.ionViewWillEnter = function () {
        for (var i = 0; i <= this.audioList.length - 1; i++) {
            this.nativeAudio.preloadSimple(this.audioList[i].name, "assets/audios/" + this.slug + "/" + this.audioList[i].file);
        }
    };
    AudioListPage.prototype.ionViewWillLeave = function () {
        for (var i = 0; i <= this.audioList.length - 1; i++) {
            this.nativeAudio.unload(this.audioList[i].name);
        }
    };
    AudioListPage.prototype.playAudio = function (audioName) {
        var _this = this;
        this.destroyAudios();
        this.audiosPlayed.push(audioName);
        this.nativeAudio.play(audioName, function () { return _this.audiosPlayed = []; });
    };
    AudioListPage.prototype.destroyAudios = function () {
        if (this.audiosPlayed.length > 0) {
            this.nativeAudio.stop(this.audiosPlayed[0]);
        }
        this.audiosPlayed = [];
    };
    AudioListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'audio-list',template:/*ion-inline-start:"C:\xampp\htdocs\audios-politicos\src\pages\home\audio-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title><img src="assets/imgs/{{slug}}.jpg" /> {{ name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let audio of audioList">\n\n        <label>{{ audio.name }}</label>\n\n        <button (click)="playAudio(audio.name)"><ion-icon name="play"></ion-icon></button>\n\n    </ion-item>\n\n    \n\n      \n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\audios-politicos\src\pages\home\audio-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], AudioListPage);
    return AudioListPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendAudioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SendAudioPage = /** @class */ (function () {
    function SendAudioPage() {
    }
    SendAudioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'send-audio',template:/*ion-inline-start:"C:\xampp\htdocs\audios-politicos\src\pages\send-audio\send-audio.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Envie seu áudio</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>Você pode enviar sugestões de áudios através do formulário abaixo:</p>\n\n\n\n  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdIX3bztCAJb7wdhj4sbi7NQK0MryTMcQMAbV71thOUFSwU4A/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\audios-politicos\src\pages\send-audio\send-audio.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SendAudioPage);
    return SendAudioPage;
}());

//# sourceMappingURL=send-audio.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharePage = /** @class */ (function () {
    function SharePage() {
    }
    SharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'share',template:/*ion-inline-start:"C:\xampp\htdocs\audios-politicos\src\pages\share\share.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Compartilhe o App</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n<ion-content padding>\n\n  <p>Play Store:<br> <a href="https://play.google.com/store/apps/details?id=audios.politicos" target="_blank">https://play.google.com/store/apps/details?id=audios.politicos</a></p>\n\n  <p>Versão Web: <br><a href="http://audiospoliticos.com.br" target="_blank">http://audiospoliticos.com.br</a></p>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\audios-politicos\src\pages\share\share.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SharePage);
    return SharePage;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_send_audio_send_audio__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_share_share__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_audio__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* AudioListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_send_audio_send_audio__["a" /* SendAudioPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_share_share__["a" /* SharePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* AudioListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_send_audio_send_audio__["a" /* SendAudioPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_share_share__["a" /* SharePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_audio__["a" /* NativeAudio */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_send_audio_send_audio__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_share_share__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Áudios', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* HomePage */] },
            { title: 'Envie seu áudio', component: __WEBPACK_IMPORTED_MODULE_5__pages_send_audio_send_audio__["a" /* SendAudioPage */] },
            { title: 'Compartilhe o App!', component: __WEBPACK_IMPORTED_MODULE_6__pages_share_share__["a" /* SharePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\audios-politicos\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\audios-politicos\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = [{"name":"Aécio Neves","slug":"aecio-neves","audio":[{"name":"Não seja leviana","file":"nao-seja-leviana.mp3"}]},{"name":"Barroso","slug":"barroso","audio":[{"name":"Pitadas de psicopatia","file":"pitadas-de-psicopatia.mp3"}]},{"name":"Bolsonaro","slug":"bolsonaro","audio":[{"name":"Canalhas","file":"canalhas.mp3"},{"name":"Dá que eu te dou outra","file":"da-que-eu-te-dou-outra.mp3"},{"name":"É só você não estuprar, não sequestrar...","file":"e-so-voce-nao-estuprar.mp3"},{"name":"Eu sonego tudo que for possível","file":"eu-sonego.mp3"},{"name":"Eu sou favorável à tortura, tu sabe disso","file":"eu-sou-favoravel-a-tortura.mp3"},{"name":"O bigodudo ou o careca","file":"o-bigodudo-ou-o-careca.mp3"},{"name":"Po, num to de novo","file":"po-num-to-de-novo.mp3"},{"name":"Prova do Enem","file":"prova-do-enem.mp3"},{"name":"Risada","file":"risada.mp3"},{"name":"Tem que se foder e acabou","file":"tem-que-se-foder-e-acabou.mp3"},{"name":"Única coisa boa do Maranhão","file":"unica-coisa-boa-do-maranhao.mp3"},{"name":"Vagabunda","file":"vagabunda.mp3"},{"name":"Vai queimar tua rosquinha","file":"vai-queimar-tua-rosquinha.mp3"},{"name":"Vou votar no Lula","file":"vou-votar-no-lula.mp3"}]},{"name":"Brizola","slug":"brizola","audio":[{"name":"Filhotes da ditadura","file":"filhotes-da-ditadura.mp3"}]},{"name":"Cabo Daciolo","slug":"cabo-daciolo","audio":[{"name":"400 bilhões de sonegadores","file":"400-bilhoes-de-sonegadores.mp3"},{"name":"Glória a Deus","file":"gloria-a-deus.mp3"},{"name":"Nunca saí em pesquisa nenhuma","file":"nunca-sai-em-pesquisa-nenhuma.mp3"},{"name":"Pra honra e glória do senhor Jesus","file":"pra-honra-e-gloria-do-senhor-jesus.mp3"},{"name":"Profetizando","file":"profetizando.mp3"},{"name":"Saiam da nação brasileira","file":"saiam-da-nacao-brasileira.mp3"},{"name":"Vão tentar me matar","file":"vao-tentar-me-matar.mp3"}]},{"name":"Ciro Gomes","slug":"ciro-gomes","audio":[{"name":"526 terabytes de encryption","file":"526-terabytes-de-encryption.mp3"},{"name":"A senhora chamou a Beyoncé","file":"a-senhora-chamou-a-beyonce.mp3"},{"name":"Could send me to PQP","file":"could-send-me-to-pqp.mp3"},{"name":"Isso dá bilhão?","file":"isso-da-bilhao.mp3"},{"name":"Vou receber a turma dele na bala","file":"vou-receber-na-bala.mp3"}]},{"name":"Collor","slug":"collor","audio":[{"name":"Eu repudio","file":"eu-repudio.mp3"},{"name":"Mentira da Receita Federal","file":"mentira-da-receita-federal.mp3"},{"name":"Isso é uma mentira","file":"isso-e-uma-mentira.mp3"},{"name":"São palavras que quero que as engula","file":"sao-palavras-que-quero-que-as-engula.mp3"},{"name":"Sonho de uma noite de verão","file":"sonho-de-uma-noite-de-verao.mp3"}]},{"name":"Dilma","slug":"dilma","audio":[{"name":"Bessias","file":"bessias.mp3"},{"name":"Bom dia ou boa tarde","file":"bom-dia-ou-boa-tarde.mp3"},{"name":"Dobrar a meta","file":"dobrar-a-meta.mp3"},{"name":"Engasguei comigo mesma","file":"engasguei-comigo-mesma.mp3"},{"name":"Estocar vento","file":"estocar-vento.mp3"},{"name":"Eu podia","file":"eu-podia.mp3"},{"name":"Figura oculta que é um cachorro atrás","file":"figura-oculta.mp3"},{"name":"Happy Birthday","file":"happy-birthday.mp3"},{"name":"Índios morriam por falta de assistência técnica","file":"indios-morriam-por-falta-de-assistencia-tecnica.mp3"},{"name":"Melhor prefeito das galáxias","file":"melhor-prefeito-das-galaxias.mp3"},{"name":"Mulheres Sapiens","file":"mulheres-sapiens.mp3"},{"name":"No que se refere","file":"no-que-se-refere.mp3"},{"name":"O meio ambiente é uma ameaça","file":"o-meio-ambiente-e-uma-ameaca.mp3"},{"name":"Quem ganhar ou perder","file":"quem-ganhar-ou-perder.mp3"},{"name":"Saudando a mandioca","file":"saudando-a-mandioca.mp3"}]},{"name":"Eduardo Cunha","slug":"eduardo-cunha","audio":[{"name":"Como vota deputado?","file":"como-vota-deputado.mp3"},{"name":"Que Deus tenha misericórdia dessa nação","file":"que-deus-tenha-misericordia.mp3"}]},{"name":"Eduardo Paes","slug":"eduardo-paes","audio":[{"name":"Faz muito sexo aqui, Rita","file":"faz-muito-sexo-aqui-rita.mp3"},{"name":"Maricá","file":"marica.mp3"},{"name":"Vai trepar muito nesse quartinho aqui","file":"vai-trepar-muito-nesse-quartinho-aqui.mp3"}]},{"name":"Enéas","slug":"eneas","audio":[{"name":"Falando inglês","file":"falando-ingles.mp3"},{"name":"Meu nome é Enéas","file":"meu-nome-e-eneas.mp3"}]},{"name":"Eymael","slug":"eymael","audio":[{"name":"Ey-ey-ey-mael","file":"ey-ey-ey-mael.mp3"}]},{"name":"Heráclito Fortes","slug":"heraclito-fortes","audio":[{"name":"Inveja? Eu não sou corno","file":"inveja-eu-nao-sou-corno.mp3"}]},{"name":"Jandira Feghali","slug":"jandira-feghali","audio":[{"name":"Tentou ajudar o candidato","file":"tentou-ajudar-o-candidato.mp3"}]},{"name":"Jean Wyllys","slug":"jean-wyllys","audio":[{"name":"Ele me chamou de cu ambulante","file":"ele-me-chamou-de-cu-ambulante.mp3"}]},{"name":"Joaquim Barbosa","slug":"joaquim-barbosa","audio":[{"name":"Capangas do Mato Grosso","file":"capangas-do-mato-grosso.mp3"}]},{"name":"José Serra","slug":"jose-serra","audio":[{"name":"Come todo mundo","file":"come-todo-mundo.mp3"}]},{"name":"Kassab","slug":"kassab","audio":[{"name":"Vagabundo","file":"vagabundo.mp3"}]},{"name":"Levy Fidelix","slug":"levy-fidelix","audio":[{"name":"Aparelho excretor não reproduz","file":"aparelho-excretor-nao-reproduz.mp3"},{"name":"Dois iguais não fazem filho","file":"dois-iguais-nao-fazem-filho.mp3"}]},{"name":"Lula","slug":"lula","audio":[{"name":"Acusado de suicídio","file":"acusado-de-suicidio.mp3"},{"name":"Grelo duro","file":"grelo-duro.mp3"},{"name":"Pelotas é exportadora de viado","file":"pelotas-exportadora-de-viado.mp3"},{"name":"Tchau querida","file":"tchau-querida.mp3"},{"name":"Viva alma mais honesta do que eu","file":"viva-alma-mais-honesta-do-que-eu.mp3"}]},{"name":"Maria do Rosário","slug":"maria-do-rosario","audio":[{"name":"Mas o que é isso?","file":"mas-o-que-e-isso.mp3"}]},{"name":"Marta Suplicy","slug":"marta-suplicy","audio":[{"name":"Relaxa e goza","file":"relaxa-e-goza.mp3"}]},{"name":"Orestes Quércia","slug":"orestes-quercia","audio":[{"name":"Caluniador e mentiroso","file":"caluniador-e-mentiroso.mp3"}]},{"name":"Paulo Maluf","slug":"paulo-maluf","audio":[{"name":"Estupra mas não mata","file":"estupra-mas-nao-mata.mp3"},{"name":"Se corrupção existe, é da senhora sua mãe","file":"corrupcao-sua-mae.mp3"},{"name":"Se o Pitta não for um grande prefeito, nunca mais vote em mim","file":"pitta-grande-prefeito.mp3"},{"name":"Tinha rota na rua","file":"tinha-rota-na-rua.mp3"}]},{"name":"Sérgio Cabral","slug":"sergio-cabral","audio":[{"name":"Falando inglês","file":"falando-ingles.mp3"}]},{"name":"Temer","slug":"temer","audio":[{"name":"Acreditamos no poder do diabo","file":"acreditamos-no-poder-do-diabo.mp3"},{"name":"Não renunciarei","file":"nao-renunciarei.mp3"},{"name":"Voz do demônio","file":"voz-do-demonio.mp3"}]},{"name":"Wladimir Costa","slug":"wladimir-costa","audio":[{"name":"Minha mãe negra Lucimar","file":"minha-mae-negra-lucimar.mp3"}]}]

/***/ })

},[197]);
//# sourceMappingURL=main.js.map