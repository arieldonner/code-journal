/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousJSON = localStorage.getItem('javascript-local-storage');

if (previousJSON !== null) {
  data = JSON.parse(previousJSON);
  var $noEntries = document.querySelector('#noEntries');
  $noEntries.className = 'text-center hidden';
}

window.addEventListener('beforeunload', handleBeforeUnload);

function handleBeforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJSON);
}
