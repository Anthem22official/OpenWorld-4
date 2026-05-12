export interface OsmRenderPolygon {
  osmId: number
  name?: string
  kind?: string
  points: string
  labelX: number
  labelY: number
  tags: Record<string, string>
}

export interface OsmRenderLine {
  osmId: number
  name?: string
  kind: string
  path: string
  tags: Record<string, string>
}

export interface InteractiveBuildingSource {
  locationId: string
  buildingId: string
  osmId: number
  label: string
}

export const shibuyaCrossingOsmBounds = {
  "south": 35.6584,
  "west": 139.6982,
  "north": 35.6609,
  "east": 139.7023
} as const

export const shibuyaCrossingOsmCenter = {
  lat: 35.6595,
  lng: 139.7005,
} as const

export const shibuyaCrossingInteractiveBuildings: InteractiveBuildingSource[] = [
  {
    "locationId": "shibuya-109",
    "buildingId": "shibuya-109",
    "osmId": 55895868,
    "label": "Shibuya 109"
  },
  {
    "locationId": "shibuya-scramble-square",
    "buildingId": "shibuya-scramble-square",
    "osmId": 617560918,
    "label": "Shibuya Scramble Square"
  },
  {
    "locationId": "shibuya-mark-city-east",
    "buildingId": "shibuya-mark-city-east",
    "osmId": 87250190,
    "label": "Shibuya Mark City East"
  },
  {
    "locationId": "shibuya-prime",
    "buildingId": "shibuya-prime",
    "osmId": 116710255,
    "label": "Shibuya PRIME"
  },
  {
    "locationId": "fpg-links-shibuya",
    "buildingId": "fpg-links-shibuya",
    "osmId": 116806279,
    "label": "FPG Links Shibuya"
  },
  {
    "locationId": "shibuya-parkside-kyodo",
    "buildingId": "shibuya-parkside-kyodo",
    "osmId": 116806280,
    "label": "Shibuya Parkside Kyodo"
  },
  {
    "locationId": "qfront",
    "buildingId": "qfront",
    "osmId": 136691386,
    "label": "QFRONT / Tsutaya"
  },
  {
    "locationId": "magnet",
    "buildingId": "magnet",
    "osmId": 116806281,
    "label": "MAGNET by SHIBUYA109"
  },
  {
    "locationId": "hachiko-station",
    "buildingId": "hachiko-station",
    "osmId": 60739635,
    "label": "Shibuya Station / Hachiko"
  }
]

