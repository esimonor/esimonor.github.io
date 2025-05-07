// Get the icon elements
const icons = document.querySelectorAll('.icon');

// Get all the hidden divs and their draggable containers
const hiddenDivs = document.querySelectorAll('.hidden');
const windows = document.querySelectorAll('.window');

// Get the close buttons for each hidden div
const closeBtns = document.querySelectorAll('.close-btn');

// Loop through each icon and add a click event listener
icons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    // Show the corresponding hidden div when the icon is clicked
    hiddenDivs[index].style.display = 'block';
  });
});

// Make each window draggable
windows.forEach(window => {
  const header = window.querySelector('.window-header');

  header.addEventListener('mousedown', startDragging);

  function startDragging(event) {
    const draggableDiv = window;
    const offsetX = event.clientX - draggableDiv.offsetLeft;
    const offsetY = event.clientY - draggableDiv.offsetTop;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);

    function drag(event) {
      draggableDiv.style.left = event.clientX - offsetX + 'px';
      draggableDiv.style.top = event.clientY - offsetY + 'px';
    }

    function stopDragging() {
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', stopDragging);
    }
  }
});

// Add event listener to the close buttons for each hidden div
closeBtns.forEach((closeBtn, index) => {
  closeBtn.addEventListener('click', () => {
    hiddenDivs[index].style.display = 'none';
  });
});