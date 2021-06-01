/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["el", "la"];
  var adj = ["genial", "gran", "espectacular", "inusual"];
  var noun = ["jogger", "racoon", "test"];
  var dot = [".com", ".cl", ".net", ".dev", ".co", ".org", ".io"];

  function generate(pronoun, adj, noun, dot) {
    let domain = "";
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < dot.length; l++) {
            domain += pronoun[i] + adj[j] + noun[k] + dot[l] + "\n";
          }
        }
      }
    }
    return domain;
  }
  function randomize(pronoun, adj, noun, dot) {
    let rndPronoun = Math.floor(Math.random() * pronoun.length);
    let rndAdj = Math.floor(Math.random() * adj.length);
    let rndNoun = Math.floor(Math.random() * noun.length);
    let rndDot = Math.floor(Math.random() * dot.length);
    let domain =
      pronoun[rndPronoun] + adj[rndAdj] + noun[rndNoun] + dot[rndDot];
    return domain;
  }
  let parraf = document.createElement("P");
  parraf.innerText = generate(pronoun, adj, noun, dot);
  document.querySelector(".container-fluid").appendChild(parraf);

  //building feature
  console.log(randomize(pronoun, adj, noun, dot));
};
