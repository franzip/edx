/**
 * buildings.js
 *
 * Computer Science 50
 * Problem Set 8
 *
 * Buildings on campus.
 */

var BUILDINGS = [
    {
        root: "04558",
        name: "1 Bow Street",
        address: "1238 Massachusetts Ave",
        lat: 42.372341075,
        lng: -71.116148412
    },
    {
        root: "02121",
        name: "1 Brattle Square",
        address: "1 Brattle Sq",
        lat: 42.373523361,
        lng: -71.121240176
    },
    {
        root: "04023",
        name: "1 Story Street",
        address: "1 Story St",
        lat: 42.374255463,
        lng: -71.121944377
    },
    {
        root: "06136",
        name: "1-2 Athens Terrace",
        address: "2 Athens Ter",
        lat: 42.369894422,
        lng: -71.115275371
    },
    {
        root: "06100",
        name: "1-7 Shaler Lane",
        address: "1-7 Shaler Ln",
        lat: 42.375045823,
        lng: -71.131379094
    },
    {
        root: "06276",
        name: "10 Akron Street",
        address: "10 Akron St",
        lat: 42.365698568,
        lng: -71.115612951
    },
    {
        root: "06277",
        name: "10 Akron Street",
        address: "10 Akron St",
        lat: 42.364968738,
        lng: -71.115397439
    },
    {
        root: "06134",
        name: "10 Dewolfe Street",
        address: "10 Dewolfe St",
        lat: 42.370655076,
        lng: -71.116205024
    },
    {
        root: "06161",
        name: "10 Mellen Street",
        address: "10 Mellen St",
        lat: 42.380677907,
        lng: -71.118686181
    },
    {
        root: "01200",
        name: "10 Ware Street",
        address: "10 Ware St",
        lat: 42.372737976,
        lng: -71.11209869
    },
    {
        root: "02407",
        name: "10.5 Appian Way Leased Building",
        address: "10 1/2 Appian Way",
        lat: 42.375152004,
        lng: -71.12126432
    },
    {
        root: "06052",
        name: "100 Holton Street",
        address: "100 Holton St",
        lat: 42.360233989,
        lng: -71.137351257
    },
    {
        root: "06168",
        name: "101-103 Plympton Street",
        address: "101-103 Plympton St",
        lat: 42.370061246,
        lng: -71.117971092
    },
    {
        root: "03221",
        name: "103 Walker Street, Cabot House",
        address: "103 Walker St",
        lat: 42.381780696,
        lng: -71.123183776
    },
    {
        root: "06205",
        name: "1033 Massachusetts Avenue",
        address: "1033 Massachusetts Ave",
        lat: 42.369883732,
        lng: -71.11173991
    },
    {
        root: "02116",
        name: "104 Mount Auburn Street",
        address: "100 Mt Auburn St",
        lat: 42.372767734,
        lng: -71.121017809
    },
    {
        root: "03222",
        name: "107 Walker Street, Cabot House",
        address: "107 Walker St",
        lat: 42.381928061,
        lng: -71.123137842
    },
    {
        root: "06250",
        name: "108-120 Holton Street",
        address: "108-120 Holton St",
        lat: 42.360434724,
        lng: -71.138089235
    },
    {
        root: "00025",
        name: "1090 Centre Street",
        address: "1090 Centre St",
        lat: 42.302691564,
        lng: -71.124807082
    },
    {
        root: "06288",
        name: "11 Grant Street",
        address: "11 Grant St",
        lat: 42.369780474,
        lng: -71.115418658
    },
    {
        root: "06269",
        name: "11 Kirkland Place",
        address: "11 Kirkland Pl",
        lat: 42.378071689,
        lng: -71.113494247
    },
    {
        root: "03331",
        name: "11 Riverview, Winthrop House",
        address: "11 Plympton St",
        lat: 42.369905656,
        lng: -71.118069912
    },
    {
        root: "06171",
        name: "11 Sumner Road",
        address: "11 Sumner Rd",
        lat: 42.376154809,
        lng: -71.112869706
    },
    {
        root: "06102",
        name: "11-33 Shaler Lane",
        address: "11-33 Shaler Ln",
        lat: 42.375916262,
        lng: -71.13127064
    },
    {
        root: "07260",
        name: "1100 Massachusetts Avenue",
        address: "1100 Massachusetts Ave",
        lat: 42.370593359,
        lng: -71.11375288
    },
    {
        root: "06059",
        name: "1120 Soldiers Field Road",
        address: "1120 Soldiers Field Rd",
        lat: 42.366226158,
        lng: -71.131968277
    },
    {
        root: "03376",
        name: "113 Walker Street",
        address: "113 Walker St",
        lat: 42.382152793,
        lng: -71.123531323
    },
    {
        root: "06246",
        name: "114 Western Avenue",
        address: "114 Western Ave",
        lat: 42.362852678,
        lng: -71.124565028
    },
    {
        root: "06144",
        name: "118 Banks Street And 23-25 Flagg Street",
        address: "25 Flagg St",
        lat: 42.367897874,
        lng: -71.114468234
    },
    {
        root: "06162",
        name: "12 Mellen Street",
        address: "12 Mellen St",
        lat: 42.380608152,
        lng: -71.118567958
    },
    {
        root: "06150",
        name: "12-12.5 Grant Street",
        address: "12-12.5 Grant St",
        lat: 42.369457975,
        lng: -71.115390117
    },
    {
        root: "06103",
        name: "12-24 Shaler Lane",
        address: "12-24 Shaler Ln",
        lat: 42.37560899,
        lng: -71.131519159
    },
    {
        root: "06053",
        name: "1230 Soldiers Field Road",
        address: "1230 Soldiers Field Rd",
        lat: 42.364070193,
        lng: -71.135518979
    },
    {
        root: "02535",
        name: "125 Mount Auburn Street",
        address: "125 Mt Auburn St",
        lat: 42.373516137,
        lng: -71.122628431
    },
    {
        root: "06074",
        name: "i-Lab",
        address: "125 Western Ave",
        lat: 42.364244438,
        lng: -71.12389201
    },
    {
        root: "06223",
        name: "1256 Soldiers Field Road",
        address: "1256 Soldiers Field Rd",
        lat: 42.363541844,
        lng: -71.137566751
    },
    {
        root: "06023",
        name: "126 Mount Auburn Street",
        address: "126 Mt Auburn St",
        lat: 42.373486554,
        lng: -71.123667368
    },
    {
        root: "06054",
        name: "1266 Soldiers Field Road",
        address: "1266 Soldiers Field Rd",
        lat: 42.363590738,
        lng: -71.138018266
    },
    {
        root: "06255",
        name: "1284 Soldiers Field Road",
        address: "1284 Soldiers Field Rd",
        lat: 42.362975019,
        lng: -71.139968274
    },
    {
        root: "06172",
        name: "13 Sumner Road",
        address: "11 Sumner Rd",
        lat: 42.376129576,
        lng: -71.112675395
    },
    {
        root: "06259",
        name: "1300 Soldiers Field Road",
        address: "1300 Soldiers Field Rd",
        lat: 42.363001143,
        lng: -71.139975701
    },
    {
        root: "06071",
        name: "132 Mount Auburn Street",
        address: "132 Mt Auburn St",
        lat: 42.373483913,
        lng: -71.124258769
    },
    {
        root: "06260",
        name: "1320 Soldiers Field Road",
        address: "1320 Soldiers Field Rd",
        lat: 42.363177786,
        lng: -71.140653303
    },
    {
        root: "06256",
        name: "1330 Soldiers Field Road",
        address: "1330 Soldiers Field Rd",
        lat: 42.362892625,
        lng: -71.141076371
    },
    {
        root: "05598",
        name: "1340 Boylston Street",
        address: "1340 Boylston St",
        lat: 42.343851008,
        lng: -71.098671269
    },
    {
        root: "06299",
        name: "1340 Soldiers Field Road",
        address: "1340 Soldiers Field Rd",
        lat: 42.363071045,
        lng: -71.141357681
    },
    {
        root: "06261",
        name: "135 Western Avenue",
        address: "135 Western Ave",
        lat: 42.364024184,
        lng: -71.125664766
    },
    {
        root: "06268",
        name: "1380 Soldiers Field Road",
        address: "1380 Soldiers Field Rd",
        lat: 42.362939152,
        lng: -71.142905285
    },
    {
        root: "06257",
        name: "14 Rena Street",
        address: "14 Rena St",
        lat: 42.361183406,
        lng: -71.12801652
    },
    {
        root: "06211",
        name: "14 Story Street",
        address: "14 Story St",
        lat: 42.373713387,
        lng: -71.122331144
    },
    {
        root: "06163",
        name: "14-16 Mellen Street",
        address: "14-6 Mellen St",
        lat: 42.38066128,
        lng: -71.11831534
    },
    {
        root: "06073",
        name: "140-142 Mount Auburn Street",
        address: "140-142 Mt Auburn St",
        lat: 42.373878349,
        lng: -71.12465784
    },
    {
        root: "01350",
        name: "141 North Harvard Unheated Storage",
        address: "141 North Harvard St",
        lat: 42.364995729,
        lng: -71.129737646
    },
    {
        root: "04554",
        name: "1414 Massachusetts Avenue",
        address: "1414 Massachusetts Ave",
        lat: 42.37401841,
        lng: -71.119723912
    },
    {
        root: "04550",
        name: "1430 Massachusetts Avenue",
        address: "1430 Massachusetts Ave",
        lat: 42.374104776,
        lng: -71.119063352
    },
    {
        root: "06302",
        name: "15 Hawthorne Street",
        address: "15 Hawthorn St",
        lat: 42.375690883,
        lng: -71.126040042
    },
    {
        root: "06244",
        name: "15 Speedway Avenue",
        address: "15 Speedway Ave",
        lat: 42.363899522,
        lng: -71.133312079
    },
    {
        root: "06187",
        name: "15 Ware Street",
        address: "15 Ware St",
        lat: 42.373119014,
        lng: -71.113048127
    },
    {
        root: "06186",
        name: "15 Ware Street Garage",
        address: "15 Ware St",
        lat: 42.373108759,
        lng: -71.113289849
    },
    {
        root: "06251",
        name: "153-155 Mount Auburn Street",
        address: "153-155 Mt Auburn St",
        lat: 42.374573988,
        lng: -71.125364518
    },
    {
        root: "06293",
        name: "153-155 Mount Auburn Street Carriage House",
        address: "153-155 Mt Auburn St",
        lat: 42.37467728,
        lng: -71.125512436
    },
    {
        root: "05594",
        name: "1542 Tremont Street",
        address: "1542 Tremont St",
        lat: 42.332526661,
        lng: -71.100477605
    },
    {
        root: "04553",
        name: "155 Fawcett Street",
        address: "155 Fawcett St",
        lat: 42.3929506,
        lng: -71.148881698
    },
    {
        root: "01310",
        name: "155 North Harvard Street Building Ang Ga",
        address: "155 North Harvard St",
        lat: 42.36465117,
        lng: -71.128780643
    },
    {
        root: "02870",
        name: "1552-1556 Tremont Street",
        address: "1552-1556 Tremont St",
        lat: 42.332705358,
        lng: -71.100892298
    },
    {
        root: "06199",
        name: "16 Grant Street",
        address: "16 Grant St",
        lat: 42.369484675,
        lng: -71.115562114
    },
    {
        root: "06180",
        name: "16 Prescott Street",
        address: "16 Prescott St",
        lat: 42.373252783,
        lng: -71.11374034
    },
    {
        root: "04199",
        name: "160 Concord Avenue",
        address: "160 Concord Ave",
        lat: 42.381893081,
        lng: -71.130840704
    },
    {
        root: "05542",
        name: "160-164 Longwood Avenue",
        address: "160-164 Longwood Ave",
        lat: 42.335857009,
        lng: -71.100814764
    },
    {
        root: "06069",
        name: "1607-1615 Massachusetts Avenue",
        address: "1607-1615 Massachusetts Ave",
        lat: 42.380274708,
        lng: -71.119485983
    },
    {
        root: "02815",
        name: "1613 Tremont Street",
        address: "1613 Tremont St",
        lat: 42.333721878,
        lng: -71.102938826
    },
    {
        root: "00026",
        name: "163 Walter Street",
        address: "163 Walter St",
        lat: 42.293925129,
        lng: -71.130339802
    },
    {
        root: "02860",
        name: "1633/1635/1637/1639 Tremont Street",
        address: "1633-1639 Tremont St",
        lat: 42.334062381,
        lng: -71.103574328
    },
    {
        root: "02587",
        name: "1637 Massachusetts Avenue",
        address: "1637 Massachusetts Ave",
        lat: 42.381098757,
        lng: -71.11942136
    },
    {
        root: "06050",
        name: "168 Western Avenue",
        address: "168 Western Ave",
        lat: 42.363181213,
        lng: -71.128446862
    },
    {
        root: "06152",
        name: "17 Grant Street",
        address: "17 Grant St",
        lat: 42.369756374,
        lng: -71.115625051
    },
    {
        root: "06151",
        name: "17 Grant Street Garage",
        address: "17 Grant St",
        lat: 42.369879594,
        lng: -71.115491327
    },
    {
        root: "04255",
        name: "17 Sumner Road",
        address: "17 Sumner Rd",
        lat: 42.376381654,
        lng: -71.112869197
    },
    {
        root: "06188",
        name: "17 Ware Street",
        address: "17 Ware St",
        lat: 42.37323947,
        lng: -71.112991138
    },
    {
        root: "06029",
        name: "17-19 South Street",
        address: "17-19 South St",
        lat: 42.371506983,
        lng: -71.120148343
    },
    {
        root: "06101",
        name: "170 Brookline Avenue",
        address: "170 Brookline Ave",
        lat: 42.344504061,
        lng: -71.100886401
    },
    {
        root: "03340",
        name: "1705 Massachusetts Avenue, Dudley House",
        address: "1705 Massachusetts Ave",
        lat: 42.383375788,
        lng: -71.119240128
    },
    {
        root: "04260",
        name: "1727 Cambridge Street",
        address: "1727 Cambridge St",
        lat: 42.375488371,
        lng: -71.112929833
    },
    {
        root: "00108",
        name: "1746 Cambridge Street",
        address: "1746 Cambridge St",
        lat: 42.375268521,
        lng: -71.11359147
    },
    {
        root: "01300",
        name: "175 North Harvard Street Building And Gr",
        address: "175 North Harvard St",
        lat: 42.364110337,
        lng: -71.1288085
    },
    {
        root: "06275",
        name: "176 Lincoln Street",
        address: "176 Lincoln St",
        lat: 42.358348509,
        lng: -71.137665351
    },
    {
        root: "06179",
        name: "18 Prescott Street",
        address: "18 Prescott St",
        lat: 42.373388297,
        lng: -71.113700284
    },
    {
        root: "06178",
        name: "18 Prescott Street Garage",
        address: "18 Prescott St",
        lat: 42.37327838,
        lng: -71.113355426
    },
    {
        root: "06164",
        name: "18-18a Mellen Street",
        address: "18 Mellen St",
        lat: 42.380652108,
        lng: -71.118077695
    },
    {
        root: "05539",
        name: "180 Longwood Avenue",
        address: "180 Longwood Ave",
        lat: 42.336281135,
        lng: -71.101636392
    },
    {
        root: "06289",
        name: "182 Western Avenue",
        address: "182 Western Ave",
        lat: 42.362948782,
        lng: -71.129289039
    },
    {
        root: "06189",
        name: "19 Ware Street",
        address: "19 Ware St",
        lat: 42.37347197,
        lng: -71.113040909
    },
    {
        root: "04265",
        name: "2 Divinity Avenue Yenching Library",
        address: "2 Divinity Ave",
        lat: 42.377695218,
        lng: -71.113555987
    },
    {
        root: "06143",
        name: "2 Grant Street",
        address: "2 Grant St",
        lat: 42.369138449,
        lng: -71.114995285
    },
    {
        root: "06104",
        name: "2-8 Shaler Lane",
        address: "4 Shaler Ln",
        lat: 42.375063884,
        lng: -71.131591664
    },
    {
        root: "06135",
        name: "20 Dewolfe Street",
        address: "20 Dewolfe St",
        lat: 42.370204784,
        lng: -71.116235881
    },
    {
        root: "04270",
        name: "20 Garden Street",
        address: "20 A Garden St",
        lat: 42.377780567,
        lng: -71.123446993
    },
    {
        root: "06165",
        name: "20 Mellen Street",
        address: "20 Mellen St",
        lat: 42.380641454,
        lng: -71.11794534
    },
    {
        root: "02124",
        name: "20 University Road",
        address: "20 University Rd",
        lat: 42.372248597,
        lng: -71.122679748
    },
    {
        root: "06181",
        name: "20-20a Prescott Street",
        address: "20 Prescott St",
        lat: 42.373685525,
        lng: -71.113604961
    },
    {
        root: "06197",
        name: "204-206 North Harvard Street",
        address: "204-206 North Harvard St",
        lat: 42.362901614,
        lng: -71.129783879
    },
    {
        root: "06266",
        name: "206-208 Everett Street",
        address: "206-208 Everett St",
        lat: 42.36012969,
        lng: -71.136730492
    },
    {
        root: "06131",
        name: "21 Robinson Street",
        address: "21 Robinson St",
        lat: 42.383642908,
        lng: -71.126654266
    },
    {
        root: "06270",
        name: "210 North Harvard Street",
        address: "210 North Harvard St",
        lat: 42.362431389,
        lng: -71.129869403
    },
    {
        root: "06039",
        name: "219 Western Avenue",
        address: "219 Western Ave",
        lat: 42.364554094,
        lng: -71.130209394
    },
    {
        root: "02780",
        name: "22 Plympton Street",
        address: "22 Plympton St",
        lat: 42.3719701,
        lng: -71.116237815
    },
    {
        root: "06182",
        name: "22-24 Prescott Street",
        address: "22 Prescott St",
        lat: 42.373915845,
        lng: -71.11349623
    },
    {
        root: "06228",
        name: "224 Western Avenue",
        address: "224 Western Ave",
        lat: 42.362726028,
        lng: -71.130827645
    },
    {
        root: "02532",
        name: "23 Everett Street",
        address: "23 Everett St",
        lat: 42.380313856,
        lng: -71.11784902
    },
    {
        root: "05004",
        name: "25 Travis Street",
        address: "25 Travis St",
        lat: 42.36242921,
        lng: -71.128855026
    },
    {
        root: "N2825",
        name: "25 Wigglesworth Street",
        address: "25 Wigglesworth St",
        lat: 42.334574105,
        lng: -71.102652468
    },
    {
        root: "06063",
        name: "26-28 Church Street",
        address: "28 Church St",
        lat: 42.374112388,
        lng: -71.119952175
    },
    {
        root: "06262",
        name: "267 Western Avenue",
        address: "267 Western Ave",
        lat: 42.363598698,
        lng: -71.132927818
    },
    {
        root: "06263",
        name: "267a Western Avenue",
        address: "253-269 Western Ave",
        lat: 42.363590767,
        lng: -71.133096506
    },
    {
        root: "06264",
        name: "267b Western Avenue",
        address: "253-269 Western Ave",
        lat: 42.363826466,
        lng: -71.132801984
    },
    {
        root: "06217",
        name: "27 Everett Street",
        address: "27 Everett St",
        lat: 42.380212091,
        lng: -71.117479365
    },
    {
        root: "06175",
        name: "27 Everett Street Garage",
        address: "27 Everett St",
        lat: 42.380355564,
        lng: -71.117609642
    },
    {
        root: "06200",
        name: "273 Western Avenue",
        address: "273 Western Ave",
        lat: 42.363610489,
        lng: -71.133415473
    },
    {
        root: "06271",
        name: "277-279 Western Avenue",
        address: "277-279 Western Ave",
        lat: 42.363591226,
        lng: -71.133665348
    },
    {
        root: "06294",
        name: "277r Western Avenue",
        address: "277r Western Ave",
        lat: 42.363739512,
        lng: -71.133369978
    },
    {
        root: "06290",
        name: "28 Hingham Street",
        address: "28 Hingham St",
        lat: 42.365095249,
        lng: -71.115044996
    },
    {
        root: "06048",
        name: "28 Travis Street",
        address: "28 Travis St",
        lat: 42.362339067,
        lng: -71.127122448
    },
    {
        root: "06272",
        name: "283 Western Avenue",
        address: "283 Western Ave",
        lat: 42.363667214,
        lng: -71.133781062
    },
    {
        root: "06055",
        name: "287 Western Avenue",
        address: "287 Western Ave",
        lat: 42.363578943,
        lng: -71.134289643
    },
    {
        root: "06222",
        name: "288 North Harvard Street",
        address: "288 North Harvard St",
        lat: 42.360520851,
        lng: -71.128617875
    },
    {
        root: "06133",
        name: "29 Garden Street",
        address: "29 Garden St",
        lat: 42.379239538,
        lng: -71.12331681
    },
    {
        root: "06137",
        name: "3 Athens Terrace",
        address: "3 Athens Ter",
        lat: 42.369943141,
        lng: -71.115128531
    },
    {
        root: "06284",
        name: "3 Grant Street",
        address: "3 Grant St",
        lat: 42.369629238,
        lng: -71.114849729
    },
    {
        root: "02589",
        name: "3 Mellen Street",
        address: "3 Mellen St",
        lat: 42.381125756,
        lng: -71.119163592
    },
    {
        root: "03341",
        name: "3 Sacramento Street At Dudley House",
        address: "3 Sacramento St",
        lat: 42.382864511,
        lng: -71.11906641
    },
    {
        root: "06212",
        name: "3 Sumner Road",
        address: "3 Sumner Rd",
        lat: 42.375790801,
        lng: -71.112836618
    },
    {
        root: "06208",
        name: "30 Hingham Street",
        address: "30 Hingham St",
        lat: 42.364919652,
        lng: -71.115101236
    },
    {
        root: "02123",
        name: "30 Jfk Street",
        address: "30 J. F. Kennedy St",
        lat: 42.37293405,
        lng: -71.119280273
    },
    {
        root: "06295",
        name: "304 Western Avenue",
        address: "304 Western Ave",
        lat: 42.362872927,
        lng: -71.13559729
    },
    {
        root: "06064",
        name: "32-42 Church Street",
        address: "32-42 Church St",
        lat: 42.374107255,
        lng: -71.120446628
    },
    {
        root: "06008",
        name: "33 Elmwood Avenue Small House",
        address: "33 Elmwood Ave",
        lat: 42.375539183,
        lng: -71.13842092
    },
    {
        root: "06007",
        name: "33 Elmwood Barn",
        address: "33 Elmwood Ave",
        lat: 42.375623258,
        lng: -71.138736948
    },
    {
        root: "06139",
        name: "33-35 Banks Street",
        address: "33-35 Banks St",
        lat: 42.369923766,
        lng: -71.114641899
    },
    {
        root: "06010",
        name: "33a Elmwood Carriage House",
        address: "33a Elmwood Ave",
        lat: 42.37581618,
        lng: -71.138435591
    },
    {
        root: "03052",
        name: "34 Concord Avenue",
        address: "34 Concord Ave",
        lat: 42.379787971,
        lng: -71.126659143
    },
    {
        root: "04275",
        name: "34 Kirkland Street",
        address: "34 Kirkland St",
        lat: 42.376644977,
        lng: -71.113032759
    },
    {
        root: "06224",
        name: "355 Western Avenue",
        address: "355 Western Ave",
        lat: 42.36298745,
        lng: -71.137450783
    },
    {
        root: "03062",
        name: "36 Concord Avenue",
        address: "36 Concord Ave",
        lat: 42.379622861,
        lng: -71.126943427
    },
    {
        root: "06296",
        name: "360 Western Avenue",
        address: "360 Western Ave",
        lat: 42.362733469,
        lng: -71.137034549
    },
    {
        root: "06056",
        name: "367 Western Avenue",
        address: "367 Western Ave",
        lat: 42.363012021,
        lng: -71.138020837
    },
    {
        root: "06282",
        name: "37-39 Banks Street",
        address: "37-39 Banks St",
        lat: 42.369792198,
        lng: -71.114691018
    },
    {
        root: "06095",
        name: "37-41 Kirkland Street",
        address: "37-41 Kirkland St",
        lat: 42.377358042,
        lng: -71.112280311
    },
    {
        root: "06057",
        name: "370 Western Avenue",
        address: "370 Western Ave",
        lat: 42.361015564,
        lng: -71.137018448
    },
    {
        root: "03072",
        name: "38 Concord Avenue",
        address: "38 Concord Ave",
        lat: 42.379802728,
        lng: -71.127274265
    },
    {
        root: "04280",
        name: "38 Kirkland Street",
        address: "38 Kirkland St",
        lat: 42.376715383,
        lng: -71.112541468
    },
    {
        root: "06173",
        name: "381-383 Western Avenue",
        address: "381-383 Western Ave",
        lat: 42.364606549,
        lng: -71.114862439
    },
    {
        root: "06254",
        name: "387 Western Avenue",
        address: "387 Western Ave",
        lat: 42.364604005,
        lng: -71.115110928
    },
    {
        root: "06142",
        name: "4 Grant Street",
        address: "4 Grant St",
        lat: 42.369296681,
        lng: -71.114916331
    },
    {
        root: "06138",
        name: "4-6 Athens Terrace",
        address: "4 Athens Ter",
        lat: 42.370202844,
        lng: -71.115094134
    },
    {
        root: "06096",
        name: "4-6 Mount Auburn Street",
        address: "4 Mt Auburn St",
        lat: 42.370101536,
        lng: -71.113675461
    },
    {
        root: "03082",
        name: "40 Concord Avenue",
        address: "40 Concord Ave",
        lat: 42.380038561,
        lng: -71.127156744
    },
    {
        root: "06206",
        name: "400 Soldiers Field Road Garage",
        address: "400 Soldiers Field Rd",
        lat: 42.360047028,
        lng: -71.118218921
    },
    {
        root: "06202",
        name: "400 Soldiers Field Road Hotel",
        address: "400 Soldiers Field Rd",
        lat: 42.360047028,
        lng: -71.118218921
    },
    {
        root: "06297",
        name: "400 Western Avenue",
        address: "400 Western Ave",
        lat: 42.362647306,
        lng: -71.138885058
    },
    {
        root: "06040",
        name: "41 Winthrop Street",
        address: "41 Winthrop St",
        lat: 42.371683518,
        lng: -71.119097216
    },
    {
        root: "06140",
        name: "41-43 Banks Street",
        address: "41-43 Banks St",
        lat: 42.369645267,
        lng: -71.114676408
    },
    {
        root: "06273",
        name: "415 Western Avenue",
        address: "415 Western Ave",
        lat: 42.362620043,
        lng: -71.140255376
    },
    {
        root: "02410",
        name: "44 Brattle Street",
        address: "44 Brattle St",
        lat: 42.373772997,
        lng: -71.122050824
    },
    {
        root: "02408",
        name: "44 Rear Brattle Street",
        address: "44r Brattle St",
        lat: 42.373581347,
        lng: -71.122351545
    },
    {
        root: "06291",
        name: "445-447 Western Avenue",
        address: "445-447 Western Ave",
        lat: 42.362541571,
        lng: -71.141576401
    },
    {
        root: "06258",
        name: "449-451 Western Avenue",
        address: "449-451 Western Ave",
        lat: 42.362646138,
        lng: -71.141846289
    },
    {
        root: "06141",
        name: "47 Banks Street",
        address: "47 Banks St",
        lat: 42.369504066,
        lng: -71.114714385
    },
    {
        root: "06174",
        name: "472-474 Broadway",
        address: "472-474 Broadway",
        lat: 42.374008005,
        lng: -71.113239078
    },
    {
        root: "02118",
        name: "5 Bennett Street",
        address: "5 Bennett St",
        lat: 42.372204388,
        lng: -71.122717773
    },
    {
        root: "04285",
        name: "5 Bryant Street",
        address: "5 Bryant St",
        lat: 42.379893266,
        lng: -71.111517085
    },
    {
        root: "06285",
        name: "5 Grant Street",
        address: "5 Grant St",
        lat: 42.369687136,
        lng: -71.115067406
    },
    {
        root: "06027",
        name: "5 Sacramento Street",
        address: "5 Sacramento St",
        lat: 42.382903053,
        lng: -71.118735483
    },
    {
        root: "03343",
        name: "5-7 Linden Street",
        address: "5-7 Linden St",
        lat: 42.372655803,
        lng: -71.117626425
    },
    {
        root: "02122",
        name: "50 Church Street",
        address: "50 Church St",
        lat: 42.374084389,
        lng: -71.12043505
    },
    {
        root: "06274",
        name: "501-505 Western Avenue",
        address: "501-505 Western Ave",
        lat: 42.362093089,
        lng: -71.144438521
    },
    {
        root: "04021",
        name: "51 Brattle Street",
        address: "51 Brattle St",
        lat: 42.374646478,
        lng: -71.121396516
    },
    {
        root: "04022",
        name: "53 Church Street",
        address: "53 Church St",
        lat: 42.374503691,
        lng: -71.121166975
    },
    {
        root: "03342",
        name: "53 Dunster Street, Dudley House",
        address: "53 Dunster St",
        lat: 42.372044919,
        lng: -71.119820322
    },
    {
        root: "03344",
        name: "54 Dunster Street",
        address: "54 Dunster St",
        lat: 42.371933667,
        lng: -71.119359131
    },
    {
        root: "06298",
        name: "55  Antwerp Street",
        address: "55  Antwerp St",
        lat: 42.359689777,
        lng: -71.139772174
    },
    {
        root: "06267",
        name: "59 Banks Street",
        address: "59 Banks St",
        lat: 42.36917139,
        lng: -71.114759967
    },
    {
        root: "04552",
        name: "59 Plympton Street",
        address: "59 Plympton St",
        lat: 42.371436275,
        lng: -71.11740976
    },
    {
        root: "06170",
        name: "5a Sacramento Street",
        address: "5a Sacramento St",
        lat: 42.383148411,
        lng: -71.118664705
    },
    {
        root: "06148",
        name: "6 Grant Street",
        address: "6 Grant St",
        lat: 42.369283844,
        lng: -71.115145872
    },
    {
        root: "06147",
        name: "6.5 Grant Street",
        address: "6.5 Grant St",
        lat: 42.369356607,
        lng: -71.115107642
    },
    {
        root: "04290",
        name: "60 Kennedy Street",
        address: "60 J. F .k St",
        lat: 42.371700754,
        lng: -71.120659167
    },
    {
        root: "06225",
        name: "60 Oxford Street",
        address: "60 Oxford St",
        lat: 42.380733409,
        lng: -71.116036683
    },
    {
        root: "04295",
        name: "61 Kirkland Street",
        address: "61 Kirkland St",
        lat: 42.37785411,
        lng: -71.110126917
    },
    {
        root: "04551",
        name: "625 Massachusetts Avenue",
        address: "625 Massachusetts Ave",
        lat: 42.365934504,
        lng: -71.102740176
    },
    {
        root: "05540",
        name: "641 Huntington Avenue",
        address: "641 Huntington Ave",
        lat: 42.335943972,
        lng: -71.101036574
    },
    {
        root: "05538",
        name: "643 Huntington Avenue",
        address: "643 Huntington Ave",
        lat: 42.335641096,
        lng: -71.101179514
    },
    {
        root: "06098",
        name: "65 Mount Auburn Street",
        address: "65 Mt Auburn St",
        lat: 42.372109021,
        lng: -71.117907838
    },
    {
        root: "01201",
        name: "65 Rear Mount Auburn Tele Building",
        address: "Mount Auburn St",
        lat: 42.372276404,
        lng: -71.118107456
    },
    {
        root: "06041",
        name: "65-67 Winthrop Street",
        address: "65-67 Winthrop St",
        lat: 42.372085213,
        lng: -71.119832346
    },
    {
        root: "06304",
        name: "65-79 Seattle Street",
        address: "65-79 Seattle St",
        lat: 42.361509772,
        lng: -71.125498106
    },
    {
        root: "06283",
        name: "69 Banks Street",
        address: "69 Bank St",
        lat: 42.368960521,
        lng: -71.114816212
    },
    {
        root: "04300",
        name: "69 Dunster Street",
        address: "69 Dunster St",
        lat: 42.371546822,
        lng: -71.119831141
    },
    {
        root: "04305",
        name: "7 Bryant Street",
        address: "7 Bryant St",
        lat: 42.379879901,
        lng: -71.110702172
    },
    {
        root: "06286",
        name: "7 Grant Street",
        address: "7 Grant St",
        lat: 42.369931061,
        lng: -71.115079917
    },
    {
        root: "02241",
        name: "7 Sumner Road",
        address: "7 Sumner Rd",
        lat: 42.375933734,
        lng: -71.11289196
    },
    {
        root: "06038",
        name: "7 Ware Street",
        address: "7 Ware St",
        lat: 42.372429436,
        lng: -71.113322376
    },
    {
        root: "02820",
        name: "708 Huntington Avenue",
        address: "708 Huntington Ave",
        lat: 42.334416777,
        lng: -71.103658799
    },
    {
        root: "02830",
        name: "716 Huntington Avenue",
        address: "716 Huntington Ave",
        lat: 42.334138553,
        lng: -71.104058837
    },
    {
        root: "02840",
        name: "718 Huntington Avenue",
        address: "718 Huntington Ave",
        lat: 42.33412647,
        lng: -71.104024314
    },
    {
        root: "04310",
        name: "74 Mount Auburn Street",
        address: "74 Mt Auburn St",
        lat: 42.371808563,
        lng: -71.118409246
    },
    {
        root: "04315",
        name: "77 Dunster Street",
        address: "77 Dunster St",
        lat: 42.371476286,
        lng: -71.120034732
    },
    {
        root: "06022",
        name: "78 Mount Auburn Street",
        address: "78 Mt Auburn St",
        lat: 42.372081146,
        lng: -71.11914219
    },
    {
        root: "06149",
        name: "8 Grant Street",
        address: "8 Grant St",
        lat: 42.369389318,
        lng: -71.115217137
    },
    {
        root: "06067",
        name: "8 Holyoke Street",
        address: "8 Holyoke St",
        lat: 42.372755471,
        lng: -71.11801551
    },
    {
        root: "04115",
        name: "8 Prescott Street",
        address: "8 Prescott St",
        lat: 42.372575145,
        lng: -71.113730415
    },
    {
        root: "04110",
        name: "8 Prescott Street Garage",
        address: "8 Prescott St",
        lat: 42.372534292,
        lng: -71.113751586
    },
    {
        root: "06033",
        name: "8 Story Street",
        address: "4-12 Story St",
        lat: 42.373824332,
        lng: -71.121943917
    },
    {
        root: "06097",
        name: "8-10 Mount Auburn Street",
        address: "8-10 Mt Auburn St",
        lat: 42.370326804,
        lng: -71.114239779
    },
    {
        root: "02890",
        name: "812 Huntington Ave",
        address: "812 Huntington Ave",
        lat: 42.333264277,
        lng: -71.106246135
    },
    {
        root: "03097",
        name: "83 Brattle Street",
        address: "83 Brattle St",
        lat: 42.375939036,
        lng: -71.123812583
    },
    {
        root: "06249",
        name: "84 Seattle Street",
        address: "84 Seattle St",
        lat: 42.361192979,
        lng: -71.126100404
    },
    {
        root: "02850",
        name: "841 Parker Street",
        address: "841 Parker St",
        lat: 42.327702822,
        lng: -71.099692589
    },
    {
        root: "06183",
        name: "85-95 Prescott Street",
        address: "85-95 Prescott St",
        lat: 42.375061014,
        lng: -71.113590899
    },
    {
        root: "06292",
        name: "8a Mount Auburn Street",
        address: "8a Mt Auburn St",
        lat: 42.369823528,
        lng: -71.113935949
    },
    {
        root: "02243",
        name: "9 Ash Street",
        address: "9 Ash St",
        lat: 42.375268093,
        lng: -71.124983201
    },
    {
        root: "02770",
        name: "9 Bow Street",
        address: "9 Bow St",
        lat: 42.371916912,
        lng: -71.115758713
    },
    {
        root: "06287",
        name: "9 Grant Street",
        address: "9 Grant St",
        lat: 42.369724337,
        lng: -71.115207327
    },
    {
        root: "04320",
        name: "9 Kirkland Place",
        address: "9 Kirkland Pl",
        lat: 42.377900268,
        lng: -71.113143437
    },
    {
        root: "06226",
        name: "9 Travis Street",
        address: "9 Travis St",
        lat: 42.362656014,
        lng: -71.128784575
    },
    {
        root: "06185",
        name: "9-13a Ware Street",
        address: "9-13a Ware St",
        lat: 42.373019498,
        lng: -71.113315289
    },
    {
        root: "06301",
        name: "90 Antwerp Street",
        address: "90 Antwerp St",
        lat: 42.361316678,
        lng: -71.139052127
    },
    {
        root: "06219",
        name: "90 Mount Auburn Street",
        address: "90 Mt Auburn St",
        lat: 42.37229571,
        lng: -71.119693213
    },
    {
        root: "06265",
        name: "90 Seattle St",
        address: "90 Seattle St",
        lat: 42.361656892,
        lng: -71.12652909
    },
    {
        root: "02845",
        name: "90 Smith Street",
        address: "90 Smith St",
        lat: 42.333999699,
        lng: -71.100078594
    },
    {
        root: "00107",
        name: "Adolphus Busch Hall",
        address: "27-29 Kirkland St",
        lat: 42.377213552,
        lng: -71.114218374
    },
    {
        root: "06030",
        name: "Advocate Building",
        address: "21 South St",
        lat: 42.37158122,
        lng: -71.120400652
    },
    {
        root: "03099",
        name: "Agassiz House",
        address: "5 James St",
        lat: 42.376150294,
        lng: -71.123052304
    },
    {
        root: "01850",
        name: "Agen^25 Mount Auburn Street",
        address: "25 Mt Auburn St",
        lat: 42.370948768,
        lng: -71.11464096
    },
    {
        root: "05040",
        name: "Aldrich Hall",
        address: "35 Harvard Way",
        lat: 42.365957654,
        lng: -71.121451437
    },
    {
        root: "07730",
        name: "Allston Science Complex",
        address: "150 Western Ave",
        lat: 42.363273617,
        lng: -71.12749872
    },
    {
        root: "03107",
        name: "Alumnae House",
        address: "79-81 Brattle St",
        lat: 42.375789476,
        lng: -71.123455608
    },
    {
        root: "02574",
        name: "Ames Hall",
        address: "20 Everett St",
        lat: 42.379741238,
        lng: -71.117674812
    },
    {
        root: "02311",
        name: "Andover Hall",
        address: "45 Francis Ave",
        lat: 42.379599345,
        lng: -71.113143163
    },
    {
        root: "02312",
        name: "Andover Theological Library",
        address: "45 Francis Ave",
        lat: 42.379733561,
        lng: -71.113194734
    },
    {
        root: "03350",
        name: "Apley Court At Dudley House",
        address: "16 Holyoke St",
        lat: 42.372282442,
        lng: -71.118069468
    },
    {
        root: "03212",
        name: "Apthorp House, Adams House",
        address: "10 Linden St",
        lat: 42.372212043,
        lng: -71.116859883
    },
    {
        root: "05536",
        name: "Armenise",
        address: "200 Longwood Ave",
        lat: 42.336768199,
        lng: -71.102970846
    },
    {
        root: "06237",
        name: "Arsenal Building # 311",
        address: "311 Arsenal St",
        lat: 42.363556979,
        lng: -71.165237885
    },
    {
        root: "06239",
        name: "Arsenal Building # 313",
        address: "100 Talcott Ave",
        lat: 42.363093301,
        lng: -71.163200822
    },
    {
        root: "06234",
        name: "Arsenal Building #117",
        address: "3 Kingsbury Ave",
        lat: 42.361367098,
        lng: -71.16469947
    },
    {
        root: "06235",
        name: "Arsenal Building #118",
        address: "2 Kingsbury Ave",
        lat: 42.361672458,
        lng: -71.164668287
    },
    {
        root: "06236",
        name: "Arsenal Building #131",
        address: "400 Talcott Ave",
        lat: 42.361936455,
        lng: -71.163294713
    },
    {
        root: "06238",
        name: "Arsenal Building #312",
        address: "321 Arsenal St",
        lat: 42.363097865,
        lng: -71.164473356
    },
    {
        root: "06229",
        name: "Arsenal Building #37",
        address: "200 Talcott Ave",
        lat: 42.362529952,
        lng: -71.163204057
    },
    {
        root: "06230",
        name: "Arsenal Building #39",
        address: "300 North Beacon St",
        lat: 42.363308982,
        lng: -71.168496897
    },
    {
        root: "06231",
        name: "Arsenal Building #43",
        address: "343 Arsenal St",
        lat: 42.363209321,
        lng: -71.163200554
    },
    {
        root: "06232",
        name: "Arsenal Building #60",
        address: "1 Kingsbury Ave",
        lat: 42.361931635,
        lng: -71.165011779
    },
    {
        root: "06233",
        name: "Arsenal Building #97",
        address: "400 North Beacon St",
        lat: 42.362809884,
        lng: -71.166955379
    },
    {
        root: "06240",
        name: "Arsenal Parking Garage",
        address: "1311 North Beacon St",
        lat: 42.36298951,
        lng: -71.165384259
    },
    {
        root: "02510",
        name: "Austin Hall",
        address: "1515 Massachusetts Ave",
        lat: 42.377249376,
        lng: -71.118675235
    },
    {
        root: "02720",
        name: "Bagnoud Building, F. X.",
        address: "661 Huntington Ave",
        lat: 42.335311551,
        lng: -71.102260475
    },
    {
        root: "02588",
        name: "Baker Hall",
        address: "5 Mellen St",
        lat: 42.381057732,
        lng: -71.119089274
    },
    {
        root: "05066",
        name: "Baker Hall",
        address: "45 Harvard Way",
        lat: 42.367506015,
        lng: -71.120109935
    },
    {
        root: "05000",
        name: "Baker Library/Bloomberg",
        address: "25 Harvard Way",
        lat: 42.366668388,
        lng: -71.123178262
    },
    {
        root: "04121",
        name: "Barker Center, Union/Burr",
        address: "12 Quincy St",
        lat: 42.372854999,
        lng: -71.114355784
    },
    {
        root: "04122",
        name: "Barker Center, Warren House",
        address: "11 Prescott St",
        lat: 42.373031825,
        lng: -71.114045399
    },
    {
        root: "03223",
        name: "Barnard Hall, Cabot House",
        address: "62 Linnaean St",
        lat: 42.381188304,
        lng: -71.124585521
    },
    {
        root: "04480",
        name: "Bauer Life Sciences Building",
        address: "13 Frisbie Pl",
        lat: 42.377846204,
        lng: -71.114683406
    },
    {
        root: "06078",
        name: "Beckwith Circle Bldg A",
        address: "3 Beckwith Cir",
        lat: 42.382275799,
        lng: -71.111772888
    },
    {
        root: "06079",
        name: "Beckwith Circle Bldg B",
        address: "4 Beckwith Cir",
        lat: 42.382112458,
        lng: -71.111508632
    },
    {
        root: "06080",
        name: "Beckwith Circle Bldg C",
        address: "7 Beckwith Circle",
        lat: 42.382054214,
        lng: -71.111813234
    },
    {
        root: "06081",
        name: "Beckwith Circle Bldg D",
        address: "252 Beckwith Cir",
        lat: 42.382203659,
        lng: -71.111375317
    },
    {
        root: "06082",
        name: "Beckwith Circle Bldg E",
        address: "258 Beckwith Cir",
        lat: 42.382253759,
        lng: -71.111638542
    },
    {
        root: "02112",
        name: "Belfer Center",
        address: "79 J. F. Kennedy St",
        lat: 42.371217499,
        lng: -71.121526907
    },
    {
        root: "03920",
        name: "Beren Tennis Pavilion",
        address: "71 North Harvard St",
        lat: 42.369140299,
        lng: -71.127905997
    },
    {
        root: "03224",
        name: "Bertram Hall, Cabot House",
        address: "53 Shepard St",
        lat: 42.380773297,
        lng: -71.123881275
    },
    {
        root: "03241",
        name: "Bingham Hall, Currier House",
        address: "64 Linnaean St",
        lat: 42.381765361,
        lng: -71.125819432
    },
    {
        root: "04325",
        name: "Biological Laboratory",
        address: "16 Divinity Ave",
        lat: 42.37935886,
        lng: -71.113546193
    },
    {
        root: "04559",
        name: "Biological Research Infrastructure",
        address: "16 Divinity Ave",
        lat: 42.378524637,
        lng: -71.113672355
    },
    {
        root: "01702",
        name: "Blackstone North",
        address: "46 Blackstone St",
        lat: 42.364108482,
        lng: -71.115346352
    },
    {
        root: "01703",
        name: "Blackstone South",
        address: "24 Blackstone St",
        lat: 42.363763358,
        lng: -71.114818805
    },
    {
        root: "01701",
        name: "Blackstone Steam Plant",
        address: "46 Blackstone St",
        lat: 42.36421944,
        lng: -71.115370323
    },
    {
        root: "01707",
        name: "Blackstone West",
        address: "46 Blackstone St",
        lat: 42.363709574,
        lng: -71.115702224
    },
    {
        root: "03840",
        name: "Blodgett Pool",
        address: "55 North Harvard St",
        lat: 42.368035735,
        lng: -71.124378428
    },
    {
        root: "06120",
        name: "Botanic Gardens Bldg A",
        address: "24 Fernald Dr",
        lat: 42.383829988,
        lng: -71.125612457
    },
    {
        root: "06121",
        name: "Botanic Gardens Bldg B",
        address: "12 Fernald Dr",
        lat: 42.383267973,
        lng: -71.125210114
    },
    {
        root: "06122",
        name: "Botanic Gardens Bldg C",
        address: "24 Fernald Dr",
        lat: 42.383095807,
        lng: -71.125934131
    },
    {
        root: "06123",
        name: "Botanic Gardens Bldg D",
        address: "30 Fernald Dr",
        lat: 42.382720468,
        lng: -71.125877791
    },
    {
        root: "06124",
        name: "Botanic Gardens Bldg E",
        address: "34 Fernald Dr",
        lat: 42.382811924,
        lng: -71.126620801
    },
    {
        root: "06125",
        name: "Botanic Gardens Bldg F",
        address: "24 Fernald Dr",
        lat: 42.382501494,
        lng: -71.126851129
    },
    {
        root: "06126",
        name: "Botanic Gardens Bldg G",
        address: "12 Fernald Dr",
        lat: 42.383683768,
        lng: -71.125989628
    },
    {
        root: "06127",
        name: "Botanic Gardens Bldg H",
        address: "24 Fernald Dr",
        lat: 42.382571441,
        lng: -71.126814444
    },
    {
        root: "06128",
        name: "Botanic Gardens Bldg I",
        address: "24 Fernald Dr",
        lat: 42.382484221,
        lng: -71.126940062
    },
    {
        root: "06196",
        name: "Botanic Gardens Childcare Center",
        address: "26 Robinson St",
        lat: 42.383351405,
        lng: -71.126717906
    },
    {
        root: "04330",
        name: "Boylston Hall",
        address: "5 Harvard Yard",
        lat: 42.373455641,
        lng: -71.117446144
    },
    {
        root: "03225",
        name: "Briggs Hall, Cabot House",
        address: "60 Linnaean St",
        lat: 42.381188304,
        lng: -71.124585521
    },
    {
        root: "03851",
        name: "Bright Hockey Center",
        address: "67  North Harvard St",
        lat: 42.368275898,
        lng: -71.126626013
    },
    {
        root: "03852",
        name: "Bright Rink Refrigeration",
        address: "736 Soldiers Field Rd",
        lat: 42.368575806,
        lng: -71.126611067
    },
    {
        root: "01391",
        name: "Broadway Garage",
        address: "5 Felton St",
        lat: 42.374759388,
        lng: -71.11242951
    },
    {
        root: "03271",
        name: "Bryan Hall, Kirkland House",
        address: "85 Dunster St",
        lat: 42.371400194,
        lng: -71.120717035
    },
    {
        root: "03109",
        name: "Buckingham House",
        address: "77 Brattle St",
        lat: 42.375480213,
        lng: -71.122859951
    },
    {
        root: "05022",
        name: "Burden Hall",
        address: "39 Harvard Way",
        lat: 42.365619778,
        lng: -71.121064022
    },
    {
        root: "03091",
        name: "Byerly Hall",
        address: "6-8 Garden St",
        lat: 42.376187693,
        lng: -71.121892357
    },
    {
        root: "03226",
        name: "Cabot Hall, Cabot House",
        address: "100 Walker St",
        lat: 42.381631482,
        lng: -71.12363623
    },
    {
        root: "03232",
        name: "Canaday Hall",
        address: "22 Harvard Yard",
        lat: 42.375433573,
        lng: -71.115732536
    },
    {
        root: "03231",
        name: "Canaday Hall A",
        address: "22 Harvard Yard",
        lat: 42.375214879,
        lng: -71.116107298
    },
    {
        root: "03234",
        name: "Canaday Hall C",
        address: "22 Harvard Yard",
        lat: 42.375146354,
        lng: -71.115715848
    },
    {
        root: "04340",
        name: "Carpenter Center",
        address: "19 Prescott St",
        lat: 42.373805097,
        lng: -71.11419853
    },
    {
        root: "02320",
        name: "Carriage House",
        address: "56 Francis Ave",
        lat: 42.38068128,
        lng: -71.112034854
    },
    {
        root: "04350",
        name: "Cea 38 Oxford Street",
        address: "38 Oxford St",
        lat: 42.380218069,
        lng: -71.114376036
    },
    {
        root: "02321",
        name: "Center For The Study Of World Religions",
        address: "42 Francis Ave",
        lat: 42.38032678,
        lng: -71.111719467
    },
    {
        root: "04472",
        name: "Cgis South",
        address: "1730 Cambridge St",
        lat: 42.374827866,
        lng: -71.113108605
    },
    {
        root: "05064",
        name: "Chase Hall",
        address: "34 Harvard Way",
        lat: 42.367122137,
        lng: -71.122037498
    },
    {
        root: "04860",
        name: "Child Hall",
        address: "26 Everett St",
        lat: 42.37896572,
        lng: -71.118173188
    },
    {
        root: "05023",
        name: "Class Of 1959 Chapel",
        address: "66 North Harvard St",
        lat: 42.365958976,
        lng: -71.123895284
    },
    {
        root: "03351",
        name: "Claverly Hall",
        address: "63 Mt Auburn St",
        lat: 42.37230143,
        lng: -71.1175923
    },
    {
        root: "00022",
        name: "Cold Storage Building",
        address: "1050 Centre St",
        lat: 42.302851548,
        lng: -71.124359976
    },
    {
        root: "03301",
        name: "Comstock Hall, Pforzheimer House",
        address: "130 Walker St",
        lat: 42.382347531,
        lng: -71.124589302
    },
    {
        root: "04131",
        name: "Conant Chemistry Lab",
        address: "12 Oxford St",
        lat: 42.377232225,
        lng: -71.114975511
    },
    {
        root: "04861",
        name: "Conant Hall",
        address: "36 Oxford St",
        lat: 42.379296076,
        lng: -71.1161693
    },
    {
        root: "05094",
        name: "Connell House",
        address: "20 Harvard Way",
        lat: 42.367047005,
        lng: -71.123183407
    },
    {
        root: "04132",
        name: "Converse Chemistry Lab",
        address: "12 Oxford St",
        lat: 42.377232225,
        lng: -71.114975511
    },
    {
        root: "05092",
        name: "Cotting House",
        address: "50 North Harvard St",
        lat: 42.367127218,
        lng: -71.124317215
    },
    {
        root: "05541",
        name: "Countway Library",
        address: "10 Shattuck St",
        lat: 42.33522087,
        lng: -71.103323707
    },
    {
        root: "02138",
        name: "Covered Bike Shelter",
        address: "19 Divinity Ave",
        lat: 42.379355251,
        lng: -71.112808877
    },
    {
        root: "01389",
        name: "Cowperthwaite Garage",
        address: "5 Cowperthwaite St",
        lat: 42.369361104,
        lng: -71.115821815
    },
    {
        root: "03022",
        name: "Cronkhite Center",
        address: "84-86 Brattle St",
        lat: 42.375724523,
        lng: -71.124236963
    },
    {
        root: "03760",
        name: "Cruft Laboratory",
        address: "15 Oxford St",
        lat: 42.377638202,
        lng: -71.117012195
    },
    {
        root: "05042",
        name: "Cumnock Hall",
        address: "33 Harvard Way",
        lat: 42.365698129,
        lng: -71.122707256
    },
    {
        root: "03242",
        name: "Currier House Master's Residence",
        address: "64 Linnaean St",
        lat: 42.381715529,
        lng: -71.125525497
    },
    {
        root: "00020",
        name: "Dana Greenhouse",
        address: "1050 Centre St",
        lat: 42.303344986,
        lng: -71.124387639
    },
    {
        root: "06006",
        name: "Dana Palmer",
        address: "16 Quincy St",
        lat: 42.373020412,
        lng: -71.114554125
    },
    {
        root: "02575",
        name: "Dane Hall",
        address: "22 Everett St",
        lat: 42.379712433,
        lng: -71.1176771
    },
    {
        root: "03243",
        name: "Daniels Hall, Currier House",
        address: "64 Linnaean St",
        lat: 42.381539711,
        lng: -71.125270024
    },
    {
        root: "02113",
        name: "David Rubenstein Building",
        address: "1 Eliot St",
        lat: 42.371215916,
        lng: -71.122589928
    },
    {
        root: "05020",
        name: "Dean's House",
        address: "41 Harvard Way",
        lat: 42.366425497,
        lng: -71.120819837
    },
    {
        root: "03855",
        name: "Dillon Field House",
        address: "47 North Harvard St",
        lat: 42.368512018,
        lng: -71.125571745
    },
    {
        root: "05093",
        name: "Dillon House",
        address: "30 Harvard Way",
        lat: 42.366807161,
        lng: -71.121850253
    },
    {
        root: "02315",
        name: "Divinity Hall",
        address: "12 Divinity Ave",
        lat: 42.378852248,
        lng: -71.114306198
    },
    {
        root: "06036",
        name: "Doebele House",
        address: "48 Trowbridge St",
        lat: 42.372399945,
        lng: -71.111057831
    },
    {
        root: "06193",
        name: "Doebele House Addition",
        address: "48 Trowbridge St",
        lat: 42.372399945,
        lng: -71.111057831
    },
    {
        root: "03251",
        name: "Dunster House",
        address: "945 Memorial Dr",
        lat: 42.36911703,
        lng: -71.116742465
    },
    {
        root: "03252",
        name: "Dunster House Master's Residence",
        address: "945 Memorial Dr",
        lat: 42.368057527,
        lng: -71.115993978
    },
    {
        root: "03227",
        name: "Eliot Hall, Cabot House",
        address: "51 Shepard St",
        lat: 42.381066403,
        lng: -71.123240415
    },
    {
        root: "03263",
        name: "Eliot House",
        address: "101 Dunster St",
        lat: 42.370481836,
        lng: -71.121033763
    },
    {
        root: "03262",
        name: "Eliot House Master's Residence",
        address: "967 Memorial Dr",
        lat: 42.37007501,
        lng: -71.120570668
    },
    {
        root: "03261",
        name: "Eliot-Kirkland Link",
        address: "80  J. F. Kennedy St",
        lat: 42.370548754,
        lng: -71.120689391
    },
    {
        root: "04365",
        name: "Emerson Hall",
        address: "19 Quincy St",
        lat: 42.373901628,
        lng: -71.114882706
    },
    {
        root: "03761",
        name: "Engineering Science Laboratory",
        address: "58 Oxford St",
        lat: 42.380026738,
        lng: -71.115955158
    },
    {
        root: "03244",
        name: "Entry Building, Currier House",
        address: "64 Linnaean St",
        lat: 42.381715529,
        lng: -71.125525497
    },
    {
        root: "01397",
        name: "Everett Street Northwest Corner Garage",
        address: "6-8 Everett St",
        lat: 42.379716748,
        lng: -71.119048896
    },
    {
        root: "00951",
        name: "Faculty Club",
        address: "20 Quincy St",
        lat: 42.373363184,
        lng: -71.114208519
    },
    {
        root: "03302",
        name: "Faculty Row, Pforzheimer House",
        address: "54 Linnaean St",
        lat: 42.382679442,
        lng: -71.124998629
    },
    {
        root: "06076",
        name: "Fairfax Hall",
        address: "1300-1316 Massachusetts Ave",
        lat: 42.372807877,
        lng: -71.117196589
    },
    {
        root: "04370",
        name: "Farlow Herbarium",
        address: "20 Divinity Ave",
        lat: 42.379115358,
        lng: -71.114318898
    },
    {
        root: "03101",
        name: "Fay House",
        address: "10 Garden St",
        lat: 42.376373638,
        lng: -71.122465297
    },
    {
        root: "00091",
        name: "Fogg Art Museum",
        address: "32 Quincy St",
        lat: 42.374327623,
        lng: -71.114207593
    },
    {
        root: "00092",
        name: "Fogg Museum Library Addition",
        address: "32 Quincy St",
        lat: 42.374292607,
        lng: -71.11396279
    },
    {
        root: "06072",
        name: "French Consulate",
        address: "134 Mt Auburn St",
        lat: 42.373641461,
        lng: -71.124046888
    },
    {
        root: "05060",
        name: "Gallatin Hall",
        address: "24 Harvard Way",
        lat: 42.367388721,
        lng: -71.123241096
    },
    {
        root: "05561",
        name: "Galleria",
        address: "342 Longwood Ave",
        lat: 42.338625317,
        lng: -71.107005009
    },
    {
        root: "02512",
        name: "Gannett House",
        address: "1511 Massachusetts Ave",
        lat: 42.376636958,
        lng: -71.119132037
    },
    {
        root: "03245",
        name: "Gilbert Hall, Currier House",
        address: "64 Linnaean St",
        lat: 42.381597373,
        lng: -71.125770385
    },
    {
        root: "05097",
        name: "Glass Hall",
        address: "660 Soldiers Field Rd",
        lat: 42.367180046,
        lng: -71.120906158
    },
    {
        root: "05534",
        name: "Goldenson Building",
        address: "220 Longwood Ave",
        lat: 42.336130613,
        lng: -71.103332353
    },
    {
        root: "05533",
        name: "Gordon Hall",
        address: "25 Shattuck St",
        lat: 42.335842136,
        lng: -71.104443627
    },
    {
        root: "03860",
        name: "Gordon Track And Tennis Center",
        address: "69 North Harvard St",
        lat: 42.367898414,
        lng: -71.126997074
    },
    {
        root: "03332",
        name: "Gore Hall, Winthrop House",
        address: "32 Mill St",
        lat: 42.370460494,
        lng: -71.118893092
    },
    {
        root: "03352",
        name: "Grays Hall",
        address: "7 Harvard Yard",
        lat: 42.373761791,
        lng: -71.118027441
    },
    {
        root: "05096",
        name: "Greenhill House",
        address: "40 Harvard Way",
        lat: 42.366716628,
        lng: -71.121014988
    },
    {
        root: "03103",
        name: "Greenleaf House",
        address: "76 Brattle St",
        lat: 42.375394039,
        lng: -71.123688146
    },
    {
        root: "03353",
        name: "Greenough Hall",
        address: "10 Prescott St",
        lat: 42.373116276,
        lng: -71.113702563
    },
    {
        root: "02518",
        name: "Griswold Hall",
        address: "1525 Massachusetts Ave",
        lat: 42.37771036,
        lng: -71.119028169
    },
    {
        root: "02240",
        name: "Gund Hall",
        address: "42-48 Quincy St",
        lat: 42.376271858,
        lng: -71.113863572
    },
    {
        root: "02402",
        name: "Gutman Library",
        address: "6 Appian Way",
        lat: 42.375087884,
        lng: -71.121605446
    },
    {
        root: "05061",
        name: "Hamilton Hall",
        address: "700 Soldiers Field Rd",
        lat: 42.3679913,
        lng: -71.123586756
    },
    {
        root: "06075",
        name: "Hampden Hall",
        address: "1236-1256 Massachusetts Ave",
        lat: 42.372445849,
        lng: -71.116051372
    },
    {
        root: "02570",
        name: "Harkness Commons",
        address: "14 Everett St",
        lat: 42.379303012,
        lng: -71.11871714
    },
    {
        root: "04375",
        name: "Harvard Hall",
        address: "12 Harvard Yard",
        lat: 42.374885607,
        lng: -71.117976315
    },
    {
        root: "05531",
        name: "Harvard Institutes Of Medicine",
        address: "4 Blackfan Cir",
        lat: 42.338611133,
        lng: -71.103738183
    },
    {
        root: "06065",
        name: "Harvard Square Hotel",
        address: "110 Mount Auburn St",
        lat: 42.372855042,
        lng: -71.121923105
    },
    {
        root: "03865",
        name: "Harvard Yacht Club",
        address: "45 Memorial Dr",
        lat: 42.3600921,
        lng: -71.082691991
    },
    {
        root: "06083",
        name: "Haskins Hall",
        address: "28-34a Irving St",
        lat: 42.376076267,
        lng: -71.110665716
    },
    {
        root: "02582",
        name: "Hastings Hall",
        address: "1533-1541 Massachusetts Ave",
        lat: 42.377701141,
        lng: -71.119465235
    },
    {
        root: "02522",
        name: "Hauser Hall",
        address: "1575 Massachusetts Ave",
        lat: 42.378638272,
        lng: -71.11793164
    },
    {
        root: "05043",
        name: "Hawes Hall",
        address: "37 Harvard Way",
        lat: 42.365957654,
        lng: -71.121451437
    },
    {
        root: "03870",
        name: "Hemenway Gymnasium",
        address: "1515 Massachusetts Ave",
        lat: 42.376839339,
        lng: -71.119423936
    },
    {
        root: "03272",
        name: "Hicks House, Kirkland House",
        address: "64 J. F. Kennedy St",
        lat: 42.371457957,
        lng: -71.120677079
    },
    {
        root: "04930",
        name: "Hilles Library",
        address: "59 Shepard St",
        lat: 42.381195673,
        lng: -71.125103216
    },
    {
        root: "05535",
        name: "Hms Building C",
        address: "240 Longwood Ave",
        lat: 42.336473627,
        lng: -71.104228549
    },
    {
        root: "05595",
        name: "Hms Data Center At One Summer Street",
        address: "1 Summer St",
        lat: 42.354488801,
        lng: -71.059532328
    },
    {
        root: "04145",
        name: "Hoffman Laboratory",
        address: "20 Oxford St",
        lat: 42.378051654,
        lng: -71.115653104
    },
    {
        root: "04380",
        name: "Holden Chapel",
        address: "15 Harvard Yard",
        lat: 42.375245481,
        lng: -71.118029735
    },
    {
        root: "06092",
        name: "Holden Greeen Bldg H",
        address: "Holden St",
        lat: 42.378452197,
        lng: -71.107563073
    },
    {
        root: "06085",
        name: "Holden Green Bldg A",
        address: "22 Holden St",
        lat: 42.378753916,
        lng: -71.108252405
    },
    {
        root: "06086",
        name: "Holden Green Bldg B",
        address: "10 Holden St",
        lat: 42.378347125,
        lng: -71.108096223
    },
    {
        root: "06087",
        name: "Holden Green Bldg C",
        address: "Holden St",
        lat: 42.378791692,
        lng: -71.108088249
    },
    {
        root: "06088",
        name: "Holden Green Bldg D",
        address: "101 Holden St",
        lat: 42.378385029,
        lng: -71.107929403
    },
    {
        root: "06089",
        name: "Holden Green Bldg E",
        address: "Holden St",
        lat: 42.378890595,
        lng: -71.107907762
    },
    {
        root: "06090",
        name: "Holden Green Bldg F",
        address: "104 Holden St",
        lat: 42.378414875,
        lng: -71.10772319
    },
    {
        root: "06091",
        name: "Holden Green Bldg G",
        address: "Holden St",
        lat: 42.378924624,
        lng: -71.107747416
    },
    {
        root: "06093",
        name: "Holden Green Bldg I",
        address: "Holden St",
        lat: 42.379115611,
        lng: -71.107640133
    },
    {
        root: "06094",
        name: "Holden Green Bldg J",
        address: "Holden St",
        lat: 42.378554216,
        lng: -71.107062792
    },
    {
        root: "03354",
        name: "Hollis Hall",
        address: "13 Harvard Yard",
        lat: 42.375153662,
        lng: -71.117720358
    },
    {
        root: "02580",
        name: "Holmes Hall",
        address: "18 Everett St",
        lat: 42.379470044,
        lng: -71.118174406
    },
    {
        root: "03303",
        name: "Holmes Hall, Pforzheimer House",
        address: "56 Linnaean St",
        lat: 42.382234314,
        lng: -71.125090558
    },
    {
        root: "03355",
        name: "Holworthy Hall",
        address: "19 Harvard Yard",
        lat: 42.375521784,
        lng: -71.116950494
    },
    {
        root: "01130",
        name: "Holyoke Center Health Services",
        address: "75 Mt Auburn St",
        lat: 42.372211713,
        lng: -71.118534802
    },
    {
        root: "06043",
        name: "Holyoke Center Office Tower",
        address: "75 Mount Auburn Street",
        lat: 42.372955065,
        lng: -71.118410851
    },
    {
        root: "06060",
        name: "Holyoke Center, Bank",
        address: "1350 Massachusetts Ave",
        lat: 42.372880782,
        lng: -71.118170927
    },
    {
        root: "06061",
        name: "Holyoke Center, Garage",
        address: "7 Holyoke St",
        lat: 42.37282175,
        lng: -71.118469695
    },
    {
        root: "06062",
        name: "Holyoke Center, Shops",
        address: "1350 Massachusetts Ave",
        lat: 42.372823505,
        lng: -71.118727858
    },
    {
        root: "04931",
        name: "Houghton Library",
        address: "29 Harvard Yard",
        lat: 42.373100295,
        lng: -71.115856204
    },
    {
        root: "03356",
        name: "House Masters Garages",
        address: "14-18 Mill St",
        lat: 42.370198343,
        lng: -71.118120693
    },
    {
        root: "00010",
        name: "Hunnewell Building",
        address: "125 Arborway",
        lat: 42.307451186,
        lng: -71.120817864
    },
    {
        root: "03360",
        name: "Hurlbut Hall",
        address: "2 Prescott St",
        lat: 42.372238303,
        lng: -71.114068744
    },
    {
        root: "06068",
        name: "Inn At Harvard",
        address: "1201 Massachusetts Ave",
        lat: 42.372098376,
        lng: -71.114839344
    },
    {
        root: "04221",
        name: "Jefferson Laboratory",
        address: "17 Oxford St",
        lat: 42.377289137,
        lng: -71.117154845
    },
    {
        root: "02318",
        name: "Jewett House",
        address: "44 Francis Ave",
        lat: 42.380548772,
        lng: -71.112287593
    },
    {
        root: "01392",
        name: "Johnston Gate House",
        address: "N/A Harvard Yard",
        lat: 42.37471339,
        lng: -71.118405804
    },
    {
        root: "03247",
        name: "Jordan North, Currier House",
        address: "95 Walker St",
        lat: 42.381515137,
        lng: -71.122890073
    },
    {
        root: "03304",
        name: "Jordan South, Pforzheimer House",
        address: "91 Walker St",
        lat: 42.381225305,
        lng: -71.122649576
    },
    {
        root: "00470",
        name: "Kittredge Hall - Hu Press",
        address: "79-81 Garden St",
        lat: 42.383169766,
        lng: -71.127189928
    },
    {
        root: "04471",
        name: "Knafel Building",
        address: "1737 Cambridge St",
        lat: 42.375508532,
        lng: -71.112941273
    },
    {
        root: "02790",
        name: "Kresge Building (sph3)",
        address: "677 Huntington Ave",
        lat: 42.335427577,
        lng: -71.102560272
    },
    {
        root: "05021",
        name: "Kresge Hall",
        address: "49 Harvard Way",
        lat: 42.366956975,
        lng: -71.120139366
    },
    {
        root: "04481",
        name: "Lab For Integrated Science And Engineering",
        address: "15 Oxford St",
        lat: 42.37680284,
        lng: -71.116357529
    },
    {
        root: "04932",
        name: "Lamont Library",
        address: "11 Quincy St",
        lat: 42.372960314,
        lng: -71.115750833
    },
    {
        root: "02805",
        name: "Landmark Center",
        address: "401 Park Dr",
        lat: 42.34579398,
        lng: -71.103112447
    },
    {
        root: "02514",
        name: "Langdell Hall",
        address: "1525 Massachusetts Ave",
        lat: 42.37771687,
        lng: -71.118996303
    },
    {
        root: "02404",
        name: "Larsen Hall",
        address: "14 Appian Way",
        lat: 42.375544216,
        lng: -71.121264423
    },
    {
        root: "03845",
        name: "Lavietes Pavilion",
        address: "45 North Harvard St",
        lat: 42.368261596,
        lng: -71.124865216
    },
    {
        root: "02524",
        name: "Legal Services Center",
        address: "122 Boylston St",
        lat: 42.317599027,
        lng: -71.103443525
    },
    {
        root: "03361",
        name: "Lehman Hall",
        address: "8 Harvard Yard",
        lat: 42.37379405,
        lng: -71.118528337
    },
    {
        root: "03281",
        name: "Leverett Library Building",
        address: "28 Dewolfe St",
        lat: 42.369470595,
        lng: -71.116685019
    },
    {
        root: "03282",
        name: "Leverett Master's House",
        address: "25 Dewolfe St",
        lat: 42.369934859,
        lng: -71.117155324
    },
    {
        root: "03283",
        name: "Leverett Tower F",
        address: "40 Dewolfe St",
        lat: 42.369595784,
        lng: -71.116181725
    },
    {
        root: "03285",
        name: "Leverett Tower G",
        address: "40 Dewolfe St",
        lat: 42.369397235,
        lng: -71.115916738
    },
    {
        root: "02516",
        name: "Lewis International Law Center",
        address: "1557 Massachusetts Ave",
        lat: 42.378103166,
        lng: -71.118989969
    },
    {
        root: "05543",
        name: "Lhrrb",
        address: "45 Shattuck St",
        lat: 42.336206456,
        lng: -71.104800156
    },
    {
        root: "04450",
        name: "Linden Street Studios",
        address: "8 Linden St",
        lat: 42.372418175,
        lng: -71.117051475
    },
    {
        root: "03362",
        name: "Lionel Hall",
        address: "14 Harvard Yard",
        lat: 42.375236754,
        lng: -71.118264672
    },
    {
        root: "00700",
        name: "Lippmann House",
        address: "1 Francis Ave",
        lat: 42.377591491,
        lng: -71.112128694
    },
    {
        root: "04385",
        name: "Littauer Center",
        address: "1805 Cambridge St",
        lat: 42.376562884,
        lng: -71.11868933
    },
    {
        root: "02111",
        name: "Littauer Center",
        address: "79 J. F. Kennedy St",
        lat: 42.3712535,
        lng: -71.121609399
    },
    {
        root: "05578",
        name: "Lmrc",
        address: "401 Park Dr",
        lat: 42.337552319,
        lng: -71.102590598
    },
    {
        root: "04390",
        name: "Loeb Drama Center",
        address: "64 Brattle St",
        lat: 42.37515407,
        lng: -71.122856497
    },
    {
        root: "06026",
        name: "Loeb House, 17 Quincy Street",
        address: "17 Quincy St",
        lat: 42.373665615,
        lng: -71.115353124
    },
    {
        root: "05095",
        name: "Loeb House, HBS",
        address: "10 Harvard Way",
        lat: 42.367325965,
        lng: -71.12392046
    },
    {
        root: "02403",
        name: "Longfellow Hall",
        address: "13 Appian Way",
        lat: 42.375476452,
        lng: -71.121705254
    },
    {
        root: "03291",
        name: "Lowell House",
        address: "10 Holyoke Pl",
        lat: 42.370721476,
        lng: -71.118982
    },
    {
        root: "04395",
        name: "Lowell Lecture Hall",
        address: "17 Kirkland St",
        lat: 42.376806052,
        lng: -71.11532327
    },
    {
        root: "03292",
        name: "Lowell Master's House",
        address: "50 Holyoke St",
        lat: 42.370923408,
        lng: -71.119055165
    },
    {
        root: "05090",
        name: "Ludcke House",
        address: "690 Soldiers Field Rd",
        lat: 42.367516187,
        lng: -71.122773231
    },
    {
        root: "04222",
        name: "Lyman Laboratory",
        address: "11 Oxford St",
        lat: 42.377759242,
        lng: -71.117109494
    },
    {
        root: "00015",
        name: "Maintenance Building",
        address: "125 Arborway",
        lat: 42.307778421,
        lng: -71.120530787
    },
    {
        root: "03875",
        name: "Malkin Athletic Center",
        address: "39 Holyoke St",
        lat: 42.371455425,
        lng: -71.119037343
    },
    {
        root: "04133",
        name: "Mallinckrodt Chemistry Lab",
        address: "12 Oxford St",
        lat: 42.37767598,
        lng: -71.115596272
    },
    {
        root: "04134",
        name: "Mallinckrodt-Hoffman Link",
        address: "18 Oxford St",
        lat: 42.37767598,
        lng: -71.115596272
    },
    {
        root: "06077",
        name: "Manter Hall",
        address: "2 Holyoke St",
        lat: 42.372829112,
        lng: -71.11789679
    },
    {
        root: "03363",
        name: "Massachusetts Hall",
        address: "11 Harvard Yard",
        lat: 42.374469014,
        lng: -71.118087409
    },
    {
        root: "03311",
        name: "Mather Hall, Quincy House",
        address: "58 Plympton St",
        lat: 42.370752653,
        lng: -71.116967193
    },
    {
        root: "03364",
        name: "Mather House",
        address: "45 Flagg St",
        lat: 42.368630842,
        lng: -71.115022046
    },
    {
        root: "03365",
        name: "Matthews Hall",
        address: "9 Harvard Yard",
        lat: 42.374279405,
        lng: -71.117989622
    },
    {
        root: "03762",
        name: "Maxwell-Dworkin",
        address: "33 Oxford St",
        lat: 42.378686198,
        lng: -71.117287048
    },
    {
        root: "05067",
        name: "McArthur Hall",
        address: "47a Harvard Way",
        lat: 42.367523868,
        lng: -71.119897469
    },
    {
        root: "05041",
        name: "McCollum Center",
        address: "47 Harvard Way",
        lat: 42.367366706,
        lng: -71.119938396
    },
    {
        root: "05062",
        name: "McCulloch Hall",
        address: "44 Harvard Way",
        lat: 42.367145761,
        lng: -71.120902478
    },
    {
        root: "03763",
        name: "McKay Laboratory, Gordon",
        address: "9 Oxford St",
        lat: 42.376928207,
        lng: -71.116141184
    },
    {
        root: "03284",
        name: "McKinlock Hall, Leverett House",
        address: "8 Mill St",
        lat: 42.370040514,
        lng: -71.11711463
    },
    {
        root: "05065",
        name: "Mellon Hall",
        address: "670 Soldiers Field Rd",
        lat: 42.367514598,
        lng: -71.121946491
    },
    {
        root: "00600",
        name: "Memorial Church Appleton Chapel",
        address: "23 Harvard Yard",
        lat: 42.375058728,
        lng: -71.116289884
    },
    {
        root: "04400",
        name: "Memorial Hall",
        address: "1785 Cambridge St",
        lat: 42.376291902,
        lng: -71.115198573
    },
    {
        root: "03305",
        name: "Moors Hall, Pforzheimer House",
        address: "56 Linnaean St",
        lat: 42.382347531,
        lng: -71.124589302
    },
    {
        root: "05091",
        name: "Morgan Hall",
        address: "15 Harvard Way",
        lat: 42.366787488,
        lng: -71.123473657
    },
    {
        root: "05063",
        name: "Morris Hall",
        address: "14 Harvard Way",
        lat: 42.367665856,
        lng: -71.12389842
    },
    {
        root: "03366",
        name: "Morton Prince House",
        address: "6 Prescott St",
        lat: 42.37247109,
        lng: -71.11393237
    },
    {
        root: "03367",
        name: "Mower Hall",
        address: "16 Harvard Yard",
        lat: 42.375612907,
        lng: -71.118142455
    },
    {
        root: "03885",
        name: "Murr Building",
        address: "65 North Harvard St",
        lat: 42.367819902,
        lng: -71.125669188
    },
    {
        root: "04765",
        name: "Museum Of Comparative Zoology",
        address: "24 Oxford St",
        lat: 42.379001392,
        lng: -71.114853411
    },
    {
        root: "04760",
        name: "Museum Of Comparative Zoology Addition",
        address: "24 Oxford St",
        lat: 42.379048391,
        lng: -71.115196904
    },
    {
        root: "04405",
        name: "Music Building",
        address: "3 Kirkland St",
        lat: 42.377166412,
        lng: -71.116970612
    },
    {
        root: "04135",
        name: "Naito",
        address: "12 Oxford St",
        lat: 42.377584353,
        lng: -71.115001665
    },
    {
        root: "03375",
        name: "New College Theatre",
        address: "12 Holyoke St",
        lat: 42.372648946,
        lng: -71.118084323
    },
    {
        root: "05765",
        name: "New Dental Research Building",
        address: "190 Longwood Ave",
        lat: 42.335982396,
        lng: -71.102307665
    },
    {
        root: "05585",
        name: "New Research Building",
        address: "77 Avenue Louis Pasteur",
        lat: 42.339122901,
        lng: -71.103512181
    },
    {
        root: "03891",
        name: "Newell Boat House",
        address: "801 Soldiers Field Rd",
        lat: 42.369566228,
        lng: -71.125535381
    },
    {
        root: "03892",
        name: "Newell Boat House Addition",
        address: "65 Soldiers Field Rd",
        lat: 42.369855913,
        lng: -71.126018684
    },
    {
        root: "02401",
        name: "Nichols House",
        address: "7 Appian Way",
        lat: 42.374918169,
        lng: -71.121104353
    },
    {
        root: "02586",
        name: "North Hall",
        address: "1651 Massachusetts Ave",
        lat: 42.381552368,
        lng: -71.118978737
    },
    {
        root: "04560",
        name: "Northwest Building",
        address: "52 Oxford St",
        lat: 42.380524892,
        lng: -71.115181803
    },
    {
        root: "06204",
        name: "Oberon",
        address: "2 Arrow St",
        lat: 42.371012625,
        lng: -71.114507234
    },
    {
        root: "04191",
        name: "Observatory Bldg A",
        address: "60 Garden St",
        lat: 42.381417351,
        lng: -71.128419028
    },
    {
        root: "04192",
        name: "Observatory Bldg B",
        address: "60 Garden St",
        lat: 42.381540914,
        lng: -71.127762494
    },
    {
        root: "04193",
        name: "Observatory Bldg C",
        address: "60 Garden St",
        lat: 42.381672375,
        lng: -71.128036959
    },
    {
        root: "04194",
        name: "Observatory Bldg D",
        address: "60 Garden St",
        lat: 42.381781533,
        lng: -71.128458158
    },
    {
        root: "04195",
        name: "Observatory Bldg E",
        address: "60 Garden St",
        lat: 42.381806222,
        lng: -71.128796917
    },
    {
        root: "04196",
        name: "Observatory Garage",
        address: "60 Garden St",
        lat: 42.382112192,
        lng: -71.128600678
    },
    {
        root: "04198",
        name: "Observatory Rotunda",
        address: "60 Garden St",
        lat: 42.38151088,
        lng: -71.128196191
    },
    {
        root: "04410",
        name: "Oeb Greenhouse",
        address: "16 Oxford St",
        lat: 42.379975765,
        lng: -71.113892736
    },
    {
        root: "05589",
        name: "One Kendall Square",
        address: "One Kendall Sq",
        lat: 42.367365941,
        lng: -71.089998236
    },
    {
        root: "06220",
        name: "One Western Avenue",
        address: "1 Western Ave",
        lat: 42.364894349,
        lng: -71.118824981
    },
    {
        root: "01396",
        name: "One Western Avenue Garage",
        address: "1 Western Ave",
        lat: 42.364232734,
        lng: -71.118517238
    },
    {
        root: "01395",
        name: "Oxford Street Garage",
        address: "52 Oxford St",
        lat: 42.380581294,
        lng: -71.114513625
    },
    {
        root: "01330",
        name: "Oxford Street Substation",
        address: "36 Oxford St",
        lat: 42.379714559,
        lng: -71.115942455
    },
    {
        root: "06025",
        name: "Palfrey House",
        address: "46 Oxford St",
        lat: 42.380710943,
        lng: -71.11563835
    },
    {
        root: "03900",
        name: "Palmer Dixon Courts",
        address: "780 Soldiers Field Rd",
        lat: 42.36929129,
        lng: -71.12679072
    },
    {
        root: "04780",
        name: "Peabody Museum",
        address: "11 Divinity Ave",
        lat: 42.378023398,
        lng: -71.115281261
    },
    {
        root: "06108",
        name: "Peabody Terrace Bldg A",
        address: "900 Memorial Dr",
        lat: 42.367147449,
        lng: -71.113728778
    },
    {
        root: "06109",
        name: "Peabody Terrace Bldg B",
        address: "900 Memorial Dr",
        lat: 42.367014966,
        lng: -71.114497913
    },
    {
        root: "06110",
        name: "Peabody Terrace Bldg C",
        address: "900 Memorial Dr",
        lat: 42.367128505,
        lng: -71.114497221
    },
    {
        root: "06111",
        name: "Peabody Terrace Bldg D",
        address: "900 Memorial Dr",
        lat: 42.366894706,
        lng: -71.115441953
    },
    {
        root: "06112",
        name: "Peabody Terrace Bldg E",
        address: "900 Memorial Dr",
        lat: 42.366280631,
        lng: -71.115159004
    },
    {
        root: "06278",
        name: "Peabody Terrace Bldg F",
        address: "900 Memorial Dr",
        lat: 42.365990922,
        lng: -71.11535188
    },
    {
        root: "06279",
        name: "Peabody Terrace Bldg X",
        address: "900 Memorial Dr",
        lat: 42.366911921,
        lng: -71.114499663
    },
    {
        root: "06280",
        name: "Peabody Terrace Bldg Y",
        address: "900 Memorial Dr",
        lat: 42.366245683,
        lng: -71.115159598
    },
    {
        root: "06281",
        name: "Peabody Terrace Bldg Z",
        address: "900 Memorial Dr",
        lat: 42.366902322,
        lng: -71.115390451
    },
    {
        root: "06107",
        name: "Peabody Terrace Garage",
        address: "125 Putnam Ave",
        lat: 42.366539594,
        lng: -71.113716208
    },
    {
        root: "03368",
        name: "Pennypacker Hall",
        address: "387 Harvard St",
        lat: 42.372217729,
        lng: -71.113662285
    },
    {
        root: "04197",
        name: "Perkin Laboratory",
        address: "60 Garden St",
        lat: 42.381178391,
        lng: -71.128093174
    },
    {
        root: "04862",
        name: "Perkins Hall",
        address: "35-39 Oxford St",
        lat: 42.379501285,
        lng: -71.116740988
    },
    {
        root: "03306",
        name: "Pforzheimer Master's Residence",
        address: "52 Linnaean St",
        lat: 42.382852828,
        lng: -71.124625398
    },
    {
        root: "03369",
        name: "Phillips Brooks House",
        address: "18 Harvard Yard",
        lat: 42.37572965,
        lng: -71.118048769
    },
    {
        root: "03764",
        name: "Pierce Hall",
        address: "25 Oxford St",
        lat: 42.378686198,
        lng: -71.117287048
    },
    {
        root: "02520",
        name: "Pound Hall",
        address: "1563 Massachusetts Ave",
        lat: 42.378832893,
        lng: -71.118972397
    },
    {
        root: "06009",
        name: "Presidents House",
        address: "33 Elmwood Ave",
        lat: 42.375517029,
        lng: -71.138429381
    },
    {
        root: "04933",
        name: "Pusey Library",
        address: "N/A Harvard Yard",
        lat: 42.373261083,
        lng: -71.115344274
    },
    {
        root: "03111",
        name: "Putnam House",
        address: "69 Brattle St",
        lat: 42.375205407,
        lng: -71.122466867
    },
    {
        root: "03370",
        name: "Quadrangle Athletic Facility",
        address: "5 Bond St",
        lat: 42.381839503,
        lng: -71.1269261
    },
    {
        root: "03313",
        name: "Quincy House Library",
        address: "58 Plympton St",
        lat: 42.370398862,
        lng: -71.116910993
    },
    {
        root: "03315",
        name: "Quincy House New Residence Hall",
        address: "58 Plympton St",
        lat: 42.370368749,
        lng: -71.116928964
    },
    {
        root: "03105",
        name: "Radcliffe Gymnasium",
        address: "18 Mason St",
        lat: 42.376178691,
        lng: -71.12294495
    },
    {
        root: "03213",
        name: "Randolph Hall, Adams House",
        address: "53 Bow St",
        lat: 42.372134537,
        lng: -71.116730967
    },
    {
        root: "02400",
        name: "Read House",
        address: "8 Appian Way",
        lat: 42.375036681,
        lng: -71.121146104
    },
    {
        root: "05590",
        name: "Renaissance Park",
        address: "1135 Tremont St",
        lat: 42.335452433,
        lng: -71.087869624
    },
    {
        root: "04863",
        name: "Richards Hall",
        address: "24 Everett St",
        lat: 42.379456502,
        lng: -71.11724221
    },
    {
        root: "04415",
        name: "Robinson Hall",
        address: "35 Quincy St",
        lat: 42.374778785,
        lng: -71.114659398
    },
    {
        root: "05098",
        name: "Rock, Arthur Center For Entertainment",
        address: "60 North Harvard St",
        lat: 42.366046966,
        lng: -71.123111842
    },
    {
        root: "02316",
        name: "Rockefeller Hall",
        address: "47 Francis Ave",
        lat: 42.380766467,
        lng: -71.113026415
    },
    {
        root: "04555",
        name: "Rowland Institute",
        address: "100 Cambridge Pkwy",
        lat: 42.364127633,
        lng: -71.077625084
    },
    {
        root: "03214",
        name: "Russell Hall, Adams House",
        address: "26 Plympton St",
        lat: 42.371768002,
        lng: -71.116545852
    },
    {
        root: "00100",
        name: "Sackler Museum",
        address: "485 Broadway",
        lat: 42.375230972,
        lng: -71.113764082
    },
    {
        root: "03032",
        name: "Schlesinger Library",
        address: "3 James St",
        lat: 42.375873382,
        lng: -71.123192539
    },
    {
        root: "05762",
        name: "School Of Dental Medicine",
        address: "188 Longwood Ave",
        lat: 42.336146604,
        lng: -71.101851279
    },
    {
        root: "04420",
        name: "Science Center",
        address: "1 Oxford St",
        lat: 42.376427763,
        lng: -71.117494593
    },
    {
        root: "05544",
        name: "Seely Mudd",
        address: "250 Longwood Ave",
        lat: 42.336526681,
        lng: -71.104576132
    },
    {
        root: "04790",
        name: "Semitic Museum",
        address: "6 Divinity Ave",
        lat: 42.378200153,
        lng: -71.113915309
    },
    {
        root: "04425",
        name: "Sever Hall",
        address: "25 Harvard Yard",
        lat: 42.374427664,
        lng: -71.11532405
    },
    {
        root: "05003",
        name: "Shad Hall",
        address: "70 North Harvard St",
        lat: 42.366707616,
        lng: -71.124718794
    },
    {
        root: "04430",
        name: "Shannon Hall",
        address: "25 Francis Ave",
        lat: 42.379185128,
        lng: -71.113031555
    },
    {
        root: "02700",
        name: "Shattuck International Hs",
        address: "199-207 Park Dr",
        lat: 42.341676637,
        lng: -71.100409117
    },
    {
        root: "02573",
        name: "Shaw Hall",
        address: "16 Everett St",
        lat: 42.379730848,
        lng: -71.118124013
    },
    {
        root: "04435",
        name: "Sherman Fairchild Biochemistry",
        address: "7 Divinity Ave",
        lat: 42.377054669,
        lng: -71.114897957
    },
    {
        root: "02875",
        name: "Simmons",
        address: "300 The Fenway",
        lat: 42.339999166,
        lng: -71.100756572
    },
    {
        root: "03274",
        name: "Smith Hall, Kirkland House",
        address: "95 Dunster St",
        lat: 42.371328262,
        lng: -71.120859243
    },
    {
        root: "05596",
        name: "Social Medicine At Prudential Center",
        address: "800 Boylston Street",
        lat: 42.348413988,
        lng: -71.082242002
    },
    {
        root: "06118",
        name: "Soldiers Field Park 1",
        address: "111 Western Ave",
        lat: 42.366104279,
        lng: -71.11992291
    },
    {
        root: "06115",
        name: "Soldiers Field Park 2",
        address: "111 Western Ave",
        lat: 42.365743502,
        lng: -71.120137659
    },
    {
        root: "06116",
        name: "Soldiers Field Park 3",
        address: "111 Western Ave",
        lat: 42.365777081,
        lng: -71.118949303
    },
    {
        root: "06117",
        name: "Soldiers Field Park 4",
        address: "111 Western Ave",
        lat: 42.366008547,
        lng: -71.118671284
    },
    {
        root: "06114",
        name: "Soldiers Field Park Garage",
        address: "111 Western Ave",
        lat: 42.364200928,
        lng: -71.119672486
    },
    {
        root: "05024",
        name: "Spangler Center",
        address: "117 Western Ave",
        lat: 42.365342653,
        lng: -71.122570577
    },
    {
        root: "00610",
        name: "Sparks House",
        address: "21 Kirkland St",
        lat: 42.376749125,
        lng: -71.114916879
    },
    {
        root: "00615",
        name: "Sparks House Garage",
        address: "21 Kirkland St",
        lat: 42.376931634,
        lng: -71.114720393
    },
    {
        root: "05593",
        name: "Sparr's Building",
        address: "158 Longwood Ave",
        lat: 42.335821979,
        lng: -71.100715948
    },
    {
        root: "02740",
        name: "Sph1",
        address: "665 Huntington Ave",
        lat: 42.335479038,
        lng: -71.102266697
    },
    {
        root: "02750",
        name: "Sph2",
        address: "665 Huntington Ave",
        lat: 42.335838588,
        lng: -71.101625981
    },
    {
        root: "03910",
        name: "Stadium",
        address: "79 North Harvard St",
        lat: 42.367587435,
        lng: -71.126921031
    },
    {
        root: "03333",
        name: "Standish Hall, Winthrop House",
        address: "32 Mill St",
        lat: 42.37013781,
        lng: -71.120034525
    },
    {
        root: "02572",
        name: "Story Hall",
        address: "12 Everett St",
        lat: 42.379785552,
        lng: -71.118682751
    },
    {
        root: "03371",
        name: "Stoughton Hall",
        address: "17 Harvard Yard",
        lat: 42.375522302,
        lng: -71.117604077
    },
    {
        root: "03372",
        name: "Straus Hall",
        address: "10 Harvard Yard",
        lat: 42.374385766,
        lng: -71.118597529
    },
    {
        root: "02114",
        name: "Taubman Building",
        address: "15 Eliot St",
        lat: 42.372015105,
        lng: -71.121873145
    },
    {
        root: "05001",
        name: "Teele Hall",
        address: "230 Western Ave",
        lat: 42.36290188,
        lng: -71.131507374
    },
    {
        root: "06105",
        name: "Terry Terrace",
        address: "15 Everett St",
        lat: 42.380363934,
        lng: -71.118791058
    },
    {
        root: "03373",
        name: "Thayer Hall",
        address: "21 Harvard Yard",
        lat: 42.375298326,
        lng: -71.116554587
    },
    {
        root: "05537",
        name: "Tosteson Medical Education Center",
        address: "260 Longwood Ave",
        lat: 42.336623487,
        lng: -71.104072147
    },
    {
        root: "04934",
        name: "Tozzer Library",
        address: "21 Divinity Ave",
        lat: 42.378355149,
        lng: -71.114689458
    },
    {
        root: "03246",
        name: "Tuchman Hall, Currier House",
        address: "64 Linnaean St",
        lat: 42.382241722,
        lng: -71.126011678
    },
    {
        root: "05552",
        name: "Underground Parking Eqrf",
        address: "200 Longwood Ave",
        lat: 42.336124944,
        lng: -71.103562369
    },
    {
        root: "04445",
        name: "University Hall",
        address: "1 Harvard Yard",
        lat: 42.374626356,
        lng: -71.116913607
    },
    {
        root: "04230",
        name: "University Herbaria",
        address: "22 Divinity Ave",
        lat: 42.379175041,
        lng: -71.114371386
    },
    {
        root: "04240",
        name: "University Museum",
        address: "24 Oxford St",
        lat: 42.378954939,
        lng: -71.115626576
    },
    {
        root: "06042",
        name: "University Place",
        address: "124 Mt Auburn St",
        lat: 42.373459063,
        lng: -71.123559427
    },
    {
        root: "05532",
        name: "Vanderbilt Hall",
        address: "107 Avenue Louis Pasteur",
        lat: 42.338030933,
        lng: -71.10397198
    },
    {
        root: "04455",
        name: "Vanserg Building",
        address: "29 Francis Ave",
        lat: 42.379203779,
        lng: -71.113038447
    },
    {
        root: "06037",
        name: "Wadsworth House",
        address: "1341 Massachusetts Ave",
        lat: 42.373464097,
        lng: -71.118006248
    },
    {
        root: "05551",
        name: "Warren Alpert Building",
        address: "200 Longwood Ave",
        lat: 42.336244226,
        lng: -71.102457712
    },
    {
        root: "02541",
        name: "Wasserstein Hall",
        address: "1585 Massachusetts Ave",
        lat: 42.379791804,
        lng: -71.119040138
    },
    {
        root: "03915",
        name: "Weld Boat House",
        address: "971 Memorial Dr",
        lat: 42.369335195,
        lng: -71.121822737
    },
    {
        root: "03374",
        name: "Weld Hall",
        address: "3 Harvard Yard",
        lat: 42.374095882,
        lng: -71.116961327
    },
    {
        root: "00012",
        name: "Weld Hill Research And Admin Building",
        address: "1300 Centre St",
        lat: 42.295910304,
        lng: -71.132938154
    },
    {
        root: "00106",
        name: "Werner Otto Hall Addition",
        address: "25 Prescott St",
        lat: 42.373961508,
        lng: -71.114048931
    },
    {
        root: "02405",
        name: "Westengard House 3 Garden Street",
        address: "3 Garden St",
        lat: 42.375861512,
        lng: -71.121045397
    },
    {
        root: "03215",
        name: "Westmorely Court, Adams House",
        address: "13-21 Bow St",
        lat: 42.371768002,
        lng: -71.116545852
    },
    {
        root: "03229",
        name: "Whitman Hall, Cabot House",
        address: "100 Walker St",
        lat: 42.381567108,
        lng: -71.123749927
    },
    {
        root: "01393",
        name: "Widener Gate Lodge",
        address: "6 Harvard Yard",
        lat: 42.372926445,
        lng: -71.116784386
    },
    {
        root: "04935",
        name: "Widener Library",
        address: "31 Harvard Yard",
        lat: 42.373860853,
        lng: -71.116740714
    },
    {
        root: "02810",
        name: "Wigglesworth Building",
        address: "35 Wigglesworth St",
        lat: 42.333962521,
        lng: -71.103238816
    },
    {
        root: "03321",
        name: "Wigglesworth Hall A",
        address: "6 Harvard Yard",
        lat: 42.373280562,
        lng: -71.117702311
    },
    {
        root: "03322",
        name: "Wigglesworth Hall B",
        address: "6 Harvard Yard",
        lat: 42.372965416,
        lng: -71.116765054
    },
    {
        root: "03323",
        name: "Wigglesworth Hall C",
        address: "6 Harvard Yard",
        lat: 42.372951629,
        lng: -71.116519696
    },
    {
        root: "05100",
        name: "Wilder House",
        address: "680 Soldiers Field Rd",
        lat: 42.367368066,
        lng: -71.121980411
    },
    {
        root: "04460",
        name: "William James Hall",
        address: "33 Kirkland St",
        lat: 42.377315823,
        lng: -71.113400827
    },
    {
        root: "03334",
        name: "Winthrop Master's House",
        address: "966 Memorial Dr",
        lat: 42.370123011,
        lng: -71.120174924
    },
    {
        root: "03307",
        name: "Wolbach Hall, Pforzheimer House",
        address: "124 Walker St",
        lat: 42.38221616,
        lng: -71.124448454
    },
    {
        root: "05099",
        name: "Wyss Hall",
        address: "710 Soldiers Field Rd",
        lat: 42.36786993,
        lng: -71.123704561
    },
    {
        root: "05599",
        name: "Wyss Institute At Clsb",
        address: "3 Blackfan Cir",
        lat: 42.339406779,
        lng: -71.104157549
    }
];
