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

dataSets.extend([{
  id: UUID(1),
  content: `БпЛА`,
  treeLevel: 1,
  nestedGroups: [UUID(1000), UUID(2000)],
},
{
  id: UUID(1000),
  content: `Крила`,
  treeLevel: 2,
  nestedGroups: [],
},
{
  id: UUID(2000),
  content: `Мультироторні`,
  treeLevel: 2,
  nestedGroups: [UUID(2100)],
},
{
  id: UUID(2100),
  content: `FPV`,
  treeLevel: 2,
  nestedGroups: [UUID(2110)],
},
{
  id: UUID(2110),
  content: `Відео 5.8`,
  treeLevel: 2,
  nestedGroups: [UUID(2111), UUID(2112), UUID(2113), UUID(2114), UUID(2115), UUID(2116)],
  showNested: false,
},
{
  id: UUID(2111),
  content: `Канал А`,
  treeLevel: 2,
  nestedGroups: [],
},
{
  id: UUID(2112),
  content: `Канал B`,
  treeLevel: 2,
  nestedGroups: [],
},
{
  id: UUID(2113),
  content: `Канал C`,
  treeLevel: 2,
  nestedGroups: [],
},
{
  id: UUID(2114),
  content: `Канал D`,
  treeLevel: 2,
  nestedGroups: [],
},
{
  id: UUID(2115),
  content: `Канал E`,
  treeLevel: 2,
  nestedGroups: [],
},
{
  id: UUID(2116),
  content: `Канал F`,
  treeLevel: 2,
  nestedGroups: [],
}
]);

