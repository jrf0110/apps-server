var claude = require('claude');

claud.init({
  clientId:     process.env.GITHUB_CLIENT_ID
, clientSecret: process.env.GITHUB_CLIENT_SECRET
, appsDir:      '/apps'
, port:         3001
});