var Connection = function(nextNode, condition) {
	this.nextNode = nextNode;
	this.condition = condition;
}
Connection.prototype.test = function(string){
	if (this.condition == undefined || this.condition === string){
		return true
	}
	return false;
};

module.exports = Connection