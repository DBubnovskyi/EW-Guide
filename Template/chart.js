const container = document.getElementById('chart');

function kHzToMHz(kHz) {
  return kHz / 1000;
}

function UUID(index){
  return uuid.get(index);
}

let uuid = new Map();
let localGroup = [];
let dataSets = [];
let itemsSets = [];

function generateBGwith03(title, content,  start, end, className, group = 0){
  generateBackground(title, content, start, end, className, group, true);
}
function generateBackground(title, content,  start, end, className, group = 0, is03 = false){ 
  itemsSets.push({ content, start: (start+end)/2, className, title: `${title} ${content} центральна ${kHzToMHz((start+end)/2)} MHz`, group });
  itemsSets.push({ content, start, end, className, title: `${title} ${content} ${kHzToMHz(start)}-${kHzToMHz(end)} MHz`, group });
  if(is03) className = className + " opacity-03";
  itemsSets.push({ type: "background", start, end, className});
}

// millisecond: 'millisecond',
// second: 'second',
// minute: 'minute',
// hour: 'hour',
// weekday: 'weekday',
// day: 'day',
// week: 'week',
// month: 'month',
// year: 'year'

let options = {
  start: 885000,
  end: 940000,
  min: 0,
  max: 8000000,
  zoomMax: 1000 * 60 * 60 * 24 * 7, // Maximum zoom level set to one week
  format: {
    minorLabels: function (date, scale, step) {
      switch (scale) {
        case 'millisecond':
          return +(Math.round((new Date(date).getTime()/ 1000) + "e+2")  + "e-2") + " MHz";
        case 'second':
          return Math.round(new Date(date).getTime() / 1000) + " MHz";
        case 'minute':
          return +(Math.round((new Date(date).getTime()/ 1000000) + "e+2")  + "e-2") + " MHz";
      }
    },
    majorLabels: {
      millisecond: '',
      second: '',
      minute: '',
      hour: '',
      weekday: '',
      day: '',
      week: '',
      month: '',
      year: ''
    }
  }
};

var groups;
var items;
document.addEventListener("DOMContentLoaded", ()=>{
  groups = new vis.DataSet(dataSets);
  items = new vis.DataSet(itemsSets);

  var timeline = new vis.Timeline(container, items, groups, options);
  
  timeline.on('click', function (properties) {
    if (properties.item) {
      const item = items.get(properties.item);
      console.log(item.content);
    }
  });
});