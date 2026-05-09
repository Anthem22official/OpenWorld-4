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

export const shibuyaCrossingRoads: OsmRenderLine[] = [
  {
    "osmId": 23334685,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 389 365 L 411 364 L 427 365 L 443 366 L 460 368 L 477 371",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 31610459,
    "kind": "residential",
    "path": "M 31 244 L 40 227 L 48 214",
    "tags": {
      "highway": "residential",
      "surface": "paving_stones",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 31610468,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 579 431 L 576 439 L 570 462",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "3",
      "oneway": "yes"
    }
  },
  {
    "osmId": 31855878,
    "kind": "unclassified",
    "path": "M 0 474 L 8 495 L 53 583",
    "tags": {
      "highway": "unclassified"
    }
  },
  {
    "osmId": 37865047,
    "kind": "unclassified",
    "path": "M 229 428 L 282 509 L 288 517 L 315 556",
    "tags": {
      "highway": "unclassified",
      "surface": "asphalt",
      "oneway": "yes"
    }
  },
  {
    "osmId": 37865064,
    "kind": "unclassified",
    "path": "M 282 509 L 377 481",
    "tags": {
      "highway": "unclassified"
    }
  },
  {
    "osmId": 46769498,
    "kind": "unclassified",
    "path": "M 640 126 L 666 133 L 714 141",
    "tags": {
      "highway": "unclassified",
      "surface": "asphalt",
      "oneway": "yes"
    }
  },
  {
    "osmId": 46867627,
    "kind": "service",
    "path": "M -53 629 L 53 583",
    "tags": {
      "highway": "service",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 48041059,
    "kind": "unclassified",
    "path": "M 486 524 L 478 522 L 470 521 L 453 521 L 418 528 L 315 556 L 248 581 L 245 583 L 183 618 L 101 668",
    "tags": {
      "highway": "unclassified",
      "surface": "asphalt",
      "lanes": "2",
      "oneway": "yes"
    }
  },
  {
    "osmId": 48041060,
    "kind": "unclassified",
    "path": "M 65 604 L 161 572 L 183 618",
    "tags": {
      "highway": "unclassified",
      "oneway": "yes"
    }
  },
  {
    "osmId": 48391489,
    "kind": "residential",
    "path": "M 442 92 L 436 106 L 405 182 L 398 198 L 387 226 L 374 330 L 373 333 L 373 340 L 372 348 L 370 366",
    "tags": {
      "highway": "residential",
      "surface": "paving_stones",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 48391530,
    "kind": "residential",
    "path": "M 250 195 L 299 87 L 300 78 L 302 64",
    "tags": {
      "highway": "residential",
      "surface": "paving_stones",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 48391623,
    "kind": "residential",
    "path": "M 212 319 L 220 304 L 271 203",
    "tags": {
      "highway": "residential",
      "surface": "paving_stones",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 48391778,
    "kind": "residential",
    "path": "M 1 92 L 40 24 L 47 12 L 57 -6",
    "tags": {
      "highway": "residential",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 55895867,
    "kind": "unclassified",
    "path": "M 418 528 L 377 481 L 374 464 L 375 445 L 385 403 L 387 398 L 389 387 L 389 365",
    "tags": {
      "highway": "unclassified"
    }
  },
  {
    "osmId": 84154030,
    "kind": "unclassified",
    "path": "M 349 70 L 352 59 L 355 53 L 346 42 L 339 38 L 331 33 L 252 12 L 238 13 L 228 20 L 214 35 L 212 40 L 209 52",
    "tags": {
      "highway": "unclassified"
    }
  },
  {
    "osmId": 87250163,
    "name": "Spainzaka Street",
    "kind": "footway",
    "path": "M 122 19 L 147 -40 L 158 -73 L 160 -91 L 164 -118 L 166 -134 L 168 -151",
    "tags": {
      "highway": "footway",
      "name:en": "Spainzaka Street",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 87250168,
    "kind": "service",
    "path": "M 252 12 L 254 -8 L 282 -148",
    "tags": {
      "highway": "service"
    }
  },
  {
    "osmId": 87250185,
    "name": "Shibuya Center-gai Street",
    "kind": "unclassified",
    "path": "M 579 386 L 547 371 L 523 359 L 522 353",
    "tags": {
      "highway": "unclassified",
      "name:en": "Shibuya Center-gai Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 87250216,
    "name": "Wave-dori Street",
    "kind": "unclassified",
    "path": "M 500 641 L 464 647 L 446 651 L 391 672 L 315 700 L 208 741 L 192 754",
    "tags": {
      "highway": "unclassified",
      "name:en": "Wave-dori Street",
      "surface": "paving_stones",
      "oneway": "yes"
    }
  },
  {
    "osmId": 116806275,
    "kind": "unclassified",
    "path": "M 714 141 L 704 336 L 704 371 L 705 395",
    "tags": {
      "highway": "unclassified",
      "surface": "paved",
      "oneway": "yes"
    }
  },
  {
    "osmId": 129061810,
    "kind": "steps",
    "path": "M 326 185 L 315 212",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 136729991,
    "kind": "path",
    "path": "M 714 141 L 725 143",
    "tags": {
      "highway": "path",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 136729994,
    "kind": "path",
    "path": "M 725 143 L 791 151",
    "tags": {
      "highway": "path"
    }
  },
  {
    "osmId": 136729995,
    "kind": "path",
    "path": "M 793 294 L 791 374 L 790 394",
    "tags": {
      "highway": "path",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 152975897,
    "kind": "pedestrian",
    "path": "M 804 142 L 806 154 L 807 161 L 830 188 L 840 204 L 829 287 L 826 343 L 829 371 L 843 369 L 840 323 L 849 278 L 872 218 L 880 159 L 882 145 L 898 62 L 942 -140 L 931 -142 L 860 146 L 833 144 L 804 142",
    "tags": {
      "highway": "pedestrian"
    }
  },
  {
    "osmId": 153108795,
    "name": "Bunkamura-dori Street",
    "kind": "tertiary",
    "path": "M -319 101 L -293 110 L -278 116 L -176 156 L -147 168 L -131 175 L -108 185 L -96 190 L -9 227 L 6 234 L 31 244 L 50 252 L 62 257 L 93 271 L 212 319",
    "tags": {
      "highway": "tertiary",
      "name:en": "Bunkamura-dori Street",
      "surface": "asphalt",
      "lanes": "2"
    }
  },
  {
    "osmId": 162719649,
    "kind": "residential",
    "path": "M 150 156 L 139 177 L 101 254 L 93 271",
    "tags": {
      "highway": "residential",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 198521350,
    "kind": "footway",
    "path": "M -34 -124 L -19 -102 L 7 -65 L 32 -38 L 61 -11 L 122 19 L 140 26 L 212 40 L 340 57",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 202129903,
    "name": "Inokashira-dori Street",
    "kind": "tertiary",
    "path": "M 640 126 L 596 122 L 540 113 L 527 111 L 518 109 L 472 100 L 442 92 L 377 77 L 349 70 L 302 64 L 209 52 L 174 45 L 144 38 L 119 27 L 57 -6 L 39 -17 L 34 -21 L -12 -75 L -28 -97 L -46 -124 L -98 -206 L -107 -221 L -116 -234 L -136 -267 L -168 -310 L -195 -335 L -214 -351 L -224 -357 L -266 -380 L -307 -401 L -331 -416 L -347 -430 L -552 -619 L -629 -694 L -636 -702",
    "tags": {
      "highway": "tertiary",
      "name:en": "Inokashira-dori Street",
      "surface": "asphalt",
      "oneway": "yes"
    }
  },
  {
    "osmId": 213526440,
    "kind": "tertiary",
    "path": "M 790 394 L 931 381 L 964 378 L 1016 370",
    "tags": {
      "highway": "tertiary",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 215955234,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 486 524 L 497 485",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 215955235,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 516 706 L 504 663",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 215956002,
    "kind": "footway",
    "path": "M 262 420 L 282 388 L 294 368 L 309 344",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 215956003,
    "kind": "footway",
    "path": "M 250 374 L 282 388 L 322 404",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 215956132,
    "kind": "pedestrian",
    "path": "M 988 277 L 982 277 L 977 277 L 973 277 L 970 286 L 965 297 L 916 362 L 912 366 L 963 361 L 980 358 L 988 354 L 993 350 L 996 346 L 997 342 L 997 338 L 988 277",
    "tags": {
      "highway": "pedestrian"
    }
  },
  {
    "osmId": 217541897,
    "kind": "footway",
    "path": "M 42 11 L 38 10 L 21 5 L -65 -27 L -70 -29",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 257223003,
    "kind": "service",
    "path": "M 956 582 L 939 534",
    "tags": {
      "highway": "service",
      "surface": "asphalt",
      "oneway": "yes"
    }
  },
  {
    "osmId": 258432971,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 570 669 L 592 703",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "3",
      "oneway": "yes"
    }
  },
  {
    "osmId": 260252968,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 640 126 L 638 158 L 629 199 L 619 239",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 261815523,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 641 -60 L 642 -45 L 642 -21 L 642 83 L 640 126",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 265139656,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 493 600 L 491 588 L 485 544",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 266086968,
    "kind": "service",
    "path": "M 1071 616 L 1047 565 L 1042 559 L 1035 556 L 1028 557 L 956 582",
    "tags": {
      "highway": "service",
      "surface": "asphalt",
      "oneway": "yes"
    }
  },
  {
    "osmId": 310155095,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 504 663 L 500 641",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 310155101,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 545 618 L 552 638 L 560 653 L 563 660 L 570 669",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "3",
      "oneway": "yes"
    }
  },
  {
    "osmId": 350053196,
    "kind": "service",
    "path": "M 985 427 L 1001 421",
    "tags": {
      "highway": "service",
      "surface": "asphalt",
      "oneway": "yes"
    }
  },
  {
    "osmId": 350053207,
    "kind": "service",
    "path": "M 910 458 L 908 452 L 985 427",
    "tags": {
      "highway": "service",
      "surface": "asphalt",
      "oneway": "yes"
    }
  },
  {
    "osmId": 355244225,
    "kind": "footway",
    "path": "M 321 564 L 388 667",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 355248078,
    "kind": "footway",
    "path": "M 498 353 L 494 374 L 489 395",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 355248079,
    "kind": "footway",
    "path": "M 666 133 L 664 156 L 663 162 L 625 331",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 355248080,
    "kind": "footway",
    "path": "M 574 334 L 593 338 L 613 341",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 355248081,
    "kind": "footway",
    "path": "M 623 411 L 626 390 L 629 372",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 355248083,
    "kind": "footway",
    "path": "M 511 418 L 521 419",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 355248087,
    "kind": "footway",
    "path": "M 666 133 L 666 96 L 666 83 L 663 -21 L 662 -51 L 662 -56 L 662 -62 L 662 -107 L 666 -311 L 667 -317 L 670 -321 L 675 -324 L 682 -327 L 690 -328 L 697 -327 L 831 -291",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 355248419,
    "kind": "pedestrian",
    "path": "M 451 657 L 464 653 L 469 652 L 484 651 L 485 651 L 487 652 L 487 654 L 487 667 L 492 689 L 495 708 L 507 726 L 524 768 L 517 770 L 513 772 L 475 698 L 451 657",
    "tags": {
      "highway": "pedestrian"
    }
  },
  {
    "osmId": 355248420,
    "kind": "pedestrian",
    "path": "M 464 653 L 464 647 L 464 640",
    "tags": {
      "highway": "pedestrian"
    }
  },
  {
    "osmId": 355248423,
    "kind": "footway",
    "path": "M 456 511 L 453 521 L 452 531",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 355248425,
    "kind": "pedestrian",
    "path": "M 439 533 L 452 531 L 465 528 L 468 528 L 471 530 L 471 538 L 471 551 L 475 590 L 480 638 L 464 640 L 455 641 L 442 550 L 439 533",
    "tags": {
      "highway": "pedestrian"
    }
  },
  {
    "osmId": 355252210,
    "kind": "footway",
    "path": "M 963 361 L 964 378 L 965 395",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 355252212,
    "kind": "footway",
    "path": "M 1046 330 L 1033 332 L 1009 336 L 997 338",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 355253411,
    "kind": "footway",
    "path": "M 817 415 L 801 416 L 794 414 L 737 418 L 684 423 L 681 423",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 355253412,
    "kind": "footway",
    "path": "M 696 370 L 704 371 L 734 373 L 791 374 L 829 371 L 843 369 L 916 362 L 962 351",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 355254045,
    "kind": "footway",
    "path": "M -752 1308 L -721 1254 L -688 1198 L -561 975 L -545 948 L -516 909 L -483 865 L -438 805 L -334 668 L -320 652 L -297 628 L -245 583 L -231 572 L -188 534 L -142 504 L -118 492 L -85 478 L -27 460 L 85 426 L 88 425 L 246 377 L 249 376 L 250 374 L 252 373 L 253 370 L 253 366 L 253 364 L 251 361 L 250 359 L 248 358 L 246 356 L 244 354 L 40 269 L 21 260 L -3 251 L -118 204 L -138 196 L -225 162",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 355254165,
    "kind": "service",
    "path": "M 245 583 L 230 553 L 235 539 L 288 517",
    "tags": {
      "highway": "service"
    }
  },
  {
    "osmId": 372165785,
    "kind": "footway",
    "path": "M 318 339 L 319 348 L 322 374 L 325 397",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 372165786,
    "kind": "footway",
    "path": "M 246 377 L 254 398 L 262 420",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 372165787,
    "kind": "footway",
    "path": "M 253 370 L 280 352 L 300 340 L 307 336",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 375676167,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 562 484 L 553 506 L 540 533 L 537 543 L 536 554 L 539 582 L 541 602 L 545 618",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "3",
      "oneway": "yes"
    }
  },
  {
    "osmId": 376162311,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 514 431 L 516 427 L 521 419",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 522821274,
    "kind": "footway",
    "path": "M 464 640 L 461 605 L 459 592 L 454 549 L 454 547 L 452 531",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 522821276,
    "kind": "footway",
    "path": "M 604 679 L 590 668 L 580 654 L 572 632 L 561 579 L 560 545",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 534157302,
    "name": "Meiji Street",
    "kind": "primary",
    "path": "M 1016 370 L 1009 336 L 1004 303 L 1002 282 L 986 41 L 975 -230 L 974 -270",
    "tags": {
      "highway": "primary",
      "name:en": "Meiji Street",
      "surface": "paved",
      "oneway": "yes"
    }
  },
  {
    "osmId": 542478931,
    "name": "Shibuya Center-gai Street",
    "kind": "residential",
    "path": "M 522 353 L 518 343 L 514 330 L 511 326 L 504 319 L 494 309 L 456 275 L 406 232 L 387 226 L 315 212 L 271 203 L 250 195 L 222 184 L 150 156 L 108 140 L 92 133",
    "tags": {
      "highway": "residential",
      "name:en": "Shibuya Center-gai Street",
      "surface": "paving_stones",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 551944269,
    "kind": "pedestrian",
    "path": "M 215 382 L 242 374 L 242 359 L 212 347 L 210 352 L 212 353 L 215 354 L 217 356 L 219 359 L 220 361 L 221 364 L 221 366 L 221 368 L 221 370 L 220 372 L 219 374 L 216 376 L 215 378 L 213 379 L 215 382",
    "tags": {
      "highway": "pedestrian"
    }
  },
  {
    "osmId": 664492772,
    "kind": "footway",
    "path": "M 480 558 L 481 563",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664492776,
    "kind": "steps",
    "path": "M 191 648 L 176 655",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664492777,
    "kind": "footway",
    "path": "M 176 655 L 165 659 L 170 669 L 182 665",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664492778,
    "kind": "steps",
    "path": "M 195 658 L 182 665",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664492781,
    "kind": "footway",
    "path": "M 433 563 L 434 557 L 435 553",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664492782,
    "kind": "footway",
    "path": "M 505 395 L 493 401 L 468 397 L 460 462 L 470 462",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664492784,
    "kind": "steps",
    "path": "M 470 462 L 472 450",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664492785,
    "kind": "steps",
    "path": "M 470 462 L 468 473",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664492786,
    "kind": "footway",
    "path": "M 354 387 L 352 376 L 351 363 L 374 361 L 397 358 L 448 359 L 489 364 L 550 374 L 561 375 L 628 383 L 666 385 L 691 387 L 986 364 L 992 363 L 1057 355 L 1112 346 L 1118 370 L 1074 378 L 1031 383 L 897 397 L 871 398 L 694 411 L 556 403 L 505 395 L 493 393 L 447 386 L 395 384 L 371 385 L 365 386 L 361 386 L 354 387",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664498381,
    "kind": "footway",
    "path": "M 346 378 L 315 391 L 186 432 L 91 462 L 75 417",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498382,
    "kind": "steps",
    "path": "M 346 378 L 344 373",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498383,
    "kind": "steps",
    "path": "M 374 361 L 373 359",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498384,
    "kind": "footway",
    "path": "M 373 359 L 376 359 L 376 373",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498385,
    "kind": "footway",
    "path": "M 344 373 L 340 322",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498386,
    "kind": "steps",
    "path": "M 372 387 L 371 385",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498387,
    "kind": "footway",
    "path": "M 376 373 L 399 373",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498388,
    "kind": "footway",
    "path": "M 372 387 L 377 387 L 376 373",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498390,
    "kind": "steps",
    "path": "M 497 386 L 491 385 L 489 383 L 490 374",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498391,
    "kind": "footway",
    "path": "M 352 376 L 346 378",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498392,
    "kind": "footway",
    "path": "M 484 338 L 489 338 L 489 364",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498393,
    "kind": "steps",
    "path": "M 508 377 L 506 387 L 519 389 L 529 392",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498394,
    "kind": "footway",
    "path": "M 654 389 L 656 394",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498395,
    "kind": "footway",
    "path": "M 399 373 L 407 367 L 425 368 L 448 369 L 450 369 L 490 374 L 508 377 L 573 384 L 635 388 L 654 389 L 669 391 L 677 391 L 691 392 L 695 392 L 937 377",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664498396,
    "kind": "footway",
    "path": "M 399 373 L 406 381 L 449 383 L 493 389 L 574 399 L 652 403 L 669 404 L 677 391",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664503290,
    "kind": "footway",
    "path": "M 551 329 L 554 347 L 556 363 L 561 375",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664503291,
    "kind": "footway",
    "path": "M 630 355 L 628 383",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664503292,
    "kind": "footway",
    "path": "M 671 372 L 666 385",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664503293,
    "name": "B2F",
    "kind": "footway",
    "path": "M 937 377 L 968 386",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664503294,
    "name": "B2F",
    "kind": "footway",
    "path": "M 937 377 L 987 370",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664503295,
    "kind": "steps",
    "path": "M 987 370 L 986 364",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664503296,
    "kind": "footway",
    "path": "M 992 363 L 985 322 L 984 264",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664503298,
    "name": "B2F",
    "kind": "footway",
    "path": "M 968 386 L 987 383 L 1024 379 L 1029 378 L 1034 378 L 1049 376 L 1060 375 L 1074 429",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664527475,
    "kind": "steps",
    "path": "M 668 395 L 694 396",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664527476,
    "kind": "steps",
    "path": "M 997 370 L 1014 368",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664527477,
    "kind": "footway",
    "path": "M 995 363 L 997 370 L 998 378",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664527479,
    "kind": "footway",
    "path": "M 966 368 L 967 374 L 970 383",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664527480,
    "kind": "steps",
    "path": "M 967 374 L 979 372",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664527481,
    "name": "Interchange between Hazomon and Fukutoshin lines",
    "kind": "footway",
    "path": "M 979 372 L 989 375 L 1009 383 L 1022 388",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664528092,
    "kind": "footway",
    "path": "M 450 369 L 453 373 L 457 373 L 485 377",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664528093,
    "kind": "steps",
    "path": "M 485 377 L 501 381",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664528094,
    "kind": "footway",
    "path": "M 695 380 L 694 396 L 693 403",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664528396,
    "kind": "footway",
    "path": "M 645 392 L 656 394 L 668 395",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664528397,
    "kind": "footway",
    "path": "M 621 399 L 623 390 L 621 376",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664528398,
    "kind": "steps",
    "path": "M 645 392 L 623 390",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664528842,
    "kind": "footway",
    "path": "M 454 549 L 478 546 L 480 558",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664528851,
    "kind": "footway",
    "path": "M 652 403 L 649 451 L 656 496",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664532506,
    "kind": "footway",
    "path": "M 611 153 L 638 158 L 663 162",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 664532507,
    "kind": "footway",
    "path": "M 616 83 L 642 83 L 666 83",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 664532518,
    "kind": "footway",
    "path": "M -3 251 L 6 234 L 15 216",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 664532519,
    "kind": "footway",
    "path": "M 40 269 L 50 252 L 59 235",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 664532520,
    "kind": "footway",
    "path": "M 587 432 L 590 433 L 619 440 L 677 460 L 681 423",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 664532521,
    "kind": "footway",
    "path": "M 599 414 L 601 417 L 619 440",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 664532522,
    "kind": "footway",
    "path": "M 489 395 L 489 411 L 511 418",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 664532523,
    "kind": "footway",
    "path": "M 489 411 L 474 419 L 462 426 L 457 428",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 664532524,
    "kind": "footway",
    "path": "M 498 353 L 500 347 L 505 329",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664532525,
    "kind": "footway",
    "path": "M 688 527 L 687 521 L 686 512 L 678 463 L 677 460",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664532526,
    "kind": "footway",
    "path": "M 474 339 L 469 339 L 468 324 L 495 320",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664740804,
    "kind": "footway",
    "path": "M 963 361 L 962 351 L 981 341 L 997 338",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664740806,
    "kind": "footway",
    "path": "M 1008 402 L 966 405 L 965 395",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664819010,
    "kind": "footway",
    "path": "M 186 432 L 196 456",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664819011,
    "kind": "footway",
    "path": "M 196 456 L 191 454 L 186 441",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664819013,
    "kind": "footway",
    "path": "M 75 417 L 82 416 L 85 426",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664819014,
    "kind": "footway",
    "path": "M 468 397 L 441 392 L 422 391",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664820364,
    "kind": "steps",
    "path": "M 656 496 L 661 496",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 664869088,
    "kind": "footway",
    "path": "M 686 512 L 666 515 L 623 520 L 560 529",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664869089,
    "kind": "path",
    "path": "M 661 496 L 664 496 L 665 510",
    "tags": {
      "highway": "path"
    }
  },
  {
    "osmId": 664871979,
    "kind": "steps",
    "path": "M 435 553 L 454 549",
    "tags": {
      "highway": "steps",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664871980,
    "kind": "footway",
    "path": "M 456 511 L 458 499 L 466 448 L 468 435 L 462 426",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664871981,
    "kind": "path",
    "path": "M 458 499 L 464 500 L 466 494 L 468 485",
    "tags": {
      "highway": "path"
    }
  },
  {
    "osmId": 664871982,
    "kind": "path",
    "path": "M 475 435 L 475 423 L 474 419",
    "tags": {
      "highway": "path",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 664871983,
    "kind": "footway",
    "path": "M 472 450 L 475 435",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664871984,
    "kind": "footway",
    "path": "M 468 473 L 468 485",
    "tags": {
      "highway": "footway",
      "surface": "concrete"
    }
  },
  {
    "osmId": 664871985,
    "kind": "footway",
    "path": "M 489 411 L 455 402 L 448 400 L 407 398 L 387 398",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664871986,
    "kind": "path",
    "path": "M 407 398 L 407 391 L 414 391 L 422 391",
    "tags": {
      "highway": "path"
    }
  },
  {
    "osmId": 664873611,
    "kind": "footway",
    "path": "M 984 264 L 984 249 L 976 244 L 963 -112",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664873613,
    "kind": "footway",
    "path": "M 976 244 L 977 277 L 981 341",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 664877555,
    "kind": "footway",
    "path": "M 594 138 L 596 122 L 598 110",
    "tags": {
      "highway": "footway",
      "surface": "paved"
    }
  },
  {
    "osmId": 742205313,
    "kind": "steps",
    "path": "M 1005 608 L 977 617",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 754454447,
    "kind": "footway",
    "path": "M 615 102 L 640 126 L 664 156",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 754454448,
    "kind": "footway",
    "path": "M 611 150 L 640 126 L 666 96",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 754454449,
    "kind": "footway",
    "path": "M 599 414 L 579 386 L 552 349",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 759282402,
    "kind": "footway",
    "path": "M 977 617 L 888 647 L 879 651 L 876 652 L 873 653 L 876 660 L 879 666",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 759282403,
    "kind": "footway",
    "path": "M 1053 674 L 1049 666 L 1016 591 L 1000 597 L 980 604 L 977 598",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 759282404,
    "kind": "footway",
    "path": "M 977 598 L 942 610 L 935 595 L 880 445 L 819 431",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 854794950,
    "name": "Shibuya Deck",
    "kind": "footway",
    "path": "M 534 574 L 539 606 L 553 645 L 560 667 L 567 682 L 638 693 L 672 680 L 689 667",
    "tags": {
      "highway": "footway",
      "name:en": "Shibuya Deck"
    }
  },
  {
    "osmId": 858994296,
    "kind": "footway",
    "path": "M 689 667 L 699 664",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 904652299,
    "kind": "steps",
    "path": "M 750 514 L 745 491 L 742 476",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904652300,
    "kind": "steps",
    "path": "M 789 503 L 795 523 L 800 540",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904652301,
    "kind": "steps",
    "path": "M 803 540 L 798 523 L 792 502",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904652303,
    "kind": "steps",
    "path": "M 817 579 L 821 591 L 824 600 L 832 620",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904652317,
    "kind": "steps",
    "path": "M 839 649 L 848 665 L 857 682",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904652322,
    "kind": "steps",
    "path": "M 740 434 L 731 422 L 726 415",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904652339,
    "kind": "steps",
    "path": "M 782 654 L 787 665 L 789 672",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904652341,
    "kind": "steps",
    "path": "M 812 579 L 816 591 L 819 601 L 825 617",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904652356,
    "kind": "steps",
    "path": "M 845 649 L 852 664 L 861 680",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904734428,
    "kind": "steps",
    "path": "M 389 564 L 394 563 L 423 555",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904734429,
    "kind": "steps",
    "path": "M 385 557 L 386 561 L 387 563",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904734431,
    "kind": "steps",
    "path": "M 432 542 L 414 547",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 904734432,
    "kind": "footway",
    "path": "M 433 552 L 438 583 L 443 582",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194232,
    "kind": "footway",
    "path": "M 845 580 L 847 587 L 864 626 L 870 640 L 872 643 L 876 652",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194241,
    "kind": "footway",
    "path": "M 942 541 L 945 548 L 948 556 L 1061 517 L 1123 496 L 1120 489 L 1117 482 L 1056 503 L 942 541",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194242,
    "kind": "steps",
    "path": "M 412 542 L 428 538",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 906194243,
    "kind": "footway",
    "path": "M 845 580 L 864 574 L 871 572 L 912 559 L 927 554 L 945 548",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194249,
    "kind": "footway",
    "path": "M 443 582 L 521 575 L 534 574 L 574 570",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194250,
    "kind": "footway",
    "path": "M 407 549 L 415 586 L 438 583 L 443 582",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194255,
    "kind": "footway",
    "path": "M 96 717 L 191 685 L 280 630 L 415 586",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194257,
    "kind": "footway",
    "path": "M 384 555 L 385 557",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194258,
    "kind": "footway",
    "path": "M 358 562 L 381 556 L 384 555 L 407 549",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194259,
    "kind": "footway",
    "path": "M 387 563 L 387 564 L 389 564",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194260,
    "kind": "footway",
    "path": "M 404 542 L 405 544",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194261,
    "kind": "footway",
    "path": "M 407 549 L 414 547",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194262,
    "kind": "footway",
    "path": "M 407 549 L 405 544 L 412 542",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194271,
    "kind": "footway",
    "path": "M 86 700 L 99 695 L 133 676 L 253 608 L 261 603 L 351 574 L 361 569 L 358 562 L 347 564 L 255 593 L 247 598 L 129 668 L 94 685 L 80 690 L 79 691",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194273,
    "kind": "footway",
    "path": "M 687 521 L 696 520",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194274,
    "kind": "footway",
    "path": "M 696 520 L 713 519 L 724 517",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194282,
    "kind": "footway",
    "path": "M 884 664 L 879 666 L 869 669 L 880 695 L 863 701 L 875 728 L 818 749",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194284,
    "kind": "footway",
    "path": "M 561 579 L 539 582 L 509 586 L 491 588 L 475 590",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 906194288,
    "kind": "footway",
    "path": "M 817 579 L 811 564 L 807 552 L 803 540",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194289,
    "kind": "footway",
    "path": "M 800 540 L 804 553 L 807 552 L 812 551 L 799 510 L 774 515 L 724 517 L 715 469",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194290,
    "kind": "footway",
    "path": "M 715 469 L 740 466 L 742 476",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194291,
    "kind": "footway",
    "path": "M 712 453 L 713 457 L 713 461 L 715 469",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194292,
    "kind": "path",
    "path": "M 741 439 L 740 434",
    "tags": {
      "highway": "path"
    }
  },
  {
    "osmId": 906194293,
    "kind": "footway",
    "path": "M 689 456 L 712 453 L 731 451 L 729 440 L 741 439 L 801 433",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194295,
    "kind": "footway",
    "path": "M 843 646 L 867 641 L 870 640",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194297,
    "kind": "footway",
    "path": "M 793 679 L 798 678 L 817 664 L 839 649 L 843 646 L 845 649",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194298,
    "kind": "footway",
    "path": "M 789 672 L 793 679 L 796 687",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 906194299,
    "kind": "footway",
    "path": "M 798 678 L 801 686",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 977916824,
    "kind": "footway",
    "path": "M 532 353 L 522 353 L 498 353",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 977916825,
    "kind": "footway",
    "path": "M 629 372 L 617 352 L 620 346 L 621 343",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 977916826,
    "kind": "path",
    "path": "M 621 343 L 613 341",
    "tags": {
      "highway": "path"
    }
  },
  {
    "osmId": 1033129755,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 579 386 L 579 431",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "2",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1033129756,
    "kind": "footway",
    "path": "M 579 431 L 587 432",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 1033129758,
    "kind": "tertiary_link",
    "path": "M 506 451 L 516 446 L 528 441 L 536 440 L 545 441 L 551 443 L 558 446 L 565 454 L 570 462",
    "tags": {
      "highway": "tertiary_link",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1035760830,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 221 408 L 16 469",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "2"
    }
  },
  {
    "osmId": 1035760831,
    "name": "Bunkamura-dori Street",
    "kind": "tertiary",
    "path": "M 212 319 L 270 345",
    "tags": {
      "highway": "tertiary",
      "name:en": "Bunkamura-dori Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1066171778,
    "kind": "footway",
    "path": "M 431 537 L 439 533 L 452 531",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1066171779,
    "kind": "footway",
    "path": "M 369 578 L 361 569",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1066171780,
    "kind": "footway",
    "path": "M 475 590 L 459 592",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1067222064,
    "kind": "footway",
    "path": "M 575 307 L 574 326 L 574 334 L 566 342 L 552 349 L 538 353 L 532 353",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1071930092,
    "name": "Old Daxian Street",
    "kind": "tertiary",
    "path": "M 636 391 L 637 391 L 669 393 L 705 395",
    "tags": {
      "highway": "tertiary",
      "name:en": "Old Daxian Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1071930093,
    "kind": "tertiary",
    "path": "M 705 395 L 790 394",
    "tags": {
      "highway": "tertiary",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1074513106,
    "kind": "footway",
    "path": "M 833 156 L 833 144 L 834 120",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1074513107,
    "kind": "footway",
    "path": "M 797 152 L 806 154 L 833 156 L 880 159",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1074513108,
    "kind": "footway",
    "path": "M 853 -264 L 894 -185 L 898 -179 L 890 -133 L 878 -42 L 830 -33 L 826 78 L 837 80 L 834 120",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1074513109,
    "kind": "steps",
    "path": "M 826 100 L 826 78",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 1082021490,
    "kind": "footway",
    "path": "M 810 564 L 811 564",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1083392180,
    "kind": "footway",
    "path": "M 671 372 L 685 373 L 696 370",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1083392181,
    "kind": "footway",
    "path": "M 696 370 L 683 362 L 645 361 L 627 341 L 621 343",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1083467991,
    "kind": "footway",
    "path": "M 340 322 L 336 335",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1083468021,
    "kind": "footway",
    "path": "M 474 339 L 484 338",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1083468022,
    "kind": "footway",
    "path": "M 574 334 L 571 333 L 570 326 L 563 328",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1106270530,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 301 381 L 322 374",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1109680532,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 570 462 L 562 484",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "3",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1109680533,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 370 366 L 389 365",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1109680534,
    "kind": "footway",
    "path": "M 387 398 L 324 403",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1109680535,
    "kind": "footway",
    "path": "M 377 340 L 418 337 L 452 339 L 469 339 L 469 345 L 500 347",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1109680536,
    "kind": "footway",
    "path": "M 309 344 L 312 338",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1109680537,
    "kind": "footway",
    "path": "M 336 335 L 335 343",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1110356210,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 301 381 L 282 388",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "2"
    }
  },
  {
    "osmId": 1110356213,
    "kind": "unclassified",
    "path": "M 53 583 L 65 604 L 101 668 L 103 672",
    "tags": {
      "highway": "unclassified"
    }
  },
  {
    "osmId": 1112568718,
    "name": "Bunkamura-dori Street",
    "kind": "tertiary",
    "path": "M 294 368 L 301 381",
    "tags": {
      "highway": "tertiary",
      "name:en": "Bunkamura-dori Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1112568719,
    "kind": "footway",
    "path": "M 324 403 L 322 404 L 262 420 L 229 428 L 186 441 L 17 492",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1112568720,
    "kind": "footway",
    "path": "M 17 492 L 8 495 L -1 498",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1112568722,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 16 469 L 0 474",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "2"
    }
  },
  {
    "osmId": 1115659357,
    "kind": "path",
    "path": "M 793 294 L 813 294 L 816 253 L 819 202 L 799 201",
    "tags": {
      "highway": "path"
    }
  },
  {
    "osmId": 1115659358,
    "kind": "path",
    "path": "M 791 151 L 797 152 L 799 156 L 800 162 L 801 166 L 800 178 L 800 190 L 799 201",
    "tags": {
      "highway": "path",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 1115659359,
    "kind": "path",
    "path": "M 799 201 L 793 294",
    "tags": {
      "highway": "path",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 1134562280,
    "kind": "tertiary",
    "path": "M 579 386 L 626 390 L 636 391",
    "tags": {
      "highway": "tertiary",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1134562281,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 599 318 L 596 326 L 593 338 L 579 386",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 1134562282,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 477 371 L 484 372 L 494 374 L 579 386",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1134562284,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 506 451 L 510 440",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1134562285,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 338 370 L 370 366",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1134562286,
    "name": "Bunkamura-dori Street",
    "kind": "tertiary",
    "path": "M 270 345 L 280 352 L 288 360 L 294 368",
    "tags": {
      "highway": "tertiary",
      "name:en": "Bunkamura-dori Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1134562287,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 238 403 L 221 408",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "2"
    }
  },
  {
    "osmId": 1143863679,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 485 544 L 485 534 L 486 524",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1143863680,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 497 485 L 503 462 L 506 451",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1151968434,
    "kind": "footway",
    "path": "M 105 256 L 216 302",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1151968435,
    "kind": "footway",
    "path": "M 28 222 L 40 227 L 50 231",
    "tags": {
      "highway": "footway",
      "surface": "paved"
    }
  },
  {
    "osmId": 1154117302,
    "name": "Shibuya Center-gai Street",
    "kind": "residential",
    "path": "M -104 43 L -70 60 L 1 92 L 74 125 L 92 133",
    "tags": {
      "highway": "residential",
      "name:en": "Shibuya Center-gai Street",
      "surface": "paving_stones",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1156909226,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 521 419 L 579 386",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1156909227,
    "kind": "footway",
    "path": "M 324 403 L 325 397",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1157451161,
    "kind": "footway",
    "path": "M 521 419 L 579 431",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 1160235255,
    "kind": "footway",
    "path": "M 433 552 L 442 550 L 454 547",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1160235256,
    "kind": "footway",
    "path": "M 428 538 L 431 537 L 432 542 L 433 552",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1160235257,
    "kind": "footway",
    "path": "M 423 555 L 433 552",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1213763565,
    "kind": "service",
    "path": "M 939 534 L 910 458",
    "tags": {
      "highway": "service",
      "surface": "asphalt",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1256602978,
    "kind": "unclassified",
    "path": "M 221 408 L 229 428",
    "tags": {
      "highway": "unclassified",
      "surface": "asphalt",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1274305031,
    "kind": "footway",
    "path": "M 598 110 L 615 102 L 616 83 L 616 3 L 610 -18 L 608 -21 L 607 -24 L 605 -27 L 603 -29 L 601 -31 L 560 -59 L 509 -102 L 482 -123 L 461 -139 L 460 -141 L 441 -157 L 406 -187 L 368 -220 L 355 -231 L 319 -265 L 294 -294 L 288 -304 L 270 -334 L 258 -364 L 253 -373 L 244 -382",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1274305382,
    "kind": "footway",
    "path": "M 575 307 L 583 272 L 612 161 L 611 153 L 611 150 L 607 145 L 601 140 L 594 138",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1298036686,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 282 388 L 254 398 L 238 403",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "2"
    }
  },
  {
    "osmId": 1298036687,
    "name": "Dogen-zaka Street",
    "kind": "tertiary",
    "path": "M 322 374 L 338 370",
    "tags": {
      "highway": "tertiary",
      "name:en": "Dogen-zaka Street",
      "surface": "asphalt",
      "lanes": "4"
    }
  },
  {
    "osmId": 1330873764,
    "kind": "service",
    "path": "M 507 523 L 505 530 L 504 537 L 504 545 L 505 557",
    "tags": {
      "highway": "service",
      "surface": "paved",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1333409427,
    "kind": "elevator",
    "path": "M 866 419 L 870 417 L 874 415 L 880 425 L 872 429 L 866 419",
    "tags": {
      "highway": "elevator"
    }
  },
  {
    "osmId": 1333409428,
    "kind": "footway",
    "path": "M 817 415 L 866 412 L 907 409 L 966 405",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1333409429,
    "kind": "footway",
    "path": "M 824 462 L 819 431 L 817 415",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1333409430,
    "kind": "footway",
    "path": "M 801 433 L 819 431",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1333409431,
    "kind": "footway",
    "path": "M 870 417 L 866 412",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1333409441,
    "kind": "footway",
    "path": "M 880 445 L 907 409",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178865,
    "kind": "footway",
    "path": "M 474 419 L 455 402",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1335178866,
    "kind": "footway",
    "path": "M 570 326 L 569 311 L 524 317 L 512 318",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178867,
    "kind": "footway",
    "path": "M 505 329 L 468 324",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178868,
    "kind": "footway",
    "path": "M 495 320 L 504 319 L 512 318",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 1335178870,
    "kind": "footway",
    "path": "M 468 324 L 450 327 L 452 339 L 454 345 L 458 344",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178871,
    "kind": "footway",
    "path": "M 551 329 L 563 328",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178872,
    "kind": "footway",
    "path": "M 570 326 L 574 326",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1335178873,
    "kind": "footway",
    "path": "M 552 349 L 551 348 L 571 333",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178874,
    "kind": "footway",
    "path": "M 621 343 L 625 331",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1335178875,
    "kind": "footway",
    "path": "M 624 349 L 630 355",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178876,
    "kind": "footway",
    "path": "M 624 349 L 620 346",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178877,
    "kind": "footway",
    "path": "M 677 460 L 689 456",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178878,
    "kind": "footway",
    "path": "M 619 440 L 614 471 L 623 520",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1335178879,
    "kind": "footway",
    "path": "M 614 471 L 678 463",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178880,
    "kind": "footway",
    "path": "M 622 415 L 613 413 L 609 414 L 605 415 L 601 417 L 597 420 L 593 425 L 590 433 L 560 529 L 560 545",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1335178881,
    "kind": "footway",
    "path": "M 665 510 L 666 515",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178882,
    "kind": "footway",
    "path": "M 569 311 L 575 307",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178883,
    "kind": "footway",
    "path": "M 505 329 L 511 326 L 517 323",
    "tags": {
      "highway": "footway",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 1335178884,
    "kind": "footway",
    "path": "M 517 323 L 524 317",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1335178885,
    "kind": "footway",
    "path": "M 619 440 L 622 415 L 623 411",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1349961224,
    "kind": "unclassified",
    "path": "M 103 672 L 133 729",
    "tags": {
      "highway": "unclassified"
    }
  },
  {
    "osmId": 1349961227,
    "kind": "footway",
    "path": "M 315 556 L 321 564",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1349961228,
    "kind": "footway",
    "path": "M 388 667 L 391 672",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1354866789,
    "kind": "footway",
    "path": "M 864 626 L 754 659",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1354866790,
    "kind": "steps",
    "path": "M 754 659 L 699 664",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 1354871463,
    "kind": "footway",
    "path": "M 553 645 L 568 640 L 582 636",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1354871464,
    "kind": "steps",
    "path": "M 582 636 L 599 654 L 606 670",
    "tags": {
      "highway": "steps"
    }
  },
  {
    "osmId": 1354871465,
    "kind": "footway",
    "path": "M 604 679 L 609 675 L 606 670",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1378908402,
    "kind": "footway",
    "path": "M 622 728 L 616 697 L 604 679",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1378908403,
    "kind": "footway",
    "path": "M 622 728 L 749 686 L 787 673 L 818 749 L 827 770",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1380679907,
    "kind": "service",
    "path": "M 562 484 L 520 507 L 515 512 L 511 517 L 507 523",
    "tags": {
      "highway": "service",
      "surface": "paved",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1382159336,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 619 239 L 599 318",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt"
    }
  },
  {
    "osmId": 1391280802,
    "kind": "service",
    "path": "M 524 664 L 528 686 L 533 697",
    "tags": {
      "highway": "service",
      "surface": "paved",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1391289379,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 510 440 L 514 431",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1391515606,
    "name": "Masaka St.",
    "kind": "unclassified",
    "path": "M 355 53 L 370 42 L 394 -30 L 407 -47",
    "tags": {
      "highway": "unclassified",
      "name:en": "Masaka St.",
      "surface": "paving_stones",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1391515610,
    "kind": "service",
    "path": "M 339 38 L 337 29",
    "tags": {
      "highway": "service"
    }
  },
  {
    "osmId": 1391515612,
    "kind": "footway",
    "path": "M 573 270 L 583 272",
    "tags": {
      "highway": "footway",
      "surface": "paved"
    }
  },
  {
    "osmId": 1391515613,
    "kind": "footway",
    "path": "M 363 61 L 381 64 L 465 86 L 520 97",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1391515614,
    "kind": "footway",
    "path": "M 340 57 L 352 59 L 363 61",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1414217947,
    "name": "Jingu-dori Street",
    "kind": "tertiary",
    "path": "M 500 641 L 493 600",
    "tags": {
      "highway": "tertiary",
      "name:en": "Jingu-dori Street",
      "surface": "asphalt",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1419376016,
    "kind": "footway",
    "path": "M 543 101 L 549 102 L 598 110",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1419376017,
    "kind": "footway",
    "path": "M 520 97 L 543 101",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1419376018,
    "kind": "footway",
    "path": "M 594 138 L 538 128",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1419376019,
    "kind": "footway",
    "path": "M 538 128 L 515 124",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1457189302,
    "kind": "footway",
    "path": "M 834 496 L 824 462",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1462471072,
    "kind": "residential",
    "path": "M 48 214 L 92 133 L 134 57 L 138 48 L 144 38",
    "tags": {
      "highway": "residential",
      "surface": "paving_stones",
      "lanes": "1",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1462471075,
    "kind": "footway",
    "path": "M 381 64 L 377 77 L 373 89",
    "tags": {
      "highway": "footway",
      "surface": "paved"
    }
  },
  {
    "osmId": 1463027843,
    "kind": "service",
    "path": "M 505 557 L 509 586 L 516 625",
    "tags": {
      "highway": "service",
      "surface": "paved",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1470018197,
    "kind": "service",
    "path": "M 516 625 L 524 664",
    "tags": {
      "highway": "service",
      "surface": "paved",
      "oneway": "yes"
    }
  },
  {
    "osmId": 1476897090,
    "kind": "footway",
    "path": "M 518 549 L 521 575",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1507031454,
    "kind": "footway",
    "path": "M 430 105 L 373 89 L 340 83 L 308 78",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031455,
    "kind": "footway",
    "path": "M 308 78 L 300 78 L 289 77",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031456,
    "kind": "footway",
    "path": "M 515 124 L 506 122 L 444 108",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031457,
    "kind": "footway",
    "path": "M 444 108 L 436 106 L 430 105",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031458,
    "kind": "footway",
    "path": "M 281 329 L 307 336 L 312 338 L 318 339 L 335 343 L 368 340",
    "tags": {
      "highway": "footway"
    }
  },
  {
    "osmId": 1507031459,
    "kind": "footway",
    "path": "M 368 340 L 373 340 L 377 340",
    "tags": {
      "highway": "footway",
      "surface": "paved"
    }
  },
  {
    "osmId": 1507031460,
    "kind": "footway",
    "path": "M 289 77 L 245 72 L 211 67 L 158 55 L 145 51",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031461,
    "kind": "footway",
    "path": "M 145 51 L 138 48 L 128 45",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031462,
    "kind": "footway",
    "path": "M 114 38 L 119 27 L 122 19",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031463,
    "kind": "footway",
    "path": "M 50 231 L 59 235 L 98 253",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031464,
    "kind": "footway",
    "path": "M 98 253 L 101 254 L 105 256",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031465,
    "kind": "footway",
    "path": "M 225 306 L 281 329",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031466,
    "kind": "footway",
    "path": "M 216 302 L 220 304 L 225 306",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031468,
    "kind": "footway",
    "path": "M 38 10 L 30 -5",
    "tags": {
      "highway": "footway",
      "surface": "paved"
    }
  },
  {
    "osmId": 1507031470,
    "kind": "footway",
    "path": "M 128 45 L 114 38 L 72 21 L 51 14",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031471,
    "kind": "footway",
    "path": "M 51 14 L 47 12 L 42 11",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031472,
    "kind": "footway",
    "path": "M -154 144 L -98 168 L 15 216 L 28 222",
    "tags": {
      "highway": "footway",
      "surface": "paving_stones"
    }
  },
  {
    "osmId": 1507031474,
    "kind": "footway",
    "path": "M 458 344 L 462 344",
    "tags": {
      "highway": "footway",
      "surface": "paved"
    }
  }
]

export const shibuyaCrossingRails: OsmRenderLine[] = [
  {
    "osmId": 16688536,
    "name": "Tokyo Metro Ginza Line",
    "kind": "subway",
    "path": "M 453 625 L 622 600 L 656 593 L 691 585 L 732 574 L 764 566 L 787 561 L 815 555 L 846 551 L 871 547 L 896 542 L 920 535",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Ginza Line",
      "operator:en": "Tokyo Metro",
      "layer": "2",
      "bridge": "viaduct"
    }
  },
  {
    "osmId": 24474864,
    "name": "Tokyu Den-en-toshi Line",
    "kind": "rail",
    "path": "M 416 365 L 501 365 L 696 374 L 808 375 L 946 366",
    "tags": {
      "railway": "rail",
      "name:en": "Tokyu Den-en-toshi Line",
      "layer": "-2",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 49888122,
    "name": "Tokyo Metro Hanzomon Line",
    "kind": "subway",
    "path": "M 946 366 L 1056 353 L 1111 346 L 1270 317 L 1389 294 L 1576 257 L 1734 222 L 1805 197 L 1927 146 L 2128 3 L 2493 -266 L 2913 -557 L 3005 -630 L 3098 -719 L 3308 -981",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Hanzomon Line",
      "operator:en": "Tokyo Metro",
      "layer": "-3",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 146060265,
    "name": "Yamanote Line",
    "kind": "rail",
    "path": "M 726 430 L 721 353",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Line",
      "operator:en": "East Japan Railway",
      "layer": "1",
      "bridge": "yes"
    }
  },
  {
    "osmId": 146060273,
    "name": "Yamanote Line",
    "kind": "rail",
    "path": "M 721 353 L 724 288 L 731 206 L 740 109 L 757 -89 L 769 -303",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Line",
      "operator:en": "East Japan Railway"
    }
  },
  {
    "osmId": 146060331,
    "name": "Yamanote Line",
    "kind": "rail",
    "path": "M 744 352 L 752 429",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Line",
      "operator:en": "East Japan Railway",
      "layer": "1",
      "bridge": "yes"
    }
  },
  {
    "osmId": 146060379,
    "name": "Yamanote Line",
    "kind": "rail",
    "path": "M 752 429 L 758 464 L 763 491 L 773 531 L 786 577 L 800 617 L 812 652 L 829 693 L 866 768",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Line",
      "operator:en": "East Japan Railway"
    }
  },
  {
    "osmId": 146060426,
    "name": "Yamanote Line",
    "kind": "rail",
    "path": "M 781 -299 L 767 -88 L 759 18 L 752 109 L 747 208 L 743 288 L 744 352",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Line",
      "operator:en": "East Japan Railway"
    }
  },
  {
    "osmId": 155269553,
    "name": "Yamanote Freight Line",
    "kind": "rail",
    "path": "M 776 351 L 787 424",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Freight Line",
      "operator:en": "East Japan Railway",
      "layer": "1",
      "bridge": "yes"
    }
  },
  {
    "osmId": 155269569,
    "name": "Yamanote Freight Line",
    "kind": "rail",
    "path": "M 767 427 L 760 351",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Freight Line",
      "operator:en": "East Japan Railway",
      "layer": "1",
      "bridge": "yes"
    }
  },
  {
    "osmId": 155269600,
    "name": "Yamanote Freight Line",
    "kind": "rail",
    "path": "M 760 351 L 759 290 L 759 207 L 791 -297",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Freight Line",
      "operator:en": "East Japan Railway"
    }
  },
  {
    "osmId": 155269603,
    "name": "Yamanote Freight Line",
    "kind": "rail",
    "path": "M 802 -294 L 770 208 L 770 291 L 776 351",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Freight Line",
      "operator:en": "East Japan Railway"
    }
  },
  {
    "osmId": 169057662,
    "name": "Tokyu Den-en-toshi Line",
    "kind": "rail",
    "path": "M 414 398 L 386 398 L 335 404 L 296 411 L 251 421 L -50 506 L -97 526 L -172 565 L -265 642 L -321 698 L -382 776 L -415 821 L -478 909 L -564 1039 L -707 1274 L -753 1347 L -822 1453 L -1097 1795 L -1153 1859 L -1236 1925 L -1293 1956 L -1332 1975 L -2360 2319 L -2538 2377 L -2702 2438 L -2860 2525 L -3083 2653 L -3269 2762 L -3374 2814 L -3464 2865 L -3602 2953 L -3861 3105 L -4549 3511 L -5238 3920 L -5381 4006 L -5540 4103 L -5852 4291 L -6062 4417 L -6202 4501 L -6371 4606 L -6455 4658 L -6532 4704 L -6570 4729 L -6653 4794 L -6717 4845 L -6795 4926 L -6849 4989 L -7230 5563 L -7380 5833 L -7605 6195 L -7769 6438 L -7843 6553 L -7962 6720 L -8017 6787 L -8112 6880 L -8343 7068 L -8435 7136 L -8528 7206 L -8631 7289 L -8877 7461 L -9019 7556 L -9266 7709 L -9413 7803 L -9512 7867 L -9664 7963 L -9792 8022 L -9893 8059 L -10000 8090 L -10246 8159 L -10705 8283 L -10797 8296 L -10840 8300 L -10907 8299 L -10947 8297 L -11005 8293 L -11119 8270 L -11241 8238 L -11429 8177 L -11524 8134 L -11625 8084 L -11803 8006 L -11924 7974 L -11999 7958 L -12121 7941 L -12334 7927 L -12593 7932 L -12885 7942 L -13001 7955 L -13132 7971 L -13317 8010 L -13513 8060 L -13737 8126 L -13885 8176 L -14073 8254 L -14160 8299 L -14261 8363 L -14633 8657 L -14829 8792 L -14955 8876 L -15183 9029 L -15392 9164 L -15481 9226 L -15609 9325 L -15712 9433 L -15792 9540 L -15869 9665 L -15921 9752 L -16031 9948 L -16106 10079 L -16158 10190 L -16212 10320 L -16392 10810 L -16446 10978 L -16506 11192 L -16608 11528 L -16691 11783",
    "tags": {
      "railway": "rail",
      "name:en": "Tokyu Den-en-toshi Line",
      "layer": "-2",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 211954289,
    "name": "Yamanote Freight Line",
    "kind": "rail",
    "path": "M 873 766 L 838 691 L 821 646 L 791 559 L 775 485 L 767 427",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Freight Line",
      "operator:en": "East Japan Railway"
    }
  },
  {
    "osmId": 211954421,
    "name": "Yamanote Line",
    "kind": "rail",
    "path": "M 826 783 L 773 661 L 747 579 L 734 510 L 731 483 L 726 430",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Line",
      "operator:en": "East Japan Railway"
    }
  },
  {
    "osmId": 211954427,
    "name": "Yamanote Freight Line",
    "kind": "rail",
    "path": "M 787 424 L 806 488 L 821 550 L 847 618 L 879 681 L 914 751",
    "tags": {
      "railway": "rail",
      "name:en": "Yamanote Freight Line",
      "operator:en": "East Japan Railway"
    }
  },
  {
    "osmId": 355250636,
    "kind": "subway",
    "path": "M 150 750 L 155 747 L 177 731 L 189 723 L 202 714 L 237 695 L 254 688 L 269 681 L 341 657 L 363 650 L 385 644 L 387 644 L 421 636 L 455 632",
    "tags": {
      "railway": "subway",
      "layer": "1",
      "tunnel": "building_passage"
    }
  },
  {
    "osmId": 355250638,
    "kind": "subway",
    "path": "M 190 734 L 199 729 L 211 724 L 356 668 L 373 660 L 390 651 L 405 646 L 416 642 L 427 638 L 441 635 L 455 632",
    "tags": {
      "railway": "subway",
      "layer": "1",
      "tunnel": "building_passage"
    }
  },
  {
    "osmId": 664411289,
    "kind": "platform",
    "path": "M 1139 723 L 1133 726 L 1097 677 L 1073 634 L 1044 566 L 1031 535 L 1011 474 L 990 386 L 1002 383 L 1024 471 L 1056 561 L 1086 629 L 1109 672 L 1139 723",
    "tags": {
      "railway": "platform",
      "layer": "-5",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 664524931,
    "name": "Tokyu Den-en-toshi Line",
    "kind": "rail",
    "path": "M 948 393 L 815 406 L 694 409 L 501 400 L 414 398",
    "tags": {
      "railway": "rail",
      "name:en": "Tokyu Den-en-toshi Line",
      "layer": "-1",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 664527469,
    "kind": "platform",
    "path": "M 501 381 L 501 369 L 621 376 L 695 380 L 809 380 L 949 370 L 966 368 L 995 363 L 1090 350 L 1091 355 L 948 379 L 811 391 L 694 391 L 579 386 L 501 381",
    "tags": {
      "railway": "platform",
      "layer": "-3",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 664527472,
    "kind": "platform",
    "path": "M 1091 355 L 948 379 L 811 391 L 694 391 L 579 386 L 501 381 L 501 393 L 621 399 L 693 403 L 813 401 L 948 387 L 970 383 L 998 378 L 1092 360 L 1091 355",
    "tags": {
      "railway": "platform",
      "layer": "-3",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 671715587,
    "name": "Tokyu Den-en-toshi Line",
    "kind": "rail",
    "path": "M -16699 11781 L -16622 11526 L -16515 11188 L -16453 10979 L -16411 10805 L -16250 10377 L -16226 10313 L -16193 10245 L -16170 10187 L -16119 10076 L -16045 9941 L -15928 9743 L -15801 9533 L -15721 9428 L -15617 9321 L -15489 9216 L -15400 9155 L -15189 9017 L -14960 8867 L -14835 8784 L -14636 8652 L -14301 8387 L -14262 8357 L -14161 8294 L -14075 8247 L -13886 8171 L -13736 8119 L -13512 8056 L -13318 8004 L -13135 7964 L -13003 7946 L -12887 7931 L -12588 7922 L -12333 7919 L -12113 7931 L -11997 7949 L -11919 7967 L -11799 7998 L -11620 8075 L -11517 8126 L -11419 8170 L -11232 8232 L -11113 8266 L -11000 8277 L -10945 8279 L -10913 8280 L -10877 8277 L -10821 8272 L -10620 8223 L -10253 8119 L -10003 8047 L -9910 8018 L -9807 7983 L -9684 7924 L -9536 7831 L -9435 7771 L -9290 7678 L -9043 7522 L -8899 7430 L -8775 7344 L -8658 7255 L -8556 7175 L -8369 7030 L -8138 6844 L -8054 6757 L -7998 6693 L -7889 6537 L -7811 6420 L -7646 6173 L -7405 5806 L -7241 5558 L -6859 4984 L -6806 4920 L -6723 4839 L -6662 4786 L -6577 4723 L -6536 4695 L -6465 4648 L -6379 4596 L -6215 4494 L -6080 4415 L -5861 4284 L -5547 4091 L -5391 3993 L -5251 3910 L -4558 3501 L -3874 3098 L -3612 2942 L -3468 2861 L -3382 2806 L -3281 2751 L -3092 2645 L -2870 2511 L -2707 2427 L -2544 2366 L -2367 2310 L -1338 1963 L -1302 1945 L -1246 1917 L -1166 1854 L -1108 1788 L -835 1447 L -765 1338 L -719 1267 L -576 1034 L -488 903 L -423 812 L -390 769 L -331 689 L -275 635 L -177 554 L -139 530 L -103 515 L -55 496 L 71 453 L 245 399 L 332 375 L 380 368 L 416 365",
    "tags": {
      "railway": "rail",
      "name:en": "Tokyu Den-en-toshi Line",
      "layer": "-3",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 759134298,
    "name": "Shibuya",
    "kind": "platform",
    "path": "M 932 567 L 1025 538 L 1054 529 L 1084 518 L 1104 510 L 1115 505 L 1139 495 L 1157 487 L 1158 484 L 1200 470 L 1194 454 L 1153 467 L 1142 469 L 1131 472 L 1091 483 L 1039 501 L 922 542 L 927 554 L 932 567",
    "tags": {
      "railway": "platform",
      "name:en": "Shibuya",
      "operator:en": "Tokyo Metro",
      "layer": "1"
    }
  },
  {
    "osmId": 759139125,
    "name": "Tokyo Metro Fukutoshin Line",
    "kind": "subway",
    "path": "M 1110 621 L 1066 518 L 1048 464 L 1026 379 L 1009 272 L 1006 232 L 1003 188 L 999 131 L 998 80",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Fukutoshin Line",
      "operator:en": "Tokyo Metro",
      "layer": "-5",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 759139126,
    "name": "Tokyo Metro Fukutoshin Line",
    "kind": "subway",
    "path": "M 998 80 L 995 100 L 990 130",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Fukutoshin Line",
      "operator:en": "Tokyo Metro",
      "layer": "-5",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 759139127,
    "name": "Tokyo Metro Fukutoshin Line",
    "kind": "subway",
    "path": "M 994 -4 L 998 80",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Fukutoshin Line",
      "operator:en": "Tokyo Metro",
      "layer": "-5",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 759139128,
    "name": "Tokyo Metro Fukutoshin Line",
    "kind": "subway",
    "path": "M 999 131 L 995 100 L 989 83",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Fukutoshin Line",
      "operator:en": "Tokyo Metro",
      "layer": "-5",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 759139129,
    "name": "Tokyo Metro Fukutoshin Line",
    "kind": "subway",
    "path": "M 1103 623 L 1058 523 L 1041 466 L 1019 380 L 1002 273 L 997 232 L 993 190 L 990 130 L 989 83 L 982 -6",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Fukutoshin Line",
      "operator:en": "Tokyo Metro",
      "layer": "-5",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 807370560,
    "name": "Tokyo Metro Ginza Line",
    "kind": "subway",
    "path": "M 935 571 L 1055 534 L 1099 517 L 1143 497 L 1202 472 L 1253 450",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Ginza Line",
      "operator:en": "Tokyo Metro",
      "layer": "2",
      "bridge": "viaduct"
    }
  },
  {
    "osmId": 834249968,
    "name": "Tokyo Metro Ginza Line",
    "kind": "subway",
    "path": "M 920 535 L 1031 500",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Ginza Line",
      "operator:en": "Tokyo Metro",
      "layer": "2",
      "bridge": "viaduct"
    }
  },
  {
    "osmId": 856683110,
    "name": "Tokyo Metro Fukutoshin Line",
    "kind": "subway",
    "path": "M 994 -4 L 1026 185 L 1034 230 L 1041 270 L 1061 375 L 1084 454 L 1101 506 L 1139 610",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Fukutoshin Line",
      "operator:en": "Tokyo Metro",
      "layer": "-5",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 856683111,
    "name": "Tokyo Metro Fukutoshin Line",
    "kind": "subway",
    "path": "M 1069 635 L 1025 535 L 1006 475 L 983 384 L 973 276 L 971 238 L 969 189 L 982 -6",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Fukutoshin Line",
      "operator:en": "Tokyo Metro",
      "layer": "-5",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 856723664,
    "name": "Tokyo Metro Hanzomon Line",
    "kind": "subway",
    "path": "M 3359 -937 L 3136 -671 L 3036 -571 L 2946 -502 L 2528 -211 L 2162 44 L 1949 170 L 1740 242 L 1266 332 L 1118 359 L 948 393",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Hanzomon Line",
      "operator:en": "Tokyo Metro",
      "layer": "-3",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 1100812319,
    "kind": "subway",
    "path": "M -356 892 L -323 879 L -269 859 L -208 836 L -142 814 L -127 808 L -62 786 L -58 785 L -24 773 L 10 762 L 116 728 L 138 720 L 171 707 L 194 698 L 222 688 L 365 640 L 384 635 L 398 632 L 409 631 L 444 626 L 453 625",
    "tags": {
      "railway": "subway",
      "layer": "1",
      "tunnel": "building_passage"
    }
  },
  {
    "osmId": 1100812320,
    "kind": "subway",
    "path": "M 341 657 L 393 639 L 409 634 L 425 630 L 444 626",
    "tags": {
      "railway": "subway",
      "layer": "1",
      "tunnel": "building_passage"
    }
  },
  {
    "osmId": 1349961222,
    "kind": "platform",
    "path": "M -41 735 L 6 719 L 52 703 L 95 686 L 135 668 L 174 648 L 243 609 L 262 654 L 127 701 L 86 714 L 46 726 L 3 737 L -36 746 L -41 735",
    "tags": {
      "railway": "platform"
    }
  },
  {
    "osmId": 1349961223,
    "kind": "platform",
    "path": "M -35 749 L 27 734 L 68 723 L 115 708 L 264 657 L 267 664 L 117 716 L 70 730 L 29 741 L -32 756 L -35 749",
    "tags": {
      "railway": "platform"
    }
  },
  {
    "osmId": 1349961229,
    "name": "Keio railway Inokashira Line",
    "kind": "rail",
    "path": "M -97 751 L -69 742 L -51 736 L -6 721 L 39 706 L 75 693 L 111 677 L 148 660 L 182 642 L 215 624 L 242 608",
    "tags": {
      "railway": "rail",
      "name:en": "Keio railway Inokashira Line",
      "operator:en": "Keio railway",
      "layer": "-1",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 1349961230,
    "name": "Keio railway Inokashira Line",
    "kind": "rail",
    "path": "M 264 655 L 197 678 L 163 690 L 128 702 L 89 715 L 51 726 L 11 736 L -24 744 L -59 753 L -101 762",
    "tags": {
      "railway": "rail",
      "name:en": "Keio railway Inokashira Line",
      "operator:en": "Keio railway",
      "layer": "-1",
      "tunnel": "yes"
    }
  },
  {
    "osmId": 1354860210,
    "name": "Tokyo Metro Ginza Line",
    "kind": "subway",
    "path": "M 531 622 L 455 632",
    "tags": {
      "railway": "subway",
      "name:en": "Tokyo Metro Ginza Line",
      "operator:en": "Tokyo Metro",
      "layer": "2",
      "bridge": "viaduct"
    }
  }
]
