var claude = require('claude');

claude.init({
  github: {               // github
    clientId:             process.env.GITHUB_CLIENT_ID
  , clientSecret:         process.env.GITHUB_CLIENT_SECRET
  , username:             'jrf0110'
  }

, nginx: {                // nginx
    configFile:           '/usr/local/etc/nginx/nginx.conf'
  , includeDetection:     'include       mime.types;'
  , tab:                  '    '
  , restart:              'nginx -s stop && nginx'
  // , restart:              ['nginx ; nginx', '-s', 'stop']
  }

                          // misc
, appDir:                 '/apps'
, dataPath:               process.cwd() + '/data.js'
, port:                   3001
});