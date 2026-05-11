import type { OsmRenderPolygon } from './map-osm-source'

export const ebisuStationGardenPlaceOsmBounds = {
  "south": 35.6408,
  "west": 139.7074,
  "north": 35.65,
  "east": 139.7168
} as const

export const ebisuStationGardenPlaceOsmCenter = {
  "lat": 35.6454,
  "lng": 139.7121
} as const

export const ebisuStationGardenPlaceViewBox = '0 0 2078 2502'

export const ebisuStationGardenPlaceBuildings: OsmRenderPolygon[] = [
  {
    "osmId": 60264919,
    "name": "\u6e0b\u8c37\u516c\u4f1a\u5802\u9053\u5e02\u8857\u5730\u4f4f\u5b85",
    "kind": "yes",
    "points": "-93,-6 -82,21 -29,2 -9,56 22,43 -8,-35 -93,-6",
    "labelX": -33,
    "labelY": 14,
    "tags": {
      "amenity": "public_building",
      "building": "yes",
      "name": "\u6e0b\u8c37\u516c\u4f1a\u5802\u9053\u5e02\u8857\u5730\u4f4f\u5b85"
    }
  },
  {
    "osmId": 60264942,
    "name": "\u5927\u6771\u4eac\u4fe1\u7528\u7d44\u5408",
    "kind": "yes",
    "points": "254,417 298,467 328,442 311,401 296,382 254,417",
    "labelX": 297,
    "labelY": 422,
    "tags": {
      "building": "yes",
      "name": "\u5927\u6771\u4eac\u4fe1\u7528\u7d44\u5408"
    }
  },
  {
    "osmId": 60442261,
    "name": "Hotel Excellent",
    "kind": "yes",
    "points": "209,772 241,801 203,843 171,814 209,772",
    "labelX": 206,
    "labelY": 808,
    "tags": {
      "building": "yes",
      "name": "\u30db\u30c6\u30eb\u30a8\u30af\u30bb\u30ec\u30f3\u30c8",
      "name:en": "Hotel Excellent",
      "tourism": "hotel"
    }
  },
  {
    "osmId": 60442265,
    "kind": "yes",
    "points": "261,726 287,748 272,766 246,744 261,726",
    "labelX": 267,
    "labelY": 746,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 60807375,
    "name": "\u30a8\u30fc\u30b9\u30d3\u30eb\u30c7\u30a3\u30f3\u30b0",
    "kind": "yes",
    "points": "39,250 25,275 55,290 62,276 56,257 39,250",
    "labelX": 47,
    "labelY": 270,
    "tags": {
      "building": "yes",
      "name": "\u30a8\u30fc\u30b9\u30d3\u30eb\u30c7\u30a3\u30f3\u30b0"
    }
  },
  {
    "osmId": 92649941,
    "name": "\u6771\u90a6\u30d3\u30eb",
    "kind": "office",
    "points": "1172,732 1200,728 1229,731 1239,784 1179,792 1172,732",
    "labelX": 1204,
    "labelY": 753,
    "tags": {
      "building": "office",
      "name": "\u6771\u90a6\u30d3\u30eb"
    }
  },
  {
    "osmId": 92649948,
    "name": "\u6075\u6bd4\u5bff\u30d3\u30b8\u30cd\u30b9\u30bf\u30ef\u30fc",
    "kind": "office",
    "points": "1127,604 1224,624 1208,719 1159,711 1129,706 1112,703 1127,604",
    "labelX": 1160,
    "labelY": 678,
    "tags": {
      "building": "office",
      "name": "\u6075\u6bd4\u5bff\u30d3\u30b8\u30cd\u30b9\u30bf\u30ef\u30fc"
    }
  },
  {
    "osmId": 92649954,
    "name": "Unosawa Tokyu Building",
    "kind": "office",
    "points": "1336,630 1350,727 1351,736 1356,770 1254,785 1234,648 1254,645 1251,630 1271,627 1273,639 1336,630",
    "labelX": 1293,
    "labelY": 684,
    "tags": {
      "building": "office",
      "name": "\u30a6\u30ce\u30b5\u30ef\u6771\u6025\u30d3\u30eb",
      "name:en": "Unosawa Tokyu Building"
    }
  },
  {
    "osmId": 92649956,
    "name": "\u30a8\u30d3\u30b9\u30b9\u30d0\u30eb\u30d3\u30eb",
    "kind": "yes",
    "points": "1258,919 1267,918 1269,932 1277,931 1278,937 1363,925 1359,898 1365,897 1358,844 1372,842 1368,812 1225,831 1228,857 1249,854 1258,919",
    "labelX": 1303,
    "labelY": 886,
    "tags": {
      "building": "yes",
      "name": "\u30a8\u30d3\u30b9\u30b9\u30d0\u30eb\u30d3\u30eb"
    }
  },
  {
    "osmId": 93182025,
    "name": "Ebisu Garden Place",
    "kind": "commercial",
    "points": "1396,2340 1393,2337 1386,2345 1338,2297 1363,2272 1241,2150 1249,2142 1223,2116 1253,2086 1242,2075 1278,2039 1321,1996 1346,2022 1372,2048 1423,2099 1479,2154 1458,2175 1466,2182 1469,2178 1504,2213 1495,2222 1504,2231 1396,2340",
    "labelX": 1373,
    "labelY": 2169,
    "tags": {
      "building": "commercial",
      "name": "\u6075\u6bd4\u5bff\u30ac\u30fc\u30c7\u30f3\u30d7\u30ec\u30a4\u30b9",
      "name:en": "Ebisu Garden Place"
    }
  },
  {
    "osmId": 93182026,
    "name": "\u30d5\u30e9\u30c3\u30c4\u666f\u4e18",
    "kind": "yes",
    "points": "1108,1723 1181,1715 1193,1610 1166,1605 1165,1599 1158,1598 1158,1604 1131,1601 1125,1646 1131,1649 1128,1667 1121,1670 1110,1672 1108,1723",
    "labelX": 1144,
    "labelY": 1643,
    "tags": {
      "building": "yes",
      "name": "\u30d5\u30e9\u30c3\u30c4\u666f\u4e18"
    }
  },
  {
    "osmId": 93182029,
    "kind": "yes",
    "points": "1256,1701 1299,1698 1294,1637 1252,1640 1256,1701",
    "labelX": 1275,
    "labelY": 1669,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 93182030,
    "kind": "roof",
    "points": "1302,1956 1357,2011 1346,2022 1321,1996 1291,1967 1302,1956",
    "labelX": 1323,
    "labelY": 1990,
    "tags": {
      "building": "roof"
    }
  },
  {
    "osmId": 93182031,
    "kind": "yes",
    "points": "1675,1494 1662,1483 1618,1486 1619,1492 1608,1493 1609,1499 1542,1506 1520,1534 1520,1545 1507,1549 1516,1634 1556,1629 1548,1541 1549,1530 1677,1521 1675,1494",
    "labelX": 1582,
    "labelY": 1529,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 93182033,
    "kind": "yes",
    "points": "1322,2379 1362,2362 1332,2293 1340,2290 1318,2238 1308,2243 1297,2218 1290,2221 1282,2205 1276,2208 1267,2189 1243,2200 1322,2379",
    "labelX": 1303,
    "labelY": 2254,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 93182034,
    "kind": "yes",
    "points": "877,1417 910,1403 911,1389 904,1375 893,1363 873,1373 857,1378 877,1417",
    "labelX": 889,
    "labelY": 1385,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 93182035,
    "kind": "yes",
    "points": "1268,2011 1287,1991 1224,1927 1204,1947 1198,1946 1190,1953 1190,1962 1197,1968 1203,1969 1197,1974 1171,1948 1142,1977 1157,1992 1151,1998 1162,2010 1177,2024 1173,2028 1169,2032 1177,2039 1174,2042 1199,2067 1211,2079 1217,2073 1219,2070 1223,2067 1228,2061 1264,2026 1268,2021 1268,2011",
    "labelX": 1201,
    "labelY": 2007,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 93182038,
    "kind": "yes",
    "points": "1628,1954 1672,1911 1654,1893 1652,1891 1664,1878 1571,1784 1564,1791 1558,1797 1542,1780 1502,1819 1518,1836 1493,1860 1474,1841 1463,1852 1485,1875 1496,1864 1520,1889 1510,1899 1550,1939 1561,1929 1590,1959 1612,1937 1628,1954",
    "labelX": 1558,
    "labelY": 1872,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 93182041,
    "kind": "yes",
    "points": "1134,1944 1172,1928 1154,1889 1117,1905 1134,1944",
    "labelX": 1144,
    "labelY": 1917,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 93182044,
    "kind": "yes",
    "points": "1246,1590 1235,1713 1199,1706 1208,1604 1220,1605 1223,1586 1246,1590",
    "labelX": 1222,
    "labelY": 1634,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 93182049,
    "kind": "yes",
    "points": "1685,1632 1742,1624 1740,1586 1752,1585 1744,1516 1686,1523 1688,1539 1677,1540 1685,1632",
    "labelX": 1714,
    "labelY": 1568,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123674146,
    "name": "\u6075\u6bd4\u5bff\u30d3\u30eb",
    "kind": "yes",
    "points": "701,-24 667,8 701,43 732,15 759,-18 756,-23 770,-40 755,-55 739,-44 729,-52 701,-24",
    "labelX": 731,
    "labelY": -19,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30d3\u30eb"
    }
  },
  {
    "osmId": 123674148,
    "kind": "yes",
    "points": "867,95 908,142 882,191 876,206 869,210 860,214 839,200 820,169 824,162 818,156 838,120 867,95",
    "labelX": 855,
    "labelY": 170,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123674151,
    "kind": "yes",
    "points": "846,357 885,356 888,411 845,410 846,357",
    "labelX": 866,
    "labelY": 384,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123674152,
    "kind": "yes",
    "points": "718,427 737,452 719,465 702,437 718,427",
    "labelX": 719,
    "labelY": 445,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123674161,
    "kind": "yes",
    "points": "817,355 842,348 843,371 834,374 834,379 830,380 831,386 826,385 817,355",
    "labelX": 832,
    "labelY": 372,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684703,
    "name": "\u8ffd\u5206\u30d3\u30eb",
    "kind": "yes",
    "points": "661,466 672,458 689,484 682,488 684,492 679,493 661,466",
    "labelX": 678,
    "labelY": 480,
    "tags": {
      "building": "yes",
      "name": "\u8ffd\u5206\u30d3\u30eb"
    }
  },
  {
    "osmId": 123684704,
    "kind": "yes",
    "points": "809,694 821,707 837,725 841,714 846,700 852,682 839,678 837,681 830,675 829,674 809,694",
    "labelX": 834,
    "labelY": 693,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684705,
    "name": "\u9678\u4e2d\u30d3\u30eb\u30cf\u30a4\u30c4",
    "kind": "apartments",
    "points": "714,583 734,607 736,608 737,607 746,601 750,598 756,583 745,571 741,574 734,565 714,583",
    "labelX": 739,
    "labelY": 590,
    "tags": {
      "building": "apartments",
      "name": "\u9678\u4e2d\u30d3\u30eb\u30cf\u30a4\u30c4"
    }
  },
  {
    "osmId": 123684707,
    "name": "\u4e09\u5bcc\u30d3\u30eb\u65b0\u9928",
    "kind": "yes",
    "points": "1140,957 1128,938 1194,890 1202,901 1208,903 1217,912 1221,927 1217,947 1136,1008 1140,957",
    "labelX": 1185,
    "labelY": 931,
    "tags": {
      "building": "yes",
      "name": "\u4e09\u5bcc\u30d3\u30eb\u65b0\u9928"
    }
  },
  {
    "osmId": 123684708,
    "name": "\u6075\u6bd4\u5bff\u58f1\u756a\u9928",
    "kind": "yes",
    "points": "938,738 957,743 958,735 985,743 969,798 951,793 943,831 938,831 932,830 926,826 922,822 919,819 919,815 919,809 919,806 938,738",
    "labelX": 940,
    "labelY": 796,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u58f1\u756a\u9928"
    }
  },
  {
    "osmId": 123684709,
    "name": "\u30f4\u30a7\u30e9\u30cf\u30a4\u30c4\u6075\u6bd4\u5bff",
    "kind": "apartments",
    "points": "1255,1005 1255,1016 1252,1015 1253,1029 1256,1029 1256,1037 1277,1042 1295,1040 1299,1044 1322,1050 1343,1049 1344,1055 1363,1057 1383,1056 1382,1039 1385,1039 1384,1024 1381,1024 1382,1019 1384,1016 1381,972 1356,973 1358,1005 1311,1007 1310,999 1293,999 1291,977 1260,979 1261,1004 1255,1005",
    "labelX": 1320,
    "labelY": 1021,
    "tags": {
      "building": "apartments",
      "name": "\u30f4\u30a7\u30e9\u30cf\u30a4\u30c4\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 123684712,
    "kind": "yes",
    "points": "826,675 807,692 789,670 793,664 826,675",
    "labelX": 804,
    "labelY": 675,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684714,
    "kind": "yes",
    "points": "683,450 673,457 691,485 702,478 683,450",
    "labelX": 687,
    "labelY": 468,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684715,
    "kind": "yes",
    "points": "684,449 703,478 718,467 699,438 684,449",
    "labelX": 701,
    "labelY": 458,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684716,
    "name": "NishiHara BLDG",
    "kind": "yes",
    "points": "652,471 659,467 674,488 668,494 652,471",
    "labelX": 663,
    "labelY": 480,
    "tags": {
      "building": "yes",
      "name": "NishiHara BLDG"
    }
  },
  {
    "osmId": 123684717,
    "name": "\u30b7\u30eb\u30d0\u30fc\u30d7\u30e9\u30b6\u6075\u6bd4\u5bff",
    "kind": "apartments",
    "points": "1254,979 1248,1037 1217,1034 1221,979 1254,979",
    "labelX": 1235,
    "labelY": 1007,
    "tags": {
      "building": "apartments",
      "name": "\u30b7\u30eb\u30d0\u30fc\u30d7\u30e9\u30b6\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 123684718,
    "kind": "retail",
    "points": "685,496 698,511 671,536 657,519 685,496",
    "labelX": 678,
    "labelY": 516,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 123684719,
    "kind": "retail",
    "points": "675,490 680,495 655,519 650,513 675,490",
    "labelX": 665,
    "labelY": 504,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 123684720,
    "kind": "apartments",
    "points": "700,569 713,583 740,559 728,546 700,569",
    "labelX": 720,
    "labelY": 564,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 123684721,
    "name": "FOREST J",
    "kind": "yes",
    "points": "952,799 945,826 964,823 969,803 952,799",
    "labelX": 958,
    "labelY": 813,
    "tags": {
      "building": "yes",
      "name": "FOREST J"
    }
  },
  {
    "osmId": 123684722,
    "kind": "yes",
    "points": "651,472 667,495 650,509 641,501 644,476 651,472",
    "labelX": 651,
    "labelY": 491,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684723,
    "kind": "yes",
    "points": "894,695 876,749 867,758 841,728 855,683 894,695",
    "labelX": 867,
    "labelY": 723,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684724,
    "kind": "apartments",
    "points": "1028,877 1029,888 1004,911 991,899 1005,886 1028,877",
    "labelX": 1011,
    "labelY": 892,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 123684725,
    "kind": "yes",
    "points": "1218,982 1196,999 1201,1010 1181,1028 1214,1031 1218,982",
    "labelX": 1202,
    "labelY": 1010,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684726,
    "kind": "yes",
    "points": "881,747 899,753 896,760 879,775 867,760 881,747",
    "labelX": 884,
    "labelY": 759,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684727,
    "kind": "yes",
    "points": "1195,1000 1198,1009 1192,1016 1181,1023 1169,1021 1169,1018 1195,1000",
    "labelX": 1184,
    "labelY": 1015,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684728,
    "kind": "office",
    "points": "1019,846 967,853 964,855 962,865 986,893 997,883 1022,876 1019,846",
    "labelX": 988,
    "labelY": 867,
    "tags": {
      "building": "office"
    }
  },
  {
    "osmId": 123684729,
    "kind": "yes",
    "points": "700,568 724,547 705,525 718,515 760,562 774,529 765,527 759,531 718,484 714,488 706,479 686,496 704,513 697,519 694,517 673,537 700,568",
    "labelX": 719,
    "labelY": 521,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684730,
    "kind": "apartments",
    "points": "780,611 802,620 791,649 789,649 788,650 767,644 768,642 766,641 780,611",
    "labelX": 781,
    "labelY": 638,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 123684731,
    "kind": "yes",
    "points": "777,613 767,637 753,632 753,630 752,629 758,609 760,609 762,606 777,613",
    "labelX": 760,
    "labelY": 621,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123684732,
    "name": "\u4e09\u607531\u30d3\u30eb",
    "kind": "office",
    "points": "1063,934 1063,960 1050,963 1026,939 1022,933 1029,929 1031,929 1033,931 1033,934 1063,934",
    "labelX": 1039,
    "labelY": 939,
    "tags": {
      "building": "office",
      "name": "\u4e09\u607531\u30d3\u30eb"
    }
  },
  {
    "osmId": 123688011,
    "name": "\u30a2\u30eb\u30ab\u30a4\u30d3\u30eb",
    "kind": "yes",
    "points": "1861,1146 1891,1150 1892,1122 1859,1119 1856,1121 1861,1146",
    "labelX": 1872,
    "labelY": 1132,
    "tags": {
      "building": "yes",
      "name": "\u30a2\u30eb\u30ab\u30a4\u30d3\u30eb"
    }
  },
  {
    "osmId": 123688012,
    "name": "\u30d7\u30e9\u30a4\u30e0\u30e1\u30be\u30f3\u6075\u6bd4\u5bff",
    "kind": "apartments",
    "points": "1480,1040 1527,1048 1526,1056 1563,1058 1561,1076 1557,1092 1527,1087 1503,1081 1478,1075 1481,1057 1477,1055 1480,1040",
    "labelX": 1516,
    "labelY": 1066,
    "tags": {
      "building": "apartments",
      "name": "\u30d7\u30e9\u30a4\u30e0\u30e1\u30be\u30f3\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 123688014,
    "name": "\u30eb\u30e2\u30f3\u30c9\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1814,1100 1849,1107 1849,1109 1853,1110 1847,1138 1843,1140 1800,1133 1806,1105 1800,1104 1802,1097 1799,1096 1801,1089 1811,1091 1810,1099 1814,1100",
    "labelX": 1820,
    "labelY": 1108,
    "tags": {
      "building": "yes",
      "name": "\u30eb\u30e2\u30f3\u30c9\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 123688015,
    "name": "\u6075\u6bd4\u5bff\u5e78\u548c\u30d3\u30eb",
    "kind": "apartments",
    "points": "1441,1029 1432,1071 1468,1078 1475,1036 1441,1029",
    "labelX": 1454,
    "labelY": 1054,
    "tags": {
      "building": "apartments",
      "name": "\u6075\u6bd4\u5bff\u5e78\u548c\u30d3\u30eb"
    }
  },
  {
    "osmId": 123688016,
    "kind": "yes",
    "points": "1766,1118 1765,1123 1792,1129 1794,1118 1766,1118",
    "labelX": 1779,
    "labelY": 1122,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123688017,
    "kind": "yes",
    "points": "1901,1133 1898,1159 1908,1160 1909,1156 1915,1134 1907,1133 1901,1133",
    "labelX": 1906,
    "labelY": 1146,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123688020,
    "kind": "yes",
    "points": "1646,1110 1676,1115 1678,1108 1647,1106 1646,1110",
    "labelX": 1662,
    "labelY": 1110,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123688022,
    "kind": "yes",
    "points": "1709,1111 1730,1110 1739,1113 1737,1127 1707,1120 1709,1111",
    "labelX": 1724,
    "labelY": 1116,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123688028,
    "name": "OHWA\u30d3\u30eb",
    "kind": "yes",
    "points": "1566,1080 1592,1080 1588,1096 1568,1093 1569,1086 1566,1086 1566,1080",
    "labelX": 1575,
    "labelY": 1087,
    "tags": {
      "building": "yes",
      "name": "OHWA\u30d3\u30eb"
    }
  },
  {
    "osmId": 123688032,
    "kind": "yes",
    "points": "1394,1024 1387,1065 1426,1073 1434,1032 1404,1025 1405,1019 1402,1017 1400,1025 1394,1024",
    "labelX": 1407,
    "labelY": 1035,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 123688034,
    "kind": "apartments",
    "points": "1701,1066 1698,1101 1787,1105 1787,1098 1788,1069 1779,1070 1779,1065 1710,1061 1708,1066 1701,1066",
    "labelX": 1749,
    "labelY": 1078,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 123698177,
    "name": "\u30bb\u30af\u30bf\u30fc\u30d3\u30eb",
    "kind": "yes",
    "points": "1965,1130 1984,1132 1983,1136 1971,1166 1950,1164 1951,1160 1955,1144 1965,1130",
    "labelX": 1966,
    "labelY": 1147,
    "tags": {
      "building": "yes",
      "name": "\u30bb\u30af\u30bf\u30fc\u30d3\u30eb"
    }
  },
  {
    "osmId": 123698180,
    "name": "7-Eleven",
    "kind": "retail",
    "points": "1971,1166 1987,1167 1996,1169 2001,1167 2013,1146 1983,1136 1971,1166",
    "labelX": 1992,
    "labelY": 1159,
    "tags": {
      "building": "retail",
      "name": "\u30bb\u30d6\u30f3-\u30a4\u30ec\u30d6\u30f3",
      "name:en": "7-Eleven",
      "shop": "convenience"
    }
  },
  {
    "osmId": 123698214,
    "kind": "apartments",
    "points": "2073,1161 2069,1184 2087,1186 2090,1164 2073,1161",
    "labelX": 2080,
    "labelY": 1174,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 123698242,
    "kind": "yes",
    "points": "2072,1160 2067,1183 2039,1176 2046,1157 2048,1151 2057,1152 2058,1157 2072,1160",
    "labelX": 2055,
    "labelY": 1162,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077140,
    "kind": "yes",
    "points": "301,850 314,832 339,834 377,899 333,934 323,922 313,931 296,910 314,890 328,873 322,866 301,850",
    "labelX": 324,
    "labelY": 886,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077141,
    "kind": "yes",
    "points": "50,783 65,775 73,791 57,798 50,783",
    "labelX": 61,
    "labelY": 787,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077142,
    "kind": "yes",
    "points": "-1,848 17,844 19,852 1,857 -1,848",
    "labelX": 9,
    "labelY": 850,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077143,
    "kind": "yes",
    "points": "62,839 107,816 116,834 71,857 62,839",
    "labelX": 89,
    "labelY": 837,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077144,
    "kind": "yes",
    "points": "163,1028 171,1022 192,1055 184,1060 163,1028",
    "labelX": 178,
    "labelY": 1041,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077146,
    "kind": "yes",
    "points": "64,1055 74,1049 94,1081 84,1086 64,1055",
    "labelX": 79,
    "labelY": 1068,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077147,
    "kind": "yes",
    "points": "45,942 56,934 73,959 63,967 45,942",
    "labelX": 59,
    "labelY": 951,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077148,
    "kind": "yes",
    "points": "276,879 299,898 276,926 253,907 276,879",
    "labelX": 276,
    "labelY": 903,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077149,
    "kind": "yes",
    "points": "324,924 332,935 324,942 315,931 324,924",
    "labelX": 324,
    "labelY": 933,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077150,
    "kind": "yes",
    "points": "145,1060 158,1052 171,1072 158,1080 145,1060",
    "labelX": 158,
    "labelY": 1066,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077151,
    "kind": "yes",
    "points": "242,921 266,941 259,950 235,929 242,921",
    "labelX": 251,
    "labelY": 935,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077153,
    "kind": "yes",
    "points": "160,1052 172,1044 184,1063 172,1071 160,1052",
    "labelX": 172,
    "labelY": 1058,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077154,
    "kind": "yes",
    "points": "263,949 270,943 290,968 283,974 263,949",
    "labelX": 277,
    "labelY": 959,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077156,
    "kind": "yes",
    "points": "229,937 253,958 246,966 222,945 229,937",
    "labelX": 238,
    "labelY": 952,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077158,
    "kind": "yes",
    "points": "178,982 208,960 226,985 220,989 232,1004 225,1009 229,1015 207,1029 178,982",
    "labelX": 216,
    "labelY": 997,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077160,
    "kind": "yes",
    "points": "160,854 183,873 165,896 158,884 160,882 157,879 159,875 149,867 160,854",
    "labelX": 161,
    "labelY": 876,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077161,
    "kind": "yes",
    "points": "281,927 289,921 312,950 304,956 281,927",
    "labelX": 297,
    "labelY": 939,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077162,
    "kind": "yes",
    "points": "286,656 330,692 305,724 260,688 286,656",
    "labelX": 295,
    "labelY": 690,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077163,
    "kind": "yes",
    "points": "76,1048 93,1037 133,1100 115,1111 76,1048",
    "labelX": 104,
    "labelY": 1074,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077164,
    "kind": "yes",
    "points": "38,788 48,783 56,798 45,803 38,788",
    "labelX": 47,
    "labelY": 793,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077165,
    "kind": "yes",
    "points": "84,852 115,836 126,858 94,874 84,852",
    "labelX": 105,
    "labelY": 855,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077166,
    "kind": "yes",
    "points": "121,898 128,894 141,913 135,917 121,898",
    "labelX": 131,
    "labelY": 906,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077167,
    "kind": "yes",
    "points": "172,752 195,727 211,741 188,766 172,752",
    "labelX": 192,
    "labelY": 747,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077168,
    "kind": "yes",
    "points": "171,1021 184,1013 204,1043 191,1051 171,1021",
    "labelX": 188,
    "labelY": 1032,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077170,
    "kind": "yes",
    "points": "47,807 75,793 82,806 54,821 47,807",
    "labelX": 65,
    "labelY": 807,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077171,
    "kind": "yes",
    "points": "270,942 277,937 297,963 291,967 270,942",
    "labelX": 284,
    "labelY": 952,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077172,
    "kind": "yes",
    "points": "148,1006 158,999 171,1020 161,1026 148,1006",
    "labelX": 160,
    "labelY": 1013,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077173,
    "kind": "yes",
    "points": "58,934 75,922 92,945 75,957 58,934",
    "labelX": 75,
    "labelY": 940,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077175,
    "kind": "yes",
    "points": "251,963 265,953 282,975 269,985 251,963",
    "labelX": 267,
    "labelY": 969,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077176,
    "kind": "yes",
    "points": "-14,803 1,799 5,815 -10,818 -14,803",
    "labelX": -4,
    "labelY": 809,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077177,
    "kind": "yes",
    "points": "121,1022 145,1006 169,1044 144,1059 121,1022",
    "labelX": 145,
    "labelY": 1033,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077179,
    "kind": "yes",
    "points": "42,921 68,913 72,918 46,936 42,921",
    "labelX": 57,
    "labelY": 922,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077180,
    "kind": "yes",
    "points": "247,915 271,935 266,941 242,921 247,915",
    "labelX": 257,
    "labelY": 928,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077181,
    "kind": "yes",
    "points": "279,879 286,870 311,891 303,899 279,879",
    "labelX": 295,
    "labelY": 885,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077182,
    "kind": "yes",
    "points": "1,857 20,853 23,864 3,869 1,857",
    "labelX": 12,
    "labelY": 861,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077183,
    "kind": "yes",
    "points": "91,905 112,932 95,944 75,917 91,905",
    "labelX": 93,
    "labelY": 925,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077185,
    "kind": "yes",
    "points": "213,684 227,696 213,711 199,699 213,684",
    "labelX": 213,
    "labelY": 698,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077186,
    "kind": "yes",
    "points": "235,930 259,950 254,957 229,937 235,930",
    "labelX": 244,
    "labelY": 944,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077187,
    "kind": "yes",
    "points": "174,846 193,860 184,872 165,857 174,846",
    "labelX": 179,
    "labelY": 859,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077190,
    "kind": "yes",
    "points": "221,719 236,703 260,725 245,741 221,719",
    "labelX": 241,
    "labelY": 722,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077191,
    "kind": "yes",
    "points": "4,799 20,795 25,810 8,815 4,799",
    "labelX": 14,
    "labelY": 805,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077194,
    "kind": "yes",
    "points": "159,997 169,990 182,1010 172,1017 159,997",
    "labelX": 171,
    "labelY": 1004,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077196,
    "kind": "yes",
    "points": "95,1037 118,1022 157,1084 134,1099 95,1037",
    "labelX": 126,
    "labelY": 1061,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077197,
    "kind": "yes",
    "points": "212,742 221,750 199,774 190,766 212,742",
    "labelX": 206,
    "labelY": 758,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077199,
    "kind": "yes",
    "points": "349,625 354,618 373,633 367,640 349,625",
    "labelX": 361,
    "labelY": 629,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077200,
    "kind": "yes",
    "points": "289,919 297,913 321,943 313,949 289,919",
    "labelX": 305,
    "labelY": 931,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077201,
    "kind": "yes",
    "points": "78,1108 101,1093 107,1102 84,1117 78,1108",
    "labelX": 93,
    "labelY": 1105,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077202,
    "kind": "yes",
    "points": "17,925 39,920 43,942 21,947 17,925",
    "labelX": 30,
    "labelY": 934,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077203,
    "kind": "yes",
    "points": "270,700 303,727 289,744 256,718 270,700",
    "labelX": 280,
    "labelY": 722,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077204,
    "kind": "yes",
    "points": "275,935 282,929 304,957 297,962 275,935",
    "labelX": 290,
    "labelY": 946,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077205,
    "kind": "yes",
    "points": "240,653 255,667 246,677 231,663 240,653",
    "labelX": 243,
    "labelY": 665,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077206,
    "kind": "yes",
    "points": "226,755 255,780 242,795 213,770 226,755",
    "labelX": 234,
    "labelY": 775,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077207,
    "kind": "yes",
    "points": "152,729 176,716 185,717 194,725 166,757 152,729",
    "labelX": 175,
    "labelY": 729,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077208,
    "kind": "yes",
    "points": "9,874 81,857 89,891 65,910 20,920 9,874",
    "labelX": 53,
    "labelY": 890,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077209,
    "kind": "yes",
    "points": "85,1118 108,1103 115,1113 98,1125 89,1125 85,1118",
    "labelX": 99,
    "labelY": 1117,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077211,
    "kind": "yes",
    "points": "358,617 373,605 377,610 378,623 372,629 358,617",
    "labelX": 372,
    "labelY": 617,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077212,
    "kind": "yes",
    "points": "93,898 101,893 108,903 118,896 134,918 116,931 93,898",
    "labelX": 112,
    "labelY": 907,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077213,
    "kind": "yes",
    "points": "130,867 151,904 142,910 127,886 110,895 100,883 130,867",
    "labelX": 127,
    "labelY": 891,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077214,
    "kind": "yes",
    "points": "55,824 81,810 83,814 101,805 106,815 62,838 55,824",
    "labelX": 81,
    "labelY": 818,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077215,
    "kind": "yes",
    "points": "44,944 58,966 44,975 29,967 22,954 35,947 44,944",
    "labelX": 39,
    "labelY": 959,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077217,
    "kind": "yes",
    "points": "66,1059 84,1088 95,1081 102,1092 77,1107 60,1079 63,1061 66,1059",
    "labelX": 78,
    "labelY": 1081,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077218,
    "kind": "yes",
    "points": "20,842 0,847 -6,820 44,809 55,858 25,865 20,842",
    "labelX": 23,
    "labelY": 840,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142077220,
    "kind": "yes",
    "points": "161,812 204,846 195,858 170,839 149,866 132,829 150,820 161,812",
    "labelX": 166,
    "labelY": 839,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142078860,
    "kind": "yes",
    "points": "-17,1067 0,1067 9,1076 12,1084 4,1095 -17,1096 -17,1067",
    "labelX": -1,
    "labelY": 1081,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113619,
    "kind": "yes",
    "points": "64,505 28,525 13,499 33,488 29,481 55,467 57,471 65,467 91,513 74,523 64,505",
    "labelX": 51,
    "labelY": 494,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113620,
    "kind": "yes",
    "points": "161,798 163,803 157,806 159,808 151,812 148,805 150,804 141,787 169,774 177,790 161,798",
    "labelX": 158,
    "labelY": 799,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113621,
    "kind": "yes",
    "points": "-25,665 -30,652 -26,650 -31,636 -20,631 -9,658 13,649 19,664 -25,682 -31,667 -25,665",
    "labelX": -16,
    "labelY": 655,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113624,
    "kind": "yes",
    "points": "111,340 138,318 146,327 118,349 111,340",
    "labelX": 128,
    "labelY": 334,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113625,
    "kind": "yes",
    "points": "97,639 135,622 146,647 109,664 97,639",
    "labelX": 122,
    "labelY": 643,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113626,
    "kind": "yes",
    "points": "48,660 71,650 77,663 54,673 48,660",
    "labelX": 63,
    "labelY": 662,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113630,
    "kind": "yes",
    "points": "51,591 41,569 65,558 75,580 51,591",
    "labelX": 58,
    "labelY": 575,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113631,
    "kind": "yes",
    "points": "274,618 301,595 308,603 281,627 274,618",
    "labelX": 291,
    "labelY": 611,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113632,
    "kind": "yes",
    "points": "17,596 42,583 50,599 25,612 17,596",
    "labelX": 34,
    "labelY": 598,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113633,
    "name": "EBISU YANALA BLDG.",
    "kind": "yes",
    "points": "165,286 193,273 198,284 170,298 170,296 165,286",
    "labelX": 179,
    "labelY": 287,
    "tags": {
      "building": "yes",
      "name": "EBISU YANALA BLDG."
    }
  },
  {
    "osmId": 142113634,
    "kind": "yes",
    "points": "-26,742 11,735 13,749 -24,756 -26,742",
    "labelX": -6,
    "labelY": 746,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113636,
    "kind": "yes",
    "points": "323,500 335,490 343,499 331,509 323,500",
    "labelX": 333,
    "labelY": 500,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113637,
    "kind": "yes",
    "points": "-23,758 15,751 17,765 -21,772 -23,758",
    "labelX": -3,
    "labelY": 762,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113638,
    "kind": "yes",
    "points": "263,606 290,584 298,593 271,616 263,606",
    "labelX": 281,
    "labelY": 600,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113639,
    "kind": "yes",
    "points": "148,430 165,416 171,423 154,437 148,430",
    "labelX": 160,
    "labelY": 427,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113640,
    "kind": "yes",
    "points": "265,536 294,512 306,525 277,549 265,536",
    "labelX": 286,
    "labelY": 531,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113641,
    "kind": "yes",
    "points": "131,752 154,740 167,764 144,776 131,752",
    "labelX": 149,
    "labelY": 758,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113642,
    "kind": "yes",
    "points": "155,438 170,425 181,438 165,451 155,438",
    "labelX": 168,
    "labelY": 438,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113644,
    "kind": "yes",
    "points": "277,554 309,528 316,537 285,563 277,554",
    "labelX": 297,
    "labelY": 546,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113645,
    "kind": "yes",
    "points": "-32,692 -1,689 1,713 -29,717 -32,692",
    "labelX": -15,
    "labelY": 703,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113646,
    "kind": "yes",
    "points": "135,413 144,405 150,412 140,420 135,413",
    "labelX": 142,
    "labelY": 413,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113647,
    "kind": "yes",
    "points": "300,639 319,619 336,635 345,625 364,644 336,674 300,639",
    "labelX": 333,
    "labelY": 639,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113648,
    "kind": "yes",
    "points": "143,419 157,408 162,415 148,426 143,419",
    "labelX": 153,
    "labelY": 417,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113649,
    "kind": "yes",
    "points": "244,515 262,536 246,549 228,528 244,515",
    "labelX": 245,
    "labelY": 532,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113650,
    "kind": "yes",
    "points": "249,551 260,542 268,552 257,561 249,551",
    "labelX": 259,
    "labelY": 552,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113651,
    "kind": "yes",
    "points": "67,746 87,736 101,766 82,776 67,746",
    "labelX": 84,
    "labelY": 756,
    "tags": {
      "amenity": "place_of_worship",
      "building": "yes"
    }
  },
  {
    "osmId": 142113652,
    "kind": "yes",
    "points": "185,442 215,417 224,428 192,451 185,442",
    "labelX": 204,
    "labelY": 435,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113653,
    "kind": "yes",
    "points": "251,325 280,302 286,317 261,338 251,325",
    "labelX": 270,
    "labelY": 321,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113655,
    "kind": "yes",
    "points": "283,627 310,604 317,613 290,636 283,627",
    "labelX": 300,
    "labelY": 620,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113656,
    "kind": "yes",
    "points": "25,614 44,605 51,620 32,628 25,614",
    "labelX": 38,
    "labelY": 617,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113659,
    "kind": "yes",
    "points": "224,565 206,545 225,529 243,549 224,565",
    "labelX": 225,
    "labelY": 547,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113662,
    "kind": "yes",
    "points": "15,737 56,715 62,726 20,747 15,737",
    "labelX": 38,
    "labelY": 731,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113664,
    "kind": "yes",
    "points": "13,557 1,535 23,523 35,545 13,557",
    "labelX": 18,
    "labelY": 540,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113665,
    "kind": "yes",
    "points": "131,551 152,535 160,546 138,561 131,551",
    "labelX": 145,
    "labelY": 548,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113667,
    "kind": "yes",
    "points": "225,567 244,550 250,557 231,573 225,567",
    "labelX": 238,
    "labelY": 562,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113668,
    "kind": "yes",
    "points": "136,371 159,352 167,362 144,381 136,371",
    "labelX": 152,
    "labelY": 367,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113669,
    "kind": "yes",
    "points": "181,323 208,306 213,315 186,332 181,323",
    "labelX": 197,
    "labelY": 319,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113672,
    "name": "\u5ee3\u7530\u30d3\u30eb",
    "kind": "yes",
    "points": "200,349 219,335 226,345 207,359 200,349",
    "labelX": 213,
    "labelY": 347,
    "tags": {
      "building": "yes",
      "name": "\u5ee3\u7530\u30d3\u30eb"
    }
  },
  {
    "osmId": 142113673,
    "kind": "yes",
    "points": "75,649 94,640 120,695 102,704 75,649",
    "labelX": 98,
    "labelY": 672,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113674,
    "kind": "yes",
    "points": "57,676 79,666 87,684 66,694 57,676",
    "labelX": 72,
    "labelY": 680,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113677,
    "kind": "yes",
    "points": "322,609 353,582 367,598 336,625 322,609",
    "labelX": 345,
    "labelY": 604,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113679,
    "kind": "yes",
    "points": "2,772 19,768 21,778 4,782 2,772",
    "labelX": 12,
    "labelY": 775,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113680,
    "kind": "yes",
    "points": "30,744 45,737 52,751 37,758 30,744",
    "labelX": 41,
    "labelY": 748,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113681,
    "kind": "yes",
    "points": "88,707 99,701 105,713 93,718 88,707",
    "labelX": 96,
    "labelY": 710,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113682,
    "kind": "yes",
    "points": "63,546 77,540 87,563 74,569 63,546",
    "labelX": 75,
    "labelY": 555,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113683,
    "kind": "yes",
    "points": "322,580 341,564 347,571 328,587 322,580",
    "labelX": 335,
    "labelY": 576,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113684,
    "kind": "yes",
    "points": "220,278 263,260 270,275 227,294 220,278",
    "labelX": 245,
    "labelY": 277,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113685,
    "kind": "yes",
    "points": "336,489 346,480 352,495 345,500 336,489",
    "labelX": 345,
    "labelY": 491,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113686,
    "kind": "yes",
    "points": "314,601 348,572 354,579 320,608 314,601",
    "labelX": 334,
    "labelY": 590,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113687,
    "kind": "yes",
    "points": "-19,775 0,771 2,783 -17,786 -19,775",
    "labelX": -8,
    "labelY": 779,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113690,
    "kind": "yes",
    "points": "193,235 215,226 227,255 204,264 193,235",
    "labelX": 210,
    "labelY": 245,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113691,
    "kind": "yes",
    "points": "88,598 101,592 112,618 99,623 88,598",
    "labelX": 100,
    "labelY": 608,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113693,
    "kind": "yes",
    "points": "10,725 50,704 55,714 15,735 10,725",
    "labelX": 33,
    "labelY": 720,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113695,
    "kind": "yes",
    "points": "248,589 276,565 281,571 253,595 248,589",
    "labelX": 265,
    "labelY": 580,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113697,
    "kind": "yes",
    "points": "81,583 115,569 120,581 86,596 81,583",
    "labelX": 101,
    "labelY": 582,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113700,
    "kind": "yes",
    "points": "254,597 281,573 289,582 262,605 254,597",
    "labelX": 272,
    "labelY": 589,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113702,
    "kind": "yes",
    "points": "103,591 121,584 125,595 107,602 103,591",
    "labelX": 114,
    "labelY": 593,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113704,
    "kind": "yes",
    "points": "133,761 143,779 129,786 120,768 133,761",
    "labelX": 131,
    "labelY": 774,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113705,
    "kind": "yes",
    "points": "168,637 195,625 202,641 175,653 168,637",
    "labelX": 185,
    "labelY": 639,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113706,
    "kind": "yes",
    "points": "79,332 101,344 90,364 68,352 79,332",
    "labelX": 85,
    "labelY": 348,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113707,
    "kind": "yes",
    "points": "8,706 23,699 30,712 15,720 8,706",
    "labelX": 19,
    "labelY": 709,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113709,
    "kind": "yes",
    "points": "232,574 252,557 257,562 237,579 232,574",
    "labelX": 245,
    "labelY": 568,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113712,
    "kind": "yes",
    "points": "120,807 140,796 144,819 129,826 120,807",
    "labelX": 133,
    "labelY": 812,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113713,
    "kind": "yes",
    "points": "240,579 267,556 273,563 246,586 240,579",
    "labelX": 257,
    "labelY": 571,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113714,
    "kind": "yes",
    "points": "78,569 109,555 114,567 83,581 78,569",
    "labelX": 96,
    "labelY": 568,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113715,
    "kind": "yes",
    "points": "120,393 130,385 143,402 133,410 120,393",
    "labelX": 132,
    "labelY": 398,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113716,
    "kind": "yes",
    "points": "375,557 390,544 398,552 382,566 375,557",
    "labelX": 386,
    "labelY": 555,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113718,
    "kind": "yes",
    "points": "47,441 65,458 42,471 28,460 47,441",
    "labelX": 46,
    "labelY": 458,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113719,
    "kind": "yes",
    "points": "114,668 144,653 149,664 120,679 114,668",
    "labelX": 132,
    "labelY": 666,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113721,
    "kind": "yes",
    "points": "264,534 245,512 272,490 290,512 264,534",
    "labelX": 268,
    "labelY": 512,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113722,
    "kind": "yes",
    "points": "125,742 134,759 119,767 110,750 125,742",
    "labelX": 122,
    "labelY": 755,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113723,
    "kind": "yes",
    "points": "181,431 204,412 210,418 187,438 181,431",
    "labelX": 196,
    "labelY": 425,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113725,
    "kind": "yes",
    "points": "207,361 236,338 241,345 212,367 207,361",
    "labelX": 224,
    "labelY": 353,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113726,
    "kind": "yes",
    "points": "136,372 161,403 152,411 127,380 136,372",
    "labelX": 144,
    "labelY": 392,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113727,
    "kind": "yes",
    "points": "323,498 302,472 324,456 344,480 323,498",
    "labelX": 323,
    "labelY": 477,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113729,
    "kind": "yes",
    "points": "101,369 111,361 128,383 117,391 101,369",
    "labelX": 114,
    "labelY": 376,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113730,
    "kind": "yes",
    "points": "118,681 150,665 167,699 135,715 118,681",
    "labelX": 143,
    "labelY": 690,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113732,
    "name": "UCHINO BLDG.",
    "kind": "yes",
    "points": "117,323 133,310 139,317 123,330 117,323",
    "labelX": 128,
    "labelY": 320,
    "tags": {
      "building": "yes",
      "name": "UCHINO BLDG."
    }
  },
  {
    "osmId": 142113733,
    "kind": "yes",
    "points": "119,351 144,331 150,339 126,359 119,351",
    "labelX": 135,
    "labelY": 345,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113734,
    "kind": "yes",
    "points": "382,568 397,554 400,557 412,585 397,585 382,568",
    "labelX": 398,
    "labelY": 570,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113736,
    "kind": "yes",
    "points": "334,511 351,496 357,510 346,519 341,519 334,511",
    "labelX": 346,
    "labelY": 511,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113737,
    "kind": "yes",
    "points": "14,456 36,468 31,475 22,480 6,470 14,456",
    "labelX": 22,
    "labelY": 470,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113738,
    "kind": "yes",
    "points": "135,565 160,548 168,559 152,571 138,570 135,565",
    "labelX": 151,
    "labelY": 563,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113740,
    "kind": "yes",
    "points": "108,604 127,596 130,604 129,613 115,620 108,604",
    "labelX": 122,
    "labelY": 607,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113745,
    "kind": "yes",
    "points": "-3,490 5,492 11,505 1,535 -16,530 -3,490",
    "labelX": 0,
    "labelY": 510,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113746,
    "kind": "yes",
    "points": "13,594 7,582 7,577 34,563 43,579 13,594",
    "labelX": 21,
    "labelY": 579,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113749,
    "kind": "yes",
    "points": "360,535 381,517 392,539 371,555 360,542 360,535",
    "labelX": 373,
    "labelY": 538,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113750,
    "kind": "yes",
    "points": "191,592 174,573 193,558 202,560 213,572 191,592",
    "labelX": 195,
    "labelY": 571,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113751,
    "kind": "yes",
    "points": "14,454 23,433 31,432 45,438 26,460 14,454",
    "labelX": 28,
    "labelY": 443,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113755,
    "kind": "yes",
    "points": "27,745 40,768 24,776 19,766 16,750 27,745",
    "labelX": 25,
    "labelY": 761,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113756,
    "kind": "yes",
    "points": "78,535 92,528 97,529 108,553 90,561 78,535",
    "labelX": 93,
    "labelY": 541,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113757,
    "kind": "yes",
    "points": "118,515 132,506 152,533 133,545 130,544 118,515",
    "labelX": 133,
    "labelY": 529,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113759,
    "kind": "yes",
    "points": "163,453 180,439 189,451 178,461 169,459 163,453",
    "labelX": 176,
    "labelY": 453,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113760,
    "kind": "yes",
    "points": "188,236 197,258 156,275 156,268 159,247 188,236",
    "labelX": 171,
    "labelY": 257,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113761,
    "kind": "yes",
    "points": "-15,535 0,538 10,561 -7,568 -22,564 -15,535",
    "labelX": -7,
    "labelY": 553,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113762,
    "kind": "yes",
    "points": "238,227 245,224 259,257 239,266 221,225 235,219 238,227",
    "labelX": 240,
    "labelY": 236,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113763,
    "kind": "yes",
    "points": "113,360 120,354 126,361 149,341 157,351 126,376 113,360",
    "labelX": 132,
    "labelY": 357,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113764,
    "kind": "yes",
    "points": "185,652 205,642 229,619 249,638 220,670 202,690 185,652",
    "labelX": 215,
    "labelY": 652,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113765,
    "kind": "yes",
    "points": "172,576 182,587 192,604 160,617 154,602 155,590 172,576",
    "labelX": 169,
    "labelY": 596,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113766,
    "kind": "yes",
    "points": "2,681 28,670 35,685 25,690 28,694 13,702 2,681",
    "labelX": 22,
    "labelY": 687,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113767,
    "kind": "yes",
    "points": "37,628 55,620 48,603 81,588 95,620 44,642 37,628",
    "labelX": 60,
    "labelY": 617,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113768,
    "kind": "yes",
    "points": "285,567 319,539 337,560 316,577 325,588 311,599 285,567",
    "labelX": 316,
    "labelY": 572,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113769,
    "kind": "yes",
    "points": "103,735 96,720 108,714 104,706 119,698 130,722 103,735",
    "labelX": 110,
    "labelY": 716,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113770,
    "kind": "yes",
    "points": "67,696 90,686 96,700 85,706 87,710 75,715 67,696",
    "labelX": 83,
    "labelY": 702,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113771,
    "name": "EBISU S2 BLDG.",
    "kind": "yes",
    "points": "203,410 180,430 168,415 178,407 172,400 178,395 180,398 187,392 203,410",
    "labelX": 181,
    "labelY": 406,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bffS2\u30d3\u30eb",
      "name:en": "EBISU S2 BLDG."
    }
  },
  {
    "osmId": 142113773,
    "kind": "yes",
    "points": "197,348 188,333 211,319 213,323 220,318 227,329 197,348",
    "labelX": 209,
    "labelY": 328,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113774,
    "kind": "yes",
    "points": "214,300 222,295 225,298 270,277 280,299 236,334 223,315 214,300",
    "labelX": 239,
    "labelY": 303,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113775,
    "name": "\u30d5\u30a1\u30a4\u30d6\u30a2\u30cd\u30c3\u30af\u30b9",
    "kind": "yes",
    "points": "173,300 215,279 220,289 207,295 210,302 189,313 190,315 182,319 173,300",
    "labelX": 198,
    "labelY": 302,
    "tags": {
      "building": "yes",
      "name": "\u30d5\u30a1\u30a4\u30d6\u30a2\u30cd\u30c3\u30af\u30b9"
    }
  },
  {
    "osmId": 142113776,
    "kind": "yes",
    "points": "161,618 197,604 192,598 216,576 241,604 217,626 207,620 168,635 161,618",
    "labelX": 200,
    "labelY": 610,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113777,
    "kind": "yes",
    "points": "219,452 233,440 256,469 243,479 246,482 171,547 141,513 193,466 219,452",
    "labelX": 213,
    "labelY": 481,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113779,
    "kind": "yes",
    "points": "247,408 213,367 232,353 247,370 281,342 288,351 285,355 292,362 291,370 247,408",
    "labelX": 264,
    "labelY": 364,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142113780,
    "kind": "yes",
    "points": "16,640 0,647 -3,642 -12,645 -18,626 -32,630 -28,580 -16,581 -11,584 16,640",
    "labelX": -12,
    "labelY": 619,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123084,
    "kind": "yes",
    "points": "55,414 65,405 74,415 64,424 55,414",
    "labelX": 65,
    "labelY": 415,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123087,
    "kind": "yes",
    "points": "81,391 91,383 98,391 88,400 81,391",
    "labelX": 90,
    "labelY": 391,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123088,
    "kind": "yes",
    "points": "-2,330 27,346 18,364 -12,348 -2,330",
    "labelX": 8,
    "labelY": 347,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123089,
    "kind": "yes",
    "points": "129,470 147,456 157,468 139,482 129,470",
    "labelX": 143,
    "labelY": 469,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123094,
    "kind": "yes",
    "points": "61,366 88,379 83,389 56,376 61,366",
    "labelX": 72,
    "labelY": 378,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123096,
    "kind": "retail",
    "points": "46,394 54,378 80,389 73,406 46,394",
    "labelX": 63,
    "labelY": 392,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 142123097,
    "kind": "yes",
    "points": "-10,351 17,366 10,379 -17,365 -10,351",
    "labelX": 0,
    "labelY": 365,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123098,
    "kind": "yes",
    "points": "121,461 135,450 141,458 128,469 121,461",
    "labelX": 131,
    "labelY": 460,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123103,
    "kind": "yes",
    "points": "115,454 136,436 141,443 120,461 115,454",
    "labelX": 128,
    "labelY": 449,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123106,
    "kind": "yes",
    "points": "88,453 102,443 110,454 96,464 88,453",
    "labelX": 99,
    "labelY": 454,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123112,
    "kind": "retail",
    "points": "45,395 64,404 53,414 48,411 42,400 45,395",
    "labelX": 50,
    "labelY": 405,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 142123113,
    "kind": "yes",
    "points": "-5,373 9,381 0,398 -10,400 -18,397 -5,373",
    "labelX": -5,
    "labelY": 390,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123118,
    "kind": "yes",
    "points": "114,500 108,497 95,467 112,454 134,485 114,500",
    "labelX": 113,
    "labelY": 481,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123123,
    "kind": "yes",
    "points": "0,320 -6,316 4,297 42,316 29,342 -3,326 0,320",
    "labelX": 11,
    "labelY": 320,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142123133,
    "kind": "yes",
    "points": "101,437 89,446 69,421 97,398 118,424 128,438 112,451 101,437",
    "labelX": 102,
    "labelY": 431,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444767,
    "kind": "yes",
    "points": "34,157 59,148 64,160 39,170 34,157",
    "labelX": 49,
    "labelY": 159,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444768,
    "kind": "yes",
    "points": "-25,66 21,48 25,60 -21,78 -25,66",
    "labelX": 0,
    "labelY": 63,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444771,
    "kind": "yes",
    "points": "-29,134 -14,123 0,144 -15,154 -29,134",
    "labelX": -14,
    "labelY": 139,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444776,
    "kind": "yes",
    "points": "-17,79 26,62 32,79 -11,95 -17,79",
    "labelX": 8,
    "labelY": 79,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444780,
    "kind": "yes",
    "points": "-15,157 1,146 10,159 -6,170 -15,157",
    "labelX": -2,
    "labelY": 158,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444781,
    "kind": "yes",
    "points": "48,183 69,174 75,188 53,197 48,183",
    "labelX": 61,
    "labelY": 186,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444783,
    "kind": "yes",
    "points": "-8,95 33,80 37,92 -1,106 -8,95",
    "labelX": 15,
    "labelY": 93,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444790,
    "kind": "yes",
    "points": "18,126 47,115 54,133 25,144 18,126",
    "labelX": 36,
    "labelY": 130,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444792,
    "kind": "yes",
    "points": "41,170 64,161 69,173 46,182 41,170",
    "labelX": 55,
    "labelY": 172,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444797,
    "kind": "yes",
    "points": "27,145 54,135 59,147 32,158 27,145",
    "labelX": 43,
    "labelY": 146,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444806,
    "kind": "retail",
    "points": "36,214 44,196 53,200 45,218 36,214",
    "labelX": 45,
    "labelY": 207,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 142444810,
    "kind": "yes",
    "points": "8,118 44,105 47,113 11,127 8,118",
    "labelX": 28,
    "labelY": 116,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444823,
    "kind": "yes",
    "points": "3,107 39,93 43,103 6,117 3,107",
    "labelX": 23,
    "labelY": 105,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142444829,
    "kind": "retail",
    "points": "47,218 54,203 56,204 61,213 56,222 47,218",
    "labelX": 55,
    "labelY": 212,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 142444836,
    "kind": "yes",
    "points": "56,200 76,191 79,198 65,216 59,207 56,200",
    "labelX": 67,
    "labelY": 202,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446451,
    "kind": "yes",
    "points": "152,198 171,191 176,205 158,212 152,198",
    "labelX": 164,
    "labelY": 202,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446453,
    "kind": "office",
    "points": "90,110 113,101 117,111 94,119 90,110",
    "labelX": 104,
    "labelY": 110,
    "tags": {
      "building": "office"
    }
  },
  {
    "osmId": 142446454,
    "kind": "yes",
    "points": "128,40 155,30 162,50 136,60 128,40",
    "labelX": 145,
    "labelY": 45,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446455,
    "kind": "yes",
    "points": "182,187 194,182 198,193 186,198 182,187",
    "labelX": 190,
    "labelY": 190,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446458,
    "kind": "yes",
    "points": "148,101 179,90 185,104 154,116 148,101",
    "labelX": 167,
    "labelY": 103,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446461,
    "kind": "yes",
    "points": "98,-12 131,-25 139,-5 105,7 98,-12",
    "labelX": 118,
    "labelY": -9,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446463,
    "kind": "yes",
    "points": "138,75 169,63 179,88 148,100 138,75",
    "labelX": 159,
    "labelY": 82,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446465,
    "kind": "yes",
    "points": "47,1 94,-12 102,9 57,25 47,1",
    "labelX": 75,
    "labelY": 6,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446467,
    "kind": "apartments",
    "points": "61,27 138,-2 147,22 70,51 61,27",
    "labelX": 104,
    "labelY": 25,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 142446469,
    "kind": "yes",
    "points": "95,122 117,113 127,141 105,149 95,122",
    "labelX": 111,
    "labelY": 131,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446470,
    "kind": "yes",
    "points": "69,63 123,42 131,62 76,83 69,63",
    "labelX": 100,
    "labelY": 63,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446471,
    "kind": "yes",
    "points": "154,118 187,105 194,125 162,137 154,118",
    "labelX": 174,
    "labelY": 121,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446474,
    "name": "EBISU WEST",
    "kind": "yes",
    "points": "7,240 33,252 9,296 -24,279 7,240",
    "labelX": 6,
    "labelY": 267,
    "tags": {
      "building": "yes",
      "name": "EBISU WEST"
    }
  },
  {
    "osmId": 142446477,
    "kind": "yes",
    "points": "115,104 135,96 140,111 120,118 115,104",
    "labelX": 128,
    "labelY": 107,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446478,
    "kind": "office",
    "points": "82,94 123,79 129,94 87,109 82,94",
    "labelX": 105,
    "labelY": 94,
    "tags": {
      "building": "office"
    }
  },
  {
    "osmId": 142446480,
    "kind": "yes",
    "points": "121,120 141,112 145,124 125,131 121,120",
    "labelX": 133,
    "labelY": 122,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142446482,
    "name": "\u4e38\u5c71\u30d3\u30eb",
    "kind": "yes",
    "points": "29,279 53,292 43,313 18,299 29,279",
    "labelX": 36,
    "labelY": 296,
    "tags": {
      "building": "yes",
      "name": "\u4e38\u5c71\u30d3\u30eb"
    }
  },
  {
    "osmId": 142545704,
    "name": "Ebisu",
    "kind": "train_station",
    "points": "444,781 452,778 460,775 460,769 460,759 460,754 460,718 476,711 468,692 520,669 533,663 566,729 603,818 627,861 651,849 716,992 744,1054 719,1066 712,1069 725,1099 714,1103 705,1107 686,1115 655,1126 594,980 584,984 543,903 541,899 520,858 510,835 474,849 459,815 444,781",
    "labelX": 570,
    "labelY": 881,
    "tags": {
      "building": "train_station",
      "name": "\u6075\u6bd4\u5bff",
      "name:en": "Ebisu"
    }
  },
  {
    "osmId": 142545709,
    "kind": "yes",
    "points": "243,1221 263,1205 269,1202 274,1214 267,1216 263,1219 265,1226 274,1224 279,1236 252,1245 243,1221",
    "labelX": 265,
    "labelY": 1221,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545710,
    "kind": "yes",
    "points": "291,1027 312,1015 318,1025 297,1037 291,1027",
    "labelX": 305,
    "labelY": 1026,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545712,
    "kind": "yes",
    "points": "395,994 408,984 419,999 405,1009 395,994",
    "labelX": 407,
    "labelY": 997,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545713,
    "kind": "yes",
    "points": "356,942 370,931 381,946 367,957 356,942",
    "labelX": 369,
    "labelY": 944,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545715,
    "kind": "yes",
    "points": "477,852 509,840 521,870 497,879 486,876 477,852",
    "labelX": 498,
    "labelY": 863,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545716,
    "kind": "yes",
    "points": "306,982 335,962 357,992 328,1013 306,982",
    "labelX": 332,
    "labelY": 987,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545717,
    "kind": "yes",
    "points": "226,1086 226,1071 249,1066 249,1083 226,1086",
    "labelX": 238,
    "labelY": 1077,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545719,
    "kind": "yes",
    "points": "36,1137 48,1150 33,1161 23,1150 36,1137",
    "labelX": 35,
    "labelY": 1150,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545724,
    "kind": "yes",
    "points": "234,1040 247,1035 252,1048 239,1053 234,1040",
    "labelX": 243,
    "labelY": 1044,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545725,
    "kind": "yes",
    "points": "214,1260 207,1243 241,1224 250,1248 214,1260",
    "labelX": 228,
    "labelY": 1244,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545726,
    "kind": "yes",
    "points": "298,1041 321,1027 336,1053 313,1066 298,1041",
    "labelX": 317,
    "labelY": 1047,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545727,
    "name": "ONE TEN ONE HOTEL",
    "kind": "yes",
    "points": "219,1109 281,1101 290,1126 226,1144 219,1109",
    "labelX": 254,
    "labelY": 1120,
    "tags": {
      "amenity": "love_hotel",
      "building": "yes",
      "name": "1.10.1 HOTEL",
      "name:en": "ONE TEN ONE HOTEL"
    }
  },
  {
    "osmId": 142545730,
    "kind": "yes",
    "points": "371,929 388,915 393,921 395,924 378,938 371,929",
    "labelX": 385,
    "labelY": 925,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545732,
    "name": "Ebisu Neonate",
    "kind": "apartments",
    "points": "747,1147 776,1135 802,1123 873,1284 818,1308 747,1147",
    "labelX": 803,
    "labelY": 1199,
    "tags": {
      "building": "apartments",
      "name": "\u6075\u6bd4\u5bff\u30cd\u30aa\u30ca\u30fc\u30c8",
      "name:en": "Ebisu Neonate"
    }
  },
  {
    "osmId": 142545733,
    "kind": "yes",
    "points": "339,962 347,956 368,985 360,991 339,962",
    "labelX": 354,
    "labelY": 974,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545734,
    "kind": "yes",
    "points": "199,1134 219,1130 222,1146 202,1150 199,1134",
    "labelX": 211,
    "labelY": 1140,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545735,
    "name": "HEART HOTEL",
    "kind": "yes",
    "points": "343,1131 369,1122 380,1158 354,1167 343,1131",
    "labelX": 362,
    "labelY": 1145,
    "tags": {
      "amenity": "love_hotel",
      "building": "yes",
      "name": "\u30cf\u30fc\u30c8\u30db\u30c6\u30eb",
      "name:en": "HEART HOTEL"
    }
  },
  {
    "osmId": 142545737,
    "kind": "yes",
    "points": "192,1108 214,1105 218,1127 196,1131 192,1108",
    "labelX": 205,
    "labelY": 1118,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545738,
    "kind": "yes",
    "points": "387,980 414,960 421,971 395,990 387,980",
    "labelX": 404,
    "labelY": 975,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545739,
    "kind": "yes",
    "points": "380,998 388,993 403,1012 395,1018 380,998",
    "labelX": 392,
    "labelY": 1005,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545740,
    "kind": "yes",
    "points": "327,1129 338,1125 347,1153 336,1157 327,1129",
    "labelX": 337,
    "labelY": 1141,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545742,
    "kind": "yes",
    "points": "345,952 355,944 377,974 367,981 345,952",
    "labelX": 361,
    "labelY": 963,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545743,
    "kind": "yes",
    "points": "372,1004 379,999 393,1018 387,1023 372,1004",
    "labelX": 383,
    "labelY": 1011,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545744,
    "kind": "yes",
    "points": "326,1162 346,1155 350,1167 330,1173 326,1162",
    "labelX": 338,
    "labelY": 1164,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545745,
    "kind": "yes",
    "points": "365,992 379,981 387,991 373,1002 365,992",
    "labelX": 376,
    "labelY": 992,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545746,
    "kind": "yes",
    "points": "-16,1149 -6,1135 17,1153 6,1166 -16,1149",
    "labelX": 0,
    "labelY": 1151,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545747,
    "kind": "yes",
    "points": "12,1110 29,1126 23,1133 6,1116 12,1110",
    "labelX": 18,
    "labelY": 1121,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545748,
    "kind": "yes",
    "points": "372,1119 388,1114 400,1155 383,1159 372,1119",
    "labelX": 386,
    "labelY": 1137,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545749,
    "kind": "yes",
    "points": "44,1123 55,1140 50,1147 36,1133 44,1123",
    "labelX": 46,
    "labelY": 1136,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545750,
    "kind": "yes",
    "points": "475,1024 536,998 551,1033 479,1065 475,1024",
    "labelX": 510,
    "labelY": 1030,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545751,
    "kind": "yes",
    "points": "332,1017 362,996 381,1025 351,1045 332,1017",
    "labelX": 357,
    "labelY": 1021,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545752,
    "kind": "yes",
    "points": "-32,1183 -15,1153 9,1171 -27,1187 -32,1183",
    "labelX": -16,
    "labelY": 1174,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545753,
    "kind": "yes",
    "points": "137,1124 149,1116 166,1140 154,1148 137,1124",
    "labelX": 152,
    "labelY": 1132,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545755,
    "kind": "yes",
    "points": "-4,1130 6,1120 29,1142 19,1152 -4,1130",
    "labelX": 13,
    "labelY": 1136,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545757,
    "kind": "yes",
    "points": "314,1133 326,1129 334,1153 322,1157 314,1133",
    "labelX": 324,
    "labelY": 1143,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545758,
    "kind": "yes",
    "points": "247,1032 260,1028 264,1039 251,1043 247,1032",
    "labelX": 256,
    "labelY": 1036,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545759,
    "kind": "yes",
    "points": "129,1169 156,1150 164,1162 138,1181 129,1169",
    "labelX": 147,
    "labelY": 1166,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545760,
    "kind": "yes",
    "points": "253,1050 262,1047 265,1054 256,1057 253,1050",
    "labelX": 259,
    "labelY": 1052,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545761,
    "kind": "yes",
    "points": "265,1040 289,1030 303,1063 278,1074 265,1040",
    "labelX": 284,
    "labelY": 1052,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545762,
    "kind": "yes",
    "points": "151,1179 172,1160 197,1189 177,1208 151,1179",
    "labelX": 174,
    "labelY": 1184,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545763,
    "kind": "yes",
    "points": "25,1095 42,1120 32,1126 15,1101 25,1095",
    "labelX": 29,
    "labelY": 1111,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545766,
    "kind": "yes",
    "points": "409,982 422,973 427,981 428,988 418,995 409,982",
    "labelX": 421,
    "labelY": 984,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545767,
    "kind": "yes",
    "points": "244,1151 289,1139 297,1170 260,1181 248,1164 244,1151",
    "labelX": 268,
    "labelY": 1161,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545769,
    "kind": "yes",
    "points": "297,1098 296,1095 300,1087 319,1079 323,1088 297,1098",
    "labelX": 307,
    "labelY": 1089,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545770,
    "kind": "yes",
    "points": "112,1143 135,1126 152,1151 126,1170 112,1151 112,1143",
    "labelX": 127,
    "labelY": 1148,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545771,
    "kind": "yes",
    "points": "258,1019 295,989 312,1011 284,1028 267,1033 258,1019",
    "labelX": 283,
    "labelY": 1016,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545772,
    "kind": "yes",
    "points": "215,1058 228,1046 236,1055 248,1052 250,1059 222,1071 215,1058",
    "labelX": 233,
    "labelY": 1057,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545773,
    "kind": "yes",
    "points": "8,1167 18,1155 23,1160 22,1164 18,1168 12,1170 8,1167",
    "labelX": 17,
    "labelY": 1164,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545774,
    "kind": "yes",
    "points": "194,1081 213,1062 216,1065 221,1072 222,1088 198,1091 194,1081",
    "labelX": 211,
    "labelY": 1077,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545775,
    "kind": "yes",
    "points": "379,940 395,928 411,957 385,980 369,960 385,948 379,940",
    "labelX": 387,
    "labelY": 952,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545776,
    "kind": "yes",
    "points": "151,1112 171,1099 180,1102 188,1147 167,1163 156,1150 169,1140 151,1112",
    "labelX": 169,
    "labelY": 1130,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545777,
    "kind": "yes",
    "points": "210,960 221,951 244,972 247,969 265,989 241,1010 224,988 229,984 210,960",
    "labelX": 235,
    "labelY": 978,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142545780,
    "kind": "yes",
    "points": "254,1084 250,1060 269,1054 277,1078 254,1084",
    "labelX": 263,
    "labelY": 1069,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664187,
    "name": "Q Plaza EBISU",
    "kind": "yes",
    "points": "636,711 609,729 569,660 599,634 603,641 611,637 648,693 636,711",
    "labelX": 611,
    "labelY": 672,
    "tags": {
      "building": "yes",
      "name": "\u30ad\u30e5\u30fc\u30d7\u30e9\u30b6\u6075\u6bd4\u5bff",
      "name:en": "Q Plaza EBISU"
    }
  },
  {
    "osmId": 142664188,
    "name": "\u3044\u3068\u3046\u30d3\u30eb",
    "kind": "yes",
    "points": "619,602 643,582 651,590 627,611 619,602",
    "labelX": 635,
    "labelY": 596,
    "tags": {
      "building": "yes",
      "name": "\u3044\u3068\u3046\u30d3\u30eb"
    }
  },
  {
    "osmId": 142664189,
    "kind": "yes",
    "points": "457,423 488,402 520,434 473,466 457,423",
    "labelX": 485,
    "labelY": 431,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664190,
    "kind": "yes",
    "points": "514,446 523,440 537,461 528,467 514,446",
    "labelX": 526,
    "labelY": 454,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664191,
    "kind": "yes",
    "points": "562,532 586,558 572,570 548,545 562,532",
    "labelX": 567,
    "labelY": 551,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664192,
    "kind": "yes",
    "points": "435,366 451,354 463,369 444,385 435,366",
    "labelX": 448,
    "labelY": 369,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664194,
    "kind": "yes",
    "points": "451,411 478,391 484,399 457,419 451,411",
    "labelX": 468,
    "labelY": 405,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664195,
    "kind": "yes",
    "points": "505,453 514,447 527,468 518,474 505,453",
    "labelX": 516,
    "labelY": 461,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664197,
    "kind": "yes",
    "points": "607,542 618,554 585,584 574,572 607,542",
    "labelX": 596,
    "labelY": 563,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664199,
    "kind": "yes",
    "points": "451,408 440,390 464,372 477,389 451,408",
    "labelX": 458,
    "labelY": 390,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664200,
    "name": "\u30b5\u30f3\u6804\u30d3\u30eb",
    "kind": "yes",
    "points": "563,530 570,524 595,527 606,539 588,557 563,530",
    "labelX": 584,
    "labelY": 535,
    "tags": {
      "building": "yes",
      "name": "\u30b5\u30f3\u6804\u30d3\u30eb"
    }
  },
  {
    "osmId": 142664201,
    "kind": "office",
    "points": "524,440 530,438 540,445 541,456 536,459 524,440",
    "labelX": 534,
    "labelY": 448,
    "tags": {
      "building": "office"
    }
  },
  {
    "osmId": 142664202,
    "kind": "yes",
    "points": "553,647 516,580 535,563 570,603 622,558 637,575 553,647",
    "labelX": 572,
    "labelY": 588,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664203,
    "kind": "yes",
    "points": "694,641 648,682 628,661 640,650 632,641 666,610 694,641",
    "labelX": 651,
    "labelY": 648,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664204,
    "kind": "yes",
    "points": "548,548 582,582 573,591 536,554 540,550 544,548 548,548",
    "labelX": 554,
    "labelY": 562,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142664205,
    "name": "\u6075\u6bd4\u5bff\u30ea\u30d0\u30b9\u30c8\u30fc\u30f3\u30cf\u30a4\u30c4",
    "kind": "yes",
    "points": "624,617 652,592 664,606 634,632 628,626 624,631 618,624 612,630 604,622 618,611 624,617",
    "labelX": 628,
    "labelY": 619,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30ea\u30d0\u30b9\u30c8\u30fc\u30f3\u30cf\u30a4\u30c4"
    }
  },
  {
    "osmId": 143460113,
    "kind": "yes",
    "points": "379,32 390,28 397,45 385,49 379,32",
    "labelX": 388,
    "labelY": 39,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460114,
    "kind": "yes",
    "points": "407,23 416,44 401,50 392,28 407,23",
    "labelX": 404,
    "labelY": 36,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460115,
    "kind": "yes",
    "points": "419,56 434,49 444,70 429,76 419,56",
    "labelX": 432,
    "labelY": 63,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460116,
    "kind": "yes",
    "points": "378,34 381,54 365,56 362,36 378,34",
    "labelX": 372,
    "labelY": 45,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460117,
    "kind": "yes",
    "points": "385,68 405,65 408,82 387,85 385,68",
    "labelX": 396,
    "labelY": 75,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460118,
    "kind": "yes",
    "points": "408,21 419,16 428,38 417,43 408,21",
    "labelX": 418,
    "labelY": 30,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460119,
    "kind": "yes",
    "points": "411,86 424,83 428,103 415,106 411,86",
    "labelX": 420,
    "labelY": 95,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460120,
    "kind": "yes",
    "points": "391,14 412,6 416,15 394,24 391,14",
    "labelX": 403,
    "labelY": 15,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460121,
    "kind": "yes",
    "points": "368,93 379,91 385,126 375,131 368,93",
    "labelX": 377,
    "labelY": 110,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460122,
    "kind": "yes",
    "points": "394,89 408,86 414,116 400,119 394,89",
    "labelX": 404,
    "labelY": 103,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460123,
    "kind": "yes",
    "points": "393,90 398,119 387,124 380,92 393,90",
    "labelX": 390,
    "labelY": 106,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460124,
    "kind": "yes",
    "points": "383,68 386,88 373,90 370,70 383,68",
    "labelX": 378,
    "labelY": 79,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460125,
    "kind": "yes",
    "points": "363,24 387,15 390,25 367,34 363,24",
    "labelX": 377,
    "labelY": 25,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460126,
    "kind": "yes",
    "points": "425,82 438,75 447,74 453,106 431,111 425,82",
    "labelX": 439,
    "labelY": 90,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460507,
    "kind": "yes",
    "points": "307,20 311,19 319,37 327,34 332,44 323,47 324,50 306,58 292,27 295,26 293,20 305,15 307,20",
    "labelX": 311,
    "labelY": 33,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460508,
    "name": "\u30b5\u30ef\u30c0\u30d3\u30eb",
    "kind": "yes",
    "points": "329,112 357,100 359,113 356,114 363,129 359,132 360,134 355,135 350,136 346,136 342,133 338,131 335,127 329,112",
    "labelX": 350,
    "labelY": 126,
    "tags": {
      "building": "yes",
      "name": "\u30b5\u30ef\u30c0\u30d3\u30eb"
    }
  },
  {
    "osmId": 143460509,
    "kind": "yes",
    "points": "308,60 326,52 335,73 317,81 308,60",
    "labelX": 322,
    "labelY": 67,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460510,
    "kind": "yes",
    "points": "403,156 407,155 407,152 443,144 448,170 408,179 403,156",
    "labelX": 419,
    "labelY": 159,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460511,
    "kind": "yes",
    "points": "340,56 349,52 354,65 346,69 340,56",
    "labelX": 347,
    "labelY": 61,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460512,
    "name": "\u5c0f\u5009\u30d3\u30eb",
    "kind": "yes",
    "points": "323,96 353,83 358,96 329,108 323,96",
    "labelX": 341,
    "labelY": 96,
    "tags": {
      "building": "yes",
      "name": "\u5c0f\u5009\u30d3\u30eb"
    }
  },
  {
    "osmId": 143460513,
    "kind": "yes",
    "points": "335,47 345,69 336,73 326,51 335,47",
    "labelX": 336,
    "labelY": 60,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 143460514,
    "kind": "yes",
    "points": "413,180 446,174 448,186 415,192 413,180",
    "labelX": 431,
    "labelY": 183,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 158345889,
    "kind": "apartments",
    "points": "1225,15 1213,80 1218,81 1214,107 1285,127 1298,28 1225,15",
    "labelX": 1242,
    "labelY": 73,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 158345890,
    "name": "Ebisu Prime Square",
    "kind": "office",
    "points": "1139,-62 1129,-65 1121,-61 1115,-54 1108,-47 1101,-37 1098,-27 1097,-19 1097,-11 1097,-7 1098,-4 1095,2 1103,6 1098,16 1106,20 1104,26 1111,30 1161,56 1162,51 1172,55 1178,47 1187,50 1211,0 1221,-17 1214,-21 1207,-26 1210,-34 1151,-65 1147,-57 1139,-62",
    "labelX": 1139,
    "labelY": -9,
    "tags": {
      "building": "office",
      "name": "\u6075\u6bd4\u5bff\u30d7\u30e9\u30a4\u30e0\u30b9\u30af\u30a8\u30a2",
      "name:en": "Ebisu Prime Square"
    }
  },
  {
    "osmId": 162533754,
    "kind": "yes",
    "points": "-190,1924 -240,2016 -273,2001 -286,2030 243,2291 505,2422 515,2396 492,2376 502,2345 -9,2095 -16,2092 -196,2004 -162,1936 -190,1924",
    "labelX": 68,
    "labelY": 2148,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 162533760,
    "kind": "yes",
    "points": "-6,2048 -20,2077 -10,2081 -14,2090 -6,2093 -2,2086 8,2090 12,2085 112,2134 122,2113 29,2064 34,2058 259,2185 267,2170 34,2038 32,2041 4,2026 -3,2039 26,2054 22,2060 -6,2048",
    "labelX": 45,
    "labelY": 2082,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 163040841,
    "kind": "yes",
    "points": "1268,1825 1265,1838 1277,1850 1291,1844 1294,1832 1300,1838 1320,1831 1323,1809 1315,1788 1297,1795 1299,1801 1284,1806 1282,1820 1268,1825",
    "labelX": 1293,
    "labelY": 1821,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 163040842,
    "kind": "yes",
    "points": "1396,1765 1341,1782 1350,1809 1404,1791 1396,1765",
    "labelX": 1373,
    "labelY": 1787,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 163041367,
    "name": "UTOPIA\u9577\u8005\u4e38",
    "kind": "yes",
    "points": "1991,2428 1969,2442 1982,2462 2004,2448 1991,2428",
    "labelX": 1987,
    "labelY": 2445,
    "tags": {
      "building": "yes",
      "name": "UTOPIA\u9577\u8005\u4e38"
    }
  },
  {
    "osmId": 184421556,
    "kind": "yes",
    "points": "931,910 946,926 910,959 895,943 931,910",
    "labelX": 921,
    "labelY": 935,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 184421558,
    "name": "\u30d0\u30eb\u30d3\u30be\u30f3105\u756a\u9928",
    "kind": "yes",
    "points": "863,1189 875,1215 894,1210 889,1192 863,1189",
    "labelX": 880,
    "labelY": 1202,
    "tags": {
      "building": "yes",
      "name": "\u30d0\u30eb\u30d3\u30be\u30f3105\u756a\u9928"
    }
  },
  {
    "osmId": 184421560,
    "kind": "yes",
    "points": "990,978 978,990 964,990 945,967 947,965 947,963 963,948 990,978",
    "labelX": 962,
    "labelY": 972,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 184421562,
    "kind": "yes",
    "points": "951,950 954,954 945,963 945,967 949,975 941,982 934,983 925,972 951,950",
    "labelX": 943,
    "labelY": 968,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 184421563,
    "name": "\u6075\u6bd4\u5bff\u5c71\u4ec1\u30d3\u30eb",
    "kind": "yes",
    "points": "1000,990 1010,1001 997,1024 994,1023 994,1021 987,1021 988,1000 1000,990",
    "labelX": 996,
    "labelY": 1011,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u5c71\u4ec1\u30d3\u30eb"
    }
  },
  {
    "osmId": 184421564,
    "kind": "yes",
    "points": "410,722 419,743 441,735 430,714 410,722",
    "labelX": 425,
    "labelY": 729,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 184421569,
    "kind": "yes",
    "points": "948,927 958,938 922,971 911,960 948,927",
    "labelX": 935,
    "labelY": 949,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 184421571,
    "name": "\u6e0b\u8c37\u8b66\u5bdf\u7f72\u6075\u6bd4\u5bff\u99c5\u524d\u4ea4\u756a",
    "kind": "yes",
    "points": "448,662 439,675 442,682 457,675 452,664 448,662",
    "labelX": 448,
    "labelY": 672,
    "tags": {
      "amenity": "police",
      "building": "yes",
      "name": "\u6e0b\u8c37\u8b66\u5bdf\u7f72\u6075\u6bd4\u5bff\u99c5\u524d\u4ea4\u756a"
    }
  },
  {
    "osmId": 184421573,
    "name": "GEMS\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "999,988 986,999 985,1019 970,1018 970,1005 968,1004 968,997 967,996 967,990 978,991 992,979 999,988",
    "labelX": 977,
    "labelY": 999,
    "tags": {
      "building": "yes",
      "name": "GEMS\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 184421575,
    "kind": "yes",
    "points": "929,910 893,942 880,927 916,895 929,910",
    "labelX": 905,
    "labelY": 919,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 184421576,
    "kind": "yes",
    "points": "711,1436 780,1431 788,1454 788,1462 751,1465 750,1458 725,1460 724,1457 711,1458 711,1436",
    "labelX": 748,
    "labelY": 1453,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 184421577,
    "name": "\u6075\u6bd4\u5bff\u99c5\u897f\u53e3\u516c\u8846\u4fbf\u6240",
    "kind": "service",
    "points": "447,691 452,709 463,706 459,688 447,691",
    "labelX": 455,
    "labelY": 699,
    "tags": {
      "amenity": "toilets",
      "building": "service",
      "name": "\u6075\u6bd4\u5bff\u99c5\u897f\u53e3\u516c\u8846\u4fbf\u6240"
    }
  },
  {
    "osmId": 184421582,
    "name": "Qnz EBISU",
    "kind": "yes",
    "points": "966,1076 854,1068 852,1099 828,1111 810,1064 812,1035 969,1046 966,1076",
    "labelX": 870,
    "labelY": 1071,
    "tags": {
      "building": "yes",
      "name": "Qnz EBISU"
    }
  },
  {
    "osmId": 187289869,
    "name": "Westin Tokyo",
    "kind": "yes",
    "points": "1709,2366 1816,2366 1816,2311 1821,2311 1821,2303 1826,2303 1826,2293 1837,2292 1842,2289 1854,2283 1860,2272 1864,2261 1867,2256 1871,2256 1871,2249 1878,2249 1878,2243 1897,2243 1897,2149 1876,2149 1874,2142 1871,2137 1864,2132 1857,2129 1849,2130 1841,2132 1837,2134 1834,2137 1831,2142 1830,2147 1810,2147 1810,2158 1806,2158 1800,2163 1799,2188 1772,2188 1760,2200 1759,2224 1729,2224 1729,2230 1725,2232 1723,2235 1723,2239 1709,2240 1709,2267 1703,2268 1702,2334 1709,2334 1709,2366",
    "labelX": 1810,
    "labelY": 2226,
    "tags": {
      "building": "yes",
      "name": "\u30a6\u30a7\u30b9\u30c6\u30a3\u30f3\u30db\u30c6\u30eb\u6771\u4eac",
      "name:en": "Westin Tokyo",
      "tourism": "hotel"
    }
  },
  {
    "osmId": 187289886,
    "kind": "residential",
    "points": "1762,2472 1764,2482 1774,2480 1775,2482 1790,2479 1785,2457 1776,2459 1777,2461 1770,2462 1771,2466 1768,2467 1768,2469 1764,2470 1762,2472",
    "labelX": 1773,
    "labelY": 2470,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 187289910,
    "kind": "residential",
    "points": "1784,2450 1788,2464 1811,2457 1807,2443 1784,2450",
    "labelX": 1798,
    "labelY": 2454,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 187289918,
    "kind": "residential",
    "points": "1767,2485 1767,2506 1751,2507 1751,2497 1757,2497 1758,2485 1767,2485",
    "labelX": 1759,
    "labelY": 2496,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 217919741,
    "kind": "yes",
    "points": "2088,820 2112,801 2135,831 2104,877 2089,891 2071,866 2056,845 2050,837 2043,822 2056,812 2052,805 2066,795 2088,820",
    "labelX": 2077,
    "labelY": 834,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919760,
    "kind": "yes",
    "points": "2037,349 2032,322 2060,317 2065,343 2037,349",
    "labelX": 2049,
    "labelY": 333,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919762,
    "kind": "yes",
    "points": "1901,1650 1898,1610 1920,1608 1923,1648 1901,1650",
    "labelX": 1911,
    "labelY": 1629,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919763,
    "kind": "yes",
    "points": "1979,898 1999,874 2027,897 2028,906 2016,922 2000,907 1996,912 1979,898",
    "labelX": 2006,
    "labelY": 902,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919775,
    "kind": "yes",
    "points": "2077,312 2086,310 2092,339 2083,340 2077,312",
    "labelX": 2085,
    "labelY": 325,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919778,
    "kind": "yes",
    "points": "1872,1501 1898,1504 1897,1521 1871,1518 1872,1501",
    "labelX": 1885,
    "labelY": 1511,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919781,
    "kind": "yes",
    "points": "2075,1476 2071,1413 2100,1411 2104,1475 2075,1476",
    "labelX": 2088,
    "labelY": 1444,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919787,
    "kind": "yes",
    "points": "2014,991 2025,973 2040,982 2028,1000 2014,991",
    "labelX": 2027,
    "labelY": 987,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919800,
    "kind": "yes",
    "points": "1994,474 2053,468 2056,496 1997,502 1994,474",
    "labelX": 2025,
    "labelY": 485,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919810,
    "kind": "yes",
    "points": "1875,991 1878,977 1910,983 1906,997 1875,991",
    "labelX": 1892,
    "labelY": 987,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919818,
    "kind": "yes",
    "points": "2061,1249 2063,1232 2076,1234 2074,1251 2061,1249",
    "labelX": 2069,
    "labelY": 1242,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919819,
    "name": "\u30ad\u30a8\u30a4\u30d3\u30eb",
    "kind": "yes",
    "points": "1867,1291 1868,1276 1891,1278 1890,1293 1867,1291",
    "labelX": 1879,
    "labelY": 1285,
    "tags": {
      "building": "yes",
      "name": "\u30ad\u30a8\u30a4\u30d3\u30eb"
    }
  },
  {
    "osmId": 217919825,
    "kind": "yes",
    "points": "1956,1352 1988,1287 2030,1295 2001,1352 1956,1352",
    "labelX": 1994,
    "labelY": 1322,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919841,
    "kind": "yes",
    "points": "1973,542 2120,539 2121,577 1973,579 1973,542",
    "labelX": 2047,
    "labelY": 559,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919846,
    "name": "Ebisu Square",
    "kind": "office",
    "points": "1649,956 1686,957 1687,949 1730,950 1727,1038 1646,1036 1647,1005 1630,1004 1630,985 1648,985 1649,956",
    "labelX": 1668,
    "labelY": 987,
    "tags": {
      "building": "office",
      "name": "\u6075\u6bd4\u5bff\u30b9\u30af\u30a8\u30a2",
      "name:en": "Ebisu Square"
    }
  },
  {
    "osmId": 217919847,
    "kind": "yes",
    "points": "1867,451 1933,441 1938,468 1871,479 1867,451",
    "labelX": 1902,
    "labelY": 460,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919850,
    "name": "Aioi Nissay Dowa Insurance Co., Ltd.",
    "kind": "yes",
    "points": "1767,706 1763,624 1859,619 1863,704 1767,706",
    "labelX": 1813,
    "labelY": 663,
    "tags": {
      "building": "yes",
      "name": "\u3042\u3044\u304a\u3044\u30cb\u30c3\u30bb\u30a4\u540c\u548c\u640d\u5bb3\u4fdd\u967a\u682a\u5f0f\u4f1a\u793e",
      "name:en": "Aioi Nissay Dowa Insurance Co., Ltd."
    }
  },
  {
    "osmId": 217919855,
    "kind": "yes",
    "points": "2001,325 2029,320 2034,350 2007,355 2001,325",
    "labelX": 2018,
    "labelY": 338,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919858,
    "kind": "yes",
    "points": "2033,907 2057,876 2069,889 2066,895 2089,914 2072,938 2033,907",
    "labelX": 2064,
    "labelY": 903,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919868,
    "kind": "yes",
    "points": "2063,314 2074,312 2079,340 2068,342 2063,314",
    "labelX": 2071,
    "labelY": 327,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919871,
    "kind": "yes",
    "points": "1864,1496 1888,1457 1902,1457 1899,1499 1864,1496",
    "labelX": 1888,
    "labelY": 1477,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919872,
    "kind": "yes",
    "points": "1815,1446 1841,1449 1830,1471 1811,1469 1815,1446",
    "labelX": 1824,
    "labelY": 1459,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919881,
    "name": "\u30d7\u30ec\u30b5\u30fc\u30b8\u30e5",
    "kind": "yes",
    "points": "1908,1333 1909,1279 1943,1281 1919,1334 1908,1333",
    "labelX": 1920,
    "labelY": 1307,
    "tags": {
      "building": "yes",
      "name": "\u30d7\u30ec\u30b5\u30fc\u30b8\u30e5"
    }
  },
  {
    "osmId": 217919897,
    "kind": "yes",
    "points": "1957,442 1979,437 1994,497 1971,502 1957,442",
    "labelX": 1975,
    "labelY": 470,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919906,
    "name": "\u65e5\u4ecf\u4f1a\u9928",
    "kind": "yes",
    "points": "1783,1641 1840,1544 1874,1563 1817,1661 1783,1641",
    "labelX": 1829,
    "labelY": 1602,
    "tags": {
      "amenity": "arts_centre",
      "building": "yes",
      "name": "\u65e5\u4ecf\u4f1a\u9928"
    }
  },
  {
    "osmId": 217919907,
    "name": "\u30f4\u30a7\u30eb\u30df\u30c9\u30fc\u30eb\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1860,1039 1866,997 1884,995 1883,1000 1889,1001 1883,1042 1860,1039",
    "labelX": 1878,
    "labelY": 1012,
    "tags": {
      "building": "yes",
      "name": "\u30f4\u30a7\u30eb\u30df\u30c9\u30fc\u30eb\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 217919916,
    "kind": "yes",
    "points": "2042,1229 2062,1233 2059,1248 2040,1245 2042,1229",
    "labelX": 2051,
    "labelY": 1239,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919917,
    "name": "\u6075\u6bd4\u5bff\u30d1\u30fc\u30af\u30c6\u30e9\u30b9",
    "kind": "yes",
    "points": "1866,1344 1868,1295 1889,1296 1887,1344 1866,1344",
    "labelX": 1878,
    "labelY": 1320,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30d1\u30fc\u30af\u30c6\u30e9\u30b9"
    }
  },
  {
    "osmId": 217919920,
    "kind": "yes",
    "points": "2034,1471 2031,1399 2054,1398 2057,1470 2034,1471",
    "labelX": 2044,
    "labelY": 1435,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919940,
    "kind": "yes",
    "points": "1741,1058 1747,975 1741,974 1742,960 1786,963 1780,1061 1741,1058",
    "labelX": 1756,
    "labelY": 999,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919941,
    "kind": "apartments",
    "points": "1777,500 1940,473 1945,504 1782,531 1777,500",
    "labelX": 1861,
    "labelY": 502,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 217919956,
    "kind": "yes",
    "points": "1824,1414 1858,1417 1855,1436 1852,1443 1823,1441 1824,1414",
    "labelX": 1842,
    "labelY": 1430,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919969,
    "kind": "yes",
    "points": "1798,1496 1798,1461 1807,1461 1806,1472 1829,1477 1815,1500 1798,1496",
    "labelX": 1809,
    "labelY": 1478,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919972,
    "kind": "yes",
    "points": "2076,972 2095,937 2086,932 2091,924 2101,929 2112,909 2137,922 2113,966 2103,961 2092,981 2076,972",
    "labelX": 2101,
    "labelY": 943,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919978,
    "kind": "yes",
    "points": "2003,1269 2020,1225 2036,1225 2033,1247 2083,1256 2079,1282 2003,1269",
    "labelX": 2042,
    "labelY": 1251,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919982,
    "name": "Ebisu First Square",
    "kind": "yes",
    "points": "1591,649 1591,625 1655,627 1652,732 1588,732 1587,722 1574,722 1574,697 1569,698 1569,681 1574,681 1574,649 1591,649",
    "labelX": 1592,
    "labelY": 685,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30d5\u30a1\u30fc\u30b9\u30c8\u30b9\u30af\u30a8\u30a2",
      "name:en": "Ebisu First Square"
    }
  },
  {
    "osmId": 217919987,
    "name": "\u30b0\u30e9\u30f3\u30c9\u30e1\u30be\u30f3\u6075\u6bd4\u5bff\u306e\u675c",
    "kind": "apartments",
    "points": "1778,1344 1762,1344 1764,1287 1781,1287 1783,1258 1844,1261 1839,1371 1777,1368 1778,1344",
    "labelX": 1791,
    "labelY": 1315,
    "tags": {
      "building": "apartments",
      "name": "\u30b0\u30e9\u30f3\u30c9\u30e1\u30be\u30f3\u6075\u6bd4\u5bff\u306e\u675c"
    }
  },
  {
    "osmId": 217919988,
    "kind": "yes",
    "points": "1991,637 1990,621 2029,617 2033,646 2019,648 2025,695 1966,702 1959,641 1991,637",
    "labelX": 2002,
    "labelY": 651,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919990,
    "kind": "yes",
    "points": "1882,703 1881,656 1867,656 1867,629 1881,629 1881,624 1942,623 1943,702 1882,703",
    "labelX": 1893,
    "labelY": 653,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919993,
    "kind": "yes",
    "points": "1897,1652 1854,1656 1852,1631 1872,1630 1868,1589 1899,1573 1915,1598 1892,1600 1897,1652",
    "labelX": 1881,
    "labelY": 1616,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217919994,
    "kind": "yes",
    "points": "2071,752 2066,719 2080,717 2078,702 2120,696 2122,711 2139,709 2143,742 2071,752",
    "labelX": 2102,
    "labelY": 719,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217920000,
    "kind": "yes",
    "points": "2068,492 2059,430 2070,428 2068,415 2088,412 2090,425 2080,427 2090,489 2068,492",
    "labelX": 2077,
    "labelY": 440,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 217920001,
    "kind": "yes",
    "points": "2002,932 2005,933 2007,929 2012,931 2014,929 2038,942 2053,954 2041,977 2023,968 2012,989 1979,970 2002,932",
    "labelX": 2017,
    "labelY": 950,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023466,
    "kind": "yes",
    "points": "1720,900 1720,905 1725,906 1723,922 1686,920 1687,903 1700,904 1701,898 1670,895 1672,876 1727,881 1725,901 1720,900",
    "labelX": 1705,
    "labelY": 901,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023468,
    "name": "\u30d9\u30eb\u30b3\u30ea\u30fc\u30cc",
    "kind": "yes",
    "points": "1067,1375 1112,1395 1117,1404 1056,1426 1067,1375",
    "labelX": 1088,
    "labelY": 1400,
    "tags": {
      "building": "yes",
      "name": "\u30d9\u30eb\u30b3\u30ea\u30fc\u30cc"
    }
  },
  {
    "osmId": 218023469,
    "kind": "yes",
    "points": "1953,855 1983,866 1979,877 1949,866 1953,855",
    "labelX": 1966,
    "labelY": 866,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023472,
    "name": "\u6075\u6bd4\u5bff\u306e\u675c\u30bb\u30f3\u30bf\u30fc\u30ec\u30b8\u30c7\u30f3\u30b9",
    "kind": "apartments",
    "points": "1710,1283 1756,1285 1755,1331 1709,1330 1710,1283",
    "labelX": 1733,
    "labelY": 1307,
    "tags": {
      "building": "apartments",
      "name": "\u6075\u6bd4\u5bff\u306e\u675c\u30bb\u30f3\u30bf\u30fc\u30ec\u30b8\u30c7\u30f3\u30b9"
    }
  },
  {
    "osmId": 218023473,
    "name": "\u30de\u30ea\u30c3\u30af\u30b9\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "986,1275 953,1266 963,1228 996,1237 986,1275",
    "labelX": 975,
    "labelY": 1252,
    "tags": {
      "building": "yes",
      "name": "\u30de\u30ea\u30c3\u30af\u30b9\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218023474,
    "kind": "yes",
    "points": "1731,903 1736,875 1761,880 1756,908 1731,903",
    "labelX": 1746,
    "labelY": 892,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023475,
    "kind": "yes",
    "points": "1767,871 1771,802 1792,803 1789,872 1767,871",
    "labelX": 1780,
    "labelY": 837,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023476,
    "kind": "yes",
    "points": "996,1116 1031,1126 1024,1148 995,1141 996,1116",
    "labelX": 1012,
    "labelY": 1133,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023478,
    "kind": "yes",
    "points": "1987,824 1985,797 1995,797 1996,823 1987,824",
    "labelX": 1991,
    "labelY": 810,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023479,
    "name": "GRANZ",
    "kind": "yes",
    "points": "1544,840 1545,799 1570,800 1569,840 1544,840",
    "labelX": 1557,
    "labelY": 820,
    "tags": {
      "building": "yes",
      "name": "GRANZ"
    }
  },
  {
    "osmId": 218023480,
    "name": "\u6075\u6bd4\u5bffSS\u30d3\u30eb",
    "kind": "office",
    "points": "865,1152 867,1084 940,1087 937,1155 865,1152",
    "labelX": 902,
    "labelY": 1120,
    "tags": {
      "building": "office",
      "name": "\u6075\u6bd4\u5bffSS\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023481,
    "kind": "yes",
    "points": "1588,887 1589,856 1626,857 1625,888 1588,887",
    "labelX": 1607,
    "labelY": 872,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023482,
    "kind": "yes",
    "points": "891,1251 902,1247 914,1276 903,1280 891,1251",
    "labelX": 903,
    "labelY": 1264,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023483,
    "kind": "yes",
    "points": "1855,835 1917,831 1919,866 1858,870 1855,835",
    "labelX": 1887,
    "labelY": 851,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023484,
    "kind": "yes",
    "points": "1878,794 1904,794 1905,823 1879,824 1878,794",
    "labelX": 1892,
    "labelY": 809,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023487,
    "name": "\u6075\u6bd4\u5bff\u30db\u30fc\u30af\u30d3\u30eb",
    "kind": "yes",
    "points": "1051,1192 1062,1160 1086,1169 1081,1181 1051,1192",
    "labelX": 1070,
    "labelY": 1176,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30db\u30fc\u30af\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023488,
    "kind": "yes",
    "points": "966,1342 953,1338 948,1309 974,1317 966,1342",
    "labelX": 960,
    "labelY": 1327,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023489,
    "kind": "yes",
    "points": "1931,837 1935,796 1959,798 1955,839 1931,837",
    "labelX": 1945,
    "labelY": 818,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023491,
    "name": "\u6075\u6bd4\u5bffNR\u30d3\u30eb",
    "kind": "yes",
    "points": "1472,802 1541,804 1540,852 1470,849 1472,802",
    "labelX": 1506,
    "labelY": 827,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bffNR\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023492,
    "kind": "yes",
    "points": "1948,869 1974,877 1971,885 1945,877 1948,869",
    "labelX": 1960,
    "labelY": 877,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023494,
    "kind": "yes",
    "points": "1740,853 1742,810 1768,812 1765,854 1740,853",
    "labelX": 1754,
    "labelY": 832,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023496,
    "name": "\u3427\u4e09\u4f0a\u85e4\u30d3\u30eb",
    "kind": "yes",
    "points": "961,1225 969,1198 1007,1209 999,1236 961,1225",
    "labelX": 984,
    "labelY": 1217,
    "tags": {
      "building": "yes",
      "name": "\u3427\u4e09\u4f0a\u85e4\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023498,
    "name": "\u30eb\u30a4\u30b7\u30e3\u30c8\u30ec\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1001,1360 1026,1364 1016,1428 990,1424 1001,1360",
    "labelX": 1008,
    "labelY": 1394,
    "tags": {
      "building": "yes",
      "name": "\u30eb\u30a4\u30b7\u30e3\u30c8\u30ec\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218023500,
    "name": "\u30a4\u30ca\u30d3\u30eb",
    "kind": "yes",
    "points": "877,1220 889,1215 901,1243 889,1248 877,1220",
    "labelX": 889,
    "labelY": 1232,
    "tags": {
      "building": "yes",
      "name": "\u30a4\u30ca\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023504,
    "kind": "yes",
    "points": "1063,1369 1080,1329 1104,1339 1088,1379 1063,1369",
    "labelX": 1084,
    "labelY": 1354,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023506,
    "name": "\u30b7\u30e3\u30f3\u30dc\u30fc\u30eb\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1003,1352 1028,1268 1067,1279 1042,1363 1003,1352",
    "labelX": 1035,
    "labelY": 1316,
    "tags": {
      "building": "yes",
      "name": "\u30b7\u30e3\u30f3\u30dc\u30fc\u30eb\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218023507,
    "kind": "yes",
    "points": "1961,795 1982,794 1983,824 1961,824 1961,795",
    "labelX": 1972,
    "labelY": 809,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023509,
    "name": "\u592a\u8208\u30d3\u30eb",
    "kind": "yes",
    "points": "912,1301 946,1290 945,1314 919,1322 912,1301",
    "labelX": 931,
    "labelY": 1307,
    "tags": {
      "building": "yes",
      "name": "\u592a\u8208\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023510,
    "kind": "yes",
    "points": "1796,871 1794,835 1821,836 1820,872 1796,871",
    "labelX": 1808,
    "labelY": 854,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023511,
    "kind": "yes",
    "points": "992,1174 994,1148 1022,1158 1017,1178 992,1174",
    "labelX": 1006,
    "labelY": 1165,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023512,
    "kind": "yes",
    "points": "1654,902 1685,905 1682,928 1651,926 1654,902",
    "labelX": 1668,
    "labelY": 915,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023513,
    "kind": "yes",
    "points": "1840,825 1839,799 1875,798 1875,824 1840,825",
    "labelX": 1857,
    "labelY": 812,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023514,
    "kind": "yes",
    "points": "1661,814 1727,822 1724,851 1658,843 1661,814",
    "labelX": 1693,
    "labelY": 833,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023515,
    "kind": "yes",
    "points": "1924,855 1946,856 1946,875 1923,875 1924,855",
    "labelX": 1935,
    "labelY": 865,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023517,
    "name": "\u666f\u4e18\u306e\u5bb6",
    "kind": "yes",
    "points": "1026,1404 1057,1409 1051,1438 1022,1435 1026,1404",
    "labelX": 1039,
    "labelY": 1422,
    "tags": {
      "building": "yes",
      "name": "\u666f\u4e18\u306e\u5bb6"
    }
  },
  {
    "osmId": 218023518,
    "name": "\u7b2c6\u4f0a\u85e4\u30d3\u30eb",
    "kind": "yes",
    "points": "975,1315 949,1308 953,1267 986,1277 975,1315",
    "labelX": 966,
    "labelY": 1292,
    "tags": {
      "building": "yes",
      "name": "\u7b2c6\u4f0a\u85e4\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023520,
    "name": "\u4e2d\u897f\u5c4b\u30d1\u30fc\u30ad\u30f3\u30b0\u30d3\u30eb",
    "kind": "yes",
    "points": "1468,857 1568,864 1565,920 1465,913 1468,857",
    "labelX": 1517,
    "labelY": 889,
    "tags": {
      "building": "yes",
      "name": "\u4e2d\u897f\u5c4b\u30d1\u30fc\u30ad\u30f3\u30b0\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023521,
    "kind": "yes",
    "points": "1588,853 1590,812 1625,813 1623,855 1588,853",
    "labelX": 1607,
    "labelY": 833,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023524,
    "name": "\u30ab\u30fc\u30b5\u6075\u6bd4\u5bff\u58f1\u756a\u9928",
    "kind": "yes",
    "points": "1102,1381 1116,1345 1139,1353 1125,1389 1102,1381",
    "labelX": 1121,
    "labelY": 1367,
    "tags": {
      "building": "yes",
      "name": "\u30ab\u30fc\u30b5\u6075\u6bd4\u5bff\u58f1\u756a\u9928"
    }
  },
  {
    "osmId": 218023528,
    "kind": "yes",
    "points": "1031,1365 1056,1369 1052,1398 1027,1394 1031,1365",
    "labelX": 1042,
    "labelY": 1382,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023529,
    "kind": "yes",
    "points": "923,1324 945,1319 950,1339 927,1344 923,1324",
    "labelX": 936,
    "labelY": 1332,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023530,
    "kind": "yes",
    "points": "1908,796 1931,796 1931,821 1908,820 1908,796",
    "labelX": 1920,
    "labelY": 808,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023532,
    "name": "\u6c60\u7530\u8056\u5fb3Is\u30d3\u30eb",
    "kind": "yes",
    "points": "990,1431 1021,1435 1020,1458 1009,1471 989,1477 990,1431",
    "labelX": 1006,
    "labelY": 1454,
    "tags": {
      "building": "yes",
      "name": "\u6c60\u7530\u8056\u5fb3Is\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023533,
    "name": "\u3048\u3073\u3059\u5927\u9ed2\u30d3\u30eb",
    "kind": "yes",
    "points": "930,1346 953,1340 965,1345 956,1384 947,1385 930,1346",
    "labelX": 950,
    "labelY": 1360,
    "tags": {
      "building": "yes",
      "name": "\u3048\u3073\u3059\u5927\u9ed2\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023534,
    "name": "KDX\u6075\u6bd4\u5bff\u30d3\u30eb",
    "kind": "yes",
    "points": "1034,1123 994,1112 1006,1059 1037,1059 1043,1084 1034,1123",
    "labelX": 1023,
    "labelY": 1087,
    "tags": {
      "building": "yes",
      "name": "KDX\u6075\u6bd4\u5bff\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023535,
    "name": "\u6075\u6bd4\u5bff\u30ac\u30fc\u30c7\u30f3",
    "kind": "yes",
    "points": "1031,1258 1045,1211 1080,1194 1127,1210 1108,1277 1031,1258",
    "labelX": 1078,
    "labelY": 1230,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30ac\u30fc\u30c7\u30f3"
    }
  },
  {
    "osmId": 218023537,
    "kind": "yes",
    "points": "2000,825 1999,796 2016,795 2028,803 2017,824 2000,825",
    "labelX": 2012,
    "labelY": 809,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023538,
    "kind": "yes",
    "points": "904,1282 920,1275 948,1279 947,1287 911,1300 904,1282",
    "labelX": 926,
    "labelY": 1285,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023539,
    "kind": "yes",
    "points": "1655,846 1734,854 1732,877 1697,873 1697,868 1654,863 1655,846",
    "labelX": 1695,
    "labelY": 864,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023540,
    "kind": "yes",
    "points": "1763,883 1786,884 1785,897 1777,897 1775,931 1760,930 1763,883",
    "labelX": 1774,
    "labelY": 904,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218023541,
    "name": "\u30b6\u30fb\u30d1\u30fc\u30af\u30cf\u30a6\u30b9\u6075\u6bd4\u5bff",
    "kind": "apartments",
    "points": "1462,892 1390,892 1392,853 1380,793 1468,792 1462,892",
    "labelX": 1418,
    "labelY": 844,
    "tags": {
      "building": "apartments",
      "name": "\u30b6\u30fb\u30d1\u30fc\u30af\u30cf\u30a6\u30b9\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218023543,
    "name": "\u30af\u30ec\u30b9\u30c8\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "908,1255 910,1241 902,1238 905,1191 957,1197 949,1260 908,1255",
    "labelX": 922,
    "labelY": 1230,
    "tags": {
      "building": "yes",
      "name": "\u30af\u30ec\u30b9\u30c8\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218023544,
    "name": "\u30b3\u30b9\u30bf\u30fb\u30c7\u30fb\u30d9\u30e9\u30ce",
    "kind": "yes",
    "points": "1473,918 1499,920 1527,923 1526,932 1490,947 1491,931 1472,927 1473,918",
    "labelX": 1497,
    "labelY": 928,
    "tags": {
      "building": "yes",
      "name": "\u30b3\u30b9\u30bf\u30fb\u30c7\u30fb\u30d9\u30e9\u30ce"
    }
  },
  {
    "osmId": 218023545,
    "name": "\u6075\u6bd4\u5bffMF\u30d3\u30eb",
    "kind": "yes",
    "points": "1123,1125 1165,1138 1150,1188 1106,1175 1107,1170 1065,1158 1088,1083 1132,1096 1123,1125",
    "labelX": 1117,
    "labelY": 1142,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bffMF\u30d3\u30eb"
    }
  },
  {
    "osmId": 218023546,
    "name": "\u30af\u30ec\u30f4\u30a3\u30a2\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "947,1156 952,1080 969,1082 971,1048 994,1050 992,1089 984,1088 979,1158 947,1156",
    "labelX": 974,
    "labelY": 1094,
    "tags": {
      "building": "yes",
      "name": "\u30af\u30ec\u30f4\u30a3\u30a2\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218023547,
    "name": "\u30b0\u30e9\u30f3\u30c9\u30e1\u30be\u30f3\u6075\u6bd4\u5bff\u306e\u675c\u30d5\u30ed\u30f3\u30c8\u30ec\u30b8\u30c7\u30f3\u30b9",
    "kind": "apartments",
    "points": "1676,1316 1675,1305 1669,1306 1662,1253 1668,1253 1666,1243 1695,1239 1704,1312 1676,1316",
    "labelX": 1677,
    "labelY": 1278,
    "tags": {
      "building": "apartments",
      "name": "\u30b0\u30e9\u30f3\u30c9\u30e1\u30be\u30f3\u6075\u6bd4\u5bff\u306e\u675c\u30d5\u30ed\u30f3\u30c8\u30ec\u30b8\u30c7\u30f3\u30b9"
    }
  },
  {
    "osmId": 218092607,
    "name": "\u6075\u6bd4\u5bff\uff29\uff33\u30d3\u30eb",
    "kind": "yes",
    "points": "1065,788 1041,790 1044,774 1012,769 1007,788 1002,786 1001,791 992,789 992,792 976,788 994,730 1016,736 1016,736 1070,744 1065,788",
    "labelX": 1016,
    "labelY": 772,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\uff29\uff33\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092608,
    "name": "MOROTO BUILDING 2",
    "kind": "yes",
    "points": "784,952 843,920 855,943 876,933 884,948 890,947 905,974 859,998 840,1001 822,991 805,978 784,952",
    "labelX": 851,
    "labelY": 962,
    "tags": {
      "building": "yes",
      "name": "\u8af8\u6238\u30d3\u30eb2",
      "name:en": "MOROTO BUILDING 2"
    }
  },
  {
    "osmId": 218092609,
    "name": "\u4f4f\u53cb\u5316\u5b66\u6075\u6bd4\u5bff\u5bee",
    "kind": "yes",
    "points": "1233,1348 1256,1354 1250,1380 1196,1366 1208,1322 1212,1323 1217,1302 1279,1318 1273,1339 1227,1327 1226,1332 1236,1334 1233,1348",
    "labelX": 1234,
    "labelY": 1337,
    "tags": {
      "building": "yes",
      "name": "\u4f4f\u53cb\u5316\u5b66\u6075\u6bd4\u5bff\u5bee"
    }
  },
  {
    "osmId": 218092610,
    "kind": "yes",
    "points": "1730,324 1728,297 1720,297 1711,166 1745,164 1748,209 1822,205 1824,250 1737,254 1740,288 1842,282 1844,317 1730,324",
    "labelX": 1766,
    "labelY": 254,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092611,
    "name": "\u30a8\u30d5\u30fb\u30cb\u30c3\u30bb\u30a4\u6075\u6bd4\u5bff\u30d3\u30eb",
    "kind": "yes",
    "points": "599,152 569,117 584,105 572,91 584,81 596,95 624,70 699,158 644,205 642,202 620,221 599,197 610,188 587,163 599,152",
    "labelX": 609,
    "labelY": 146,
    "tags": {
      "building": "yes",
      "name": "\u30a8\u30d5\u30fb\u30cb\u30c3\u30bb\u30a4\u6075\u6bd4\u5bff\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092612,
    "kind": "yes",
    "points": "1011,163 1025,145 1016,139 1007,133 1012,127 1008,124 1017,114 1027,103 1049,121 1068,96 1061,91 1071,78 1065,73 1071,67 1077,71 1081,65 1090,73 1096,68 1108,77 1097,93 1102,98 1091,112 1095,115 1087,127 1091,130 1083,140 1088,145 1082,152 1086,157 1056,196 1039,188 1027,178 1028,176 1011,163",
    "labelX": 1061,
    "labelY": 119,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092613,
    "kind": "apartments",
    "points": "1475,747 1475,715 1495,715 1495,722 1527,722 1528,727 1534,727 1535,748 1475,747",
    "labelX": 1508,
    "labelY": 728,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 218092614,
    "name": "\u671d\u65e5\u751f\u547d\u6075\u6bd4\u5bff\u30d3\u30eb",
    "kind": "yes",
    "points": "856,609 873,547 923,560 905,623 856,609",
    "labelX": 889,
    "labelY": 585,
    "tags": {
      "building": "yes",
      "name": "\u671d\u65e5\u751f\u547d\u6075\u6bd4\u5bff\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092615,
    "name": "\u30d5\u30b8\u30ad\u30ab\u30a4\u5e83\u5c3e\u30d3\u30eb",
    "kind": "yes",
    "points": "1149,445 1166,447 1218,452 1213,501 1144,494 1149,445",
    "labelX": 1178,
    "labelY": 468,
    "tags": {
      "building": "yes",
      "name": "\u30d5\u30b8\u30ad\u30ab\u30a4\u5e83\u5c3e\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092616,
    "kind": "yes",
    "points": "549,245 577,234 584,251 556,262 549,245",
    "labelX": 567,
    "labelY": 248,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092617,
    "kind": "yes",
    "points": "1066,404 1096,412 1092,428 1062,420 1066,404",
    "labelX": 1079,
    "labelY": 416,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092618,
    "kind": "yes",
    "points": "1264,195 1281,191 1288,221 1271,225 1264,195",
    "labelX": 1276,
    "labelY": 208,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092619,
    "kind": "yes",
    "points": "1130,346 1131,329 1147,330 1146,349 1130,346",
    "labelX": 1139,
    "labelY": 339,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092620,
    "name": "\u6075\u6bd4\u5bff\u30d3\u30eb",
    "kind": "yes",
    "points": "1601,1216 1629,1221 1626,1238 1598,1233 1601,1216",
    "labelX": 1614,
    "labelY": 1227,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092621,
    "kind": "yes",
    "points": "589,253 646,299 630,322 559,265 589,253",
    "labelX": 606,
    "labelY": 285,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092622,
    "kind": "yes",
    "points": "1068,626 1091,630 1088,643 1066,638 1068,626",
    "labelX": 1078,
    "labelY": 634,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092623,
    "kind": "yes",
    "points": "799,833 837,799 845,808 807,842 799,833",
    "labelX": 822,
    "labelY": 821,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092624,
    "kind": "yes",
    "points": "1722,480 1810,464 1813,483 1725,499 1722,480",
    "labelX": 1768,
    "labelY": 482,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092625,
    "kind": "yes",
    "points": "446,144 479,136 486,160 453,169 446,144",
    "labelX": 466,
    "labelY": 152,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092626,
    "kind": "yes",
    "points": "1041,429 1046,404 1062,408 1057,432 1041,429",
    "labelX": 1052,
    "labelY": 418,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092627,
    "kind": "yes",
    "points": "1149,351 1150,329 1165,330 1164,353 1149,351",
    "labelX": 1157,
    "labelY": 341,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092628,
    "name": "Tokyu Real Estate Ebisu Building",
    "kind": "yes",
    "points": "1422,747 1428,608 1477,611 1474,748 1422,747",
    "labelX": 1450,
    "labelY": 679,
    "tags": {
      "building": "yes",
      "name": "\u6771\u6025\u4e0d\u52d5\u7523\u6075\u6bd4\u5bff\u30d3\u30eb",
      "name:en": "Tokyu Real Estate Ebisu Building"
    }
  },
  {
    "osmId": 218092629,
    "kind": "yes",
    "points": "1040,718 1074,723 1071,741 1038,737 1040,718",
    "labelX": 1056,
    "labelY": 730,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092630,
    "name": "\u6075\u6bd4\u5bff\u30a4\u30fc\u30b9\u30c8\u30d3\u30eb",
    "kind": "office",
    "points": "1343,511 1349,473 1495,495 1489,534 1393,519 1394,511 1378,509 1378,516 1343,511",
    "labelX": 1402,
    "labelY": 509,
    "tags": {
      "building": "office",
      "name": "\u6075\u6bd4\u5bff\u30a4\u30fc\u30b9\u30c8\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092631,
    "kind": "yes",
    "points": "1030,632 1084,645 1080,662 1026,649 1030,632",
    "labelX": 1055,
    "labelY": 647,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092632,
    "kind": "yes",
    "points": "809,842 845,810 851,817 815,849 809,842",
    "labelX": 830,
    "labelY": 830,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092633,
    "kind": "apartments",
    "points": "775,257 792,260 788,288 769,282 775,257",
    "labelX": 781,
    "labelY": 272,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 218092634,
    "kind": "yes",
    "points": "453,175 488,161 494,176 458,189 453,175",
    "labelX": 473,
    "labelY": 175,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092635,
    "kind": "yes",
    "points": "946,424 959,375 980,380 968,429 946,424",
    "labelX": 963,
    "labelY": 402,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092636,
    "kind": "yes",
    "points": "1352,301 1363,238 1383,241 1372,305 1352,301",
    "labelX": 1368,
    "labelY": 271,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092637,
    "kind": "yes",
    "points": "1199,264 1228,263 1230,292 1201,293 1199,264",
    "labelX": 1215,
    "labelY": 278,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092638,
    "kind": "yes",
    "points": "1495,534 1498,504 1515,505 1512,536 1495,534",
    "labelX": 1505,
    "labelY": 520,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092639,
    "kind": "office",
    "points": "728,222 734,215 774,245 771,256 728,222",
    "labelX": 752,
    "labelY": 235,
    "tags": {
      "building": "office"
    }
  },
  {
    "osmId": 218092640,
    "kind": "yes",
    "points": "1756,402 1749,353 1774,349 1781,399 1756,402",
    "labelX": 1765,
    "labelY": 376,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092641,
    "kind": "yes",
    "points": "1389,231 1409,235 1404,265 1383,261 1389,231",
    "labelX": 1396,
    "labelY": 248,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092642,
    "kind": "yes",
    "points": "1565,198 1618,188 1627,242 1575,251 1565,198",
    "labelX": 1596,
    "labelY": 220,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092643,
    "name": "\u660e\u548c\u30cb\u30e5\u30fc\u30de\u30f3\u30b7\u30e7\u30f3",
    "kind": "yes",
    "points": "1446,1230 1448,1216 1475,1220 1474,1235 1446,1230",
    "labelX": 1461,
    "labelY": 1225,
    "tags": {
      "building": "yes",
      "name": "\u660e\u548c\u30cb\u30e5\u30fc\u30de\u30f3\u30b7\u30e7\u30f3"
    }
  },
  {
    "osmId": 218092644,
    "name": "\u30d9\u30eb\u30b3\u30fc\u30dd",
    "kind": "yes",
    "points": "1514,1202 1527,1204 1523,1227 1510,1224 1514,1202",
    "labelX": 1519,
    "labelY": 1214,
    "tags": {
      "building": "yes",
      "name": "\u30d9\u30eb\u30b3\u30fc\u30dd"
    }
  },
  {
    "osmId": 218092645,
    "kind": "yes",
    "points": "1574,273 1645,262 1652,311 1582,321 1574,273",
    "labelX": 1613,
    "labelY": 292,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092646,
    "kind": "yes",
    "points": "1139,246 1139,210 1158,210 1158,246 1139,246",
    "labelX": 1149,
    "labelY": 228,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092647,
    "kind": "yes",
    "points": "517,179 503,135 538,124 552,168 517,179",
    "labelX": 528,
    "labelY": 152,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092648,
    "kind": "yes",
    "points": "1013,680 1021,652 1033,655 1025,683 1013,680",
    "labelX": 1023,
    "labelY": 668,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092649,
    "kind": "yes",
    "points": "434,284 485,249 501,273 450,308 434,284",
    "labelX": 468,
    "labelY": 279,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092651,
    "kind": "yes",
    "points": "1480,1219 1508,1225 1505,1241 1476,1235 1480,1219",
    "labelX": 1492,
    "labelY": 1230,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092652,
    "kind": "yes",
    "points": "1555,544 1558,512 1575,513 1572,546 1555,544",
    "labelX": 1565,
    "labelY": 529,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092653,
    "name": "\u5171\u540c\u30d3\u30eb",
    "kind": "yes",
    "points": "672,699 705,667 715,679 701,713 672,699",
    "labelX": 698,
    "labelY": 690,
    "tags": {
      "building": "yes",
      "name": "\u5171\u540c\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092654,
    "kind": "yes",
    "points": "1164,186 1195,182 1196,195 1166,199 1164,186",
    "labelX": 1180,
    "labelY": 191,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092655,
    "kind": "yes",
    "points": "521,186 551,175 565,213 535,223 521,186",
    "labelX": 543,
    "labelY": 199,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092656,
    "kind": "yes",
    "points": "775,797 809,768 821,783 787,811 775,797",
    "labelX": 798,
    "labelY": 790,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092657,
    "kind": "yes",
    "points": "1244,508 1250,457 1270,460 1263,510 1244,508",
    "labelX": 1257,
    "labelY": 484,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092658,
    "kind": "yes",
    "points": "1108,336 1110,304 1128,305 1127,337 1108,336",
    "labelX": 1118,
    "labelY": 321,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092659,
    "kind": "yes",
    "points": "1565,497 1589,497 1589,509 1565,509 1565,497",
    "labelX": 1577,
    "labelY": 503,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092660,
    "name": "\u4e09\u666f8\u30d3\u30eb",
    "kind": "yes",
    "points": "675,703 699,714 694,727 672,718 675,703",
    "labelX": 685,
    "labelY": 716,
    "tags": {
      "building": "yes",
      "name": "\u4e09\u666f8\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092661,
    "kind": "yes",
    "points": "1541,760 1541,702 1558,702 1558,760 1541,760",
    "labelX": 1550,
    "labelY": 731,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092662,
    "kind": "office",
    "points": "792,826 828,793 834,799 797,832 792,826",
    "labelX": 813,
    "labelY": 813,
    "tags": {
      "building": "office"
    }
  },
  {
    "osmId": 218092663,
    "kind": "yes",
    "points": "1651,532 1702,526 1704,550 1654,555 1651,532",
    "labelX": 1678,
    "labelY": 541,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092664,
    "kind": "yes",
    "points": "461,196 494,179 507,218 481,232 461,196",
    "labelX": 486,
    "labelY": 206,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092665,
    "kind": "yes",
    "points": "1006,390 1039,399 1034,419 1001,411 1006,390",
    "labelX": 1020,
    "labelY": 405,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092666,
    "kind": "yes",
    "points": "1218,502 1223,454 1247,456 1243,504 1218,502",
    "labelX": 1233,
    "labelY": 479,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092668,
    "name": "\u30cf\u30fc\u30d9\u30b9\u30c8\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1563,1205 1579,1208 1575,1230 1559,1227 1563,1205",
    "labelX": 1569,
    "labelY": 1218,
    "tags": {
      "building": "yes",
      "name": "\u30cf\u30fc\u30d9\u30b9\u30c8\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218092669,
    "kind": "yes",
    "points": "1235,1235 1260,1242 1255,1261 1230,1255 1235,1235",
    "labelX": 1245,
    "labelY": 1248,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092670,
    "kind": "yes",
    "points": "1560,763 1560,735 1577,734 1578,763 1560,763",
    "labelX": 1569,
    "labelY": 749,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092671,
    "kind": "yes",
    "points": "749,51 810,2 839,38 778,87 749,51",
    "labelX": 794,
    "labelY": 45,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092672,
    "name": "\u30d4\u30e5\u30a2\u30fb\u30c6\u30f3\u30d7\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1352,1393 1361,1362 1389,1369 1381,1400 1352,1393",
    "labelX": 1371,
    "labelY": 1381,
    "tags": {
      "building": "yes",
      "name": "\u30d4\u30e5\u30a2\u30fb\u30c6\u30f3\u30d7\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218092673,
    "name": "\u77f3\u6e21\u30d3\u30eb",
    "kind": "yes",
    "points": "1152,798 1148,763 1160,762 1161,766 1166,766 1169,796 1152,798",
    "labelX": 1159,
    "labelY": 775,
    "tags": {
      "building": "yes",
      "name": "\u77f3\u6e21\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092674,
    "kind": "yes",
    "points": "1327,317 1336,261 1352,263 1343,320 1327,317",
    "labelX": 1340,
    "labelY": 290,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092675,
    "kind": "yes",
    "points": "1582,1211 1598,1214 1595,1233 1578,1230 1582,1211",
    "labelX": 1588,
    "labelY": 1222,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092676,
    "kind": "yes",
    "points": "1716,411 1715,362 1745,361 1745,408 1716,411",
    "labelX": 1730,
    "labelY": 386,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092677,
    "kind": "yes",
    "points": "764,106 805,75 826,103 785,134 764,106",
    "labelX": 795,
    "labelY": 105,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092678,
    "kind": "apartments",
    "points": "587,380 630,351 650,380 606,409 587,380",
    "labelX": 618,
    "labelY": 380,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 218092679,
    "kind": "yes",
    "points": "862,830 882,854 838,879 829,858 862,830",
    "labelX": 853,
    "labelY": 855,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092680,
    "kind": "yes",
    "points": "1100,413 1125,420 1120,435 1095,428 1100,413",
    "labelX": 1110,
    "labelY": 424,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092681,
    "kind": "apartments",
    "points": "637,319 659,303 694,345 671,365 637,319",
    "labelX": 665,
    "labelY": 333,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 218092682,
    "kind": "yes",
    "points": "1061,662 1081,664 1076,704 1056,701 1061,662",
    "labelX": 1069,
    "labelY": 683,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092683,
    "kind": "yes",
    "points": "482,235 504,222 516,241 494,255 482,235",
    "labelX": 499,
    "labelY": 238,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092684,
    "kind": "yes",
    "points": "936,418 947,373 958,376 947,421 936,418",
    "labelX": 947,
    "labelY": 397,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092685,
    "kind": "yes",
    "points": "1064,423 1108,436 1101,461 1056,448 1064,423",
    "labelX": 1082,
    "labelY": 442,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092686,
    "name": "\u6075\u6bd4\u5bff\u30d1\u30eb\u30af\u30d3\u30eb",
    "kind": "yes",
    "points": "1052,619 1059,577 1096,583 1088,626 1052,619",
    "labelX": 1074,
    "labelY": 601,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30d1\u30eb\u30af\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092687,
    "kind": "yes",
    "points": "1514,535 1516,510 1531,511 1529,536 1514,535",
    "labelX": 1523,
    "labelY": 523,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092688,
    "kind": "yes",
    "points": "1111,245 1110,181 1135,181 1137,245 1111,245",
    "labelX": 1123,
    "labelY": 213,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092689,
    "kind": "yes",
    "points": "1028,693 1033,657 1059,660 1054,696 1028,693",
    "labelX": 1044,
    "labelY": 677,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092690,
    "name": "\u6075\u6bd4\u5bff\u30ec\u30b8\u30c7\u30f3\u30b9\u58f1\u756a\u9928",
    "kind": "apartments",
    "points": "700,202 716,178 730,187 715,211 700,202",
    "labelX": 715,
    "labelY": 195,
    "tags": {
      "building": "apartments",
      "name": "\u6075\u6bd4\u5bff\u30ec\u30b8\u30c7\u30f3\u30b9\u58f1\u756a\u9928"
    }
  },
  {
    "osmId": 218092691,
    "kind": "yes",
    "points": "493,258 515,244 524,257 502,272 493,258",
    "labelX": 509,
    "labelY": 258,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092692,
    "kind": "yes",
    "points": "1621,190 1689,176 1700,229 1632,243 1621,190",
    "labelX": 1661,
    "labelY": 210,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092693,
    "kind": "yes",
    "points": "1268,499 1271,461 1306,464 1304,501 1268,499",
    "labelX": 1287,
    "labelY": 481,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092694,
    "name": "BELL THE EBISU",
    "kind": "yes",
    "points": "576,59 598,41 610,57 589,74 576,59",
    "labelX": 593,
    "labelY": 58,
    "tags": {
      "building": "yes",
      "name": "BELL THE EBISU"
    }
  },
  {
    "osmId": 218092695,
    "kind": "yes",
    "points": "1533,537 1534,511 1553,511 1552,538 1533,537",
    "labelX": 1543,
    "labelY": 524,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092696,
    "kind": "yes",
    "points": "734,766 715,744 736,691 774,732 734,766",
    "labelX": 740,
    "labelY": 733,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092697,
    "name": "\u30b5\u30f3\u30d1\u30fc\u30af\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "622,244 658,201 681,220 646,263 622,244",
    "labelX": 652,
    "labelY": 232,
    "tags": {
      "building": "yes",
      "name": "\u30b5\u30f3\u30d1\u30fc\u30af\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218092698,
    "kind": "yes",
    "points": "899,398 908,361 917,363 908,400 899,398",
    "labelX": 908,
    "labelY": 381,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092699,
    "kind": "yes",
    "points": "1236,324 1264,325 1269,331 1267,382 1235,374 1236,324",
    "labelX": 1254,
    "labelY": 347,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092700,
    "kind": "yes",
    "points": "1314,511 1317,471 1342,473 1339,513 1314,511",
    "labelX": 1328,
    "labelY": 492,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092701,
    "kind": "yes",
    "points": "1532,1202 1543,1204 1538,1228 1528,1226 1532,1202",
    "labelX": 1535,
    "labelY": 1215,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092702,
    "kind": "yes",
    "points": "485,50 518,37 533,83 503,95 485,50",
    "labelX": 510,
    "labelY": 66,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092703,
    "kind": "yes",
    "points": "708,828 733,795 746,804 723,839 708,828",
    "labelX": 728,
    "labelY": 817,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092704,
    "kind": "yes",
    "points": "900,392 894,391 896,357 907,360 900,392",
    "labelX": 899,
    "labelY": 375,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092705,
    "name": "K2\u30d3\u30eb",
    "kind": "yes",
    "points": "1491,1218 1495,1195 1512,1198 1508,1221 1491,1218",
    "labelX": 1502,
    "labelY": 1208,
    "tags": {
      "building": "yes",
      "name": "K2\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092706,
    "kind": "yes",
    "points": "1276,343 1307,348 1301,389 1284,389 1270,384 1276,343",
    "labelX": 1288,
    "labelY": 371,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092708,
    "kind": "yes",
    "points": "1271,1274 1292,1284 1287,1297 1264,1291 1271,1274",
    "labelX": 1279,
    "labelY": 1287,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092709,
    "kind": "yes",
    "points": "737,770 776,733 805,764 766,801 737,770",
    "labelX": 771,
    "labelY": 767,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092710,
    "kind": "yes",
    "points": "1221,236 1215,197 1242,192 1249,232 1221,236",
    "labelX": 1232,
    "labelY": 214,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092711,
    "kind": "yes",
    "points": "1515,330 1529,275 1551,285 1556,321 1546,331 1515,330",
    "labelX": 1539,
    "labelY": 308,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092712,
    "kind": "yes",
    "points": "1245,1260 1270,1270 1262,1290 1245,1278 1241,1269 1245,1260",
    "labelX": 1253,
    "labelY": 1273,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092713,
    "kind": "yes",
    "points": "1479,414 1480,396 1499,374 1520,376 1515,419 1479,414",
    "labelX": 1499,
    "labelY": 396,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092714,
    "name": "\u7b2c2\u4f0a\u85e4\u30d3\u30eb",
    "kind": "yes",
    "points": "1000,797 1064,789 1066,805 1064,809 1002,817 1000,797",
    "labelX": 1039,
    "labelY": 803,
    "tags": {
      "building": "yes",
      "name": "\u7b2c2\u4f0a\u85e4\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092715,
    "name": "\u6771\u6d0b\u30d3\u30eb",
    "kind": "yes",
    "points": "647,684 692,645 708,662 666,699 652,691 647,684",
    "labelX": 673,
    "labelY": 676,
    "tags": {
      "building": "yes",
      "name": "\u6771\u6d0b\u30d3\u30eb"
    }
  },
  {
    "osmId": 218092716,
    "kind": "yes",
    "points": "881,744 896,696 924,699 932,707 918,755 881,744",
    "labelX": 910,
    "labelY": 720,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092717,
    "name": "\u30b9\u30ab\u30a4\u6075\u6bd4\u5bff\u30d3\u30eb\u30c7\u30a3\u30f3\u30b0",
    "kind": "yes",
    "points": "648,705 679,750 645,773 617,732 635,720 648,705",
    "labelX": 645,
    "labelY": 736,
    "tags": {
      "building": "yes",
      "name": "\u30b9\u30ab\u30a4\u6075\u6bd4\u5bff\u30d3\u30eb\u30c7\u30a3\u30f3\u30b0"
    }
  },
  {
    "osmId": 218092718,
    "kind": "yes",
    "points": "1601,500 1673,496 1674,523 1646,526 1646,545 1604,548 1601,500",
    "labelX": 1641,
    "labelY": 523,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092719,
    "kind": "yes",
    "points": "1251,230 1245,199 1262,196 1263,203 1259,204 1263,228 1251,230",
    "labelX": 1257,
    "labelY": 210,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092720,
    "kind": "yes",
    "points": "1309,1396 1328,1328 1355,1335 1346,1366 1353,1368 1342,1406 1309,1396",
    "labelX": 1339,
    "labelY": 1367,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092721,
    "kind": "yes",
    "points": "1206,1288 1213,1231 1230,1233 1226,1267 1240,1271 1241,1292 1206,1288",
    "labelX": 1226,
    "labelY": 1264,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092722,
    "kind": "yes",
    "points": "1313,391 1324,335 1344,338 1348,315 1359,317 1344,397 1313,391",
    "labelX": 1339,
    "labelY": 349,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092723,
    "kind": "yes",
    "points": "1599,1237 1635,1244 1631,1267 1600,1262 1601,1253 1597,1251 1599,1237",
    "labelX": 1611,
    "labelY": 1252,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092724,
    "kind": "yes",
    "points": "1166,356 1167,330 1174,330 1173,348 1179,348 1179,358 1166,356",
    "labelX": 1173,
    "labelY": 345,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092725,
    "kind": "yes",
    "points": "414,254 468,226 477,243 438,263 443,274 428,281 414,254",
    "labelX": 445,
    "labelY": 257,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092726,
    "name": "\u30e1\u30be\u30f3\u30c9\u30ed\u30ef\u30a4\u30e4\u30eb",
    "kind": "yes",
    "points": "1681,1381 1699,1402 1686,1412 1682,1407 1632,1447 1619,1431 1681,1381",
    "labelX": 1667,
    "labelY": 1413,
    "tags": {
      "building": "yes",
      "name": "\u30e1\u30be\u30f3\u30c9\u30ed\u30ef\u30a4\u30e4\u30eb"
    }
  },
  {
    "osmId": 218092727,
    "name": "\u6075\u6bd4\u5bff\u30a2\u30fc\u30d0\u30f3\u30cf\u30a6\u30b9",
    "kind": "apartments",
    "points": "859,652 866,629 916,643 937,566 959,573 932,672 859,652",
    "labelX": 912,
    "labelY": 623,
    "tags": {
      "building": "apartments",
      "name": "\u6075\u6bd4\u5bff\u30a2\u30fc\u30d0\u30f3\u30cf\u30a6\u30b9"
    }
  },
  {
    "osmId": 218092728,
    "name": "\u30b7\u30eb\u30af\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1029,630 1045,573 1057,577 1044,623 1064,626 1062,637 1029,630",
    "labelX": 1050,
    "labelY": 611,
    "tags": {
      "building": "yes",
      "name": "\u30b7\u30eb\u30af\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218092729,
    "kind": "yes",
    "points": "533,372 586,322 606,344 543,402 518,377 528,367 533,372",
    "labelX": 552,
    "labelY": 364,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092730,
    "kind": "yes",
    "points": "897,413 900,400 908,402 919,365 945,371 934,421 897,413",
    "labelX": 917,
    "labelY": 395,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092731,
    "kind": "yes",
    "points": "468,318 502,296 525,319 510,332 519,344 502,359 468,318",
    "labelX": 504,
    "labelY": 328,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092732,
    "kind": "yes",
    "points": "687,244 715,264 698,288 663,262 703,207 710,212 687,244",
    "labelX": 696,
    "labelY": 246,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092734,
    "kind": "yes",
    "points": "1658,344 1690,339 1705,413 1661,421 1656,391 1665,387 1658,344",
    "labelX": 1673,
    "labelY": 383,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092735,
    "kind": "yes",
    "points": "972,428 980,388 1002,392 998,413 1034,422 1025,457 996,448 972,428",
    "labelX": 1001,
    "labelY": 421,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092736,
    "kind": "yes",
    "points": "1162,110 1274,155 1264,180 1257,186 1239,180 1242,171 1153,135 1162,110",
    "labelX": 1227,
    "labelY": 160,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092737,
    "kind": "yes",
    "points": "669,712 672,713 669,721 695,729 688,743 685,746 678,744 680,738 673,736 650,705 654,696 672,704 669,712",
    "labelX": 674,
    "labelY": 724,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092738,
    "kind": "apartments",
    "points": "1066,457 1112,466 1105,502 1081,497 1083,488 1074,487 1072,495 1059,493 1066,457",
    "labelX": 1082,
    "labelY": 486,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 218092739,
    "kind": "yes",
    "points": "818,90 840,75 843,79 855,70 862,80 849,89 850,89 828,104 818,90",
    "labelX": 843,
    "labelY": 85,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092740,
    "kind": "yes",
    "points": "1381,1328 1447,1328 1447,1353 1428,1354 1428,1379 1401,1379 1401,1354 1381,1354 1381,1328",
    "labelX": 1414,
    "labelY": 1354,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092741,
    "kind": "yes",
    "points": "516,337 531,321 512,301 537,277 577,316 528,367 518,377 516,380 503,367 525,345 516,337",
    "labelX": 526,
    "labelY": 339,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092742,
    "name": "\u30ea\u30e5\u30a8\u30eb\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1436,1213 1434,1229 1410,1225 1417,1181 1438,1184 1436,1198 1446,1200 1444,1214 1436,1213",
    "labelX": 1433,
    "labelY": 1206,
    "tags": {
      "building": "yes",
      "name": "\u30ea\u30e5\u30a8\u30eb\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 218092743,
    "kind": "yes",
    "points": "1107,299 1104,331 1076,328 1079,295 1074,294 1077,270 1131,278 1127,302 1107,299",
    "labelX": 1097,
    "labelY": 300,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218092744,
    "name": "\u30b0\u30ed\u30ea\u30a2\u30b9\u30de\u30f3\u30b7\u30e7\u30f3",
    "kind": "yes",
    "points": "1650,1385 1585,1428 1568,1402 1633,1359 1632,1358 1651,1345 1676,1381 1656,1394 1650,1385",
    "labelX": 1631,
    "labelY": 1382,
    "tags": {
      "building": "yes",
      "name": "\u30b0\u30ed\u30ea\u30a2\u30b9\u30de\u30f3\u30b7\u30e7\u30f3"
    }
  },
  {
    "osmId": 218098450,
    "kind": "yes",
    "points": "1877,339 1883,377 1854,382 1848,344 1877,339",
    "labelX": 1866,
    "labelY": 361,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218098494,
    "kind": "yes",
    "points": "1906,330 1914,373 1888,378 1880,335 1906,330",
    "labelX": 1897,
    "labelY": 354,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218098545,
    "kind": "yes",
    "points": "1837,357 1843,388 1832,389 1827,359 1837,357",
    "labelX": 1835,
    "labelY": 373,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218098578,
    "kind": "yes",
    "points": "1907,321 1924,318 1933,369 1916,372 1907,321",
    "labelX": 1920,
    "labelY": 345,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218098579,
    "kind": "yes",
    "points": "1988,359 1981,328 1999,324 2006,355 1988,359",
    "labelX": 1994,
    "labelY": 342,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218098580,
    "kind": "yes",
    "points": "1998,428 2020,423 2024,441 2001,445 1998,428",
    "labelX": 2011,
    "labelY": 434,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218098617,
    "kind": "yes",
    "points": "1984,360 1974,361 1960,350 1957,330 1979,327 1984,360",
    "labelX": 1971,
    "labelY": 346,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218098626,
    "kind": "yes",
    "points": "2056,453 2012,460 2010,448 2027,445 2023,422 2052,417 2056,453",
    "labelX": 2030,
    "labelY": 441,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218098639,
    "kind": "yes",
    "points": "1815,334 1837,330 1841,349 1823,352 1829,387 1785,395 1777,349 1816,342 1815,334",
    "labelX": 1815,
    "labelY": 355,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254394,
    "kind": "yes",
    "points": "1006,229 1037,229 1037,254 1006,254 1006,229",
    "labelX": 1022,
    "labelY": 242,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254407,
    "kind": "yes",
    "points": "957,234 961,194 994,198 989,237 957,234",
    "labelX": 975,
    "labelY": 216,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254414,
    "kind": "yes",
    "points": "929,232 949,230 950,239 930,241 929,232",
    "labelX": 940,
    "labelY": 236,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254430,
    "kind": "yes",
    "points": "924,247 949,244 952,262 931,265 924,247",
    "labelX": 939,
    "labelY": 255,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254438,
    "kind": "yes",
    "points": "1076,207 1106,206 1106,240 1076,240 1076,207",
    "labelX": 1091,
    "labelY": 223,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254454,
    "kind": "yes",
    "points": "965,148 986,105 1005,115 984,157 965,148",
    "labelX": 985,
    "labelY": 131,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254475,
    "kind": "yes",
    "points": "960,157 994,160 991,188 957,185 960,157",
    "labelX": 976,
    "labelY": 173,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254485,
    "kind": "yes",
    "points": "952,242 970,241 971,260 953,261 952,242",
    "labelX": 962,
    "labelY": 251,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254504,
    "kind": "yes",
    "points": "919,73 910,90 896,82 906,63 890,55 899,38 896,37 908,15 918,21 922,12 964,35 938,83 919,73",
    "labelX": 914,
    "labelY": 50,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254508,
    "kind": "yes",
    "points": "1048,232 1071,232 1071,257 1048,257 1048,232",
    "labelX": 1060,
    "labelY": 245,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254531,
    "kind": "yes",
    "points": "1021,314 1023,272 1065,274 1065,324 1021,314",
    "labelX": 1044,
    "labelY": 296,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254553,
    "kind": "yes",
    "points": "976,237 1002,238 1001,258 975,257 976,237",
    "labelX": 989,
    "labelY": 248,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254604,
    "kind": "yes",
    "points": "958,12 964,-11 987,-6 975,16 958,12",
    "labelX": 971,
    "labelY": 3,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254612,
    "kind": "yes",
    "points": "741,325 721,290 731,284 751,319 741,325",
    "labelX": 736,
    "labelY": 305,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254617,
    "kind": "yes",
    "points": "923,228 935,200 954,208 948,229 923,228",
    "labelX": 940,
    "labelY": 216,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254631,
    "kind": "yes",
    "points": "943,276 968,274 968,293 942,293 938,280 943,276",
    "labelX": 952,
    "labelY": 283,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254640,
    "kind": "yes",
    "points": "713,279 730,309 726,311 711,298 702,290 709,281 713,279",
    "labelX": 715,
    "labelY": 295,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254656,
    "kind": "yes",
    "points": "996,298 972,297 973,286 990,274 1009,274 1011,313 996,308 996,298",
    "labelX": 992,
    "labelY": 293,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218254664,
    "kind": "yes",
    "points": "732,284 740,280 743,284 750,281 753,286 782,293 781,297 751,316 732,284",
    "labelX": 754,
    "labelY": 290,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960139,
    "kind": "yes",
    "points": "1860,6 1852,7 1849,-14 1830,-11 1828,-32 1863,-37 1863,-31 1870,-33 1872,-19 1865,-18 1865,-16 1860,-15 1861,-6 1874,-8 1876,7 1861,9 1860,6",
    "labelX": 1859,
    "labelY": -13,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960150,
    "kind": "yes",
    "points": "1845,14 1874,10 1878,34 1851,38 1845,14",
    "labelX": 1862,
    "labelY": 24,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960158,
    "kind": "yes",
    "points": "1896,35 1942,29 1945,52 1900,59 1896,35",
    "labelX": 1921,
    "labelY": 44,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960160,
    "kind": "yes",
    "points": "1736,108 1755,98 1767,121 1749,131 1736,108",
    "labelX": 1752,
    "labelY": 115,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960164,
    "kind": "yes",
    "points": "1774,93 1791,90 1799,119 1782,118 1774,93",
    "labelX": 1787,
    "labelY": 105,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960166,
    "kind": "yes",
    "points": "1792,23 1821,12 1830,34 1801,45 1792,23",
    "labelX": 1811,
    "labelY": 29,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960197,
    "kind": "yes",
    "points": "1923,66 1944,63 1949,94 1928,97 1923,66",
    "labelX": 1936,
    "labelY": 80,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960205,
    "kind": "yes",
    "points": "1725,-15 1739,-20 1744,-4 1730,1 1725,-15",
    "labelX": 1735,
    "labelY": -9,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960228,
    "kind": "yes",
    "points": "1795,170 1792,150 1802,148 1806,168 1795,170",
    "labelX": 1799,
    "labelY": 159,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960243,
    "kind": "yes",
    "points": "1894,9 1889,-25 1936,-31 1941,2 1894,9",
    "labelX": 1915,
    "labelY": -11,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960287,
    "kind": "yes",
    "points": "1739,23 1788,2 1793,12 1744,33 1739,23",
    "labelX": 1766,
    "labelY": 18,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960293,
    "kind": "yes",
    "points": "1658,142 1686,132 1691,150 1663,155 1658,142",
    "labelX": 1675,
    "labelY": 145,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960301,
    "kind": "yes",
    "points": "1777,173 1775,150 1789,149 1791,172 1777,173",
    "labelX": 1783,
    "labelY": 161,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960318,
    "kind": "yes",
    "points": "1854,296 1873,295 1874,317 1856,318 1854,296",
    "labelX": 1864,
    "labelY": 307,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960321,
    "kind": "yes",
    "points": "1864,179 1857,144 1885,139 1892,174 1864,179",
    "labelX": 1875,
    "labelY": 159,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960330,
    "kind": "yes",
    "points": "1749,48 1773,37 1782,54 1757,66 1749,48",
    "labelX": 1765,
    "labelY": 51,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960336,
    "kind": "yes",
    "points": "1847,250 1867,247 1871,269 1850,272 1847,250",
    "labelX": 1859,
    "labelY": 260,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960340,
    "kind": "yes",
    "points": "1839,188 1836,143 1855,141 1859,186 1839,188",
    "labelX": 1847,
    "labelY": 165,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960346,
    "kind": "yes",
    "points": "1804,145 1828,141 1831,164 1808,168 1804,145",
    "labelX": 1818,
    "labelY": 155,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960353,
    "kind": "yes",
    "points": "1721,82 1742,72 1754,95 1732,106 1721,82",
    "labelX": 1737,
    "labelY": 89,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960374,
    "kind": "yes",
    "points": "1732,9 1781,-13 1787,0 1738,22 1732,9",
    "labelX": 1760,
    "labelY": 5,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960376,
    "kind": "yes",
    "points": "1862,41 1879,39 1882,64 1870,64 1862,41",
    "labelX": 1873,
    "labelY": 52,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960403,
    "kind": "yes",
    "points": "1798,98 1835,91 1839,115 1802,122 1798,98",
    "labelX": 1819,
    "labelY": 107,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960405,
    "kind": "yes",
    "points": "1901,70 1920,67 1925,101 1906,103 1901,70",
    "labelX": 1913,
    "labelY": 85,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960407,
    "kind": "yes",
    "points": "1795,0 1816,-7 1821,5 1799,13 1795,0",
    "labelX": 1808,
    "labelY": 3,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960419,
    "kind": "yes",
    "points": "1885,74 1888,104 1884,105 1874,76 1885,74",
    "labelX": 1883,
    "labelY": 90,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960466,
    "kind": "yes",
    "points": "1784,-15 1809,-26 1816,-9 1791,1 1784,-15",
    "labelX": 1800,
    "labelY": -12,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960510,
    "kind": "yes",
    "points": "1707,55 1722,48 1731,68 1716,75 1707,55",
    "labelX": 1719,
    "labelY": 62,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960512,
    "kind": "yes",
    "points": "1879,327 1877,313 1903,309 1906,323 1879,327",
    "labelX": 1891,
    "labelY": 318,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960569,
    "kind": "yes",
    "points": "1843,104 1868,96 1872,109 1845,113 1843,104",
    "labelX": 1857,
    "labelY": 106,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960576,
    "kind": "yes",
    "points": "1777,36 1789,31 1796,49 1784,54 1777,36",
    "labelX": 1787,
    "labelY": 43,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960633,
    "kind": "yes",
    "points": "2061,47 2058,22 2066,21 2065,13 2077,11 2082,44 2061,47",
    "labelX": 2068,
    "labelY": 26,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 218960661,
    "kind": "yes",
    "points": "1880,291 1871,240 1848,244 1842,208 1864,205 1862,194 1890,188 1909,286 1880,291",
    "labelX": 1871,
    "labelY": 232,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476543,
    "kind": "yes",
    "points": "1800,1689 1817,1688 1818,1709 1801,1710 1800,1689",
    "labelX": 1809,
    "labelY": 1699,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476545,
    "kind": "yes",
    "points": "1822,1718 1820,1688 1844,1686 1846,1716 1822,1718",
    "labelX": 1833,
    "labelY": 1702,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476547,
    "kind": "yes",
    "points": "1918,1674 1951,1670 1954,1699 1921,1703 1918,1674",
    "labelX": 1936,
    "labelY": 1687,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476548,
    "kind": "yes",
    "points": "1834,1736 1848,1734 1852,1762 1838,1764 1834,1736",
    "labelX": 1843,
    "labelY": 1749,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476549,
    "kind": "yes",
    "points": "1782,1752 1803,1749 1806,1768 1785,1771 1782,1752",
    "labelX": 1794,
    "labelY": 1760,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476550,
    "kind": "yes",
    "points": "1904,1701 1901,1678 1915,1676 1918,1699 1904,1701",
    "labelX": 1910,
    "labelY": 1689,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476551,
    "kind": "yes",
    "points": "1789,1774 1811,1771 1814,1790 1792,1793 1789,1774",
    "labelX": 1802,
    "labelY": 1782,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476552,
    "kind": "yes",
    "points": "1913,1827 1945,1826 1945,1846 1914,1847 1913,1827",
    "labelX": 1929,
    "labelY": 1837,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476553,
    "kind": "yes",
    "points": "1842,1795 1870,1792 1872,1814 1844,1817 1842,1795",
    "labelX": 1857,
    "labelY": 1805,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476554,
    "kind": "yes",
    "points": "1790,1861 1820,1857 1822,1868 1792,1872 1790,1861",
    "labelX": 1806,
    "labelY": 1865,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476555,
    "kind": "yes",
    "points": "1834,1947 1830,1902 1849,1900 1853,1946 1834,1947",
    "labelX": 1842,
    "labelY": 1924,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476556,
    "kind": "yes",
    "points": "1758,1718 1786,1717 1787,1728 1758,1733 1758,1718",
    "labelX": 1772,
    "labelY": 1724,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476557,
    "kind": "yes",
    "points": "1774,1690 1799,1689 1800,1713 1775,1715 1774,1690",
    "labelX": 1787,
    "labelY": 1702,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476558,
    "kind": "yes",
    "points": "1790,1717 1802,1715 1803,1726 1791,1727 1790,1717",
    "labelX": 1797,
    "labelY": 1721,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476560,
    "kind": "yes",
    "points": "1845,1688 1870,1683 1874,1703 1848,1707 1845,1688",
    "labelX": 1859,
    "labelY": 1695,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476561,
    "kind": "yes",
    "points": "1817,1741 1824,1740 1828,1766 1820,1767 1817,1741",
    "labelX": 1822,
    "labelY": 1754,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476562,
    "kind": "yes",
    "points": "1804,1736 1814,1735 1815,1742 1805,1743 1804,1736",
    "labelX": 1810,
    "labelY": 1739,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476563,
    "kind": "yes",
    "points": "1830,1831 1874,1826 1876,1851 1832,1856 1830,1831",
    "labelX": 1853,
    "labelY": 1841,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476564,
    "kind": "yes",
    "points": "1924,1791 1948,1790 1949,1812 1925,1813 1924,1791",
    "labelX": 1937,
    "labelY": 1802,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476565,
    "kind": "yes",
    "points": "1869,1753 1882,1753 1882,1761 1870,1762 1869,1753",
    "labelX": 1876,
    "labelY": 1757,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476566,
    "kind": "yes",
    "points": "1805,1809 1835,1806 1837,1827 1807,1830 1805,1809",
    "labelX": 1821,
    "labelY": 1818,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476567,
    "kind": "yes",
    "points": "1804,1873 1823,1870 1824,1883 1805,1885 1804,1873",
    "labelX": 1814,
    "labelY": 1878,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476568,
    "kind": "yes",
    "points": "1859,1926 1855,1893 1876,1891 1879,1924 1859,1926",
    "labelX": 1867,
    "labelY": 1909,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476569,
    "kind": "yes",
    "points": "1765,1692 1774,1692 1774,1699 1766,1699 1765,1692",
    "labelX": 1770,
    "labelY": 1696,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476571,
    "kind": "yes",
    "points": "1758,1714 1757,1700 1774,1700 1774,1714 1758,1714",
    "labelX": 1766,
    "labelY": 1707,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476572,
    "kind": "yes",
    "points": "1803,1711 1820,1710 1821,1723 1804,1724 1803,1711",
    "labelX": 1812,
    "labelY": 1717,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476573,
    "kind": "yes",
    "points": "1853,1758 1849,1732 1864,1729 1868,1756 1853,1758",
    "labelX": 1859,
    "labelY": 1744,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476574,
    "kind": "yes",
    "points": "1804,1744 1815,1742 1818,1766 1808,1767 1804,1744",
    "labelX": 1811,
    "labelY": 1755,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476575,
    "kind": "yes",
    "points": "1874,1680 1899,1676 1903,1708 1878,1712 1874,1680",
    "labelX": 1889,
    "labelY": 1694,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476576,
    "kind": "yes",
    "points": "1765,1776 1786,1775 1788,1793 1767,1795 1765,1776",
    "labelX": 1777,
    "labelY": 1785,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476577,
    "kind": "yes",
    "points": "1917,1849 1954,1847 1955,1866 1918,1868 1917,1849",
    "labelX": 1936,
    "labelY": 1858,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476578,
    "kind": "yes",
    "points": "1829,1764 1825,1737 1832,1736 1836,1763 1829,1764",
    "labelX": 1831,
    "labelY": 1750,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476579,
    "kind": "yes",
    "points": "1877,1793 1922,1790 1924,1815 1890,1817 1890,1822 1879,1823 1877,1793",
    "labelX": 1897,
    "labelY": 1810,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476580,
    "kind": "yes",
    "points": "1758,1743 1779,1740 1783,1770 1763,1774 1758,1743",
    "labelX": 1771,
    "labelY": 1757,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476581,
    "kind": "yes",
    "points": "1878,1833 1912,1831 1914,1857 1880,1859 1878,1833",
    "labelX": 1896,
    "labelY": 1845,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476582,
    "kind": "yes",
    "points": "1860,1931 1887,1928 1889,1942 1862,1945 1860,1931",
    "labelX": 1875,
    "labelY": 1937,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476583,
    "kind": "yes",
    "points": "1846,1765 1866,1763 1869,1786 1848,1788 1846,1765",
    "labelX": 1857,
    "labelY": 1776,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476584,
    "kind": "yes",
    "points": "1776,1835 1801,1832 1802,1849 1777,1851 1776,1835",
    "labelX": 1789,
    "labelY": 1842,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476585,
    "kind": "yes",
    "points": "1840,1864 1858,1862 1859,1875 1841,1877 1840,1864",
    "labelX": 1850,
    "labelY": 1870,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476586,
    "kind": "yes",
    "points": "1805,1832 1828,1830 1830,1853 1808,1856 1805,1832",
    "labelX": 1818,
    "labelY": 1843,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476587,
    "kind": "yes",
    "points": "1823,1865 1838,1863 1841,1878 1826,1880 1823,1865",
    "labelX": 1832,
    "labelY": 1872,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476589,
    "kind": "yes",
    "points": "1872,1780 1871,1763 1883,1763 1883,1756 1891,1755 1892,1762 1895,1762 1896,1779 1872,1780",
    "labelX": 1885,
    "labelY": 1765,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 219476590,
    "kind": "yes",
    "points": "1880,1726 1943,1714 1946,1729 1951,1742 1952,1757 1943,1782 1902,1782 1902,1737 1883,1741 1880,1726",
    "labelX": 1922,
    "labelY": 1746,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194366,
    "kind": "yes",
    "points": "1938,2387 1965,2377 1971,2393 1944,2403 1938,2387",
    "labelX": 1955,
    "labelY": 2390,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194367,
    "kind": "yes",
    "points": "1973,2210 1998,2199 2044,2257 1989,2283 1973,2210",
    "labelX": 2001,
    "labelY": 2237,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194377,
    "kind": "yes",
    "points": "2012,2431 2006,2419 2052,2396 2058,2408 2012,2431",
    "labelX": 2032,
    "labelY": 2414,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194378,
    "kind": "yes",
    "points": "2072,2349 2092,2342 2099,2364 2079,2370 2072,2349",
    "labelX": 2086,
    "labelY": 2356,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194380,
    "kind": "yes",
    "points": "2065,2417 2057,2398 2079,2389 2087,2408 2065,2417",
    "labelX": 2072,
    "labelY": 2403,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194383,
    "name": "Garden House",
    "kind": "yes",
    "points": "1946,2408 1973,2397 1982,2420 1956,2431 1946,2408",
    "labelX": 1964,
    "labelY": 2414,
    "tags": {
      "building": "yes",
      "name": "Garden House"
    }
  },
  {
    "osmId": 220194389,
    "kind": "yes",
    "points": "1987,2381 2001,2374 2012,2395 1997,2402 1987,2381",
    "labelX": 1999,
    "labelY": 2388,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194390,
    "kind": "yes",
    "points": "1917,2404 1935,2395 1950,2427 1932,2436 1917,2404",
    "labelX": 1934,
    "labelY": 2416,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194391,
    "kind": "yes",
    "points": "2002,2374 2012,2369 2020,2385 2010,2390 2002,2374",
    "labelX": 2011,
    "labelY": 2380,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194392,
    "kind": "yes",
    "points": "2028,2499 2069,2493 2074,2526 2033,2532 2028,2499",
    "labelX": 2051,
    "labelY": 2513,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194394,
    "kind": "yes",
    "points": "1945,2453 1964,2445 1973,2466 1954,2474 1945,2453",
    "labelX": 1959,
    "labelY": 2460,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194395,
    "kind": "yes",
    "points": "2052,2357 2070,2351 2075,2368 2058,2373 2052,2357",
    "labelX": 2064,
    "labelY": 2362,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194396,
    "name": "\u9577\u8005\u4e38",
    "kind": "yes",
    "points": "2049,2429 2060,2448 2031,2462 2021,2445 2049,2429",
    "labelX": 2040,
    "labelY": 2446,
    "tags": {
      "building": "yes",
      "name": "\u9577\u8005\u4e38"
    }
  },
  {
    "osmId": 220194397,
    "kind": "yes",
    "points": "2054,2424 2077,2421 2078,2434 2073,2441 2063,2442 2054,2424",
    "labelX": 2069,
    "labelY": 2432,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220194398,
    "name": "\u30c6\u30e9\u30b9\u9577\u8005\u4e38",
    "kind": "yes",
    "points": "2028,2483 2084,2454 2094,2473 2067,2487 2031,2494 2028,2483",
    "labelX": 2061,
    "labelY": 2478,
    "tags": {
      "building": "yes",
      "name": "\u30c6\u30e9\u30b9\u9577\u8005\u4e38"
    }
  },
  {
    "osmId": 220194402,
    "kind": "yes",
    "points": "2070,2255 2094,2255 2091,2315 2008,2345 1995,2308 2069,2281 2070,2255",
    "labelX": 2055,
    "labelY": 2293,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220455217,
    "name": "\u6075\u6bd4\u5bff\u30ac\u30fc\u30c7\u30f3\u30c6\u30e9\u30b9 \u58f1\u756a\u9928",
    "kind": "apartments",
    "points": "1672,2293 1644,2293 1644,2308 1629,2308 1629,2323 1614,2323 1614,2396 1584,2396 1584,2476 1599,2476 1599,2485 1617,2485 1617,2499 1656,2498 1656,2521 1678,2521 1678,2504 1693,2504 1693,2476 1708,2476 1708,2411 1693,2411 1693,2395 1646,2395 1645,2368 1672,2368 1672,2293",
    "labelX": 1649,
    "labelY": 2420,
    "tags": {
      "building": "apartments",
      "name": "\u6075\u6bd4\u5bff\u30ac\u30fc\u30c7\u30f3\u30c6\u30e9\u30b9 \u58f1\u756a\u9928"
    }
  },
  {
    "osmId": 220872434,
    "kind": "yes",
    "points": "1958,1451 1989,1446 1992,1463 1961,1468 1958,1451",
    "labelX": 1975,
    "labelY": 1457,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872436,
    "kind": "yes",
    "points": "2031,1324 2053,1327 2052,1335 2030,1332 2031,1324",
    "labelX": 2042,
    "labelY": 1330,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872442,
    "kind": "yes",
    "points": "1914,1459 1933,1457 1935,1479 1916,1481 1914,1459",
    "labelX": 1925,
    "labelY": 1469,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872444,
    "kind": "yes",
    "points": "2058,1854 2058,1833 2068,1833 2067,1854 2058,1854",
    "labelX": 2063,
    "labelY": 1844,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872449,
    "kind": "yes",
    "points": "2002,1832 2026,1831 2027,1853 2003,1854 2002,1832",
    "labelX": 2015,
    "labelY": 1843,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872451,
    "kind": "yes",
    "points": "2072,1894 2072,1872 2083,1872 2083,1894 2072,1894",
    "labelX": 2078,
    "labelY": 1883,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872454,
    "kind": "yes",
    "points": "1992,1448 2006,1444 2009,1455 1994,1457 1992,1448",
    "labelX": 2000,
    "labelY": 1451,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872458,
    "kind": "yes",
    "points": "2029,1877 2039,1877 2040,1904 2029,1904 2029,1877",
    "labelX": 2034,
    "labelY": 1891,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872459,
    "kind": "yes",
    "points": "2030,1860 2029,1830 2046,1830 2047,1859 2030,1860",
    "labelX": 2038,
    "labelY": 1845,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872465,
    "kind": "yes",
    "points": "2052,1724 2077,1724 2077,1743 2052,1743 2052,1724",
    "labelX": 2065,
    "labelY": 1734,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872468,
    "kind": "yes",
    "points": "1926,2067 1921,2035 1936,2032 1942,2064 1926,2067",
    "labelX": 1931,
    "labelY": 2050,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872473,
    "kind": "yes",
    "points": "2068,1958 2095,1959 2094,1979 2067,1978 2068,1958",
    "labelX": 2081,
    "labelY": 1969,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872477,
    "kind": "yes",
    "points": "2071,1929 2071,1900 2084,1900 2084,1929 2071,1929",
    "labelX": 2078,
    "labelY": 1915,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872487,
    "kind": "yes",
    "points": "2062,1707 2062,1687 2103,1688 2102,1708 2062,1707",
    "labelX": 2082,
    "labelY": 1698,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872489,
    "kind": "yes",
    "points": "2061,2060 2087,2056 2090,2080 2065,2084 2061,2060",
    "labelX": 2076,
    "labelY": 2070,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872491,
    "kind": "yes",
    "points": "1976,1964 2006,1963 2007,1984 1976,1985 1976,1964",
    "labelX": 1991,
    "labelY": 1974,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872492,
    "kind": "yes",
    "points": "1983,2035 2020,2028 2025,2052 1988,2060 1983,2035",
    "labelX": 2004,
    "labelY": 2044,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872493,
    "kind": "yes",
    "points": "1975,1936 2006,1936 2007,1958 1976,1959 1975,1936",
    "labelX": 1991,
    "labelY": 1947,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872497,
    "kind": "yes",
    "points": "2069,2150 2094,2147 2097,2173 2072,2176 2069,2150",
    "labelX": 2083,
    "labelY": 2162,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872498,
    "kind": "yes",
    "points": "1951,1432 1976,1428 1978,1442 1953,1446 1951,1432",
    "labelX": 1965,
    "labelY": 1437,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872512,
    "kind": "yes",
    "points": "1988,2005 2016,2000 2020,2021 1992,2026 1988,2005",
    "labelX": 2004,
    "labelY": 2013,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872514,
    "kind": "yes",
    "points": "1988,2067 2025,2061 2029,2084 1992,2091 1988,2067",
    "labelX": 2009,
    "labelY": 2076,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872515,
    "kind": "yes",
    "points": "1939,1937 1960,1936 1961,1960 1940,1961 1939,1937",
    "labelX": 1950,
    "labelY": 1949,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872517,
    "kind": "yes",
    "points": "1973,1879 2009,1876 2010,1892 1974,1894 1973,1879",
    "labelX": 1992,
    "labelY": 1885,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872518,
    "kind": "yes",
    "points": "1890,1938 1920,1937 1921,1962 1891,1962 1890,1938",
    "labelX": 1906,
    "labelY": 1950,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872521,
    "kind": "yes",
    "points": "2072,1346 2078,1306 2092,1308 2086,1348 2072,1346",
    "labelX": 2082,
    "labelY": 1327,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872522,
    "kind": "yes",
    "points": "1976,1498 1974,1487 2002,1473 2004,1495 1976,1498",
    "labelX": 1989,
    "labelY": 1488,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872545,
    "kind": "yes",
    "points": "2078,1854 2078,1833 2087,1834 2086,1855 2078,1854",
    "labelX": 2082,
    "labelY": 1844,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872547,
    "kind": "yes",
    "points": "1892,2018 1912,2014 1916,2031 1896,2036 1892,2018",
    "labelX": 1904,
    "labelY": 2025,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872555,
    "kind": "yes",
    "points": "2064,2201 2076,2190 2090,2207 2078,2217 2064,2201",
    "labelX": 2077,
    "labelY": 2204,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872560,
    "kind": "yes",
    "points": "2031,1335 2069,1341 2064,1373 2026,1367 2031,1335",
    "labelX": 2048,
    "labelY": 1354,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872565,
    "kind": "yes",
    "points": "1933,2073 1977,2064 1980,2092 1938,2100 1933,2073",
    "labelX": 1957,
    "labelY": 2082,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872566,
    "kind": "yes",
    "points": "2044,1932 2069,1931 2069,1952 2045,1953 2044,1932",
    "labelX": 2057,
    "labelY": 1942,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872569,
    "kind": "yes",
    "points": "1970,1855 1983,1854 1983,1866 1970,1866 1970,1855",
    "labelX": 1977,
    "labelY": 1860,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872576,
    "kind": "yes",
    "points": "2049,1786 2048,1762 2071,1761 2071,1786 2049,1786",
    "labelX": 2060,
    "labelY": 1774,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872593,
    "kind": "yes",
    "points": "1951,1391 1949,1372 1968,1370 1970,1390 1951,1391",
    "labelX": 1960,
    "labelY": 1381,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872613,
    "kind": "yes",
    "points": "2062,2009 2079,2007 2085,2053 2068,2055 2062,2009",
    "labelX": 2074,
    "labelY": 2031,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872615,
    "kind": "yes",
    "points": "2054,1336 2062,1302 2077,1305 2071,1339 2054,1336",
    "labelX": 2066,
    "labelY": 1321,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872619,
    "kind": "yes",
    "points": "1923,1928 1923,1910 1932,1909 1933,1928 1923,1928",
    "labelX": 1928,
    "labelY": 1919,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872623,
    "kind": "yes",
    "points": "2068,1854 2069,1833 2078,1833 2077,1854 2068,1854",
    "labelX": 2073,
    "labelY": 1844,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872626,
    "kind": "yes",
    "points": "2001,1432 2000,1406 2017,1406 2017,1432 2001,1432",
    "labelX": 2009,
    "labelY": 1419,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872633,
    "kind": "yes",
    "points": "1994,1458 2009,1456 2010,1464 1995,1467 1994,1458",
    "labelX": 2002,
    "labelY": 1461,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872639,
    "kind": "yes",
    "points": "1911,1484 1935,1481 1937,1500 1913,1502 1911,1484",
    "labelX": 1924,
    "labelY": 1492,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872640,
    "kind": "yes",
    "points": "1872,2030 1892,2025 1896,2040 1876,2046 1872,2030",
    "labelX": 1884,
    "labelY": 2035,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872652,
    "kind": "yes",
    "points": "1933,2018 1967,2012 1969,2025 1936,2031 1933,2018",
    "labelX": 1951,
    "labelY": 2022,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872656,
    "kind": "yes",
    "points": "1973,1904 2010,1902 2011,1926 1974,1928 1973,1904",
    "labelX": 1992,
    "labelY": 1915,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872665,
    "kind": "yes",
    "points": "2072,1659 2083,1658 2084,1680 2073,1681 2072,1659",
    "labelX": 2078,
    "labelY": 1670,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872670,
    "kind": "yes",
    "points": "2013,1465 2012,1441 2021,1440 2022,1464 2013,1465",
    "labelX": 2017,
    "labelY": 1453,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872672,
    "kind": "yes",
    "points": "1893,1974 1923,1971 1927,1999 1896,2003 1893,1974",
    "labelX": 1910,
    "labelY": 1987,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872674,
    "kind": "yes",
    "points": "2042,2153 2067,2150 2070,2174 2045,2178 2042,2153",
    "labelX": 2056,
    "labelY": 2164,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872675,
    "kind": "yes",
    "points": "2047,1661 2070,1659 2071,1679 2049,1680 2047,1661",
    "labelX": 2059,
    "labelY": 1670,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872676,
    "kind": "yes",
    "points": "1892,2063 1918,2052 1925,2071 1897,2074 1892,2063",
    "labelX": 1908,
    "labelY": 2065,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872677,
    "kind": "yes",
    "points": "2031,2066 2058,2063 2062,2090 2035,2093 2031,2066",
    "labelX": 2047,
    "labelY": 2078,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872678,
    "kind": "yes",
    "points": "2013,1910 2042,1909 2043,1924 2013,1925 2013,1910",
    "labelX": 2028,
    "labelY": 1917,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872680,
    "kind": "yes",
    "points": "1919,1886 1955,1884 1956,1897 1920,1899 1919,1886",
    "labelX": 1938,
    "labelY": 1892,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872689,
    "kind": "yes",
    "points": "2005,1474 2032,1471 2034,1491 2007,1494 2005,1474",
    "labelX": 2020,
    "labelY": 1483,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872690,
    "kind": "yes",
    "points": "2014,1813 2014,1784 2045,1783 2046,1812 2014,1813",
    "labelX": 2030,
    "labelY": 1798,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872693,
    "kind": "yes",
    "points": "2048,1929 2048,1881 2068,1881 2068,1929 2048,1929",
    "labelX": 2058,
    "labelY": 1905,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872695,
    "kind": "yes",
    "points": "2009,1962 2042,1960 2042,1980 2010,1981 2009,1962",
    "labelX": 2026,
    "labelY": 1971,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872697,
    "kind": "yes",
    "points": "2011,1878 2028,1877 2029,1902 2013,1903 2011,1878",
    "labelX": 2020,
    "labelY": 1890,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872698,
    "kind": "yes",
    "points": "2048,1853 2049,1832 2058,1833 2057,1854 2048,1853",
    "labelX": 2053,
    "labelY": 1843,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872703,
    "kind": "yes",
    "points": "2072,1347 2085,1349 2083,1361 2070,1359 2072,1347",
    "labelX": 2078,
    "labelY": 1354,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872716,
    "kind": "yes",
    "points": "2051,1744 2069,1745 2069,1760 2051,1759 2051,1744",
    "labelX": 2060,
    "labelY": 1752,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872718,
    "kind": "yes",
    "points": "1925,1967 1957,1965 1960,1993 1928,1996 1925,1967",
    "labelX": 1943,
    "labelY": 1980,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872726,
    "kind": "yes",
    "points": "2043,2203 2053,2193 2069,2208 2059,2219 2043,2203",
    "labelX": 2056,
    "labelY": 2206,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872731,
    "kind": "yes",
    "points": "1984,1368 2016,1367 2017,1395 1985,1397 1984,1368",
    "labelX": 2001,
    "labelY": 1382,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872736,
    "kind": "yes",
    "points": "1948,1415 1973,1411 1975,1426 1950,1429 1948,1415",
    "labelX": 1962,
    "labelY": 1420,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872741,
    "kind": "yes",
    "points": "1765,1809 1788,1806 1791,1832 1767,1835 1765,1809",
    "labelX": 1778,
    "labelY": 1821,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872749,
    "kind": "yes",
    "points": "1934,1905 1957,1904 1958,1925 1935,1926 1934,1905",
    "labelX": 1946,
    "labelY": 1915,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872750,
    "kind": "yes",
    "points": "1969,1705 2032,1703 2033,1731 1970,1732 1969,1705",
    "labelX": 2001,
    "labelY": 1718,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872754,
    "kind": "yes",
    "points": "1982,2101 2006,2097 2010,2121 1986,2125 1982,2101",
    "labelX": 1996,
    "labelY": 2111,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872755,
    "kind": "yes",
    "points": "2022,1781 2020,1738 2042,1737 2044,1780 2022,1781",
    "labelX": 2032,
    "labelY": 1759,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872758,
    "kind": "yes",
    "points": "2068,1360 2097,1365 2094,1381 2065,1377 2068,1360",
    "labelX": 2081,
    "labelY": 1371,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872761,
    "kind": "yes",
    "points": "1952,1395 1970,1392 1973,1410 1954,1412 1952,1395",
    "labelX": 1962,
    "labelY": 1402,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872763,
    "kind": "yes",
    "points": "1981,1439 1979,1409 1996,1408 1999,1437 1981,1439",
    "labelX": 1989,
    "labelY": 1423,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872764,
    "kind": "yes",
    "points": "1940,2039 1969,2034 1973,2055 1945,2060 1940,2039",
    "labelX": 1957,
    "labelY": 2047,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872771,
    "kind": "yes",
    "points": "1921,1942 1936,1941 1938,1963 1922,1964 1921,1942",
    "labelX": 1929,
    "labelY": 1953,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872774,
    "kind": "yes",
    "points": "1991,2153 2034,2147 2037,2166 1994,2172 1991,2153",
    "labelX": 2014,
    "labelY": 2160,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872796,
    "kind": "yes",
    "points": "2072,1950 2071,1932 2082,1931 2083,1950 2072,1950",
    "labelX": 2077,
    "labelY": 1941,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872800,
    "kind": "yes",
    "points": "2039,1312 2043,1304 2048,1300 2058,1302 2056,1315 2039,1312",
    "labelX": 2049,
    "labelY": 1307,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872803,
    "kind": "yes",
    "points": "1939,1493 1935,1457 1945,1456 1952,1463 1955,1492 1939,1493",
    "labelX": 1945,
    "labelY": 1472,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872804,
    "kind": "yes",
    "points": "1951,2118 1981,2113 1984,2133 1967,2137 1952,2126 1951,2118",
    "labelX": 1967,
    "labelY": 2125,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872805,
    "kind": "yes",
    "points": "2037,1314 2056,1316 2054,1325 2033,1323 2032,1316 2037,1314",
    "labelX": 2042,
    "labelY": 1319,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872811,
    "kind": "yes",
    "points": "2067,2220 2100,2218 2101,2244 2088,2244 2086,2234 2068,2235 2067,2220",
    "labelX": 2085,
    "labelY": 2233,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872813,
    "kind": "yes",
    "points": "2009,2101 2033,2097 2036,2121 2026,2123 2027,2130 2013,2132 2009,2101",
    "labelX": 2024,
    "labelY": 2117,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872815,
    "kind": "yes",
    "points": "1914,1413 1942,1411 1943,1429 1922,1430 1921,1426 1915,1426 1914,1413",
    "labelX": 1926,
    "labelY": 1423,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872819,
    "kind": "yes",
    "points": "1914,1445 1914,1427 1921,1427 1921,1431 1939,1430 1940,1443 1914,1445",
    "labelX": 1925,
    "labelY": 1434,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872828,
    "kind": "yes",
    "points": "1970,1736 1996,1735 1996,1750 2013,1751 2014,1780 1971,1781 1970,1736",
    "labelX": 1993,
    "labelY": 1756,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872829,
    "kind": "yes",
    "points": "2024,2026 2021,1997 2042,1995 2044,2007 2059,2005 2060,2023 2024,2026",
    "labelX": 2042,
    "labelY": 2009,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872834,
    "kind": "yes",
    "points": "2015,1929 2036,1928 2037,1945 2027,1946 2028,1950 2009,1951 2009,1939 2015,1938 2015,1929",
    "labelX": 2022,
    "labelY": 1941,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872837,
    "kind": "yes",
    "points": "1910,1890 1915,1890 1916,1903 1909,1903 1911,1923 1890,1925 1887,1884 1910,1882 1910,1890",
    "labelX": 1906,
    "labelY": 1900,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872839,
    "kind": "yes",
    "points": "1978,1793 2007,1792 2008,1816 1983,1816 1984,1822 1969,1822 1968,1802 1979,1801 1978,1793",
    "labelX": 1985,
    "labelY": 1808,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220872840,
    "kind": "yes",
    "points": "1973,1845 1970,1845 1969,1831 1986,1830 1987,1837 2000,1837 2000,1851 1973,1852 1973,1845",
    "labelX": 1982,
    "labelY": 1841,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878094,
    "kind": "yes",
    "points": "1999,1523 1997,1509 2008,1508 2009,1522 1999,1523",
    "labelX": 2003,
    "labelY": 1516,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878096,
    "kind": "yes",
    "points": "1803,740 1803,726 1812,726 1812,740 1803,740",
    "labelX": 1808,
    "labelY": 733,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878104,
    "kind": "yes",
    "points": "1841,724 1850,723 1851,742 1842,743 1841,724",
    "labelX": 1846,
    "labelY": 733,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878115,
    "kind": "yes",
    "points": "1860,930 1860,909 1874,909 1874,930 1860,930",
    "labelX": 1867,
    "labelY": 920,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878117,
    "kind": "yes",
    "points": "2056,716 2061,755 2047,757 2042,718 2056,716",
    "labelX": 2052,
    "labelY": 737,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878126,
    "kind": "yes",
    "points": "1832,740 1831,725 1839,725 1840,740 1832,740",
    "labelX": 1836,
    "labelY": 733,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878129,
    "kind": "yes",
    "points": "1878,724 1899,723 1899,734 1879,735 1878,724",
    "labelX": 1889,
    "labelY": 729,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878132,
    "kind": "yes",
    "points": "1962,770 1962,741 1981,741 1981,769 1962,770",
    "labelX": 1972,
    "labelY": 755,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878136,
    "kind": "yes",
    "points": "1888,769 1888,746 1896,746 1896,769 1888,769",
    "labelX": 1892,
    "labelY": 758,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878137,
    "kind": "yes",
    "points": "1899,939 1903,913 1914,915 1909,941 1899,939",
    "labelX": 1906,
    "labelY": 927,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878139,
    "kind": "yes",
    "points": "1750,751 1763,751 1763,767 1750,767 1750,751",
    "labelX": 1757,
    "labelY": 759,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878141,
    "kind": "yes",
    "points": "2015,727 2016,745 2013,745 2000,731 2015,727",
    "labelX": 2011,
    "labelY": 737,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878145,
    "kind": "yes",
    "points": "2031,698 2048,693 2051,705 2034,709 2031,698",
    "labelX": 2041,
    "labelY": 701,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878151,
    "kind": "yes",
    "points": "1727,768 1727,750 1748,750 1748,768 1727,768",
    "labelX": 1738,
    "labelY": 759,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878153,
    "kind": "yes",
    "points": "1976,1562 1988,1557 1995,1573 1982,1578 1976,1562",
    "labelX": 1985,
    "labelY": 1568,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878158,
    "kind": "yes",
    "points": "2029,1683 2028,1663 2038,1662 2040,1683 2029,1683",
    "labelX": 2034,
    "labelY": 1673,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878161,
    "kind": "yes",
    "points": "2055,1548 2103,1550 2102,1579 2054,1578 2055,1548",
    "labelX": 2079,
    "labelY": 1564,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878178,
    "kind": "yes",
    "points": "1757,727 1768,727 1769,741 1758,741 1757,727",
    "labelX": 1763,
    "labelY": 734,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878181,
    "kind": "yes",
    "points": "2050,1793 2071,1793 2071,1810 2050,1810 2050,1793",
    "labelX": 2061,
    "labelY": 1802,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878193,
    "kind": "yes",
    "points": "1908,769 1907,746 1917,746 1917,769 1908,769",
    "labelX": 1912,
    "labelY": 758,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878197,
    "kind": "yes",
    "points": "1871,750 1887,749 1888,767 1872,768 1871,750",
    "labelX": 1880,
    "labelY": 759,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878201,
    "kind": "yes",
    "points": "1849,931 1849,907 1858,907 1858,931 1849,931",
    "labelX": 1854,
    "labelY": 919,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878204,
    "kind": "yes",
    "points": "1969,713 2000,705 2004,719 1973,728 1969,713",
    "labelX": 1987,
    "labelY": 716,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878206,
    "kind": "yes",
    "points": "1956,1496 1967,1490 1974,1501 1963,1508 1956,1496",
    "labelX": 1965,
    "labelY": 1499,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878215,
    "kind": "yes",
    "points": "1913,1551 1941,1538 1945,1546 1917,1559 1913,1551",
    "labelX": 1929,
    "labelY": 1549,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878216,
    "kind": "yes",
    "points": "1819,1066 1845,1070 1840,1101 1814,1097 1819,1066",
    "labelX": 1830,
    "labelY": 1084,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878232,
    "kind": "yes",
    "points": "1964,918 1975,904 2001,925 1990,939 1964,918",
    "labelX": 1983,
    "labelY": 922,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878237,
    "kind": "yes",
    "points": "1997,1667 2009,1665 2011,1684 1998,1686 1997,1667",
    "labelX": 2004,
    "labelY": 1676,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878250,
    "kind": "yes",
    "points": "1964,967 1981,937 1993,945 1975,974 1964,967",
    "labelX": 1978,
    "labelY": 956,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878251,
    "kind": "yes",
    "points": "1852,725 1876,723 1877,738 1853,739 1852,725",
    "labelX": 1865,
    "labelY": 731,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878253,
    "kind": "yes",
    "points": "1817,971 1818,944 1833,945 1832,972 1817,971",
    "labelX": 1825,
    "labelY": 958,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878255,
    "kind": "yes",
    "points": "1998,1525 2011,1523 2014,1540 2001,1542 1998,1525",
    "labelX": 2006,
    "labelY": 1533,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878264,
    "kind": "yes",
    "points": "1852,901 1854,875 1874,876 1873,902 1852,901",
    "labelX": 1863,
    "labelY": 889,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878267,
    "kind": "yes",
    "points": "1929,1647 1925,1613 1944,1611 1948,1645 1929,1647",
    "labelX": 1937,
    "labelY": 1629,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878274,
    "kind": "yes",
    "points": "1977,1534 1992,1527 1998,1540 1983,1547 1977,1534",
    "labelX": 1988,
    "labelY": 1537,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878286,
    "kind": "yes",
    "points": "1806,753 1832,754 1832,769 1806,769 1806,753",
    "labelX": 1819,
    "labelY": 761,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878290,
    "kind": "yes",
    "points": "1806,931 1807,908 1818,908 1817,932 1806,931",
    "labelX": 1812,
    "labelY": 920,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878293,
    "kind": "yes",
    "points": "1941,743 1958,742 1960,766 1943,767 1941,743",
    "labelX": 1951,
    "labelY": 755,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878296,
    "kind": "yes",
    "points": "2022,1613 2036,1611 2038,1637 2025,1638 2022,1613",
    "labelX": 2030,
    "labelY": 1625,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878307,
    "kind": "yes",
    "points": "1771,727 1802,727 1802,738 1771,738 1771,727",
    "labelX": 1787,
    "labelY": 733,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878309,
    "kind": "yes",
    "points": "2050,1813 2064,1814 2063,1829 2049,1828 2050,1813",
    "labelX": 2057,
    "labelY": 1821,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878316,
    "kind": "yes",
    "points": "1966,850 1975,828 2008,829 1989,859 1966,850",
    "labelX": 1985,
    "labelY": 842,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878318,
    "kind": "yes",
    "points": "2065,1126 2100,1143 2090,1162 2056,1144 2065,1126",
    "labelX": 2078,
    "labelY": 1144,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878329,
    "kind": "yes",
    "points": "1936,886 1956,900 1942,920 1922,906 1936,886",
    "labelX": 1939,
    "labelY": 903,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878333,
    "kind": "yes",
    "points": "1814,726 1830,725 1830,740 1814,740 1814,726",
    "labelX": 1822,
    "labelY": 733,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878336,
    "kind": "yes",
    "points": "1994,1558 2015,1555 2016,1570 1996,1573 1994,1558",
    "labelX": 2005,
    "labelY": 1564,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878337,
    "kind": "yes",
    "points": "2075,1751 2099,1751 2099,1776 2075,1776 2075,1751",
    "labelX": 2087,
    "labelY": 1764,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878344,
    "kind": "yes",
    "points": "1940,1531 1960,1520 1968,1533 1948,1544 1940,1531",
    "labelX": 1954,
    "labelY": 1532,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878349,
    "kind": "yes",
    "points": "1980,1644 1978,1621 1994,1619 1996,1642 1980,1644",
    "labelX": 1987,
    "labelY": 1632,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878356,
    "kind": "yes",
    "points": "1901,720 1930,719 1930,733 1902,734 1901,720",
    "labelX": 1916,
    "labelY": 727,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878358,
    "name": "\u5c0f\u91ce\u30d3\u30eb",
    "kind": "yes",
    "points": "1884,948 1916,955 1911,977 1889,972 1887,978 1878,976 1884,948",
    "labelX": 1894,
    "labelY": 968,
    "tags": {
      "building": "yes",
      "name": "\u5c0f\u91ce\u30d3\u30eb"
    }
  },
  {
    "osmId": 220878360,
    "kind": "yes",
    "points": "1788,929 1789,902 1804,902 1804,929 1788,929",
    "labelX": 1796,
    "labelY": 916,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878367,
    "kind": "yes",
    "points": "2014,700 2025,698 2028,711 2017,713 2014,700",
    "labelX": 2021,
    "labelY": 706,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878374,
    "kind": "yes",
    "points": "1974,1515 1980,1512 1987,1525 1981,1529 1974,1515",
    "labelX": 1981,
    "labelY": 1520,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878377,
    "kind": "yes",
    "points": "2006,750 2026,747 2029,767 2010,770 2006,750",
    "labelX": 2018,
    "labelY": 759,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878379,
    "kind": "yes",
    "points": "1840,753 1865,750 1865,769 1841,768 1840,753",
    "labelX": 1853,
    "labelY": 760,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878386,
    "kind": "yes",
    "points": "1924,944 1911,941 1917,917 1933,930 1924,944",
    "labelX": 1921,
    "labelY": 933,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878389,
    "kind": "yes",
    "points": "1943,1506 1956,1499 1961,1509 1949,1515 1943,1506",
    "labelX": 1952,
    "labelY": 1507,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878390,
    "kind": "yes",
    "points": "2075,1788 2099,1788 2099,1809 2074,1808 2075,1788",
    "labelX": 2087,
    "labelY": 1798,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878391,
    "kind": "yes",
    "points": "2002,864 2012,853 2045,888 2035,900 2028,895 2030,893 2002,864",
    "labelX": 2025,
    "labelY": 882,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878396,
    "kind": "yes",
    "points": "1966,1670 1994,1667 1996,1682 1968,1685 1966,1670",
    "labelX": 1981,
    "labelY": 1676,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878400,
    "kind": "yes",
    "points": "2051,1613 2078,1612 2078,1633 2052,1634 2051,1613",
    "labelX": 2065,
    "labelY": 1623,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878414,
    "kind": "yes",
    "points": "1814,1771 1843,1767 1846,1783 1817,1787 1814,1771",
    "labelX": 1830,
    "labelY": 1777,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878415,
    "kind": "yes",
    "points": "1820,906 1840,906 1840,930 1820,930 1820,906",
    "labelX": 1830,
    "labelY": 918,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878421,
    "kind": "yes",
    "points": "1939,718 1968,715 1969,729 1940,732 1939,718",
    "labelX": 1954,
    "labelY": 724,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878428,
    "kind": "yes",
    "points": "2053,1584 2078,1585 2078,1606 2053,1605 2053,1584",
    "labelX": 2066,
    "labelY": 1595,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878431,
    "kind": "yes",
    "points": "2016,1684 2014,1664 2025,1663 2027,1683 2016,1684",
    "labelX": 2021,
    "labelY": 1674,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878433,
    "kind": "yes",
    "points": "1953,1545 1973,1534 1979,1545 1959,1556 1953,1545",
    "labelX": 1966,
    "labelY": 1545,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878438,
    "kind": "yes",
    "points": "1777,930 1778,899 1788,899 1787,930 1777,930",
    "labelX": 1783,
    "labelY": 915,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878439,
    "kind": "yes",
    "points": "1726,740 1726,729 1755,729 1755,739 1726,740",
    "labelX": 1741,
    "labelY": 734,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878449,
    "kind": "yes",
    "points": "1949,957 1938,948 1961,918 1973,927 1949,957",
    "labelX": 1955,
    "labelY": 938,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878450,
    "kind": "yes",
    "points": "1920,767 1919,745 1938,744 1939,766 1920,767",
    "labelX": 1929,
    "labelY": 756,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878452,
    "kind": "yes",
    "points": "1987,1511 1996,1510 1998,1524 1988,1525 1987,1511",
    "labelX": 1992,
    "labelY": 1518,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878458,
    "kind": "yes",
    "points": "2017,745 2016,726 2027,725 2028,744 2017,745",
    "labelX": 2022,
    "labelY": 735,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878460,
    "kind": "yes",
    "points": "1940,1503 1951,1521 1941,1527 1930,1508 1940,1503",
    "labelX": 1941,
    "labelY": 1515,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878461,
    "kind": "yes",
    "points": "2027,862 2037,852 2056,875 2046,887 2027,862",
    "labelX": 2042,
    "labelY": 869,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878474,
    "kind": "yes",
    "points": "2073,1109 2079,1099 2100,1111 2094,1121 2073,1109",
    "labelX": 2087,
    "labelY": 1110,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878475,
    "kind": "yes",
    "points": "2065,1815 2089,1815 2089,1825 2065,1824 2065,1815",
    "labelX": 2077,
    "labelY": 1820,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878478,
    "kind": "yes",
    "points": "1969,933 1979,940 1963,961 1953,954 1969,933",
    "labelX": 1966,
    "labelY": 947,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878479,
    "kind": "yes",
    "points": "1898,769 1897,745 1906,745 1906,769 1898,769",
    "labelX": 1902,
    "labelY": 757,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878495,
    "kind": "yes",
    "points": "2054,1521 2074,1521 2074,1542 2054,1542 2054,1521",
    "labelX": 2064,
    "labelY": 1532,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878497,
    "kind": "yes",
    "points": "1766,751 1802,751 1802,767 1766,767 1766,751",
    "labelX": 1784,
    "labelY": 759,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878505,
    "kind": "yes",
    "points": "1949,1628 1975,1625 1977,1645 1951,1647 1949,1628",
    "labelX": 1963,
    "labelY": 1636,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878509,
    "kind": "yes",
    "points": "1959,1560 1970,1555 1980,1576 1969,1581 1959,1560",
    "labelX": 1970,
    "labelY": 1568,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878510,
    "kind": "yes",
    "points": "1963,1519 1971,1514 1979,1528 1971,1533 1963,1519",
    "labelX": 1971,
    "labelY": 1524,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878515,
    "kind": "yes",
    "points": "1927,1507 1939,1534 1916,1544 1909,1530 1912,1514 1927,1507",
    "labelX": 1921,
    "labelY": 1526,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878516,
    "kind": "yes",
    "points": "1898,876 1931,880 1931,886 1924,896 1896,894 1898,876",
    "labelX": 1916,
    "labelY": 886,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878518,
    "kind": "yes",
    "points": "1935,883 1937,879 1956,881 1966,888 1958,899 1935,883",
    "labelX": 1950,
    "labelY": 886,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878523,
    "kind": "yes",
    "points": "1927,1574 1922,1563 1949,1551 1964,1583 1927,1600 1920,1583 1927,1574",
    "labelX": 1935,
    "labelY": 1576,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878527,
    "kind": "yes",
    "points": "2062,970 2094,988 2106,967 2120,975 2094,1022 2069,1007 2075,995 2081,994 2082,992 2077,989 2060,990 2053,986 2062,970",
    "labelX": 2081,
    "labelY": 990,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878531,
    "kind": "yes",
    "points": "1984,768 1982,738 1999,733 2012,745 2002,747 2003,767 1984,768",
    "labelX": 1997,
    "labelY": 750,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878538,
    "name": "\u30c6\u30a3\u30a2\u30e9\u30db\u30fc\u30e0",
    "kind": "yes",
    "points": "1858,1075 1871,1073 1872,1095 1890,1096 1889,1118 1858,1117 1858,1075",
    "labelX": 1873,
    "labelY": 1096,
    "tags": {
      "building": "yes",
      "name": "\u30c6\u30a3\u30a2\u30e9\u30db\u30fc\u30e0"
    }
  },
  {
    "osmId": 220878540,
    "kind": "yes",
    "points": "2014,1524 2041,1520 2042,1529 2037,1531 2038,1538 2016,1540 2014,1524",
    "labelX": 2031,
    "labelY": 1530,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878545,
    "kind": "yes",
    "points": "1874,900 1876,876 1893,877 1891,901 1888,920 1876,920 1876,900 1874,900",
    "labelX": 1882,
    "labelY": 899,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220878554,
    "kind": "yes",
    "points": "1999,1634 1998,1634 1996,1616 2020,1613 2022,1631 2011,1632 2013,1642 2000,1644 1999,1634",
    "labelX": 2007,
    "labelY": 1631,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879209,
    "name": "Alc\u00e1zar",
    "kind": "yes",
    "points": "1535,657 1538,617 1571,620 1568,660 1535,657",
    "labelX": 1553,
    "labelY": 639,
    "tags": {
      "building": "yes",
      "name": "\u30a2\u30eb\u30ab\u30b6\u30eb",
      "name:en": "Alc\u00e1zar"
    }
  },
  {
    "osmId": 220879211,
    "kind": "yes",
    "points": "1203,554 1224,555 1224,578 1202,578 1203,554",
    "labelX": 1213,
    "labelY": 566,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879214,
    "name": "\u7b2c2AS\u30d3\u30eb",
    "kind": "yes",
    "points": "1132,571 1135,542 1147,543 1144,572 1132,571",
    "labelX": 1140,
    "labelY": 557,
    "tags": {
      "building": "yes",
      "name": "\u7b2c2AS\u30d3\u30eb"
    }
  },
  {
    "osmId": 220879215,
    "name": "\u30d7\u30c1\u30b0\u30e9\u30f3",
    "kind": "yes",
    "points": "1654,589 1677,589 1677,602 1654,602 1654,589",
    "labelX": 1666,
    "labelY": 596,
    "tags": {
      "building": "yes",
      "name": "\u30d7\u30c1\u30b0\u30e9\u30f3"
    }
  },
  {
    "osmId": 220879217,
    "kind": "yes",
    "points": "1235,565 1249,566 1248,584 1234,583 1235,565",
    "labelX": 1242,
    "labelY": 575,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879219,
    "kind": "house",
    "points": "1160,578 1161,561 1174,562 1173,578 1160,578",
    "labelX": 1167,
    "labelY": 570,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 220879224,
    "kind": "yes",
    "points": "1607,588 1636,588 1636,602 1607,602 1607,588",
    "labelX": 1622,
    "labelY": 595,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879227,
    "kind": "yes",
    "points": "1399,554 1430,557 1428,575 1398,572 1399,554",
    "labelX": 1414,
    "labelY": 565,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879229,
    "kind": "house",
    "points": "1147,561 1160,562 1159,575 1147,574 1147,561",
    "labelX": 1153,
    "labelY": 568,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 220879231,
    "kind": "yes",
    "points": "1504,605 1512,606 1514,615 1513,622 1530,623 1529,633 1531,632 1531,639 1505,638 1504,605",
    "labelX": 1519,
    "labelY": 624,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879233,
    "kind": "yes",
    "points": "1550,576 1574,580 1571,598 1548,594 1550,576",
    "labelX": 1561,
    "labelY": 587,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879234,
    "kind": "yes",
    "points": "1381,552 1397,554 1394,576 1379,574 1381,552",
    "labelX": 1388,
    "labelY": 564,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879235,
    "kind": "yes",
    "points": "1204,538 1229,538 1229,554 1203,553 1204,538",
    "labelX": 1216,
    "labelY": 546,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879237,
    "kind": "yes",
    "points": "1232,538 1251,539 1250,562 1231,561 1232,538",
    "labelX": 1241,
    "labelY": 550,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879238,
    "kind": "apartments",
    "points": "1519,572 1547,577 1544,596 1516,591 1519,572",
    "labelX": 1532,
    "labelY": 584,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 220879239,
    "kind": "yes",
    "points": "1545,696 1547,671 1564,673 1563,697 1545,696",
    "labelX": 1555,
    "labelY": 684,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879242,
    "kind": "yes",
    "points": "1162,559 1163,539 1175,539 1174,560 1162,559",
    "labelX": 1169,
    "labelY": 549,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879244,
    "kind": "apartments",
    "points": "1299,547 1309,547 1311,575 1301,575 1299,547",
    "labelX": 1305,
    "labelY": 561,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 220879246,
    "kind": "yes",
    "points": "1147,559 1149,540 1162,541 1160,561 1147,559",
    "labelX": 1155,
    "labelY": 550,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879248,
    "kind": "yes",
    "points": "1499,643 1530,643 1530,661 1499,660 1499,643",
    "labelX": 1515,
    "labelY": 652,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879251,
    "name": "TK Building",
    "kind": "yes",
    "points": "1271,578 1268,544 1296,542 1298,576 1271,578",
    "labelX": 1283,
    "labelY": 560,
    "tags": {
      "building": "yes",
      "name": "TK\u30d3\u30eb",
      "name:en": "TK Building"
    }
  },
  {
    "osmId": 220879252,
    "kind": "yes",
    "points": "1732,514 1771,509 1773,521 1734,525 1732,514",
    "labelX": 1753,
    "labelY": 517,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879253,
    "name": "\u30d1\u30ec\u30b9EBS",
    "kind": "apartments",
    "points": "1480,565 1518,572 1515,590 1477,584 1480,565",
    "labelX": 1498,
    "labelY": 578,
    "tags": {
      "building": "apartments",
      "name": "\u30d1\u30ec\u30b9EBS"
    }
  },
  {
    "osmId": 220879255,
    "kind": "yes",
    "points": "1185,538 1201,538 1201,553 1185,552 1185,538",
    "labelX": 1193,
    "labelY": 545,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879257,
    "kind": "yes",
    "points": "1725,504 1772,497 1773,507 1726,514 1725,504",
    "labelX": 1749,
    "labelY": 506,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879258,
    "kind": "yes",
    "points": "1497,715 1502,673 1515,675 1510,716 1497,715",
    "labelX": 1506,
    "labelY": 695,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879259,
    "kind": "apartments",
    "points": "1577,580 1605,582 1605,600 1575,600 1577,580",
    "labelX": 1591,
    "labelY": 591,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 220879260,
    "kind": "yes",
    "points": "1176,555 1176,538 1184,538 1183,555 1176,555",
    "labelX": 1180,
    "labelY": 547,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879261,
    "name": "\u30d4\u30a2\u30ea\u30b9\u5ddd\u7530",
    "kind": "yes",
    "points": "1312,547 1323,546 1325,573 1313,574 1312,547",
    "labelX": 1318,
    "labelY": 560,
    "tags": {
      "building": "yes",
      "name": "\u30d4\u30a2\u30ea\u30b9\u5ddd\u7530"
    }
  },
  {
    "osmId": 220879262,
    "kind": "yes",
    "points": "1120,563 1131,564 1130,575 1119,574 1120,563",
    "labelX": 1125,
    "labelY": 569,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879264,
    "kind": "yes",
    "points": "1119,562 1121,541 1134,542 1131,563 1119,562",
    "labelX": 1126,
    "labelY": 552,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879266,
    "kind": "apartments",
    "points": "1726,530 1773,524 1776,546 1729,552 1726,530",
    "labelX": 1751,
    "labelY": 538,
    "tags": {
      "building": "apartments"
    }
  },
  {
    "osmId": 220879267,
    "kind": "yes",
    "points": "1254,541 1268,541 1268,573 1254,573 1254,541",
    "labelX": 1261,
    "labelY": 557,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879269,
    "kind": "yes",
    "points": "1639,602 1639,587 1653,587 1653,602 1639,602",
    "labelX": 1646,
    "labelY": 595,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879270,
    "kind": "yes",
    "points": "1185,579 1187,554 1202,556 1200,580 1185,579",
    "labelX": 1194,
    "labelY": 567,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 220879273,
    "name": "Kyowa Building",
    "kind": "apartments",
    "points": "1329,548 1378,553 1377,564 1371,563 1370,572 1327,568 1329,548",
    "labelX": 1359,
    "labelY": 561,
    "tags": {
      "building": "apartments",
      "name": "\u5354\u548c\u30d3\u30eb",
      "name:en": "Kyowa Building"
    }
  },
  {
    "osmId": 220879274,
    "kind": "house",
    "points": "1680,588 1705,587 1705,601 1681,602 1680,588",
    "labelX": 1693,
    "labelY": 595,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 220879278,
    "kind": "yes",
    "points": "1175,556 1184,557 1183,578 1174,577 1175,556",
    "labelX": 1179,
    "labelY": 567,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 233408547,
    "kind": "parking",
    "points": "856,1569 864,1565 931,1531 905,1479 894,1484 848,1378 782,1406 856,1569",
    "labelX": 869,
    "labelY": 1487,
    "tags": {
      "amenity": "parking",
      "building": "parking"
    }
  },
  {
    "osmId": 237103298,
    "name": "\u30a2\u30c8\u30ec\u6075\u6bd4\u5bff\u897f\u9928",
    "kind": "commercial",
    "points": "435,922 515,887 526,912 550,968 507,987 469,1003 465,992 435,922",
    "labelX": 495,
    "labelY": 953,
    "tags": {
      "building": "commercial",
      "name": "\u30a2\u30c8\u30ec\u6075\u6bd4\u5bff\u897f\u9928"
    }
  },
  {
    "osmId": 259858827,
    "kind": "yes",
    "points": "840,899 848,895 865,929 857,933 840,899",
    "labelX": 853,
    "labelY": 914,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 259858828,
    "kind": "yes",
    "points": "873,879 900,865 917,888 890,910 873,879",
    "labelX": 895,
    "labelY": 886,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 259858829,
    "name": "\u5927\u6167\u30d3\u30eb",
    "kind": "yes",
    "points": "855,901 875,891 886,913 867,923 855,901",
    "labelX": 871,
    "labelY": 907,
    "tags": {
      "building": "yes",
      "name": "\u5927\u6167\u30d3\u30eb"
    }
  },
  {
    "osmId": 259860065,
    "kind": "yes",
    "points": "763,881 797,861 813,889 791,901 779,900 763,881",
    "labelX": 789,
    "labelY": 886,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 259860066,
    "name": "\u4e2d\u7530\u30d3\u30eb",
    "kind": "yes",
    "points": "798,861 811,854 818,857 831,879 814,888 798,861",
    "labelX": 814,
    "labelY": 868,
    "tags": {
      "building": "yes",
      "name": "\u4e2d\u7530\u30d3\u30eb"
    }
  },
  {
    "osmId": 259860067,
    "kind": "yes",
    "points": "762,809 784,829 750,861 737,846 762,809",
    "labelX": 758,
    "labelY": 836,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 259860068,
    "name": "\u6e05\u5712\u30d3\u30eb",
    "kind": "yes",
    "points": "752,864 787,830 806,851 785,866 782,863 774,870 770,866 761,874 752,864",
    "labelX": 777,
    "labelY": 861,
    "tags": {
      "building": "yes",
      "name": "\u6e05\u5712\u30d3\u30eb"
    }
  },
  {
    "osmId": 261322880,
    "kind": "yes",
    "points": "432,1729 426,1750 398,1743 404,1721 432,1729",
    "labelX": 415,
    "labelY": 1736,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 323914889,
    "name": "\u6075\u6bd4\u5bff\u99c5\u6771\u53e3\u516c\u5712",
    "kind": "yes",
    "points": "729,917 736,915 740,929 734,931 729,917",
    "labelX": 735,
    "labelY": 923,
    "tags": {
      "amenity": "toilets",
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u99c5\u6771\u53e3\u516c\u5712"
    }
  },
  {
    "osmId": 323914890,
    "kind": "yes",
    "points": "748,806 725,840 734,845 756,812 748,806",
    "labelX": 741,
    "labelY": 826,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 323919379,
    "name": "\u30a8\u30d3\u30b9TY\u30d3\u30eb",
    "kind": "yes",
    "points": "1166,826 1197,821 1198,827 1203,826 1207,851 1199,852 1198,849 1190,850 1189,843 1170,846 1166,826",
    "labelX": 1192,
    "labelY": 839,
    "tags": {
      "building": "yes",
      "name": "\u30a8\u30d3\u30b9TY\u30d3\u30eb"
    }
  },
  {
    "osmId": 323919380,
    "name": "\u30b8\u30e9\u30bd\u30fc\u30ec ebisu",
    "kind": "yes",
    "points": "1614,744 1614,759 1619,759 1621,762 1627,766 1647,766 1650,763 1653,756 1653,744 1614,744",
    "labelX": 1633,
    "labelY": 758,
    "tags": {
      "building": "yes",
      "name": "\u30b8\u30e9\u30bd\u30fc\u30ec ebisu"
    }
  },
  {
    "osmId": 323919381,
    "kind": "hut",
    "points": "1528,750 1536,750 1535,764 1528,763 1528,750",
    "labelX": 1532,
    "labelY": 757,
    "tags": {
      "building": "hut"
    }
  },
  {
    "osmId": 323919382,
    "kind": "roof",
    "points": "1129,706 1159,711 1156,731 1126,725 1129,706",
    "labelX": 1143,
    "labelY": 718,
    "tags": {
      "building": "roof"
    }
  },
  {
    "osmId": 323919383,
    "kind": "roof",
    "points": "1350,727 1368,724 1369,733 1351,736 1350,727",
    "labelX": 1360,
    "labelY": 730,
    "tags": {
      "building": "roof"
    }
  },
  {
    "osmId": 323919385,
    "name": "\u6075\u6bd4\u5bff\u30aa\u30aa\u30bf\u30cb\u30d3\u30eb",
    "kind": "yes",
    "points": "1612,791 1639,790 1637,805 1613,804 1612,791",
    "labelX": 1625,
    "labelY": 798,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30aa\u30aa\u30bf\u30cb\u30d3\u30eb"
    }
  },
  {
    "osmId": 323919386,
    "name": "\u7b2c5\u4f0a\u85e4\u30d3\u30eb",
    "kind": "yes",
    "points": "975,790 966,823 1002,817 1000,797 975,790",
    "labelX": 986,
    "labelY": 807,
    "tags": {
      "building": "yes",
      "name": "\u7b2c5\u4f0a\u85e4\u30d3\u30eb"
    }
  },
  {
    "osmId": 323931492,
    "name": "TK\u30d3\u30eb",
    "kind": "yes",
    "points": "808,444 818,446 778,478 772,470 808,444",
    "labelX": 794,
    "labelY": 460,
    "tags": {
      "building": "yes",
      "name": "TK\u30d3\u30eb"
    }
  },
  {
    "osmId": 323931493,
    "name": "\u30b0\u30ea\u30fc\u30f3\u30cf\u30a6\u30b9\u9ad8\u6a4b",
    "kind": "yes",
    "points": "824,528 856,535 855,538 858,539 853,559 822,552 823,550 821,549 822,544 813,542 816,530 822,532 824,528",
    "labelX": 832,
    "labelY": 542,
    "tags": {
      "building": "yes",
      "name": "\u30b0\u30ea\u30fc\u30f3\u30cf\u30a6\u30b9\u9ad8\u6a4b"
    }
  },
  {
    "osmId": 323931494,
    "kind": "yes",
    "points": "1414,603 1404,673 1372,669 1377,624 1383,625 1385,614 1389,615 1391,599 1414,603",
    "labelX": 1389,
    "labelY": 628,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 323931495,
    "name": "Crescent Ebisu",
    "kind": "apartments",
    "points": "1433,558 1476,564 1474,575 1470,578 1463,580 1460,580 1446,579 1440,578 1437,576 1434,573 1432,569 1433,558",
    "labelX": 1451,
    "labelY": 574,
    "tags": {
      "building": "apartments",
      "name": "\u30af\u30ec\u30bb\u30f3\u30c8\u6075\u6bd4\u5bff",
      "name:en": "Crescent Ebisu"
    }
  },
  {
    "osmId": 323931497,
    "kind": "yes",
    "points": "786,435 759,454 771,469 803,445 786,435",
    "labelX": 780,
    "labelY": 451,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 323931498,
    "kind": "yes",
    "points": "779,480 794,468 800,475 784,487 779,480",
    "labelX": 789,
    "labelY": 478,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 323931499,
    "kind": "yes",
    "points": "815,527 804,557 788,551 796,530 808,524 815,527",
    "labelX": 802,
    "labelY": 538,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 323931500,
    "kind": "yes",
    "points": "1689,630 1663,702 1655,698 1655,658 1659,646 1669,621 1689,630",
    "labelX": 1665,
    "labelY": 659,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 323931501,
    "name": "\u6075\u6bd4\u5bff\u6771\u516c\u5712",
    "kind": "service",
    "points": "836,487 849,489 845,507 842,506 841,509 835,508 836,505 832,503 836,487",
    "labelX": 840,
    "labelY": 502,
    "tags": {
      "amenity": "toilets",
      "building": "service",
      "name": "\u6075\u6bd4\u5bff\u6771\u516c\u5712"
    }
  },
  {
    "osmId": 323931502,
    "name": "\u6075\u6bd4\u5bff\u30aa\u30fc\u30af\u30d3\u30eb",
    "kind": "yes",
    "points": "807,459 822,478 809,507 794,499 784,488 802,475 796,467 807,459",
    "labelX": 802,
    "labelY": 482,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30aa\u30fc\u30af\u30d3\u30eb"
    }
  },
  {
    "osmId": 323931503,
    "name": "\u698e\u672c\u30de\u30a4\u30af\u30ed\u30dd\u30f3\u30d7\u88fd\u4f5c\u6240\u7b2c2\u30d3\u30eb",
    "kind": "yes",
    "points": "779,436 757,453 753,446 755,444 753,440 772,426 779,436",
    "labelX": 762,
    "labelY": 441,
    "tags": {
      "building": "yes",
      "name": "\u698e\u672c\u30de\u30a4\u30af\u30ed\u30dd\u30f3\u30d7\u88fd\u4f5c\u6240\u7b2c2\u30d3\u30eb"
    }
  },
  {
    "osmId": 323931504,
    "name": "First Kyoei Building",
    "kind": "yes",
    "points": "738,461 716,479 759,529 774,520 776,518 776,515 776,512 738,461",
    "labelX": 759,
    "labelY": 505,
    "tags": {
      "building": "yes",
      "name": "\u7b2c\u4e00\u5354\u6804\u30d3\u30eb",
      "name:en": "First Kyoei Building"
    }
  },
  {
    "osmId": 343173484,
    "kind": "yes",
    "points": "1544,2243 1540,2238 1537,2241 1529,2233 1533,2230 1528,2225 1579,2173 1578,2173 1590,2160 1622,2193 1609,2206 1604,2200 1575,2229 1580,2235 1570,2246 1563,2239 1555,2232 1544,2243",
    "labelX": 1567,
    "labelY": 2217,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 343173486,
    "kind": "retail",
    "points": "1569,1985 1538,1954 1531,1961 1489,1919 1496,1912 1420,1836 1405,1851 1377,1823 1369,1831 1376,1838 1370,1845 1361,1837 1331,1867 1318,1876 1318,1889 1333,1898 1377,1942 1370,1949 1394,1974 1402,1966 1466,2029 1479,2017 1523,2061 1532,2052 1544,2065 1536,2073 1593,2130 1656,2131 1656,2118 1685,2118 1685,2040 1677,2040 1677,2032 1662,2032 1662,2015 1647,2015 1647,2000 1632,2000 1632,1985 1569,1985",
    "labelX": 1506,
    "labelY": 1972,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 343173487,
    "kind": "roof",
    "points": "1357,2011 1346,2022 1423,2099 1479,2042 1466,2029 1402,1966 1394,1974 1357,2011",
    "labelX": 1410,
    "labelY": 2020,
    "tags": {
      "building": "roof"
    }
  },
  {
    "osmId": 346383599,
    "name": "\u7b20\u539f\u30d3\u30eb",
    "kind": "yes",
    "points": "351,67 317,82 322,94 354,80 351,72 353,71 351,67",
    "labelX": 341,
    "labelY": 78,
    "tags": {
      "building": "yes",
      "name": "\u7b20\u539f\u30d3\u30eb"
    }
  },
  {
    "osmId": 365669929,
    "kind": "yes",
    "points": "88,1241 117,1220 161,1269 150,1286 148,1284 141,1286 98,1300 47,1242 70,1220 88,1241",
    "labelX": 113,
    "labelY": 1261,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 365671706,
    "kind": "yes",
    "points": "61,1194 49,1201 67,1220 82,1207 88,1212 104,1197 86,1177 65,1198 61,1194",
    "labelX": 75,
    "labelY": 1201,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 365671707,
    "kind": "yes",
    "points": "84,1176 66,1192 56,1181 61,1167 71,1164 84,1176",
    "labelX": 68,
    "labelY": 1176,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 365671708,
    "kind": "yes",
    "points": "-4,1203 29,1188 44,1229 45,1236 40,1237 44,1263 18,1268 9,1239 -4,1203",
    "labelX": 28,
    "labelY": 1233,
    "tags": {
      "amenity": "restaurant",
      "building": "yes"
    }
  },
  {
    "osmId": 365671709,
    "name": "\u30a2\u30b5\u30d2\u30b0\u30eb\u30fc\u30d7\u30ab\u30eb\u30d4\u30b9\u6075\u6bd4\u5bff\u30d3\u30eb",
    "kind": "commercial",
    "points": "103,1357 117,1345 126,1343 136,1343 144,1346 187,1398 188,1406 188,1414 186,1420 183,1426 169,1438 161,1441 121,1475 59,1402 89,1377 98,1387 96,1377 96,1369 99,1362 103,1357",
    "labelX": 134,
    "labelY": 1391,
    "tags": {
      "building": "commercial",
      "name": "\u30a2\u30b5\u30d2\u30b0\u30eb\u30fc\u30d7\u30ab\u30eb\u30d4\u30b9\u6075\u6bd4\u5bff\u30d3\u30eb"
    }
  },
  {
    "osmId": 383586548,
    "kind": "commercial",
    "points": "1383,1629 1364,1632 1374,1691 1393,1687 1383,1629",
    "labelX": 1379,
    "labelY": 1660,
    "tags": {
      "building": "commercial"
    }
  },
  {
    "osmId": 383586549,
    "kind": "commercial",
    "points": "1476,1600 1462,1602 1462,1606 1447,1608 1428,1633 1420,1635 1427,1683 1486,1673 1476,1600",
    "labelX": 1451,
    "labelY": 1630,
    "tags": {
      "building": "commercial"
    }
  },
  {
    "osmId": 383586550,
    "name": "\u30d1\u30fc\u30af\u30a2\u30af\u30b7\u30b9\u6075\u6bd4\u5bff",
    "kind": "residential",
    "points": "1040,1488 1030,1511 1045,1560 1041,1587 1058,1590 1087,1582 1088,1588 1136,1572 1183,1585 1192,1555 1185,1553 1186,1549 1179,1548 1182,1539 1174,1538 1175,1532 1106,1511 1094,1472 1088,1473 1085,1461 1063,1468 1058,1472 1055,1476 1052,1480 1052,1485 1040,1488",
    "labelX": 1105,
    "labelY": 1527,
    "tags": {
      "building": "residential",
      "name": "\u30d1\u30fc\u30af\u30a2\u30af\u30b7\u30b9\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 383586551,
    "kind": "yes",
    "points": "1154,1491 1148,1513 1168,1519 1171,1507 1168,1506 1171,1495 1154,1491",
    "labelX": 1163,
    "labelY": 1505,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 383586553,
    "name": "\u7b2c2\u30a8\u30d3\u30b9\u30cf\u30a4\u30c4",
    "kind": "residential",
    "points": "1097,1655 1083,1653 1056,1660 1061,1674 1069,1673 1066,1689 1071,1689 1070,1698 1076,1699 1075,1709 1091,1711 1097,1655",
    "labelX": 1074,
    "labelY": 1683,
    "tags": {
      "building": "residential",
      "name": "\u7b2c2\u30a8\u30d3\u30b9\u30cf\u30a4\u30c4"
    }
  },
  {
    "osmId": 383586554,
    "name": "\u30ab\u30b2\u30aa\u30ab\u30d3\u30eb\u30c7\u30a3\u30f3\u30b0",
    "kind": "residential",
    "points": "1026,1597 1051,1657 1099,1649 1111,1596 1026,1597",
    "labelX": 1072,
    "labelY": 1625,
    "tags": {
      "building": "residential",
      "name": "\u30ab\u30b2\u30aa\u30ab\u30d3\u30eb\u30c7\u30a3\u30f3\u30b0"
    }
  },
  {
    "osmId": 383586556,
    "kind": "commercial",
    "points": "877,2047 846,2087 851,2114 866,2111 867,2119 911,2109 903,2074 898,2075 893,2058 880,2060 877,2047",
    "labelX": 879,
    "labelY": 2085,
    "tags": {
      "building": "commercial"
    }
  },
  {
    "osmId": 383586557,
    "kind": "commercial",
    "points": "998,2173 973,2179 987,2238 1013,2232 998,2173",
    "labelX": 993,
    "labelY": 2206,
    "tags": {
      "building": "commercial"
    }
  },
  {
    "osmId": 383586559,
    "kind": "commercial",
    "points": "1000,2474 977,2479 985,2509 1007,2503 1000,2474",
    "labelX": 992,
    "labelY": 2491,
    "tags": {
      "building": "commercial"
    }
  },
  {
    "osmId": 386117225,
    "kind": "yes",
    "points": "340,2396 329,2417 419,2467 431,2446 340,2396",
    "labelX": 380,
    "labelY": 2432,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117226,
    "kind": "yes",
    "points": "317,2458 306,2477 383,2521 394,2502 317,2458",
    "labelX": 350,
    "labelY": 2490,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117227,
    "kind": "yes",
    "points": "255,2498 242,2520 342,2576 355,2554 346,2549 349,2543 339,2538 336,2544 282,2515 286,2508 276,2502 272,2508 255,2498",
    "labelX": 307,
    "labelY": 2530,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117229,
    "kind": "yes",
    "points": "113,2462 97,2481 87,2473 78,2483 86,2490 70,2510 136,2565 152,2545 160,2552 168,2541 159,2533 175,2515 150,2494 133,2515 121,2505 139,2484 113,2462",
    "labelX": 127,
    "labelY": 2509,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117231,
    "kind": "yes",
    "points": "101,2338 79,2364 123,2400 144,2374 101,2338",
    "labelX": 112,
    "labelY": 2369,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117232,
    "kind": "yes",
    "points": "157,2393 138,2416 198,2466 217,2443 157,2393",
    "labelX": 178,
    "labelY": 2430,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117233,
    "kind": "yes",
    "points": "144,2282 134,2294 126,2288 101,2318 107,2323 100,2331 185,2403 194,2392 197,2395 208,2383 204,2379 227,2351 144,2282",
    "labelX": 161,
    "labelY": 2345,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117234,
    "kind": "yes",
    "points": "14,2195 -15,2230 32,2270 -15,2325 25,2358 101,2268 14,2195",
    "labelX": 24,
    "labelY": 2274,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117235,
    "kind": "yes",
    "points": "-30,2263 -65,2305 -54,2315 -68,2331 -48,2348 1,2289 -30,2263",
    "labelX": -44,
    "labelY": 2309,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117247,
    "kind": "yes",
    "points": "321,2197 305,2229 371,2261 386,2229 321,2197",
    "labelX": 346,
    "labelY": 2229,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117248,
    "kind": "yes",
    "points": "445,2230 437,2249 561,2298 568,2280 445,2230",
    "labelX": 503,
    "labelY": 2264,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117249,
    "kind": "yes",
    "points": "-132,1855 -170,1898 -145,1920 -153,1930 -118,1961 -128,1973 -81,2015 -68,2001 -29,2036 16,1986 -132,1855",
    "labelX": -101,
    "labelY": 1958,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 386117679,
    "kind": "residential",
    "points": "726,1871 701,1850 694,1848 685,1849 681,1853 678,1857 669,1925 670,1932 673,1937 678,1942 743,1987 786,1926 753,1904 736,1932 731,1928 728,1931 702,1912 713,1912 725,1895 728,1884 728,1877 726,1871",
    "labelX": 711,
    "labelY": 1902,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 393407134,
    "kind": "yes",
    "points": "415,1341 329,1396 393,1476 510,1405 495,1384 504,1380 495,1368 502,1365 489,1344 463,1361 451,1341 425,1357 415,1341",
    "labelX": 456,
    "labelY": 1377,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 393407135,
    "kind": "yes",
    "points": "259,1404 248,1421 233,1412 230,1417 228,1420 224,1418 181,1484 184,1487 173,1507 216,1533 237,1497 232,1494 257,1456 267,1441 264,1438 277,1415 259,1404",
    "labelX": 232,
    "labelY": 1453,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 393407136,
    "kind": "yes",
    "points": "171,1460 151,1462 137,1484 154,1495 159,1488 168,1494 184,1469 171,1460",
    "labelX": 161,
    "labelY": 1479,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 393407137,
    "kind": "yes",
    "points": "-4,1372 -8,1388 29,1396 32,1380 -4,1372",
    "labelX": 12,
    "labelY": 1384,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 393407138,
    "kind": "yes",
    "points": "29,1340 26,1360 47,1363 50,1343 29,1340",
    "labelX": 38,
    "labelY": 1352,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 393407139,
    "kind": "yes",
    "points": "368,1168 285,1198 297,1231 380,1201 368,1168",
    "labelX": 333,
    "labelY": 1200,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 393407140,
    "kind": "yes",
    "points": "235,1150 209,1157 220,1212 210,1214 211,1229 234,1225 241,1215 257,1205 252,1176 241,1178 235,1150",
    "labelX": 231,
    "labelY": 1196,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 393407141,
    "kind": "yes",
    "points": "388,1541 361,1566 391,1603 381,1634 403,1645 426,1593 388,1541",
    "labelX": 392,
    "labelY": 1597,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 394009052,
    "kind": "school",
    "points": "1922,138 1927,164 1941,161 1943,167 2023,151 2026,164 1929,185 1958,321 2004,311 1984,220 2153,184 2149,165 2157,164 2153,145 2083,160 2082,154 2044,162 2041,149 2063,144 2056,108 2051,109 2048,95 1994,106 1997,122 1954,131 1952,119 1939,121 1942,134 1922,138",
    "labelX": 2018,
    "labelY": 159,
    "tags": {
      "building": "school"
    }
  },
  {
    "osmId": 394101912,
    "kind": "residential",
    "points": "2035,13 2021,15 2022,24 1995,28 2000,67 2012,66 2011,57 2025,55 2027,66 2043,64 2035,13",
    "labelX": 2019,
    "labelY": 46,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 394101913,
    "kind": "residential",
    "points": "1997,67 1975,69 1976,84 1998,82 1997,67",
    "labelX": 1987,
    "labelY": 76,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 394101915,
    "kind": "residential",
    "points": "1990,24 1976,26 1977,34 1970,35 1973,62 1994,59 1990,24",
    "labelX": 1980,
    "labelY": 40,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 394101916,
    "kind": "residential",
    "points": "1946,35 1948,52 1958,50 1959,59 1948,60 1952,90 1963,89 1963,85 1974,84 1968,32 1946,35",
    "labelX": 1958,
    "labelY": 64,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 394118391,
    "kind": "house",
    "points": "1706,116 1693,122 1702,145 1715,140 1706,116",
    "labelX": 1704,
    "labelY": 131,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118392,
    "kind": "house",
    "points": "1718,112 1708,116 1717,139 1729,134 1721,115 1719,116 1718,112",
    "labelX": 1719,
    "labelY": 122,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118393,
    "kind": "house",
    "points": "1731,105 1721,110 1733,135 1743,131 1731,105",
    "labelX": 1732,
    "labelY": 120,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118394,
    "kind": "house",
    "points": "1725,96 1694,109 1697,118 1728,105 1725,96",
    "labelX": 1711,
    "labelY": 107,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118395,
    "kind": "house",
    "points": "1720,86 1689,99 1693,108 1724,95 1720,86",
    "labelX": 1707,
    "labelY": 97,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118396,
    "kind": "house",
    "points": "1715,76 1684,88 1688,97 1718,85 1715,76",
    "labelX": 1701,
    "labelY": 87,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118397,
    "kind": "house",
    "points": "1703,51 1668,66 1675,82 1688,76 1691,82 1712,72 1703,51",
    "labelX": 1690,
    "labelY": 72,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118398,
    "kind": "house",
    "points": "1693,26 1668,36 1677,58 1702,48 1693,26",
    "labelX": 1685,
    "labelY": 42,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118399,
    "kind": "house",
    "points": "1659,14 1647,19 1655,36 1666,31 1659,14",
    "labelX": 1657,
    "labelY": 25,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118400,
    "kind": "house",
    "points": "1677,7 1662,13 1669,32 1685,25 1677,7",
    "labelX": 1673,
    "labelY": 19,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118401,
    "kind": "house",
    "points": "1655,-26 1629,-14 1637,3 1663,-10 1655,-26",
    "labelX": 1646,
    "labelY": -12,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118402,
    "kind": "house",
    "points": "1599,6 1584,16 1598,37 1613,27 1599,6",
    "labelX": 1599,
    "labelY": 22,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118403,
    "kind": "house",
    "points": "1623,-7 1605,1 1614,21 1632,13 1623,-7",
    "labelX": 1619,
    "labelY": 7,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118404,
    "kind": "house",
    "points": "1636,21 1618,29 1625,44 1642,37 1636,21",
    "labelX": 1630,
    "labelY": 33,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118405,
    "kind": "house",
    "points": "1618,32 1599,40 1611,66 1629,58 1618,32",
    "labelX": 1614,
    "labelY": 49,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118406,
    "kind": "house",
    "points": "1647,57 1618,69 1622,79 1636,73 1637,77 1653,70 1647,57",
    "labelX": 1636,
    "labelY": 71,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118407,
    "kind": "house",
    "points": "1649,75 1628,83 1632,94 1639,91 1641,96 1656,91 1649,75",
    "labelX": 1641,
    "labelY": 88,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118408,
    "kind": "house",
    "points": "1665,90 1651,95 1654,104 1668,99 1665,90",
    "labelX": 1660,
    "labelY": 97,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118409,
    "kind": "house",
    "points": "1672,101 1643,112 1651,134 1664,129 1662,124 1678,118 1672,101",
    "labelX": 1662,
    "labelY": 120,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118419,
    "kind": "residential",
    "points": "1475,22 1457,36 1461,42 1473,46 1491,58 1498,53 1475,22",
    "labelX": 1476,
    "labelY": 43,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 394118420,
    "kind": "house",
    "points": "1452,-13 1430,3 1447,25 1469,10 1452,-13",
    "labelX": 1450,
    "labelY": 6,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 394118421,
    "kind": "residential",
    "points": "1416,-52 1408,-12 1414,-3 1418,-6 1424,2 1446,-11 1416,-52",
    "labelX": 1421,
    "labelY": -14,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 394118422,
    "kind": "residential",
    "points": "1501,56 1490,65 1486,60 1471,73 1475,78 1468,84 1474,90 1470,93 1504,134 1510,128 1514,133 1544,107 1501,56",
    "labelX": 1492,
    "labelY": 92,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 394569595,
    "kind": "residential",
    "points": "2081,617 2060,634 2094,678 2123,675 2127,672 2118,660 2132,650 2106,616 2096,624 2090,618 2085,622 2081,617",
    "labelX": 2101,
    "labelY": 642,
    "tags": {
      "building": "residential"
    }
  },
  {
    "osmId": 410747325,
    "kind": "commercial",
    "points": "1042,2492 1048,2511 1083,2498 1079,2478 1042,2492",
    "labelX": 1063,
    "labelY": 2495,
    "tags": {
      "building": "commercial"
    }
  },
  {
    "osmId": 442741155,
    "name": "\u682a\u5f0f\u4f1a\u793e\u30e6\u30fc\u30fb\u30a8\u30b9\u30fb\u30a4\u30fc",
    "kind": "commercial",
    "points": "1732,1467 1711,1477 1724,1505 1708,1508 1681,1464 1692,1442 1713,1427 1724,1452 1732,1467",
    "labelX": 1711,
    "labelY": 1468,
    "tags": {
      "building": "commercial",
      "name": "\u682a\u5f0f\u4f1a\u793e\u30e6\u30fc\u30fb\u30a8\u30b9\u30fb\u30a4\u30fc"
    }
  },
  {
    "osmId": 499554058,
    "kind": "yes",
    "points": "368,1846 369,1837 367,1836 370,1826 391,1834 386,1852 368,1846",
    "labelX": 375,
    "labelY": 1839,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554059,
    "kind": "yes",
    "points": "405,1857 406,1853 403,1852 406,1840 424,1844 420,1860 405,1857",
    "labelX": 411,
    "labelY": 1851,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554060,
    "kind": "yes",
    "points": "398,1858 387,1854 394,1834 404,1837 398,1858",
    "labelX": 396,
    "labelY": 1846,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554061,
    "kind": "yes",
    "points": "394,1821 391,1829 374,1823 383,1796 400,1801 404,1803 401,1812 408,1814 404,1824 394,1821",
    "labelX": 395,
    "labelY": 1814,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554062,
    "kind": "yes",
    "points": "415,1798 384,1790 389,1772 419,1780 415,1798",
    "labelX": 402,
    "labelY": 1785,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554063,
    "kind": "yes",
    "points": "409,1773 414,1750 426,1753 420,1775 409,1773",
    "labelX": 417,
    "labelY": 1763,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554064,
    "kind": "yes",
    "points": "410,1751 406,1766 394,1762 398,1747 410,1751",
    "labelX": 402,
    "labelY": 1757,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554065,
    "kind": "yes",
    "points": "435,1739 453,1743 436,1831 418,1828 435,1739",
    "labelX": 436,
    "labelY": 1785,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554066,
    "kind": "yes",
    "points": "440,1723 447,1697 460,1701 465,1713 460,1729 440,1723",
    "labelX": 454,
    "labelY": 1713,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554067,
    "kind": "yes",
    "points": "432,1725 405,1717 407,1710 434,1717 432,1725",
    "labelX": 420,
    "labelY": 1717,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554068,
    "kind": "yes",
    "points": "416,1686 442,1693 436,1715 410,1707 416,1686",
    "labelX": 426,
    "labelY": 1700,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554069,
    "kind": "yes",
    "points": "388,1720 368,1711 374,1699 393,1708 388,1720",
    "labelX": 381,
    "labelY": 1710,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554070,
    "kind": "yes",
    "points": "373,1666 385,1671 369,1706 357,1700 373,1666",
    "labelX": 371,
    "labelY": 1686,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554071,
    "kind": "yes",
    "points": "423,1621 432,1604 438,1603 447,1613 435,1624 423,1621",
    "labelX": 435,
    "labelY": 1613,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554072,
    "kind": "yes",
    "points": "446,1642 439,1627 444,1622 457,1629 459,1627 471,1638 463,1651 446,1642",
    "labelX": 454,
    "labelY": 1634,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554073,
    "kind": "yes",
    "points": "416,1657 423,1639 440,1645 457,1663 454,1672 416,1657",
    "labelX": 438,
    "labelY": 1655,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554074,
    "kind": "yes",
    "points": "479,1646 491,1656 490,1666 477,1682 470,1681 458,1672 479,1646",
    "labelX": 478,
    "labelY": 1667,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554075,
    "kind": "yes",
    "points": "500,1701 522,1716 519,1733 491,1728 495,1709 500,1701",
    "labelX": 505,
    "labelY": 1717,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554076,
    "kind": "yes",
    "points": "503,1692 510,1685 519,1684 535,1698 524,1711 503,1692",
    "labelX": 518,
    "labelY": 1694,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554077,
    "kind": "yes",
    "points": "549,1708 549,1734 528,1735 527,1717 540,1700 549,1708",
    "labelX": 539,
    "labelY": 1719,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554078,
    "kind": "yes",
    "points": "486,1768 491,1734 542,1743 539,1793 517,1788 518,1774 486,1768",
    "labelX": 516,
    "labelY": 1767,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554079,
    "kind": "yes",
    "points": "476,1786 479,1771 508,1776 505,1791 476,1786",
    "labelX": 492,
    "labelY": 1781,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554080,
    "kind": "yes",
    "points": "530,1808 531,1797 550,1798 550,1809 530,1808",
    "labelX": 540,
    "labelY": 1803,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554081,
    "kind": "yes",
    "points": "493,1818 494,1810 472,1806 475,1791 509,1797 506,1819 493,1818",
    "labelX": 492,
    "labelY": 1807,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554082,
    "kind": "yes",
    "points": "511,1824 512,1814 543,1817 538,1884 517,1883 493,1878 473,1878 465,1871 475,1817 511,1824",
    "labelX": 503,
    "labelY": 1852,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554083,
    "kind": "yes",
    "points": "592,1858 561,1858 561,1853 592,1853 592,1858",
    "labelX": 577,
    "labelY": 1856,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554084,
    "kind": "yes",
    "points": "594,1839 593,1850 570,1850 571,1835 577,1835 577,1831 596,1831 596,1839 594,1839",
    "labelX": 584,
    "labelY": 1839,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554085,
    "kind": "yes",
    "points": "594,1821 563,1821 563,1812 595,1812 594,1821",
    "labelX": 579,
    "labelY": 1817,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554086,
    "kind": "yes",
    "points": "608,1780 618,1769 630,1781 619,1792 599,1812 601,1797 613,1785 608,1780",
    "labelX": 613,
    "labelY": 1788,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554087,
    "kind": "yes",
    "points": "564,1798 597,1799 596,1809 578,1809 578,1806 564,1805 564,1798",
    "labelX": 580,
    "labelY": 1804,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554088,
    "kind": "yes",
    "points": "567,1727 598,1758 600,1756 612,1768 603,1777 603,1784 568,1781 570,1764 567,1727",
    "labelX": 590,
    "labelY": 1764,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554089,
    "kind": "yes",
    "points": "634,1836 630,1840 616,1828 609,1835 598,1825 624,1796 629,1801 639,1791 657,1807 658,1827 643,1844 634,1836",
    "labelX": 631,
    "labelY": 1821,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554090,
    "kind": "yes",
    "points": "602,1867 607,1847 638,1854 634,1874 602,1867",
    "labelX": 620,
    "labelY": 1861,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554091,
    "kind": "yes",
    "points": "597,1893 629,1894 628,1912 613,1916 597,1904 597,1893",
    "labelX": 613,
    "labelY": 1904,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554092,
    "kind": "yes",
    "points": "561,1864 595,1867 590,1904 558,1896 561,1864",
    "labelX": 576,
    "labelY": 1883,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554093,
    "kind": "yes",
    "points": "685,1999 678,2023 669,2020 670,2014 667,2013 672,1995 685,1999",
    "labelX": 674,
    "labelY": 2011,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554094,
    "kind": "yes",
    "points": "672,2047 652,2042 655,2029 660,2030 661,2025 677,2029 672,2047",
    "labelX": 663,
    "labelY": 2034,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554095,
    "kind": "yes",
    "points": "543,2060 516,2053 522,2032 548,2039 543,2060",
    "labelX": 532,
    "labelY": 2046,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554096,
    "kind": "yes",
    "points": "560,2015 556,2030 529,2023 531,2015 527,2014 529,2007 560,2015",
    "labelX": 539,
    "labelY": 2017,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554097,
    "kind": "yes",
    "points": "587,2039 560,2031 564,2016 591,2023 587,2039",
    "labelX": 576,
    "labelY": 2027,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554098,
    "kind": "yes",
    "points": "597,2020 567,2012 572,1993 601,2001 597,2020",
    "labelX": 584,
    "labelY": 2007,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554099,
    "kind": "yes",
    "points": "559,2000 531,1993 536,1973 564,1980 559,2000",
    "labelX": 548,
    "labelY": 1987,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554100,
    "kind": "yes",
    "points": "572,1979 541,1971 543,1963 544,1964 547,1956 555,1958 556,1954 567,1957 565,1962 576,1964 572,1979",
    "labelX": 557,
    "labelY": 1963,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554101,
    "kind": "yes",
    "points": "555,1946 556,1941 544,1939 545,1930 548,1931 550,1922 562,1924 560,1933 565,1934 562,1948 555,1946",
    "labelX": 555,
    "labelY": 1935,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554102,
    "kind": "yes",
    "points": "569,1928 583,1931 579,1951 565,1947 569,1928",
    "labelX": 574,
    "labelY": 1939,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554103,
    "kind": "yes",
    "points": "593,1970 580,1966 588,1938 601,1942 593,1970",
    "labelX": 591,
    "labelY": 1954,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554104,
    "kind": "yes",
    "points": "610,1982 597,1978 605,1949 618,1953 610,1982",
    "labelX": 608,
    "labelY": 1966,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554105,
    "kind": "yes",
    "points": "641,2006 623,2001 627,1989 645,1994 641,2006",
    "labelX": 634,
    "labelY": 1998,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554106,
    "kind": "yes",
    "points": "646,1989 630,1984 633,1973 649,1977 646,1989",
    "labelX": 640,
    "labelY": 1981,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554107,
    "kind": "yes",
    "points": "658,2009 648,2007 655,1982 665,1985 658,2009",
    "labelX": 657,
    "labelY": 1996,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554108,
    "kind": "yes",
    "points": "657,2026 640,2021 643,2010 660,2015 657,2026",
    "labelX": 650,
    "labelY": 2018,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554109,
    "kind": "yes",
    "points": "633,2036 613,2030 616,2018 636,2024 633,2036",
    "labelX": 625,
    "labelY": 2027,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554110,
    "kind": "yes",
    "points": "648,2044 635,2040 639,2024 653,2028 648,2044",
    "labelX": 644,
    "labelY": 2034,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554111,
    "kind": "yes",
    "points": "709,2032 683,2024 688,2006 701,2010 713,2020 709,2032",
    "labelX": 699,
    "labelY": 2018,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554112,
    "kind": "yes",
    "points": "689,2051 675,2047 681,2027 695,2030 689,2051",
    "labelX": 685,
    "labelY": 2039,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554113,
    "kind": "yes",
    "points": "701,2054 692,2052 698,2032 707,2035 701,2054",
    "labelX": 700,
    "labelY": 2043,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554114,
    "kind": "yes",
    "points": "669,2064 673,2049 700,2057 696,2071 669,2064",
    "labelX": 685,
    "labelY": 2060,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554115,
    "kind": "yes",
    "points": "662,2063 647,2059 651,2045 665,2050 662,2063",
    "labelX": 656,
    "labelY": 2054,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554116,
    "kind": "yes",
    "points": "610,2047 613,2040 633,2045 631,2053 610,2047",
    "labelX": 622,
    "labelY": 2046,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554117,
    "kind": "yes",
    "points": "619,2088 602,2083 610,2053 627,2057 619,2088",
    "labelX": 615,
    "labelY": 2070,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554118,
    "kind": "yes",
    "points": "645,2094 625,2089 633,2060 653,2065 645,2094",
    "labelX": 639,
    "labelY": 2077,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554119,
    "kind": "yes",
    "points": "664,2074 672,2077 663,2100 654,2096 655,2094 648,2091 658,2065 667,2068 664,2074",
    "labelX": 660,
    "labelY": 2083,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554120,
    "kind": "yes",
    "points": "677,2072 691,2077 680,2106 666,2100 677,2072",
    "labelX": 679,
    "labelY": 2089,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554121,
    "kind": "yes",
    "points": "664,2135 671,2137 667,2151 644,2145 648,2131 654,2133 656,2127 666,2130 664,2135",
    "labelX": 659,
    "labelY": 2136,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554122,
    "kind": "yes",
    "points": "629,2115 628,2119 644,2123 640,2143 633,2142 631,2146 618,2143 619,2139 615,2138 620,2113 629,2115",
    "labelX": 628,
    "labelY": 2132,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554123,
    "kind": "yes",
    "points": "607,2145 583,2139 589,2111 614,2116 607,2145",
    "labelX": 598,
    "labelY": 2128,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554124,
    "kind": "yes",
    "points": "577,2159 582,2143 612,2152 606,2168 577,2159",
    "labelX": 594,
    "labelY": 2156,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554125,
    "kind": "yes",
    "points": "625,2164 637,2167 633,2184 618,2180 619,2175 614,2174 615,2171 611,2170 615,2152 627,2155 625,2164",
    "labelX": 621,
    "labelY": 2169,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554126,
    "kind": "yes",
    "points": "571,2194 576,2177 600,2184 595,2201 571,2194",
    "labelX": 586,
    "labelY": 2189,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554127,
    "kind": "yes",
    "points": "654,2227 650,2226 648,2234 624,2228 628,2214 655,2222 654,2227",
    "labelX": 643,
    "labelY": 2225,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554128,
    "kind": "yes",
    "points": "640,2181 643,2169 668,2176 665,2188 640,2181",
    "labelX": 654,
    "labelY": 2179,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554129,
    "kind": "yes",
    "points": "652,2214 628,2208 634,2189 664,2197 653,2207 652,2214",
    "labelX": 646,
    "labelY": 2203,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554130,
    "kind": "yes",
    "points": "641,2239 653,2243 649,2255 638,2265 633,2263 641,2239",
    "labelX": 643,
    "labelY": 2253,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499554131,
    "name": "\u30ec\u30b8\u30c7\u30a3\u30a2\u6075\u6bd4\u5bff\u5357",
    "kind": "residential",
    "points": "620,2249 634,2254 632,2260 560,2234 562,2228 580,2220 582,2215 596,2220 607,2190 614,2186 626,2191 624,2197 628,2198 617,2229 620,2249",
    "labelX": 606,
    "labelY": 2219,
    "tags": {
      "building": "residential",
      "name": "\u30ec\u30b8\u30c7\u30a3\u30a2\u6075\u6bd4\u5bff\u5357"
    }
  },
  {
    "osmId": 499555031,
    "kind": "yes",
    "points": "56,1303 73,1297 76,1305 58,1311 56,1303",
    "labelX": 66,
    "labelY": 1304,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499555032,
    "kind": "yes",
    "points": "51,1285 64,1285 65,1298 51,1299 51,1285",
    "labelX": 58,
    "labelY": 1292,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499555033,
    "kind": "yes",
    "points": "-1,1327 -7,1322 -8,1304 -3,1302 -6,1291 13,1279 16,1291 27,1289 25,1281 43,1276 53,1310 -1,1327",
    "labelX": 14,
    "labelY": 1297,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499555034,
    "kind": "yes",
    "points": "-13,1259 9,1252 13,1262 -5,1268 -7,1261 -11,1262 -13,1259",
    "labelX": -2,
    "labelY": 1261,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499555035,
    "kind": "yes",
    "points": "4,1237 8,1245 -12,1253 -14,1249 -18,1250 -20,1247 4,1237",
    "labelX": -9,
    "labelY": 1247,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 499555036,
    "kind": "yes",
    "points": "-26,1232 -3,1221 2,1231 -21,1242 -26,1232",
    "labelX": -12,
    "labelY": 1232,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 539439487,
    "name": "JR\u6075\u6bd4\u5bff\u30d3\u30eb",
    "kind": "yes",
    "points": "541,899 584,984 594,980 655,1126 725,1099 712,1069 719,1066 744,1054 651,849 541,899",
    "labelX": 658,
    "labelY": 1014,
    "tags": {
      "building": "yes",
      "name": "JR\u6075\u6bd4\u5bff\u30d3\u30eb"
    }
  },
  {
    "osmId": 541985033,
    "kind": "office",
    "points": "1021,931 1012,920 1028,906 1033,911 1033,920 1021,931",
    "labelX": 1025,
    "labelY": 918,
    "tags": {
      "building": "office"
    }
  },
  {
    "osmId": 541985034,
    "kind": "retail",
    "points": "1030,903 1011,920 1004,911 1018,898 1028,900 1030,903",
    "labelX": 1018,
    "labelY": 906,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 544724796,
    "kind": "retail",
    "points": "558,417 587,397 580,387 584,383 606,415 584,431 571,430 558,417",
    "labelX": 581,
    "labelY": 409,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 560073278,
    "kind": "yes",
    "points": "412,1181 380,1192 372,1169 405,1158 412,1181",
    "labelX": 392,
    "labelY": 1175,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073279,
    "kind": "yes",
    "points": "446,1178 419,1189 408,1162 435,1152 446,1178",
    "labelX": 427,
    "labelY": 1170,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073281,
    "kind": "yes",
    "points": "438,1152 470,1147 472,1160 466,1170 447,1177 438,1152",
    "labelX": 459,
    "labelY": 1161,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073282,
    "kind": "yes",
    "points": "408,1153 401,1109 419,1106 418,1099 459,1092 467,1144 408,1153",
    "labelX": 429,
    "labelY": 1117,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073284,
    "kind": "yes",
    "points": "630,1373 685,1366 687,1381 675,1389 632,1394 630,1373",
    "labelX": 662,
    "labelY": 1381,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073286,
    "kind": "yes",
    "points": "627,1347 668,1342 671,1364 630,1369 627,1347",
    "labelX": 649,
    "labelY": 1356,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073289,
    "kind": "yes",
    "points": "701,1369 744,1365 745,1377 702,1381 701,1369",
    "labelX": 723,
    "labelY": 1373,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073291,
    "kind": "yes",
    "points": "700,1347 736,1343 743,1361 702,1365 700,1347",
    "labelX": 720,
    "labelY": 1354,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073293,
    "kind": "yes",
    "points": "698,1324 723,1322 731,1340 700,1343 698,1324",
    "labelX": 713,
    "labelY": 1332,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073295,
    "kind": "yes",
    "points": "695,1297 713,1295 721,1316 697,1318 695,1297",
    "labelX": 707,
    "labelY": 1307,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073297,
    "kind": "yes",
    "points": "692,1290 689,1253 707,1251 711,1288 692,1290",
    "labelX": 700,
    "labelY": 1271,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073298,
    "kind": "yes",
    "points": "592,1186 575,1190 570,1171 557,1175 553,1159 583,1151 592,1186",
    "labelX": 572,
    "labelY": 1172,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073300,
    "kind": "yes",
    "points": "598,1132 609,1175 593,1180 582,1136 598,1132",
    "labelX": 596,
    "labelY": 1156,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073303,
    "kind": "yes",
    "points": "627,1170 612,1174 600,1131 616,1127 627,1170",
    "labelX": 614,
    "labelY": 1151,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073305,
    "kind": "yes",
    "points": "631,1169 620,1126 634,1122 652,1163 631,1169",
    "labelX": 634,
    "labelY": 1145,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073307,
    "kind": "yes",
    "points": "548,1182 569,1178 576,1213 555,1217 548,1182",
    "labelX": 562,
    "labelY": 1198,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073309,
    "kind": "yes",
    "points": "610,1184 617,1204 584,1216 576,1197 610,1184",
    "labelX": 597,
    "labelY": 1200,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073311,
    "kind": "yes",
    "points": "615,1181 651,1167 661,1194 625,1208 615,1181",
    "labelX": 638,
    "labelY": 1188,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073313,
    "kind": "yes",
    "points": "518,1138 532,1141 539,1138 532,1123 516,1134 518,1138",
    "labelX": 527,
    "labelY": 1135,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073315,
    "kind": "yes",
    "points": "533,1123 542,1117 551,1133 539,1138 533,1123",
    "labelX": 541,
    "labelY": 1128,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073317,
    "kind": "yes",
    "points": "575,1117 549,1128 543,1114 569,1103 575,1117",
    "labelX": 559,
    "labelY": 1116,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073318,
    "kind": "yes",
    "points": "600,1118 579,1126 570,1103 591,1095 600,1118",
    "labelX": 585,
    "labelY": 1111,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073319,
    "kind": "yes",
    "points": "595,1097 616,1089 624,1111 603,1119 595,1097",
    "labelX": 610,
    "labelY": 1104,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073321,
    "kind": "yes",
    "points": "547,1013 539,997 556,989 564,1005 547,1013",
    "labelX": 552,
    "labelY": 1001,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073323,
    "kind": "yes",
    "points": "500,1107 482,1068 573,1026 586,1046 598,1064 531,1093 500,1107",
    "labelX": 545,
    "labelY": 1067,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073327,
    "kind": "yes",
    "points": "637,1302 641,1335 632,1336 631,1324 615,1326 613,1305 637,1302",
    "labelX": 628,
    "labelY": 1321,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073331,
    "kind": "yes",
    "points": "645,1340 643,1320 680,1316 682,1336 645,1340",
    "labelX": 663,
    "labelY": 1328,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073334,
    "kind": "yes",
    "points": "642,1316 641,1300 677,1296 679,1312 642,1316",
    "labelX": 660,
    "labelY": 1306,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073336,
    "kind": "yes",
    "points": "570,1266 573,1291 559,1293 557,1275 562,1274 561,1267 570,1266",
    "labelX": 564,
    "labelY": 1278,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073338,
    "kind": "yes",
    "points": "621,1301 578,1306 575,1273 579,1272 579,1266 604,1263 605,1269 618,1268 621,1301",
    "labelX": 595,
    "labelY": 1277,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073340,
    "kind": "yes",
    "points": "608,1218 611,1240 592,1242 590,1220 608,1218",
    "labelX": 600,
    "labelY": 1230,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073343,
    "kind": "yes",
    "points": "624,1219 667,1214 669,1235 626,1240 624,1219",
    "labelX": 647,
    "labelY": 1227,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073344,
    "kind": "yes",
    "points": "645,1251 649,1285 628,1287 624,1253 645,1251",
    "labelX": 637,
    "labelY": 1269,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 560073346,
    "kind": "yes",
    "points": "648,1253 669,1250 676,1282 651,1284 648,1253",
    "labelX": 661,
    "labelY": 1267,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 626121458,
    "kind": "yes",
    "points": "1712,1651 1725,1650 1725,1637 1711,1637 1712,1651",
    "labelX": 1718,
    "labelY": 1644,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 627424781,
    "kind": "yes",
    "points": "1367,43 1388,45 1387,54 1394,55 1390,87 1382,86 1381,93 1365,91 1366,84 1357,83 1361,51 1366,52 1367,43",
    "labelX": 1375,
    "labelY": 69,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 627424786,
    "kind": "yes",
    "points": "1324,141 1336,135 1345,157 1349,157 1347,201 1332,200 1333,162 1324,141",
    "labelX": 1338,
    "labelY": 165,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 627424787,
    "kind": "yes",
    "points": "1318,74 1354,78 1354,87 1360,88 1358,104 1354,103 1350,118 1313,113 1318,74",
    "labelX": 1345,
    "labelY": 96,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 627424788,
    "kind": "yes",
    "points": "1375,121 1376,117 1381,114 1385,118 1384,123 1379,125 1375,121",
    "labelX": 1380,
    "labelY": 120,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 659513962,
    "name": "\u30f4\u30a8\u30ca\u30d3\u30b9\u30bf\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1144,1220 1140,1249 1163,1253 1164,1247 1174,1249 1173,1256 1198,1262 1202,1235 1178,1224 1176,1233 1168,1231 1169,1221 1150,1218 1149,1221 1144,1220",
    "labelX": 1168,
    "labelY": 1237,
    "tags": {
      "building": "yes",
      "name": "\u30f4\u30a8\u30ca\u30d3\u30b9\u30bf\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 660002441,
    "kind": "roof",
    "points": "63,978 66,983 83,974 80,967 63,978",
    "labelX": 73,
    "labelY": 976,
    "tags": {
      "building": "roof"
    }
  },
  {
    "osmId": 660002442,
    "kind": "roof",
    "points": "88,1019 92,1026 109,1017 106,1010 88,1019",
    "labelX": 99,
    "labelY": 1018,
    "tags": {
      "building": "roof"
    }
  },
  {
    "osmId": 674379236,
    "name": "HOTEL LUXE EBISU",
    "kind": "yes",
    "points": "298,1100 304,1116 349,1099 337,1071 322,1077 326,1088 298,1100",
    "labelX": 323,
    "labelY": 1092,
    "tags": {
      "amenity": "love_hotel",
      "building": "yes",
      "name": "\u30db\u30c6\u30eb\u30fb\u30ea\u30e5\u30af\u30b9\u6075\u6bd4\u5bff",
      "name:en": "HOTEL LUXE EBISU"
    }
  },
  {
    "osmId": 682116739,
    "kind": "yes",
    "points": "1769,63 1788,54 1795,70 1776,79 1769,63",
    "labelX": 1782,
    "labelY": 67,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682116740,
    "kind": "yes",
    "points": "1792,52 1821,39 1828,57 1800,69 1792,52",
    "labelX": 1810,
    "labelY": 54,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682116741,
    "kind": "house",
    "points": "1822,41 1834,33 1848,52 1837,60 1822,41",
    "labelX": 1835,
    "labelY": 47,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 682116742,
    "kind": "house",
    "points": "1803,77 1826,70 1824,65 1846,58 1852,76 1832,82 1832,82 1807,90 1803,77",
    "labelX": 1828,
    "labelY": 75,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 682116743,
    "kind": "house",
    "points": "1836,81 1859,75 1862,87 1853,89 1854,97 1840,100 1836,81",
    "labelX": 1851,
    "labelY": 88,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 682236616,
    "kind": "yes",
    "points": "1234,-14 1264,-71 1287,-57 1289,-62 1293,-61 1294,-66 1314,-63 1311,-53 1318,-53 1307,15 1294,12 1291,25 1229,13 1242,-9 1234,-14",
    "labelX": 1283,
    "labelY": -32,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236617,
    "kind": "yes",
    "points": "1199,363 1200,331 1176,330 1176,346 1181,347 1181,358 1199,363",
    "labelX": 1186,
    "labelY": 346,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236618,
    "kind": "yes",
    "points": "1201,319 1201,363 1228,371 1230,319 1201,319",
    "labelX": 1215,
    "labelY": 343,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236619,
    "kind": "yes",
    "points": "1279,292 1314,296 1309,339 1273,335 1279,292",
    "labelX": 1294,
    "labelY": 316,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236620,
    "kind": "yes",
    "points": "1233,285 1234,253 1251,254 1250,285 1233,285",
    "labelX": 1242,
    "labelY": 269,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236621,
    "kind": "yes",
    "points": "1257,249 1268,249 1267,271 1272,271 1271,287 1254,286 1257,249",
    "labelX": 1265,
    "labelY": 269,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236622,
    "kind": "yes",
    "points": "1275,250 1274,275 1287,276 1288,250 1275,250",
    "labelX": 1281,
    "labelY": 263,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236623,
    "kind": "yes",
    "points": "1288,288 1317,292 1318,279 1312,279 1289,276 1288,288",
    "labelX": 1305,
    "labelY": 283,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236624,
    "kind": "yes",
    "points": "1288,275 1290,263 1314,267 1312,279 1288,275",
    "labelX": 1301,
    "labelY": 271,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236625,
    "kind": "yes",
    "points": "1304,236 1317,236 1316,267 1305,265 1304,236",
    "labelX": 1311,
    "labelY": 251,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236626,
    "kind": "yes",
    "points": "1289,245 1303,245 1303,261 1289,261 1289,245",
    "labelX": 1296,
    "labelY": 253,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236627,
    "kind": "yes",
    "points": "1338,226 1360,229 1357,255 1334,252 1338,226",
    "labelX": 1347,
    "labelY": 241,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236628,
    "kind": "yes",
    "points": "1203,299 1203,317 1230,318 1230,299 1203,299",
    "labelX": 1217,
    "labelY": 308,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236629,
    "kind": "yes",
    "points": "1174,290 1199,291 1198,319 1173,318 1174,290",
    "labelX": 1186,
    "labelY": 305,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236630,
    "kind": "yes",
    "points": "1165,262 1166,283 1177,283 1176,263 1176,261 1165,262",
    "labelX": 1172,
    "labelY": 270,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236631,
    "kind": "yes",
    "points": "1176,263 1186,262 1187,282 1177,283 1176,263",
    "labelX": 1182,
    "labelY": 273,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236632,
    "kind": "yes",
    "points": "1161,206 1200,201 1205,238 1190,239 1188,223 1163,226 1161,206",
    "labelX": 1185,
    "labelY": 222,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236633,
    "kind": "yes",
    "points": "1160,228 1174,228 1174,247 1161,247 1160,228",
    "labelX": 1167,
    "labelY": 238,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236634,
    "kind": "yes",
    "points": "1188,166 1173,159 1166,173 1175,177 1184,174 1188,166",
    "labelX": 1177,
    "labelY": 170,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236635,
    "kind": "yes",
    "points": "1138,175 1146,157 1152,160 1155,153 1171,161 1162,179 1155,176 1152,182 1138,175",
    "labelX": 1154,
    "labelY": 168,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236636,
    "kind": "yes",
    "points": "1125,170 1136,146 1147,151 1137,175 1125,170",
    "labelX": 1136,
    "labelY": 161,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236637,
    "kind": "yes",
    "points": "1115,130 1130,135 1123,153 1129,155 1124,170 1103,163 1115,130",
    "labelX": 1121,
    "labelY": 151,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236638,
    "kind": "house",
    "points": "1027,23 1039,-2 1051,-12 1051,23 1027,23",
    "labelX": 1042,
    "labelY": 8,
    "tags": {
      "building": "house"
    }
  },
  {
    "osmId": 682236639,
    "kind": "yes",
    "points": "1015,45 1025,26 1048,29 1046,52 1028,51 1029,45 1015,45",
    "labelX": 1032,
    "labelY": 41,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236640,
    "kind": "yes",
    "points": "1010,54 1024,50 1027,57 1028,56 1031,66 999,76 1010,54",
    "labelX": 1020,
    "labelY": 60,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236641,
    "kind": "yes",
    "points": "1004,103 1024,78 1038,89 1027,103 1017,114 1004,103",
    "labelX": 1022,
    "labelY": 97,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236642,
    "kind": "yes",
    "points": "1406,2 1429,4 1424,34 1401,31 1406,2",
    "labelX": 1415,
    "labelY": 18,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236643,
    "kind": "yes",
    "points": "1400,48 1437,50 1438,40 1400,37 1400,48",
    "labelX": 1419,
    "labelY": 44,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236644,
    "kind": "yes",
    "points": "1398,52 1396,71 1407,73 1409,52 1398,52",
    "labelX": 1403,
    "labelY": 62,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236645,
    "kind": "yes",
    "points": "1407,73 1410,73 1418,73 1420,52 1410,50 1409,52 1407,73",
    "labelX": 1412,
    "labelY": 62,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236646,
    "kind": "yes",
    "points": "1396,71 1393,91 1430,97 1433,82 1409,78 1410,73 1407,73 1396,71",
    "labelX": 1411,
    "labelY": 81,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236647,
    "kind": "yes",
    "points": "1452,44 1471,47 1466,76 1447,73 1452,44",
    "labelX": 1459,
    "labelY": 60,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236648,
    "kind": "yes",
    "points": "1447,76 1467,79 1462,106 1443,103 1447,76",
    "labelX": 1455,
    "labelY": 91,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236649,
    "kind": "yes",
    "points": "1355,153 1371,156 1368,170 1353,167 1355,153",
    "labelX": 1362,
    "labelY": 162,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236650,
    "kind": "yes",
    "points": "1391,113 1394,92 1410,95 1410,98 1430,101 1427,119 1412,116 1413,109 1403,107 1402,115 1391,113",
    "labelX": 1409,
    "labelY": 107,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236651,
    "kind": "yes",
    "points": "1383,156 1384,140 1388,140 1389,127 1421,130 1419,150 1410,149 1409,158 1383,156",
    "labelX": 1400,
    "labelY": 144,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236652,
    "kind": "yes",
    "points": "1446,124 1451,112 1476,119 1471,131 1446,124",
    "labelX": 1461,
    "labelY": 122,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236653,
    "kind": "yes",
    "points": "1441,143 1446,125 1471,133 1465,151 1441,143",
    "labelX": 1456,
    "labelY": 138,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236654,
    "kind": "yes",
    "points": "1416,162 1417,154 1423,148 1433,151 1433,152 1441,154 1448,156 1444,173 1443,176 1431,173 1432,169 1423,166 1416,162",
    "labelX": 1432,
    "labelY": 161,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236655,
    "kind": "yes",
    "points": "1442,147 1468,153 1464,179 1444,173 1448,156 1441,154 1442,147",
    "labelX": 1451,
    "labelY": 160,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236656,
    "kind": "yes",
    "points": "1470,154 1474,129 1486,131 1486,134 1508,138 1508,142 1513,143 1511,159 1504,157 1504,160 1470,154",
    "labelX": 1496,
    "labelY": 145,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236657,
    "kind": "yes",
    "points": "1466,174 1469,158 1513,167 1510,182 1493,179 1494,171 1483,169 1482,177 1466,174",
    "labelX": 1489,
    "labelY": 172,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236658,
    "kind": "yes",
    "points": "1406,208 1414,216 1421,218 1429,219 1437,216 1441,196 1429,191 1429,187 1425,186 1424,184 1421,183 1418,185 1417,190 1413,189 1412,192 1409,192 1406,208",
    "labelX": 1422,
    "labelY": 197,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236659,
    "kind": "yes",
    "points": "1440,215 1449,184 1468,189 1460,220 1440,215",
    "labelX": 1454,
    "labelY": 202,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236660,
    "kind": "yes",
    "points": "1509,204 1512,186 1479,180 1476,197 1473,196 1470,213 1473,214 1471,226 1475,227 1474,234 1488,236 1487,239 1494,240 1495,238 1502,239 1506,213 1495,211 1497,202 1509,204",
    "labelX": 1488,
    "labelY": 216,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236661,
    "kind": "yes",
    "points": "1563,180 1573,154 1582,149 1595,161 1580,180 1561,184 1563,180",
    "labelX": 1576,
    "labelY": 168,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236662,
    "kind": "yes",
    "points": "1568,144 1544,139 1541,153 1534,152 1528,179 1554,185 1558,168 1552,166 1554,156 1565,158 1568,144",
    "labelX": 1550,
    "labelY": 160,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236663,
    "kind": "yes",
    "points": "1521,197 1563,207 1557,230 1516,221 1521,197",
    "labelX": 1539,
    "labelY": 214,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236664,
    "kind": "yes",
    "points": "1374,314 1378,289 1398,293 1395,307 1387,307 1383,316 1374,314",
    "labelX": 1386,
    "labelY": 304,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236665,
    "kind": "yes",
    "points": "1378,288 1399,292 1402,270 1382,266 1378,288",
    "labelX": 1390,
    "labelY": 279,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236666,
    "kind": "yes",
    "points": "1407,282 1419,284 1416,299 1428,301 1423,323 1399,318 1407,282",
    "labelX": 1415,
    "labelY": 301,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236667,
    "kind": "yes",
    "points": "1435,265 1454,268 1458,247 1439,243 1435,265",
    "labelX": 1447,
    "labelY": 256,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236668,
    "kind": "yes",
    "points": "1455,270 1460,247 1472,250 1467,273 1455,270",
    "labelX": 1464,
    "labelY": 260,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236669,
    "kind": "yes",
    "points": "1472,253 1488,256 1484,276 1468,273 1472,253",
    "labelX": 1478,
    "labelY": 265,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236670,
    "kind": "yes",
    "points": "1502,260 1525,265 1510,333 1487,328 1502,260",
    "labelX": 1506,
    "labelY": 297,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236671,
    "kind": "yes",
    "points": "1005,225 1006,207 1021,208 1020,226 1005,225",
    "labelX": 1013,
    "labelY": 217,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236672,
    "kind": "yes",
    "points": "1023,209 1042,211 1040,224 1021,222 1023,209",
    "labelX": 1032,
    "labelY": 217,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236673,
    "kind": "yes",
    "points": "995,159 1001,192 1010,190 1004,158 995,159",
    "labelX": 1003,
    "labelY": 175,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236674,
    "kind": "yes",
    "points": "1520,421 1528,371 1553,375 1545,425 1520,421",
    "labelX": 1537,
    "labelY": 398,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236675,
    "kind": "yes",
    "points": "1548,424 1563,425 1568,377 1553,376 1548,424",
    "labelX": 1558,
    "labelY": 401,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236676,
    "kind": "yes",
    "points": "1569,378 1564,425 1578,426 1578,378 1569,378",
    "labelX": 1572,
    "labelY": 402,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236677,
    "kind": "yes",
    "points": "1578,374 1580,418 1600,418 1587,374 1578,374",
    "labelX": 1586,
    "labelY": 396,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236678,
    "kind": "yes",
    "points": "1597,334 1626,329 1627,333 1620,335 1621,341 1645,336 1650,360 1604,369 1597,334",
    "labelX": 1624,
    "labelY": 342,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236679,
    "kind": "yes",
    "points": "1606,375 1609,396 1653,389 1649,367 1606,375",
    "labelX": 1629,
    "labelY": 382,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236681,
    "kind": "yes",
    "points": "1641,392 1653,390 1659,422 1646,424 1641,392",
    "labelX": 1650,
    "labelY": 407,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236682,
    "kind": "yes",
    "points": "1426,321 1430,305 1469,316 1465,331 1426,321",
    "labelX": 1448,
    "labelY": 318,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236683,
    "kind": "yes",
    "points": "1393,403 1396,382 1411,385 1407,405 1393,403",
    "labelX": 1402,
    "labelY": 394,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236684,
    "kind": "yes",
    "points": "1409,406 1413,381 1429,384 1424,409 1409,406",
    "labelX": 1419,
    "labelY": 395,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236685,
    "kind": "yes",
    "points": "1427,409 1431,383 1447,386 1442,412 1427,409",
    "labelX": 1437,
    "labelY": 398,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682236686,
    "kind": "yes",
    "points": "1485,331 1481,352 1506,356 1510,335 1485,331",
    "labelX": 1496,
    "labelY": 344,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682237181,
    "kind": "yes",
    "points": "1653,266 1681,261 1678,245 1650,249 1653,266",
    "labelX": 1666,
    "labelY": 255,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682237182,
    "kind": "yes",
    "points": "1653,272 1669,269 1671,288 1655,290 1653,272",
    "labelX": 1662,
    "labelY": 280,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682237183,
    "kind": "yes",
    "points": "1672,270 1694,269 1695,282 1672,283 1672,270",
    "labelX": 1683,
    "labelY": 276,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682237184,
    "kind": "yes",
    "points": "1657,292 1671,290 1674,310 1661,313 1657,292",
    "labelX": 1666,
    "labelY": 301,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682237185,
    "kind": "yes",
    "points": "1674,290 1694,289 1694,303 1675,304 1674,290",
    "labelX": 1684,
    "labelY": 297,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682237186,
    "kind": "yes",
    "points": "1661,313 1674,311 1678,333 1664,335 1661,313",
    "labelX": 1669,
    "labelY": 323,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682237187,
    "kind": "yes",
    "points": "1679,311 1698,311 1698,324 1687,324 1687,329 1679,329 1679,311",
    "labelX": 1688,
    "labelY": 321,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682237188,
    "kind": "yes",
    "points": "1818,463 1850,457 1855,483 1822,489 1818,463",
    "labelX": 1836,
    "labelY": 473,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682244760,
    "kind": "yes",
    "points": "1564,-14 1577,5 1594,-8 1582,-26 1564,-14",
    "labelX": 1579,
    "labelY": -11,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 682244762,
    "kind": "yes",
    "points": "1625,45 1642,38 1649,54 1632,61 1625,45",
    "labelX": 1637,
    "labelY": 50,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305777,
    "kind": "yes",
    "points": "786,554 780,568 797,575 803,560 786,554",
    "labelX": 792,
    "labelY": 564,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305778,
    "kind": "yes",
    "points": "839,596 812,588 818,569 845,575 839,596",
    "labelX": 829,
    "labelY": 582,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305779,
    "kind": "yes",
    "points": "816,572 802,567 798,578 778,571 772,585 806,598 816,572",
    "labelX": 795,
    "labelY": 579,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305780,
    "kind": "yes",
    "points": "832,607 809,601 812,590 835,597 832,607",
    "labelX": 822,
    "labelY": 599,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305781,
    "kind": "yes",
    "points": "765,603 795,615 797,608 804,611 808,601 771,586 765,603",
    "labelX": 790,
    "labelY": 604,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305782,
    "kind": "yes",
    "points": "826,642 799,634 809,603 835,611 826,642",
    "labelX": 817,
    "labelY": 623,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305783,
    "name": "\u30d9\u30eb\u30c4\u30ea\u30fc\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "976,624 1009,634 1015,617 982,607 976,624",
    "labelX": 996,
    "labelY": 621,
    "tags": {
      "building": "yes",
      "name": "\u30d9\u30eb\u30c4\u30ea\u30fc\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 690305784,
    "name": "\u30c9\u30a5\u30c8\u30e9\u30d9\u30eb",
    "kind": "yes",
    "points": "971,625 965,644 985,650 991,631 971,625",
    "labelX": 978,
    "labelY": 638,
    "tags": {
      "building": "yes",
      "name": "\u30c9\u30a5\u30c8\u30e9\u30d9\u30eb"
    }
  },
  {
    "osmId": 690305785,
    "kind": "yes",
    "points": "1410,638 1411,629 1421,631 1420,639 1410,638",
    "labelX": 1416,
    "labelY": 634,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305786,
    "name": "\u5c71\u672c\u30d3\u30eb",
    "kind": "yes",
    "points": "1005,655 988,650 992,634 1010,639 1005,655",
    "labelX": 999,
    "labelY": 645,
    "tags": {
      "building": "yes",
      "name": "\u5c71\u672c\u30d3\u30eb"
    }
  },
  {
    "osmId": 690305787,
    "kind": "yes",
    "points": "822,660 795,652 800,635 827,643 822,660",
    "labelX": 811,
    "labelY": 648,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305788,
    "name": "\u30aa\u30fc\u30c4\u30fc\u30b9\u30ea\u30fc\u30d3\u30eb\u30c7\u30a3\u30f3\u30b0",
    "kind": "yes",
    "points": "972,650 970,652 964,674 961,678 963,681 991,688 994,685 1001,660 998,658 972,650",
    "labelX": 979,
    "labelY": 670,
    "tags": {
      "building": "yes",
      "name": "\u30aa\u30fc\u30c4\u30fc\u30b9\u30ea\u30fc\u30d3\u30eb\u30c7\u30a3\u30f3\u30b0"
    }
  },
  {
    "osmId": 690305790,
    "kind": "yes",
    "points": "1226,693 1220,694 1219,680 1225,679 1226,693",
    "labelX": 1223,
    "labelY": 687,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305791,
    "kind": "yes",
    "points": "1228,710 1218,711 1216,699 1227,698 1228,710",
    "labelX": 1222,
    "labelY": 705,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305792,
    "kind": "yes",
    "points": "983,739 964,734 973,705 991,710 983,739",
    "labelX": 978,
    "labelY": 722,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305793,
    "kind": "yes",
    "points": "1230,726 1218,726 1218,718 1230,718 1230,726",
    "labelX": 1224,
    "labelY": 722,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305795,
    "kind": "yes",
    "points": "1576,791 1575,815 1580,815 1580,805 1588,804 1588,791 1576,791",
    "labelX": 1581,
    "labelY": 804,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305797,
    "kind": "yes",
    "points": "1699,795 1709,798 1718,808 1735,808 1737,805 1737,796 1733,791 1703,791 1699,795",
    "labelX": 1721,
    "labelY": 799,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305799,
    "kind": "yes",
    "points": "1665,799 1665,792 1683,792 1683,799 1665,799",
    "labelX": 1674,
    "labelY": 796,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305804,
    "name": "\u6075\u6bd4\u5bff\u30b3\u30f3\u30d5\u30a9\u30fc\u30c8",
    "kind": "yes",
    "points": "1104,832 1105,846 1111,845 1112,855 1124,854 1122,831 1104,832",
    "labelX": 1113,
    "labelY": 844,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30b3\u30f3\u30d5\u30a9\u30fc\u30c8"
    }
  },
  {
    "osmId": 690305807,
    "name": "\u30a8\u30b9\u30c8\u30a8\u30d3\u30b9",
    "kind": "apartments",
    "points": "1081,839 1081,847 1078,847 1078,875 1097,875 1097,855 1109,855 1109,847 1102,847 1102,839 1081,839",
    "labelX": 1093,
    "labelY": 853,
    "tags": {
      "building": "apartments",
      "name": "\u30a8\u30b9\u30c8\u30a8\u30d3\u30b9"
    }
  },
  {
    "osmId": 690305808,
    "name": "\u30af\u30aa\u30ea\u30a2\u6075\u6bd4\u5bff\u30a4\u30fc\u30b9\u30c8",
    "kind": "yes",
    "points": "1145,839 1148,864 1135,866 1135,892 1168,895 1169,881 1173,876 1174,872 1198,874 1198,863 1194,863 1195,851 1175,851 1175,847 1167,848 1165,836 1145,839",
    "labelX": 1170,
    "labelY": 864,
    "tags": {
      "building": "yes",
      "name": "\u30af\u30aa\u30ea\u30a2\u6075\u6bd4\u5bff\u30a4\u30fc\u30b9\u30c8"
    }
  },
  {
    "osmId": 690305809,
    "kind": "yes",
    "points": "1570,856 1570,917 1600,917 1600,892 1581,892 1581,856 1570,856",
    "labelX": 1584,
    "labelY": 888,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305811,
    "name": "\u30b8\u30a7\u30e9\u6075\u6bd4\u5bff\u30ec\u30b8\u30c7\u30f3\u30b9",
    "kind": "apartments",
    "points": "1104,872 1104,883 1095,883 1095,909 1124,909 1123,879 1111,879 1111,872 1104,872",
    "labelX": 1108,
    "labelY": 886,
    "tags": {
      "building": "apartments",
      "name": "\u30b8\u30a7\u30e9\u6075\u6bd4\u5bff\u30ec\u30b8\u30c7\u30f3\u30b9"
    }
  },
  {
    "osmId": 690305812,
    "name": "\u8429\u539f\u30d3\u30eb3",
    "kind": "yes",
    "points": "1033,880 1033,891 1035,893 1051,893 1053,891 1053,880 1051,877 1035,877 1033,880",
    "labelX": 1043,
    "labelY": 885,
    "tags": {
      "building": "yes",
      "name": "\u8429\u539f\u30d3\u30eb3"
    }
  },
  {
    "osmId": 690305814,
    "name": "\u30eb\u30fc\u30ea\u30fc",
    "kind": "yes",
    "points": "1605,891 1604,920 1614,921 1627,891 1605,891",
    "labelX": 1613,
    "labelY": 906,
    "tags": {
      "building": "yes",
      "name": "\u30eb\u30fc\u30ea\u30fc"
    }
  },
  {
    "osmId": 690305815,
    "name": "\u5b89\u5cf6\u30d3\u30eb1",
    "kind": "yes",
    "points": "1035,926 1035,899 1054,899 1054,926 1035,926",
    "labelX": 1045,
    "labelY": 913,
    "tags": {
      "building": "yes",
      "name": "\u5b89\u5cf6\u30d3\u30eb1"
    }
  },
  {
    "osmId": 690305817,
    "kind": "yes",
    "points": "1428,923 1408,923 1408,901 1428,901 1428,923",
    "labelX": 1418,
    "labelY": 912,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305818,
    "name": "\u30e9\u30a4\u30c4\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1380,904 1381,927 1372,927 1373,945 1392,945 1391,903 1380,904",
    "labelX": 1382,
    "labelY": 925,
    "tags": {
      "building": "yes",
      "name": "\u30e9\u30a4\u30c4\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 690305820,
    "name": "\u30b7\u30a7\u30bd\u30ef\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1459,902 1440,902 1440,913 1433,913 1433,941 1464,941 1464,913 1459,913 1459,902",
    "labelX": 1449,
    "labelY": 917,
    "tags": {
      "building": "yes",
      "name": "\u30b7\u30a7\u30bd\u30ef\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 690305822,
    "name": "\u30aa\u30c3\u30c9",
    "kind": "yes",
    "points": "1395,909 1395,943 1405,943 1405,909 1395,909",
    "labelX": 1400,
    "labelY": 926,
    "tags": {
      "building": "yes",
      "name": "\u30aa\u30c3\u30c9"
    }
  },
  {
    "osmId": 690305824,
    "name": "\u6075\u6bd4\u5bff\u4e00\u4e01\u76ee\u30d3\u30eb",
    "kind": "yes",
    "points": "1412,926 1413,933 1409,933 1409,947 1417,947 1416,941 1425,941 1425,946 1431,946 1431,926 1412,926",
    "labelX": 1419,
    "labelY": 939,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u4e00\u4e01\u76ee\u30d3\u30eb"
    }
  },
  {
    "osmId": 690305826,
    "name": "\u3044\u30fc\u3059\u3068\u30a8\u30d3\u30b9",
    "kind": "yes",
    "points": "1466,933 1468,947 1487,944 1486,930 1466,933",
    "labelX": 1477,
    "labelY": 939,
    "tags": {
      "building": "yes",
      "name": "\u3044\u30fc\u3059\u3068\u30a8\u30d3\u30b9"
    }
  },
  {
    "osmId": 690305827,
    "kind": "yes",
    "points": "1240,954 1240,930 1259,930 1259,954 1240,954",
    "labelX": 1250,
    "labelY": 942,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305829,
    "name": "\u30c8\u30a6\u30de\u30f3\u672c\u793e\u30d3\u30eb",
    "kind": "yes",
    "points": "1234,931 1228,931 1223,960 1239,959 1237,936 1234,936 1234,931",
    "labelX": 1233,
    "labelY": 942,
    "tags": {
      "building": "yes",
      "name": "\u30c8\u30a6\u30de\u30f3\u672c\u793e\u30d3\u30eb"
    }
  },
  {
    "osmId": 690305831,
    "kind": "yes",
    "points": "1454,950 1454,942 1462,942 1462,950 1454,950",
    "labelX": 1458,
    "labelY": 946,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305833,
    "kind": "yes",
    "points": "1575,975 1564,975 1564,941 1575,941 1575,975",
    "labelX": 1570,
    "labelY": 958,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305834,
    "kind": "yes",
    "points": "1544,945 1544,973 1551,974 1552,945 1544,945",
    "labelX": 1548,
    "labelY": 959,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305836,
    "name": "\u30e1\u30be\u30f3\u30c9\u30da\u30eb\u30eb",
    "kind": "yes",
    "points": "1593,945 1593,980 1604,982 1610,948 1593,945",
    "labelX": 1600,
    "labelY": 964,
    "tags": {
      "building": "yes",
      "name": "\u30e1\u30be\u30f3\u30c9\u30da\u30eb\u30eb"
    }
  },
  {
    "osmId": 690305838,
    "kind": "yes",
    "points": "1581,947 1581,971 1589,971 1589,947 1581,947",
    "labelX": 1585,
    "labelY": 959,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305840,
    "kind": "yes",
    "points": "1533,951 1533,982 1539,982 1539,951 1533,951",
    "labelX": 1536,
    "labelY": 967,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305841,
    "kind": "yes",
    "points": "1552,975 1552,950 1562,950 1562,975 1552,975",
    "labelX": 1557,
    "labelY": 963,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305844,
    "kind": "yes",
    "points": "1529,951 1512,959 1523,987 1530,983 1529,951",
    "labelX": 1524,
    "labelY": 970,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305845,
    "kind": "yes",
    "points": "1510,961 1502,964 1513,991 1521,987 1510,961",
    "labelX": 1512,
    "labelY": 976,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305847,
    "name": "\u30ab\u30de\u30b9\u30e4\u30d3\u30eb",
    "kind": "yes",
    "points": "1483,968 1474,969 1472,971 1472,993 1474,995 1483,995 1486,993 1486,970 1483,968",
    "labelX": 1479,
    "labelY": 982,
    "tags": {
      "building": "yes",
      "name": "\u30ab\u30de\u30b9\u30e4\u30d3\u30eb"
    }
  },
  {
    "osmId": 690305849,
    "kind": "yes",
    "points": "1442,971 1442,994 1450,994 1451,971 1442,971",
    "labelX": 1446,
    "labelY": 983,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305851,
    "kind": "yes",
    "points": "1452,979 1452,971 1466,971 1466,979 1452,979",
    "labelX": 1459,
    "labelY": 975,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305853,
    "name": "\u30e4\u30de\u30d9\u30d3\u30eb",
    "kind": "yes",
    "points": "1410,989 1410,972 1434,972 1434,989 1410,989",
    "labelX": 1422,
    "labelY": 981,
    "tags": {
      "building": "yes",
      "name": "\u30e4\u30de\u30d9\u30d3\u30eb"
    }
  },
  {
    "osmId": 690305855,
    "kind": "yes",
    "points": "1545,977 1544,1000 1558,1001 1565,1001 1575,1001 1576,978 1545,977",
    "labelX": 1561,
    "labelY": 993,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305857,
    "kind": "yes",
    "points": "1468,996 1452,996 1452,981 1468,981 1468,996",
    "labelX": 1460,
    "labelY": 989,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305859,
    "kind": "yes",
    "points": "1590,989 1577,985 1578,979 1592,983 1590,989",
    "labelX": 1584,
    "labelY": 984,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305861,
    "kind": "yes",
    "points": "1393,1006 1393,984 1401,984 1401,1006 1393,1006",
    "labelX": 1397,
    "labelY": 995,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305863,
    "name": "\u77f3\u4e95\u30d3\u30eb",
    "kind": "apartments",
    "points": "1602,1005 1578,1003 1579,989 1603,992 1602,1005",
    "labelX": 1591,
    "labelY": 997,
    "tags": {
      "building": "apartments",
      "name": "\u77f3\u4e95\u30d3\u30eb"
    }
  },
  {
    "osmId": 690305865,
    "name": "\u6075\u6bd4\u5bff\u30d5\u30a1\u30fc\u30b9\u30c8\u30d7\u30ec\u30a4\u30b9\u30d3\u30eb",
    "kind": "yes",
    "points": "1474,1017 1473,1010 1467,1010 1466,997 1444,996 1443,999 1420,999 1417,1001 1417,1017 1420,1022 1473,1021 1474,1017",
    "labelX": 1447,
    "labelY": 1008,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30d5\u30a1\u30fc\u30b9\u30c8\u30d7\u30ec\u30a4\u30b9\u30d3\u30eb"
    }
  },
  {
    "osmId": 690305867,
    "name": "\u30e1\u30a4\u30c4\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1511,997 1511,999 1505,999 1504,1007 1501,1007 1500,1034 1508,1036 1529,1036 1529,997 1511,997",
    "labelX": 1511,
    "labelY": 1012,
    "tags": {
      "building": "yes",
      "name": "\u30e1\u30a4\u30c4\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 690305869,
    "name": "EKO\u30d3\u30eb",
    "kind": "yes",
    "points": "1479,1003 1479,1007 1476,1007 1476,1021 1477,1034 1488,1034 1488,1028 1488,1021 1492,1021 1492,1008 1484,1008 1483,1003 1479,1003",
    "labelX": 1484,
    "labelY": 1016,
    "tags": {
      "building": "yes",
      "name": "EKO\u30d3\u30eb"
    }
  },
  {
    "osmId": 690305872,
    "kind": "yes",
    "points": "1556,1018 1532,1015 1533,1002 1558,1005 1556,1018",
    "labelX": 1545,
    "labelY": 1010,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305874,
    "kind": "yes",
    "points": "1561,1005 1559,1024 1597,1029 1599,1010 1561,1005",
    "labelX": 1579,
    "labelY": 1017,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 690305875,
    "name": "\u30d7\u30ec\u30c3\u30c4\u30a1\u6075\u6bd4\u5bff",
    "kind": "apartments",
    "points": "1535,1033 1534,1052 1590,1054 1590,1034 1535,1033",
    "labelX": 1562,
    "labelY": 1043,
    "tags": {
      "building": "apartments",
      "name": "\u30d7\u30ec\u30c3\u30c4\u30a1\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691576780,
    "name": "\u30b7\u30c6\u30a3\u30bf\u30ef\u30fc\u6075\u6bd4\u5bff",
    "kind": "residential",
    "points": "2014,1126 2017,1121 2027,1108 2027,1107 2043,1083 2053,1069 2055,1066 2052,1065 2058,1057 2035,1044 2031,1048 1974,1014 1972,1014 1971,1012 1969,1013 1948,1018 1940,1031 1926,1052 1920,1062 1921,1064 1922,1064 1926,1079 1924,1080 1924,1082 1927,1082 1936,1087 1961,1101 2003,1123 2002,1119 2014,1126",
    "labelX": 1982,
    "labelY": 1069,
    "tags": {
      "building": "residential",
      "name": "\u30b7\u30c6\u30a3\u30bf\u30ef\u30fc\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691577834,
    "kind": "yes",
    "points": "2051,986 2072,998 2066,1009 2086,1020 2078,1033 2037,1010 2051,986",
    "labelX": 2065,
    "labelY": 1009,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929533,
    "name": "\u30e4\u30de\u30c8\u30cf\u30a4\u30c4",
    "kind": "yes",
    "points": "1696,1046 1676,1045 1676,1071 1650,1071 1650,1102 1667,1103 1667,1094 1697,1095 1697,1058 1696,1058 1696,1046",
    "labelX": 1677,
    "labelY": 1074,
    "tags": {
      "building": "yes",
      "name": "\u30e4\u30de\u30c8\u30cf\u30a4\u30c4"
    }
  },
  {
    "osmId": 691929536,
    "kind": "yes",
    "points": "1856,1043 1853,1062 1864,1064 1865,1062 1870,1062 1873,1045 1856,1043",
    "labelX": 1864,
    "labelY": 1056,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929540,
    "kind": "yes",
    "points": "1875,1045 1874,1062 1886,1063 1887,1061 1896,1061 1892,1048 1891,1045 1875,1045",
    "labelX": 1886,
    "labelY": 1055,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929542,
    "kind": "yes",
    "points": "1123,1060 1137,1072 1140,1072 1142,1062 1125,1059 1123,1060",
    "labelX": 1133,
    "labelY": 1065,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929544,
    "kind": "yes",
    "points": "1146,1060 1139,1077 1148,1080 1153,1062 1146,1060",
    "labelX": 1147,
    "labelY": 1070,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929546,
    "kind": "yes",
    "points": "1155,1062 1149,1082 1164,1088 1171,1066 1155,1062",
    "labelX": 1160,
    "labelY": 1075,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929548,
    "kind": "yes",
    "points": "1856,1066 1856,1072 1870,1071 1870,1066 1856,1066",
    "labelX": 1863,
    "labelY": 1069,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929550,
    "kind": "yes",
    "points": "1873,1067 1873,1072 1893,1072 1893,1067 1873,1067",
    "labelX": 1883,
    "labelY": 1070,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929552,
    "kind": "yes",
    "points": "1172,1070 1168,1091 1169,1092 1202,1097 1205,1075 1172,1070",
    "labelX": 1183,
    "labelY": 1085,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929554,
    "kind": "yes",
    "points": "1872,1075 1872,1088 1892,1088 1892,1075 1872,1075",
    "labelX": 1882,
    "labelY": 1082,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929556,
    "name": "\u30de\u30f3\u30b7\u30e7\u30f3\u30cb\u30e5\u30fc\u6075\u6bd4\u5bff",
    "kind": "apartments",
    "points": "1212,1076 1211,1084 1214,1086 1211,1108 1345,1133 1349,1133 1351,1122 1349,1120 1352,1100 1338,1097 1336,1100 1232,1082 1231,1078 1212,1076",
    "labelX": 1287,
    "labelY": 1101,
    "tags": {
      "building": "apartments",
      "name": "\u30de\u30f3\u30b7\u30e7\u30f3\u30cb\u30e5\u30fc\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929558,
    "name": "ABE\u30d3\u30eb\u6075\u6bd4\u5bff",
    "kind": "apartments",
    "points": "1358,1103 1353,1127 1367,1130 1370,1122 1375,1121 1378,1107 1358,1103",
    "labelX": 1367,
    "labelY": 1118,
    "tags": {
      "building": "apartments",
      "name": "ABE\u30d3\u30eb\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929559,
    "kind": "yes",
    "points": "1741,1108 1740,1119 1760,1122 1762,1111 1741,1108",
    "labelX": 1751,
    "labelY": 1115,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929560,
    "kind": "yes",
    "points": "1387,1108 1382,1132 1397,1136 1402,1112 1387,1108",
    "labelX": 1392,
    "labelY": 1122,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929561,
    "kind": "yes",
    "points": "1167,1111 1164,1120 1176,1124 1179,1115 1167,1111",
    "labelX": 1172,
    "labelY": 1118,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929562,
    "name": "\u6075\u6bd4\u5bffK\u30d3\u30eb",
    "kind": "yes",
    "points": "1417,1116 1415,1126 1419,1128 1417,1142 1433,1145 1439,1118 1424,1115 1422,1117 1417,1116",
    "labelX": 1423,
    "labelY": 1126,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bffK\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929563,
    "name": "\u30c0\u30a4\u30a2\u30ca\u6771\u4eac",
    "kind": "yes",
    "points": "1190,1117 1183,1143 1193,1146 1200,1121 1190,1117",
    "labelX": 1192,
    "labelY": 1132,
    "tags": {
      "building": "yes",
      "name": "\u30c0\u30a4\u30a2\u30ca\u6771\u4eac"
    }
  },
  {
    "osmId": 691929564,
    "kind": "yes",
    "points": "1270,1120 1269,1125 1270,1127 1322,1143 1324,1142 1326,1131 1325,1130 1270,1120",
    "labelX": 1301,
    "labelY": 1131,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929565,
    "kind": "yes",
    "points": "1363,1132 1360,1152 1411,1161 1415,1140 1413,1139 1413,1135 1402,1133 1401,1137 1381,1134 1383,1125 1379,1124 1378,1124 1376,1134 1363,1132",
    "labelX": 1390,
    "labelY": 1136,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929566,
    "name": "TOWA\u30d3\u30eb",
    "kind": "yes",
    "points": "1204,1124 1198,1144 1207,1146 1205,1159 1217,1161 1222,1127 1204,1124",
    "labelX": 1209,
    "labelY": 1144,
    "tags": {
      "building": "yes",
      "name": "TOWA\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929568,
    "name": "Daiwa\u6075\u6bd4\u5bff4\u4e01\u76ee\u30d3\u30eb",
    "kind": "office",
    "points": "1424,1146 1421,1160 1422,1162 1491,1174 1498,1134 1443,1123 1438,1148 1424,1146",
    "labelX": 1448,
    "labelY": 1150,
    "tags": {
      "building": "office",
      "name": "Daiwa\u6075\u6bd4\u5bff4\u4e01\u76ee\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929570,
    "name": "\u6075\u6bd4\u5bff\u305f\u304b\u3080\u3089\u30d3\u30eb",
    "kind": "yes",
    "points": "1504,1130 1497,1170 1524,1175 1531,1134 1504,1130",
    "labelX": 1514,
    "labelY": 1152,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u305f\u304b\u3080\u3089\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929572,
    "name": "\u30b5\u30cb\u30fc\u30c7\u30a4\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1238,1131 1232,1165 1244,1167 1248,1137 1243,1136 1243,1131 1238,1131",
    "labelX": 1241,
    "labelY": 1145,
    "tags": {
      "building": "yes",
      "name": "\u30b5\u30cb\u30fc\u30c7\u30a4\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929574,
    "name": "Kbk\u30d3\u30eb",
    "kind": "yes",
    "points": "1223,1133 1218,1161 1230,1164 1235,1136 1223,1133",
    "labelX": 1227,
    "labelY": 1149,
    "tags": {
      "building": "yes",
      "name": "Kbk\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929576,
    "kind": "yes",
    "points": "1560,1137 1552,1178 1567,1182 1575,1141 1560,1137",
    "labelX": 1564,
    "labelY": 1160,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929578,
    "name": "\u30b7\u30fc\u30ba\u30a8\u30d3\u30b9",
    "kind": "yes",
    "points": "1252,1138 1247,1157 1249,1158 1248,1164 1279,1172 1286,1146 1252,1138",
    "labelX": 1260,
    "labelY": 1156,
    "tags": {
      "building": "yes",
      "name": "\u30b7\u30fc\u30ba\u30a8\u30d3\u30b9"
    }
  },
  {
    "osmId": 691929579,
    "kind": "yes",
    "points": "1556,1143 1545,1142 1542,1152 1530,1150 1530,1151 1524,1186 1547,1191 1549,1190 1557,1145 1556,1143",
    "labelX": 1542,
    "labelY": 1161,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929580,
    "kind": "yes",
    "points": "1183,1146 1177,1170 1211,1177 1214,1162 1200,1159 1201,1149 1183,1146",
    "labelX": 1198,
    "labelY": 1161,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929581,
    "name": "\u4e2d\u5065\u30d3\u30eb",
    "kind": "yes",
    "points": "1582,1147 1584,1157 1580,1158 1579,1170 1584,1175 1592,1176 1595,1183 1611,1179 1612,1178 1601,1149 1582,1147",
    "labelX": 1592,
    "labelY": 1167,
    "tags": {
      "building": "yes",
      "name": "\u4e2d\u5065\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929582,
    "kind": "yes",
    "points": "1627,1153 1627,1158 1636,1179 1649,1182 1650,1177 1661,1179 1664,1177 1670,1178 1673,1162 1672,1161 1630,1152 1627,1153",
    "labelX": 1651,
    "labelY": 1169,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929583,
    "name": "\u30b3\u30f3\u30d5\u30a9\u30fc\u30c8\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1308,1156 1301,1188 1325,1194 1327,1188 1331,1189 1335,1170 1330,1168 1332,1161 1308,1156",
    "labelX": 1324,
    "labelY": 1177,
    "tags": {
      "building": "yes",
      "name": "\u30b3\u30f3\u30d5\u30a9\u30fc\u30c8\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929584,
    "name": "\u8d64\u5c3e\u30d3\u30eb",
    "kind": "yes",
    "points": "1676,1162 1674,1182 1689,1184 1691,1164 1676,1162",
    "labelX": 1683,
    "labelY": 1173,
    "tags": {
      "building": "yes",
      "name": "\u8d64\u5c3e\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929585,
    "kind": "yes",
    "points": "1219,1165 1215,1189 1229,1192 1230,1187 1237,1187 1239,1168 1219,1165",
    "labelX": 1228,
    "labelY": 1181,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929586,
    "name": "\u5185\u85e4\u30d3\u30eb",
    "kind": "yes",
    "points": "1694,1166 1693,1187 1707,1188 1708,1168 1694,1166",
    "labelX": 1701,
    "labelY": 1177,
    "tags": {
      "building": "yes",
      "name": "\u5185\u85e4\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929587,
    "kind": "yes",
    "points": "1344,1165 1367,1170 1358,1207 1362,1208 1358,1227 1332,1221 1344,1165",
    "labelX": 1354,
    "labelY": 1200,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929588,
    "kind": "yes",
    "points": "1710,1167 1707,1215 1719,1216 1722,1168 1710,1167",
    "labelX": 1715,
    "labelY": 1192,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929589,
    "kind": "yes",
    "points": "1243,1170 1240,1189 1249,1191 1251,1188 1264,1189 1267,1174 1266,1173 1245,1169 1243,1170",
    "labelX": 1253,
    "labelY": 1180,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929590,
    "kind": "yes",
    "points": "1723,1169 1720,1217 1732,1218 1736,1170 1723,1169",
    "labelX": 1728,
    "labelY": 1194,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929591,
    "kind": "yes",
    "points": "1384,1176 1381,1197 1412,1202 1415,1180 1410,1179 1411,1175 1391,1172 1391,1177 1384,1176",
    "labelX": 1399,
    "labelY": 1182,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929592,
    "kind": "yes",
    "points": "1552,1180 1550,1192 1585,1199 1587,1198 1591,1180 1591,1178 1570,1173 1568,1182 1553,1179 1552,1180",
    "labelX": 1572,
    "labelY": 1185,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929593,
    "kind": "yes",
    "points": "1763,1176 1761,1196 1777,1198 1779,1179 1763,1176",
    "labelX": 1770,
    "labelY": 1187,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929594,
    "kind": "yes",
    "points": "1273,1177 1270,1186 1268,1188 1267,1190 1270,1192 1268,1198 1278,1201 1283,1180 1273,1177",
    "labelX": 1272,
    "labelY": 1189,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929595,
    "name": "\u963f\u90e8\u8358",
    "kind": "yes",
    "points": "1639,1186 1649,1210 1667,1211 1670,1182 1669,1181 1657,1181 1639,1186",
    "labelX": 1659,
    "labelY": 1192,
    "tags": {
      "building": "yes",
      "name": "\u963f\u90e8\u8358"
    }
  },
  {
    "osmId": 691929596,
    "kind": "yes",
    "points": "1781,1179 1780,1197 1792,1198 1794,1182 1781,1179",
    "labelX": 1787,
    "labelY": 1189,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929597,
    "name": "\u6075\u6bd4\u5bffYK\u30d3\u30eb",
    "kind": "yes",
    "points": "1736,1183 1733,1218 1757,1220 1759,1185 1736,1183",
    "labelX": 1746,
    "labelY": 1202,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bffYK\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929598,
    "kind": "yes",
    "points": "1795,1183 1793,1220 1824,1222 1826,1191 1795,1183",
    "labelX": 1810,
    "labelY": 1204,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929599,
    "name": "\u8429\u539f\u30d3\u30eb5",
    "kind": "yes",
    "points": "1614,1184 1593,1186 1591,1198 1611,1201 1617,1192 1614,1184",
    "labelX": 1605,
    "labelY": 1192,
    "tags": {
      "building": "yes",
      "name": "\u8429\u539f\u30d3\u30eb5"
    }
  },
  {
    "osmId": 691929600,
    "name": "\u6075\u6bd4\u5bff\u30af\u30ef\u30c8\u30ed",
    "kind": "yes",
    "points": "1450,1185 1445,1212 1465,1216 1471,1189 1450,1185",
    "labelX": 1458,
    "labelY": 1201,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30af\u30ef\u30c8\u30ed"
    }
  },
  {
    "osmId": 691929601,
    "name": "\u6075\u6bd4\u5bff\u30b3\u30e9\u30fc\u30b8\u30e5",
    "kind": "yes",
    "points": "1191,1183 1193,1191 1191,1217 1210,1225 1214,1187 1191,1183",
    "labelX": 1200,
    "labelY": 1201,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30b3\u30e9\u30fc\u30b8\u30e5"
    }
  },
  {
    "osmId": 691929602,
    "name": "\u67f4\u7530\u30d3\u30eb3",
    "kind": "yes",
    "points": "1829,1188 1828,1219 1851,1220 1852,1192 1829,1188",
    "labelX": 1840,
    "labelY": 1205,
    "tags": {
      "building": "yes",
      "name": "\u67f4\u7530\u30d3\u30eb3"
    }
  },
  {
    "osmId": 691929603,
    "kind": "yes",
    "points": "1864,1190 1862,1222 1891,1219 1893,1196 1864,1190",
    "labelX": 1878,
    "labelY": 1207,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929604,
    "kind": "yes",
    "points": "1674,1194 1674,1213 1704,1214 1705,1191 1685,1190 1684,1194 1674,1194",
    "labelX": 1688,
    "labelY": 1199,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929605,
    "kind": "yes",
    "points": "1479,1251 1490,1252 1492,1256 1492,1267 1478,1266 1479,1251",
    "labelX": 1486,
    "labelY": 1258,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929606,
    "kind": "yes",
    "points": "1177,1192 1174,1208 1184,1210 1184,1213 1187,1214 1191,1195 1177,1192",
    "labelX": 1183,
    "labelY": 1205,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929607,
    "kind": "yes",
    "points": "1216,1193 1214,1200 1217,1201 1212,1223 1223,1225 1229,1196 1216,1193",
    "labelX": 1219,
    "labelY": 1206,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929608,
    "kind": "yes",
    "points": "1854,1194 1852,1222 1861,1223 1862,1195 1854,1194",
    "labelX": 1857,
    "labelY": 1209,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929609,
    "kind": "yes",
    "points": "1231,1194 1225,1217 1241,1221 1246,1198 1231,1194",
    "labelX": 1236,
    "labelY": 1208,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929610,
    "name": "\u7b2c\u4e8c\u4e38\u4f0a\u30b3\u30fc\u30dd",
    "kind": "yes",
    "points": "1300,1195 1298,1204 1301,1205 1300,1211 1317,1214 1317,1217 1328,1219 1331,1200 1302,1196 1300,1195",
    "labelX": 1310,
    "labelY": 1207,
    "tags": {
      "building": "yes",
      "name": "\u7b2c\u4e8c\u4e38\u4f0a\u30b3\u30fc\u30dd"
    }
  },
  {
    "osmId": 691929611,
    "name": "\u3042\u3059\u304b\u30d3\u30eb",
    "kind": "yes",
    "points": "1472,1195 1468,1213 1484,1216 1488,1198 1472,1195",
    "labelX": 1478,
    "labelY": 1206,
    "tags": {
      "building": "yes",
      "name": "\u3042\u3059\u304b\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929612,
    "kind": "yes",
    "points": "1291,1197 1289,1205 1296,1208 1299,1199 1291,1197",
    "labelX": 1294,
    "labelY": 1202,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929613,
    "name": "\u30d2\u30eb\u30b5\u30a4\u30c9\u30a8\u30d3\u30b9",
    "kind": "yes",
    "points": "1381,1198 1378,1217 1408,1221 1411,1203 1381,1198",
    "labelX": 1395,
    "labelY": 1210,
    "tags": {
      "building": "yes",
      "name": "\u30d2\u30eb\u30b5\u30a4\u30c9\u30a8\u30d3\u30b9"
    }
  },
  {
    "osmId": 691929614,
    "kind": "yes",
    "points": "1477,1267 1491,1268 1490,1281 1476,1280 1477,1267",
    "labelX": 1484,
    "labelY": 1274,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929615,
    "kind": "yes",
    "points": "1247,1199 1245,1209 1271,1215 1273,1205 1248,1198 1247,1199",
    "labelX": 1257,
    "labelY": 1205,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929616,
    "name": "\u30a2\u30a4\u30ea\u30b9\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1760,1199 1760,1219 1793,1219 1793,1199 1760,1199",
    "labelX": 1777,
    "labelY": 1209,
    "tags": {
      "building": "yes",
      "name": "\u30a2\u30a4\u30ea\u30b9\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929617,
    "kind": "yes",
    "points": "1900,1213 1923,1208 1924,1205 1902,1200 1900,1213",
    "labelX": 1912,
    "labelY": 1207,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929618,
    "kind": "yes",
    "points": "1476,1282 1485,1283 1484,1289 1487,1289 1486,1299 1474,1298 1476,1282",
    "labelX": 1482,
    "labelY": 1290,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929619,
    "name": "\u6771\u30b0\u30ea\u30fc\u30f3\u30cf\u30a4\u30c4",
    "kind": "yes",
    "points": "1555,1204 1549,1203 1548,1210 1543,1209 1540,1228 1554,1231 1558,1212 1553,1211 1555,1204",
    "labelX": 1550,
    "labelY": 1214,
    "tags": {
      "building": "yes",
      "name": "\u6771\u30b0\u30ea\u30fc\u30f3\u30cf\u30a4\u30c4"
    }
  },
  {
    "osmId": 691929620,
    "kind": "yes",
    "points": "1245,1210 1241,1224 1256,1228 1259,1214 1245,1210",
    "labelX": 1250,
    "labelY": 1219,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929621,
    "name": "\u30bf\u30a6\u30f3\u30cf\u30a6\u30b9K",
    "kind": "yes",
    "points": "1292,1215 1291,1220 1299,1222 1297,1228 1306,1230 1304,1240 1303,1242 1325,1247 1325,1246 1330,1223 1292,1215",
    "labelX": 1307,
    "labelY": 1231,
    "tags": {
      "building": "yes",
      "name": "\u30bf\u30a6\u30f3\u30cf\u30a6\u30b9K"
    }
  },
  {
    "osmId": 691929622,
    "kind": "yes",
    "points": "1261,1214 1255,1235 1266,1238 1272,1217 1261,1214",
    "labelX": 1264,
    "labelY": 1226,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929623,
    "kind": "yes",
    "points": "1332,1224 1330,1239 1359,1243 1362,1228 1332,1224",
    "labelX": 1346,
    "labelY": 1234,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929624,
    "name": "\u30e9\u30a4\u30aa\u30f3\u30ba\u30b7\u30c6\u30a3\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1960,1228 1952,1224 1948,1224 1946,1227 1939,1223 1937,1225 1935,1224 1932,1229 1924,1225 1915,1229 1918,1235 1926,1239 1915,1261 1919,1264 1918,1266 1921,1270 1928,1274 1932,1274 1935,1271 1942,1274 1943,1274 1962,1234 1960,1228",
    "labelX": 1934,
    "labelY": 1245,
    "tags": {
      "building": "yes",
      "name": "\u30e9\u30a4\u30aa\u30f3\u30ba\u30b7\u30c6\u30a3\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929625,
    "kind": "yes",
    "points": "1287,1223 1283,1240 1298,1243 1300,1232 1294,1230 1295,1225 1287,1223",
    "labelX": 1293,
    "labelY": 1232,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929626,
    "kind": "yes",
    "points": "1509,1227 1506,1243 1520,1245 1524,1230 1509,1227",
    "labelX": 1515,
    "labelY": 1236,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929627,
    "kind": "yes",
    "points": "1373,1227 1369,1259 1383,1261 1383,1255 1381,1254 1382,1250 1401,1252 1404,1230 1373,1227",
    "labelX": 1385,
    "labelY": 1249,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929628,
    "kind": "yes",
    "points": "1407,1230 1406,1248 1429,1249 1429,1232 1407,1230",
    "labelX": 1418,
    "labelY": 1240,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929629,
    "kind": "yes",
    "points": "1537,1231 1533,1246 1550,1250 1553,1235 1537,1231",
    "labelX": 1543,
    "labelY": 1241,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929630,
    "kind": "yes",
    "points": "1526,1231 1523,1246 1531,1248 1534,1232 1526,1231",
    "labelX": 1529,
    "labelY": 1239,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929631,
    "kind": "yes",
    "points": "1556,1232 1553,1250 1563,1251 1565,1234 1556,1232",
    "labelX": 1559,
    "labelY": 1242,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929632,
    "name": "\u5cf6\u7530\u30d3\u30eb",
    "kind": "yes",
    "points": "1895,1234 1874,1234 1874,1244 1866,1245 1866,1271 1879,1272 1880,1260 1894,1260 1895,1234",
    "labelX": 1879,
    "labelY": 1253,
    "tags": {
      "building": "yes",
      "name": "\u5cf6\u7530\u30d3\u30eb"
    }
  },
  {
    "osmId": 691929633,
    "name": "\u30b5\u30f3\u30d2\u30eb\u30ba\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1578,1234 1574,1250 1579,1252 1579,1257 1589,1259 1594,1237 1578,1234",
    "labelX": 1582,
    "labelY": 1248,
    "tags": {
      "building": "yes",
      "name": "\u30b5\u30f3\u30d2\u30eb\u30ba\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929634,
    "kind": "yes",
    "points": "1568,1234 1565,1253 1573,1254 1576,1235 1568,1234",
    "labelX": 1571,
    "labelY": 1244,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929635,
    "kind": "yes",
    "points": "1332,1241 1328,1261 1341,1264 1345,1244 1332,1241",
    "labelX": 1337,
    "labelY": 1253,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929636,
    "kind": "yes",
    "points": "1285,1243 1282,1253 1283,1254 1304,1256 1305,1247 1286,1242 1285,1243",
    "labelX": 1291,
    "labelY": 1249,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929637,
    "kind": "yes",
    "points": "1347,1244 1343,1259 1356,1262 1359,1247 1347,1244",
    "labelX": 1351,
    "labelY": 1253,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929638,
    "kind": "yes",
    "points": "1448,1244 1443,1270 1456,1273 1461,1247 1448,1244",
    "labelX": 1452,
    "labelY": 1259,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929639,
    "kind": "yes",
    "points": "1462,1248 1457,1272 1470,1275 1474,1251 1462,1248",
    "labelX": 1466,
    "labelY": 1262,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929640,
    "kind": "yes",
    "points": "1407,1250 1405,1265 1431,1268 1432,1252 1407,1250",
    "labelX": 1419,
    "labelY": 1259,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929641,
    "kind": "yes",
    "points": "1312,1249 1306,1274 1320,1278 1324,1263 1326,1262 1328,1253 1312,1249",
    "labelX": 1319,
    "labelY": 1263,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929642,
    "kind": "yes",
    "points": "1391,1253 1390,1263 1402,1264 1403,1264 1404,1254 1391,1253",
    "labelX": 1398,
    "labelY": 1260,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929643,
    "kind": "yes",
    "points": "1474,1299 1489,1300 1488,1312 1479,1311 1479,1309 1473,1309 1474,1299",
    "labelX": 1480,
    "labelY": 1307,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929644,
    "kind": "yes",
    "points": "1505,1253 1501,1270 1511,1272 1510,1276 1528,1280 1533,1260 1505,1253",
    "labelX": 1515,
    "labelY": 1269,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929646,
    "kind": "yes",
    "points": "1285,1256 1281,1266 1301,1276 1306,1261 1285,1256",
    "labelX": 1293,
    "labelY": 1265,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929648,
    "kind": "yes",
    "points": "1131,1256 1126,1270 1140,1275 1145,1261 1131,1256",
    "labelX": 1136,
    "labelY": 1266,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929649,
    "kind": "yes",
    "points": "1881,1261 1881,1273 1895,1273 1894,1261 1881,1261",
    "labelX": 1888,
    "labelY": 1267,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929652,
    "kind": "yes",
    "points": "1325,1264 1322,1286 1343,1289 1343,1284 1348,1284 1351,1268 1325,1264",
    "labelX": 1339,
    "labelY": 1279,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929653,
    "kind": "yes",
    "points": "1146,1263 1145,1273 1161,1277 1162,1276 1164,1266 1146,1263",
    "labelX": 1156,
    "labelY": 1271,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929655,
    "kind": "yes",
    "points": "1536,1268 1528,1300 1537,1303 1545,1270 1536,1268",
    "labelX": 1537,
    "labelY": 1285,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929656,
    "kind": "yes",
    "points": "1181,1267 1179,1278 1192,1280 1194,1269 1181,1267",
    "labelX": 1187,
    "labelY": 1274,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929658,
    "kind": "yes",
    "points": "1548,1270 1541,1304 1548,1305 1555,1271 1548,1270",
    "labelX": 1548,
    "labelY": 1288,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929659,
    "kind": "yes",
    "points": "1195,1270 1192,1294 1202,1295 1205,1271 1195,1270",
    "labelX": 1199,
    "labelY": 1283,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929661,
    "kind": "yes",
    "points": "1562,1271 1556,1300 1561,1301 1559,1310 1569,1312 1576,1277 1570,1276 1570,1273 1562,1271",
    "labelX": 1565,
    "labelY": 1290,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929663,
    "kind": "yes",
    "points": "1124,1272 1119,1285 1139,1292 1143,1279 1124,1272",
    "labelX": 1131,
    "labelY": 1282,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929664,
    "name": "\u30af\u30aa\u30fc\u30ec\u30a8\u30d3\u30b9",
    "kind": "yes",
    "points": "1579,1273 1570,1316 1571,1317 1597,1322 1614,1319 1629,1312 1627,1302 1603,1305 1605,1278 1579,1273",
    "labelX": 1599,
    "labelY": 1305,
    "tags": {
      "building": "yes",
      "name": "\u30af\u30aa\u30fc\u30ec\u30a8\u30d3\u30b9"
    }
  },
  {
    "osmId": 691929666,
    "kind": "yes",
    "points": "1376,1273 1374,1280 1369,1280 1365,1304 1373,1306 1375,1305 1381,1306 1383,1297 1382,1292 1384,1292 1385,1286 1386,1287 1384,1299 1394,1301 1398,1277 1376,1273",
    "labelX": 1381,
    "labelY": 1292,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929668,
    "kind": "yes",
    "points": "1507,1276 1504,1287 1514,1290 1510,1310 1524,1313 1531,1282 1507,1276",
    "labelX": 1515,
    "labelY": 1293,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929670,
    "name": "\u30b0\u30e9\u30f3\u30cc\u30fc\u30ce",
    "kind": "yes",
    "points": "1610,1276 1609,1289 1611,1290 1610,1299 1627,1301 1630,1278 1610,1276",
    "labelX": 1616,
    "labelY": 1289,
    "tags": {
      "building": "yes",
      "name": "\u30b0\u30e9\u30f3\u30cc\u30fc\u30ce"
    }
  },
  {
    "osmId": 691929671,
    "kind": "yes",
    "points": "1457,1278 1453,1309 1468,1311 1471,1280 1457,1278",
    "labelX": 1462,
    "labelY": 1295,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929673,
    "kind": "yes",
    "points": "1401,1277 1396,1302 1413,1305 1418,1281 1401,1277",
    "labelX": 1407,
    "labelY": 1291,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929674,
    "kind": "yes",
    "points": "1447,1280 1446,1286 1441,1285 1438,1305 1448,1306 1448,1301 1452,1302 1456,1281 1447,1280",
    "labelX": 1447,
    "labelY": 1293,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929676,
    "kind": "yes",
    "points": "1182,1280 1180,1292 1183,1294 1183,1297 1191,1297 1192,1281 1182,1280",
    "labelX": 1185,
    "labelY": 1290,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929678,
    "kind": "yes",
    "points": "1428,1281 1428,1287 1422,1286 1419,1302 1435,1305 1438,1288 1432,1287 1433,1282 1428,1281",
    "labelX": 1429,
    "labelY": 1290,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929680,
    "kind": "yes",
    "points": "1147,1284 1144,1294 1162,1300 1165,1289 1147,1284",
    "labelX": 1155,
    "labelY": 1292,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929681,
    "kind": "yes",
    "points": "1512,1291 1509,1305 1498,1302 1501,1289 1512,1291",
    "labelX": 1505,
    "labelY": 1297,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929683,
    "kind": "yes",
    "points": "1339,1289 1337,1300 1350,1303 1352,1291 1339,1289",
    "labelX": 1345,
    "labelY": 1296,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929684,
    "kind": "yes",
    "points": "1137,1295 1131,1313 1151,1320 1153,1317 1156,1318 1161,1303 1137,1295",
    "labelX": 1148,
    "labelY": 1311,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929687,
    "kind": "yes",
    "points": "1605,1295 1604,1300 1609,1301 1610,1296 1605,1295",
    "labelX": 1607,
    "labelY": 1298,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929690,
    "kind": "yes",
    "points": "1327,1304 1309,1305 1305,1318 1321,1322 1327,1304",
    "labelX": 1316,
    "labelY": 1312,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929692,
    "kind": "yes",
    "points": "1285,1308 1283,1316 1284,1317 1297,1320 1298,1319 1303,1320 1307,1304 1291,1304 1290,1307 1285,1308",
    "labelX": 1293,
    "labelY": 1313,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929696,
    "kind": "yes",
    "points": "1169,1306 1162,1326 1175,1331 1177,1328 1189,1332 1196,1314 1178,1307 1176,1309 1169,1306",
    "labelX": 1178,
    "labelY": 1319,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929699,
    "kind": "yes",
    "points": "1494,1315 1496,1340 1515,1339 1516,1338 1513,1316 1504,1317 1502,1314 1494,1315",
    "labelX": 1506,
    "labelY": 1326,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929701,
    "name": "\u30ab\u30fc\u30b5\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1472,1315 1471,1346 1487,1346 1487,1338 1486,1336 1486,1325 1487,1325 1487,1316 1472,1315",
    "labelX": 1483,
    "labelY": 1331,
    "tags": {
      "building": "yes",
      "name": "\u30ab\u30fc\u30b5\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929705,
    "kind": "yes",
    "points": "1531,1318 1528,1319 1526,1316 1516,1319 1519,1334 1533,1331 1531,1318",
    "labelX": 1526,
    "labelY": 1323,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929707,
    "kind": "yes",
    "points": "1280,1318 1277,1327 1293,1332 1297,1322 1280,1318",
    "labelX": 1287,
    "labelY": 1325,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929709,
    "kind": "yes",
    "points": "1588,1323 1573,1320 1557,1324 1557,1325 1563,1342 1589,1331 1589,1329 1588,1323",
    "labelX": 1574,
    "labelY": 1328,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929712,
    "kind": "yes",
    "points": "1310,1320 1302,1346 1314,1349 1322,1323 1310,1320",
    "labelX": 1312,
    "labelY": 1335,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929716,
    "name": "\u30a8\u30d3\u30b9\u30a2\u30d1\u30fc\u30c8\u30e1\u30f3\u30c8",
    "kind": "yes",
    "points": "1127,1321 1123,1334 1120,1334 1117,1343 1151,1352 1158,1330 1127,1321",
    "labelX": 1133,
    "labelY": 1336,
    "tags": {
      "building": "yes",
      "name": "\u30a8\u30d3\u30b9\u30a2\u30d1\u30fc\u30c8\u30e1\u30f3\u30c8"
    }
  },
  {
    "osmId": 691929719,
    "name": "\u6075\u6bd4\u5bff\u30a4\u30fc\u30b9\u30c8\u30b9\u30af\u30a8\u30a2",
    "kind": "yes",
    "points": "1637,1325 1604,1341 1608,1347 1604,1350 1616,1366 1649,1343 1637,1325",
    "labelX": 1620,
    "labelY": 1345,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30a4\u30fc\u30b9\u30c8\u30b9\u30af\u30a8\u30a2"
    }
  },
  {
    "osmId": 691929721,
    "name": "\u30a2\u30d3\u30bf\u30fc\u30ec\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1163,1328 1156,1347 1164,1350 1166,1348 1173,1351 1172,1354 1179,1356 1182,1347 1187,1347 1190,1338 1163,1328",
    "labelX": 1173,
    "labelY": 1347,
    "tags": {
      "building": "yes",
      "name": "\u30a2\u30d3\u30bf\u30fc\u30ec\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929725,
    "kind": "yes",
    "points": "1277,1330 1274,1342 1289,1346 1292,1334 1277,1330",
    "labelX": 1283,
    "labelY": 1338,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929728,
    "kind": "yes",
    "points": "1533,1334 1519,1338 1523,1358 1538,1354 1533,1334",
    "labelX": 1528,
    "labelY": 1346,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929730,
    "name": "\u30e1\u30be\u30f3\u6176",
    "kind": "yes",
    "points": "1518,1340 1502,1343 1507,1364 1523,1361 1518,1340",
    "labelX": 1513,
    "labelY": 1352,
    "tags": {
      "building": "yes",
      "name": "\u30e1\u30be\u30f3\u6176"
    }
  },
  {
    "osmId": 691929733,
    "kind": "yes",
    "points": "1276,1344 1272,1356 1282,1360 1284,1355 1287,1354 1288,1348 1276,1344",
    "labelX": 1282,
    "labelY": 1353,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929737,
    "kind": "yes",
    "points": "1600,1346 1584,1352 1586,1360 1584,1363 1589,1377 1602,1372 1600,1366 1607,1364 1600,1346",
    "labelX": 1594,
    "labelY": 1363,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929739,
    "kind": "yes",
    "points": "1303,1347 1298,1362 1310,1366 1315,1350 1303,1347",
    "labelX": 1307,
    "labelY": 1356,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929742,
    "kind": "yes",
    "points": "1487,1349 1471,1352 1472,1359 1471,1360 1474,1372 1491,1369 1487,1349",
    "labelX": 1478,
    "labelY": 1360,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929744,
    "kind": "yes",
    "points": "1577,1354 1564,1360 1574,1384 1587,1379 1577,1354",
    "labelX": 1576,
    "labelY": 1369,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929747,
    "kind": "yes",
    "points": "1504,1357 1499,1358 1502,1370 1506,1369 1504,1357",
    "labelX": 1503,
    "labelY": 1364,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929748,
    "kind": "yes",
    "points": "1272,1359 1263,1390 1275,1393 1284,1362 1272,1359",
    "labelX": 1274,
    "labelY": 1376,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929749,
    "kind": "yes",
    "points": "1561,1360 1544,1368 1551,1384 1568,1376 1561,1360",
    "labelX": 1556,
    "labelY": 1372,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929750,
    "name": "\u30a2\u30eb\u30ab\u30f3\u30b7\u30a8\u30eb",
    "kind": "yes",
    "points": "1146,1362 1136,1385 1163,1397 1173,1374 1146,1362",
    "labelX": 1155,
    "labelY": 1380,
    "tags": {
      "building": "yes",
      "name": "\u30a2\u30eb\u30ab\u30f3\u30b7\u30a8\u30eb"
    }
  },
  {
    "osmId": 691929751,
    "kind": "yes",
    "points": "1298,1364 1294,1379 1306,1382 1310,1367 1298,1364",
    "labelX": 1302,
    "labelY": 1373,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929752,
    "kind": "yes",
    "points": "1751,1386 1721,1395 1725,1405 1754,1396 1751,1386",
    "labelX": 1738,
    "labelY": 1396,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929753,
    "name": "\u30b7\u30a7\u30a4\u30c9\u30d2\u30eb",
    "kind": "yes",
    "points": "1524,1377 1514,1381 1515,1384 1507,1388 1516,1409 1519,1408 1525,1422 1526,1423 1534,1420 1532,1417 1540,1413 1524,1377",
    "labelX": 1523,
    "labelY": 1404,
    "tags": {
      "building": "yes",
      "name": "\u30b7\u30a7\u30a4\u30c9\u30d2\u30eb"
    }
  },
  {
    "osmId": 691929754,
    "kind": "yes",
    "points": "1294,1380 1290,1397 1301,1400 1306,1383 1294,1380",
    "labelX": 1298,
    "labelY": 1390,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929756,
    "name": "\u6075\u6bd4\u5bff\u30b0\u30ea\u30fc\u30f3\u30d2\u30eb\u30ba",
    "kind": "yes",
    "points": "1181,1383 1175,1401 1171,1402 1166,1421 1195,1430 1205,1392 1181,1383",
    "labelX": 1182,
    "labelY": 1405,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30b0\u30ea\u30fc\u30f3\u30d2\u30eb\u30ba"
    }
  },
  {
    "osmId": 691929757,
    "name": "\u30d6\u30eb\u30e4\u30fc\u30ebEbs",
    "kind": "yes",
    "points": "1133,1387 1125,1402 1138,1407 1139,1410 1156,1418 1163,1401 1133,1387",
    "labelX": 1142,
    "labelY": 1404,
    "tags": {
      "building": "yes",
      "name": "\u30d6\u30eb\u30e4\u30fc\u30ebEbs"
    }
  },
  {
    "osmId": 691929758,
    "kind": "yes",
    "points": "1569,1389 1564,1392 1562,1390 1555,1394 1559,1400 1570,1393 1569,1389",
    "labelX": 1563,
    "labelY": 1393,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929759,
    "kind": "yes",
    "points": "1486,1396 1495,1416 1498,1415 1505,1429 1511,1426 1513,1430 1520,1427 1512,1411 1501,1388 1486,1396",
    "labelX": 1505,
    "labelY": 1415,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929760,
    "kind": "yes",
    "points": "1755,1400 1728,1406 1742,1427 1758,1426 1755,1400",
    "labelX": 1746,
    "labelY": 1415,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929761,
    "name": "\u6075\u6bd4\u5bff\u30af\u30ec\u30bb\u30f3\u30c8SAKI",
    "kind": "yes",
    "points": "1228,1399 1214,1440 1239,1448 1250,1415 1243,1413 1246,1405 1228,1399",
    "labelX": 1237,
    "labelY": 1420,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u30af\u30ec\u30bb\u30f3\u30c8SAKI"
    }
  },
  {
    "osmId": 691929763,
    "kind": "yes",
    "points": "1826,1401 1826,1412 1857,1413 1857,1402 1826,1401",
    "labelX": 1842,
    "labelY": 1407,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929764,
    "name": "TM\u30b7\u30e3\u30eb\u30e0",
    "kind": "yes",
    "points": "1472,1403 1465,1407 1469,1412 1464,1416 1479,1436 1495,1425 1480,1404 1475,1407 1472,1403",
    "labelX": 1475,
    "labelY": 1414,
    "tags": {
      "building": "yes",
      "name": "TM\u30b7\u30e3\u30eb\u30e0"
    }
  },
  {
    "osmId": 691929766,
    "kind": "yes",
    "points": "1263,1404 1260,1415 1257,1415 1252,1430 1272,1436 1273,1433 1282,1436 1290,1412 1263,1404",
    "labelX": 1269,
    "labelY": 1423,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929767,
    "name": "ebisu422",
    "kind": "yes",
    "points": "1691,1409 1637,1454 1649,1468 1666,1453 1674,1463 1684,1456 1688,1444 1686,1442 1706,1426 1691,1409",
    "labelX": 1676,
    "labelY": 1446,
    "tags": {
      "building": "yes",
      "name": "ebisu422"
    }
  },
  {
    "osmId": 691929768,
    "kind": "yes",
    "points": "1455,1412 1446,1417 1458,1442 1460,1445 1469,1441 1455,1412",
    "labelX": 1458,
    "labelY": 1431,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929769,
    "kind": "yes",
    "points": "1433,1416 1415,1424 1420,1436 1438,1428 1433,1416",
    "labelX": 1427,
    "labelY": 1426,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929770,
    "kind": "yes",
    "points": "1300,1424 1295,1439 1296,1440 1312,1444 1312,1441 1333,1447 1339,1426 1308,1417 1305,1426 1300,1424",
    "labelX": 1311,
    "labelY": 1434,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929771,
    "kind": "yes",
    "points": "1413,1424 1400,1430 1398,1450 1411,1453 1418,1449 1416,1444 1420,1441 1413,1424",
    "labelX": 1411,
    "labelY": 1442,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929772,
    "kind": "yes",
    "points": "1470,1429 1465,1431 1470,1441 1475,1437 1470,1429",
    "labelX": 1470,
    "labelY": 1435,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929773,
    "name": "\u30d2\u30eb\u30b5\u30a4\u30c9\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1498,1429 1497,1428 1477,1440 1460,1448 1460,1449 1463,1461 1482,1457 1498,1444 1498,1440 1503,1436 1498,1429",
    "labelX": 1484,
    "labelY": 1443,
    "tags": {
      "building": "yes",
      "name": "\u30d2\u30eb\u30b5\u30a4\u30c9\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929774,
    "kind": "yes",
    "points": "1252,1430 1247,1446 1261,1450 1266,1434 1252,1430",
    "labelX": 1257,
    "labelY": 1440,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929775,
    "kind": "yes",
    "points": "1347,1432 1338,1459 1355,1464 1356,1461 1370,1466 1369,1468 1381,1472 1385,1460 1377,1457 1379,1449 1376,1448 1378,1442 1347,1432",
    "labelX": 1368,
    "labelY": 1457,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929776,
    "kind": "yes",
    "points": "1439,1433 1422,1441 1429,1456 1434,1453 1436,1458 1448,1453 1439,1433",
    "labelX": 1435,
    "labelY": 1449,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929777,
    "kind": "yes",
    "points": "1784,1440 1784,1468 1794,1468 1793,1441 1784,1440",
    "labelX": 1789,
    "labelY": 1454,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929778,
    "kind": "yes",
    "points": "1782,1442 1752,1443 1765,1468 1783,1467 1782,1442",
    "labelX": 1771,
    "labelY": 1455,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929779,
    "name": "\u30f4\u30a1\u30f3\u30fb\u30c9\u30a5\u30fc\u30ab\u30b2\u30aa\u30ab",
    "kind": "yes",
    "points": "1297,1444 1292,1460 1292,1462 1325,1471 1326,1472 1331,1454 1298,1445 1297,1444",
    "labelX": 1309,
    "labelY": 1458,
    "tags": {
      "building": "yes",
      "name": "\u30f4\u30a1\u30f3\u30fb\u30c9\u30a5\u30fc\u30ab\u30b2\u30aa\u30ab"
    }
  },
  {
    "osmId": 691929780,
    "name": "\u30d5\u30ec\u30c3\u30af\u30b9\u666f\u4e18",
    "kind": "yes",
    "points": "1208,1447 1202,1466 1234,1477 1241,1453 1228,1449 1227,1453 1208,1447",
    "labelX": 1223,
    "labelY": 1458,
    "tags": {
      "building": "yes",
      "name": "\u30d5\u30ec\u30c3\u30af\u30b9\u666f\u4e18"
    }
  },
  {
    "osmId": 691929781,
    "name": "\u30e1\u30be\u30f3\u30fb\u30c9\u30fb\u30c8\u30fc\u30b7\u30f3\u30fb\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1401,1453 1395,1475 1406,1478 1412,1456 1401,1453",
    "labelX": 1404,
    "labelY": 1466,
    "tags": {
      "building": "yes",
      "name": "\u30e1\u30be\u30f3\u30fb\u30c9\u30fb\u30c8\u30fc\u30b7\u30f3\u30fb\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929782,
    "name": "\u30de\u30fc\u30d6\u30eb\u30cf\u30a4\u30c4",
    "kind": "yes",
    "points": "1245,1455 1239,1473 1263,1481 1269,1462 1245,1455",
    "labelX": 1254,
    "labelY": 1468,
    "tags": {
      "building": "yes",
      "name": "\u30de\u30fc\u30d6\u30eb\u30cf\u30a4\u30c4"
    }
  },
  {
    "osmId": 691929783,
    "kind": "yes",
    "points": "1415,1455 1411,1472 1428,1476 1428,1473 1434,1475 1437,1459 1415,1455",
    "labelX": 1426,
    "labelY": 1468,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929784,
    "kind": "yes",
    "points": "1439,1461 1434,1480 1448,1483 1453,1465 1439,1461",
    "labelX": 1444,
    "labelY": 1472,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929785,
    "kind": "yes",
    "points": "1338,1464 1329,1491 1334,1493 1336,1488 1345,1491 1347,1487 1361,1492 1362,1490 1371,1493 1376,1480 1375,1479 1365,1476 1367,1473 1339,1463 1338,1464",
    "labelX": 1353,
    "labelY": 1483,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929786,
    "kind": "yes",
    "points": "1732,1469 1714,1477 1722,1495 1740,1487 1732,1469",
    "labelX": 1727,
    "labelY": 1482,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929787,
    "kind": "yes",
    "points": "1793,1469 1770,1469 1770,1486 1793,1486 1793,1469",
    "labelX": 1782,
    "labelY": 1478,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929788,
    "name": "\u30b3\u30ea\u30fc\u30cc\u30fb\u30c9\u30fb\u30ed\u30f3\u30d6\u30eb",
    "kind": "yes",
    "points": "1289,1469 1285,1485 1320,1493 1323,1478 1289,1469",
    "labelX": 1304,
    "labelY": 1481,
    "tags": {
      "building": "yes",
      "name": "\u30b3\u30ea\u30fc\u30cc\u30fb\u30c9\u30fb\u30ed\u30f3\u30d6\u30eb"
    }
  },
  {
    "osmId": 691929790,
    "kind": "yes",
    "points": "1470,1470 1460,1482 1481,1499 1491,1487 1470,1470",
    "labelX": 1476,
    "labelY": 1485,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929791,
    "kind": "yes",
    "points": "1411,1475 1411,1480 1427,1483 1429,1483 1429,1477 1412,1474 1411,1475",
    "labelX": 1420,
    "labelY": 1479,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929792,
    "name": "\u30d5\u30e9\u30c3\u30c8\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1238,1477 1231,1499 1232,1499 1263,1508 1264,1504 1267,1504 1271,1491 1272,1486 1238,1476 1238,1477",
    "labelX": 1253,
    "labelY": 1494,
    "tags": {
      "building": "yes",
      "name": "\u30d5\u30e9\u30c3\u30c8\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929794,
    "kind": "yes",
    "points": "1211,1478 1206,1491 1225,1497 1230,1484 1211,1478",
    "labelX": 1218,
    "labelY": 1488,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929795,
    "name": "\u30a2\u30eb\u30c8\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1387,1479 1380,1505 1408,1512 1415,1487 1387,1479",
    "labelX": 1398,
    "labelY": 1496,
    "tags": {
      "building": "yes",
      "name": "\u30a2\u30eb\u30c8\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929797,
    "kind": "yes",
    "points": "1421,1485 1421,1489 1433,1492 1434,1488 1422,1484 1421,1485",
    "labelX": 1426,
    "labelY": 1488,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929798,
    "kind": "yes",
    "points": "1773,1487 1770,1490 1770,1492 1775,1495 1774,1498 1785,1522 1796,1523 1808,1504 1807,1502 1801,1498 1797,1500 1794,1495 1794,1490 1789,1489 1788,1487 1773,1487",
    "labelX": 1788,
    "labelY": 1498,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929800,
    "kind": "yes",
    "points": "1284,1488 1276,1514 1287,1517 1295,1491 1284,1488",
    "labelX": 1286,
    "labelY": 1503,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929801,
    "kind": "yes",
    "points": "1418,1490 1416,1498 1417,1499 1437,1503 1438,1494 1420,1489 1418,1490",
    "labelX": 1424,
    "labelY": 1496,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929803,
    "kind": "yes",
    "points": "1296,1491 1288,1517 1302,1521 1310,1496 1296,1491",
    "labelX": 1299,
    "labelY": 1506,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929804,
    "name": "\u30b7\u30fc\u30de\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1494,1492 1484,1504 1503,1521 1513,1509 1494,1492",
    "labelX": 1499,
    "labelY": 1507,
    "tags": {
      "building": "yes",
      "name": "\u30b7\u30fc\u30de\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929805,
    "kind": "yes",
    "points": "1330,1495 1325,1515 1337,1519 1336,1522 1354,1528 1356,1528 1357,1525 1361,1527 1367,1506 1330,1495",
    "labelX": 1347,
    "labelY": 1518,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929807,
    "kind": "yes",
    "points": "1311,1496 1303,1521 1314,1525 1322,1500 1311,1496",
    "labelX": 1313,
    "labelY": 1511,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929808,
    "kind": "yes",
    "points": "1416,1500 1415,1508 1434,1513 1436,1513 1437,1505 1417,1500 1416,1500",
    "labelX": 1426,
    "labelY": 1507,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929809,
    "name": "\u30c9\u30a8\u30eb\u30fb\u30b5\u30b5\u30ad",
    "kind": "yes",
    "points": "1457,1500 1450,1518 1460,1522 1462,1521 1479,1527 1484,1512 1479,1511 1479,1508 1457,1500",
    "labelX": 1469,
    "labelY": 1515,
    "tags": {
      "building": "yes",
      "name": "\u30c9\u30a8\u30eb\u30fb\u30b5\u30b5\u30ad"
    }
  },
  {
    "osmId": 691929810,
    "kind": "yes",
    "points": "1198,1504 1195,1510 1196,1511 1218,1520 1219,1519 1222,1511 1217,1509 1218,1507 1211,1504 1209,1507 1199,1502 1198,1504",
    "labelX": 1209,
    "labelY": 1509,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929811,
    "kind": "yes",
    "points": "1382,1511 1372,1539 1373,1540 1378,1542 1380,1541 1389,1514 1382,1511",
    "labelX": 1379,
    "labelY": 1531,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929812,
    "kind": "yes",
    "points": "1412,1512 1407,1532 1432,1539 1438,1518 1412,1512",
    "labelX": 1422,
    "labelY": 1525,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929813,
    "name": "\u30b7\u30fc\u30de\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1487,1514 1480,1530 1495,1537 1500,1527 1500,1526 1503,1521 1487,1514",
    "labelX": 1494,
    "labelY": 1526,
    "tags": {
      "building": "yes",
      "name": "\u30b7\u30fc\u30de\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929814,
    "kind": "yes",
    "points": "1392,1514 1384,1540 1391,1543 1390,1547 1396,1549 1405,1518 1392,1514",
    "labelX": 1393,
    "labelY": 1535,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929815,
    "kind": "yes",
    "points": "1227,1515 1221,1534 1232,1537 1238,1519 1227,1515",
    "labelX": 1230,
    "labelY": 1526,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929816,
    "kind": "yes",
    "points": "1194,1517 1191,1527 1208,1533 1213,1520 1197,1514 1196,1517 1194,1517",
    "labelX": 1200,
    "labelY": 1521,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929817,
    "kind": "yes",
    "points": "1452,1522 1446,1538 1465,1545 1471,1529 1452,1522",
    "labelX": 1459,
    "labelY": 1534,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929818,
    "kind": "yes",
    "points": "1252,1525 1246,1544 1255,1547 1261,1527 1252,1525",
    "labelX": 1254,
    "labelY": 1536,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929819,
    "kind": "yes",
    "points": "1264,1526 1259,1540 1278,1545 1281,1534 1280,1531 1264,1526",
    "labelX": 1272,
    "labelY": 1535,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929820,
    "kind": "yes",
    "points": "1472,1531 1466,1548 1478,1552 1484,1535 1472,1531",
    "labelX": 1475,
    "labelY": 1542,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929821,
    "kind": "yes",
    "points": "1199,1533 1198,1533 1196,1532 1192,1545 1202,1548 1201,1551 1213,1554 1215,1545 1213,1545 1215,1539 1207,1537 1208,1536 1199,1533",
    "labelX": 1205,
    "labelY": 1542,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929822,
    "kind": "yes",
    "points": "1296,1533 1293,1542 1295,1543 1294,1548 1303,1551 1304,1548 1306,1549 1311,1536 1300,1532 1300,1534 1296,1533",
    "labelX": 1300,
    "labelY": 1542,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929823,
    "kind": "yes",
    "points": "1221,1536 1214,1556 1224,1560 1231,1540 1221,1536",
    "labelX": 1223,
    "labelY": 1548,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929824,
    "kind": "yes",
    "points": "1312,1536 1308,1548 1321,1553 1326,1540 1312,1536",
    "labelX": 1317,
    "labelY": 1544,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929825,
    "kind": "yes",
    "points": "1404,1537 1399,1552 1425,1560 1430,1545 1404,1537",
    "labelX": 1415,
    "labelY": 1549,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929827,
    "kind": "yes",
    "points": "1260,1541 1256,1553 1273,1558 1277,1546 1260,1541",
    "labelX": 1267,
    "labelY": 1550,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929828,
    "kind": "yes",
    "points": "1447,1545 1444,1555 1467,1563 1471,1553 1447,1545",
    "labelX": 1457,
    "labelY": 1554,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929829,
    "kind": "yes",
    "points": "1339,1548 1327,1544 1323,1557 1309,1553 1303,1572 1329,1580 1339,1548",
    "labelX": 1322,
    "labelY": 1559,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929830,
    "kind": "yes",
    "points": "1293,1550 1291,1556 1288,1555 1285,1564 1300,1568 1304,1553 1293,1550",
    "labelX": 1294,
    "labelY": 1558,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929831,
    "kind": "yes",
    "points": "1229,1550 1225,1563 1230,1564 1229,1567 1238,1569 1241,1560 1239,1560 1241,1553 1229,1550",
    "labelX": 1234,
    "labelY": 1561,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929832,
    "kind": "yes",
    "points": "1246,1551 1239,1570 1247,1573 1254,1554 1246,1551",
    "labelX": 1247,
    "labelY": 1562,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929833,
    "kind": "yes",
    "points": "1255,1556 1251,1567 1254,1568 1254,1570 1261,1573 1262,1570 1268,1572 1271,1561 1255,1556",
    "labelX": 1260,
    "labelY": 1567,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929834,
    "kind": "yes",
    "points": "1364,1555 1356,1581 1369,1586 1378,1559 1364,1555",
    "labelX": 1367,
    "labelY": 1570,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929835,
    "kind": "yes",
    "points": "1337,1566 1329,1589 1351,1596 1358,1573 1337,1566",
    "labelX": 1344,
    "labelY": 1581,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929836,
    "kind": "yes",
    "points": "1402,1566 1395,1588 1409,1593 1416,1570 1402,1566",
    "labelX": 1406,
    "labelY": 1579,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929837,
    "kind": "yes",
    "points": "1382,1566 1377,1584 1393,1589 1398,1570 1382,1566",
    "labelX": 1388,
    "labelY": 1577,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929838,
    "kind": "yes",
    "points": "1285,1568 1283,1573 1278,1572 1273,1587 1293,1593 1300,1572 1285,1568",
    "labelX": 1285,
    "labelY": 1578,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929839,
    "kind": "yes",
    "points": "1250,1571 1250,1575 1268,1584 1271,1576 1270,1576 1250,1571",
    "labelX": 1262,
    "labelY": 1576,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929840,
    "kind": "yes",
    "points": "1430,1575 1424,1594 1438,1599 1440,1594 1442,1594 1447,1581 1430,1575",
    "labelX": 1437,
    "labelY": 1590,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929841,
    "kind": "yes",
    "points": "1301,1579 1297,1595 1313,1599 1312,1602 1322,1604 1325,1591 1325,1590 1322,1589 1322,1586 1318,1585 1318,1583 1301,1579",
    "labelX": 1316,
    "labelY": 1591,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929842,
    "kind": "yes",
    "points": "1356,1585 1350,1606 1360,1610 1367,1588 1356,1585",
    "labelX": 1358,
    "labelY": 1597,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929843,
    "kind": "yes",
    "points": "1371,1588 1365,1608 1385,1614 1391,1594 1371,1588",
    "labelX": 1378,
    "labelY": 1601,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929844,
    "kind": "yes",
    "points": "1332,1592 1326,1611 1335,1613 1334,1617 1345,1620 1349,1604 1345,1603 1341,1602 1343,1595 1332,1592",
    "labelX": 1339,
    "labelY": 1606,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929845,
    "kind": "yes",
    "points": "1393,1591 1386,1613 1405,1619 1412,1597 1393,1591",
    "labelX": 1399,
    "labelY": 1605,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929846,
    "kind": "yes",
    "points": "1422,1594 1415,1603 1426,1611 1433,1602 1422,1594",
    "labelX": 1424,
    "labelY": 1603,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929847,
    "kind": "yes",
    "points": "1415,1605 1407,1616 1418,1623 1426,1612 1415,1605",
    "labelX": 1417,
    "labelY": 1614,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929848,
    "kind": "yes",
    "points": "1538,1635 1533,1636 1534,1649 1540,1649 1538,1635",
    "labelX": 1536,
    "labelY": 1642,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929849,
    "kind": "yes",
    "points": "1551,1658 1538,1658 1537,1669 1551,1669 1551,1658",
    "labelX": 1544,
    "labelY": 1664,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929850,
    "kind": "yes",
    "points": "1139,828 1123,831 1129,865 1141,863 1140,855 1144,854 1139,828",
    "labelX": 1136,
    "labelY": 849,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929851,
    "kind": "yes",
    "points": "1822,827 1822,842 1829,842 1830,848 1841,848 1842,843 1847,842 1846,827 1822,827",
    "labelX": 1835,
    "labelY": 840,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929852,
    "kind": "yes",
    "points": "1821,851 1822,869 1846,869 1846,850 1821,851",
    "labelX": 1834,
    "labelY": 860,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929853,
    "kind": "yes",
    "points": "1846,873 1821,873 1820,897 1826,898 1827,893 1833,893 1833,888 1845,888 1846,873",
    "labelX": 1831,
    "labelY": 888,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929854,
    "kind": "yes",
    "points": "1789,875 1789,893 1804,893 1804,875 1789,875",
    "labelX": 1797,
    "labelY": 884,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929855,
    "kind": "yes",
    "points": "1805,873 1804,899 1816,900 1817,874 1805,873",
    "labelX": 1811,
    "labelY": 887,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929857,
    "name": "\u30b6\u30fb\u30de\u30b0\u30ce\u30ea\u30a2\u30ac\u30fc\u30c7\u30f3\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "1835,948 1832,1007 1861,1009 1862,985 1874,986 1875,972 1872,972 1873,950 1835,948",
    "labelX": 1861,
    "labelY": 979,
    "tags": {
      "building": "yes",
      "name": "\u30b6\u30fb\u30de\u30b0\u30ce\u30ea\u30a2\u30ac\u30fc\u30c7\u30f3\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 691929859,
    "kind": "yes",
    "points": "1818,976 1816,993 1831,994 1832,975 1822,974 1822,977 1818,976",
    "labelX": 1824,
    "labelY": 982,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691929862,
    "name": "\u5c0f\u6797\u9244\u5de5\u30d3\u30eb",
    "kind": "apartments",
    "points": "1616,1046 1616,1054 1619,1056 1619,1063 1662,1065 1662,1048 1616,1046",
    "labelX": 1632,
    "labelY": 1055,
    "tags": {
      "building": "apartments",
      "name": "\u5c0f\u6797\u9244\u5de5\u30d3\u30eb"
    }
  },
  {
    "osmId": 691935706,
    "kind": "yes",
    "points": "1891,2290 1887,2288 1883,2290 1883,2307 1878,2310 1876,2313 1860,2313 1858,2316 1858,2320 1861,2321 1879,2321 1881,2323 1888,2323 1892,2319 1893,2314 1891,2290",
    "labelX": 1878,
    "labelY": 2311,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935763,
    "kind": "yes",
    "points": "1909,2405 1883,2416 1888,2429 1893,2427 1904,2453 1926,2444 1909,2405",
    "labelX": 1901,
    "labelY": 2429,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935771,
    "kind": "yes",
    "points": "1863,2420 1843,2428 1862,2473 1889,2461 1887,2458 1897,2454 1886,2427 1875,2432 1873,2426 1870,2420 1864,2423 1863,2420",
    "labelX": 1874,
    "labelY": 2438,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935778,
    "kind": "yes",
    "points": "1842,2430 1814,2439 1822,2463 1828,2461 1827,2457 1849,2451 1842,2430",
    "labelX": 1830,
    "labelY": 2450,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935787,
    "kind": "yes",
    "points": "1938,2448 1918,2459 1933,2488 1944,2482 1941,2476 1947,2473 1940,2459 1943,2458 1938,2448",
    "labelX": 1938,
    "labelY": 2468,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935792,
    "kind": "yes",
    "points": "1852,2457 1826,2466 1831,2484 1858,2476 1852,2457",
    "labelX": 1842,
    "labelY": 2471,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935793,
    "kind": "yes",
    "points": "1809,2458 1788,2464 1793,2480 1803,2477 1802,2473 1812,2470 1809,2458",
    "labelX": 1801,
    "labelY": 2470,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935796,
    "kind": "yes",
    "points": "1916,2464 1898,2473 1910,2494 1928,2484 1916,2464",
    "labelX": 1913,
    "labelY": 2479,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935799,
    "kind": "yes",
    "points": "1895,2477 1890,2479 1888,2476 1883,2479 1881,2477 1862,2489 1858,2483 1829,2502 1826,2500 1822,2502 1821,2504 1827,2522 1827,2530 1830,2534 1863,2513 1867,2519 1880,2511 1882,2513 1907,2497 1895,2477",
    "labelX": 1860,
    "labelY": 2500,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935800,
    "kind": "yes",
    "points": "1812,2476 1789,2484 1794,2499 1818,2491 1812,2476",
    "labelX": 1803,
    "labelY": 2488,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935801,
    "kind": "yes",
    "points": "1789,2491 1767,2491 1767,2506 1770,2506 1789,2506 1789,2491",
    "labelX": 1776,
    "labelY": 2500,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 691935802,
    "kind": "yes",
    "points": "2076,2494 2082,2514 2077,2516 2087,2552 2091,2551 2095,2567 2134,2556 2132,2551 2135,2550 2131,2534 2126,2536 2124,2527 2108,2532 2101,2507 2094,2509 2089,2490 2076,2494",
    "labelX": 2105,
    "labelY": 2530,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167245,
    "kind": "yes",
    "points": "444,1013 429,1009 412,1026 418,1036 410,1041 420,1056 449,1039 444,1013",
    "labelX": 426,
    "labelY": 1031,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167246,
    "kind": "yes",
    "points": "413,1027 405,1031 411,1040 418,1036 413,1027",
    "labelX": 412,
    "labelY": 1034,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167247,
    "kind": "yes",
    "points": "404,1032 394,1039 408,1061 417,1055 404,1032",
    "labelX": 406,
    "labelY": 1047,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167248,
    "kind": "yes",
    "points": "392,1038 386,1043 395,1056 401,1052 392,1038",
    "labelX": 394,
    "labelY": 1047,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167249,
    "kind": "yes",
    "points": "448,1042 409,1064 415,1082 448,1071 452,1063 448,1042",
    "labelX": 434,
    "labelY": 1064,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167250,
    "kind": "yes",
    "points": "386,1043 363,1056 374,1076 397,1064 386,1043",
    "labelX": 380,
    "labelY": 1060,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167253,
    "kind": "yes",
    "points": "355,1060 344,1066 357,1099 359,1100 374,1095 355,1060",
    "labelX": 358,
    "labelY": 1084,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167256,
    "kind": "yes",
    "points": "407,1064 389,1070 392,1078 395,1079 398,1088 413,1082 407,1064",
    "labelX": 399,
    "labelY": 1077,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167258,
    "kind": "yes",
    "points": "389,1071 376,1079 381,1093 394,1087 389,1071",
    "labelX": 385,
    "labelY": 1083,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167262,
    "kind": "yes",
    "points": "499,1151 495,1158 499,1192 500,1192 531,1185 531,1181 528,1176 522,1168 515,1165 517,1158 515,1152 507,1148 503,1148 499,1151",
    "labelX": 512,
    "labelY": 1167,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167265,
    "kind": "yes",
    "points": "468,1197 459,1190 426,1201 425,1202 432,1221 435,1221 469,1209 468,1197",
    "labelX": 445,
    "labelY": 1206,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167266,
    "kind": "yes",
    "points": "534,1189 532,1189 515,1192 516,1205 528,1203 530,1211 538,1210 534,1189",
    "labelX": 528,
    "labelY": 1200,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167267,
    "kind": "yes",
    "points": "513,1192 496,1195 499,1217 500,1219 503,1218 504,1225 518,1222 513,1192",
    "labelX": 505,
    "labelY": 1213,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167268,
    "kind": "yes",
    "points": "421,1201 403,1209 411,1228 429,1221 421,1201",
    "labelX": 416,
    "labelY": 1215,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167269,
    "kind": "yes",
    "points": "402,1209 393,1212 392,1215 387,1218 393,1234 398,1237 411,1232 402,1209",
    "labelX": 397,
    "labelY": 1222,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167270,
    "kind": "yes",
    "points": "467,1213 439,1225 444,1239 473,1228 467,1213",
    "labelX": 456,
    "labelY": 1226,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167271,
    "kind": "yes",
    "points": "432,1226 412,1234 416,1246 436,1238 432,1226",
    "labelX": 424,
    "labelY": 1236,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167272,
    "kind": "yes",
    "points": "524,1229 502,1234 508,1266 507,1268 510,1278 519,1276 520,1278 523,1277 524,1279 529,1278 528,1273 533,1271 524,1229",
    "labelX": 519,
    "labelY": 1267,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167273,
    "kind": "yes",
    "points": "541,1231 527,1234 530,1250 544,1247 541,1231",
    "labelX": 536,
    "labelY": 1241,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167275,
    "kind": "yes",
    "points": "468,1236 450,1244 465,1281 483,1273 468,1236",
    "labelX": 467,
    "labelY": 1259,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167278,
    "kind": "yes",
    "points": "544,1248 530,1251 534,1268 547,1264 544,1248",
    "labelX": 539,
    "labelY": 1258,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167279,
    "kind": "yes",
    "points": "406,1251 390,1256 382,1230 338,1243 346,1261 377,1251 400,1310 436,1299 430,1281 414,1277 406,1251",
    "labelX": 392,
    "labelY": 1266,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167280,
    "kind": "yes",
    "points": "447,1249 439,1251 440,1255 428,1260 441,1294 461,1285 447,1249",
    "labelX": 443,
    "labelY": 1266,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167281,
    "kind": "yes",
    "points": "293,1251 259,1263 267,1284 295,1274 293,1267 298,1265 298,1263 293,1251",
    "labelX": 286,
    "labelY": 1267,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167284,
    "kind": "yes",
    "points": "249,1267 233,1273 233,1286 239,1290 241,1295 258,1291 261,1284 258,1273 249,1267",
    "labelX": 247,
    "labelY": 1282,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167285,
    "kind": "yes",
    "points": "305,1299 273,1321 279,1334 287,1349 292,1348 295,1354 300,1352 306,1365 336,1351 338,1338 305,1299",
    "labelX": 301,
    "labelY": 1341,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167286,
    "kind": "yes",
    "points": "266,1290 244,1299 258,1317 262,1315 265,1322 276,1315 266,1290",
    "labelX": 262,
    "labelY": 1310,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167287,
    "kind": "yes",
    "points": "523,1300 522,1313 528,1325 530,1338 534,1348 612,1340 608,1309 573,1313 572,1301 566,1301 565,1294 525,1298 523,1300",
    "labelX": 555,
    "labelY": 1315,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167288,
    "kind": "yes",
    "points": "621,1345 597,1348 599,1369 607,1369 608,1373 604,1374 604,1378 601,1379 604,1402 628,1399 627,1378 626,1377 620,1377 618,1368 624,1368 621,1345",
    "labelX": 613,
    "labelY": 1374,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167289,
    "kind": "yes",
    "points": "595,1348 552,1352 551,1354 555,1383 598,1378 595,1348",
    "labelX": 570,
    "labelY": 1363,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167292,
    "kind": "yes",
    "points": "599,1381 584,1383 587,1409 602,1407 599,1381",
    "labelX": 593,
    "labelY": 1395,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167293,
    "kind": "yes",
    "points": "736,1385 708,1387 709,1406 710,1407 738,1404 736,1385",
    "labelX": 720,
    "labelY": 1398,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167295,
    "kind": "yes",
    "points": "578,1386 568,1388 566,1387 550,1391 544,1401 549,1417 556,1420 585,1412 583,1405 586,1404 582,1392 580,1392 578,1386",
    "labelX": 569,
    "labelY": 1400,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167297,
    "kind": "yes",
    "points": "740,1394 745,1428 765,1425 767,1429 776,1427 760,1391 740,1394",
    "labelX": 759,
    "labelY": 1416,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167299,
    "kind": "yes",
    "points": "686,1413 681,1413 679,1406 647,1413 651,1435 662,1433 662,1430 668,1429 670,1434 683,1432 683,1425 688,1423 686,1413",
    "labelX": 672,
    "labelY": 1424,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167300,
    "kind": "yes",
    "points": "721,1407 706,1409 709,1427 724,1424 721,1407",
    "labelX": 715,
    "labelY": 1417,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167301,
    "kind": "yes",
    "points": "643,1415 617,1421 622,1441 648,1435 643,1415",
    "labelX": 633,
    "labelY": 1428,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167303,
    "kind": "yes",
    "points": "600,1430 585,1433 591,1457 606,1453 600,1430",
    "labelX": 596,
    "labelY": 1443,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167304,
    "kind": "yes",
    "points": "299,1431 279,1448 284,1456 277,1462 297,1486 325,1462 299,1431",
    "labelX": 294,
    "labelY": 1458,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167305,
    "kind": "yes",
    "points": "582,1431 573,1433 573,1439 559,1443 559,1446 555,1448 561,1469 579,1464 581,1466 588,1464 585,1449 587,1447 582,1431",
    "labelX": 574,
    "labelY": 1450,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167306,
    "kind": "yes",
    "points": "663,1437 652,1439 655,1461 666,1459 663,1437",
    "labelX": 659,
    "labelY": 1449,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167308,
    "kind": "yes",
    "points": "648,1438 622,1444 627,1467 653,1461 648,1438",
    "labelX": 638,
    "labelY": 1453,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167309,
    "kind": "yes",
    "points": "690,1438 668,1441 671,1461 693,1458 690,1438",
    "labelX": 681,
    "labelY": 1450,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167310,
    "kind": "yes",
    "points": "511,1460 482,1465 489,1507 494,1507 496,1512 502,1510 501,1503 519,1499 511,1460",
    "labelX": 499,
    "labelY": 1495,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167311,
    "kind": "yes",
    "points": "326,1463 297,1487 316,1508 345,1484 326,1463",
    "labelX": 321,
    "labelY": 1486,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167312,
    "kind": "yes",
    "points": "-20,1463 -26,1487 -8,1492 -5,1483 -2,1484 2,1470 -20,1463",
    "labelX": -10,
    "labelY": 1480,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167313,
    "kind": "yes",
    "points": "22,1468 11,1507 11,1509 21,1511 23,1509 33,1471 22,1468",
    "labelX": 20,
    "labelY": 1496,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167314,
    "kind": "yes",
    "points": "693,1466 648,1469 649,1483 671,1482 673,1485 689,1483 690,1480 694,1480 693,1466",
    "labelX": 676,
    "labelY": 1479,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167315,
    "kind": "yes",
    "points": "447,1478 458,1506 483,1513 485,1506 478,1466 463,1468 447,1478",
    "labelX": 469,
    "labelY": 1490,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167316,
    "kind": "yes",
    "points": "5,1463 -4,1496 10,1500 19,1470 16,1469 17,1466 5,1463",
    "labelX": 11,
    "labelY": 1477,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167317,
    "kind": "yes",
    "points": "36,1467 32,1487 51,1492 52,1489 54,1489 55,1486 58,1486 60,1479 54,1477 55,1472 36,1467",
    "labelX": 51,
    "labelY": 1482,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167318,
    "kind": "yes",
    "points": "645,1468 633,1469 633,1479 625,1480 621,1478 613,1480 615,1505 648,1502 645,1468",
    "labelX": 629,
    "labelY": 1483,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167319,
    "kind": "yes",
    "points": "737,1472 736,1489 775,1492 776,1475 737,1472",
    "labelX": 756,
    "labelY": 1482,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167321,
    "kind": "yes",
    "points": "713,1474 714,1481 725,1481 725,1474 713,1474",
    "labelX": 719,
    "labelY": 1478,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167322,
    "kind": "yes",
    "points": "728,1475 727,1487 733,1488 734,1476 728,1475",
    "labelX": 731,
    "labelY": 1482,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167323,
    "kind": "yes",
    "points": "276,1477 269,1488 271,1490 262,1505 295,1527 305,1511 276,1477",
    "labelX": 280,
    "labelY": 1500,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167324,
    "kind": "yes",
    "points": "608,1483 595,1483 594,1478 574,1481 576,1497 565,1498 567,1513 571,1514 572,1517 587,1515 587,1508 612,1505 611,1495 609,1493 608,1483",
    "labelX": 588,
    "labelY": 1499,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167325,
    "kind": "yes",
    "points": "444,1480 417,1498 416,1511 429,1527 435,1528 434,1533 441,1536 443,1534 453,1498 444,1480",
    "labelX": 435,
    "labelY": 1516,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167326,
    "kind": "yes",
    "points": "87,1483 85,1485 83,1485 81,1489 76,1488 65,1514 74,1518 74,1522 84,1527 102,1490 87,1483",
    "labelX": 81,
    "labelY": 1500,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167327,
    "kind": "yes",
    "points": "346,1486 320,1507 334,1523 359,1502 346,1486",
    "labelX": 340,
    "labelY": 1505,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167328,
    "kind": "yes",
    "points": "671,1489 666,1490 665,1487 649,1489 652,1514 666,1512 665,1502 672,1500 671,1489",
    "labelX": 663,
    "labelY": 1498,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167329,
    "kind": "yes",
    "points": "30,1489 28,1499 48,1504 50,1495 30,1489",
    "labelX": 39,
    "labelY": 1497,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167330,
    "kind": "yes",
    "points": "537,1490 536,1489 520,1492 521,1503 539,1505 537,1490",
    "labelX": 531,
    "labelY": 1496,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167331,
    "kind": "yes",
    "points": "-29,1490 -34,1511 -20,1514 -21,1524 1,1529 6,1510 -12,1505 -10,1494 -29,1490",
    "labelX": -15,
    "labelY": 1510,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167333,
    "kind": "yes",
    "points": "696,1494 673,1495 674,1509 697,1511 696,1494",
    "labelX": 685,
    "labelY": 1502,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167334,
    "kind": "yes",
    "points": "104,1496 102,1500 99,1500 87,1528 107,1537 122,1505 104,1496",
    "labelX": 104,
    "labelY": 1511,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167335,
    "kind": "yes",
    "points": "795,1499 728,1499 727,1521 795,1521 795,1499",
    "labelX": 761,
    "labelY": 1510,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167337,
    "kind": "yes",
    "points": "27,1501 22,1517 41,1523 46,1506 27,1501",
    "labelX": 34,
    "labelY": 1512,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167338,
    "kind": "yes",
    "points": "129,1503 114,1534 142,1556 164,1528 129,1503",
    "labelX": 137,
    "labelY": 1530,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167339,
    "kind": "yes",
    "points": "360,1505 336,1525 349,1541 368,1524 369,1514 360,1505",
    "labelX": 356,
    "labelY": 1522,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167340,
    "kind": "yes",
    "points": "261,1507 254,1517 256,1520 247,1534 250,1537 240,1551 267,1570 294,1530 261,1507",
    "labelX": 259,
    "labelY": 1533,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167341,
    "kind": "yes",
    "points": "507,1508 508,1523 540,1524 539,1508 507,1508",
    "labelX": 524,
    "labelY": 1516,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167342,
    "name": "\u6075\u6bd4\u5bff\u30db\u30ea\u30c3\u30af\u30db\u30c6\u30eb",
    "kind": "hotel",
    "points": "452,1508 445,1533 456,1536 457,1539 463,1540 465,1537 478,1540 484,1517 452,1508",
    "labelX": 463,
    "labelY": 1531,
    "tags": {
      "building": "hotel",
      "name": "\u6075\u6bd4\u5bff\u30db\u30ea\u30c3\u30af\u30db\u30c6\u30eb"
    }
  },
  {
    "osmId": 692167343,
    "kind": "yes",
    "points": "674,1514 674,1534 700,1534 698,1514 674,1514",
    "labelX": 687,
    "labelY": 1524,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167344,
    "kind": "yes",
    "points": "645,1518 621,1515 609,1516 608,1524 573,1520 568,1569 639,1576 645,1518",
    "labelX": 609,
    "labelY": 1534,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167345,
    "kind": "yes",
    "points": "316,1516 296,1535 318,1559 339,1540 316,1516",
    "labelX": 317,
    "labelY": 1538,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167346,
    "kind": "yes",
    "points": "10,1516 6,1530 31,1537 33,1536 35,1523 10,1516",
    "labelX": 23,
    "labelY": 1528,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167347,
    "kind": "yes",
    "points": "486,1519 483,1540 499,1542 501,1521 486,1519",
    "labelX": 492,
    "labelY": 1531,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167348,
    "kind": "yes",
    "points": "67,1519 65,1522 61,1521 48,1545 77,1562 78,1560 81,1560 93,1539 87,1535 88,1531 67,1519",
    "labelX": 75,
    "labelY": 1539,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167349,
    "kind": "yes",
    "points": "670,1520 653,1522 654,1543 658,1543 659,1546 668,1545 669,1543 672,1542 670,1520",
    "labelX": 663,
    "labelY": 1538,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167350,
    "kind": "yes",
    "points": "801,1524 803,1540 807,1541 808,1546 805,1548 806,1554 812,1553 813,1558 807,1560 811,1579 846,1574 848,1578 854,1577 853,1570 848,1569 847,1563 844,1562 843,1555 836,1555 834,1544 830,1543 828,1533 823,1531 821,1521 801,1524",
    "labelX": 826,
    "labelY": 1553,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167351,
    "kind": "yes",
    "points": "789,1523 765,1524 765,1534 789,1534 789,1523",
    "labelX": 777,
    "labelY": 1529,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167352,
    "name": "Totsu Park View Plaza",
    "kind": "yes",
    "points": "-29,1523 -37,1557 -27,1560 -27,1562 -16,1564 -1,1545 3,1531 -29,1523",
    "labelX": -19,
    "labelY": 1549,
    "tags": {
      "building": "yes",
      "name": "Totsu Park View Plaza"
    }
  },
  {
    "osmId": 692167353,
    "kind": "yes",
    "points": "505,1527 505,1545 537,1547 537,1539 531,1533 531,1529 505,1527",
    "labelX": 524,
    "labelY": 1537,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167354,
    "kind": "yes",
    "points": "757,1527 723,1527 722,1546 757,1546 757,1527",
    "labelX": 740,
    "labelY": 1537,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167355,
    "kind": "yes",
    "points": "167,1532 141,1568 178,1594 198,1566 194,1563 200,1555 167,1532",
    "labelX": 180,
    "labelY": 1563,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167356,
    "name": "Totsu Park View Residence",
    "kind": "yes",
    "points": "23,1548 8,1537 -22,1579 -18,1586 -6,1588 23,1548",
    "labelX": -3,
    "labelY": 1568,
    "tags": {
      "building": "yes",
      "name": "Totsu Park View Residence"
    }
  },
  {
    "osmId": 692167357,
    "kind": "yes",
    "points": "98,1538 79,1564 93,1574 101,1562 100,1560 109,1546 98,1538",
    "labelX": 97,
    "labelY": 1557,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167358,
    "kind": "yes",
    "points": "290,1539 277,1557 283,1561 276,1570 287,1577 301,1556 295,1551 299,1545 290,1539",
    "labelX": 289,
    "labelY": 1557,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167359,
    "kind": "yes",
    "points": "677,1542 675,1577 679,1579 679,1585 699,1586 702,1543 677,1542",
    "labelX": 685,
    "labelY": 1569,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167361,
    "kind": "yes",
    "points": "477,1543 472,1576 484,1578 483,1590 486,1591 487,1595 493,1596 499,1555 491,1553 492,1545 477,1543",
    "labelX": 486,
    "labelY": 1572,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167362,
    "kind": "yes",
    "points": "793,1543 765,1545 765,1557 763,1558 765,1582 798,1579 797,1556 794,1555 793,1543",
    "labelX": 780,
    "labelY": 1559,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167363,
    "kind": "yes",
    "points": "504,1547 503,1556 505,1557 522,1558 524,1560 534,1560 534,1548 504,1547",
    "labelX": 518,
    "labelY": 1555,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167364,
    "kind": "yes",
    "points": "655,1547 652,1576 673,1578 675,1559 672,1558 673,1549 655,1547",
    "labelX": 667,
    "labelY": 1561,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167365,
    "kind": "yes",
    "points": "116,1548 101,1567 112,1574 107,1580 117,1587 136,1561 116,1548",
    "labelX": 115,
    "labelY": 1570,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167366,
    "kind": "yes",
    "points": "747,1549 748,1577 754,1578 755,1584 762,1583 761,1549 747,1549",
    "labelX": 755,
    "labelY": 1570,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167367,
    "kind": "yes",
    "points": "305,1553 289,1577 300,1584 305,1577 313,1583 321,1576 312,1567 316,1561 305,1553",
    "labelX": 308,
    "labelY": 1572,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167368,
    "name": "\u65e9\u702c\u30d3\u30eb",
    "kind": "yes",
    "points": "45,1559 25,1588 45,1602 65,1573 45,1559",
    "labelX": 45,
    "labelY": 1581,
    "tags": {
      "building": "yes",
      "name": "\u65e9\u702c\u30d3\u30eb"
    }
  },
  {
    "osmId": 692167369,
    "kind": "yes",
    "points": "212,1560 206,1567 203,1565 195,1576 215,1590 228,1572 212,1560",
    "labelX": 210,
    "labelY": 1572,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167370,
    "kind": "yes",
    "points": "501,1561 496,1594 528,1599 532,1577 531,1574 528,1574 529,1565 501,1561",
    "labelX": 521,
    "labelY": 1578,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167372,
    "kind": "yes",
    "points": "137,1565 119,1585 134,1598 152,1577 137,1565",
    "labelX": 136,
    "labelY": 1581,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167374,
    "kind": "yes",
    "points": "347,1573 341,1586 354,1592 356,1589 365,1593 369,1583 347,1573",
    "labelX": 355,
    "labelY": 1586,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167375,
    "kind": "yes",
    "points": "238,1579 226,1596 249,1613 261,1596 238,1579",
    "labelX": 244,
    "labelY": 1596,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167376,
    "kind": "yes",
    "points": "192,1580 180,1596 206,1614 217,1597 210,1593 210,1590 200,1583 198,1584 192,1580",
    "labelX": 202,
    "labelY": 1592,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167377,
    "kind": "yes",
    "points": "153,1583 136,1603 142,1608 159,1588 153,1583",
    "labelX": 148,
    "labelY": 1596,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167378,
    "name": "\u30aa\u30fc\u30af\u30fb\u30ab\u30f3\u30d1\u30cb\u30fc",
    "kind": "yes",
    "points": "80,1585 58,1612 69,1620 90,1593 80,1585",
    "labelX": 74,
    "labelY": 1603,
    "tags": {
      "building": "yes",
      "name": "\u30aa\u30fc\u30af\u30fb\u30ab\u30f3\u30d1\u30cb\u30fc"
    }
  },
  {
    "osmId": 692167379,
    "kind": "yes",
    "points": "21,1586 12,1595 19,1601 10,1610 20,1619 28,1611 25,1608 34,1599 21,1586",
    "labelX": 21,
    "labelY": 1604,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167380,
    "kind": "yes",
    "points": "161,1589 143,1610 154,1619 161,1610 165,1613 175,1600 161,1589",
    "labelX": 160,
    "labelY": 1607,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167382,
    "kind": "yes",
    "points": "331,1589 322,1611 350,1623 359,1601 331,1589",
    "labelX": 341,
    "labelY": 1606,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167383,
    "kind": "yes",
    "points": "571,1592 559,1601 556,1631 587,1634 591,1594 571,1592",
    "labelX": 573,
    "labelY": 1610,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167384,
    "kind": "yes",
    "points": "91,1594 72,1618 84,1627 103,1604 91,1594",
    "labelX": 88,
    "labelY": 1611,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167385,
    "kind": "yes",
    "points": "221,1596 208,1615 230,1631 243,1612 221,1596",
    "labelX": 226,
    "labelY": 1614,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167386,
    "kind": "yes",
    "points": "263,1596 249,1615 267,1627 280,1609 263,1596",
    "labelX": 265,
    "labelY": 1612,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167387,
    "kind": "yes",
    "points": "832,1600 832,1610 837,1611 838,1615 851,1614 853,1629 865,1627 863,1603 859,1598 832,1600",
    "labelX": 848,
    "labelY": 1612,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167388,
    "kind": "yes",
    "points": "494,1599 496,1607 519,1627 532,1622 534,1606 533,1603 494,1599",
    "labelX": 518,
    "labelY": 1611,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167389,
    "kind": "yes",
    "points": "592,1602 589,1628 606,1629 608,1604 592,1602",
    "labelX": 599,
    "labelY": 1616,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167390,
    "name": "\u5c0f\u6797\u30d3\u30eb",
    "kind": "yes",
    "points": "38,1604 20,1633 37,1644 55,1615 38,1604",
    "labelX": 38,
    "labelY": 1624,
    "tags": {
      "building": "yes",
      "name": "\u5c0f\u6797\u30d3\u30eb"
    }
  },
  {
    "osmId": 692167391,
    "kind": "yes",
    "points": "182,1602 176,1609 174,1607 160,1623 165,1629 163,1632 179,1646 189,1635 182,1628 187,1622 193,1626 200,1618 182,1602",
    "labelX": 179,
    "labelY": 1623,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167392,
    "kind": "yes",
    "points": "360,1603 350,1628 366,1634 372,1621 368,1619 372,1609 360,1603",
    "labelX": 365,
    "labelY": 1619,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167394,
    "name": "\u30b5\u30a6\u30b9\u30b3\u30fc\u30c8\u6075\u6bd4\u5bff",
    "kind": "yes",
    "points": "2,1606 -9,1618 2,1628 16,1633 20,1622 2,1606",
    "labelX": 6,
    "labelY": 1621,
    "tags": {
      "building": "yes",
      "name": "\u30b5\u30a6\u30b9\u30b3\u30fc\u30c8\u6075\u6bd4\u5bff"
    }
  },
  {
    "osmId": 692167395,
    "kind": "yes",
    "points": "748,1606 748,1645 771,1645 771,1607 748,1606",
    "labelX": 760,
    "labelY": 1626,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167396,
    "kind": "yes",
    "points": "103,1607 86,1628 96,1638 114,1617 103,1607",
    "labelX": 100,
    "labelY": 1623,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167397,
    "kind": "yes",
    "points": "678,1607 676,1642 700,1643 701,1609 678,1607",
    "labelX": 689,
    "labelY": 1625,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167398,
    "kind": "yes",
    "points": "787,1612 787,1631 780,1632 780,1646 829,1646 829,1612 787,1612",
    "labelX": 799,
    "labelY": 1630,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167399,
    "name": "\u30b5\u30a6\u30b9\u30b0\u30ec\u30a4\u30b7\u30a2",
    "kind": "yes",
    "points": "120,1613 101,1636 119,1651 138,1628 120,1613",
    "labelX": 120,
    "labelY": 1632,
    "tags": {
      "building": "yes",
      "name": "\u30b5\u30a6\u30b9\u30b0\u30ec\u30a4\u30b7\u30a2"
    }
  },
  {
    "osmId": 692167400,
    "kind": "yes",
    "points": "612,1613 606,1697 637,1729 655,1708 657,1679 666,1679 668,1660 672,1660 673,1659 673,1644 670,1643 671,1633 662,1632 662,1618 650,1618 649,1616 612,1613",
    "labelX": 655,
    "labelY": 1656,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167401,
    "kind": "yes",
    "points": "244,1614 239,1621 243,1625 238,1632 253,1643 263,1628 244,1614",
    "labelX": 247,
    "labelY": 1627,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167402,
    "kind": "yes",
    "points": "59,1615 43,1636 45,1638 42,1643 50,1650 70,1624 59,1615",
    "labelX": 52,
    "labelY": 1634,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167403,
    "kind": "yes",
    "points": "849,1616 832,1616 832,1631 849,1632 849,1616",
    "labelX": 841,
    "labelY": 1624,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167404,
    "kind": "yes",
    "points": "207,1616 203,1622 212,1628 215,1622 207,1616",
    "labelX": 209,
    "labelY": 1622,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167405,
    "name": "\u30a4\u30b7\u30c0\u30db\u30fc\u30e0\u30ba",
    "kind": "yes",
    "points": "71,1625 53,1649 68,1662 87,1638 71,1625",
    "labelX": 70,
    "labelY": 1644,
    "tags": {
      "building": "yes",
      "name": "\u30a4\u30b7\u30c0\u30db\u30fc\u30e0\u30ba"
    }
  },
  {
    "osmId": 692167406,
    "kind": "yes",
    "points": "204,1625 185,1646 199,1658 217,1636 204,1625",
    "labelX": 201,
    "labelY": 1641,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167407,
    "kind": "yes",
    "points": "295,1627 261,1661 274,1674 281,1668 309,1697 315,1691 320,1695 347,1659 331,1644 327,1648 313,1633 312,1635 305,1627 295,1627",
    "labelX": 307,
    "labelY": 1658,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167408,
    "kind": "yes",
    "points": "226,1630 214,1644 234,1662 247,1649 226,1630",
    "labelX": 230,
    "labelY": 1646,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167409,
    "kind": "yes",
    "points": "883,1642 877,1631 855,1632 856,1643 883,1642",
    "labelX": 868,
    "labelY": 1637,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167410,
    "kind": "yes",
    "points": "554,1632 552,1648 558,1649 556,1661 572,1675 577,1635 554,1632",
    "labelX": 562,
    "labelY": 1650,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167411,
    "kind": "yes",
    "points": "835,1633 835,1645 854,1644 854,1632 835,1633",
    "labelX": 845,
    "labelY": 1639,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167412,
    "name": "\u7af9\u539f\u30d3\u30eb",
    "kind": "yes",
    "points": "153,1641 133,1665 144,1675 164,1651 153,1641",
    "labelX": 149,
    "labelY": 1658,
    "tags": {
      "building": "yes",
      "name": "\u7af9\u539f\u30d3\u30eb"
    }
  },
  {
    "osmId": 692167413,
    "kind": "yes",
    "points": "589,1642 588,1645 585,1645 585,1649 580,1649 580,1654 578,1655 577,1662 579,1663 579,1672 583,1677 583,1681 587,1684 591,1685 594,1683 596,1679 600,1679 601,1676 603,1675 604,1664 602,1663 603,1655 599,1654 600,1643 589,1642",
    "labelX": 590,
    "labelY": 1664,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167414,
    "kind": "yes",
    "points": "94,1644 87,1647 76,1665 86,1671 100,1649 94,1644",
    "labelX": 89,
    "labelY": 1655,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167415,
    "kind": "yes",
    "points": "872,1645 848,1645 847,1648 839,1649 838,1661 872,1661 872,1645",
    "labelX": 853,
    "labelY": 1652,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167416,
    "kind": "yes",
    "points": "127,1646 118,1655 129,1667 137,1658 129,1650 130,1649 127,1646",
    "labelX": 128,
    "labelY": 1654,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167417,
    "kind": "yes",
    "points": "874,1646 874,1659 886,1659 887,1646 874,1646",
    "labelX": 880,
    "labelY": 1653,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167418,
    "kind": "yes",
    "points": "789,1647 789,1667 805,1668 805,1647 789,1647",
    "labelX": 797,
    "labelY": 1657,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167419,
    "kind": "yes",
    "points": "723,1647 721,1675 744,1676 745,1659 740,1658 740,1648 723,1647",
    "labelX": 736,
    "labelY": 1661,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167420,
    "kind": "yes",
    "points": "746,1648 747,1663 763,1662 763,1647 746,1648",
    "labelX": 755,
    "labelY": 1655,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167421,
    "kind": "yes",
    "points": "806,1648 807,1658 833,1658 833,1647 806,1648",
    "labelX": 820,
    "labelY": 1653,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167422,
    "kind": "yes",
    "points": "767,1647 766,1673 786,1673 786,1655 784,1654 784,1651 776,1650 775,1647 767,1647",
    "labelX": 778,
    "labelY": 1656,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167423,
    "kind": "yes",
    "points": "213,1649 205,1658 219,1671 228,1662 213,1649",
    "labelX": 216,
    "labelY": 1660,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167424,
    "kind": "yes",
    "points": "102,1649 86,1674 96,1681 100,1678 104,1672 99,1668 102,1661 109,1665 114,1657 102,1649",
    "labelX": 101,
    "labelY": 1667,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167425,
    "kind": "yes",
    "points": "167,1652 149,1672 161,1681 178,1661 167,1652",
    "labelX": 164,
    "labelY": 1667,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167426,
    "kind": "yes",
    "points": "353,1654 341,1672 355,1680 365,1660 353,1654",
    "labelX": 354,
    "labelY": 1667,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167427,
    "kind": "yes",
    "points": "810,1659 811,1675 837,1675 837,1658 810,1659",
    "labelX": 824,
    "labelY": 1667,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167428,
    "name": "\u5c71\u5d0e\u30d3\u30eb",
    "kind": "yes",
    "points": "118,1661 101,1679 120,1697 125,1692 132,1684 133,1686 139,1679 118,1661",
    "labelX": 124,
    "labelY": 1683,
    "tags": {
      "building": "yes",
      "name": "\u5c71\u5d0e\u30d3\u30eb"
    }
  },
  {
    "osmId": 692167429,
    "kind": "yes",
    "points": "896,1662 876,1662 876,1676 897,1676 896,1662",
    "labelX": 886,
    "labelY": 1669,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167430,
    "kind": "yes",
    "points": "10,1666 9,1679 45,1689 49,1675 48,1674 17,1662 10,1666",
    "labelX": 30,
    "labelY": 1674,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167431,
    "kind": "yes",
    "points": "260,1662 249,1673 250,1675 243,1682 254,1694 273,1675 260,1662",
    "labelX": 255,
    "labelY": 1677,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167432,
    "kind": "yes",
    "points": "750,1664 750,1675 763,1675 762,1664 750,1664",
    "labelX": 756,
    "labelY": 1670,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167434,
    "kind": "yes",
    "points": "670,1665 669,1681 695,1684 697,1667 671,1664 670,1665",
    "labelX": 680,
    "labelY": 1672,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167435,
    "kind": "yes",
    "points": "178,1666 155,1694 164,1702 187,1673 178,1666",
    "labelX": 171,
    "labelY": 1684,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167437,
    "kind": "yes",
    "points": "191,1671 177,1687 185,1694 199,1678 191,1671",
    "labelX": 188,
    "labelY": 1683,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167439,
    "kind": "yes",
    "points": "341,1677 332,1692 348,1701 356,1685 341,1677",
    "labelX": 344,
    "labelY": 1689,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167440,
    "kind": "yes",
    "points": "275,1677 252,1699 264,1712 279,1697 282,1700 289,1692 275,1677",
    "labelX": 274,
    "labelY": 1696,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167441,
    "kind": "yes",
    "points": "51,1678 44,1703 76,1726 90,1707 51,1678",
    "labelX": 65,
    "labelY": 1704,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167442,
    "kind": "yes",
    "points": "8,1681 5,1690 6,1691 39,1701 40,1701 43,1691 11,1681 8,1681",
    "labelX": 22,
    "labelY": 1691,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167443,
    "kind": "yes",
    "points": "141,1681 123,1701 136,1713 154,1693 141,1681",
    "labelX": 139,
    "labelY": 1697,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167444,
    "kind": "yes",
    "points": "198,1681 186,1695 196,1704 207,1690 198,1681",
    "labelX": 197,
    "labelY": 1693,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167445,
    "kind": "yes",
    "points": "660,1682 658,1703 691,1707 693,1688 692,1685 660,1682",
    "labelX": 679,
    "labelY": 1693,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167447,
    "kind": "yes",
    "points": "888,1687 887,1724 901,1725 902,1688 888,1687",
    "labelX": 895,
    "labelY": 1706,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167448,
    "kind": "yes",
    "points": "816,1689 816,1730 834,1731 835,1720 831,1719 830,1703 834,1702 834,1689 816,1689",
    "labelX": 829,
    "labelY": 1710,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167450,
    "kind": "yes",
    "points": "778,1689 777,1709 789,1710 790,1689 778,1689",
    "labelX": 784,
    "labelY": 1699,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167451,
    "kind": "yes",
    "points": "294,1689 279,1705 298,1724 313,1709 294,1689",
    "labelX": 296,
    "labelY": 1707,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167452,
    "kind": "yes",
    "points": "859,1689 859,1714 868,1715 868,1690 859,1689",
    "labelX": 864,
    "labelY": 1702,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167453,
    "kind": "yes",
    "points": "717,1690 712,1695 709,1726 723,1726 722,1708 719,1707 719,1694 717,1690",
    "labelX": 717,
    "labelY": 1707,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167455,
    "kind": "yes",
    "points": "741,1691 721,1691 721,1705 726,1706 727,1710 741,1710 741,1691",
    "labelX": 730,
    "labelY": 1702,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167456,
    "kind": "yes",
    "points": "181,1692 174,1699 172,1697 167,1703 176,1713 180,1709 187,1716 196,1707 181,1692",
    "labelX": 179,
    "labelY": 1705,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167457,
    "kind": "yes",
    "points": "326,1693 305,1725 318,1734 339,1701 326,1693",
    "labelX": 322,
    "labelY": 1713,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167458,
    "kind": "yes",
    "points": "743,1694 744,1708 761,1707 760,1693 743,1694",
    "labelX": 752,
    "labelY": 1701,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167459,
    "kind": "yes",
    "points": "838,1694 837,1723 858,1724 858,1704 854,1703 854,1694 838,1694",
    "labelX": 850,
    "labelY": 1707,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167460,
    "kind": "yes",
    "points": "872,1694 872,1723 887,1724 887,1694 872,1694",
    "labelX": 880,
    "labelY": 1709,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167461,
    "kind": "yes",
    "points": "798,1694 798,1706 800,1707 801,1711 806,1711 806,1716 797,1717 797,1728 809,1729 810,1723 814,1722 815,1694 798,1694",
    "labelX": 804,
    "labelY": 1713,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167462,
    "kind": "yes",
    "points": "903,1694 901,1724 920,1725 921,1717 910,1694 903,1694",
    "labelX": 911,
    "labelY": 1711,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167463,
    "kind": "yes",
    "points": "153,1695 138,1712 148,1721 162,1703 153,1695",
    "labelX": 150,
    "labelY": 1708,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167465,
    "kind": "yes",
    "points": "774,1700 762,1701 761,1710 759,1711 759,1726 774,1725 774,1700",
    "labelX": 765,
    "labelY": 1712,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167468,
    "kind": "yes",
    "points": "344,1703 331,1725 343,1731 355,1709 344,1703",
    "labelX": 343,
    "labelY": 1717,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167471,
    "kind": "yes",
    "points": "32,1704 10,1705 10,1720 6,1720 7,1765 9,1765 10,1770 43,1770 43,1766 45,1765 44,1736 39,1735 39,1729 33,1729 32,1704",
    "labelX": 26,
    "labelY": 1741,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167472,
    "kind": "yes",
    "points": "163,1704 150,1722 160,1730 172,1714 163,1704",
    "labelX": 161,
    "labelY": 1718,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167473,
    "kind": "yes",
    "points": "92,1708 74,1731 87,1743 106,1720 92,1708",
    "labelX": 90,
    "labelY": 1726,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167474,
    "kind": "yes",
    "points": "744,1709 744,1723 756,1723 757,1710 744,1709",
    "labelX": 750,
    "labelY": 1716,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167475,
    "kind": "yes",
    "points": "724,1710 724,1728 741,1728 742,1711 724,1710",
    "labelX": 733,
    "labelY": 1719,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167476,
    "kind": "yes",
    "points": "777,1710 777,1728 794,1729 795,1711 777,1710",
    "labelX": 786,
    "labelY": 1720,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167479,
    "kind": "yes",
    "points": "173,1713 162,1730 174,1738 179,1735 187,1727 173,1713",
    "labelX": 175,
    "labelY": 1729,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167481,
    "kind": "yes",
    "points": "361,1714 351,1743 377,1752 387,1726 361,1714",
    "labelX": 369,
    "labelY": 1734,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167482,
    "kind": "yes",
    "points": "639,1732 669,1761 677,1752 681,1755 684,1751 687,1737 681,1732 675,1737 653,1716 639,1732",
    "labelX": 672,
    "labelY": 1741,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167483,
    "kind": "yes",
    "points": "107,1723 93,1742 110,1756 108,1760 125,1773 142,1751 107,1723",
    "labelX": 114,
    "labelY": 1751,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167488,
    "kind": "yes",
    "points": "57,1727 52,1740 72,1750 78,1736 57,1727",
    "labelX": 65,
    "labelY": 1738,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167489,
    "kind": "yes",
    "points": "866,1727 865,1752 880,1753 881,1742 883,1740 883,1728 866,1727",
    "labelX": 876,
    "labelY": 1740,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167491,
    "kind": "yes",
    "points": "837,1728 837,1746 862,1746 862,1727 837,1728",
    "labelX": 850,
    "labelY": 1737,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167493,
    "kind": "yes",
    "points": "884,1729 884,1751 897,1752 897,1729 884,1729",
    "labelX": 891,
    "labelY": 1740,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167494,
    "kind": "yes",
    "points": "899,1729 899,1745 912,1746 912,1730 899,1729",
    "labelX": 906,
    "labelY": 1738,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167498,
    "kind": "yes",
    "points": "732,1737 716,1755 735,1768 711,1798 767,1849 781,1832 773,1824 782,1811 797,1813 814,1791 819,1790 817,1754 798,1739 732,1737",
    "labelX": 772,
    "labelY": 1789,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167507,
    "kind": "yes",
    "points": "56,1746 48,1768 67,1775 75,1753 56,1746",
    "labelX": 62,
    "labelY": 1761,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167511,
    "kind": "yes",
    "points": "92,1749 80,1763 81,1765 75,1772 86,1781 94,1773 100,1777 109,1764 92,1749",
    "labelX": 90,
    "labelY": 1768,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167514,
    "kind": "yes",
    "points": "152,1750 144,1760 140,1758 128,1773 147,1788 167,1763 152,1750",
    "labelX": 146,
    "labelY": 1765,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167518,
    "kind": "yes",
    "points": "1051,1758 1017,1773 1041,1827 1076,1811 1051,1758",
    "labelX": 1046,
    "labelY": 1792,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167527,
    "kind": "yes",
    "points": "109,1766 100,1778 119,1792 128,1781 109,1766",
    "labelX": 114,
    "labelY": 1779,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167529,
    "kind": "yes",
    "points": "847,1768 830,1769 831,1779 827,1780 828,1791 842,1790 842,1784 848,1783 847,1768",
    "labelX": 837,
    "labelY": 1781,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167532,
    "kind": "yes",
    "points": "916,1770 914,1788 931,1789 932,1772 916,1770",
    "labelX": 923,
    "labelY": 1780,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167533,
    "kind": "yes",
    "points": "848,1774 849,1782 858,1781 857,1773 848,1774",
    "labelX": 853,
    "labelY": 1778,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167538,
    "kind": "yes",
    "points": "100,1781 89,1794 104,1805 114,1791 100,1781",
    "labelX": 102,
    "labelY": 1793,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167539,
    "kind": "yes",
    "points": "132,1782 121,1795 143,1812 154,1799 132,1782",
    "labelX": 138,
    "labelY": 1797,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167541,
    "kind": "yes",
    "points": "11,1785 7,1789 7,1802 23,1803 23,1785 11,1785",
    "labelX": 14,
    "labelY": 1793,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167542,
    "kind": "yes",
    "points": "29,1785 29,1801 42,1801 43,1786 29,1785",
    "labelX": 36,
    "labelY": 1793,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167544,
    "kind": "yes",
    "points": "162,1788 145,1813 135,1831 129,1850 135,1855 163,1822 177,1801 162,1788",
    "labelX": 149,
    "labelY": 1823,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167545,
    "kind": "yes",
    "points": "872,1790 872,1814 894,1815 895,1791 872,1790",
    "labelX": 883,
    "labelY": 1803,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167546,
    "kind": "yes",
    "points": "47,1791 47,1807 41,1808 41,1817 38,1818 39,1828 73,1828 79,1808 72,1808 72,1801 67,1797 58,1793 47,1791",
    "labelX": 56,
    "labelY": 1809,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167547,
    "kind": "yes",
    "points": "913,1791 913,1800 931,1800 931,1792 913,1791",
    "labelX": 922,
    "labelY": 1796,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167548,
    "kind": "yes",
    "points": "834,1793 834,1803 851,1825 857,1825 857,1799 846,1798 845,1793 834,1793",
    "labelX": 846,
    "labelY": 1805,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167552,
    "kind": "yes",
    "points": "819,1801 804,1836 837,1846 839,1841 838,1840 824,1835 830,1821 833,1821 837,1813 832,1811 833,1807 819,1801",
    "labelX": 830,
    "labelY": 1825,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167554,
    "kind": "yes",
    "points": "35,1802 29,1802 28,1806 14,1806 13,1809 10,1810 10,1820 13,1821 13,1835 35,1835 35,1802",
    "labelX": 20,
    "labelY": 1815,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167556,
    "kind": "yes",
    "points": "192,1804 188,1809 183,1805 154,1843 177,1860 205,1824 199,1819 203,1813 192,1804",
    "labelX": 188,
    "labelY": 1822,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167557,
    "kind": "yes",
    "points": "122,1804 114,1812 130,1827 139,1817 126,1805 124,1806 122,1804",
    "labelX": 126,
    "labelY": 1812,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167558,
    "kind": "yes",
    "points": "246,1805 239,1819 232,1815 226,1827 235,1834 239,1828 247,1833 244,1840 261,1850 277,1823 246,1805",
    "labelX": 245,
    "labelY": 1827,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167564,
    "kind": "yes",
    "points": "88,1815 78,1821 80,1826 77,1828 80,1834 78,1836 82,1844 80,1846 85,1855 101,1847 92,1827 94,1825 88,1815",
    "labelX": 85,
    "labelY": 1834,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167565,
    "kind": "yes",
    "points": "871,1816 871,1825 875,1827 876,1830 894,1830 894,1815 871,1816",
    "labelX": 880,
    "labelY": 1824,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167567,
    "kind": "yes",
    "points": "114,1818 109,1824 109,1829 114,1833 112,1836 116,1842 123,1847 129,1840 127,1837 131,1832 114,1818",
    "labelX": 118,
    "labelY": 1834,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167571,
    "kind": "yes",
    "points": "962,1822 945,1824 947,1845 965,1842 962,1822",
    "labelX": 955,
    "labelY": 1833,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167573,
    "kind": "yes",
    "points": "223,1826 196,1860 225,1883 234,1872 238,1875 248,1862 245,1858 252,1850 223,1826",
    "labelX": 233,
    "labelY": 1861,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167574,
    "kind": "yes",
    "points": "71,1830 58,1830 57,1833 49,1833 50,1872 45,1881 61,1893 74,1872 71,1830",
    "labelX": 58,
    "labelY": 1856,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167576,
    "kind": "yes",
    "points": "827,1845 804,1837 786,1863 801,1878 827,1847 827,1845",
    "labelX": 809,
    "labelY": 1854,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167581,
    "kind": "yes",
    "points": "841,1841 831,1872 847,1878 856,1850 846,1847 846,1844 841,1841",
    "labelX": 845,
    "labelY": 1855,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167582,
    "kind": "yes",
    "points": "869,1859 910,1870 914,1860 933,1852 873,1844 869,1859",
    "labelX": 900,
    "labelY": 1857,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167583,
    "kind": "yes",
    "points": "948,1847 948,1858 973,1860 966,1845 948,1847",
    "labelX": 959,
    "labelY": 1853,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167586,
    "kind": "yes",
    "points": "153,1850 138,1869 149,1879 164,1858 153,1850",
    "labelX": 151,
    "labelY": 1864,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167587,
    "kind": "yes",
    "points": "99,1850 81,1860 93,1883 110,1897 119,1888 99,1850",
    "labelX": 100,
    "labelY": 1876,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167590,
    "kind": "yes",
    "points": "935,1853 914,1861 891,1948 902,1948 930,1913 929,1888 935,1853",
    "labelX": 917,
    "labelY": 1902,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167594,
    "kind": "yes",
    "points": "973,1864 947,1862 944,1893 953,1894 973,1865 973,1864",
    "labelX": 958,
    "labelY": 1876,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167595,
    "kind": "yes",
    "points": "188,1873 235,1906 245,1894 247,1895 251,1889 237,1877 228,1887 196,1862 188,1873",
    "labelX": 228,
    "labelY": 1885,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167597,
    "kind": "yes",
    "points": "40,1871 19,1872 19,1892 22,1897 34,1897 41,1887 40,1871",
    "labelX": 29,
    "labelY": 1886,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167598,
    "kind": "yes",
    "points": "828,1871 817,1884 820,1887 816,1891 832,1905 841,1892 841,1890 846,1884 839,1877 837,1880 828,1871",
    "labelX": 832,
    "labelY": 1886,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167600,
    "kind": "yes",
    "points": "187,1874 170,1896 189,1911 206,1888 187,1874",
    "labelX": 188,
    "labelY": 1892,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167601,
    "kind": "yes",
    "points": "866,1875 858,1905 893,1915 901,1886 866,1875",
    "labelX": 880,
    "labelY": 1895,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167607,
    "kind": "yes",
    "points": "404,1883 392,1929 415,1935 427,1899 422,1889 404,1883",
    "labelX": 412,
    "labelY": 1907,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167608,
    "kind": "yes",
    "points": "44,1884 29,1905 35,1910 49,1888 44,1884",
    "labelX": 39,
    "labelY": 1897,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167609,
    "kind": "yes",
    "points": "126,1885 114,1900 117,1903 113,1910 124,1918 140,1896 126,1885",
    "labelX": 122,
    "labelY": 1902,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167610,
    "kind": "yes",
    "points": "399,1893 394,1891 393,1889 380,1886 354,1916 381,1924 382,1922 390,1925 399,1893",
    "labelX": 384,
    "labelY": 1906,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167612,
    "kind": "yes",
    "points": "75,1889 49,1926 81,1949 107,1911 75,1889",
    "labelX": 78,
    "labelY": 1919,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167613,
    "kind": "yes",
    "points": "208,1889 195,1906 207,1915 200,1926 210,1933 231,1906 208,1889",
    "labelX": 209,
    "labelY": 1913,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167614,
    "kind": "yes",
    "points": "245,1899 238,1908 252,1919 257,1914 250,1908 253,1905 245,1899",
    "labelX": 249,
    "labelY": 1909,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167616,
    "kind": "yes",
    "points": "143,1900 131,1919 145,1929 158,1910 143,1900",
    "labelX": 144,
    "labelY": 1915,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167617,
    "kind": "yes",
    "points": "448,1905 445,1916 446,1918 482,1929 484,1928 489,1911 489,1909 461,1900 448,1905",
    "labelX": 468,
    "labelY": 1915,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167619,
    "kind": "yes",
    "points": "496,1909 488,1932 504,1938 512,1914 496,1909",
    "labelX": 500,
    "labelY": 1923,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167621,
    "kind": "yes",
    "points": "233,1909 215,1931 225,1939 243,1917 233,1909",
    "labelX": 229,
    "labelY": 1924,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167622,
    "kind": "yes",
    "points": "110,1912 100,1926 109,1932 119,1918 110,1912",
    "labelX": 110,
    "labelY": 1922,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167623,
    "kind": "yes",
    "points": "530,1916 515,1912 513,1913 506,1941 506,1943 512,1944 531,1938 535,1922 530,1916",
    "labelX": 519,
    "labelY": 1929,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167625,
    "kind": "yes",
    "points": "245,1919 230,1936 240,1945 254,1927 245,1919",
    "labelX": 242,
    "labelY": 1932,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167626,
    "kind": "yes",
    "points": "120,1919 112,1933 121,1940 130,1926 120,1919",
    "labelX": 121,
    "labelY": 1930,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167628,
    "kind": "yes",
    "points": "342,1920 337,1934 347,1937 347,1941 365,1946 372,1927 358,1922 356,1925 342,1920",
    "labelX": 353,
    "labelY": 1932,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167629,
    "kind": "yes",
    "points": "173,1924 157,1941 183,1965 200,1946 185,1933 183,1934 173,1924",
    "labelX": 180,
    "labelY": 1941,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167630,
    "kind": "yes",
    "points": "376,1925 368,1953 380,1956 388,1929 376,1925",
    "labelX": 378,
    "labelY": 1941,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167631,
    "kind": "yes",
    "points": "133,1928 124,1941 135,1948 143,1935 133,1928",
    "labelX": 134,
    "labelY": 1938,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167632,
    "kind": "yes",
    "points": "989,1928 968,1937 984,1976 1013,1964 1000,1934 989,1928",
    "labelX": 991,
    "labelY": 1948,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167633,
    "kind": "yes",
    "points": "101,1930 89,1948 119,1967 130,1949 101,1930",
    "labelX": 110,
    "labelY": 1949,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167634,
    "kind": "yes",
    "points": "389,1931 382,1957 394,1961 401,1935 389,1931",
    "labelX": 392,
    "labelY": 1946,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167635,
    "kind": "yes",
    "points": "471,1932 470,1937 483,1942 485,1941 486,1936 473,1931 471,1932",
    "labelX": 478,
    "labelY": 1937,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167636,
    "kind": "yes",
    "points": "403,1934 397,1956 408,1960 414,1938 403,1934",
    "labelX": 406,
    "labelY": 1947,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167637,
    "kind": "yes",
    "points": "430,1964 431,1965 448,1971 452,1968 462,1971 461,1973 463,1974 472,1976 480,1953 479,1952 448,1941 445,1946 438,1944 430,1964",
    "labelX": 455,
    "labelY": 1961,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167638,
    "kind": "yes",
    "points": "273,1942 252,1965 257,1971 260,1970 270,1980 272,1977 277,1981 281,1978 283,1980 301,1961 285,1946 283,1946 280,1944 278,1946 273,1942",
    "labelX": 275,
    "labelY": 1963,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167639,
    "kind": "yes",
    "points": "203,1946 188,1964 219,1989 229,1975 230,1968 203,1946",
    "labelX": 214,
    "labelY": 1968,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167640,
    "kind": "yes",
    "points": "964,1947 954,1952 955,1955 951,1957 952,1962 940,1968 942,1973 937,1976 944,1990 948,1989 951,1992 978,1981 964,1947",
    "labelX": 951,
    "labelY": 1970,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167641,
    "kind": "yes",
    "points": "486,1949 475,1985 505,1994 509,1982 510,1956 486,1949",
    "labelX": 497,
    "labelY": 1973,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167644,
    "kind": "yes",
    "points": "810,1957 802,1967 809,1973 806,1978 830,1996 845,1975 822,1958 818,1962 810,1957",
    "labelX": 818,
    "labelY": 1971,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167645,
    "kind": "yes",
    "points": "332,1957 326,1959 316,1971 331,1979 338,1960 332,1957",
    "labelX": 329,
    "labelY": 1965,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167646,
    "kind": "yes",
    "points": "153,1959 145,1968 140,1965 127,1983 132,1987 127,1993 146,2009 171,1979 169,1977 171,1974 153,1959",
    "labelX": 148,
    "labelY": 1979,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167647,
    "kind": "yes",
    "points": "795,1963 770,1987 788,2006 806,1988 800,1981 806,1975 795,1963",
    "labelX": 794,
    "labelY": 1983,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167648,
    "kind": "yes",
    "points": "183,1967 172,1981 178,1986 175,1990 187,1999 197,1986 193,1982 196,1977 183,1967",
    "labelX": 185,
    "labelY": 1984,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167649,
    "kind": "yes",
    "points": "366,1967 360,1987 397,1999 402,1984 398,1977 366,1967",
    "labelX": 385,
    "labelY": 1983,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167652,
    "kind": "yes",
    "points": "314,1973 309,1974 306,1976 304,1975 295,1992 310,2000 322,1977 314,1973",
    "labelX": 309,
    "labelY": 1981,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167653,
    "kind": "yes",
    "points": "428,1977 422,1994 449,2003 455,1986 428,1977",
    "labelX": 439,
    "labelY": 1990,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167654,
    "kind": "yes",
    "points": "325,1978 313,2001 328,2009 340,1986 325,1978",
    "labelX": 327,
    "labelY": 1994,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167656,
    "kind": "yes",
    "points": "171,1983 149,2008 162,2020 181,1998 172,1991 175,1986 171,1983",
    "labelX": 168,
    "labelY": 1998,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167657,
    "kind": "yes",
    "points": "239,1983 227,1997 247,2014 255,2008 257,2010 268,1995 254,1983 247,1990 239,1983",
    "labelX": 249,
    "labelY": 1998,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167659,
    "kind": "yes",
    "points": "472,1987 469,1995 465,1995 461,2007 466,2009 464,2015 503,2026 510,1998 472,1987",
    "labelX": 476,
    "labelY": 2004,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167661,
    "kind": "yes",
    "points": "200,1988 188,2003 196,2009 200,2004 204,2007 212,1997 200,1988",
    "labelX": 200,
    "labelY": 2001,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167662,
    "kind": "yes",
    "points": "366,1991 365,1998 393,2007 395,1999 369,1991 366,1991",
    "labelX": 378,
    "labelY": 1997,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167666,
    "kind": "yes",
    "points": "273,1995 267,2004 287,2016 293,2008 273,1995",
    "labelX": 280,
    "labelY": 2006,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167668,
    "kind": "yes",
    "points": "181,1999 167,2018 183,2032 198,2013 181,1999",
    "labelX": 182,
    "labelY": 2016,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167669,
    "kind": "yes",
    "points": "433,2002 427,2022 453,2029 459,2009 433,2002",
    "labelX": 443,
    "labelY": 2016,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167671,
    "kind": "yes",
    "points": "376,2003 370,2021 387,2027 393,2009 376,2003",
    "labelX": 382,
    "labelY": 2015,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167672,
    "kind": "yes",
    "points": "233,2004 230,2007 228,2006 223,2012 221,2010 212,2021 214,2024 206,2033 226,2049 250,2018 233,2004",
    "labelX": 224,
    "labelY": 2018,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167674,
    "kind": "yes",
    "points": "262,2008 253,2023 269,2033 278,2017 262,2008",
    "labelX": 266,
    "labelY": 2020,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167676,
    "kind": "yes",
    "points": "294,2009 287,2021 300,2027 306,2015 294,2009",
    "labelX": 297,
    "labelY": 2018,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167677,
    "kind": "yes",
    "points": "309,2012 301,2026 310,2030 318,2017 309,2012",
    "labelX": 310,
    "labelY": 2021,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167679,
    "kind": "yes",
    "points": "461,2015 454,2039 471,2045 473,2042 478,2043 484,2022 461,2015",
    "labelX": 470,
    "labelY": 2034,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167682,
    "kind": "yes",
    "points": "272,2032 305,2052 309,2046 312,2048 317,2041 282,2018 272,2032",
    "labelX": 300,
    "labelY": 2040,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167684,
    "kind": "yes",
    "points": "849,2022 826,2023 825,2041 833,2041 849,2022",
    "labelX": 833,
    "labelY": 2032,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167685,
    "kind": "yes",
    "points": "823,2022 803,2024 805,2043 825,2041 823,2022",
    "labelX": 814,
    "labelY": 2033,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167687,
    "kind": "yes",
    "points": "800,2022 785,2024 787,2042 801,2040 800,2022",
    "labelX": 793,
    "labelY": 2032,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167689,
    "kind": "yes",
    "points": "319,2023 312,2035 332,2045 338,2032 319,2023",
    "labelX": 325,
    "labelY": 2034,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167691,
    "kind": "yes",
    "points": "485,2023 478,2049 494,2053 495,2051 501,2052 507,2029 485,2023",
    "labelX": 493,
    "labelY": 2043,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167692,
    "kind": "yes",
    "points": "342,2029 338,2042 346,2045 345,2052 358,2055 362,2042 358,2040 359,2034 342,2029",
    "labelX": 351,
    "labelY": 2042,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167694,
    "kind": "yes",
    "points": "203,2032 191,2047 218,2068 229,2053 203,2032",
    "labelX": 210,
    "labelY": 2050,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167697,
    "kind": "yes",
    "points": "367,2036 364,2043 362,2044 359,2056 376,2061 378,2055 375,2053 379,2040 367,2036",
    "labelX": 370,
    "labelY": 2049,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167704,
    "kind": "yes",
    "points": "318,2044 311,2061 329,2069 336,2052 318,2044",
    "labelX": 324,
    "labelY": 2057,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167706,
    "kind": "yes",
    "points": "248,2048 242,2058 262,2071 273,2054 258,2045 254,2051 248,2048",
    "labelX": 256,
    "labelY": 2055,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167707,
    "kind": "yes",
    "points": "402,2055 399,2069 415,2074 418,2069 427,2071 426,2077 439,2080 442,2070 437,2068 440,2058 411,2048 402,2055",
    "labelX": 423,
    "labelY": 2067,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167710,
    "kind": "yes",
    "points": "333,2066 336,2069 335,2073 362,2084 364,2083 367,2083 374,2066 373,2064 365,2060 362,2062 343,2054 341,2058 338,2057 333,2066",
    "labelX": 353,
    "labelY": 2068,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167712,
    "kind": "yes",
    "points": "275,2056 264,2072 281,2083 291,2067 275,2056",
    "labelX": 278,
    "labelY": 2070,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167714,
    "kind": "yes",
    "points": "242,2060 232,2076 249,2088 260,2071 242,2060",
    "labelX": 246,
    "labelY": 2074,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167715,
    "kind": "yes",
    "points": "468,2066 449,2061 442,2082 451,2085 454,2077 464,2080 468,2066",
    "labelX": 455,
    "labelY": 2075,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167716,
    "kind": "yes",
    "points": "471,2065 465,2081 478,2085 480,2084 488,2086 492,2075 491,2071 471,2065",
    "labelX": 481,
    "labelY": 2078,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167718,
    "kind": "yes",
    "points": "292,2069 282,2085 300,2097 311,2080 292,2069",
    "labelX": 296,
    "labelY": 2083,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167719,
    "kind": "yes",
    "points": "399,2071 392,2092 411,2098 418,2076 399,2071",
    "labelX": 405,
    "labelY": 2084,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167720,
    "kind": "yes",
    "points": "262,2072 250,2091 266,2101 278,2085 274,2081 274,2079 262,2072",
    "labelX": 267,
    "labelY": 2085,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167722,
    "kind": "yes",
    "points": "420,2077 413,2101 428,2105 435,2082 420,2077",
    "labelX": 424,
    "labelY": 2091,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167723,
    "kind": "yes",
    "points": "511,2079 507,2095 528,2101 531,2095 540,2097 543,2088 542,2086 511,2079",
    "labelX": 529,
    "labelY": 2092,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167725,
    "kind": "yes",
    "points": "315,2082 307,2095 303,2094 295,2107 299,2109 295,2115 310,2125 330,2092 315,2082",
    "labelX": 307,
    "labelY": 2102,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167726,
    "kind": "yes",
    "points": "442,2084 435,2105 452,2110 455,2100 458,2100 461,2090 442,2084",
    "labelX": 451,
    "labelY": 2098,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167727,
    "kind": "yes",
    "points": "280,2085 269,2102 285,2112 295,2095 280,2085",
    "labelX": 282,
    "labelY": 2099,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167729,
    "kind": "yes",
    "points": "335,2088 323,2110 354,2125 361,2103 335,2088",
    "labelX": 343,
    "labelY": 2107,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167730,
    "kind": "yes",
    "points": "467,2091 459,2116 479,2122 483,2118 488,2098 467,2091",
    "labelX": 475,
    "labelY": 2109,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167731,
    "kind": "yes",
    "points": "545,2091 540,2108 567,2117 571,2105 568,2098 545,2091",
    "labelX": 558,
    "labelY": 2104,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167732,
    "kind": "yes",
    "points": "843,2095 839,2096 835,2096 838,2112 824,2114 825,2117 821,2117 824,2134 836,2132 836,2134 849,2131 843,2095",
    "labelX": 834,
    "labelY": 2116,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167733,
    "kind": "yes",
    "points": "1043,2096 1014,2099 1016,2121 1045,2118 1043,2096",
    "labelX": 1030,
    "labelY": 2109,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167734,
    "kind": "yes",
    "points": "1007,2099 988,2103 994,2130 1012,2126 1007,2099",
    "labelX": 1000,
    "labelY": 2115,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167736,
    "kind": "yes",
    "points": "507,2103 503,2116 504,2117 531,2124 534,2112 534,2111 507,2103",
    "labelX": 519,
    "labelY": 2114,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167738,
    "kind": "yes",
    "points": "388,2106 383,2121 405,2128 410,2112 390,2105 388,2106",
    "labelX": 395,
    "labelY": 2114,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167740,
    "kind": "yes",
    "points": "988,2109 987,2109 971,2112 970,2109 952,2113 956,2134 957,2136 988,2129 987,2125 991,2124 988,2109",
    "labelX": 975,
    "labelY": 2120,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167741,
    "kind": "yes",
    "points": "533,2122 552,2129 555,2124 564,2126 567,2119 538,2110 533,2122",
    "labelX": 552,
    "labelY": 2122,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167742,
    "kind": "yes",
    "points": "323,2112 313,2133 328,2140 338,2120 323,2112",
    "labelX": 326,
    "labelY": 2126,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167743,
    "kind": "yes",
    "points": "501,2117 495,2132 522,2141 528,2126 501,2117",
    "labelX": 512,
    "labelY": 2129,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167744,
    "kind": "yes",
    "points": "414,2117 396,2169 413,2175 431,2124 414,2117",
    "labelX": 414,
    "labelY": 2146,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167745,
    "kind": "yes",
    "points": "759,2119 739,2123 743,2142 751,2140 749,2134 756,2133 755,2128 761,2127 759,2119",
    "labelX": 752,
    "labelY": 2131,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167746,
    "kind": "yes",
    "points": "1046,2120 1033,2122 1033,2124 983,2133 987,2155 989,2155 1041,2146 1041,2144 1039,2136 1048,2135 1046,2120",
    "labelX": 1024,
    "labelY": 2137,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167747,
    "kind": "yes",
    "points": "339,2120 331,2141 344,2147 349,2144 356,2127 339,2120",
    "labelX": 344,
    "labelY": 2136,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167748,
    "kind": "yes",
    "points": "914,2120 912,2121 894,2126 882,2129 885,2141 916,2132 917,2132 914,2120",
    "labelX": 903,
    "labelY": 2129,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167749,
    "kind": "yes",
    "points": "388,2124 385,2130 380,2129 372,2154 378,2164 394,2169 404,2141 402,2138 405,2130 388,2124",
    "labelX": 390,
    "labelY": 2142,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167750,
    "kind": "yes",
    "points": "532,2127 522,2157 534,2161 538,2151 549,2154 555,2135 532,2127",
    "labelX": 538,
    "labelY": 2148,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167751,
    "kind": "yes",
    "points": "736,2129 722,2133 728,2155 743,2151 736,2129",
    "labelX": 732,
    "labelY": 2142,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167754,
    "kind": "yes",
    "points": "868,2136 859,2139 868,2167 877,2164 868,2136",
    "labelX": 868,
    "labelY": 2152,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167755,
    "kind": "yes",
    "points": "438,2138 434,2147 428,2145 417,2173 461,2190 472,2160 446,2151 449,2141 438,2138",
    "labelX": 443,
    "labelY": 2156,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167756,
    "kind": "yes",
    "points": "898,2138 887,2141 889,2148 884,2149 886,2157 902,2153 898,2138",
    "labelX": 891,
    "labelY": 2148,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167757,
    "kind": "yes",
    "points": "980,2140 973,2141 972,2139 960,2142 966,2166 986,2161 980,2140",
    "labelX": 973,
    "labelY": 2148,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167759,
    "kind": "yes",
    "points": "1097,2143 1064,2159 1058,2167 1060,2218 1070,2241 1093,2229 1087,2215 1123,2197 1097,2143",
    "labelX": 1082,
    "labelY": 2196,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167762,
    "kind": "yes",
    "points": "792,2160 782,2166 773,2176 778,2198 807,2191 800,2164 795,2165 792,2160",
    "labelX": 790,
    "labelY": 2174,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167763,
    "kind": "yes",
    "points": "479,2161 466,2196 507,2212 514,2194 513,2173 479,2161",
    "labelX": 496,
    "labelY": 2187,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167764,
    "kind": "yes",
    "points": "913,2161 898,2166 899,2169 895,2172 899,2188 893,2190 899,2212 932,2203 925,2173 913,2161",
    "labelX": 906,
    "labelY": 2182,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167765,
    "kind": "yes",
    "points": "1050,2167 1038,2168 1041,2196 1053,2194 1050,2167",
    "labelX": 1046,
    "labelY": 2181,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167766,
    "kind": "yes",
    "points": "1013,2168 1000,2172 1007,2200 1020,2196 1013,2168",
    "labelX": 1010,
    "labelY": 2184,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167767,
    "kind": "yes",
    "points": "1029,2168 1017,2172 1024,2197 1035,2194 1032,2180 1031,2178 1029,2168",
    "labelX": 1028,
    "labelY": 2182,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167769,
    "kind": "yes",
    "points": "714,2172 706,2174 693,2184 689,2182 681,2193 684,2196 678,2203 673,2222 680,2224 720,2176 714,2172",
    "labelX": 692,
    "labelY": 2193,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167772,
    "kind": "yes",
    "points": "883,2174 857,2180 864,2208 889,2202 883,2174",
    "labelX": 873,
    "labelY": 2191,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167774,
    "kind": "yes",
    "points": "768,2181 750,2203 755,2204 773,2199 768,2181",
    "labelX": 762,
    "labelY": 2197,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167775,
    "kind": "yes",
    "points": "528,2183 525,2188 521,2188 511,2218 525,2224 528,2216 534,2218 535,2218 545,2189 528,2183",
    "labelX": 528,
    "labelY": 2205,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167776,
    "kind": "yes",
    "points": "805,2196 779,2201 782,2215 783,2215 807,2210 805,2196",
    "labelX": 791,
    "labelY": 2207,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167777,
    "kind": "yes",
    "points": "1051,2197 1030,2200 1030,2203 1011,2205 1013,2222 1053,2217 1053,2216 1051,2197",
    "labelX": 1034,
    "labelY": 2209,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167778,
    "kind": "yes",
    "points": "1122,2200 1088,2216 1095,2231 1072,2242 1078,2255 1066,2261 1139,2422 1153,2417 1164,2442 1173,2443 1188,2436 1193,2431 1193,2427 1182,2402 1198,2395 1192,2383 1204,2376 1125,2203 1122,2200",
    "labelX": 1146,
    "labelY": 2343,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167780,
    "kind": "yes",
    "points": "890,2204 867,2210 872,2226 894,2220 890,2204",
    "labelX": 881,
    "labelY": 2215,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167781,
    "kind": "yes",
    "points": "808,2211 784,2218 790,2238 818,2230 814,2218 810,2219 808,2211",
    "labelX": 804,
    "labelY": 2222,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167782,
    "kind": "yes",
    "points": "780,2222 758,2228 760,2238 782,2232 783,2230 780,2222",
    "labelX": 773,
    "labelY": 2230,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167783,
    "kind": "yes",
    "points": "734,2222 714,2246 718,2257 732,2257 744,2250 734,2222",
    "labelX": 728,
    "labelY": 2246,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167785,
    "kind": "yes",
    "points": "784,2232 761,2238 764,2248 765,2248 785,2242 787,2242 784,2232",
    "labelX": 774,
    "labelY": 2242,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167786,
    "kind": "yes",
    "points": "819,2232 789,2243 797,2265 819,2257 817,2251 824,2248 819,2232",
    "labelX": 811,
    "labelY": 2249,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167787,
    "kind": "yes",
    "points": "1050,2235 990,2241 992,2265 995,2287 1055,2281 1050,2235",
    "labelX": 1016,
    "labelY": 2262,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167789,
    "kind": "yes",
    "points": "945,2255 923,2260 929,2282 951,2277 945,2255",
    "labelX": 937,
    "labelY": 2269,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167790,
    "kind": "yes",
    "points": "714,2257 706,2291 729,2300 732,2299 736,2294 748,2265 714,2257",
    "labelX": 728,
    "labelY": 2284,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167791,
    "kind": "yes",
    "points": "700,2261 699,2273 691,2272 690,2282 708,2284 710,2262 700,2261",
    "labelX": 700,
    "labelY": 2272,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167792,
    "kind": "yes",
    "points": "921,2260 902,2265 907,2283 925,2279 921,2260",
    "labelX": 914,
    "labelY": 2272,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167793,
    "kind": "yes",
    "points": "826,2261 802,2269 801,2270 802,2273 799,2274 804,2289 810,2287 811,2291 817,2289 821,2298 831,2295 827,2285 829,2284 825,2271 829,2269 826,2261",
    "labelX": 816,
    "labelY": 2280,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167794,
    "kind": "yes",
    "points": "762,2274 759,2282 766,2285 767,2283 775,2287 773,2289 783,2293 784,2291 789,2294 793,2286 791,2285 763,2272 762,2274",
    "labelX": 775,
    "labelY": 2285,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167795,
    "kind": "yes",
    "points": "866,2281 848,2286 854,2307 861,2305 862,2308 874,2305 866,2281",
    "labelX": 861,
    "labelY": 2299,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167796,
    "kind": "yes",
    "points": "757,2283 753,2293 762,2297 764,2292 767,2293 766,2295 770,2296 769,2300 778,2304 779,2302 784,2304 788,2295 783,2293 773,2289 757,2282 757,2283",
    "labelX": 770,
    "labelY": 2295,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167797,
    "kind": "yes",
    "points": "1058,2287 1005,2289 1006,2317 1059,2314 1058,2287",
    "labelX": 1032,
    "labelY": 2302,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167798,
    "kind": "yes",
    "points": "905,2287 888,2290 892,2310 908,2307 905,2287",
    "labelX": 898,
    "labelY": 2299,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167799,
    "kind": "yes",
    "points": "794,2288 785,2305 797,2312 799,2307 818,2317 825,2304 794,2288",
    "labelX": 803,
    "labelY": 2306,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167800,
    "kind": "yes",
    "points": "675,2291 667,2310 673,2313 670,2318 681,2323 692,2299 675,2291",
    "labelX": 676,
    "labelY": 2309,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167802,
    "kind": "yes",
    "points": "953,2292 936,2294 941,2340 957,2338 957,2332 964,2331 953,2292",
    "labelX": 951,
    "labelY": 2321,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167803,
    "kind": "yes",
    "points": "749,2295 743,2309 752,2313 758,2299 749,2295",
    "labelX": 751,
    "labelY": 2304,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167804,
    "kind": "yes",
    "points": "695,2297 681,2329 700,2337 715,2305 695,2297",
    "labelX": 698,
    "labelY": 2317,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167805,
    "kind": "yes",
    "points": "760,2299 753,2313 763,2318 770,2304 760,2299",
    "labelX": 762,
    "labelY": 2309,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167806,
    "kind": "yes",
    "points": "770,2304 763,2319 776,2324 782,2310 770,2304",
    "labelX": 773,
    "labelY": 2314,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167807,
    "kind": "yes",
    "points": "926,2312 907,2315 910,2336 929,2333 926,2312",
    "labelX": 918,
    "labelY": 2324,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167808,
    "kind": "yes",
    "points": "840,2313 836,2326 851,2330 854,2317 840,2313",
    "labelX": 845,
    "labelY": 2322,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167809,
    "kind": "yes",
    "points": "734,2322 719,2314 716,2320 720,2322 708,2344 687,2333 685,2337 683,2336 672,2357 675,2358 673,2360 683,2365 685,2362 691,2366 693,2361 703,2366 705,2362 713,2366 733,2328 731,2327 734,2322",
    "labelX": 700,
    "labelY": 2345,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167810,
    "kind": "yes",
    "points": "892,2314 892,2322 887,2322 887,2336 904,2336 904,2314 892,2314",
    "labelX": 894,
    "labelY": 2324,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167811,
    "kind": "yes",
    "points": "661,2322 651,2343 669,2351 679,2330 661,2322",
    "labelX": 665,
    "labelY": 2337,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167812,
    "kind": "yes",
    "points": "735,2324 724,2348 734,2352 745,2328 744,2328 735,2324",
    "labelX": 736,
    "labelY": 2336,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167814,
    "kind": "yes",
    "points": "831,2327 830,2333 828,2332 825,2343 829,2343 828,2346 842,2349 846,2331 831,2327",
    "labelX": 832,
    "labelY": 2338,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167815,
    "kind": "yes",
    "points": "1064,2329 1006,2333 1007,2343 1013,2342 1015,2372 1021,2371 1021,2374 1035,2373 1035,2377 1067,2375 1067,2372 1069,2371 1069,2369 1067,2332 1064,2332 1064,2329",
    "labelX": 1041,
    "labelY": 2358,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167816,
    "kind": "yes",
    "points": "746,2329 740,2343 756,2349 762,2336 746,2329",
    "labelX": 751,
    "labelY": 2339,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167818,
    "kind": "yes",
    "points": "847,2332 842,2349 854,2353 860,2350 866,2334 859,2332 847,2332",
    "labelX": 855,
    "labelY": 2342,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167819,
    "kind": "yes",
    "points": "881,2339 880,2346 876,2345 873,2361 903,2367 904,2359 901,2359 902,2357 904,2343 881,2339",
    "labelX": 892,
    "labelY": 2353,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167820,
    "kind": "yes",
    "points": "774,2339 768,2353 789,2362 795,2348 774,2339",
    "labelX": 782,
    "labelY": 2351,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167821,
    "kind": "yes",
    "points": "965,2341 958,2343 961,2371 972,2368 965,2341",
    "labelX": 964,
    "labelY": 2356,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167823,
    "kind": "yes",
    "points": "957,2342 939,2344 941,2359 943,2358 944,2365 959,2364 957,2342",
    "labelX": 947,
    "labelY": 2355,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167824,
    "kind": "yes",
    "points": "740,2345 733,2359 744,2364 746,2360 750,2362 755,2352 740,2345",
    "labelX": 745,
    "labelY": 2357,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167825,
    "kind": "yes",
    "points": "905,2346 906,2367 930,2366 929,2345 905,2346",
    "labelX": 918,
    "labelY": 2356,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167826,
    "kind": "yes",
    "points": "630,2347 623,2364 690,2393 686,2401 696,2405 706,2382 707,2381 630,2347",
    "labelX": 677,
    "labelY": 2382,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167828,
    "kind": "yes",
    "points": "800,2351 798,2355 795,2354 795,2355 787,2372 803,2379 809,2366 815,2369 819,2360 800,2351",
    "labelX": 802,
    "labelY": 2362,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167831,
    "kind": "yes",
    "points": "768,2354 761,2370 771,2374 773,2369 783,2374 788,2363 768,2354",
    "labelX": 774,
    "labelY": 2367,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167833,
    "kind": "yes",
    "points": "722,2358 716,2373 743,2384 748,2371 743,2369 743,2367 722,2358",
    "labelX": 736,
    "labelY": 2370,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167837,
    "kind": "yes",
    "points": "612,2370 603,2388 624,2399 633,2381 612,2370",
    "labelX": 618,
    "labelY": 2385,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167839,
    "kind": "yes",
    "points": "750,2372 746,2387 773,2394 775,2394 778,2381 779,2379 752,2372 750,2372",
    "labelX": 765,
    "labelY": 2383,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167841,
    "kind": "yes",
    "points": "783,2376 775,2396 797,2404 805,2385 783,2376",
    "labelX": 790,
    "labelY": 2390,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167842,
    "kind": "yes",
    "points": "714,2379 706,2396 717,2401 724,2384 714,2379",
    "labelX": 715,
    "labelY": 2390,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167844,
    "kind": "yes",
    "points": "885,2388 885,2396 905,2396 906,2382 889,2382 889,2388 885,2388",
    "labelX": 893,
    "labelY": 2389,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167846,
    "kind": "yes",
    "points": "639,2383 632,2393 638,2396 645,2386 639,2383",
    "labelX": 639,
    "labelY": 2390,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167847,
    "kind": "yes",
    "points": "727,2383 722,2398 736,2403 741,2388 727,2383",
    "labelX": 732,
    "labelY": 2393,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167848,
    "kind": "yes",
    "points": "944,2384 943,2411 954,2412 954,2436 977,2437 978,2424 975,2423 975,2385 944,2384",
    "labelX": 963,
    "labelY": 2414,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167849,
    "kind": "yes",
    "points": "906,2386 907,2398 932,2398 932,2386 906,2386",
    "labelX": 919,
    "labelY": 2392,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167850,
    "kind": "yes",
    "points": "598,2395 606,2400 608,2397 623,2406 625,2402 602,2388 598,2395",
    "labelX": 610,
    "labelY": 2398,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167851,
    "kind": "yes",
    "points": "743,2388 737,2403 749,2407 754,2393 743,2388",
    "labelX": 746,
    "labelY": 2398,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167852,
    "kind": "yes",
    "points": "816,2389 806,2413 819,2419 830,2394 816,2389",
    "labelX": 818,
    "labelY": 2404,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167855,
    "kind": "yes",
    "points": "756,2391 750,2410 759,2413 765,2394 756,2391",
    "labelX": 758,
    "labelY": 2402,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167857,
    "kind": "yes",
    "points": "1022,2399 1029,2436 1033,2435 1034,2440 1048,2437 1051,2451 1074,2446 1069,2417 1073,2416 1069,2400 1053,2403 1051,2395 1046,2395 1045,2394 1022,2399",
    "labelX": 1050,
    "labelY": 2419,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167858,
    "kind": "yes",
    "points": "597,2395 592,2405 600,2410 597,2415 615,2425 625,2407 608,2398 607,2400 597,2395",
    "labelX": 605,
    "labelY": 2407,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167859,
    "kind": "yes",
    "points": "632,2396 618,2419 625,2423 638,2400 632,2396",
    "labelX": 628,
    "labelY": 2410,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167860,
    "kind": "yes",
    "points": "836,2397 832,2406 833,2406 857,2418 858,2417 862,2408 836,2396 836,2397",
    "labelX": 845,
    "labelY": 2407,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167861,
    "kind": "yes",
    "points": "768,2397 762,2412 785,2421 791,2406 768,2397",
    "labelX": 777,
    "labelY": 2409,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167862,
    "kind": "yes",
    "points": "882,2398 881,2408 905,2408 906,2398 883,2398 882,2398",
    "labelX": 891,
    "labelY": 2402,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167864,
    "kind": "yes",
    "points": "932,2399 909,2399 908,2415 932,2415 932,2399",
    "labelX": 920,
    "labelY": 2407,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167865,
    "kind": "yes",
    "points": "641,2400 625,2427 649,2440 658,2424 639,2413 646,2402 641,2400",
    "labelX": 643,
    "labelY": 2418,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167866,
    "kind": "yes",
    "points": "1076,2399 1076,2412 1081,2412 1081,2400 1076,2399",
    "labelX": 1079,
    "labelY": 2406,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167868,
    "kind": "yes",
    "points": "703,2401 696,2415 708,2420 715,2406 703,2401",
    "labelX": 706,
    "labelY": 2411,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167870,
    "kind": "yes",
    "points": "674,2405 671,2409 669,2408 666,2414 660,2411 655,2421 660,2424 650,2440 668,2451 690,2414 674,2405",
    "labelX": 666,
    "labelY": 2420,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167871,
    "kind": "yes",
    "points": "591,2406 588,2411 596,2416 599,2411 591,2406",
    "labelX": 594,
    "labelY": 2411,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167872,
    "kind": "yes",
    "points": "1096,2408 1091,2409 1092,2415 1097,2415 1096,2408",
    "labelX": 1094,
    "labelY": 2412,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167874,
    "kind": "yes",
    "points": "879,2411 877,2421 899,2424 901,2414 891,2412 890,2415 888,2412 879,2411",
    "labelX": 889,
    "labelY": 2416,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167875,
    "kind": "yes",
    "points": "830,2411 825,2424 854,2436 858,2426 856,2425 857,2422 830,2411",
    "labelX": 847,
    "labelY": 2424,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167876,
    "kind": "yes",
    "points": "587,2411 582,2420 597,2428 602,2419 587,2411",
    "labelX": 592,
    "labelY": 2420,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167878,
    "kind": "yes",
    "points": "754,2413 746,2431 755,2435 761,2420 759,2419 761,2416 754,2413",
    "labelX": 756,
    "labelY": 2422,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167879,
    "kind": "yes",
    "points": "762,2414 760,2419 762,2420 756,2435 774,2442 779,2430 777,2429 780,2421 762,2414",
    "labelX": 769,
    "labelY": 2426,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167880,
    "kind": "yes",
    "points": "725,2416 724,2418 723,2417 717,2430 732,2436 738,2421 725,2416",
    "labelX": 727,
    "labelY": 2423,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167882,
    "kind": "yes",
    "points": "694,2418 688,2433 700,2438 706,2423 694,2418",
    "labelX": 697,
    "labelY": 2428,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167883,
    "kind": "yes",
    "points": "1096,2418 1074,2422 1073,2427 1076,2450 1101,2446 1099,2425 1096,2418",
    "labelX": 1087,
    "labelY": 2431,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167884,
    "kind": "yes",
    "points": "900,2420 901,2436 908,2436 908,2439 922,2438 921,2419 900,2420",
    "labelX": 910,
    "labelY": 2431,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167885,
    "kind": "yes",
    "points": "581,2420 577,2426 595,2435 598,2429 581,2420",
    "labelX": 588,
    "labelY": 2428,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167886,
    "kind": "yes",
    "points": "781,2421 778,2428 780,2429 776,2440 782,2442 789,2424 781,2421",
    "labelX": 781,
    "labelY": 2431,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167888,
    "kind": "yes",
    "points": "875,2423 874,2432 885,2433 885,2431 888,2431 888,2435 898,2435 899,2425 877,2423 875,2423",
    "labelX": 885,
    "labelY": 2430,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167889,
    "kind": "yes",
    "points": "801,2423 788,2450 799,2455 806,2441 809,2443 810,2442 816,2430 801,2423",
    "labelX": 804,
    "labelY": 2441,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167890,
    "kind": "yes",
    "points": "823,2424 815,2444 845,2456 853,2436 823,2424",
    "labelX": 834,
    "labelY": 2440,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167891,
    "kind": "yes",
    "points": "926,2424 926,2441 951,2441 950,2424 926,2424",
    "labelX": 938,
    "labelY": 2433,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167893,
    "kind": "yes",
    "points": "625,2429 616,2445 642,2460 651,2444 625,2429",
    "labelX": 634,
    "labelY": 2445,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167894,
    "kind": "yes",
    "points": "985,2430 979,2431 981,2439 971,2441 977,2465 993,2461 985,2430",
    "labelX": 981,
    "labelY": 2445,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167896,
    "kind": "yes",
    "points": "718,2433 714,2443 734,2451 738,2441 718,2433",
    "labelX": 726,
    "labelY": 2442,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167898,
    "kind": "yes",
    "points": "568,2434 559,2448 575,2457 578,2452 580,2453 585,2445 568,2434",
    "labelX": 574,
    "labelY": 2448,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167899,
    "kind": "yes",
    "points": "860,2435 858,2448 863,2449 864,2451 864,2454 861,2458 861,2462 863,2466 868,2470 875,2470 881,2464 906,2466 909,2441 860,2435",
    "labelX": 872,
    "labelY": 2456,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167900,
    "kind": "yes",
    "points": "686,2438 678,2453 690,2459 698,2444 686,2438",
    "labelX": 688,
    "labelY": 2449,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167901,
    "kind": "yes",
    "points": "741,2439 733,2461 740,2464 740,2466 748,2469 757,2445 741,2439",
    "labelX": 743,
    "labelY": 2457,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167902,
    "kind": "yes",
    "points": "968,2442 959,2443 959,2447 930,2449 931,2470 966,2467 965,2449 969,2449 968,2442",
    "labelX": 956,
    "labelY": 2452,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167903,
    "kind": "yes",
    "points": "652,2444 644,2458 659,2466 661,2462 665,2464 671,2454 652,2444",
    "labelX": 659,
    "labelY": 2458,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167904,
    "kind": "yes",
    "points": "713,2444 708,2454 724,2462 725,2459 730,2462 734,2453 713,2444",
    "labelX": 722,
    "labelY": 2456,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167907,
    "kind": "yes",
    "points": "588,2444 579,2461 595,2469 604,2453 588,2444",
    "labelX": 592,
    "labelY": 2457,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167909,
    "kind": "yes",
    "points": "759,2447 747,2472 761,2479 773,2453 759,2447",
    "labelX": 760,
    "labelY": 2463,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167912,
    "kind": "yes",
    "points": "558,2451 553,2458 571,2471 576,2464 558,2451",
    "labelX": 565,
    "labelY": 2461,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167914,
    "kind": "yes",
    "points": "799,2459 794,2469 810,2476 808,2480 830,2491 841,2469 809,2452 804,2462 799,2459",
    "labelX": 812,
    "labelY": 2470,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167915,
    "kind": "yes",
    "points": "604,2453 595,2472 616,2483 625,2464 604,2453",
    "labelX": 610,
    "labelY": 2468,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167917,
    "kind": "yes",
    "points": "672,2454 663,2470 674,2476 683,2460 672,2454",
    "labelX": 673,
    "labelY": 2465,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167920,
    "kind": "yes",
    "points": "708,2457 705,2465 706,2466 716,2471 718,2469 725,2472 727,2472 729,2464 708,2457",
    "labelX": 717,
    "labelY": 2467,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167924,
    "kind": "yes",
    "points": "684,2459 677,2474 686,2479 693,2464 684,2459",
    "labelX": 685,
    "labelY": 2469,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167925,
    "kind": "yes",
    "points": "553,2460 546,2468 564,2481 570,2473 553,2460",
    "labelX": 558,
    "labelY": 2471,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167927,
    "kind": "yes",
    "points": "694,2463 686,2479 694,2483 702,2467 694,2463",
    "labelX": 694,
    "labelY": 2473,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167931,
    "kind": "yes",
    "points": "629,2464 627,2468 625,2467 618,2484 631,2489 639,2471 635,2469 636,2467 629,2464",
    "labelX": 630,
    "labelY": 2472,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167933,
    "kind": "yes",
    "points": "578,2467 567,2482 579,2490 590,2475 578,2467",
    "labelX": 579,
    "labelY": 2479,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167934,
    "kind": "yes",
    "points": "702,2467 694,2485 706,2491 715,2473 702,2467",
    "labelX": 704,
    "labelY": 2479,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167938,
    "kind": "yes",
    "points": "714,2480 715,2480 729,2486 732,2480 736,2483 735,2486 752,2493 753,2491 758,2480 730,2467 726,2476 718,2472 714,2480",
    "labelX": 733,
    "labelY": 2481,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167940,
    "kind": "yes",
    "points": "783,2470 775,2483 799,2496 806,2483 783,2470",
    "labelX": 791,
    "labelY": 2483,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167941,
    "kind": "yes",
    "points": "643,2473 633,2491 641,2496 652,2478 643,2473",
    "labelX": 642,
    "labelY": 2485,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167945,
    "kind": "yes",
    "points": "591,2475 581,2496 601,2506 612,2485 591,2475",
    "labelX": 596,
    "labelY": 2491,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167947,
    "kind": "yes",
    "points": "827,2506 885,2533 892,2518 903,2523 904,2521 906,2522 916,2502 914,2501 916,2498 912,2496 914,2493 908,2490 906,2494 881,2482 880,2484 873,2481 871,2484 869,2488 876,2492 874,2495 864,2490 863,2492 839,2480 827,2506",
    "labelX": 887,
    "labelY": 2498,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167948,
    "kind": "yes",
    "points": "663,2481 656,2497 670,2503 675,2491 670,2489 671,2485 663,2481",
    "labelX": 668,
    "labelY": 2491,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167949,
    "kind": "yes",
    "points": "685,2483 677,2499 699,2510 707,2493 685,2483",
    "labelX": 692,
    "labelY": 2496,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167950,
    "kind": "yes",
    "points": "711,2484 704,2500 739,2515 737,2518 745,2521 753,2503 711,2484",
    "labelX": 732,
    "labelY": 2507,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167951,
    "kind": "yes",
    "points": "807,2486 800,2498 820,2508 826,2496 823,2494 822,2494 813,2489 812,2488 807,2486",
    "labelX": 815,
    "labelY": 2494,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167952,
    "kind": "yes",
    "points": "614,2487 602,2511 631,2525 642,2501 614,2487",
    "labelX": 622,
    "labelY": 2506,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167953,
    "kind": "yes",
    "points": "776,2487 768,2503 791,2516 800,2500 776,2487",
    "labelX": 784,
    "labelY": 2502,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 692167954,
    "kind": "yes",
    "points": "673,2498 667,2511 693,2523 699,2510 673,2498",
    "labelX": 683,
    "labelY": 2511,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 708165188,
    "name": "\u6075\u6bd4\u5bff\u4e09\u5bcc\u30d3\u30eb",
    "kind": "yes",
    "points": "1136,1008 1096,1002 1076,990 1088,923 1108,926 1104,952 1140,957 1136,1008",
    "labelX": 1107,
    "labelY": 965,
    "tags": {
      "building": "yes",
      "name": "\u6075\u6bd4\u5bff\u4e09\u5bcc\u30d3\u30eb"
    }
  },
  {
    "osmId": 723134486,
    "kind": "yes",
    "points": "1582,733 1582,763 1612,763 1612,733 1582,733",
    "labelX": 1597,
    "labelY": 748,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 723134488,
    "kind": "yes",
    "points": "1576,624 1576,646 1590,646 1590,624 1576,624",
    "labelX": 1583,
    "labelY": 635,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 727010637,
    "kind": "office",
    "points": "548,36 575,12 576,11 587,25 564,45 560,40 556,43 552,44 548,42 547,39 548,36",
    "labelX": 561,
    "labelY": 34,
    "tags": {
      "building": "office"
    }
  },
  {
    "osmId": 727010638,
    "kind": "yes",
    "points": "545,14 564,-1 557,-8 542,5 545,14",
    "labelX": 552,
    "labelY": 3,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 727010639,
    "kind": "yes",
    "points": "539,5 558,-10 551,-17 535,-4 539,5",
    "labelX": 546,
    "labelY": -6,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 753701783,
    "kind": "roof",
    "points": "417,744 419,743 441,735 460,754 460,759 460,775 452,778 444,781 421,756 417,744",
    "labelX": 442,
    "labelY": 758,
    "tags": {
      "building": "roof"
    }
  },
  {
    "osmId": 810173522,
    "kind": "yes",
    "points": "1884,560 1884,572 1912,572 1912,560 1884,560",
    "labelX": 1898,
    "labelY": 566,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 879298895,
    "name": "Ebisu shrine",
    "kind": "yes",
    "points": "1698,1906 1698,1941 1705,1941 1711,1940 1711,1906 1698,1906",
    "labelX": 1705,
    "labelY": 1927,
    "tags": {
      "amenity": "place_of_worship",
      "building": "yes",
      "name": "Ebisu shrine"
    }
  },
  {
    "osmId": 990273999,
    "kind": "yes",
    "points": "1239,295 1271,297 1269,323 1237,321 1239,295",
    "labelX": 1254,
    "labelY": 309,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1014966072,
    "kind": "yes",
    "points": "391,218 398,233 431,218 429,214 440,209 441,211 457,203 451,190 391,218",
    "labelX": 430,
    "labelY": 212,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1014966073,
    "kind": "yes",
    "points": "403,181 376,194 385,213 412,201 403,181",
    "labelX": 394,
    "labelY": 197,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1014966074,
    "kind": "yes",
    "points": "463,206 400,237 408,253 452,231 448,223 466,213 463,206",
    "labelX": 440,
    "labelY": 227,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1192017819,
    "name": "\u6771\u4e09\u4e01\u76ee\u516c\u8846\u4fbf\u6240",
    "kind": "service",
    "points": "372,270 383,289 394,280 381,264 372,270",
    "labelX": 383,
    "labelY": 276,
    "tags": {
      "amenity": "toilets",
      "building": "service",
      "name": "\u6771\u4e09\u4e01\u76ee\u516c\u8846\u4fbf\u6240"
    }
  },
  {
    "osmId": 1241562363,
    "kind": "yes",
    "points": "287,870 294,861 319,881 311,890 287,870",
    "labelX": 303,
    "labelY": 876,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1241562364,
    "kind": "yes",
    "points": "294,860 301,851 326,872 319,880 294,860",
    "labelX": 310,
    "labelY": 866,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1256919498,
    "kind": "yes",
    "points": "550,2318 517,2291 512,2297 504,2290 487,2310 528,2344 550,2318",
    "labelX": 516,
    "labelY": 2308,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1328974113,
    "kind": "yes",
    "points": "45,184 33,211 21,204 18,194 33,162 45,184",
    "labelX": 30,
    "labelY": 191,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233133,
    "kind": "yes",
    "points": "339,14 320,22 309,-6 317,-9 313,-18 325,-23 339,14",
    "labelX": 321,
    "labelY": -3,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233134,
    "kind": "yes",
    "points": "462,-17 480,-23 494,-6 470,3 462,-17",
    "labelX": 477,
    "labelY": -11,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233135,
    "kind": "yes",
    "points": "447,-10 459,-14 466,3 453,8 447,-10",
    "labelX": 456,
    "labelY": -3,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233136,
    "kind": "yes",
    "points": "432,-4 443,-9 450,8 438,13 432,-4",
    "labelX": 441,
    "labelY": 2,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233137,
    "kind": "yes",
    "points": "470,75 490,68 497,89 478,96 470,75",
    "labelX": 484,
    "labelY": 82,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233138,
    "kind": "yes",
    "points": "495,11 507,7 514,26 502,31 495,11",
    "labelX": 505,
    "labelY": 19,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233139,
    "kind": "yes",
    "points": "482,16 493,12 501,34 491,38 482,16",
    "labelX": 492,
    "labelY": 25,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233140,
    "kind": "yes",
    "points": "471,23 482,19 489,39 479,43 471,23",
    "labelX": 480,
    "labelY": 31,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233141,
    "kind": "yes",
    "points": "460,60 481,52 486,65 465,73 460,60",
    "labelX": 473,
    "labelY": 63,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233142,
    "kind": "yes",
    "points": "452,43 474,35 479,49 457,57 452,43",
    "labelX": 466,
    "labelY": 46,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233143,
    "kind": "yes",
    "points": "445,28 467,20 471,32 450,40 445,28",
    "labelX": 458,
    "labelY": 30,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233147,
    "kind": "yes",
    "points": "359,8 381,0 385,12 364,20 359,8",
    "labelX": 372,
    "labelY": 10,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233148,
    "kind": "yes",
    "points": "385,1 408,-8 412,3 389,11 385,1",
    "labelX": 399,
    "labelY": 2,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329233150,
    "kind": "yes",
    "points": "348,-5 376,-15 380,-2 352,8 348,-5",
    "labelX": 364,
    "labelY": -3,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329234570,
    "kind": "yes",
    "points": "177,149 173,138 184,133 189,144 198,140 209,170 180,181 169,151 177,149",
    "labelX": 185,
    "labelY": 151,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329234571,
    "kind": "yes",
    "points": "107,151 130,141 135,154 112,164 107,151",
    "labelX": 121,
    "labelY": 153,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1329234572,
    "kind": "yes",
    "points": "167,189 148,196 134,196 123,190 114,165 138,155 129,133 142,127 167,189",
    "labelX": 137,
    "labelY": 169,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1330627606,
    "kind": "yes",
    "points": "85,323 110,336 105,345 80,331 85,323",
    "labelX": 95,
    "labelY": 334,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1331865289,
    "kind": "yes",
    "points": "536,227 569,214 575,230 542,243 536,227",
    "labelX": 556,
    "labelY": 229,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1331895314,
    "kind": "yes",
    "points": "372,1261 389,1317 347,1345 332,1299 354,1268 372,1261",
    "labelX": 359,
    "labelY": 1298,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1331895315,
    "kind": "yes",
    "points": "80,1227 105,1206 114,1217 89,1238 80,1227",
    "labelX": 97,
    "labelY": 1222,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1333106699,
    "kind": "yes",
    "points": "-30,720 4,714 7,733 -27,738 -30,720",
    "labelX": -11,
    "labelY": 726,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1341810518,
    "kind": "yes",
    "points": "67,1577 54,1597 63,1603 77,1583 67,1577",
    "labelX": 65,
    "labelY": 1590,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1341810519,
    "kind": "yes",
    "points": "147,1637 143,1643 139,1640 131,1650 138,1657 151,1641 147,1637",
    "labelX": 142,
    "labelY": 1645,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1366974153,
    "kind": "yes",
    "points": "2118,111 2104,65 2073,75 2074,80 2063,84 2076,124 2118,111",
    "labelX": 2085,
    "labelY": 90,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011697,
    "kind": "yes",
    "points": "1391,115 1419,120 1417,129 1389,124 1391,115",
    "labelX": 1404,
    "labelY": 122,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011698,
    "kind": "yes",
    "points": "1407,175 1401,208 1366,202 1372,169 1407,175",
    "labelX": 1387,
    "labelY": 189,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011699,
    "kind": "yes",
    "points": "1538,255 1547,241 1553,245 1552,246 1557,250 1554,255 1558,258 1554,265 1538,255",
    "labelX": 1552,
    "labelY": 252,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011700,
    "kind": "yes",
    "points": "1519,230 1542,235 1538,251 1516,246 1519,230",
    "labelX": 1529,
    "labelY": 241,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011701,
    "kind": "yes",
    "points": "1363,314 1404,322 1390,393 1368,388 1371,372 1389,376 1395,347 1362,341 1356,373 1352,373 1363,314",
    "labelX": 1375,
    "labelY": 360,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011702,
    "kind": "yes",
    "points": "1463,333 1473,335 1466,365 1456,363 1463,333",
    "labelX": 1465,
    "labelY": 349,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011703,
    "kind": "yes",
    "points": "1451,330 1461,332 1454,362 1444,360 1451,330",
    "labelX": 1453,
    "labelY": 346,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011704,
    "kind": "yes",
    "points": "1426,324 1441,327 1431,379 1415,376 1426,324",
    "labelX": 1428,
    "labelY": 352,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011705,
    "kind": "yes",
    "points": "1419,328 1410,382 1397,380 1406,326 1419,328",
    "labelX": 1408,
    "labelY": 354,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011706,
    "kind": "yes",
    "points": "1437,361 1465,366 1461,386 1433,381 1437,361",
    "labelX": 1449,
    "labelY": 374,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011709,
    "kind": "yes",
    "points": "1490,1311 1491,1304 1509,1306 1508,1313 1490,1311",
    "labelX": 1500,
    "labelY": 1309,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011710,
    "kind": "yes",
    "points": "1536,1325 1547,1322 1548,1326 1554,1325 1560,1346 1543,1350 1536,1325",
    "labelX": 1548,
    "labelY": 1332,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011711,
    "kind": "yes",
    "points": "1527,1305 1552,1310 1549,1320 1525,1315 1527,1305",
    "labelX": 1538,
    "labelY": 1313,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011712,
    "kind": "yes",
    "points": "2019,1570 2017,1553 2032,1551 2033,1559 2039,1558 2040,1568 2019,1570",
    "labelX": 2030,
    "labelY": 1560,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011717,
    "kind": "yes",
    "points": "1876,1729 1878,1741 1869,1742 1867,1730 1876,1729",
    "labelX": 1873,
    "labelY": 1736,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011718,
    "kind": "yes",
    "points": "1865,1948 1889,1946 1890,1961 1867,1962 1865,1948",
    "labelX": 1878,
    "labelY": 1954,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011719,
    "kind": "yes",
    "points": "1829,1957 1859,1952 1861,1966 1832,1971 1829,1957",
    "labelX": 1845,
    "labelY": 1962,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011720,
    "kind": "yes",
    "points": "1836,1973 1856,1970 1859,1985 1848,1987 1848,1983 1838,1984 1836,1973",
    "labelX": 1848,
    "labelY": 1980,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011721,
    "kind": "yes",
    "points": "1847,1994 1870,1989 1874,2007 1851,2012 1847,1994",
    "labelX": 1861,
    "labelY": 2001,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011722,
    "kind": "yes",
    "points": "1873,1987 1892,1984 1896,2003 1876,2006 1873,1987",
    "labelX": 1884,
    "labelY": 1995,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1427011723,
    "kind": "yes",
    "points": "1858,1969 1891,1966 1892,1980 1859,1982 1858,1969",
    "labelX": 1875,
    "labelY": 1974,
    "tags": {
      "building": "yes"
    }
  }
]
