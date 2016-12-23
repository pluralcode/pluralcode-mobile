angular.module('App', ['ionic', 'ngVideo'])

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$stateProvider
	.state('tour', {
		url: '/tour',
		templateUrl: 'views/tour/tour.html',
		controller: 'tourController'
	})
	.state('signup1', {
		url: '/signup',
		templateUrl: 'views/signup/signup1.html',
		controller: 'SignUpController'
	})
	.state('signup2', {
		url: '/intermediate',
		templateUrl: 'views/signup/intermediate.html',
		controller: 'IntermediateController'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'views/login/login.html',
		controller: "LoginController"
	})
	.state('tabs', {
		url: '/tabs',
		abstract: true,
		templateUrl: 'views/tabs/tabs.html',
		onEnter: function($state, Auth){
        if(!Auth.isLoggedIn()){
		
            	$state.go('tour');
        }
	}})
	.state('tabs.home', {
		url: '/home',
		views: {
			'home-tab': {
				templateUrl: 'views/home/home.html',
				controller: 'HomeController'
			}
		}
	})
	.state('tabs.classrooms', {
		url: '/classrooms',
		views: {
			'classrooms-tab': {
				templateUrl: 'views/classrooms/classrooms.html',
				controller: "ClassroomsController"
			}
		}
	})
	.state('tabs.notifications', {
		url: '/notifications',
		views: {
			'notifications-tab': {
				templateUrl: 'views/notifications/notifications.html',
			}
		}
	})
	.state('tabs.view_course', {
		url: '/view_course/:course_id:reg_no:password',
		views: {
			'classrooms-tab': {
				templateUrl: 'views/view_course/view_course.html',
				controller: "ViewCourseController"
			}
			
		}
	})
	.state('tabs.video_viewer', {
		url: '/video_view/:video_url',
		views: {
			'classrooms-tab': {
				templateUrl: 'views/video_view/videoview.html',
				controller: "VideoViewController"
			}
			
		}
	})
	
	.state('tabs.code_editor', {
		url: '/code_editor',
		views: {
			'home-tab': {
				templateUrl: 'views/code_editor/code_editor.html',
				controller: 'CodeController'
			}
			
		}
	})
	.state('tabs.offline_archives', {
		url: '/offline_archives',
		views: {
			'home-tab': {
				templateUrl: 'views/offline_archives/offline_archives.html',
			}
			
		}
	})
	.state('tabs.achievements', {
		url: '/achievements',
		views: {
			'home-tab': {
				templateUrl: 'views/achievements/achievements.html',
			}
			
		}
	})
	.state('tabs.live_mentor', {
		url: '/live_mentor',
		views: {
			'home-tab': {
				templateUrl: 'views/live_mentor/live_mentor.html',
			}
			
		}
	})
	.state('tabs.contact-us', {
		url: '/contact-us',
		views: {
			'home-tab': {
				templateUrl: 'views/contact-us/contact-us.html',
			}
			
		}
	})
	.state('tabs.invite', {
		url: '/invite',
		views: {
			'home-tab': {
				templateUrl: 'views/invite/invite.html',
			}
			
		}
	});
	
	$urlRouterProvider.otherwise('/tabs/home');
	$ionicConfigProvider.tabs.position('top');
	$ionicConfigProvider.navBar.alignTitle('center');
	$ionicConfigProvider.scrolling.jsScrolling(false);
	
	})




.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})

.factory('Auth', function () {
   if (window.localStorage['session']) {
      var _user = "user";
   }
   var setUser = function (session) {
      _user = session;
      window.localStorage['session'] = _user;
   }

   return {
      setUser: setUser,
      isLoggedIn: function () {
         return _user ? true : false;
      },
      getUser: function () {
         return _user;
      },
      logout: function () {
         window.localStorage.removeItem("session");
         window.localStorage.removeItem("list_dependents");
         _user = null;
      }
   }
})




