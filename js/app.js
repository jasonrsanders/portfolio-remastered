var app = angular.module('myPortfolio', ['ui.router', 'ngMap', 'ngAnimate']);

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/landing');

    $stateProvider

    .state('landing', {
        url: '/landing',
        views: {
            content: {
                templateUrl: 'partials/landing.html'
            }
        },
        controller: 'PageCtrl'
    })

    .state('portfolio', {
        url: '/portfolio',
        views: {
            nav: {
                templateUrl: 'templates/header.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/portfolio.html'
            }
        },
        controller: 'PageCtrl'
    })

    .state('about', {
        url: '/about',
        views: {
            nav: {
                templateUrl: 'templates/header.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/about.html'
            }
        },
        controller: 'PageCtrl'
    })

    .state('skills', {
        url: '/skills',
        views: {
            nav: {
                templateUrl: 'templates/header.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/skills.html'
            }
        },
        controller: 'PageCtrl'
    })

    .state('contact', {
        url: '/contact',
        views: {
            nav: {
                templateUrl: 'templates/header.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/contact.html'
            }
        },
        controller: 'PageCtrl'
    });

});
