const types=["Wykład","Ćwiczenia","Laboratoria"];





const subject = [
    {
        name: "Grafika komputerowa",
        short: "OGR",
        color:"#DEF2C4",
        
    },
    //1
    {
        name: "Język angielski",
        short: "JAN",
        color:"#D4D293"
    },
    //2
    {
        name: "Matematyka dyskretna",
        short: "MATD",
        color:"#ABD7E0"
    },
    //3
    {
        name: "Podstawy automatyki",
        short: "PAU",
        color:"#38781F"
    },
    //4
    {
        name: "Podstawy elektroniki",
        short: "PEL",
        color:"#F2BE38"
    },
    //5
    {
        name: "Programowanie inżynierskie Matlab",
        short: "PIM",
        color:"#E5C733"
    },
    //6
    {
        name: "Programowanie obiektowe",
        short: "PRO",
        color:"#99C32E"
    },
    //7
    {
        name: "Przedmioty ogólnouczelniane",
        short: "POU",
        color:"#CEA497"
    },
    //8
    {
        name: "Wychowanie fizyczne",
        short: "W-F",
        color:"#FCF796"
    },
    //9
    {
        name: "Algorytmy i struktury danych",
        short: "Osf",
        color:"#5091F9"
    },
    //10
    {
      name: "INNE",
      short: "INN",
      color:"#FFFFFF"
    }
];
function findColor(hex){
    console.log(hex)
    const name=subject.findIndex(value=>value.color==hex.toUpperCase());
    return name;
}

