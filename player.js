var inquirer = require('inquirer');
var game = require('./game.source');
var rl = require('readline');
/*

This file has no test specs. It might be a tricky one. You need to look at 
the docs for the inquirer npm package, and see if you can figure out how 
to make the game run!

If you're running out of time, check out my solution to the problem:
https://gist.github.com/zekenie/e90faf30a789d65c6459

*/
var answer;
var i = rl.createInterface(process.stdin, process.stdout, null);
  i.question('Write your name: ', function(_answer) {
  	answer = _answer;
  	//console.log(answer);
  i.close();
  });

i.on('close', function(){
	var startingNode = game.startingPoint
	var play = function(node){
		node.text = node.text.replace('NAME', answer);
			var choiceList = node.getConnectionStrings();
			if (choiceList.length === 0) {
				return console.log(node.text);
				}
				inquirer.prompt([{
					type: 'list',
					name: 'choice',
					message: node.text,
					choices: choiceList
				}], function(answer){
					var nextNode = node.route(answer.choice);
					play(nextNode);
				})
			}
			play(startingNode);	;
})




