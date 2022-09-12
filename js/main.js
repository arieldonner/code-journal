var $photoURL = document.querySelector('#photo-url');
var $img = document.querySelector('img');

$photoURL.addEventListener('input', handleInput);

function handleInput(event) {
  $img.setAttribute('src', event.target.value);
}

var $entryForm = document.querySelector('#entry-form');

$entryForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var values = {
    title: document.forms[0].elements.title.value,
    photo: document.forms[0].elements['photo-url'].value,
    notes: document.forms[0].elements.notes.value
  };

  values.nextEntryId = data.nextEntryId;
  data.nextEntryId += 1;
  data.entries.unshift(values);

  $img.setAttribute('src', '../images/placeholder-image-square.jpg');

  $entryForm.reset();
}
