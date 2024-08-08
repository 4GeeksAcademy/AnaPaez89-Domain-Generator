/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "anyone", "anybody", "their"];
let adj = ["great", "big", "small", "angry", "bad"];
let noun = ["jooger", "racoon", "bed", "city", "umbrella"];

let domainList = document.getElementById("listaDominios");
let domainHTML = "";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let domain = pronoun[i] + adj[j] + noun[k] + ".com";
      domainHTML +=
        '<li class="list-group-item bg-info bg-gradient text-secondary"><b>' +
        domain +
        "</b></li>";
    }
  }
}

domainList.innerHTML = domainHTML;
