angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page2',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('welcome', {
      url: '/page3',
      templateUrl: 'templates/welcome.html',
      controller: 'welcomeCtrl'
    })
        
      
    
      
        
    .state('page', {
      url: '/page4',
      templateUrl: 'templates/page.html',
      controller: 'pageCtrl'
    })
        
      
    
      
        
    .state('addStudent', {
      url: '/page5',
      templateUrl: 'templates/addStudent.html',
      controller: 'addStudentCtrl'
    })
        
      
    
      
        
    .state('attendance', {
      url: '/page6',
      templateUrl: 'templates/attendance.html',
      controller: 'attendanceCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});