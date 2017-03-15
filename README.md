# select-focus
jQuery function to add focus class to styled-select box. To be used with <code>.styled-select</code> class from the <a href="https://github.com/zachakbar/boilerplate" target="_blank">boilerplate</a>.

<pre>
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
</pre>
