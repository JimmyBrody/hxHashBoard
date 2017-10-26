Date.prototype.format = function(format) {
	if(!format) {
		format = this.fullPattern || "yyyy-MM-dd HH:mm:ss";
	}

	var o = {
		"M+": this.getMonth() + 1, // month
		"d+": this.getDate(), // day
		"H+": this.getHours(), // hour (24)
		"h+": this.getHours() % 12, // hour (12)
		"m+": this.getMinutes(), // minute
		"s+": this.getSeconds(), // second
		"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
		"S": this.getMilliseconds()
	};

	if(/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
			.substr(4 - RegExp.$1.length));
	}

	for(var k in o) {
		if(new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}

	return format;
};

function getDateByDays(days) {
	
	
	var r = Array.apply(null, new Array(days))
		.map((v, i) => {
			d = new Date();
			d.setDate(d.getDate() - i -1);
			return d.format("M-dd");
		});
		r = r.reverse();
		console.log(r);
	return r;
}
function getDateByDays2(days) {
	
	
	var r = Array.apply(null, new Array(days))
		.map((v, i) => {
			d = new Date();
			d.setDate(d.getDate() - i -1);
			return d.format("M-dd");
		});
		r = r.reverse();
		console.log(r);
	return r;
}

function getHByDays(hours) {
	
	
	var r = Array.apply(null, new Array(hours))
		.map((v, i) => {
			d = new Date();
			d.setHours(d.getHours() - i - 1);
			return d.format("HH:00");
		});
		r = r.reverse();
		
	return r;
}

function getMByNum(n) {
	
	
	var r = Array.apply(null, new Array(n))
		.map((v, i) => {
			d = new Date();
			d.setMonth(d.getMonth() - i - 1);
			return d.format("yyyy-MM");
		});
		r = r.reverse();
		
	return r;
}

function getYByNum(n) {
	
	
	var r = Array.apply(null, new Array(n))
		.map((v, i) => {
			d = new Date();
			d.setYear(d.getYear() - i - 1);
			return d.format("yyyy");
		});
		r = r.reverse();
		
	return r;
}