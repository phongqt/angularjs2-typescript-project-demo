System.register(['./mock-article', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_article_1, core_1;
    var ArticleService;
    return {
        setters:[
            function (mock_article_1_1) {
                mock_article_1 = mock_article_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArticleService = (function () {
                function ArticleService() {
                }
                ArticleService.prototype.getArticles = function () {
                    return Promise.resolve(mock_article_1.Articles);
                };
                ArticleService.prototype.getArticleDetail = function (id) {
                    //   var element = Articles.map(function(x) {return x.id; }).indexOf(id);
                    //   return Articles[element];
                    return Promise.resolve(mock_article_1.Articles).then(function (Article) { return mock_article_1.Articles.filter(function (Article) { return Article.id === id; })[0]; });
                };
                ArticleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ArticleService);
                return ArticleService;
            }());
            exports_1("ArticleService", ArticleService);
        }
    }
});
//# sourceMappingURL=article.service.js.map