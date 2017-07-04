$.fn.schmeisser = function() {
	return this.each(function() {
		$(this).html($(this).html().replace(/([^> 0-9.,?!:;()\"«»]{4,}(?![^<]*>))/g, function(str){return str + ' там, ' + str.replace(/[бвгджзйклмнпрстфхцчшщсbcdfghklmnpqrstvwxz]*(?=[аеиоуыэюяaeijouy])/i, 'шм').toLowerCase()}));
	})
};