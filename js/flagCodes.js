var flagCodes = {
	"Afghanistan":"Af",
	"Åland Islands":"Ax",
	"Albania":"Al",
	"Algeria":"Dz",
	"American Samoa":"As",
	"Andorra":"Ad",
	"Angola":"Ao",
	"Anguilla":"Ai",
	"Antarctica":"Aq",
	"Antigua and Barbuda":"Ag",
	"Argentina":"Ar",
	"Armenia":"Am",
	"Aruba":"Aw",
	"Australia":"Au",
	"Austria":"at",
	"Azerbaijan":"Az",
	"Bahamas":"Bs",
	"Bahrain":"Bh",
	"Bangladesh":"Bd",
	"Barbados":"Bb",
	"Belarus":"by",
	"Belgium":"Be",
	"Belize":"Bz",
	"Benin":"Bj",
	"Bermuda":"Bm",
	"Bhutan":"Bt",
	"Bolivia, Plurinational State of":"Bo",
	"Bonaire, Saint Eustatius and Saba":"Bq",
	"Bosnia and Herzegovina":"Ba",
	"Botswana":"Bw",
	"Bouvet Island":"Bv",
	"Brazil":"Br",
	"British Indian Ocean Territory":"Io",
	"Brunei Darussalam":"Bn",
	"Bulgaria":"Bg",
	"Burkina Faso":"Bf",
	"Burundi":"Bi",
	"Cambodia":"Kh",
	"Cameroon":"Cm",
	"Canada":"Ca",
	"Cape Verde":"Cv",
	"Cayman Islands":"Ky",
	"Central African Republic":"Cf",
	"Chad":"Td",
	"Chile":"Cl",
	"China":"Cn",
	"Christmas Island":"Cx",
	"Cocos (Keeling) Islands":"Cc",
	"Colombia":"Co",
	"Comoros":"Km",
	"Congo":"Cg",
	"Congo, the Democratic Republic of the":"Cd",
	"Cook Islands":"Ck",
	"Costa Rica":"Cr",
	"Côte D'ivoire":"Ci",
	"Croatia":"Hr",
	"Cuba":"Cu",
	"Curaçao":"Cw",
	"Cyprus":"Cy",
	"Czech Republic":"Cz",
	"Denmark":"Dk",
	"Djibouti":"Dj",
	"Dominica":"Dm",
	"Dominican Republic":"Do",
	"Ecuador":"Ec",
	"Egypt":"Eg",
	"El Salvador":"Sv",
	"Equatorial Guinea":"Gq",
	"Eritrea":"Er",
	"Estonia":"Ee",
	"Ethiopia":"Et",
	"Falkland Islands (Malvinas)":"Fk",
	"Faroe Islands":"Fo",
	"Fiji":"Fj",
	"Finland":"Fi",
	"France":"Fr",
	"French Guiana":"Gf",
	"French Polynesia":"Pf",
	"French Southern Territories":"Tf",
	"Gabon":"Ga",
	"Gambia":"Gm",
	"Georgia":"Ge",
	"Germany":"De",
	"Ghana":"Gh",
	"Gibraltar":"Gi",
	"Greece":"Gr",
	"Greenland":"Gl",
	"Grenada":"Gd",
	"Guadeloupe":"Gp",
	"Guam":"Gu",
	"Guatemala":"Gt",
	"Guernsey":"Gg",
	"Guinea":"Gn",
	"Guinea-Bissau":"Gw",
	"Guyana":"Gy",
	"Haiti":"Ht",
	"Heard Island and Mcdonald Islands":"Hm",
	"Holy See (Vatican City State)":"Va",
	"Honduras":"Hn",
	"Hong Kong":"Hk",
	"Hungary":"Hu",
	"Iceland":"Is",
	"India":"in",
	"Indonesia":"Id",
	"Iran":"Ir",
	"Iraq":"Iq",
	"Ireland":"Ie",
	"Isle of Man":"Im",
	"Israel":"Il",
	"Italy":"It",
	"Jamaica":"Jm",
	"Japan":"Jp",
	"Jersey":"Je",
	"Jordan":"Jo",
	"Kazakhstan":"Kz",
	"Kenya":"Ke",
	"Kiribati":"Ki",
	"Korea, Democratic People's Republic of":"Kp",
	"South Korea":"Kr",
	"Kuwait":"Kw",
	"Kyrgyzstan":"Kg",
	"Lao People's Democratic Republic":"La",
	"Latvia":"Lv",
	"Lebanon":"Lb",
	"Lesotho":"Ls",
	"Liberia":"Lr",
	"Libyan Arab Jamahiriya":"Ly",
	"Liechtenstein":"Li",
	"Lithuania":"Lt",
	"Luxembourg":"Lu",
	"Macao":"Mo",
	"Macedonia, the Former Yugoslav Republic of":"Mk",
	"Madagascar":"Mg",
	"Malawi":"Mw",
	"Malaysia":"My",
	"Maldives":"Mv",
	"Mali":"Ml",
	"Malta":"Mt",
	"Marshall Islands":"Mh",
	"Martinique":"Mq",
	"Mauritania":"Mr",
	"Mauritius":"Mu",
	"Mayotte":"Yt",
	"Mexico":"Mx",
	"Micronesia, Federated States of":"Fm",
	"Moldova, Republic of":"Md",
	"Monaco":"Mc",
	"Mongolia":"Mn",
	"Montenegro":"Me",
	"Montserrat":"Ms",
	"Morocco":"Ma",
	"Mozambique":"Mz",
	"Myanmar":"Mm",
	"Namibia":"Na",
	"Nauru":"Nr",
	"Nepal":"Np",
	"Netherlands":"Nl",
	"New Caledonia":"Nc",
	"New Zealand":"Nz",
	"Nicaragua":"Ni",
	"Niger":"Ne",
	"Nigeria":"Ng",
	"Niue":"Nu",
	"Norfolk Island":"Nf",
	"Northern Mariana Islands":"Mp",
	"Norway":"No",
	"Oman":"Om",
	"Pakistan":"Pk",
	"Palau":"Pw",
	"Palestinian Territory, Occupied":"Ps",
	"Panama":"Pa",
	"Papua New Guinea":"Pg",
	"Paraguay":"Py",
	"Peru":"Pe",
	"Philippines":"Ph",
	"Pitcairn":"Pn",
	"Poland":"Pl",
	"Portugal":"Pt",
	"Puerto Rico":"Pr",
	"Qatar":"Qa",
	"Réunion":"Re",
	"Romania":"Ro",
	"Russian Federation":"Ru",
	"Rwanda":"Rw",
	"Saint Barthélemy":"Bl",
	"Saint Helena, Ascension and Tristan Da Cunha":"Sh",
	"Saint Kitts and Nevis":"Kn",
	"Saint Lucia":"Lc",
	"Saint Martin (French Part)":"Mf",
	"Saint Pierre and Miquelon":"Pm",
	"Saint Vincent and the Grenadines":"Vc",
	"Samoa":"Ws",
	"San Marino":"Sm",
	"Sao Tome and Principe":"St",
	"Saudi Arabia":"Sa",
	"Senegal":"Sn",
	"Serbia":"Rs",
	"Seychelles":"Sc",
	"Sierra Leone":"Sl",
	"Singapore":"Sg",
	"Sint Maarten (Dutch Part)":"Sx",
	"Slovakia":"Sk",
	"Slovenia":"Si",
	"Solomon Islands":"Sb",
	"Somalia":"So",
	"South Africa":"Za",
	"South Georgia and the South Sandwich Islands":"Gs",
	"Spain":"Es",
	"Sri Lanka":"Lk",
	"Sudan":"Sd",
	"Suriname":"Sr",
	"Svalbard and Jan Mayen":"Sj",
	"Swaziland":"Sz",
	"Sweden":"Se",
	"Switzerland":"Ch",
	"Syrian Arab Republic":"Sy",
	"Taiwan, Province of China":"Tw",
	"Tajikistan":"Tj",
	"Tanzania, United Republic of":"Tz",
	"Thailand":"Th",
	"Timor-Leste":"Tl",
	"Togo":"Tg",
	"Tokelau":"Tk",
	"Tonga":"to",
	"Trinidad and Tobago":"Tt",
	"Tunisia":"Tn",
	"Turkey":"Tr",
	"Turkmenistan":"Tm",
	"Turks and Caicos Islands":"Tc",
	"Tuvalu":"Tv",
	"Uganda":"Ug",
	"Ukraine":"Ua",
	"United Arab Emirates":"Ae",
	"England":"Gb",
	"USA":"Us",
	"United States Minor Outlying Islands":"Um",
	"Uruguay":"Uy",
	"Uzbekistan":"Uz",
	"Vanuatu":"Vu",
	"Venezuela, Bolivarian Republic of":"Ve",
	"Viet Nam":"Vn",
	"Virgin Islands, British":"Vg",
	"Virgin Islands, U.S.":"Vi",
	"Wallis and Futuna":"Wf",
	"Western Sahara":"Eh",
	"Yemen":"Ye",
	"Zambia":"Zm",
	"Zimbabwe":"Zw"
};