export const shibuyaCrossingBuildings: OsmRenderPolygon[] = [
  {
    "osmId": 55895868,
    "name": "Shibuya 109",
    "kind": "retail",
    "points": "81,291 75,294 65,314 60,311 51,327 61,332 53,344 79,382 88,397 95,416 209,383 215,382 213,379 215,378 216,376 217,376 219,374 220,372 221,370 221,368 221,366 221,364 220,361 219,359 217,356 215,354 212,353 210,352 212,347 195,340 174,354 145,322 145,319 134,314 81,291",
    "labelX": 163,
    "labelY": 352,
    "tags": {
      "building": "retail",
      "shop": "mall",
      "name:en": "Shibuya 109"
    }
  },
  {
    "osmId": 55896465,
    "name": "Seibu Shibuya Department Store A Building",
    "kind": "retail",
    "points": "450,117 442,121 431,146 414,184 468,207 463,220 481,224 480,234 577,261 603,159 595,144 540,135 536,134 514,130 450,117",
    "labelX": 496,
    "labelY": 169,
    "tags": {
      "building": "retail",
      "shop": "department_store",
      "name:en": "Seibu Shibuya Department Store A Building"
    }
  },
  {
    "osmId": 60739620,
    "name": "Iijima Building",
    "kind": "yes",
    "points": "374,723 466,690 454,663 443,659 359,690 374,723",
    "labelX": 412,
    "labelY": 691,
    "tags": {
      "building": "yes",
      "name:en": "Iijima Building"
    }
  },
  {
    "osmId": 60739633,
    "kind": "yes",
    "points": "231,300 285,323 301,267 257,249 231,300",
    "labelX": 261,
    "labelY": 288,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 60739635,
    "name": "Shibuya Ekimae Building",
    "kind": "yes",
    "points": "390,404 436,405 457,428 463,435 446,514 445,517 420,522 380,470 379,450 390,404",
    "labelX": 421,
    "labelY": 455,
    "tags": {
      "building": "yes",
      "name:en": "Shibuya Ekimae Building"
    }
  },
  {
    "osmId": 87250190,
    "name": "Shibuya Mark City East",
    "kind": "retail",
    "points": "436,543 439,558 443,582 448,618 451,641 391,666 388,667 304,697 195,736 169,678 162,661 255,610 265,605 352,577 374,564 383,562 386,561 392,559 406,551 436,543",
    "labelX": 354,
    "labelY": 609,
    "tags": {
      "building": "retail",
      "name:en": "Shibuya Mark City East"
    }
  },
  {
    "osmId": 114755219,
    "kind": "yes",
    "points": "320,258 305,327 369,333 377,265 320,258",
    "labelX": 338,
    "labelY": 288,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 116710254,
    "name": "Bic Camera",
    "kind": "retail",
    "points": "314,414 343,410 335,452 312,460 306,459 314,414",
    "labelX": 321,
    "labelY": 435,
    "tags": {
      "building": "retail",
      "shop": "electronics",
      "name:en": "Bic Camera"
    }
  },
  {
    "osmId": 116710255,
    "name": "Shibuya PRIME",
    "kind": "retail",
    "points": "30,314 -36,353 -6,441 15,435 17,442 93,421 77,383 30,314",
    "labelX": 28,
    "labelY": 388,
    "tags": {
      "building": "retail",
      "shop": "mall",
      "name:en": "Shibuya PRIME"
    }
  },
  {
    "osmId": 116806276,
    "kind": "yes",
    "points": "344,410 355,408 343,452 335,453 344,410",
    "labelX": 344,
    "labelY": 427,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 116806279,
    "name": "FPG Links Shibuya",
    "kind": "yes",
    "points": "903,314 918,313 922,340 918,348 906,349 902,321 903,320 903,314",
    "labelX": 909,
    "labelY": 327,
    "tags": {
      "building": "yes",
      "name:en": "FPG Links Shibuya"
    }
  },
  {
    "osmId": 116806280,
    "name": "Shibuya Parkside Kyodo",
    "kind": "yes",
    "points": "853,279 884,279 893,284 903,353 855,358 851,333 849,333 847,317 853,279",
    "labelX": 865,
    "labelY": 313,
    "tags": {
      "building": "yes",
      "name:en": "Shibuya Parkside Kyodo"
    }
  },
  {
    "osmId": 116806281,
    "name": "MAGNET SHIBUYA",
    "kind": "yes",
    "points": "658,208 679,212 675,224 702,228 695,315 695,357 649,355 630,333 658,208",
    "labelX": 671,
    "labelY": 271,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 120105790,
    "kind": "yes",
    "points": "961,56 961,78 899,80 898,63 906,62 906,57 961,56",
    "labelX": 927,
    "labelY": 65,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 120105791,
    "name": "Doctor's Building",
    "kind": "yes",
    "points": "915,12 912,25 962,25 962,12 915,12",
    "labelX": 933,
    "labelY": 17,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 120105796,
    "name": "Tokio-Marine Nichido Building",
    "kind": "yes",
    "points": "892,115 968,113 969,133 892,135 892,115",
    "labelX": 923,
    "labelY": 122,
    "tags": {
      "building": "yes",
      "name:en": "Tokio-Marine Nichido Building"
    }
  },
  {
    "osmId": 120105799,
    "kind": "yes",
    "points": "912,25 962,25 961,56 906,57 906,43 912,25",
    "labelX": 927,
    "labelY": 39,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 120105802,
    "kind": "yes",
    "points": "895,82 963,82 963,96 895,97 895,82",
    "labelX": 922,
    "labelY": 88,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 120105804,
    "name": "Shibuya Toei Plaza",
    "kind": "commercial",
    "points": "871,231 856,274 887,274 899,283 901,310 925,310 946,322 959,305 965,296 970,286 972,278 973,263 971,226 871,231",
    "labelX": 926,
    "labelY": 278,
    "tags": {
      "building": "commercial",
      "name:en": "Shibuya Toei Plaza"
    }
  },
  {
    "osmId": 120105807,
    "kind": "yes",
    "points": "895,97 895,113 963,112 963,96 895,97",
    "labelX": 922,
    "labelY": 103,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 120105810,
    "kind": "yes",
    "points": "964,135 970,223 885,227 882,184 890,137 964,135",
    "labelX": 926,
    "labelY": 174,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 120105814,
    "kind": "yes",
    "points": "919,-13 920,10 957,10 957,-13 919,-13",
    "labelX": 934,
    "labelY": -4,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 129061808,
    "name": "Ejimaya Building",
    "kind": "yes",
    "points": "259,81 278,82 286,95 280,107 253,94 259,81",
    "labelX": 269,
    "labelY": 90,
    "tags": {
      "building": "yes",
      "name:en": "Ejimaya Building"
    }
  },
  {
    "osmId": 129061813,
    "kind": "retail",
    "points": "420,110 345,91 313,159 324,164 317,182 326,185 338,189 345,170 357,175 370,149 402,160 406,152 423,117 420,110",
    "labelX": 365,
    "labelY": 151,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 136587665,
    "kind": "yes",
    "points": "108,567 98,546 78,554 71,539 106,518 92,483 116,474 161,565 134,576 125,561 108,567",
    "labelX": 109,
    "labelY": 541,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587666,
    "kind": "yes",
    "points": "108,570 124,564 130,577 116,582 75,595 71,593 67,582 85,574 78,558 98,550 108,570",
    "labelX": 96,
    "labelY": 574,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587671,
    "kind": "yes",
    "points": "140,610 131,613 121,591 129,588 140,610",
    "labelX": 132,
    "labelY": 602,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587674,
    "kind": "yes",
    "points": "41,634 62,625 66,634 45,643 41,634",
    "labelX": 51,
    "labelY": 634,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587675,
    "kind": "retail",
    "points": "-7,625 6,619 22,649 9,655 -7,625",
    "labelX": 5,
    "labelY": 635,
    "tags": {
      "building": "retail",
      "amenity": "restaurant"
    }
  },
  {
    "osmId": 136587679,
    "kind": "yes",
    "points": "202,560 212,556 225,583 216,587 202,560",
    "labelX": 211,
    "labelY": 569,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587683,
    "kind": "yes",
    "points": "4,570 26,561 38,582 16,592 4,570",
    "labelX": 18,
    "labelY": 575,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587688,
    "kind": "yes",
    "points": "214,555 224,550 231,563 221,567 214,555",
    "labelX": 221,
    "labelY": 558,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587695,
    "kind": "yes",
    "points": "20,634 32,629 39,643 28,648 20,634",
    "labelX": 28,
    "labelY": 638,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587702,
    "kind": "yes",
    "points": "-12,582 2,575 13,595 -1,602 -12,582",
    "labelX": -2,
    "labelY": 587,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587704,
    "kind": "yes",
    "points": "74,484 87,479 103,515 91,521 74,484",
    "labelX": 86,
    "labelY": 497,
    "tags": {
      "building": "yes",
      "amenity": "pharmacy"
    }
  },
  {
    "osmId": 136587709,
    "kind": "yes",
    "points": "118,623 134,615 145,632 129,640 118,623",
    "labelX": 129,
    "labelY": 627,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587710,
    "kind": "yes",
    "points": "169,572 179,569 186,584 177,587 169,572",
    "labelX": 176,
    "labelY": 577,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587714,
    "kind": "yes",
    "points": "147,605 140,608 130,587 138,584 147,605",
    "labelX": 140,
    "labelY": 598,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587715,
    "kind": "yes",
    "points": "192,565 201,561 215,590 207,593 192,565",
    "labelX": 201,
    "labelY": 575,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587717,
    "kind": "yes",
    "points": "-22,514 -4,507 4,522 -14,530 -22,514",
    "labelX": -12,
    "labelY": 517,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587718,
    "kind": "yes",
    "points": "138,614 147,609 159,624 147,630 138,614",
    "labelX": 146,
    "labelY": 618,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587719,
    "kind": "yes",
    "points": "20,605 46,594 62,622 35,633 20,605",
    "labelX": 37,
    "labelY": 612,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587721,
    "kind": "yes",
    "points": "203,446 222,440 241,467 224,477 203,446",
    "labelX": 219,
    "labelY": 455,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587722,
    "kind": "yes",
    "points": "302,466 312,463 323,492 312,495 302,466",
    "labelX": 310,
    "labelY": 476,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587726,
    "kind": "yes",
    "points": "-13,531 4,524 7,530 -10,538 -13,531",
    "labelX": -5,
    "labelY": 531,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587728,
    "name": "FamilyMart",
    "kind": "retail",
    "points": "54,492 70,485 89,523 74,532 54,492",
    "labelX": 68,
    "labelY": 505,
    "tags": {
      "building": "retail",
      "shop": "convenience",
      "name:en": "FamilyMart",
      "brand": "FamilyMart"
    }
  },
  {
    "osmId": 136587731,
    "kind": "yes",
    "points": "1,561 20,552 24,559 5,568 1,561",
    "labelX": 10,
    "labelY": 560,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587734,
    "kind": "yes",
    "points": "222,569 229,566 236,578 228,581 222,569",
    "labelX": 227,
    "labelY": 573,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587737,
    "kind": "yes",
    "points": "-10,541 12,531 21,548 0,558 -10,541",
    "labelX": 3,
    "labelY": 544,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587738,
    "kind": "yes",
    "points": "90,628 81,611 83,605 104,598 114,619 90,628",
    "labelX": 94,
    "labelY": 615,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587742,
    "kind": "yes",
    "points": "21,502 36,496 52,525 36,532 21,502",
    "labelX": 33,
    "labelY": 511,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587745,
    "kind": "yes",
    "points": "59,568 74,561 80,573 65,580 59,568",
    "labelX": 67,
    "labelY": 570,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587748,
    "kind": "yes",
    "points": "287,420 310,414 305,454 298,455 287,420",
    "labelX": 297,
    "labelY": 433,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587749,
    "kind": "retail",
    "points": "7,612 18,607 28,626 17,631 7,612",
    "labelX": 15,
    "labelY": 618,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 136587761,
    "name": "Oyahinaya",
    "kind": "yes",
    "points": "219,525 245,515 251,529 225,539 219,525",
    "labelX": 232,
    "labelY": 527,
    "tags": {
      "building": "yes",
      "name:en": "Oyahinaya"
    }
  },
  {
    "osmId": 136587769,
    "kind": "yes",
    "points": "130,613 124,615 114,594 120,591 130,613",
    "labelX": 124,
    "labelY": 605,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587775,
    "kind": "yes",
    "points": "229,479 243,471 256,490 242,498 229,479",
    "labelX": 240,
    "labelY": 483,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587785,
    "kind": "yes",
    "points": "50,492 71,532 60,537 39,497 50,492",
    "labelX": 54,
    "labelY": 510,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587786,
    "kind": "yes",
    "points": "-37,634 -11,623 23,691 -3,702 -37,634",
    "labelX": -13,
    "labelY": 657,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587794,
    "kind": "yes",
    "points": "45,645 67,635 73,646 51,655 45,645",
    "labelX": 56,
    "labelY": 645,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587804,
    "kind": "yes",
    "points": "106,596 113,594 123,616 116,619 106,596",
    "labelX": 113,
    "labelY": 604,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587807,
    "kind": "yes",
    "points": "-59,528 -29,514 0,568 -30,582 -59,528",
    "labelX": -35,
    "labelY": 544,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587817,
    "kind": "yes",
    "points": "91,632 114,621 127,643 115,651 98,647 91,632",
    "labelX": 106,
    "labelY": 638,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587820,
    "kind": "yes",
    "points": "264,467 293,453 309,496 293,500 285,499 264,467",
    "labelX": 285,
    "labelY": 480,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587821,
    "kind": "yes",
    "points": "148,607 168,600 174,611 171,618 161,624 148,607",
    "labelX": 162,
    "labelY": 611,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587824,
    "kind": "yes",
    "points": "248,430 286,420 295,451 263,466 243,434 248,430",
    "labelX": 264,
    "labelY": 439,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587825,
    "kind": "yes",
    "points": "141,584 153,579 160,582 168,597 150,604 141,584",
    "labelX": 152,
    "labelY": 588,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587831,
    "kind": "yes",
    "points": "314,462 337,456 367,450 370,473 368,477 324,490 314,462",
    "labelX": 342,
    "labelY": 467,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587833,
    "kind": "yes",
    "points": "238,545 283,527 299,555 251,575 246,573 235,553 238,545",
    "labelX": 256,
    "labelY": 553,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587834,
    "kind": "yes",
    "points": "214,521 225,543 173,562 171,557 164,559 125,471 201,442 214,472 217,471 223,484 230,483 243,510 214,521",
    "labelX": 201,
    "labelY": 507,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587836,
    "kind": "yes",
    "points": "43,543 56,537 60,545 67,542 75,558 55,567 43,543",
    "labelX": 57,
    "labelY": 548,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587839,
    "kind": "yes",
    "points": "263,505 270,503 278,514 253,527 246,513 263,505",
    "labelX": 262,
    "labelY": 511,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136587840,
    "kind": "yes",
    "points": "44,660 73,648 83,665 52,679 55,684 29,694 12,659 38,648 44,660",
    "labelX": 48,
    "labelY": 666,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690943,
    "name": "Daikokuya",
    "kind": "retail",
    "points": "344,233 376,239 377,240 378,242 378,244 378,246 377,249 376,251 375,253 372,254 341,248 344,233",
    "labelX": 368,
    "labelY": 244,
    "tags": {
      "building": "retail",
      "shop": "pawnbroker",
      "name:en": "Daikokuya"
    }
  },
  {
    "osmId": 136690944,
    "kind": "yes",
    "points": "69,231 65,227 63,223 62,216 92,159 105,155 137,168 132,177 112,168 90,212 81,208 69,231",
    "labelX": 90,
    "labelY": 198,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690945,
    "name": "Matsumoto Kiyoshi",
    "kind": "yes",
    "points": "300,276 314,279 303,326 287,323 300,276",
    "labelX": 301,
    "labelY": 296,
    "tags": {
      "building": "yes",
      "shop": "chemist",
      "amenity": "pharmacy",
      "name:en": "Matsumoto Kiyoshi"
    }
  },
  {
    "osmId": 136690946,
    "kind": "yes",
    "points": "216,294 168,274 181,247 198,254 208,235 239,248 229,268 216,294",
    "labelX": 207,
    "labelY": 264,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690947,
    "kind": "yes",
    "points": "326,229 334,230 331,246 323,245 326,229",
    "labelX": 328,
    "labelY": 236,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690948,
    "kind": "yes",
    "points": "335,250 376,256 375,261 375,264 333,258 335,250",
    "labelX": 355,
    "labelY": 257,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690949,
    "kind": "yes",
    "points": "136,218 148,223 130,258 118,252 136,218",
    "labelX": 134,
    "labelY": 234,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690950,
    "kind": "yes",
    "points": "323,247 332,249 330,258 321,257 323,247",
    "labelX": 326,
    "labelY": 252,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690954,
    "kind": "yes",
    "points": "307,225 325,228 316,268 298,264 307,225",
    "labelX": 311,
    "labelY": 242,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690959,
    "kind": "yes",
    "points": "150,171 175,181 163,205 144,197 140,206 134,204 150,171",
    "labelX": 151,
    "labelY": 191,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690961,
    "kind": "yes",
    "points": "151,223 167,230 149,265 133,258 151,223",
    "labelX": 150,
    "labelY": 240,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690963,
    "kind": "retail",
    "points": "343,231 339,249 331,247 335,230 343,231",
    "labelX": 338,
    "labelY": 238,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 136690964,
    "kind": "yes",
    "points": "121,226 129,230 117,252 109,248 121,226",
    "labelX": 119,
    "labelY": 236,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690965,
    "kind": "yes",
    "points": "114,171 131,179 125,190 107,182 114,171",
    "labelX": 118,
    "labelY": 179,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690966,
    "kind": "yes",
    "points": "391,246 396,243 402,244 474,309 457,323 381,331 391,246",
    "labelX": 413,
    "labelY": 277,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690967,
    "kind": "retail",
    "points": "209,196 248,211 252,220 248,228 223,218 224,215 204,207 209,196",
    "labelX": 227,
    "labelY": 211,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 136690968,
    "kind": "yes",
    "points": "194,231 203,235 196,251 181,245 167,271 151,265 169,232 180,236 194,231",
    "labelX": 182,
    "labelY": 244,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690969,
    "kind": "yes",
    "points": "220,219 247,229 242,241 193,222 199,211 211,216 212,213 221,216 220,219",
    "labelX": 218,
    "labelY": 221,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136690970,
    "name": "ABC-MART GRAND STAGE",
    "kind": "retail",
    "points": "295,263 261,248 269,230 274,225 279,222 285,221 291,221 300,223 305,224 295,263",
    "labelX": 285,
    "labelY": 234,
    "tags": {
      "building": "retail",
      "shop": "shoes",
      "name:en": "ABC-MART GRAND STAGE"
    }
  },
  {
    "osmId": 136691343,
    "kind": "yes",
    "points": "234,19 233,38 220,36 234,19",
    "labelX": 230,
    "labelY": 28,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691344,
    "kind": "yes",
    "points": "175,118 201,127 188,157 162,148 175,118",
    "labelX": 180,
    "labelY": 134,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691346,
    "name": "Takayama Land 15 Bldg.",
    "kind": "yes",
    "points": "29,132 65,149 56,165 20,149 29,132",
    "labelX": 40,
    "labelY": 145,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691347,
    "kind": "yes",
    "points": "310,162 322,167 309,196 296,194 310,162",
    "labelX": 309,
    "labelY": 176,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691349,
    "kind": "yes",
    "points": "131,92 158,103 153,113 126,102 131,92",
    "labelX": 140,
    "labelY": 100,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691350,
    "kind": "yes",
    "points": "280,109 269,133 241,123 253,99 280,109",
    "labelX": 265,
    "labelY": 115,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691352,
    "kind": "yes",
    "points": "299,116 324,126 317,142 291,132 299,116",
    "labelX": 306,
    "labelY": 126,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691354,
    "kind": "yes",
    "points": "-10,94 9,102 -2,122 -20,113 -10,94",
    "labelX": -7,
    "labelY": 105,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691356,
    "name": "Shibuya Moris Building",
    "kind": "yes",
    "points": "7,176 18,181 6,204 -6,198 7,176",
    "labelX": 6,
    "labelY": 187,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691359,
    "kind": "retail",
    "points": "151,-34 189,-19 170,26 133,15 151,-34",
    "labelX": 159,
    "labelY": -9,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 136691360,
    "kind": "yes",
    "points": "372,152 400,162 392,181 364,170 372,152",
    "labelX": 380,
    "labelY": 163,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691361,
    "kind": "yes",
    "points": "289,134 314,143 304,165 279,156 289,134",
    "labelX": 295,
    "labelY": 146,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691362,
    "kind": "retail",
    "points": "360,174 368,177 355,208 346,206 360,174",
    "labelX": 358,
    "labelY": 188,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 136691364,
    "kind": "yes",
    "points": "20,153 56,169 46,187 10,171 20,153",
    "labelX": 30,
    "labelY": 167,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691365,
    "kind": "yes",
    "points": "346,175 355,178 345,205 336,202 346,175",
    "labelX": 346,
    "labelY": 187,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691366,
    "kind": "yes",
    "points": "188,70 257,82 233,135 169,112 188,70",
    "labelX": 207,
    "labelY": 94,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691369,
    "kind": "yes",
    "points": "187,-7 193,-5 217,11 207,29 173,26 187,-7",
    "labelX": 194,
    "labelY": 8,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691371,
    "kind": "yes",
    "points": "18,109 34,116 25,134 9,127 18,109",
    "labelX": 21,
    "labelY": 119,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691372,
    "name": "A2",
    "kind": "yes",
    "points": "-8,146 15,156 -8,197 -30,187 -8,146",
    "labelX": -8,
    "labelY": 166,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691373,
    "name": "KOYAS",
    "kind": "retail",
    "points": "107,-41 134,-33 119,8 91,0 107,-41",
    "labelX": 112,
    "labelY": -21,
    "tags": {
      "building": "retail",
      "name:en": "KOYAS"
    }
  },
  {
    "osmId": 136691374,
    "kind": "yes",
    "points": "166,114 174,117 162,145 154,142 166,114",
    "labelX": 164,
    "labelY": 126,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691375,
    "kind": "yes",
    "points": "204,129 232,139 219,168 191,159 204,129",
    "labelX": 210,
    "labelY": 145,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691377,
    "name": "Nohara Building",
    "kind": "yes",
    "points": "132,90 146,63 162,60 185,69 167,104 132,90",
    "labelX": 154,
    "labelY": 79,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691378,
    "kind": "yes",
    "points": "293,164 305,169 293,194 279,192 293,164",
    "labelX": 293,
    "labelY": 177,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691379,
    "kind": "yes",
    "points": "356,208 370,177 394,185 386,204 375,210 356,208",
    "labelX": 373,
    "labelY": 199,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691380,
    "kind": "retail",
    "points": "160,116 149,143 130,136 142,109 160,116",
    "labelX": 148,
    "labelY": 124,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 136691381,
    "kind": "yes",
    "points": "236,38 237,17 257,20 286,28 284,43 236,38",
    "labelX": 256,
    "labelY": 31,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691382,
    "kind": "yes",
    "points": "20,180 45,192 37,208 25,212 7,204 20,180",
    "labelX": 26,
    "labelY": 196,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691383,
    "name": "Shibuya Brother Bld.",
    "kind": "yes",
    "points": "287,43 290,34 295,29 338,42 336,48 287,43",
    "labelX": 306,
    "labelY": 40,
    "tags": {
      "building": "yes",
      "name:en": "Shibuya Brother Bld."
    }
  },
  {
    "osmId": 136691384,
    "kind": "yes",
    "points": "241,126 266,136 250,171 238,176 221,169 241,126",
    "labelX": 243,
    "labelY": 151,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691385,
    "kind": "yes",
    "points": "42,118 70,131 71,134 71,138 67,148 34,133 42,118",
    "labelX": 57,
    "labelY": 131,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691386,
    "name": "Q-FRONT",
    "kind": "commercial",
    "points": "494,243 575,264 573,270 564,304 548,308 532,310 516,308 480,276 494,243",
    "labelX": 531,
    "labelY": 281,
    "tags": {
      "building": "commercial"
    }
  },
  {
    "osmId": 136691388,
    "kind": "yes",
    "points": "341,88 325,125 296,114 307,91 310,89 314,87 322,85 333,86 341,88",
    "labelX": 321,
    "labelY": 95,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136691389,
    "kind": "office",
    "points": "411,191 418,194 421,190 460,205 453,217 465,222 451,254 406,212 404,205 411,191",
    "labelX": 430,
    "labelY": 208,
    "tags": {
      "building": "office"
    }
  },
  {
    "osmId": 136692137,
    "name": "Seibu Shibuya Department Store B Building",
    "kind": "retail",
    "points": "595,102 543,93 522,90 484,83 412,64 421,33 444,39 455,5 405,-34 414,-42 428,-31 436,-39 423,-50 453,-76 503,-36 485,-22 495,-13 495,-11 563,0 562,18 608,21 609,93 595,102",
    "labelX": 493,
    "labelY": 17,
    "tags": {
      "building": "retail",
      "shop": "department_store",
      "name:en": "Seibu Shibuya Department Store B Building"
    }
  },
  {
    "osmId": 136692138,
    "name": "Seibu Shibuya Department Store Loft Building",
    "kind": "retail",
    "points": "390,-39 355,41 340,29 337,29 314,27 279,-15 263,-15 281,-116 345,-109 341,-113 349,-116 399,-73 397,-71 389,-62 402,-51 390,-39",
    "labelX": 348,
    "labelY": -43,
    "tags": {
      "building": "retail",
      "shop": "department_store",
      "name:en": "Seibu Shibuya Department Store Loft Building"
    }
  },
  {
    "osmId": 136692143,
    "kind": "yes",
    "points": "564,0 607,0 608,19 564,18 564,0",
    "labelX": 581,
    "labelY": 7,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136729999,
    "kind": "yes",
    "points": "44,23 49,20 53,19 72,27 64,42 73,45 44,100 18,88 15,85 14,80 15,77 18,71 44,23",
    "labelX": 40,
    "labelY": 54,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730002,
    "kind": "yes",
    "points": "-20,54 1,64 -6,77 -27,68 -20,54",
    "labelX": -14,
    "labelY": 63,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730004,
    "kind": "yes",
    "points": "75,54 88,59 91,53 112,62 102,80 69,65 75,54",
    "labelX": 87,
    "labelY": 61,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730005,
    "kind": "yes",
    "points": "-12,-4 4,4 -9,27 -25,19 -12,-4",
    "labelX": -11,
    "labelY": 8,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730010,
    "kind": "yes",
    "points": "58,88 64,91 56,106 49,103 58,88",
    "labelX": 57,
    "labelY": 95,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730012,
    "name": "Zara",
    "kind": "yes",
    "points": "669,48 726,42 723,78 670,81 669,48",
    "labelX": 691,
    "labelY": 59,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730026,
    "kind": "yes",
    "points": "-13,41 16,54 9,65 -19,52 -13,41",
    "labelX": -4,
    "labelY": 51,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730027,
    "kind": "retail",
    "points": "72,113 65,110 67,106 69,102 76,105 72,113",
    "labelX": 70,
    "labelY": 108,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 136730030,
    "name": "Shibuya SMBC Trust Building",
    "kind": "yes",
    "points": "670,84 722,82 719,130 671,125 670,84",
    "labelX": 690,
    "labelY": 101,
    "tags": {
      "building": "yes",
      "name:en": "Shibuya SMBC Trust Building"
    }
  },
  {
    "osmId": 136730033,
    "kind": "yes",
    "points": "65,110 56,106 65,91 73,95 69,102 67,106 65,110",
    "labelX": 66,
    "labelY": 103,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730034,
    "kind": "yes",
    "points": "7,4 33,16 15,49 -11,37 7,4",
    "labelX": 10,
    "labelY": 22,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730036,
    "kind": "yes",
    "points": "69,66 102,81 91,101 58,86 69,66",
    "labelX": 78,
    "labelY": 80,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730038,
    "name": "Y'MEZ",
    "kind": "yes",
    "points": "76,29 85,33 78,46 69,42 76,29",
    "labelX": 77,
    "labelY": 36,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730039,
    "name": "Nakamura Building",
    "kind": "yes",
    "points": "87,33 97,37 87,56 77,51 87,33",
    "labelX": 87,
    "labelY": 42,
    "tags": {
      "building": "yes",
      "name:en": "Nakamura Building"
    }
  },
  {
    "osmId": 136730040,
    "kind": "yes",
    "points": "675,140 703,142 708,149 706,190 665,182 675,140",
    "labelX": 689,
    "labelY": 157,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730043,
    "kind": "yes",
    "points": "100,37 113,41 118,51 114,60 93,51 100,37",
    "labelX": 106,
    "labelY": 46,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730045,
    "kind": "yes",
    "points": "80,98 91,103 87,111 82,113 76,115 72,113 76,105 80,98",
    "labelX": 81,
    "labelY": 107,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 136730049,
    "name": "Marudai Building",
    "kind": "yes",
    "points": "663,184 705,191 704,222 697,221 695,226 677,222 681,211 659,206 663,184",
    "labelX": 683,
    "labelY": 207,
    "tags": {
      "building": "yes",
      "name:en": "Marudai Building"
    }
  },
  {
    "osmId": 138670865,
    "kind": "yes",
    "points": "817,192 827,193 826,199 817,199 817,192",
    "labelX": 821,
    "labelY": 195,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 138670868,
    "kind": "yes",
    "points": "816,279 821,279 820,290 815,290 816,279",
    "labelX": 818,
    "labelY": 283,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 138670870,
    "kind": "yes",
    "points": "799,253 812,254 810,290 797,289 799,253",
    "labelX": 803,
    "labelY": 268,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 138670882,
    "kind": "yes",
    "points": "821,223 829,223 827,253 819,253 821,223",
    "labelX": 823,
    "labelY": 235,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 138670888,
    "kind": "yes",
    "points": "829,206 829,221 822,221 823,205 829,206",
    "labelX": 826,
    "labelY": 212,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 138670889,
    "kind": "yes",
    "points": "806,344 806,366 797,366 797,338 797,329 797,300 807,300 806,328 806,344",
    "labelX": 802,
    "labelY": 335,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 138670891,
    "kind": "yes",
    "points": "802,209 817,210 814,251 800,250 802,209",
    "labelX": 807,
    "labelY": 226,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 138670898,
    "kind": "yes",
    "points": "818,254 825,255 822,277 816,277 818,254",
    "labelX": 820,
    "labelY": 263,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142438894,
    "kind": "yes",
    "points": "662,368 661,375 684,377 685,373 685,369 662,368",
    "labelX": 673,
    "labelY": 372,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 142438895,
    "kind": "yes",
    "points": "627,347 641,361 634,366 620,352 624,349 627,347",
    "labelX": 629,
    "labelY": 354,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 148780539,
    "name": "LABI",
    "kind": "retail",
    "points": "-101,301 -100,318 -59,315 -46,352 56,283 -3,257 -64,288 -64,293 -101,301",
    "labelX": -54,
    "labelY": 301,
    "tags": {
      "building": "retail",
      "shop": "electronics",
      "name:en": "LABI"
    }
  },
  {
    "osmId": 148780864,
    "kind": "yes",
    "points": "52,527 55,534 42,540 38,533 52,527",
    "labelX": 48,
    "labelY": 532,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 154431360,
    "kind": "yes",
    "points": "124,103 115,122 116,131 127,135 140,109 124,103",
    "labelX": 124,
    "labelY": 117,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 155538676,
    "kind": "yes",
    "points": "635,479 670,474 671,480 676,507 640,513 635,479",
    "labelX": 655,
    "labelY": 489,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 155749492,
    "kind": "yes",
    "points": "927,349 919,313 923,312 945,325 927,349",
    "labelX": 928,
    "labelY": 330,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 155807205,
    "kind": "yes",
    "points": "575,522 575,523 580,523 580,522 575,522",
    "labelX": 577,
    "labelY": 522,
    "tags": {
      "building": "yes",
      "amenity": "smoking_area"
    }
  },
  {
    "osmId": 155807209,
    "kind": "yes",
    "points": "471,423 475,423 480,423 478,446 469,445 471,423",
    "labelX": 474,
    "labelY": 431,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 155807210,
    "kind": "yes",
    "points": "474,342 474,339 474,335 494,333 495,341 474,342",
    "labelX": 481,
    "labelY": 339,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 155807211,
    "kind": "yes",
    "points": "542,335 541,326 562,323 563,328 563,332 542,335",
    "labelX": 552,
    "labelY": 330,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 155807215,
    "kind": "yes",
    "points": "465,475 474,476 470,495 466,494 461,493 465,475",
    "labelX": 467,
    "labelY": 485,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 155807221,
    "kind": "yes",
    "points": "401,529 320,550 294,510 372,488 403,520 401,529",
    "labelX": 365,
    "labelY": 521,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 355250632,
    "kind": "retail",
    "points": "100,698 103,697 114,686 126,676 137,672 150,671 162,661 169,678 195,736 190,734 184,731 178,739 168,746 152,750 151,750 150,750 142,749 124,756 113,728 112,724 106,710 103,704 100,698",
    "labelX": 140,
    "labelY": 715,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 355250634,
    "kind": "yes",
    "points": "439,558 494,552 518,549 551,546 560,545 575,543 578,559 574,570 573,577 573,580 572,589 573,601 559,603 539,606 503,611 448,618 443,582 439,558",
    "labelX": 528,
    "labelY": 575,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 355252207,
    "kind": "roof",
    "points": "981,249 984,249 987,249 988,277 982,277 981,249",
    "labelX": 984,
    "labelY": 258,
    "tags": {
      "building": "roof"
    }
  },
  {
    "osmId": 548299162,
    "kind": "retail",
    "points": "514,130 522,90 543,93 536,134 514,130",
    "labelX": 526,
    "labelY": 115,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 551944268,
    "kind": "roof",
    "points": "208,375 211,371 213,367 213,362 212,357 209,353 204,351 199,350 194,350 189,352 186,355 183,359 183,364 183,368 186,372 189,375 194,377 199,378 204,377 208,375",
    "labelX": 198,
    "labelY": 364,
    "tags": {
      "building": "roof"
    }
  },
  {
    "osmId": 605959622,
    "kind": "retail",
    "points": "410,63 379,56 386,20 398,-13 406,-29 438,-3 437,4 451,6 443,37 418,31 410,63",
    "labelX": 416,
    "labelY": 21,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 617560918,
    "name": "Shibuya Scramble Square",
    "kind": "retail",
    "points": "1022,584 1035,616 1074,705 1090,739 941,795 885,666 884,664 879,651 876,646 872,637 902,626 1022,584",
    "labelX": 957,
    "labelY": 659,
    "tags": {
      "building": "retail",
      "name:en": "Shibuya Scramble Square"
    }
  },
  {
    "osmId": 671085515,
    "name": "Tamakyu Building",
    "kind": "yes",
    "points": "192,338 192,340 174,351 147,322 149,320 192,338",
    "labelX": 174,
    "labelY": 335,
    "tags": {
      "building": "yes",
      "name:en": "Tamakyu Building"
    }
  },
  {
    "osmId": 749184350,
    "kind": "yes",
    "points": "808,337 817,337 817,365 807,365 808,337",
    "labelX": 811,
    "labelY": 348,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 751241770,
    "kind": "yes",
    "points": "258,4 261,-13 277,-12 299,11 306,19 305,21 261,10 259,8 258,4",
    "labelX": 276,
    "labelY": 6,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 810356690,
    "kind": "train_station",
    "points": "856,554 850,541 895,533 1066,480 1100,469 1147,453 1153,467 1194,454 1200,470 1158,484 1161,492 1165,503 1145,510 1119,518 1102,524 1086,529 914,584 889,595 880,597 874,600 867,581 864,574 859,563 856,554",
    "labelX": 1017,
    "labelY": 526,
    "tags": {
      "building": "train_station"
    }
  },
  {
    "osmId": 844691964,
    "kind": "yes",
    "points": "357,409 377,409 368,446 346,450 357,409",
    "labelX": 361,
    "labelY": 425,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 858994297,
    "kind": "yes",
    "points": "580,536 582,540 600,538 599,533 598,533 597,529 584,531 584,535 580,536",
    "labelX": 589,
    "labelY": 535,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 904652318,
    "name": "Central Paid Area",
    "kind": "yes",
    "points": "757,683 752,669 756,668 754,659 752,652 742,655 739,634 747,633 745,622 752,620 762,617 771,616 780,644 854,622 841,589 847,587 852,586 867,581 874,600 880,597 883,605 892,602 902,626 872,637 876,646 879,651 884,664 885,666 879,668 867,641 864,636 859,637 845,638 785,656 789,665 787,665 775,669 766,673 768,679 757,683",
    "labelX": 816,
    "labelY": 639,
    "tags": {
      "building": "yes",
      "name:en": "Central Paid Area"
    }
  },
  {
    "osmId": 904652357,
    "name": "Shibuya",
    "kind": "train_station",
    "points": "838,557 856,554 859,563 864,574 867,581 852,586 862,612 865,619 872,637 876,646 879,651 884,664 885,666 941,795 886,814 905,851 874,863 846,874 832,854 813,861 805,845 797,849 793,841 768,850 749,811 783,798 791,795 787,786 783,776 776,761 762,732 767,731 749,686 742,655 739,634 747,633 745,622 742,608 732,569 725,538 700,540 697,528 696,520 690,464 689,456 687,447 684,426 711,424 715,423 731,422 794,416 795,425 800,424 801,433 806,452 810,465 838,557",
    "labelX": 794,
    "labelY": 634,
    "tags": {
      "building": "train_station",
      "name:en": "Shibuya"
    }
  },
  {
    "osmId": 904734439,
    "kind": "train_station",
    "points": "91,677 58,689 51,692 34,698 14,705 16,709 17,711 18,714 19,716 21,719 22,721 24,726 44,719 60,713 68,710 100,698 103,697 114,686 126,676 137,672 150,671 162,661 255,610 265,605 352,577 374,564 383,562 386,561 392,559 406,551 436,543 435,539 433,533 411,539 388,545 377,548 343,556 321,564 275,580 251,587 155,644 125,662 103,672 91,677",
    "labelX": 191,
    "labelY": 640,
    "tags": {
      "building": "train_station"
    }
  },
  {
    "osmId": 1233446447,
    "kind": "yes",
    "points": "473,226 458,259 451,254 465,224 473,226",
    "labelX": 464,
    "labelY": 238,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1233446448,
    "kind": "office",
    "points": "491,239 477,273 459,260 470,233 491,239",
    "labelX": 478,
    "labelY": 249,
    "tags": {
      "building": "office"
    }
  },
  {
    "osmId": 1251343320,
    "kind": "yes",
    "points": "245,499 259,492 265,502 249,509 245,499",
    "labelX": 253,
    "labelY": 500,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1333090437,
    "kind": "retail",
    "points": "99,243 73,232 81,218 90,221 108,186 125,194 99,243",
    "labelX": 96,
    "labelY": 220,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 1333090438,
    "kind": "yes",
    "points": "178,183 162,214 181,222 183,219 171,214 182,191 193,196 196,191 178,183",
    "labelX": 180,
    "labelY": 201,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1333090439,
    "kind": "yes",
    "points": "185,197 179,208 188,212 194,201 185,197",
    "labelX": 186,
    "labelY": 203,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1333090440,
    "kind": "yes",
    "points": "146,201 143,206 158,213 161,207 146,201",
    "labelX": 151,
    "labelY": 206,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1333409426,
    "kind": "yes",
    "points": "815,464 824,462 833,459 841,487 823,491 815,464",
    "labelX": 825,
    "labelY": 471,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1333409427,
    "kind": "yes",
    "points": "866,419 870,417 874,415 880,425 872,429 866,419",
    "labelX": 871,
    "labelY": 421,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1333409445,
    "kind": "yes",
    "points": "531,629 550,696 639,710 686,692 697,684 682,652 680,652 668,666 638,677 631,677 581,670 575,662 568,640 564,624 531,629",
    "labelX": 615,
    "labelY": 664,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1335178869,
    "kind": "yes",
    "points": "458,341 458,344 459,348 467,347 466,340 458,341",
    "labelX": 461,
    "labelY": 344,
    "tags": {
      "building": "yes"
    }
  },
  {
    "osmId": 1391515611,
    "kind": "retail",
    "points": "522,90 543,93 536,134 514,130 522,90",
    "labelX": 527,
    "labelY": 107,
    "tags": {
      "building": "retail"
    }
  },
  {
    "osmId": 1419376020,
    "kind": "retail",
    "points": "522,90 543,93 536,134 514,130 522,90",
    "labelX": 527,
    "labelY": 107,
    "tags": {
      "building": "retail"
    }
  }
]

