var Node = require('./node')

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
}

Game.prototype.addNode = function(node, condition){
		for (var key in this.nodes){
			if (this.nodes.hasOwnProperty(key)){
				if (key == node) throw new Error();
			}
		}
		this.nodes[node] = new Node(node, condition);
		if (this.startingPoint == null){
			this.startingPoint = this.nodes[node];
		}
		return this.nodes[node];
	};

Game.prototype.getNode = function(nodeTitle){
		if (nodeTitle in this.nodes) return this.nodes[nodeTitle];
	};

Game.prototype.connect = function(node1, node2, answer){
	this.nodes[node1].connect(this.nodes[node2], answer);
}
module.exports = Game