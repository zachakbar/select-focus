function selectFocus(parentClass,focusClass){
	if($('select').length > 0){
		$('select').focus(function(){
			$(this).parents('.' + parentClass).addClass(focusClass);
		});
		$('select').blur(function(){
			$(this).parents('.' + parentClass).removeClass(focusClass);
		});
	}
}

$(document).ready(function(){
	selectFocus('styled-select','focus');
});