var colorPalette = {
	"Algeria":"#1F6401",
	"Australia":"#3F32B0",
	"Austria":"#DF49B7",
	"Belgium":"#8A8A00",
	"Brazil":"#BDEE1C",
	"Canada":"#E71CEE",
	"China":"#EBCE14",
	"Denmark":"#FF00C4",
	"France":"#3448FC",
	"Germany":"#F3811C",
	"Greece":"#1CDEF3",
	"Hong Kong":"#E4D67D",
	"India":"#FFBD58",
	"Indonesia":"#890005",
	"Iran":"#0E6917",
	"Iraq":"#113715",
	"Ireland":"#FF7700",
	"Israel":"#0080FF",
	"Italy":"#3ECD01",
	"South Korea":"#648CCC",
	"Netherlands":"#B34E00",
	"Philippines":"#FD84FD",
	"Poland":"#766876",
	"Portugal":"#009933",
	"Spain":"#B95B09",
	"Sweden":"#0E9451",
	"Switzerland":"#724D56",
	"Turkey":"#B80C00",
	"England":"#862D86",
	"USA":"#000000",
};

var countryPopulation = {
	"Algeria":43851044,
	"Australia":25499884,
	"Austria":9006398,
	"Belgium":11589623,
	"Brazil":212559417,
	"Canada":37742154,
	"China":1439323776,
	"Denmark":5792202,
	"France":65273511,
	"Germany":83783942,
	"Greece":10423054,
	"Hong Kong":7496981,
	"India":1380004385,
	"Indonesia":273523615,
	"Iran":83992949,
	"Iraq":40222493,
	"Ireland":4937786,
	"Israel":8655535,
	"Italy":60461826,
	"South Korea":51269185,
	"Netherlands":17134872,
	"Philippines":109581078,
	"Poland":37846611,
	"Portugal":10196709,
	"Spain":46754778,
	"Sweden":10099265,
	"Switzerland":8654622,
	"Turkey":84339067,
	"England":67886011,
	"USA":331002651,
};
