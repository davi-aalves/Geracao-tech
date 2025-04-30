// Switch Case

let mode = "dark";

switch (mode) {
  case "dark":
    document.querySelector("body").style.backgroundColor = "grey";
    break;

  case "red":
    document.querySelector("body").style.backgroundColor = "red";
    break;

  case "yellow":
    document.querySelector("body").style.backgroundColor = "yellow";
    break;

  default:
    document.querySelector("body").style.backgroundColor = "white";
}
