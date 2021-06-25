
function changeMode(size, weight, transform, background, color) {
  const body = document.body
  return function() {
    body.style.fontSize = size;
    body.style.fontWeight = weight;
    body.style.textTransform = transform;
    body.style.backgroundColor = background;
    body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  // Paragraph
  let paragraph = document.createElement('P');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  //Spooky Button
  let spookyButton = document.createElement("button");
  spookyButton.textContent = 'Spooky';
  spookyButton.onclick = function() {
    spooky();
  };
  document.body.appendChild(spookyButton);

  //DrakMode Button
  let darkButton = document.createElement("button");
  darkButton.textContent = 'Dark mode';
  darkButton.onclick = function() {
    darkMode();
  };
  document.body.appendChild(darkButton);

  //DrakMode Button
  let ScreamButton = document.createElement("button");
  ScreamButton.textContent = 'Scream mode';
  ScreamButton.onclick = function() {
    screamMode();
  };
  document.body.appendChild(ScreamButton);
}

main();