uuid.set(1, UUIDv4());
uuid.set(1000, UUIDv4());
uuid.set(2000, UUIDv4());
uuid.set(2100, UUIDv4());
uuid.set(2110, UUIDv4());
uuid.set(2111, UUIDv4());
uuid.set(2112, UUIDv4());
uuid.set(2113, UUIDv4());
uuid.set(2114, UUIDv4());
uuid.set(2115, UUIDv4());
uuid.set(2116, UUIDv4());
uuid.set(2117, UUIDv4());
uuid.set(2200, UUIDv4());

dataSets.extend([{
  id: UUID(1),
  content: `БпЛА`,
  treeLevel: 1,
  nestedGroups: [UUID(1000), UUID(2000)],
  showNested: false,
},
{
  id: UUID(1000),
  content: `Крила`,
  treeLevel: 2,
  nestedGroups: [],
  showNested: false,
},
{
  id: UUID(2000),
  content: `Мультироторні`,
  treeLevel: 2,
  nestedGroups: [UUID(2100), UUID(2200)],
  showNested: false,
},
{
  id: UUID(2100),
  content: `FPV`,
  treeLevel: 3,
  nestedGroups: [UUID(2110)],
  showNested: false,
},
{
  id: UUID(2200),
  content: `DJI`,
  treeLevel: 3,
  nestedGroups: [],
  showNested: false,
},
{
  id: UUID(2110),
  content: `Відео 5.8`,
  treeLevel: 4,
  nestedGroups: [UUID(2111), UUID(2112), UUID(2113), UUID(2114), UUID(2115), UUID(2116), UUID(2117)],
  showNested: false,
},
{
  id: UUID(2111),
  content: `Канал А`,
  treeLevel: 5,
},
{
  id: UUID(2112),
  content: `Канал B`,
  treeLevel: 5,
},
{
  id: UUID(2113),
  content: `Канал E`,
  treeLevel: 5,
},
{
  id: UUID(2114),
  content: `Канал F`,
  treeLevel: 5,
},
{
  id: UUID(2115),
  content: `Канал R`,
  treeLevel: 5,
},
{
  id: UUID(2116),
  content: `Канал L`,
  treeLevel: 5,
},
{
  id: UUID(2117),
  content: `Канал X`,
  treeLevel: 5,
}
]);

let table = (t1, t2, t3, t4, t5, t6) => `
<table>
  ${t1 ?
    `<tr>
      <h3>${t1}</h3>
    </tr>` : ``}
  ${t2 ? `<tr>
    <td>Призначення сигналу</td>
    <td>${t2}</td>
  </tr>` : ``}
  ${t3 ? `<tr>
    <td>Характеристика сигналу</td>
    <td>${t3}</td>
  </tr>` : ``}
  ${t4 && t5 ? `<tr>
    <td>Діапазон частот</td>
    <td>${t4}-${t5} MHz</td>
  </tr>` : ``}
  ${t6 ? `<tr>
    <td>Ширина сигналу</td>
    <td>${t6} MHz</td>
  </tr>` : ``}
</table>`;

let ППРЧ = {
  characteristic: `управління та телеметрія`,
  type: `ППРЧ`,
};

let stationary = {
  characteristic: `управління та телеметрія`,
  type: `постійний сигнал`,
};

let videoDigital = {
  characteristic: `відео`,
  type: `цифрове`,
};

let videoAnalog = {
  characteristic: `відео`,
  type: `аналогове`,
};

function getWingId(title) {
  return getId(title, 1000);
}

function getRotorId(title) {
  return getId(title, 2000);
}

function addUav(name, start, end, band, type, className = `blueberry-season`) {
  let group = getWingId(name);
  let title = table(name, type.characteristic, type.type, start, end, band);
  start = start * 1000;
  end = end * 1000;
  itemsSets.push({ content: name, start, end, className, group, title });
}

function addQuad(name, start, end, band, type, id, className = `blueberry-season`) {
  let group = getId(name, id);
  let title = table(name, type.characteristic, type.type, start, end, band);
  start = start * 1000;
  end = end * 1000;
  itemsSets.push({ content: name, start, end, className, group, title });
}

