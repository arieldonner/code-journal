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

  values['data-entry-id'] = data.nextEntryId;
  data.nextEntryId += 1;
  data.entries.unshift(values);

  $img.setAttribute('src', '../images/placeholder-image-square.jpg');

  $ul.prepend(createEntry(values));

  $entryForm.reset();

  handleView('entry-form');

  if (data.entries.length !== 0) {
    $noEntries.className = 'text-center hidden';
  }
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

  var titleAndIcon = document.createElement('div');
  titleAndIcon.className = 'title-icon';
  textContainer.appendChild(titleAndIcon);

  var entryTitle = document.createElement('h1');
  entryTitle.textContent = entry.title;
  entryTitle.className = 'inline-block';
  titleAndIcon.appendChild(entryTitle);

  var editIcon = document.createElement('i');
  editIcon.className = 'fa-solid fa-pen';
  for (var i = 0; i < data.entries.length; i++) {
    editIcon.setAttribute('data-entryid', entry['data-entry-id']);
  }
  titleAndIcon.appendChild(editIcon);

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
    handleView(data.view);
  }
});

var $entriesNav = document.querySelector('a');
var $entriesSec = document.querySelector('#entries-sec');

$entriesNav.addEventListener('click', function (event) {
  handleView('entry-form');
});

var $entriesButton = document.querySelector('.entry-button');

$entriesButton.addEventListener('click', function (event) {
  $img.setAttribute('src', '../images/placeholder-image-square.jpg');
  $entryForm.reset();
  handleView('entries');
});

var $noEntries = document.querySelector('#noEntries');
if (data.entries.length !== 0) {
  $noEntries.className = 'text-center hidden';
}

function handleView(view) {
  data.view = view;
  if (view === 'entry-form') {
    $entryForm.className = 'hidden';
    $entriesSec.className = 'container';
  } else if (view === 'entries') {
    $entryForm.className = '';
    $entriesSec.className = 'container hidden';
  }
}

$ul.addEventListener('click', function (event) {
  if (event.target && event.target.tagName === 'I') {
    handleView('entries');
    var getId = parseInt(event.target.getAttribute('data-entryid'));
    for (var i = 0; i < data.entries.length; i++) {
      var currentId = data.entries[i]['data-entry-id'];
      var currentEntry = data.entries[i];
      if (currentId === getId) {
        data.editing = currentEntry;
      }
    }
  }
});
