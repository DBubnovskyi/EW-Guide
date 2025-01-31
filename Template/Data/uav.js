uuid.set(1, UUIDv4());
uuid.set(10, UUIDv4());
uuid.set(11, UUIDv4());
uuid.set(12, UUIDv4());

dataSets.extend([{
    id: UUID(1),
    content: `БпЛА`,
    treeLevel: 1,
    nestedGroups: [UUID(10), UUID(11)],
},
{
    id: UUID(10),
    content: `Крила`,
    treeLevel: 2,
},
{
    id: UUID(11),
    content: `Мультироторні`,
    treeLevel: 2,
}]);

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
    <td>Смуга робочої частоти</td>
    <td>${t6} MHz</td>
  </tr>
</table>`;

let ППРЧ = {
    characteristic: `управління/телеметрія`,
    type: `ППРЧ`,
};

let stationary = {
    characteristic: `управління/телеметрія`,
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

function addUav(name, start, end, band, type, className = `blueberry-season`, group = UUID(10)) {
    let title = table(name, type.characteristic, type.type, start, end, band);
    start = start * 1000;
    end = end * 1000;
    itemsSets.push({content: name, start, end, className, group, title, on: ()=>{alert(title)}});
}

// ЗСУ

// Союзники

// Підари
addUav(`Орлан`, 863, 922, 2, ППРЧ);
addUav(`Орлан`, 863, 922, 0.1, stationary);
addUav(`Орлан`, 960, 1215, 10, videoDigital);
addUav(`Зала`, 868, 870, 0.1, stationary);
addUav(`Зала`, 902, 928, 0.1, stationary);
addUav(`Суперкам`, 865, 870, 5, ППРЧ);
addUav(`Суперкам`, 870, 875, 5, ППРЧ);
addUav(`Суперкам`, 880, 895, 5, ППРЧ);
addUav(`Суперкам`, 900, 910, 5, ППРЧ);
addUav(`Суперкам`, 915, 925, 5, ППРЧ);
addUav(`Суперкам`, 930, 935, 5, ППРЧ);
addUav(`Суперкам`, 960, 1035, 5, ППРЧ);

addUav(`Орлан`, 2300, 2700, 10, videoDigital);


addUav(`Орлан`, 3300, 3800, 10, videoDigital);