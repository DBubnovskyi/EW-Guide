uuid.set(1, UUIDv4());
uuid.set(10, UUIDv4());
uuid.set(11, UUIDv4());
uuid.set(12, UUIDv4());
uuid.set(20, UUIDv4());
uuid.set(21, UUIDv4());
uuid.set(22, UUIDv4());

dataSets.extend([{
    id: UUID(1),
    content: "Довідкові",
    treeLevel: 1,
    nestedGroups: [UUID(10), UUID(20)],
    showNested: false,
},
{
    id: UUID(10),
    content: "Загално відомі",
    treeLevel: 2,
    nestedGroups: [UUID(11)],
    showNested: false,
    visible: false,
},
{
    id: UUID(11),
    content: "GNSS",
    treeLevel: 3,
    visible: false,
},
{
    id: UUID(20),
    content: "Національна таблиця розподілу смуг радіочастот України",
    treeLevel: 2,
    nestedGroups: [UUID(21), UUID(22)],
    showNested: false,
    visible: false,
},
{
    id: UUID(21),
    content: "Загальні користувачі",
    treeLevel: 3,
    visible: false,
},
{
    id: UUID(22),
    content: "Спеціальні користувачі",
    treeLevel: 3,
    visible: false,
}]);

generateBGwith03("GPS", "L5", 1166220, 1186680, 'yellow-season', UUID(11));
generateBGwith03("GPS", "L2", 1217370, 1237830, 'yellow-season', UUID(11));
generateBGwith03("GPS", "L1", 1565190, 1585650, 'yellow-season', UUID(11));
generateBGwith03("GALILEO", "E1", 1563140, 1587700, 'blue-season', UUID(11));
generateBGwith03("GALILEO", "E6", 1258290, 1299050, 'blue-season', UUID(11));
generateBGwith03("GALILEO", "E5a", 1166220, 1189000, 'blue-season', UUID(11));
generateBGwith03("GALILEO", "E5b", 1189000, 1214000, 'blue-season', UUID(11));
generateBGwith03("GLONASS", "G1", 1593000, 1610000, 'red-season', UUID(11));
generateBGwith03("GLONASS", "G2", 1237000, 1254000, 'red-season', UUID(11));
generateBGwith03("GLONASS", "G3", 1189000, 1214000, 'red-season', UUID(11));
generateBGwith03("BEIDOU", "B1", 1561000, 1589000, 'green-season', UUID(11));
generateBGwith03("BEIDOU", "B2a", 1166220, 1188450, 'green-season', UUID(11));
generateBGwith03("BEIDOU", "B2/B2b", 1176000, 1200000, 'green-season', UUID(11));
generateBGwith03("BEIDOU", "B3", 1258290, 1278000, 'green-season', UUID(11));

