var Connection = require('./connection')

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
};

Node.prototype.getConnectionStrings = function(){
	var connectStringArr = [];
	for (var i = 0; i<this.connections.length; i++){
		connectStringArr.push(this.connections[i].condition);
	}
	return connectStringArr;
};

Node.prototype.hasConnectionCondition = function(connectCondition){
	var connectionArr = this.getConnectionStrings();
	for (var i = 0; i<connectionArr.length; i++){
		if (connectCondition == connectionArr[i]) return true;
	}
	return false;
};

Node.prototype.connect = function(node, condition){
	var newConnection = new Connection(node, condition);
	for (var j = 0; j< this.connections.length; j++){
		if (this.connections[j].condition == condition) throw new Error();
	}
	this.connections.push(newConnection);
};

Node.prototype.route = function(condition){
	for (var i = 0; i< this.connections.length; i++){
		if (condition === this.connections[i].condition){
			return this.connections[i].nextNode;
		}
	}
};

module.exports = Node