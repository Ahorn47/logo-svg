const inquirer = require("inquirer");

// fs system
const fs = require("fs");

// import 
const {Triangle, Square, Circle} = require("./lib/shapes")

function writetoFile(fileName, answers) {
    let svg = "";
    svg = svg + `<svg width="${answers.width}" height="${answers.height}">`;

    if (answers.shape === "triangle") {
        
    }