document.addEventListener('DOMContentLoaded', function() {

  // code
  // ----

  var initCode = function() {
    var styles = document.querySelectorAll('.style-example');
    styles.forEach(function(el) {
      var newEl = document.createElement('pre');
      newEl.innerHTML = escapeHTML(el.innerHTML);
      insertAfter(newEl, el);
    });
  };

  var insertAfter = function(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  };

  var escapeHTML = function(str) {
    return str.replace(/</g, '&lt;').trim();
  };

  // initialize
  // ----------
  
  initCode();

});
