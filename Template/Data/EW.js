uuid.set(1, UUIDv4());
uuid.set(1000, UUIDv4());
uuid.set(2000, UUIDv4());

dataSets.extend([{
    id: UUID(1),
    content: `РЕБ`,
    treeLevel: 1,
    nestedGroups: [UUID(1000), UUID(2000)],
    showNested: false,
},
{
    id: UUID(1000),
    content: `Подавлення`,
    treeLevel: 2,
    nestedGroups: [],
    showNested: false,
},
{
    id: UUID(2000),
    content: `Виявлення`,
    treeLevel: 2,
    nestedGroups: [],
    showNested: false,
}]);

let tableEW = (t1, t2, t3, t4, t5, t6) => `
<table>
    <tr>
        <h3>${t1}</h3>
    </tr>
    ${t2 ?
        `<tr>${t2}</tr>` : ``
    }
    ${t3 ?
        `<tr>
            <td>Тип перешкоди</td>
            <td>${t3}</td>
        </tr>` : ``
    }
    <tr>
        <td>Діапазон частот</td>
        <td>${t4}-${t5} MHz</td>
    </tr>
    ${t6 ?
        `<tr>
            <td>Смуга подавлення</td>
            <td>${t6}</td>
        </tr>` : ``
    }
</table>`;


function getInterferenceId(title) {
    return getId(title, 1000, `Interference`);
}

function getScanId(title) {
    return getId(title, 2000, `Scan`);
}

function addInterference(name, start, end, type, className = `red-season`) {
    addElement(name, start, end, type, getInterferenceId(name), className);
}

function addScan(name, start, end, type, className = `green-season`) {
    addElement(name, start, end, type, getScanId(name), className);
}

function addElement(name, start, end, type, group, className) {
    let title = tableEW(name, type.t2, type.t3, start, end, type.t6);
    start = start * 1000;
    end = end * 1000;
    itemsSets.push({ content: name, start, end, className, group, title });
}

// ЗСУ

// Союзники

// Підари
addInterference(`Р-934Б`, 100, 400, { t2: `АВТОМАТИЗОВАНА СТАНЦІЯ ПЕРЕШКОД АВІАЦІЙНОГО УКХ РАДІОЗВ'ЯЗКУ`, t6: `6 ліній по 15 МГц` });
addScan(`Р-934Б`, 100, 400, { t2: `АВТОМАТИЗОВАНА СТАНЦІЯ ПЕРЕШКОД АВІАЦІЙНОГО УКХ РАДІОЗВ'ЯЗКУ` });

addInterference(`Р-330БМВ`, 25, 960, { t2: `АВТОМАТИЗОВАНА СТАНЦІЯ ПЕРЕШКОД УКХ РАДІОЗВ’ЯЗКУ ТАКТИЧНОЇ ЛАНКИ УПРАВЛІННЯ`, t6: `подавлення робочих частот у режимі ППРЧ` });
addScan(`Р-330БМВ`, 25, 960, { t2: `АВТОМАТИЗОВАНА СТАНЦІЯ ПЕРЕШКОД УКХ РАДІОЗВ’ЯЗКУ ТАКТИЧНОЇ ЛАНКИ УПРАВЛІННЯ` });

addInterference(`Р-378БМВ`, 1.5, 30, { t2: `АВТОМАТИЗОВАНА СТАНЦІЯ ПЕРЕШКОД УКХ РАДІОЗВ’ЯЗКУ ТАКТИЧНОЇ ЛАНКИ УПРАВЛІННЯ` });
addScan(`Р-378БМВ`, 25, 960, { t2: `АВТОМАТИЗОВАНА СТАНЦІЯ ПЕРЕШКОД УКХ РАДІОЗВ’ЯЗКУ ТАКТИЧНОЇ ЛАНКИ УПРАВЛІННЯ` });

addInterference(`ЛЕЄР-2`, 30, 2700, { t2: `Мобільний автоматизований комплекс РЕБ` });
addScan(`ЛЕЄР-2`, 20, 2700, { t2: `Мобільний автоматизований комплекс РЕБ` });

addInterference(`Р-330Ж "Житель"`, 800, 960, { t2: `Мобільний автоматизований комплекс РЕБ` });
addInterference(`Р-330Ж "Житель"`, 1227.2, 1228, { t2: `Мобільний автоматизований комплекс РЕБ`, 
    t6: `радіоподавлення мобільних станцій систем</br> пересувного супутникового зв’язку Інмарсат і Ірідіум` });
addInterference(`Р-330Ж "Житель"`, 1575, 1576, { t2: `Мобільний автоматизований комплекс РЕБ`, 
    t6: `радіоподавлення мобільних станцій систем</br> пересувного супутникового зв’язку Інмарсат і Ірідіум` });
addInterference(`Р-330Ж "Житель"`, 1500, 1700, { t2: `Мобільний автоматизований комплекс РЕБ`, 
    t6: `радіоподавлення мобільних станцій систем</br> пересувного супутникового зв’язку Інмарсат і Ірідіум` });
addInterference(`Р-330Ж "Житель"`, 1700, 1900, { t2: `Мобільний автоматизований комплекс РЕБ`, 
    t6: `радіоподавлення базових станцій систем</br> стільникового зв’язку стандарту GSM 1900` });
addScan(`Р-330Ж "Житель"`, 100, 2000, { t2: `Мобільний автоматизований комплекс РЕБ` });
