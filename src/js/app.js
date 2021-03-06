import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import Routes
import routes from './routes.js';




var app = new Framework7({
  root: '#app', // App root element

  name: 'Bus-AR', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Pre-Made Busses
      bus: [
        {
          buscode: '010203',
          name: 'JAM Liner',
          cap: 'Seating',
          type: 'Air-Con'
        },
        {
          buscode: '010204',
          name: 'JAM Liner - EXP',
          cap: 'Standing',
          type: 'Air-COn'
        },
        {
          buscode: '040506',
          name: 'Mayamy',
          cap: 'Standing',
          type: 'Non AC'
        },
        {
          buscode: '040506',
          name: 'Victory Liner',
          cap: 'Seatin',
          type: 'Air-Con'
        }
      ],

      busstop: [
        {
          stopcode: 'NS0001',
          stopname: 'Cubao Terminal',
          disp: '30',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '010204'
            },
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        },
        {
          stopcode: 'NS0002',
          stopname: 'Santolan',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '040506'
            }
          ]
        },
        {
          stopcode: 'NS0003',
          stopname: 'Ortigas',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        },
        {
          stopcode: 'NS0004',
          stopname: 'Shaw Blvd',
          disp: '30',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '010204'
            },
            {
              buscode: '040506'
            }
          ]
        },
        {
          stopcode: 'NS0005',
          stopname: 'Guadalupe',
          disp: '25',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '010204'
            },
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        },
        {
          stopcode: 'NS0006',
          stopname: 'Buendia',
          disp: '25',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '040506'
            }
          ]
        },
        {
          stopcode: 'NS0007',
          stopname: 'Ayala',
          disp: '20',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '010204'
            },
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        },
        {
          stopcode: 'NS0008',
          stopname: 'Magallanes',
          disp: '20',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '040506'
            }
          ]
        },
        {
          stopcode: 'NS0009',
          stopname: 'Pasay Terminal',
          disp: '15',
          buslist: [
            {
              buscode: '010203'
            },
            {
              buscode: '010204'
            }
          ]
        },
        {
          stopcode: 'NS0010',
          stopname: 'Taft',
          disp: '15',
          buslist: [
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        },
        {
          stopcode: 'NS0011',
          stopname: 'MOA',
          disp: '15',
          buslist: [
            {
              buscode: '040506'
            }
          ]
        },
        {
          stopcode: 'NS0012',
          stopname: 'PITX',
          disp: '10',
          buslist: [
            {
              buscode: '040506'
            },
            {
              buscode: '070809'
            }
          ]
        }
      ],

      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
    runTimer: function() {
      setInterval(function() {
        $$(".hidTime").each(function() {
          var id = $$(this).attr('id');
          var idSub = id.substring(8,21);
          // alert(idSub);
      
          $$(this).text(time);
          var hidLineID = '#hidLine-'+idSub;
          var btnLineID = '#btnLine-'+idSub;
      
          $$(hidLineID).text($$(btnLineID).text());
          
        });
      });
    }
  },
  // App routes
  routes: routes,
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Our app is running on port ${ PORT }`);
// });

// Search Bar
var searchbar = app.searchbar.create({
  el: '.searchbar',
  on: {
    enable: function () {
      console.log('Searchbar enabled')
    },
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    },
    clear: function() {
      console.log('Cleared')
    }
  },
  searchContainer: '.list',
  searchIn: '.prodItem'
})

$$('.searchbar').on('search', function(e) {
  
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});


$$(document).on('DOMContentLoaded', function(){
  var time = Date.now();

  $$(".hidTime").each(function() {
    var id = $$(this).attr('id');
    var idSub = id.substring(8,21);
    // alert(idSub);

    $$(this).text(time);
    var hidLineID = '#hidLine-'+idSub;
    var btnLineID = '#btnLine-'+idSub;

    $$(hidLineID).text($$(btnLineID).text());

  });

  runTimer();
});

// Random Number Generator
$$('a.main-button-time').on('click', function () {
  var id = $$(this).attr('id');
  var idU = id.substring(8,21);
  var idText = '#hidLine-'+idU;

  var hidTimeID = '#hidTime-'+idU;

  var timeClick = Date.now();
  var timeLoad = $$(hidTimeID).text();
  var numTimeClick = parseFloat(timeClick);
  var numTimeLoad = parseFloat(timeLoad);
  var secs = ((numTimeClick - numTimeLoad) / 1000);
  var min = secs / 60;
  var round = Math.floor(min);
  
  alert('rounded: ' + round + ' min: ' + min + ' seconds: ' + secs);

  
  var originalTime = parseInt($$(idText).text());
  var displayText = $$(this).text();

  var result = 0;
  result = originalTime - round;
  if(result == 1) {
    $$(this).text('ARR');
  } 
  else if(result == 0) {
    $$(this).text('ARV');
  } else if(result < 0) {
    $$(this).text(originalTime);
    var time = Date.now();
    $$(hidTimeID).text(time);
  } else {
    $$(this).text(result);
  }

  


  // var curTime = parseInt($$('#hidCurTime').text());
  // if(round == curTime) {
  //   $$('#hidCurTime').text(round);
  // } else {
  //   result = thisNum - round;
  // }

  // $$('#hidCurTime').text(round);
  // $$(this).text(result);
  
});