var fs = require('fs')
var PDF = require('pdfkit')

const PPI = 72; // points per inch

var PAGE_WIDTH = 8.5 * PPI;
var PAGE_HEIGHT = 11 * PPI;

var GUTTER_X = 0.5 * PPI;
var GUTTER_Y = 0.5 * PPI;

var MARGIN_X = 0.2 * PPI;
var MARGIN_Y = 0.2 * PPI;

// Y
// 1: 0.5
// 1: 0.5 + 0.983 + 0.2
// 1: 0.5 + (2*0.983) + (2*0.2)
// 1: 0.5 + (3*0.983) + (3*0.2)
// 1: 0.5 + (4*0.983) + (4*0.2)
// 1: 0.5 + (5*0.983) + (5*0.2)
// 1: 0.5 + (6*0.983) + (6*0.2)
// 1: 0.5 + (7*0.983) + (7*0.2)

// X
// 2: 0.5 + 0.2 + 2.311
// 3: 0.5 + 0.2 + 0.2 + 2.311 + 2.311

var BTN_W = 166.418;
var BTN_H = 66.85

function addImagePt(doc, img, x, y, w, h) {
  console.log(x, y, w, h);


  // doc.image(img, x, y, {width: w, height: h})
  doc.image('empty.png', x, y, {width: w, height: h})
  // doc.rect(x, y, w, h);
  doc.fill('non-zero');
}

function colX(x) {
  return GUTTER_X + x * (BTN_W + MARGIN_X)
}

function rowY(y) {
  return GUTTER_Y + y * (BTN_H + MARGIN_Y);
}

function addImageRc(doc, img, r, c, w, h) {
  var x = colX(c);
  var y = rowY(r);
  addImagePt(doc, img, x, y, w, h);
}

function addBlock(doc, img, r, c) {
  addImageRc(doc, img, r, c, BTN_W, BTN_H)
}

var img = null
var doc = new PDF()
doc.fillColor('red')

doc.pipe(fs.createWriteStream('file.pdf'))

for (var r = 0; r < 3; r++) {
  for (var c = 0; c < 7; c++) {
    addBlock(doc, img, c, r);
  }
}

doc.end()