generateBackground("РУХОМА (сигнали біди і виклику)", "ЗК", 2173.5, 2190.5, 'default-season', UUID(21));
generateBackground("РУХОМА (сигнали біди і виклику)", "ЗК", 2173.5, 2190.5, 'default-season', UUID(21));
generateBackground("МОРСЬКА РУХОМА", "ЗК", 2190.5, 2194, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R)", "ЗК", 2194, 2300, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R) РАДІОМОВНА", "ЗК", 2300, 2498, 'default-season', UUID(21));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ", "ЗК", 2498, 2501, 'cssClass', UUID(21));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ Служба космічних досліджень", "ЗК", 2501, 2502, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R)", "ЗК", 2502, 2625, 'default-season', UUID(21));
generateBackground("МОРСЬКА РУХОМА МОРСЬКА РАДІОНАВІГАЦІЙНА", "ЗК", 2625, 2650, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R)", "СК", 2650, 2850, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "СК", 2850, 3025, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 3025, 3155, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R)", "ЗК", 3155, 3200, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R) РАДІОМОВНА", "ЗК", 3200, 3230, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РАДІОМОВНА", "СК", 3230, 3400, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "СК", 3400, 3500, 'default-season', UUID(22));
generateBackground("АМАТОРСЬКА ФІКСОВАНА РУХОМА, за винятком повітряної рухомої", "ЗК", 3500, 3800, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ПОВІТРЯНА РУХОМА (OR) СУХОПУТНА РУХОМА", "ЗК", 3800, 3900, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 3900, 3950, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РАДІОМОВНА", "ЗК", 3950, 4000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА МОРСЬКА РУХОМА", "ЗК", 4000, 4063, 'default-season', UUID(21));
generateBackground("МОРСЬКА РУХОМА Фіксована", "ЗК", 4063, 4438, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R)", "ЗК", 4438, 4650, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "СК", 4650, 4700, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 4700, 4750, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА ПОВІТРЯНА РУХОМА (OR) СУХОПУТНА РУХОМА РАДІОМОВНА", "ЗК", 4750, 4850, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА СУХОПУТНА РУХОМА РАДІОМОВНА", "СК", 4850, 4995, 'default-season', UUID(22));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ (5000 кГц)", "ЗК", 4995, 5003, 'default-season', UUID(21));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ Служба космічних досліджень", "ЗК", 5003, 5005, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РАДІОМОВНА", "ЗК", 5005, 5060, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої", "СК", 5060, 5250, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої", "СК", 5250, 5450, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА ПОВІТРЯНА РУХОМА (OR) СУХОПУТНА РУХОМА", "ЗК", 5450, 5480, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "СК", 5480, 5680, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 5680, 5730, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА СУХОПУТНА РУХОМА", "ЗК", 5730, 5900, 'default-season', UUID(21));
generateBackground("СУХОПУТНА РУХОМА РАДІОМОВНА", "СК", 5900, 5950, 'default-season', UUID(22));
generateBackground("РАДІОМОВНА", "ЗК", 5950, 6200, 'default-season', UUID(21));
generateBackground("МОРСЬКА РУХОМА", "ЗК", 6200, 6525, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "ЗК", 6525, 6685, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 6685, 6765, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R) СУХОПУТНА РУХОМА", "ЗК", 6765, 7000, 'default-season', UUID(21));
generateBackground("АМАТОРСЬКА АМАТОРСЬКА СУПУТНИКОВА", "ЗК", 7000, 7100, 'default-season', UUID(21));
generateBackground("АМАТОРСЬКА РАДІОМОВНА", "ЗК", 7100, 7200, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "СК", 7200, 7300, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РАДІОМОВНА Сухопутна рухома", "СК", 7300, 7400, 'default-season', UUID(22));
generateBackground("РАДІОМОВНА ФІКСОВАНА Сухопутна рухома", "ЗК", 7400, 7450, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R) Сухопутна рухома", "ЗК", 7450, 8100, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА МОРСЬКА РУХОМА", "ЗК", 8100, 8195, 'default-season', UUID(21));
generateBackground("МОРСЬКА РУХОМА", "ЗК", 8195, 8815, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "СК", 8815, 8965, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 8965, 9040, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА", "ЗК", 9040, 9400, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РАДІОМОВНА", "ЗК", 9400, 9500, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 9500, 9900, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА", "СК", 9900, 9995, 'default-season', UUID(22));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ (10000 кГц)", "ЗК", 9995, 10003, 'default-season', UUID(21));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ Служба космічних досліджень", "ЗК", 10003, 10005, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "СК", 10005, 10100, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА Аматорська", "ЗК", 10100, 10150, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА Рухома, за винятком повітряної рухомої (R)", "ЗК", 10150, 11175, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 11175, 11275, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "СК", 11275, 11400, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА", "СК", 11400, 11600, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РАДІОМОВНА", "ЗК", 11600, 11650, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 11650, 12050, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РАДІОМОВНА", "ЗК", 12050, 12100, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА", "ЗК", 12100, 12230, 'default-season', UUID(21));
generateBackground("МОРСЬКА РУХОМА", "СК", 12230, 13200, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 13200, 13260, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "СК", 13260, 13360, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РАДІОАСТРОНОМІЧНА", "СК", 13360, 13410, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА Рухома, за винятком повітряної рухомої (R)", "ЗК", 13410, 13570, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РАДІОМОВНА", "ЗК", 13570, 13600, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 13600, 13800, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РАДІОМОВНА", "ЗК", 13800, 13870, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА Рухома, за винятком повітряної рухомої (R)", "ЗК", 13870, 14000, 'default-season', UUID(21));
generateBackground("АМАТОРСЬКА АМАТОРСЬКА СУПУТНИКОВА", "ЗК", 14000, 14250, 'default-season', UUID(21));
generateBackground("АМАТОРСЬКА ФІКСОВАНА", "ЗК", 14250, 14350, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА Рухома, за винятком повітряної рухомої (R)", "СК", 14350, 14990, 'default-season', UUID(22));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ (15000 кГц)", "ЗК", 14990, 15005, 'default-season', UUID(21));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ Служба космічних досліджень", "ЗК", 15005, 15010, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "ЗК", 15010, 15100, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 15100, 15600, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РАДІОМОВНА", "ЗК", 15600, 15800, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА", "ЗК", 15800, 16360, 'default-season', UUID(21));
generateBackground("МОРСЬКА РУХОМА", "ЗК", 16360, 17410, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА", "ЗК", 17410, 17480, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РАДІОМОВНА", "СК", 17480, 17550, 'default-season', UUID(22));
generateBackground("РАДІОМОВНА", "ЗК", 17550, 17900, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "СК", 17900, 17970, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 17970, 18030, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА", "СК", 18030, 18052, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА Служба космічних досліджень", "СК", 18052, 18068, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА АМАТОРСЬКА АМАТОРСЬКА СУПУТНИКОВА", "ЗК", 18068, 18168, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА Рухома, за винятком повітряної рухомої", "СК", 18168, 18780, 'default-season', UUID(22));
generateBackground("МОРСЬКА РУХОМА", "ЗК", 18780, 18900, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РАДІОМОВНА", "ЗК", 18900, 19020, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА", "СК", 19020, 19680, 'default-season', UUID(22));
generateBackground("МОРСЬКА РУХОМА", "ЗК", 19680, 19800, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА", "СК", 19800, 19990, 'default-season', UUID(22));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ Служба космічних досліджень", "ЗК", 19990, 19995, 'default-season', UUID(21));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ (20000 кГц)", "ЗВ", 19995, 20010, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА Рухома", "СК", 20010, 21000, 'default-season', UUID(22));
generateBackground("АМАТОРСЬКА АМАТОРСЬКА СУПУТНИКОВА", "ЗК", 21000, 21450, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 21450, 21850, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ПОВІТРЯНА РУХОМА (R)", "СК", 21850, 21870, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА", "СК", 21870, 21924, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (R)", "СК", 21924, 22000, 'default-season', UUID(22));
generateBackground("МОРСЬКА РУХОМА", "ЗК", 22000, 22855, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА", "СК", 22855, 23000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА Рухома, за винятком повітряної рухомої (R)", "СК", 23000, 23200, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА ПОВІТРЯНА РУХОМА (OR)", "СК", 23200, 23350, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої", "СК", 23350, 24000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА СУХОПУТНА РУХОМА", "СК", 24000, 24890, 'default-season', UUID(22));
generateBackground("АМАТОРСЬКА АМАТОРСЬКА СУПУТНИКОВА", "ЗК", 24890, 24990, 'default-season', UUID(21));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ (25000 кГц)", "ЗК", 24990, 25005, 'default-season', UUID(21));
generateBackground("СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ Служба космічних досліджень", "ЗК", 25005, 25010, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої", "СК", 25010, 25070, 'default-season', UUID(22));
generateBackground("МОРСЬКА РУХОМА", "ЗК", 25070, 25210, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої", "СК", 25210, 25550, 'default-season', UUID(22));
generateBackground("РАДІОАСТРОНОМІЧНА", "ЗК", 25550, 25670, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 25670, 26100, 'default-season', UUID(21));
generateBackground("МОРСЬКА РУХОМА", "ЗК", 26100, 26175, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої", "ЗК", 26175, 27500, 'default-season', UUID(21));
generateBackground("ДОПОМІЖНА СЛУЖБА МЕТЕОРОЛОГІЇ ФІКСОВАНА РУХОМА", "ЗК", 27500, 28000, 'default-season', UUID(21));
generateBackground("АМАТОРСЬКА АМАТОРСЬКА СУПУТНИКОВА", "ЗК", 28000, 29700, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 29700, 30005, 'default-season', UUID(22));
generateBackground("СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (розпізнавання супутника) ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ", "СК", 30005, 30010, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 30010, 33000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 33000, 37500, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА Радіоастрономічна", "СК", 37500, 38250, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 38250, 39986, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА Служба космічних досліджень", "СК", 39986, 40020, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 40020, 40980, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА Служба космічних досліджень", "СК", 40980, 41015, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 41015, 44000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 44000, 47000, 'default-season', UUID(22));
generateBackground("РАДІОМОВНА", "ЗК", 47000, 50000, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 50000, 52000, 'default-season', UUID(21));
generateBackground("АМАТОРСЬКА", "ЗК", 50000, 52000, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 52000, 68000, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 68000, 74800, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА", "СК", 74800, 75200, 'default-season', UUID(22));
generateBackground("РАДІОМОВНА ФІКСОВАНА РУХОМА, за винятком повітряної рухомої", "ЗК", 75200, 87500, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 87500, 100000, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА", "ЗК", 100000, 108000, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА", "СК", 108000, 117975, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR, R)", "СК", 117975, 137000, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR) СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (космос - Земля) МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля) РУХОМА СУПУТНИКОВА (космос - Земля) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (космос - Земля) Фіксована Рухома, за винятком повітряної рухомої (R)", "СК", 137000, 137025, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR) СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (космос - Земля) МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (космос - Земля) Фіксована Рухома супутникова (космос - Земля) Рухома, за винятком повітряної рухомої (R)", "СК", 137025, 137175, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR) СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (космос - Земля) РУХОМА СУПУТНИКОВА (космос - Земля) МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (космос - Земля) Фіксована Рухома, за винятком повітряної рухомої (R)", "СК", 137175, 137825, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR) СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (космос - Земля) МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (космос - Земля) Фіксована Рухома супутникова (космос - Земля) Рухома, за винятком повітряної рухомої (R)", "СК", 137825, 138000, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 138000, 143600, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (космос - Земля)", "СК", 143600, 143650, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РУХОМА (OR)", "СК", 143650, 144000, 'default-season', UUID(22));
generateBackground("АМАТОРСЬКА АМАТОРСЬКА СУПУТНИКОВА", "ЗК", 144000, 146000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R)", "СК", 146000, 148000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R) РУХОМА СУПУТНИКОВА (Земля - космос)", "СК", 148000, 149900, 'default-season', UUID(22));
generateBackground("РУХОМА СУПУТНИКОВА (Земля - космос) РАДІОНАВІГАЦІЙНА СУПУТНИКОВА", "СК", 149900, 150000, 'default-season', UUID(22));
generateBackground("РУХОМА СУПУТНИКОВА (Земля - космос) РАДІОНАВІГАЦІЙНА СУПУТНИКОВА", "ЗК", 150000, 150050, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РАДІОАСТРОНОМІЧНА", "ЗК", 150050, 153000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R) Допоміжна служба метеорології", "ЗК", 153000, 154000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої (R)", "ЗК", 154000, 156762.5, 'default-season', UUID(21));
generateBackground("МОРСЬКА РУХОМА (сигнали біди і виклику)", "ЗК", 156762.5, 156837.5, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА", "ЗК", 156837.5, 162750, 'default-season', UUID(21));
generateBackground("РУХОМА, за винятком повітряної рухомої", "СК", 162750, 163200, 'default-season', UUID(22));
generateBackground("РУХОМА, за винятком повітряної рухомої", "ЗК", 163200, 168500, 'default-season', UUID(21));
generateBackground("РУХОМА, за винятком повітряної рухомої", "СК", 168500, 174000, 'default-season', UUID(22));
generateBackground("РАДІОМОВНА", "ЗК", 174000, 223000, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА Фіксована Рухома", "ЗК", 223000, 230000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 230000, 235000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (Земля - космос) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (Земля - космос)", "СК", 235000, 253125, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (Земля - космос) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (Земля - космос)", "ЗК", 253125, 254875, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (Земля - космос) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (Земля - космос)", "СК", 254875, 263950, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (Земля - космос) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (Земля - космос)", "ЗК", 263950, 264950, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (Земля - космос) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (Земля - космос)", "СК", 264950, 267000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА Служба космічної експлуатації (космос - Земля)", "СК", 267000, 272000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (космос - Земля)", "СК", 272000, 273000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 273000, 300000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 300000, 300525, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 300525, 301125, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 301125, 305825, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 305825, 307037.5, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 307037.5, 308000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 308000, 312000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА Рухома супутникова (Земля - космос)", "СК", 312000, 315000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 315000, 322000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА РАДІОАСТРОНОМІЧНА", "ЗК", 322000, 328600, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА", "СК", 328600, 335400, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 335400, 336000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 336000, 336525, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 336525, 337125, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 337125, 341825, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 341825, 343037.5, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 343037.5, 344000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 344000, 379500, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 379500, 380875, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 380875, 387000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА Рухома супутникова (космос - Земля)", "СК", 387000, 390000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 390000, 393950, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 393950, 394950, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 394950, 399900, 'default-season', UUID(22));
generateBackground("РУХОМА СУПУТНИКОВА (Земля - космос) РАДІОНАВІГАЦІЙНА СУПУТНИКОВА", "СК", 399900, 400050, 'default-season', UUID(22));
generateBackground("СУПУТНИКОВА СЛУЖБА СТАНДАРТНИХ ЧАСТОТ І СИГНАЛІВ ЧАСУ (400,1 МГц) ФІКСОВАНА РУХОМА", "ЗК", 400050, 400150, 'default-season', UUID(21));
generateBackground("ДОПОМІЖНА СЛУЖБА МЕТЕОРОЛОГІЇ СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (космос - Земля) СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (Земля - космос) МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (Земля - космос) Фіксована Рухома, за винятком повітряної рухомої", "СК", 401000, 402000, 'default-season', UUID(22));
generateBackground("ДОПОМІЖНА СЛУЖБА МЕТЕОРОЛОГІЇ СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (Земля - космос) МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (Земля - космос) Фіксована Рухома, за винятком повітряної рухомої", "СК", 402000, 403000, 'default-season', UUID(22));
generateBackground("ДОПОМІЖНА СЛУЖБА МЕТЕОРОЛОГІЇ Фіксована Рухома, за винятком повітряної рухомої", "СК", 403000, 406000, 'default-season', UUID(22));
generateBackground("РУХОМА СУПУТНИКОВА (Земля - космос)", "СК", 406000, 406100, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РАДІОАСТРОНОМІЧНА", "СК", 406100, 410000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (космос - космос)", "СК", 410000, 413000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (космос - космос)", "ЗК", 413000, 420000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої Радіолокаційна", "СК", 420000, 423000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої Радіолокаційна", "ЗК", 423000, 430000, 'default-season', UUID(21));
generateBackground("АМАТОРСЬКА РАДІОЛОКАЦІЙНА ФІКСОВАНА", "ЗК", 430000, 432000, 'default-season', UUID(21));
generateBackground("АМАТОРСЬКА РАДІОЛОКАЦІЙНА ФІКСОВАНА Супутникова служба дослідження Землі (активна)", "ЗК", 432000, 438000, 'default-season', UUID(21));
generateBackground("АМАТОРСЬКА РАДІОЛОКАЦІЙНА ФІКСОВАНА", "ЗК", 438000, 440000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої Радіолокаційна", "ЗК", 440000, 442125, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої Радіолокаційна", "СК", 442125, 442525, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої Радіолокаційна", "ЗК", 442525, 447740, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої Радіолокаційна", "СК", 447740, 448140, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої Радіолокаційна", "ЗК", 448140, 450000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 450000, 450860, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 450860, 455000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 455000, 456000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "СК", 456000, 457100, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 457100, 459000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 459000, 460000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 460000, 460860, 'default-season', UUID(21));
generateBackground("МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля)", "СК", 460860, 467100, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 467100, 470000, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА ПОВІТРЯНА РАДІОНАВІГАЦІЙНА", "ЗК", 470000, 694000, 'default-season', UUID(21));
generateBackground("РАДІОМОВНА ПОВІТРЯНА РАДІОНАВІГАЦІЙНА РУХОМА, за винятком повітряної рухомої", "ЗК", 694000, 790000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РАДІОМОВНА ПОВІТРЯНА РАДІОНАВІГАЦІЙНА Рухома супутникова, за винятком повітряної рухомої супутникової (Земля - космос) РУХОМА, за винятком повітряної рухомої", "ЗК", 790000, 862000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої ПОВІТРЯНА РАДІОНАВІГАЦІЙНА Рухома супутникова, за винятком повітряної рухомої супутникової (космос - Земля)", "ЗК", 862000, 890000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої ПОВІТРЯНА РАДІОНАВІГАЦІЙНА Радіолокаційна", "ЗК", 890000, 942000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої ПОВІТРЯНА РАДІОНАВІГАЦІЙНА", "ЗК", 942000, 960000, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА", "СК", 960000, 1164000, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА РАДІОНАВІГАЦІЙНА СУПУТНИКОВА (космос - Земля) (космос - космос)", "СК", 1164000, 1215000, 'default-season', UUID(22));
generateBackground("СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (активна) РАДІОЛОКАЦІЙНА РАДІОНАВІГАЦІЙНА СУПУТНИКОВА (космос - Земля) (космос - космос) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (активна)", "СК", 1215000, 1240000, 'default-season', UUID(22));
generateBackground("СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (активна) РАДІОЛОКАЦІЙНА РАДІОНАВІГАЦІЙНА СУПУТНИКОВА (космос - Земля) (космос - космос) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (активна) Аматорська", "СК", 1240000, 1300000, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА РАДІОЛОКАЦІЙНА РАДІОНАВІГАЦІЙНА СУПУТНИКОВА (Земля - космос)", "СК", 1300000, 1350000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА РАДІОЛОКАЦІЙНА", "СК", 1350000, 1400000, 'default-season', UUID(22));
generateBackground("СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (пасивна) РАДІОАСТРОНОМІЧНА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (пасивна)", "ЗК", 1400000, 1427000, 'default-season', UUID(21));
generateBackground("СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (Земля - космос) РУХОМА, за винятком повітряної рухомої ФІКСОВАНА", "ЗК", 1427000, 1429000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої ПОВІТРЯНА РУХОМА", "ЗК", 1429000, 1452000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РАДІОМОВНА РАДІОМОВНА СУПУТНИКОВА ПОВІТРЯНА РУХОМА", "ЗК", 1452000, 1492000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої ПОВІТРЯНА РУХОМА", "СК", 1492000, 1518000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РУХОМА СУПУТНИКОВА (космос - Земля) ПОВІТРЯНА РУХОМА", "СК", 1518000, 1525000, 'default-season', UUID(22));
generateBackground("СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (космос - Земля) ФІКСОВАНА РУХОМА СУПУТНИКОВА (космос - Земля) Супутникова служба дослідження Землі Рухома, за винятком повітряної рухомої ПОВІТРЯНА РУХОМА", "ЗК", 1525000, 1530000, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РУХОМА СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (космос - Земля) РУХОМА СУПУТНИКОВА (космос - Земля) Супутникова служба дослідження Землі Фіксована Рухома, за винятком повітряної рухомої", "ЗК", 1530000, 1535000, 'default-season', UUID(21));
generateBackground("РУХОМА СУПУТНИКОВА (космос - Земля) ФІКСОВАНА", "ЗК", 1535000, 1559000, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА РАДІОНАВІГАЦІЙНА СУПУТНИКОВА (космос - Земля) (космос - космос) Фіксована", "СК", 1559000, 1610000, 'default-season', UUID(22));
generateBackground("РУХОМА СУПУТНИКОВА (Земля - космос) ПОВІТРЯНА РАДІОНАВІГАЦІЙНА ФІКСОВАНА", "СК", 1610000, 1610600, 'default-season', UUID(22));
generateBackground("РУХОМА СУПУТНИКОВА (Земля - космос) РАДІОАСТРОНОМІЧНА ПОВІТРЯНА РАДІОНАВІГАЦІЙНА ФІКСОВАНА", "ЗК", 1610600, 1613800, 'default-season', UUID(21));
generateBackground("РУХОМА СУПУТНИКОВА (Земля - космос) ПОВІТРЯНА РАДІОНАВІГАЦІЙНА ФІКСОВАНА Рухома супутникова (космос - Земля)", "ЗК", 1613800, 1626500, 'default-season', UUID(21));
generateBackground("РУХОМА СУПУТНИКОВА (Земля - космос) ФІКСОВАНА", "ЗК", 1626500, 1660000, 'default-season', UUID(21));
generateBackground("РУХОМА СУПУТНИКОВА (Земля - космос) РАДІОАСТРОНОМІЧНА", "ЗК", 1660000, 1660500, 'default-season', UUID(21));
generateBackground("РАДІОАСТРОНОМІЧНА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (пасивна) Фіксована Рухома, за винятком повітряної рухомої", "ЗК", 1660500, 1668000, 'default-season', UUID(21));
generateBackground("РУХОМА СУПУТНИКОВА (Земля - космос) РАДІОАСТРОНОМІЧНА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (пасивна) Фіксована Рухома, за винятком повітряної рухомої", "ЗК", 1668000, 1668400, 'default-season', UUID(21));
generateBackground("ДОПОМІЖНА СЛУЖБА МЕТЕОРОЛОГІЇ ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РУХОМА СУПУТНИКОВА (Земля - космос) РАДІОАСТРОНОМІЧНА", "СК", 1668400, 1670000, 'default-season', UUID(22));
generateBackground("ДОПОМІЖНА СЛУЖБА МЕТЕОРОЛОГІЇ ФІКСОВАНА МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля) РУХОМА РУХОМА СУПУТНИКОВА (Земля - космос)", "СК", 1670000, 1675000, 'default-season', UUID(22));
generateBackground("ДОПОМІЖНА СЛУЖБА МЕТЕОРОЛОГІЇ ФІКСОВАНА МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля) РУХОМА, за винятком повітряної рухомої", "СК", 1675000, 1690000, 'default-season', UUID(22));
generateBackground("ДОПОМІЖНА СЛУЖБА МЕТЕОРОЛОГІЇ МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля) ФІКСОВАНА РУХОМА, за винятком повітряної рухомої", "СК", 1690000, 1700000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля) РУХОМА, за винятком повітряної рухомої", "СК", 1700000, 1710000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 1710000, 1930000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 1930000, 1970000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 1970000, 1980000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА РУХОМА СУПУТНИКОВА (Земля - космос)", "ЗК", 1980000, 2010000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 2010000, 2025000, 'default-season', UUID(21));
generateBackground("СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (Земля - космос) (космос - космос) СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (Земля - космос) (космос - космос) ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (Земля - космос) (космос - космос)", "ЗК", 2025000, 2110000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (далекий космос) (Земля - космос)", "ЗК", 2110000, 2120000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 2120000, 2160000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 2160000, 2170000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА РУХОМА СУПУТНИКОВА (космос - Земля)", "ЗК", 2170000, 2200000, 'default-season', UUID(21));
generateBackground("СЛУЖБА КОСМІЧНОЇ ЕКСПЛУАТАЦІЇ (космос - Земля) (космос - космос) СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (космос - Земля) (космос - космос) ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (космос - Земля) (космос - космос)", "ЗК", 2200000, 2290000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (далекий космос) (космос - Земля)", "ЗК", 2290000, 2300000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА Аматорська Радіолокаційна", "ЗК", 2300000, 2450000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА Радіолокаційна", "ЗК", 2450000, 2483500, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА РУХОМА СУПУТНИКОВА (космос - Земля) Радіолокаційна", "ЗК", 2483500, 2500000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РУХОМА СУПУТНИКОВА (космос - Земля)", "ЗК", 2500000, 2520000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РАДІОМОВНА СУПУТНИКОВА", "ЗК", 2520000, 2655000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РАДІОМОВНА СУПУТНИКОВА Супутникова служба дослідження Землі (пасивна) Радіоастрономічна Служба космічних досліджень (пасивна)", "ЗК", 2655000, 2670000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РУХОМА СУПУТНИКОВА (Земля - космос) Супутникова служба дослідження Землі (пасивна) Радіоастрономічна Служба космічних досліджень (пасивна)", "ЗК", 2670000, 2690000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (пасивна) РАДІОАСТРОНОМІЧНА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (пасивна)", "СК", 2690000, 2700000, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА Радіолокаційна", "СК", 2700000, 2900000, 'default-season', UUID(22));
generateBackground("РАДІОНАВІГАЦІЙНА РАДІОЛОКАЦІЙНА", "СК", 2900000, 3100000, 'default-season', UUID(22));
generateBackground("РАДІОЛОКАЦІЙНА Супутникова служба дослідження Землі (активна) Служба космічних досліджень (активна)", "СК", 3100000, 3300000, 'default-season', UUID(22));
generateBackground("РАДІОЛОКАЦІЙНА", "СК", 3300000, 3400000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (космос - Земля) Радіолокаційна РУХОМА, за винятком повітряної рухомої", "ЗК", 3400000, 3600000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (космос - Земля) РУХОМА", "ЗК", 3600000, 4200000, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА", "СК", 4200000, 4400000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 4400000, 4500000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (космос - Земля) РУХОМА", "ЗК", 4500000, 4800000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА Радіоастрономічна", "СК", 4800000, 4990000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РАДІОАСТРОНОМІЧНА Служба космічних досліджень (пасивна)", "СК", 4990000, 5000000, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА СУПУТНИКОВА РАДІОНАВІГАЦІЙНА (Земля - космос)", "СК", 5000000, 5010000, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА СУПУТНИКОВА РАДІОНАВІГАЦІЙНА (космос - Земля) (космос - космос)", "СК", 5010000, 5030000, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА", "СК", 5030000, 5150000, 'default-season', UUID(22));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) РУХОМА, за винятком повітряної рухомої", "ЗК", 5150000, 5250000, 'default-season', UUID(21));
generateBackground("СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (активна) РАДІОЛОКАЦІЙНА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ РУХОМА, за винятком повітряної рухомої", "ЗК", 5250000, 5255000, 'default-season', UUID(21));
generateBackground("СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (активна) РАДІОЛОКАЦІЙНА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (активна) РУХОМА, за винятком повітряної рухомої", "ЗК", 5255000, 5350000, 'default-season', UUID(21));
generateBackground("СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (активна) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (активна) ПОВІТРЯНА РАДІОНАВІГАЦІЙНА РАДІОЛОКАЦІЙНА", "СК", 5350000, 5460000, 'default-season', UUID(22));
generateBackground("РАДІОНАВІГАЦІЙНА СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (активна) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (активна) РАДІОЛОКАЦІЙНА", "СК", 5460000, 5470000, 'default-season', UUID(22));
generateBackground("МОРСЬКА РАДІОНАВІГАЦІЙНА ПОВІТРЯНА РАДІОНАВІГАЦІЙНА РУХОМА, за винятком повітряної рухомої СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (активна) СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (активна) РАДІОЛОКАЦІЙНА", "ЗК", 5470000, 5570000, 'default-season', UUID(21));
generateBackground("МОРСЬКА РАДІОНАВІГАЦІЙНА ПОВІТРЯНА РАДІОНАВІГАЦІЙНА РУХОМА, за винятком повітряної рухомої РАДІОЛОКАЦІЙНА", "ЗК", 5570000, 5650000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої РАДІОЛОКАЦІЙНА Аматорська Служба космічних досліджень (далекий космос)", "ЗК", 5650000, 5725000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) РАДІОЛОКАЦІЙНА Аматорська", "ЗК", 5725000, 5830000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) РАДІОЛОКАЦІЙНА Аматорська Аматорська супутникова (космос - Земля)", "ЗК", 5830000, 5850000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) РУХОМА", "ЗК", 5850000, 5920000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) РУХОМА", "СК", 5920000, 5925000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) РУХОМА", "ЗК", 5925000, 6700000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) (космос - Земля) РУХОМА", "ЗК", 6700000, 7075000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 7075000, 7145000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ", "ЗК", 7145000, 7235000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА", "ЗК", 7235000, 7250000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (космос - Земля) РУХОМА", "ЗК", 7250000, 7300000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (космос - Земля) РУХОМА, за винятком повітряної рухомої", "ЗК", 7300000, 7450000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (космос - Земля) МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля) РУХОМА, за винятком повітряної рухомої", "ЗК", 7450000, 7550000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (космос - Земля) РУХОМА, за винятком повітряної рухомої", "ЗК", 7550000, 7750000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (космос - Земля) РУХОМА, за винятком повітряної рухомої", "ЗК", 7750000, 7850000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА РУХОМА, за винятком повітряної рухомої", "СК", 7850000, 7900000, 'default-season', UUID(22));
generateBackground("ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) РУХОМА", "ЗК", 7900000, 8025000, 'default-season', UUID(21));
generateBackground("СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (космос - Земля) ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) РУХОМА", "ЗК", 8025000, 8175000, 'default-season', UUID(21));
generateBackground("СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (космос - Земля) ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) МЕТЕОРОЛОГІЧНА СУПУТНИКОВА (Земля - космос) РУХОМА", "ЗК", 8175000, 8215000, 'default-season', UUID(21));
generateBackground("СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (космос - Земля) ФІКСОВАНА ФІКСОВАНА СУПУТНИКОВА (Земля - космос) РУХОМА", "ЗК", 8215000, 8400000, 'default-season', UUID(21));
generateBackground("ФІКСОВАНА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (космос - Земля) РУХОМА, за винятком повітряної рухомої", "ЗК", 8400000, 8500000, 'default-season', UUID(21));
generateBackground("РАДІОНАВІГАЦІЙНА РАДІОЛОКАЦІЙНА СУХОПУТНА РУХОМА", "СК", 8500000, 8550000, 'default-season', UUID(22));
generateBackground("СУПУТНИКОВА СЛУЖБА ДОСЛІДЖЕННЯ ЗЕМЛІ (активна) РАДІОЛОКАЦІЙНА РАДІОНАВІГАЦІЙНА СЛУЖБА КОСМІЧНИХ ДОСЛІДЖЕНЬ (активна) СУХОПУТНА РУХОМА", "ЗК", 8550000, 8650000, 'default-season', UUID(21));
generateBackground("РАДІОЛОКАЦІЙНА РАДІОНАВІГАЦІЙНА СУХОПУТНА РУХОМА", "СК", 8650000, 8750000, 'default-season', UUID(22));
generateBackground("РАДІОЛОКАЦІЙНА ПОВІТРЯНА РАДІОНАВІГАЦІЙНА", "СК", 8750000, 8850000, 'default-season', UUID(22));
generateBackground("РАДІОЛОКАЦІЙНА МОРСЬКА РАДІОНАВІГАЦІЙНА РАДІОНАВІГАЦІЙНА", "ЗК", 8850000, 9000000, 'default-season', UUID(21));
generateBackground("ПОВІТРЯНА РАДІОНАВІГАЦІЙНА Радіолокаційна", "СК", 9000000, 9200000, 'default-season', UUID(22));
generateBackground("РАДІОЛОКАЦІЙНА МОРСЬКА РАДІОНАВІГАЦІЙНА РАДІОНАВІГАЦІЙНА", "ЗК", 9200000, 9300000, 'default-season', UUID(21));
generateBackground("РАДІОНАВІГАЦІЙНА Радіолокаційна", "ЗК", 9300000, 9500000, 'default-season', UUID(21));
