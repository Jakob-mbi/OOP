import './style.css'

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;

}

Color.prototype.rgb = function() {
  return `rgb(${this.r},${this.g},${this.b})`
};

Color.prototype.hex = function(){

  const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  }

  return "#" + componentToHex(this.r) + componentToHex(this.g) + componentToHex(this.b);
}

Color.prototype.rgba = function(a){

  return `rgba(${this.r},${this.g},${this.b},${a})`
}

Color.prototype.hsl = function(){
  let r = this.r
  let g = this.g
  let b = this.b
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return `hsl(${
    60 * h < 0 ? 60 * h + 360 : 60 * h},${
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)}%,
    ${(100 * (2 * l - s)) / 2 }%)`
}

const box1 = document.querySelector("#color1")
const box2 = document.querySelector("#color2")
const box3 = document.querySelector("#color3")
const box4 = document.querySelector("#color4")


const classColor = new Color(209,37,37)

console.log(classColor)
console.log("RGB: " + classColor.rgb())
console.log("Hex:" +classColor.hex())
console.log("Hsl:" +classColor.hsl())
console.log("RGBA:" +classColor.rgba(0.5))

box1.style.backgroundColor = classColor.rgb();
box2.style.backgroundColor = classColor.hex();
box3.style.backgroundColor = classColor.rgba(0.5);
box4.style.backgroundColor = classColor.hsl();