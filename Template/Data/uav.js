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
    treeLevel: 3,
}]);

//var badge = `<span class="start">ППРЧ 2МГц</span><span class="end">телеметрія</span>`;
// ЗСУ

// Союзники

// Підари
itemsSets.push({ content: `Орлан`, start: 900000, end: 930000, className: `blueberry-season`, group: UUID(10), title: `Орлан: 900-930` });
itemsSets.push({ content: `Зала`, start: 900000, end: 930000, className: `blueberry-season`, group: UUID(10), title: `Зала: 900-930` });
itemsSets.push({ content: `Суперкам`, start: 1000000, end: 1030000, className: `blueberry-season`, group: UUID(10), title: `Суперкам: 1000-1030` });