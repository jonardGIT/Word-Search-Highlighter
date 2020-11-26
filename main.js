function searchWord(){
  
  var wordInput = document.getElementById("word-input").value;
  
  var word = document.getElementById("word").innerHTML;
  
  var firstIndex = word.indexOf(wordInput);
  var lastIndex = (firstIndex + wordInput.length);
  
  var filtered = word.replace(wordInput, `<span class="highlight">${wordInput}</span>`);

  document.getElementById("word").innerHTML = filtered;

  
  console.log(firstIndex);
  console.log(lastIndex);
  
  
}