var cron = require("node-cron");
var shell = require("shelljs");

cron.schedule("0 8 * * *", function () {
  shell.exec("node main.js");
});
