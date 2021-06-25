function createElement(data) {
  let paragraph = document.createElement("P");
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow"
  );

  xhr.responseType = "json";

  xhr.send();
  xhr.onload = () => callback(xhr.response.query.pages["21721040"].extract);
}

queryWikipedia(createElement());
