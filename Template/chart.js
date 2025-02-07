const container = document.getElementById('chart');

function kHzToMHz(kHz) {
  return kHz / 1000;
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

function generateBGwith03(title, content,  start, end, className, group = 0){
  generateBackground(title, content, start, end, className, group, true, true);
}
function generateBackground(title, content,  start, end, className, group = 0, is03 = false, isCenter = false){ 
  generateBand(title, content, start, end, className, group, isCenter);
  if(is03) className = className + " opacity-03";
  itemsSets.push({ type: "background", start, end, className, key: group});
}

function generateBand(title, content,  start, end, className, group = 0, isCenter = false){ 
  if(isCenter) itemsSets.push({ content, start: (start+end)/2, className, title: `${title} ${content} центральна ${kHzToMHz((start+end)/2)} MHz`, group });
  itemsSets.push({ content, start, end, className, title: `<div>${title} ${content} ${kHzToMHz(start)}-${kHzToMHz(end)} MHz</div>`, group });
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
    minorLabels: function (date, scale, step) {
      switch (scale) {
        case 'millisecond':
          return +(Math.round((new Date(date).getTime()/ 1000) + "e+2")  + "e-2") + " МГц";
        case 'second':
          return Math.round(new Date(date).getTime() / 1000) + " МГц";
        case 'minute':
          return +(Math.round((new Date(date).getTime()/ 1000000) + "e+2")  + "e-2") + " ГГц";
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
var timeline;
document.addEventListener("DOMContentLoaded", ()=>{
  groups = new vis.DataSet(dataSets);
  items = new vis.DataSet(itemsSets);

  timeline = new vis.Timeline(container, items, groups, options);
  
  timeline.on('click', function (properties) {
    if (properties.item) {
      const item = items.get(properties.item);
      console.log(item.content);
    }
  });
});

//var s = items.get().filter(x => x.content !== "Суперкам");
//timeline.setItems(s)
//items.get().filter(x => x.content === "Суперкам")