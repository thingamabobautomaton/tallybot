var express = require('express');
var router = express.Router();
var Slack = require('node-slack');
var slack = new Slack('https://hooks.slack.com/services/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');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST to yesman */
router.post('/yesman',function(req,res) {
  var reply = slack.respond(req.body,function(hook) {

    return {
      text: 'Good point, ' + hook.user_name,
      username: 'Tallybot'
    };

  });

  res.json(reply);

});

module.exports = router;
