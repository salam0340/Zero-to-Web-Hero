function updateTitle() {
    var newTitle = document.getElementById('titleInput').value;
    if(newTitle.trim() !== "") {
      document.title = newTitle;
      alert('Title updated to: ' + newTitle);
    } else {
      alert('Please enter a valid title.');
    }
  }