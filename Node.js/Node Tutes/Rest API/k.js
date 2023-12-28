const data = [
    {
        "id": 1,
        "first_name": "Sherlocke",
        "last_name": "Billington",
        "email": "sbillington0@netvibes.com",
        "gender": "Male",
        "job_title": "Structural Engineer"
    },
    {
        "id": 2,
        "first_name": "Clio",
        "last_name": "Prigg",
        "email": "cprigg1@statcounter.com",
        "gender": "Female",
        "job_title": "Office Assistant I"
    },
    {
        "id": 3,
        "first_name": "Kanya",
        "last_name": "Beake",
        "email": "kbeake2@mediafire.com",
        "gender": "Female",
        "job_title": "Help Desk Technician"
    },
    {
        "id": 4,
        "first_name": "Mirella",
        "last_name": "Kinder",
        "email": "mkinder3@rediff.com",
        "gender": "Female",
        "job_title": "VP Accounting"
    },
    {
        "id": 5,
        "first_name": "Ferrel",
        "last_name": "Wolstenholme",
        "email": "fwolstenholme4@vistaprint.com",
        "gender": "Male",
        "job_title": "Chemical Engineer"
    },
    {
        "id": 6,
        "first_name": "Rorie",
        "last_name": "Gaylord",
        "email": "rgaylord5@yahoo.com",
        "gender": "Female",
        "job_title": "Sales Representative"
    },
    {
        "id": 7,
        "first_name": "Kat",
        "last_name": "Bravery",
        "email": "kbravery6@linkedin.com",
        "gender": "Female",
        "job_title": "Associate Professor"
    },
    {
        "id": 8,
        "first_name": "Fredrika",
        "last_name": "Looney",
        "email": "flooney7@cbsnews.com",
        "gender": "Female",
        "job_title": "Quality Engineer"
    },
    {
        "id": 9,
        "first_name": "Dane",
        "last_name": "Rohlf",
        "email": "drohlf8@berkeley.edu",
        "gender": "Bigender",
        "job_title": "Occupational Therapist"
    },
    {
        "id": 10,
        "first_name": "Jeramie",
        "last_name": "Metzke",
        "email": "jmetzke9@reuters.com",
        "gender": "Male",
        "job_title": "Accounting Assistant III"
    },
    {
        "id": 11,
        "first_name": "Tad",
        "last_name": "Ricci",
        "email": "triccia@skyrock.com",
        "gender": "Agender",
        "job_title": "VP Marketing"
    },
    {
        "id": 12,
        "first_name": "Amalia",
        "last_name": "De La Salle",
        "email": "adelasalleb@forbes.com",
        "gender": "Non-binary",
        "job_title": "Occupational Therapist"
    },
    {
        "id": 13,
        "first_name": "Annadiana",
        "last_name": "Reimer",
        "email": "areimerc@mysql.com",
        "gender": "Female",
        "job_title": "Quality Engineer"
    },
    {
        "id": 14,
        "first_name": "Jilli",
        "last_name": "Simonnet",
        "email": "jsimonnetd@technorati.com",
        "gender": "Female",
        "job_title": "Nurse Practicioner"
    },
    {
        "id": 15,
        "first_name": "Chicky",
        "last_name": "De Morena",
        "email": "cdemorenae@japanpost.jp",
        "gender": "Genderqueer",
        "job_title": "Operator"
    },
    {
        "id": 16,
        "first_name": "Mario",
        "last_name": "McBean",
        "email": "mmcbeanf@uol.com.br",
        "gender": "Male",
        "job_title": "Teacher"
    },
    {
        "id": 17,
        "first_name": "Heywood",
        "last_name": "Cuthill",
        "email": "hcuthillg@slashdot.org",
        "gender": "Genderfluid",
        "job_title": "Database Administrator I"
    },
    {
        "id": 18,
        "first_name": "Ludovico",
        "last_name": "Pandya",
        "email": "lpandyah@tripadvisor.com",
        "gender": "Male",
        "job_title": "Chief Design Engineer"
    },
    {
        "id": 19,
        "first_name": "Noam",
        "last_name": "Hadland",
        "email": "nhadlandi@ovh.net",
        "gender": "Male",
        "job_title": "Clinical Specialist"
    },
    {
        "id": 20,
        "first_name": "Dewie",
        "last_name": "Sone",
        "email": "dsonej@hhs.gov",
        "gender": "Male",
        "job_title": "Systems Administrator II"
    },
    {
        "id": 21,
        "first_name": "Antonia",
        "last_name": "Lidyard",
        "email": "alidyardk@engadget.com",
        "gender": "Female",
        "job_title": "Design Engineer"
    },
    {
        "id": 22,
        "first_name": "Kerwin",
        "last_name": "Deveril",
        "email": "kdeverill@nymag.com",
        "gender": "Male",
        "job_title": "Internal Auditor"
    },
    {
        "id": 23,
        "first_name": "Vita",
        "last_name": "Swedeland",
        "email": "vswedelandm@dmoz.org",
        "gender": "Female",
        "job_title": "General Manager"
    },
    {
        "id": 24,
        "first_name": "Karla",
        "last_name": "Lauritsen",
        "email": "klauritsenn@google.nl",
        "gender": "Female",
        "job_title": "Assistant Professor"
    },
    {
        "id": 25,
        "first_name": "Eldredge",
        "last_name": "Gliddon",
        "email": "egliddono@accuweather.com",
        "gender": "Male",
        "job_title": "Actuary"
    },
    {
        "id": 26,
        "first_name": "Tonya",
        "last_name": "Shadwick",
        "email": "tshadwickp@ucoz.ru",
        "gender": "Female",
        "job_title": "Developer III"
    },
    {
        "id": 27,
        "first_name": "Ashley",
        "last_name": "Autie",
        "email": "aautieq@people.com.cn",
        "gender": "Agender",
        "job_title": "Budget/Accounting Analyst IV"
    },
    {
        "id": 28,
        "first_name": "Mireille",
        "last_name": "Beament",
        "email": "mbeamentr@cornell.edu",
        "gender": "Female",
        "job_title": "Help Desk Technician"
    },
    {
        "id": 29,
        "first_name": "Kai",
        "last_name": "Brackenbury",
        "email": "kbrackenburys@vistaprint.com",
        "gender": "Female",
        "job_title": "Desktop Support Technician"
    },
    {
        "id": 30,
        "first_name": "Guido",
        "last_name": "Horsefield",
        "email": "ghorsefieldt@sbwire.com",
        "gender": "Male",
        "job_title": "Professor"
    },
    {
        "id": 31,
        "first_name": "Niki",
        "last_name": "Pattie",
        "email": "npattieu@statcounter.com",
        "gender": "Female",
        "job_title": "Research Associate"
    },
    {
        "id": 32,
        "first_name": "Raff",
        "last_name": "Sharpling",
        "email": "rsharplingv@photobucket.com",
        "gender": "Male",
        "job_title": "Human Resources Manager"
    },
    {
        "id": 33,
        "first_name": "Fields",
        "last_name": "Balch",
        "email": "fbalchw@loc.gov",
        "gender": "Male",
        "job_title": "Assistant Media Planner"
    },
    {
        "id": 34,
        "first_name": "Ber",
        "last_name": "O'Hegertie",
        "email": "bohegertiex@squarespace.com",
        "gender": "Bigender",
        "job_title": "Developer II"
    },
    {
        "id": 35,
        "first_name": "Ceciley",
        "last_name": "Towsie",
        "email": "ctowsiey@domainmarket.com",
        "gender": "Female",
        "job_title": "Physical Therapy Assistant"
    },
    {
        "id": 36,
        "first_name": "Alva",
        "last_name": "Rove",
        "email": "arovez@microsoft.com",
        "gender": "Male",
        "job_title": "Research Nurse"
    },
    {
        "id": 37,
        "first_name": "Tod",
        "last_name": "Dalyiel",
        "email": "tdalyiel10@patch.com",
        "gender": "Male",
        "job_title": "Geologist I"
    },
    {
        "id": 38,
        "first_name": "Eulalie",
        "last_name": "Carrol",
        "email": "ecarrol11@stanford.edu",
        "gender": "Female",
        "job_title": "Tax Accountant"
    },
    {
        "id": 39,
        "first_name": "Gordon",
        "last_name": "Ovett",
        "email": "govett12@wikipedia.org",
        "gender": "Male",
        "job_title": "Sales Associate"
    },
    {
        "id": 40,
        "first_name": "Frayda",
        "last_name": "Goundrill",
        "email": "fgoundrill13@theguardian.com",
        "gender": "Bigender",
        "job_title": "Senior Quality Engineer"
    },
    {
        "id": 41,
        "first_name": "Fergus",
        "last_name": "Woolnough",
        "email": "fwoolnough14@123-reg.co.uk",
        "gender": "Male",
        "job_title": "Account Coordinator"
    },
    {
        "id": 42,
        "first_name": "Eydie",
        "last_name": "Golder",
        "email": "egolder15@twitter.com",
        "gender": "Female",
        "job_title": "Structural Engineer"
    },
    {
        "id": 43,
        "first_name": "Jasmin",
        "last_name": "Scamwell",
        "email": "jscamwell16@slideshare.net",
        "gender": "Female",
        "job_title": "Environmental Tech"
    },
    {
        "id": 44,
        "first_name": "Peria",
        "last_name": "Espino",
        "email": "pespino17@github.com",
        "gender": "Female",
        "job_title": "Community Outreach Specialist"
    },
    {
        "id": 45,
        "first_name": "Brit",
        "last_name": "Kovnot",
        "email": "bkovnot18@google.com.br",
        "gender": "Male",
        "job_title": "Developer IV"
    },
    {
        "id": 46,
        "first_name": "Danni",
        "last_name": "Kinvan",
        "email": "dkinvan19@jiathis.com",
        "gender": "Female",
        "job_title": "Business Systems Development Analyst"
    },
    {
        "id": 47,
        "first_name": "Dillon",
        "last_name": "Bosma",
        "email": "dbosma1a@stumbleupon.com",
        "gender": "Male",
        "job_title": "Marketing Assistant"
    },
    {
        "id": 48,
        "first_name": "Misti",
        "last_name": "Sumpton",
        "email": "msumpton1b@dot.gov",
        "gender": "Female",
        "job_title": "Assistant Manager"
    },
    {
        "id": 49,
        "first_name": "Maximilianus",
        "last_name": "Lethieulier",
        "email": "mlethieulier1c@arstechnica.com",
        "gender": "Male",
        "job_title": "Accounting Assistant IV"
    },
    {
        "id": 50,
        "first_name": "Nadya",
        "last_name": "Bredee",
        "email": "nbredee1d@ed.gov",
        "gender": "Female",
        "job_title": "Analyst Programmer"
    },
    {
        "id": 51,
        "first_name": "Roxie",
        "last_name": "McGettigan",
        "email": "rmcgettigan1e@chicagotribune.com",
        "gender": "Female",
        "job_title": "Pharmacist"
    },
    {
        "id": 52,
        "first_name": "Ninetta",
        "last_name": "Gollard",
        "email": "ngollard1f@washingtonpost.com",
        "gender": "Female",
        "job_title": "Project Manager"
    },
    {
        "id": 53,
        "first_name": "Malynda",
        "last_name": "Praundlin",
        "email": "mpraundlin1g@moonfruit.com",
        "gender": "Female",
        "job_title": "Human Resources Manager"
    },
    {
        "id": 54,
        "first_name": "Jason",
        "last_name": "Peterkin",
        "email": "jpeterkin1h@usnews.com",
        "gender": "Male",
        "job_title": "Human Resources Assistant III"
    },
    {
        "id": 55,
        "first_name": "Helaina",
        "last_name": "McKissack",
        "email": "hmckissack1i@cisco.com",
        "gender": "Female",
        "job_title": "Research Nurse"
    },
    {
        "id": 56,
        "first_name": "Dana",
        "last_name": "Costar",
        "email": "dcostar1j@state.gov",
        "gender": "Female",
        "job_title": "Sales Associate"
    },
    {
        "id": 57,
        "first_name": "Clayborne",
        "last_name": "Artrick",
        "email": "cartrick1k@sphinn.com",
        "gender": "Non-binary",
        "job_title": "Electrical Engineer"
    },
    {
        "id": 58,
        "first_name": "Humfrey",
        "last_name": "Fryatt",
        "email": "hfryatt1l@de.vu",
        "gender": "Male",
        "job_title": "Occupational Therapist"
    },
    {
        "id": 59,
        "first_name": "Evvie",
        "last_name": "Gisbourn",
        "email": "egisbourn1m@ucoz.ru",
        "gender": "Female",
        "job_title": "Cost Accountant"
    },
    {
        "id": 60,
        "first_name": "Willabella",
        "last_name": "Paolo",
        "email": "wpaolo1n@tumblr.com",
        "gender": "Female",
        "job_title": "Senior Sales Associate"
    },
    {
        "id": 61,
        "first_name": "Kore",
        "last_name": "Custard",
        "email": "kcustard1o@ted.com",
        "gender": "Female",
        "job_title": "Quality Engineer"
    },
    {
        "id": 62,
        "first_name": "Rosemonde",
        "last_name": "Breckon",
        "email": "rbreckon1p@myspace.com",
        "gender": "Female",
        "job_title": "VP Sales"
    },
    {
        "id": 63,
        "first_name": "Maryrose",
        "last_name": "Gansbuhler",
        "email": "mgansbuhler1q@liveinternet.ru",
        "gender": "Female",
        "job_title": "Cost Accountant"
    },
    {
        "id": 64,
        "first_name": "Desi",
        "last_name": "Gebhardt",
        "email": "dgebhardt1r@hp.com",
        "gender": "Male",
        "job_title": "Paralegal"
    },
    {
        "id": 65,
        "first_name": "Zarah",
        "last_name": "Lavens",
        "email": "zlavens1s@gnu.org",
        "gender": "Female",
        "job_title": "Food Chemist"
    },
    {
        "id": 66,
        "first_name": "Gennie",
        "last_name": "Ottosen",
        "email": "gottosen1t@phoca.cz",
        "gender": "Female",
        "job_title": "Help Desk Technician"
    },
    {
        "id": 67,
        "first_name": "Regina",
        "last_name": "Di Claudio",
        "email": "rdiclaudio1u@gov.uk",
        "gender": "Female",
        "job_title": "Senior Financial Analyst"
    },
    {
        "id": 68,
        "first_name": "Terrye",
        "last_name": "Dawley",
        "email": "tdawley1v@ycombinator.com",
        "gender": "Genderfluid",
        "job_title": "Nuclear Power Engineer"
    },
    {
        "id": 69,
        "first_name": "Antoine",
        "last_name": "Keuneke",
        "email": "akeuneke1w@cloudflare.com",
        "gender": "Male",
        "job_title": "Information Systems Manager"
    },
    {
        "id": 70,
        "first_name": "Wally",
        "last_name": "Clement",
        "email": "wclement1x@psu.edu",
        "gender": "Male",
        "job_title": "VP Sales"
    },
    {
        "id": 71,
        "first_name": "Matelda",
        "last_name": "Digg",
        "email": "mdigg1y@wiley.com",
        "gender": "Female",
        "job_title": "Registered Nurse"
    },
    {
        "id": 72,
        "first_name": "Eberhard",
        "last_name": "Very",
        "email": "every1z@ebay.com",
        "gender": "Male",
        "job_title": "Associate Professor"
    },
    {
        "id": 73,
        "first_name": "Lurette",
        "last_name": "Glyssanne",
        "email": "lglyssanne20@eventbrite.com",
        "gender": "Female",
        "job_title": "Editor"
    },
    {
        "id": 74,
        "first_name": "Verile",
        "last_name": "Thay",
        "email": "vthay21@toplist.cz",
        "gender": "Female",
        "job_title": "Computer Systems Analyst II"
    },
    {
        "id": 75,
        "first_name": "Elbertina",
        "last_name": "Ladley",
        "email": "eladley22@patch.com",
        "gender": "Female",
        "job_title": "Tax Accountant"
    },
    {
        "id": 76,
        "first_name": "Ladonna",
        "last_name": "Maffeo",
        "email": "lmaffeo23@home.pl",
        "gender": "Female",
        "job_title": "Human Resources Manager"
    },
    {
        "id": 77,
        "first_name": "Tamma",
        "last_name": "Jenyns",
        "email": "tjenyns24@indiatimes.com",
        "gender": "Female",
        "job_title": "Assistant Manager"
    },
    {
        "id": 78,
        "first_name": "Ximenes",
        "last_name": "Ratley",
        "email": "xratley25@angelfire.com",
        "gender": "Male",
        "job_title": "Budget/Accounting Analyst I"
    },
    {
        "id": 79,
        "first_name": "Licha",
        "last_name": "Byneth",
        "email": "lbyneth26@mail.ru",
        "gender": "Female",
        "job_title": "Software Engineer II"
    },
    {
        "id": 80,
        "first_name": "Jelene",
        "last_name": "Acuna",
        "email": "jacuna27@sitemeter.com",
        "gender": "Female",
        "job_title": "Graphic Designer"
    },
    {
        "id": 81,
        "first_name": "Auberta",
        "last_name": "McCaghan",
        "email": "amccaghan28@noaa.gov",
        "gender": "Female",
        "job_title": "Developer I"
    },
    {
        "id": 82,
        "first_name": "Hali",
        "last_name": "Veck",
        "email": "hveck29@youtube.com",
        "gender": "Female",
        "job_title": "Paralegal"
    },
    {
        "id": 83,
        "first_name": "Mohammed",
        "last_name": "Punshon",
        "email": "mpunshon2a@prlog.org",
        "gender": "Male",
        "job_title": "Geological Engineer"
    },
    {
        "id": 84,
        "first_name": "Pegeen",
        "last_name": "Greedier",
        "email": "pgreedier2b@java.com",
        "gender": "Female",
        "job_title": "Clinical Specialist"
    },
    {
        "id": 85,
        "first_name": "Marcelline",
        "last_name": "Pilfold",
        "email": "mpilfold2c@weather.com",
        "gender": "Female",
        "job_title": "Budget/Accounting Analyst I"
    },
    {
        "id": 86,
        "first_name": "Jess",
        "last_name": "Oleksinski",
        "email": "joleksinski2d@ustream.tv",
        "gender": "Female",
        "job_title": "Nurse Practicioner"
    },
    {
        "id": 87,
        "first_name": "Yoshiko",
        "last_name": "Rouby",
        "email": "yrouby2e@cloudflare.com",
        "gender": "Genderqueer",
        "job_title": "Structural Analysis Engineer"
    },
    {
        "id": 88,
        "first_name": "Kirsti",
        "last_name": "Bezzant",
        "email": "kbezzant2f@admin.ch",
        "gender": "Female",
        "job_title": "Design Engineer"
    },
    {
        "id": 89,
        "first_name": "Loella",
        "last_name": "Butler",
        "email": "lbutler2g@wikispaces.com",
        "gender": "Female",
        "job_title": "Dental Hygienist"
    },
    {
        "id": 90,
        "first_name": "Guenna",
        "last_name": "Honeyghan",
        "email": "ghoneyghan2h@trellian.com",
        "gender": "Female",
        "job_title": "Assistant Media Planner"
    },
    {
        "id": 91,
        "first_name": "Deonne",
        "last_name": "Really",
        "email": "dreally2i@plala.or.jp",
        "gender": "Agender",
        "job_title": "Administrative Officer"
    },
    {
        "id": 92,
        "first_name": "Dalston",
        "last_name": "de Quincey",
        "email": "ddequincey2j@csmonitor.com",
        "gender": "Male",
        "job_title": "Administrative Assistant III"
    },
    {
        "id": 93,
        "first_name": "Raf",
        "last_name": "Jardine",
        "email": "rjardine2k@oakley.com",
        "gender": "Female",
        "job_title": "Teacher"
    },
    {
        "id": 94,
        "first_name": "Abdel",
        "last_name": "McRitchie",
        "email": "amcritchie2l@dot.gov",
        "gender": "Male",
        "job_title": "Account Coordinator"
    },
    {
        "id": 95,
        "first_name": "Arda",
        "last_name": "Pellman",
        "email": "apellman2m@amazon.co.uk",
        "gender": "Female",
        "job_title": "Technical Writer"
    },
    {
        "id": 96,
        "first_name": "Dolley",
        "last_name": "Foxall",
        "email": "dfoxall2n@opensource.org",
        "gender": "Female",
        "job_title": "Analog Circuit Design manager"
    },
    {
        "id": 97,
        "first_name": "Odele",
        "last_name": "Haly",
        "email": "ohaly2o@boston.com",
        "gender": "Genderfluid",
        "job_title": "Recruiting Manager"
    },
    {
        "id": 98,
        "first_name": "Torr",
        "last_name": "Philipp",
        "email": "tphilipp2p@intel.com",
        "gender": "Male",
        "job_title": "Electrical Engineer"
    },
    {
        "id": 99,
        "first_name": "Rochelle",
        "last_name": "Mullarkey",
        "email": "rmullarkey2q@jugem.jp",
        "gender": "Female",
        "job_title": "Research Nurse"
    },
    {
        "id": 100,
        "first_name": "Donella",
        "last_name": "Blamire",
        "email": "dblamire2r@alexa.com",
        "gender": "Female",
        "job_title": "Registered Nurse"
    },
    {
        "id": 101,
        "first_name": "sourav",
        "last_name": "sahoo",
        "email": "iamjulu78@gmail.com",
        "gender": "male",
        "job_title": "developer"
    },
    {
        "id": 102,
        "first_name": "sourav",
        "last_name": "sahoo",
        "email": "iamjulu78@gmail.com",
        "gender": "male",
        "job_title": "developer"
    },
    {
        "id": 103,
        "first_name": "aniket",
        "last_name": "sahoo",
        "email": "aniket422@gmail.com",
        "gender": "male",
        "job_title": "sales"
    },
    {
        "id": 104,
        "first_name": "samit",
        "last_name": "Pradhan",
        "email": "samimysql@gmail.com",
        "gender": "male",
        "job_title": "main"
    }
]

const updatedData = {
    "id": 104,
    "first_name": "samit",
    "last_name": "Pradhan",
    "email": "@gmail.com",
    "gender": "male",
    "job_title": "main"
}

const dd = data.find(user => user.id === 100)

Object.assign(dd, updatedData)

Object.assign(data, dd)

console.log(data);