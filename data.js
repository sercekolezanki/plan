const types=["Wykład","Ćwiczenia","Laboratoria"];

const subject = [
    {
        name: "Grafika komputerowa",
        short: "OGR",
        show:function(){
            
        }
    },
    //1
    {
        name: "Język angielski",
        short: "JAN"
    },
    //2
    {
        name: "Matematyka dyskretna",
        short: "MATD"
    },
    //3
    {
        name: "Podstawy automatyki",
        short: "PAU"
    },
    //4
    {
        name: "Podstawy elektroniki",
        short: "PEL"
    },
    //5
    {
        name: "Programowanie inżynierskie Matlab",
        short: "PIM"
    },
    //6
    {
        name: "Programowanie obiektowe",
        short: "PRO"
    },
    //7
    {
        name: "Przedmioty ogólnouczelniane",
        short: "POU"
    },
    //8
    {
        name: "Wychowanie fizyczne",
        short: "W-F"
    },
    {
        name: "Algorytmy i struktury danych",
        short: "Osf"
    },
];


const schedule = [
    { lessonTime: 4, lessonDate: "2025-02-17", "type":0,"note":" ", group: 1 ,id:8},{ lessonTime: 7, lessonDate: "2025-02-17", "type":0,"note":" ", group: 1 ,id:0},{ lessonTime: 8, lessonDate: "2025-02-17", "type":0,"note":" ", group: 1 ,id:0},{ lessonTime: 9, lessonDate: "2025-02-17", "type":0,"note":" ", group: 1 ,id:0},
    //18II
    {"lessonTime": 1,"lessonDate": "2025-02-18","type":0,"note":" ","group": 1,"id": 0},{"lessonTime": 2,"lessonDate": "2025-02-18","type":0,"note":" ","group": 1,"id": 0},{"lessonTime": 3,"lessonDate": "2025-02-18","type":0,"note":" ","group": 1,"id": 0},{"lessonTime": 4,"lessonDate": "2025-02-18","type":0,"note":" ","group": 1,"id": 9},{"lessonTime": 5,"lessonDate": "2025-02-18","type":0,"note":" ","group": 1,"id": 9},{"lessonTime": 7,"lessonDate": "2025-02-18","type":0,"note":" ","group": 1,"id": 9},{"lessonTime": 8,"lessonDate": "2025-02-18","type":0,"note":" ","group": 1,"id": 9},
    //21II
    {"lessonTime": 7,"lessonDate": "2025-02-21","type":0,"note":" ","group": 1,"id": 6},{"lessonTime": 8,"lessonDate": "2025-02-21","type":0,"note":" ","group": 1,"id": 6},{"lessonTime": 9,"lessonDate": "2025-02-21","type":0,"note":" ","group": 1,"id": 2},{"lessonTime": 10,"lessonDate": "2025-02-21","type":0,"note":" ","group": 1,"id": 2},
    //24II do 28IV
    {"lessonTime": 1,"lessonDate": "2025-02-24","type":0,"note":" ","group": 1,"id": 1},{"lessonTime": 2,"lessonDate": "2025-02-24","type":0,"note":" ","group": 1,"id": 1},{"lessonTime": 3,"lessonDate": "2025-02-24","type":0,"note":" ","group": 1,"id": 8},{"lessonTime": 4,"lessonDate": "2025-02-24","type":0,"note":" ","group": 1,"id": 8},{"lessonTime": 6,"lessonDate": "2025-02-24","type":0,"note":" ","group": 1,"id": 0},{"lessonTime": 7,"lessonDate": "2025-02-24","type":0,"note":" ","group": 1,"id": 0}
    //25II i 11III
    ,{"lessonTime": 1,"lessonDate": "2025-02-25","type":0,"note":" ","group": 1,"id": 5},{"lessonTime": 2,    "lessonDate": "2025-02-25",    "type":0,"note":" ",    "group": 1,    "id": 5},{    "lessonTime": 3,    "lessonDate": "2025-02-25",    "type":0,"note":" ",    "group": 1,    "id": 5},{    "lessonTime": 4,    "lessonDate": "2025-02-25",    "type":0,"note":" ",    "group": 1,    "id": 9},{"lessonTime": 5,"lessonDate": "2025-02-25","type":0,"note":" ","group": 1,"id": 9},{"lessonTime": 6,"lessonDate": "2025-02-25","type":0,"note":" ","group": 1,"id": 6},{"lessonTime": 7,"lessonDate": "2025-02-25","type":0,"note":" ","group": 1,"id": 6}
    //26II do 19 III
    ,{"lessonTime": 1,"lessonDate": "2025-02-26","type":0,"note":" ","group": 1,"id": 7},{"lessonTime": 2,    "lessonDate": "2025-02-26",    "type":0,"note":" ",    "group": 1,    "id": 7},{"lessonTime": 3,"lessonDate": "2025-02-26",    "type":0,"note":" ",    "group": 1,    "id": 7},{    "lessonTime": 4,    "lessonDate": "2025-02-26",    "type":0,"note":" ",    "group": 1,    "id": 7},{    "lessonTime": 5,    "lessonDate": "2025-02-26",    "type":0,"note":" ",    "group": 1,    "id": 7},{    "lessonTime": 6,    "lessonDate": "2025-02-26",    "type":0,"note":" ",    "group": 1,    "id": 7},{    "lessonTime": 7,    "lessonDate": "2025-02-26",    "type":0,"note":" ",    "group": 1,    "id": 7},{    "lessonTime": 8,    "lessonDate": "2025-02-26",    "type":0,"note":" ",    "group": 1,    "id": 7},{    "lessonTime": 9,    "lessonDate": "2025-02-26",    "type":0,"note":" ",    "group": 1,    "id": 7}
    //27 II
    ,{"lessonTime": 4,    "lessonDate": "2025-02-27",    "type":0,"note":" ",    "group": 1,    "id": 2},{    "lessonTime": 5,    "lessonDate": "2025-02-27",    "type":0,"note":" ",    "group": 1,    "id": 2},{    "lessonTime": 6,    "lessonDate": "2025-02-27",    "type":0,"note":" ",    "group": 1,    "id": 2},{    "lessonTime": 7,    "lessonDate": "2025-02-27",    "type":0,"note":" ",    "group": 1,    "id": 9},{    "lessonTime": 8,    "lessonDate": "2025-02-27",    "type":0,"note":" ",    "group": 1,    "id": 9},{    "lessonTime": 9,    "lessonDate": "2025-02-27",    "type":0,"note":" ",    "group": 1,    "id": 9}
    //28II
    ,{"lessonTime": 7,"lessonDate": "2025-02-21","type":0,"note":" ","group": 1,"id": 6},{"lessonTime": 8,"lessonDate": "2025-02-21","type":0,"note":" ","group": 1,"id": 6},{"lessonTime": 9,"lessonDate": "2025-02-21","type":0,"note":" ","group": 1,"id": 2},{"lessonTime": 10,"lessonDate": "2025-02-21","type":0,"note":" ","group": 1,"id": 2},
    //3III
    {"lessonTime": 1,"lessonDate": "2025-03-03","type":0,"note":" ","group": 1,"id": 1},{"lessonTime": 2,"lessonDate": "2025-03-03","type":0,"note":" ","group": 1,"id": 1},{"lessonTime": 3,"lessonDate": "2025-03-03","type":0,"note":" ","group": 1,"id": 8},{"lessonTime": 4,"lessonDate": "2025-03-03","type":0,"note":" ","group": 1,"id": 8},{"lessonTime": 6,"lessonDate": "2025-03-03","type":0,"note":" ","group": 1,"id": 0},{"lessonTime": 7,"lessonDate": "2025-03-03","type":0,"note":" ","group": 1,"id": 0},
    //4III
    {    "lessonTime": 1,    "lessonDate": "2025-03-04",    "type":0,"note":" ",    "group": 1,    "id": 5},{    "lessonTime": 2,    "lessonDate": "2025-03-04",    "type":0,"note":" ",    "group": 1,    "id": 5},{    "lessonTime": 3,    "lessonDate": "2025-03-04",    "type":0,"note":" ",    "group": 1,    "id": 5},{    "lessonTime": 4,    "lessonDate": "2025-03-04",    "type":0,"note":" ",    "group": 1,    "id": 9},{    "lessonTime": 5,    "lessonDate": "2025-03-04",    "type":0,"note":" ",    "group": 1,    "id": 9},{    "lessonTime": 6,    "lessonDate": "2025-03-04",    "type":0,"note":" ",    "group": 1,    "id": 6},{    "lessonTime": 7,    "lessonDate": "2025-03-04",    "type":0,"note":" ",    "group": 1,    "id": 6}
]
