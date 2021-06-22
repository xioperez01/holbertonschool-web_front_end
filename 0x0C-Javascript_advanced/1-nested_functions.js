const welcome = "Welcome";

function outer() {
  alert(welcome);

  const course = "Holberton";

  function inner() {
    alert(welcome + " " + course);

    const exclamation = "!";

    function inception() {
      alert(welcome + " " + course + " " + exclamation);
    }

    inception();
  }
  inner();
}

outer();
