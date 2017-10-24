function getDateByday(days) {
	var now = new Date(); // 这个算法能自动处理闰年和非闰年。2012年是闰年，所以2月有29号
	var arr;
	var s = '';
	var i = 0;
	while(i < 7) {

		s += now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() + '\n';
		now = new Date(now - 24 * 60 * 60 * 1000); // 这个是关键！！！减去一天的毫秒数效果就是把日期往前推一天
		i++;
	}

	s
}