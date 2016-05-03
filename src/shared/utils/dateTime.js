Date.prototype.yymmddhhmm = function(delimiter){
	 // body...  
	 delimiter = delimiter || '-';
	 var yy = this.getFullYear().toString();
	 var mm = (this.getMonth()+1).toString();
	 var dd = this.getDate().toString();
	 var hh = this.getHours().toString();
	 var mm = this.getMinutes().toString();
	 return yy+'年'+mm+'月'+dd+'日'+hh+'时'+mm+'分钟';
};

export function yymmddhhmm(delimiter){
	return new Date().yymmddhhmm('-');
}