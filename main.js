var cron = require("node-cron");
var shell = require("shelljs");
var request = require("request");

request({
        uri: "http://pinupparfum.fr/modules/ps_reminder/cron.php?secure_key=UDAPIESARKKIX2RT",
    },
    function(error, response, body) {
        console.log(response);
    }
);