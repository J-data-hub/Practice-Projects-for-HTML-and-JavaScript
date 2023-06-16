document.getElementById('add-single-item-to-ls').addEventListener("click", function() {
  localStorage.setItem('name', 'Michael Lawrence');
 // updateUI();
}
document.getElementById('add-another-item-to-ls').addEventListener("click", function() {
  localStorage.setItem('users' JSON.stringify({name: 'John Lewis', food: 'pizza'}));
  updateUI();
}
document.getElementById('get-single-item-from-ls').addEventListener("click", function() {

});
document.getElementById('remove-single-item-from-ls').addEventListener("click", function() {

});
document.getElementById('remove-all-from-ls').addEventListener("click", function() {

});

function updateUI () {
  var values = [], keys=Object.keys(localStorage), i=keys.length;
  while(i--) {values.push(localStorage.getItem(keys[i]))};
  document.getElementById('ls-currently').textContent=values;
// i-- means subtract 1 for each iteration
  }