const schedule = [
  {
    "id": 8,
    "lessonTime": 4,
    "lessonDate": "2025-02-17",
    "type": 0,
    "note": "Rozpoczęcie semestru numer 2 sex i samo zdrowie",
    "group": 1
  },
  {
    "id": 8,
    "lessonTime": 5,
    "lessonDate": "2025-02-17",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 7,
    "lessonDate": "2025-02-17",
    "type": 0,
    "note": "208/353",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 8,
    "lessonDate": "2025-02-17",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 9,
    "lessonDate": "2025-02-17",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 1,
    "lessonTime": 1,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "517/365;121/bibl.",
    "group": 1
  },
  {
    "id": 1,
    "lessonTime": 2,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 8,
    "lessonTime": 3,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 8,
    "lessonTime": 4,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 6,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "4/353",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 7,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "",
    "group": 1
  },{
    "id": 1,
    "lessonTime": 1,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 1,
    "lessonTime": 2,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 8,
    "lessonTime": 3,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 8,
    "lessonTime": 4,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 6,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 7,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "",
    "group": 1
  },{
    "id": 0,
    "lessonTime": 1,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "18/353",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 2,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 3,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 4,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "307/353",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 5,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 7,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 8,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "",
    "group": 1
  },{
    "id": 0,
    "lessonTime": 1,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 2,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 0,
    "lessonTime": 3,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 4,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 5,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 6,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 7,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "",
    "group": 1
  },{
    "id": 5,
    "lessonTime": 1,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 5,
    "lessonTime": 2,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 5,
    "lessonTime": 3,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 4,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 5,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 6,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 7,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 1
  },{
    "id": 7,
    "lessonTime": 1,
    "lessonDate": "2025-02-26",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 2,
    "lessonDate": "2025-02-26",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 3,
    "lessonDate": "2025-02-26",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 4,
    "lessonDate": "2025-02-26",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 5,
    "lessonDate": "2025-02-26",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 6,
    "lessonDate": "2025-02-26",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 7,
    "lessonDate": "2025-02-26",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 8,
    "lessonDate": "2025-02-26",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 9,
    "lessonDate": "2025-02-26",
    "type": 0,
    "note": "",
    "group": 1
  },{
    "id": 7,
    "lessonTime": 1,
    "lessonDate": "2025-03-05",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 2,
    "lessonDate": "2025-03-05",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 3,
    "lessonDate": "2025-03-05",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 4,
    "lessonDate": "2025-03-05",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 5,
    "lessonDate": "2025-03-05",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 6,
    "lessonDate": "2025-03-05",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 7,
    "lessonDate": "2025-03-05",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 8,
    "lessonDate": "2025-03-05",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 7,
    "lessonTime": 9,
    "lessonDate": "2025-03-05",
    "type": 0,
    "note": "",
    "group": 1
  },{
    "id": 2,
    "lessonTime": 4,
    "lessonDate": "2025-02-27",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 5,
    "lessonDate": "2025-02-27",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 6,
    "lessonDate": "2025-02-27",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 7,
    "lessonDate": "2025-02-27",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 8,
    "lessonDate": "2025-02-27",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 9,
    "lessonDate": "2025-02-27",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 10,
    "lessonDate": "2025-02-27",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 10,
    "lessonTime": 5,
    "lessonDate": "2025-02-21",
    "type": 0,
    "note": "Spotkanie organizacyjne 307/353",
    "group": 1
  },
  {
    "id": 10,
    "lessonTime": 6,
    "lessonDate": "2025-02-21",
    "type": 0,
    "note": "Spotkanie organizacyjne 307/353",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 7,
    "lessonDate": "2025-02-21",
    "type": 0,
    "note": "307/353",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 8,
    "lessonDate": "2025-02-21",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 9,
    "lessonDate": "2025-02-21",
    "type": 0,
    "note": "307/353",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 10,
    "lessonDate": "2025-02-21",
    "type": 0,
    "note": "",
    "group": 1
  },{
    "id": 6,
    "lessonTime": 7,
    "lessonDate": "2025-02-28",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 8,
    "lessonDate": "2025-02-28",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 9,
    "lessonDate": "2025-02-28",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 10,
    "lessonDate": "2025-02-28",
    "type": 0,
    "note": "",
    "group": 1
  },{
    "id": 9,
    "lessonTime": 4,
    "lessonDate": "2025-03-07",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 5,
    "lessonDate": "2025-03-07",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 6,
    "lessonDate": "2025-03-07",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 7,
    "lessonDate": "2025-03-07",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 8,
    "lessonDate": "2025-03-07",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 9,
    "lessonDate": "2025-03-07",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 10,
    "lessonDate": "2025-03-07",
    "type": 0,
    "note": "",
    "group": 1
  },{
    "id": 9,
    "lessonTime": 4,
    "lessonDate": "2025-03-14",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 5,
    "lessonDate": "2025-03-14",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 9,
    "lessonTime": 6,
    "lessonDate": "2025-03-14",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 7,
    "lessonDate": "2025-03-14",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 6,
    "lessonTime": 8,
    "lessonDate": "2025-03-14",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 9,
    "lessonDate": "2025-03-14",
    "type": 0,
    "note": "",
    "group": 1
  },
  {
    "id": 2,
    "lessonTime": 10,
    "lessonDate": "2025-03-14",
    "type": 0,
    "note": "",
    "group": 1
  },
  //2
  {
    "id": 8,
    "lessonTime": 4,
    "lessonDate": "2025-02-17",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 8,
    "lessonTime": 5,
    "lessonDate": "2025-02-17",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 7,
    "lessonDate": "2025-02-17",
    "type": 0,
    "note": "208/353",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 8,
    "lessonDate": "2025-02-17",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 9,
    "lessonDate": "2025-02-17",
    "type": 0,
    "note": "",
    "group": 2
  },{
    "id": 1,
    "lessonTime": 1,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "517/365;121/bibl.",
    "group": 2
  },
  {
    "id": 1,
    "lessonTime": 2,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 8,
    "lessonTime": 3,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 8,
    "lessonTime": 4,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 6,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "117/353",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 7,
    "lessonDate": "2025-02-24",
    "type": 0,
    "note": "",
    "group": 2
  },{
    "id": 1,
    "lessonTime": 1,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "517/365;121/bibl.",
    "group": 2
  },
  {
    "id": 1,
    "lessonTime": 2,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 8,
    "lessonTime": 3,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 8,
    "lessonTime": 4,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 6,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "117/353",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 7,
    "lessonDate": "2025-03-03",
    "type": 0,
    "note": "",
    "group": 2
  },{
    "id": 0,
    "lessonTime": 1,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "18/353",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 2,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 3,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 4,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "307/353",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 5,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 7,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "307/353",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 8,
    "lessonDate": "2025-02-18",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 1,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "18/353",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 2,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 3,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 4,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "307/353",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 5,
    "lessonDate": "2025-02-25",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 5,
    "lessonTime": 1,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "18/353",
    "group": 2
  },
  {
    "id": 5,
    "lessonTime": 2,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 5,
    "lessonTime": 3,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 4,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "307/353",
    "group": 2
  },
  {
    "id": 9,
    "lessonTime": 5,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 6,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "4/353",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 7,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 2
  },
  {
    "id": 0,
    "lessonTime": 8,
    "lessonDate": "2025-03-04",
    "type": 0,
    "note": "",
    "group": 2
  },{
    "id": 2,
    "lessonTime": 4,
    "lessonDate": "2025-02-27",
    "type": 0,
    "note": "109/353",
    "group": 2
  },
  {
    "id": 2,
    "lessonTime": 5,
    "lessonDate": "2025-02-27",
    "type": 0,
    "note": "",
    "group": 2
  },
  
  {
    "id": 2,
    "lessonTime": 7,
    "lessonDate": "2025-02-27",
    "type": 0,
    "note": "",
    "group": 2
  },
  
]