let table = (t1, t2, t3, t4, t5, t6) => `
<table>
  <tr>
    <td><h3>${t1}</h3></td>
  </tr>
  <tr>
    <td>Призначення сигналу</td>
    <td>${t2}</td>
  </tr>
  <tr>
    <td>Характеристика сигналу</td>
    <td>${t3}</td>
  </tr>
  <tr>
    <td>Діапазон частот</td>
    <td>${t4}-${t5} MHz</td>
  </tr>
  <tr>
    <td>Ширина сигналу</td>
    <td>${t6} MHz</td>
  </tr>
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

//Загальні
generateBand("Діапазон каналів аналогового FPV відео на 5.8ГГц", "Аналогове відео на 5.8", 5362000, 5953000, 'green-season', UUID(2110), false)

generateBand("1 Канал FPV відео", "А1", 5861000, 5869000, 'green-season', UUID(2111), true)
generateBand("2 Канал FPV відео", "А2", 5844000, 5849000, 'green-season', UUID(2111), true)
generateBand("3 Канал FPV відео", "А3", 5825000, 5833000, 'green-season', UUID(2111), true)
generateBand("4 Канал FPV відео", "А4", 5805000, 5813000, 'green-season', UUID(2111), true)
generateBand("5 Канал FPV відео", "А5", 5785000, 5793000, 'green-season', UUID(2111), true)
generateBand("6 Канал FPV відео", "А6", 5765000, 5773000, 'green-season', UUID(2111), true)
generateBand("7 Канал FPV відео", "А7", 5745000, 5753000, 'green-season', UUID(2111), true)
generateBand("8 Канал FPV відео", "А8", 5725000, 5733000, 'green-season', UUID(2111), true)

generateBand("1 Канал FPV відео", "B1", 5733000, 5741000, 'green-season', UUID(2112), true)
generateBand("2 Канал FPV відео", "B2", 5752000, 5759000, 'green-season', UUID(2112), true)
generateBand("3 Канал FPV відео", "B3", 5771000, 5779000, 'green-season', UUID(2112), true)
generateBand("4 Канал FPV відео", "B4", 5790000, 5797000, 'green-season', UUID(2112), true)
generateBand("5 Канал FPV відео", "B5", 5809000, 5817000, 'green-season', UUID(2112), true)
generateBand("6 Канал FPV відео", "B6", 5828000, 5835000, 'green-season', UUID(2112), true)
generateBand("7 Канал FPV відео", "B7", 5847000, 5855000, 'green-season', UUID(2112), true)
generateBand("8 Канал FPV відео", "B8", 5866000, 5873000, 'green-season', UUID(2112), true)

generateBand("1 Канал FPV відео", "C1", 5705000, 5713000, 'green-season', UUID(2113), true)
generateBand("2 Канал FPV відео", "C2", 5685000, 5693000, 'green-season', UUID(2113), true)
generateBand("3 Канал FPV відео", "C3", 5665000, 5673000, 'green-season', UUID(2113), true)
generateBand("4 Канал FPV відео", "C4", 5645000, 5653000, 'green-season', UUID(2113), true)
generateBand("5 Канал FPV відео", "C5", 5885000, 5893000, 'green-season', UUID(2113), true)
generateBand("6 Канал FPV відео", "C6", 5905000, 5913000, 'green-season', UUID(2113), true)
generateBand("7 Канал FPV відео", "C7", 5925000, 5933000, 'green-season', UUID(2113), true)
generateBand("8 Канал FPV відео", "C8", 5945000, 5953000, 'green-season', UUID(2113), true)

generateBand("1 Канал FPV відео", "D1", 5740000, 5748000, 'green-season', UUID(2114), true)
generateBand("2 Канал FPV відео", "D2", 5760000, 5768000, 'green-season', UUID(2114), true)
generateBand("3 Канал FPV відео", "D3", 5780000, 5788000, 'green-season', UUID(2114), true)
generateBand("4 Канал FPV відео", "D4", 5800000, 5808000, 'green-season', UUID(2114), true)
generateBand("5 Канал FPV відео", "D5", 5820000, 5828000, 'green-season', UUID(2114), true)
generateBand("6 Канал FPV відео", "D6", 5840000, 5848000, 'green-season', UUID(2114), true)
generateBand("7 Канал FPV відео", "D7", 5860000, 5868000, 'green-season', UUID(2114), true)
generateBand("8 Канал FPV відео", "D8", 5880000, 5888000, 'green-season', UUID(2114), true)

generateBand("1 Канал FPV відео", "E1", 5658000, 5666000, 'green-season', UUID(2115), true)
generateBand("2 Канал FPV відео", "E2", 5695000, 5703000, 'green-season', UUID(2115), true)
generateBand("3 Канал FPV відео", "E3", 5732000, 5740000, 'green-season', UUID(2115), true)
generateBand("4 Канал FPV відео", "E4", 5769000, 5777000, 'green-season', UUID(2115), true)
generateBand("5 Канал FPV відео", "E5", 5806000, 5814000, 'green-season', UUID(2115), true)
generateBand("6 Канал FPV відео", "E6", 5843000, 5851000, 'green-season', UUID(2115), true)
generateBand("7 Канал FPV відео", "E7", 5880000, 5888000, 'green-season', UUID(2115), true)
generateBand("8 Канал FPV відео", "E8", 5917000, 5925000, 'green-season', UUID(2115), true)

generateBand("1 Канал FPV відео", "F1", 5362000, 5370000, 'green-season', UUID(2116), true)
generateBand("2 Канал FPV відео", "F2", 5399000, 5407000, 'green-season', UUID(2116), true)
generateBand("3 Канал FPV відео", "F3", 5436000, 5444000, 'green-season', UUID(2116), true)
generateBand("4 Канал FPV відео", "F4", 5473000, 5481000, 'green-season', UUID(2116), true)
generateBand("5 Канал FPV відео", "F5", 5510000, 5518000, 'green-season', UUID(2116), true)
generateBand("6 Канал FPV відео", "F6", 5547000, 5555000, 'green-season', UUID(2116), true)
generateBand("7 Канал FPV відео", "F7", 5584000, 5592000, 'green-season', UUID(2116), true)
generateBand("8 Канал FPV відео", "F8", 5621000, 5629000, 'green-season', UUID(2116), true)

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