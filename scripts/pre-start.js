const fs = require('fs');
const path = require('path');
const util = require('./util');
const ngrok = require('ngrok');
const ncp = require("copy-paste");

util.setHostVariable('dev');

// https://qiita.com/hiesiea/items/aba770ea9cafb0d171bb
connectNgrok().then(url => {
  util.updateConnectConfig(url);
  ncp.copy(`${url}/atlassian-connect.json`);
});

async function connectNgrok() {
  let url = await ngrok.connect(3000);
  return url;
}

