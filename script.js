const removeButton = document.getElementsByTagName("removeButton")[0];
const colorSelect = document.getElementById("colorSelect");

removeButton.addEventListener("click", function() {
  const selectedIndex = colorSelect.selectedIndex;
  if (selectedIndex !== -1) {
    colorSelect.options[selectedIndex].remove();
  }
});
