var $photoURL = document.querySelector('#photo-url');
var $img = document.querySelector('img');

$photoURL.addEventListener('input', handleInput);

/* Adds picture with URL */
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

  $ul.prepend(createEntry(values));

  $entryForm.reset();

  $entryForm.className = 'hidden';
  $entriesSec.className = 'container';
}

/* Entries */
function createEntry(entry) {
  var list = document.createElement('li');
  list.setAttribute('class', 'post');

  var divCol = document.createElement('div');
  divCol.setAttribute('class', 'column-half');
  var imgContainer = list.appendChild(divCol);

  var entryImg = document.createElement('img');
  entryImg.setAttribute('src', entry.photo);
  entryImg.setAttribute('alt', 'an image for the entry');
  entryImg.setAttribute('class', 'entry-img');
  imgContainer.appendChild(entryImg);

  var divCol2 = document.createElement('div');
  divCol2.className = 'column-half entries-text';
  var textContainer = list.appendChild(divCol2);

  var entryTitle = document.createElement('h1');
  entryTitle.textContent = entry.title;
  textContainer.appendChild(entryTitle);

  var entryNotes = document.createElement('h3');
  entryNotes.textContent = entry.notes;
  textContainer.appendChild(entryNotes);

  return list;
}

var $ul = document.querySelector('ul');

document.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var completeEntry = createEntry(data.entries[i]);
    $ul.appendChild(completeEntry);
  }
});

var $entriesNav = document.querySelector('a');
var $entriesSec = document.querySelector('#entries-sec');

$entriesNav.addEventListener('click', function (event) {
  $entryForm.className = 'hidden';
  $entriesSec.className = 'container';
});

var $entriesButton = document.querySelector('.entry-button');

$entriesButton.addEventListener('click', function (event) {
  $entryForm.className = '';
  $entriesSec.className = 'container hidden';
});
