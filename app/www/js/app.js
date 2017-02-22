angular.module('App', ['ionic', 'ngVideo', 'ngSanitize', 'ng-showdown'])

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
		cache: false,
		views: {
			'home-tab': {
				templateUrl: 'views/home/home.html',
				controller: 'HomeController'
			}
		}
	})
	.state('tabs.classrooms', {
		url: '/classrooms',
		cache: false,
		views: {
			'classrooms-tab': {
				templateUrl: 'views/classrooms/classrooms.html',
				controller: "ClassroomsController"
			}
		}
	})
	.state('tabs.notifications', {
		url: '/notifications',
		cache: false,
		views: {
			'notifications-tab': {
				templateUrl: 'views/community/community.html',
				controller: 'CommunityController'
			}
		}
	})
	.state('tabs.post', {
		url: '/post',
		views: {
			'notifications-tab': {
				templateUrl: 'views/addquestion/addquestion.html',
				controller: 'PostController'
			}
		}
	})
	.state('tabs.viewmentor', {
		url: '/viewmentor',
		views: {
			'home-tab': {
				templateUrl: 'views/viewmentor/viewmentor.html',
			}
			
		}
	})
	.state('tabs.view_post', {
		url: '/view_post/:post_id',
		views: {
			'notifications-tab': {
				templateUrl: 'views/qna/qna.html',
				controller: 'ViewPostController'
			}
		}
	})
	.state('tabs.view_course', {
		url: '/view_course/:course_id',
		views: {
			'classrooms-tab': {
				templateUrl: 'views/view_course/view_course.html',
				controller: "ViewCourseController"
			}
			
		}
	})
	.state('tabs.view_chapter', {
		url: '/view_chapter/:course_id/:chapter_id',
		views: {
			'classrooms-tab': {
				templateUrl: 'views/viewchapter/viewchapter.html',
				controller: "ViewChapterController"
			}
			
		}
	})
	.state('tabs.lesson_content', {
		url: '/lesson_content/:lesson_id/:chapter_id',
		views: {
			'classrooms-tab': {
				templateUrl: 'views/lesson_content/lesson_content.html',
				controller: "LessonContentController"
			}
			
		}
	})
	.state('tabs.enroll', {
		url: '/enroll/:course_id',
		views: {
			'classrooms-tab': {
				templateUrl: 'views/enrol/enrol.html',
				controller: "EnrollController"
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
	
	.state('tabs.savecode', {
		url: '/savecode',
		views: {
			'code-tab': {
				templateUrl: 'views/code_editor/savecode.html',
				//controller: 'CodeController'
			}
			
		}
	})
	
	.state('tabs.code_editor', {
		url: '/code_editor',
		views: {
			'code-tab': {
				templateUrl: 'views/code_editor/code_editor.html',
				controller: 'CodeController'
			}
			
		}
	})
	.state('tabs.workspace', {
		url: '/workspace',
		views: {
			'code-tab': {
				templateUrl: 'views/code_editor/workspace.html',
				//controller: 'CodeController'
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
	.state('savedcodes',{
		url: '/savedcodes',
		templateUrl: 'views/savedcodes/savedcodes.html'
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
				templateUrl: 'views/viewmentor/viewmentor.html',
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
	})
	.state('tabs.buy_rubbies', {
		url: '/buy_rubbies',
		views: {
			'home-tab': {
				templateUrl: 'views/buyrubbies/buyrubbies.html',
				controller: 'BuyRubbiesController'
			}
			
		}
		
	})
	.state('tabs.profile', {
		url: '/profile',
		views: {
			'home-tab': {
				templateUrl: 'views/profile/profile.html',
				controller: 'ProfileController'
			}
			
		}
		
	})
	
	.state('tabs.creditpaysuccess', {
		url: '/paysuccess',
		views: {
			'home-tab': {
				templateUrl: 'views/paysuccess/paysuccess.html',
				//controller: 'ProfileController'
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
	  setData: function (email, fullname, phone, balance, password) {
		  window.localStorage['email'] = email;
		  window.localStorage['fullname'] = fullname;
		  window.localStorage['phone'] = phone;
		  window.localStorage['balance'] = balance;
		  window.localStorage['password'] = password;
	  },
	  getBalance: function () {
		  return window.localStorage['balance'];
	  },
	  getFullname: function () {
		  return window.localStorage['fullname'];
	  },
	  getEmail: function () {
		  return window.localStorage['email'];
	  },
	  getPhone: function () {
		  return window.localStorage['phone'];
	  },
	  getPassword: function () {
		  return window.localStorage['password'];
	  },
      logout: function () {
         window.localStorage.removeItem("session");
         window.localStorage.removeItem("email");
         window.localStorage.removeItem("fullname");
         window.localStorage.removeItem("phone");
         window.localStorage.removeItem("balance");
         window.localStorage.removeItem("password");
         window.localStorage.removeItem("list_dependents");
         _user = null;
      }
   }
})
