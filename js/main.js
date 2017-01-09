

var app = angular.module('myPortfolio', [
  'ngRoute', 'ngMap', 'ngAnimate'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
    .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl" })

    // Pages
    .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl"})

    .when("/portfolio", { templateUrl: "partials/portfolio.html", controller: "PageCtrl" })

    .when("/skills", { templateUrl: "partials/skills.html", controller: "PageCtrl"})

    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

    // else 404
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });

} ]);


app.controller('PageCtrl', function ( $scope /* $location $http */) {
    console.log("Page Controller reporting for duty.");
    $scope.pageClass = 'page-effect';

    // MAC MOCK-UP SCROLLER #1
    // $(".handle").draggable({
    //     axis: "x",
    //     containment: "parent",
    //     drag: function() {
    //         var position = $(this).position();
    //         var positionExtra = position.left + 6;
    //         $(".coverImage").width(positionExtra + "px");
    //     }
    // });

    // MAC MOCK-UP SCROLLER #2
    $(".handle2").draggable({
        axis: "x",
        containment: "parent",
        drag: function() {
            var position = $(this).position();
            var positionExtra = position.left + 6;
            $(".coverImage2").width(positionExtra + "px");
        }
    });

});

app.controller("dataImagesWork", function ($scope) {
    $scope.images_work = [
          { num: 1, category: 'web', src: "hungryHarvestClone_img.png", description: 'A Full-stack Ecommerce clone made with Angular.js, Node.js/Express.js and PostgreSQL . ', url_details: "details.html" },
          { num: 2, category: 'web', src: "5dayWeatherReact.png", description: 'A simple 5 day weather forcecast app made with React.js. ', url_details: "details1.html" },
          { num: 3, category: 'web', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details2.html" },
          { num: 4, category: 'web', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details3.html" },
          { num: 5, category: 'web', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details4.html" },
          { num: 6, category: 'web', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details5.html" },
          { num: 7, category: 'web', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details6.html" },
          { num: 8, category: 'web', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details7.html" },
          { num: 9, category: 'ui', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details8.html"}];

});


//'use strict';
app.directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('current');
                        } else {
                            angular.element(li).removeClass('current');
                        }
                    });
                }
            }

            setActive();

            scope.$on('$locationChangeSuccess', setActive);
        }
    }
} ]);
