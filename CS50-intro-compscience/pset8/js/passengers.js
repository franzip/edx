/**
 * passengers.js
 *
 * Computer Science 50
 * Problem Set 8
 *
 * Passengers on campus.
 */

var PASSENGERS = [
    {
        username: "abuchholtzau",
        name: "Allison Buchholtz-Au",
        house: "Adams House"
    },
    {
        username: "alexandermoore",
        name: "Alex Moore",
        house: "Adams House"
    },
    {
        username: "alisanguyen",
        name: "Alisa Nguyen",
        house: "Quincy House"
    },
    {
        username: "amymir",
        name: "Amy Mir",
        house: "Currier House"
    },
    {
        username: "angelali",
        name: "Angela Li",
        house: "Eliot House"
    },
    {
        username: "anovis",
        name: "Austen Novis",
        house: "Quincy House"
    },
    {
        username: "asellergren",
        name: "Andrew Sellergren",
        house: "Winthrop House"
    },
    {
        username: "behlum",
        name: "Armi Behlum",
        house: "Quincy House"
    },
    {
        username: "bhan",
        name: "Bo Han",
        house: "Winthrop House"
    },
    {
        username: "brandontineo",
        name: "Brandon Tineo",
        house: "Winthrop House"
    },
    {
        username: "bshryock",
        name: "Ben Shryock",
        house: "Dunster House"
    },
    {
        username: "caseygrun",
        name: "Casey Grun",
        house: "Cabot House"
    },
    {
        username: "cbartholomew",
        name: "Christopher Bartholomew",
        house: "Kirkland House"
    },
    {
        username: "cgong",
        name: "Cheng Gong",
        house: "Leverett House"
    },
    {
        username: "christophermueller",
        name: "Chris Mueller",
        house: "Mather House"
    },
    {
        username: "cogden",
        name: "Colton Ogden",
        house: "Kirkland House"
    },
    {
        username: "connorharris",
        name: "Connor Harris",
        house: "Lowell House"
    },
    {
        username: "cynthiameng",
        name: "Cynthia Meng",
        house: "Currier House"
    },
    {
        username: "danielcitron",
        name: "Daniel Citron",
        house: "Quincy House"
    },
    {
        username: "davidkaufman",
        name: "David Kaufman",
        house: "Eliot House"
    },
    {
        username: "dbradley",
        name: "Dan Bradley",
        house: "Lowell House"
    },
    {
        username: "dcoffey",
        name: "Dan Coffey",
        house: "Kirkland House"
    },
    {
        username: "dfeffer",
        name: "Danielle Feffer",
        house: "Dunster House"
    },
    {
        username: "dhu",
        name: "Dianna Hu",
        house: "Quincy House"
    },
    {
        username: "ehebert",
        name: "Ed Hebert",
        house: "Kirkland House"
    },
    {
        username: "farnham",
        name: "Daven Farnham",
        house: "Kirkland House"
    },
    {
        username: "gabriellimaguimaraes",
        name: "Gabriel Guimaraes",
        house: "Thayer Hall"
    },
    {
        username: "georgewu",
        name: "George Wu",
        house: "Dunster House"
    },
    {
        username: "hannahblumberg",
        name: "Hannah Blumberg",
        house: "Cabot House"
    },
    {
        username: "holloway",
        name: "Glenn Holloway",
        house: "Kirkland House"
    },
    {
        username: "iannightingale",
        name: "Ian Nightingale",
        house: "Kirkland House"
    },
    {
        username: "jacksonsteinkamp",
        name: "Jackson Steinkamp",
        house: "Eliot House"
    },
    {
        username: "jawadhoballah",
        name: "Jawad Hoballah",
        house: "Dunster House"
    },
    {
        username: "jfang",
        name: "JN Fang",
        house: "Quincy House"
    },
    {
        username: "jjozwiak",
        name: "Jordan Jozwiak",
        house: "Mather House"
    },
    {
        username: "jlhu",
        name: "Jennifer Hu",
        house: "Eliot House"
    },
    {
        username: "jmarks",
        name: "Jonathan Marks",
        house: "Mather House"
    },
    {
        username: "jmccormick",
        name: "Joe McCormick ",
        house: "Adams House"
    },
    {
        username: "jonathanmiller",
        name: "Jonathan Miller",
        house: "Cabot House"
    },
    {
        username: "joseph",
        name: "Joseph Ong",
        house: "Eliot House"
    },
    {
        username: "jpochtar",
        name: "Jared Pochtar",
        house: "Wigglesworth Hall"
    },
    {
        username: "jsalazar01",
        name: "Julian Salazar",
        house: "Lowell House"
    },
    {
        username: "jyao",
        name: "Jessica Yao",
        house: "Leverett House"
    },
    {
        username: "karenxiao",
        name: "Karen Xiao",
        house: "Cabot House"
    },
    {
        username: "katrynacadle",
        name: "Katryna Cadle",
        house: "Winthrop House"
    },
    {
        username: "kevin",
        name: "Kevin Schmid",
        house: "Kirkland House"
    },
    {
        username: "kevinmu",
        name: "Kevin Mu",
        house: "Pforzheimer House"
    },
    {
        username: "ksherman",
        name: "Kendall Sherman",
        house: "Kirkland House"
    },
    {
        username: "lauren",
        name: "Lauren Carvalho",
        house: "Leverett House"
    },
    {
        username: "lcheng",
        name: "Lucy Cheng",
        house: "Eliot House"
    },
    {
        username: "leviroth",
        name: "Levi Roth",
        house: "Kirkland House"
    },
    {
        username: "lfreitas",
        name: "Lucas Freitas",
        house: "Mather House"
    },
    {
        username: "lloyd",
        name: "Doug Lloyd",
        house: "Eliot House"
    },
    {
        username: "lucianoarango",
        name: "Luciano Arango",
        house: "Adams House"
    },
    {
        username: "luisperez",
        name: "Luis Perez",
        house: "Leverett House"
    },
    {
        username: "lukasmissik",
        name: "Lukas Missik",
        house: "Eliot House"
    },
    {
        username: "lukechang",
        name: "Luke Chang",
        house: "Lowell House"
    },
    {
        username: "lydiachen",
        name: "Lydia Chen",
        house: "Lowell House"
    },
    {
        username: "lytle",
        name: "Shannon Lytle",
        house: "Pforzheimer House"
    },
    {
        username: "malan",
        name: "David J. Malan",
        house: "Mather House"
    },
    {
        username: "mcarmack",
        name: "Mary Carmack",
        house: "Leverett House"
    },
    {
        username: "mgeorgiadis",
        name: "Mari Georgiadis",
        house: "Dunster House"
    },
    {
        username: "milo",
        name: "Milo Banana",
        house: "Leverett House"
    },
    {
        username: "monks",
        name: "Keenan Monks",
        house: "Dunster House"
    },
    {
        username: "mrizzo",
        name: "Mike Rizzo",
        house: "Kirkland House"
    },
    {
        username: "mxzhang",
        name: "Marshall Zhang",
        house: "Mather House"
    },
    {
        username: "ngallimore",
        name: "Nick Gallimore",
        house: "Kirkland House"
    },
    {
        username: "ngo12",
        name: "Phil Ngo",
        house: "Lowell House"
    },
    {
        username: "phan2",
        name: "Will Phan",
        house: "Quincy House"
    },
    {
        username: "pong",
        name: "Alex Pong",
        house: "Quincy House"
    },
    {
        username: "prschmid",
        name: "Patrick Schmid",
        house: "Kirkland House"
    },
    {
        username: "pulkitagrawal",
        name: "Pulkit Agrawal",
        house: "Winthrop House"
    },
    {
        username: "pumpkin",
        name: "Jason Hirschhorn",
        house: "Kirkland House"
    },
    {
        username: "ramyarangan",
        name: "Ramya Rangan",
        house: "Currier House"
    },
    {
        username: "rchen",
        name: "Rebecca Chen",
        house: "Eliot House"
    },
    {
        username: "rgalvan",
        name: "Ramon  Galvan ",
        house: "Mather House"
    },
    {
        username: "rhedshi",
        name: "Rhed Shi",
        house: "Pforzheimer House"
    },
    {
        username: "rj",
        name: "R.J. Aquino",
        house: "Winthrop House"
    },
    {
        username: "rob",
        name: "Rob Bowden",
        house: "Kirkland House"
    },
    {
        username: "rzurawicki",
        name: "Roger Zurawicki",
        house: "Lowell House"
    },
    {
        username: "sbalanovich",
        name: "Serguei Balanovich",
        house: "Cabot House"
    },
    {
        username: "scottjohnson01",
        name: "Scott Johnson",
        house: "Quincy House"
    },
    {
        username: "sibraheem201501",
        name: "Saheela Ibraheem",
        house: "Quincy House"
    },
    {
        username: "spierce-durance",
        name: "Sebastian Pierce-Durance",
        house: "Mather House"
    },
    {
        username: "swestover",
        name: "Shelley Westover",
        house: "Kirkland House"
    },
    {
        username: "tdowns",
        name: "Travis Downs",
        house: "Dunster House"
    },
    {
        username: "thomasbarber",
        name: "TJ Barber",
        house: "Mather House"
    },
    {
        username: "tlevine",
        name: "Theo Levine",
        house: "Kirkland House"
    },
    {
        username: "tmclaughlin",
        name: "Tim McLaughlin",
        house: "Adams House"
    },
    {
        username: "tomasreimers",
        name: "Tomas Reimers",
        house: "Thayer Hall"
    },
    {
        username: "tylermorrison",
        name: "Tyler Morrison",
        house: "Cabot House"
    },
    {
        username: "vsriram",
        name: "Varun Sriram",
        house: "Kirkland House"
    },
    {
        username: "weilinchen",
        name: "Ina Chen",
        house: "Mather House"
    },
    {
        username: "weiwu",
        name: "Winnie Wu",
        house: "Lowell House"
    },
    {
        username: "wesleychen",
        name: "Wesley Chen",
        house: "Eliot House"
    },
    {
        username: "williamhakim10",
        name: "Will Hakim",
        house: "Adams House"
    },
    {
        username: "wxiao",
        name: "Willy Xiao",
        house: "Eliot House"
    },
    {
        username: "yuhki",
        name: "Yukhi Yamashita",
        house: "Mather House"
    },
    {
        username: "zamyla",
        name: "Zamyla Chan",
        house: "Winthrop House"
    },
    {
        username: "zeng",
        name: "Chi Zeng",
        house: "Leverett House"
    },
    {
        username: "zezhouliu",
        name: "Alex Liu",
        house: "Quincy House"
    },
    {
        username: "zhou12",
        name: "Sharon Zhou",
        house: "Eliot House"
    }
];