function addQuadVideo(content, center, className, group = 0, header = `аналогове відео`) {
  let start = center - 4;
  let end = center + 4;
  let title = `<div>
      <h4>Канал ${content} ${header}</h4>
      <p>Центральна ${center} MHz</p>
      <p>Ширина ${(end - start)} MHz</p> 
      <p>Діапазон ${start}-${end} MHz<p>
    </div>`;

  addQuadV2(title, content, MHzTokHz(start), MHzTokHz(end), className, group, header);
}

function addQuadV2(title, content, start, end, className, group = 0, header = `Аналогове відео`) {
  itemsSets.push({ content: `${content}`, start, end, className, title, group });
}

//Загальні
generateBand("Діапазон каналів аналогового FPV відео на 5.8ГГц", "Аналогове відео на 5.8", 4990000, 5953000, 'green-season analog', UUID(2110), false)

function UUID_video(channel) {
  const uuids = {
    "A": 2111,
    "B": 2112,
    "E": 2113,
    "F": 2114,
    "R": 2115,
    "L": 2116,
    "X": 2117
  };
  return uuids[channel];
}

// Таблиця каналів та частот
const channels = {
  "A": [5865, 5845, 5825, 5805, 5785, 5765, 5745, 5725],
  "B": [5733, 5752, 5771, 5790, 5809, 5828, 5847, 5866],
  "E": [5705, 5685, 5665, 5645, 5885, 5905, 5925, 5945],
  "F": [5740, 5760, 5780, 5800, 5820, 5840, 5860, 5880],
  "R": [5658, 5695, 5732, 5769, 5806, 5843, 5880, 5917],
  "L": [5362, 5399, 5436, 5473, 5510, 5547, 5584, 5621],
  "X": [4990, 5020, 5050, 5080, 5110, 5140, 5170, 5200]
};

// Додавання відео каналів
for (const band in channels) {
  channels[band].forEach((frequency, index) => {
    addQuadVideo(`${band}${index + 1}`, frequency, 'green-season analog', UUID(UUID_video(band)));
  });
}

addQuad(`DJI Video`, 2400, 2484, ``, videoDigital, 2200);
addQuad(`PHANTOM 3`, 2400, 2476, 30, ППРЧ, 2200);
addQuad(`MAVIK 3`, 2400, 2483.5, ``, ППРЧ, 2200);

addQuad(`DJI Video`, 5150, 5250 , ``, videoDigital, 2200);
addQuad(`DJI Video`, 5725, 5850  , ``, videoDigital, 2200);
addQuad(`MAVIK 3`, 5725, 5850, ``, videoDigital, 2200);
addQuad(`MATRIX 300`, 2400, 2483.5, ``, ППРЧ, 2200);
addQuad(`MATRIX 300`, 5725, 5850, ``, videoDigital, 2200);

// ЗСУ

// Союзники

// Підари
addUav(`Орлан`, 863, 922, 2, { characteristic: ППРЧ.characteristic, type: `ППРЧ або постійний сигнал` });
addUav(`Орлан`, 960, 1215, 10, videoDigital);
addUav(`Орлан`, 2300, 2700, 10, videoDigital);
addUav(`Орлан`, 3300, 3800, 10, videoDigital);

addUav(`Зала`, 868, 870, 0.1, stationary);
addUav(`Зала`, 902, 928, 0.1, stationary);

addUav(`Суперкам`, 865, 875, 5, ППРЧ);
addUav(`Суперкам`, 880, 895, 5, ППРЧ);
addUav(`Суперкам`, 900, 910, 5, ППРЧ);
addUav(`Суперкам`, 915, 925, 5, ППРЧ);
addUav(`Суперкам`, 930, 935, 5, ППРЧ);
addUav(`Суперкам`, 960, 1035, 5, ППРЧ);

addUav(`Мерлін`, 860, 1000, 1, ППРЧ);
addUav(`Мерлін`, 2200, 2485, 5, videoDigital);

addUav(`Форпост`, 3345, 3355, 10, videoDigital);

addUav(`Елерон`, 868, 1020, 2, ППРЧ);
addUav(`Елерон`, 824, 849, 2, ППРЧ);
addUav(`Елерон`, 1203, 1253, 2, videoDigital);

addUav(`Гранат`, 865, 928, 15, ППРЧ);
addUav(`Гранат`, 2200, 2485, 5, videoDigital);