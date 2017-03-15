# select-focus
jQuery function to add focus class to styled-select box. Intended to be used with <code>.styled-select</code> class from the <a href="https://github.com/zachakbar/boilerplate" target="_blank">boilerplate</a>.

<pre>
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
</pre>
