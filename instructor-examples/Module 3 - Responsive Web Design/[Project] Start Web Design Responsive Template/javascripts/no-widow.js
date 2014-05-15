(function(){
  var paragraphs = document.getElementsByTagName('p');
  for (var i = paragraphs.length - 1; i >= 0; i--) {
    var p = paragraphs[i];
    var pArray = p.innerText.split(' ');
    var last = pArray.pop();
    var secondLast = pArray.pop();
    var unwidowed = secondLast + "&nbsp;" + last;

    if( last !== undefined && secondLast !== undefined ){
      pArray.push(unwidowed);
      p.innerHTML = pArray.join(' ');
    };

  };
})();
