function selectFocus(){
	if($('select').length > 0){
		$('select').focus(function(){
			$(this).parent().addClass('focus');
		});
		$('select').blur(function(){
			$(this).parent().removeClass('focus');
		});
	}
}

$(document).ready(function(){
	selectFocus();
});