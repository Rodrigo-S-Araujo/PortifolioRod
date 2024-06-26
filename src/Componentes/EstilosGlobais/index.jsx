import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`

:root {

    --cor-da-fonte: #fff;
    --cor-bg-primaria: #232323;
    --cor-bg-secundaria: #505050;
    --fonte-primaria: "Bruno Ace", sans-serif;
    --fonte-secundaria: "Calistoga", serif;
}

html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%;
  font-family: var(--fonte-primaria);
}
body {
  margin: 0;
  min-height: 100vh;
}
main {
  display: block;
}
h1 {
  font-size: 2rem;
  margin: 0.2em 0;
  color : var(--cor-da-fonte);
}
h2 {
  font-size: 1.6rem;
  margin: 0.2em 0;
  color : var(--cor-da-fonte);
}
h3 {
  font-size: 1rem;
  font-weight: 300;
  margin: 0.2em 0;
  color : var(--cor-da-fonte);
}
h4 {
  font-size: 0.9;
  font-weight: 300;
  margin: 0.2em 0;
  color : var(--cor-da-fonte);
}
h5 {
  font-family: var(--fonte-secundaria);
  font-size: 0.75rem;
  font-weight: 100;
  margin: 0.2em 0;
  color : var(--cor-da-fonte);
}
h6 {
  font-family: var(--fonte-secundaria);
  font-size: 0.68rem;
  font-weight: 100;
  margin: 0.2em 0;
  color : var(--cor-da-fonte);
}
p {
  font-family: var(--fonte-secundaria);
  font-size: 0.9rem;
  font-weight: 100;
  margin: 0.2em 0;
  color : var(--cor-da-fonte);
}
hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input { 
  overflow: visible;
}
button,
select { 
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
`;

export default EstilosGlobais;
