"use strict";



define('ember-app/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        namespace: 'api'
    });
});
define('ember-app/app', ['exports', 'ember', 'ember-app/resolver', 'ember-load-initializers', 'ember-app/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-app/helpers/app-version', ['exports', 'ember', 'ember-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('ember-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-app/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-app/initializers/export-application-global', ['exports', 'ember', 'ember-app/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-app/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-app/initializers/store', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ember-app/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ember-app/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-app/models/referral', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr()
  });
});
define('ember-app/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr(),
    loginName: _emberData.default.attr(),
    email: _emberData.default.attr(),
    phone: _emberData.default.attr(),
    referrals: _emberData.default.hasMany('referral')
  });
});
define('ember-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ember-app/router', ['exports', 'ember', 'ember-app/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('user');
  });

  exports.default = Router;
});
define('ember-app/routes/index', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend({
        model: function model() {
            //use when building to aspnetcore app
            return this.get('store').findAll('user');

            //use when running ember server
            // return [{
            //     id: 1,
            //     name: "Carson, James",
            //     loginName: "LAZYRIVER\jcarson",
            //     email: "jcarson@jimmycarson.com",
            //     phone: "123-456-7899",
            //     referrals: [
            //         {
            //             id: 1,
            //             name: "Carson-ReferralA"
            //         },
            //         {
            //             id: 2,
            //             name: "Carson-ReferralB"
            //         },
            //         {
            //             id: 3,
            //             name: "Carson-ReferralC"
            //         }
            //     ]
            // },
            // {
            //     id: 2,
            //     name: "Cowan, Donald",
            //     loginName: "LAZYRIVER\dcowan",
            //     email: "dcowan@jimmycarson.com",
            //     phone: "202-456-9876",
            //     referrals: [
            //         {
            //             id: 4,
            //             name: "Cowan-ReferralA"
            //         },
            //         {
            //             id: 5,
            //             name: "Cowan-ReferralB"
            //         },
            //         {
            //             id: 6,
            //             name: "Cowan-ReferralC"
            //         }
            //     ]
            // },
            // {
            //     id: 3,
            //     name: "King, Steve",
            //     loginName: "LAZYRIVER\sking",
            //     email: "sking@jimmycarson.com",
            //     phone: "202-456-5555",
            //     referrals: [
            //         {
            //             id: 7,
            //             name: "King-ReferralA"
            //         },
            //         {
            //             id: 8,
            //             name: "King-ReferralB"
            //         },
            //         {
            //             id: 9,
            //             name: "King-ReferralC"
            //         }
            //     ]

            //  }];
        }
    });
});
define('ember-app/routes/user', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend({});
});
define('ember-app/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend(_emberData.default.EmbeddedRecordsMixin, {
    attrs: {
      referrals: { embedded: 'always' }
    }
  });
});
define('ember-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("ember-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "P1G7GHm4", "block": "{\"statements\":[[0,\"\\n\"],[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-app/templates/application.hbs" } });
});
define("ember-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gSLiaN2+", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"Index.hbs Loaded\"],[14],[0,\"\\n\\n\"],[11,\"nav\",[]],[15,\"id\",\"ecert-menu\"],[15,\"tabindex\",\"-1\"],[15,\"role\",\"navigation\"],[13],[0,\"\\n    \"],[11,\"ul\",[]],[15,\"class\",\"nav nav-pills\"],[13],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"Home\"],[14],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"Announcements\"],[14],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"Help\"],[14],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"Initiate a Referral\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col-sm-12\"],[13],[0,\"\\n        \"],[11,\"main\",[]],[15,\"class\",\"container-fluid\"],[15,\"id\",\"mainContent\"],[15,\"tabindex\",\"-1\"],[13],[0,\"\\n            \"],[1,[26,[\"outlet\"]],false],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[11,\"article\",[]],[15,\"class\",\"listing\"],[13],[0,\"\\n    \"],[11,\"h3\",[]],[13],[1,[28,[\"user\",\"name\"]],false],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"name\"],[13],[0,\"\\n      \"],[11,\"span\",[]],[13],[0,\"Name:\"],[14],[0,\" \"],[1,[28,[\"user\",\"name\"]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"email\"],[13],[0,\"\\n      \"],[11,\"span\",[]],[13],[0,\"Email:\"],[14],[0,\" \"],[1,[28,[\"user\",\"email\"]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"phone\"],[13],[0,\"\\n      \"],[11,\"span\",[]],[13],[0,\"Phone:\"],[14],[0,\" \"],[1,[28,[\"user\",\"phone\"]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"loginName\"],[13],[0,\"\\n      \"],[11,\"span\",[]],[13],[0,\"loginName:\"],[14],[0,\" \"],[1,[28,[\"user\",\"loginName\"]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"referrals\"],[13],[0,\"\\n        \"],[11,\"span\",[]],[13],[0,\"referrals:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"user\",\"referrals\"]]],null,{\"statements\":[[0,\"            \"],[1,[28,[\"referral\",\"name\"]],false],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[\"referral\"]},null],[0,\"    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[\"user\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-app/templates/index.hbs" } });
});
define("ember-app/templates/user", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/of/J3YI", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-app/templates/user.hbs" } });
});


define('ember-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-app/app")["default"].create({"rootElement":"#EASContent","name":"ember-app","version":"0.0.0+cfd32dad"});
}
//# sourceMappingURL=ember-app.map
