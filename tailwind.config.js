/** @type {import('tailwindcss').Config} */

export default {

content: [
"./index.html",
"./src/**/*.{js,jsx}"
],

theme: {

extend: {

colors: {

background:"#07111f",

primary:"#00d9ff",

secondary:"#00ff88",

card:"#111827"

},

fontFamily:{

heading:["Poppins","sans-serif"],

body:["Inter","sans-serif"]

}

}

},

plugins:[]

}