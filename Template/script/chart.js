const container = document.getElementById('chart');

function kHzToMHz(kHz) {
  return kHz / 1000;
}

function MHzTokHz(MHz) {
  return MHz * 1000;
}

function UUID(index){
  return uuid.get(index);
}

function getId(title, parentId, index, visible = true) {
  let uuidKey = title + index;

  if (!UUID(uuidKey)) {
    let newUUID = UUIDv4();
    uuid.set(uuidKey, newUUID);
    dataSets.push({
      id: newUUID,
      content: title,
      treeLevel: 3,
      visible,
    });
    dataSets.find(x => x.id === UUID(parentId)).nestedGroups.push(newUUID);
  }

  return UUID(uuidKey);
}

let uuid = new Map();
let localGroup = [];
let dataSets = [];
let itemsSets = [];

function generateBGwith03(title, content, start, end, className, group = 0) {
  generateBackground(title, content, start, end, className, group, true, true);
}
function generateBackground(title, content, start, end, className, group = 0, is03 = false, isCenter = false) {
  generateBand(title, content, start, end, className, group, isCenter);
  if (is03) className = className + " opacity-03";
  itemsSets.push({ type: "background", start, end, className, key: group });
}

function generateBand(title, content, start, end, className, group = 0, isCenter = false) {
  if (isCenter) itemsSets.push({ content, start: (start + end) / 2, className, title: `${title} ${content} центральна ${kHzToMHz((start + end) / 2)} MHz`, group });
  itemsSets.push({ content, start, end, className, title: `<div>${title} ${content} ${kHzToMHz(start)}-${kHzToMHz(end)} MHz</div>`, group });
}

function generateBandV2(title, content,  start, end, className, group = 0){ 
  itemsSets.push({ content: `${content} ${(start+end)/2000}`, start, end, className, title: `<div><p>${title} ${content} ${kHzToMHz(start)}-${kHzToMHz(end)} MHz<p></div>`, group });
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
  //minHeight: 350,
  //orientation: "both",
  start: 800000,
  end: 1600000,
  min: 0,
  max: 8000000,
  editable: false,
  zoomMax: 1000 * 60 * 60 * 24 * 7, // Maximum zoom level set to one week
  margin: { item: 0 },
  // groupTemplate: function (group) {
  //   var container = document.createElement("div");
  //   var label = document.createElement("span");
  //   label.innerHTML = group.content + " ";
  //   container.insertAdjacentElement("afterBegin", label);
  //   var hide = document.createElement("button");
  //   hide.innerHTML = "hide";
  //   hide.style.fontSize = "small";
  //   hide.addEventListener("click", function () {
  //     groups.update({ id: group.id, visible: false });
  //   });
  //   container.insertAdjacentElement("beforeEnd", hide);
  //   return container;
  // },
  format: {
    minorLabels: (date, scale, step) => {
      switch (scale) {
        case 'millisecond':
          return `<div>${+(Math.round((new Date(date).getTime() / 1000) + "e+2") + "e-2") + " МГц"}</div>`;
        case 'second':
          return `<div>${Math.round(new Date(date).getTime() / 1000) + " МГц"}</div>`;
        case 'minute':
          return `<div>${+(Math.round((new Date(date).getTime() / 1000000) + "e+2") + "e-2") + " ГГц"}</div>`;
      }
    },
    majorLabels: (date, scale, step) => ``
  }
};

var groups;
var items;
var timeline;

let start = $('[start]');
let end = $('[end]');
let span = $('[span]');
document.addEventListener("DOMContentLoaded", () => {
  groups = new vis.DataSet(dataSets);
  items = new vis.DataSet(itemsSets);

  timeline = new vis.Timeline(container, items, groups, options);
  let range = timeline.range.getRange();
  start.val(`${+(Math.round((range.start / 1000) + "e+2") + "e-2")} МГц`);
  end.val(`${+(Math.round((range.end / 1000) + "e+2") + "e-2")} МГц`);
  span.val(`${+(Math.round((range.end / 1000) - (range.start / 1000) + "e+2") + "e-2")} МГц`);
  timeline.on('rangechange', function () {
    range = timeline.range.getRange();
    start = $('[start]');
    end = $('[end]');
    span = $('[span]');
    start.val(`${+(Math.round((range.start / 1000) + "e+2") + "e-2")} МГц`);
    end.val(`${+(Math.round((range.end / 1000) + "e+2") + "e-2")} МГц`);
    span.val(`${+(Math.round((range.end / 1000) - (range.start / 1000) + "e+2") + "e-2")} МГц`);
  })

  timeline.on('click', function (properties) {
    if (properties.item) {
      const item = items.get(properties.item);
      console.log(item.content);
    }
  });

  $('input').on('input',function(){
    var s = parseInt(start.val(), 10);
    if(s !== NaN){
      s *= 1000;
      if(s > 0 && s < 8000000){
        timeline.setWindow({start: s});
      }
    }
    var e = parseInt(start.val(), 10);
    if(e !== NaN){
      e *= 1000;
      if(e > 0 && e < 8000000){
        timeline.setWindow({end: e});
      }
    }
    var d = parseInt(start.val(), 10);
   });
});

//var s = items.get().filter(x => x.content !== "Суперкам");
//timeline.setItems(s)
//items.get().filter(x => x.content === "Суперкам")

