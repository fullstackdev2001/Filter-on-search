import React, { useState } from 'react'

const Search = () => {
    const [searchEmail, setSearchEmail] = useState('')
    const userData = [{
        "id": 1,
        "first_name": "Early",
        "last_name": "Mattia",
        "email": "emattia0@netlog.com",
        "gender": "Male",
        "city": "Lobos"
      }, {
        "id": 2,
        "first_name": "Veronica",
        "last_name": "Smaleman",
        "email": "vsmaleman1@geocities.jp",
        "gender": "Female",
        "city": "Atalaia"
      }, {
        "id": 3,
        "first_name": "Emmeline",
        "last_name": "Micheau",
        "email": "emicheau2@ucsd.edu",
        "gender": "Female",
        "city": "Qiandong"
      }, {
        "id": 4,
        "first_name": "Creigh",
        "last_name": "Ahrenius",
        "email": "cahrenius3@army.mil",
        "gender": "Male",
        "city": "Nantai"
      }, {
        "id": 5,
        "first_name": "Darryl",
        "last_name": "Norquoy",
        "email": "dnorquoy4@un.org",
        "gender": "Female",
        "city": "Campo Belo"
      }, {
        "id": 6,
        "first_name": "Adi",
        "last_name": "Minithorpe",
        "email": "aminithorpe5@wix.com",
        "gender": "Female",
        "city": "Qinjiang"
      }, {
        "id": 7,
        "first_name": "Launce",
        "last_name": "Goodhay",
        "email": "lgoodhay6@topsy.com",
        "gender": "Non-binary",
        "city": "Sawoi"
      }, {
        "id": 8,
        "first_name": "Huntley",
        "last_name": "Domnin",
        "email": "hdomnin7@bloglovin.com",
        "gender": "Male",
        "city": "Abangay"
      }, {
        "id": 9,
        "first_name": "Lewiss",
        "last_name": "Nudds",
        "email": "lnudds8@bbc.co.uk",
        "gender": "Male",
        "city": "Huangshi"
      }, {
        "id": 10,
        "first_name": "Ellis",
        "last_name": "Pallister",
        "email": "epallister9@sogou.com",
        "gender": "Male",
        "city": "Tapacocha"
      }, {
        "id": 11,
        "first_name": "Marney",
        "last_name": "Nanelli",
        "email": "mnanellia@fotki.com",
        "gender": "Female",
        "city": "Puteaux"
      }, {
        "id": 12,
        "first_name": "Bonnie",
        "last_name": "Mithun",
        "email": "bmithunb@alibaba.com",
        "gender": "Female",
        "city": "Bailieborough"
      }, {
        "id": 13,
        "first_name": "Claiborne",
        "last_name": "Degenhardt",
        "email": "cdegenhardtc@hibu.com",
        "gender": "Male",
        "city": "Shenshan"
      }, {
        "id": 14,
        "first_name": "Osgood",
        "last_name": "Earingey",
        "email": "oearingeyd@marriott.com",
        "gender": "Polygender",
        "city": "Deauville"
      }, {
        "id": 15,
        "first_name": "Brietta",
        "last_name": "Loades",
        "email": "bloadese@nifty.com",
        "gender": "Non-binary",
        "city": "Embajador Martini"
      }, {
        "id": 16,
        "first_name": "Brady",
        "last_name": "Keech",
        "email": "bkeechf@myspace.com",
        "gender": "Male",
        "city": "Kolambugan"
      }, {
        "id": 17,
        "first_name": "Josee",
        "last_name": "Lenney",
        "email": "jlenneyg@newyorker.com",
        "gender": "Polygender",
        "city": "Paicol"
      }, {
        "id": 18,
        "first_name": "Madge",
        "last_name": "Delany",
        "email": "mdelanyh@flickr.com",
        "gender": "Female",
        "city": "Dasi"
      }, {
        "id": 19,
        "first_name": "Conny",
        "last_name": "Arnauduc",
        "email": "carnauduci@un.org",
        "gender": "Male",
        "city": "Volodarka"
      }, {
        "id": 20,
        "first_name": "Lusa",
        "last_name": "McGilvra",
        "email": "lmcgilvraj@slate.com",
        "gender": "Female",
        "city": "Cojutepeque"
      }, {
        "id": 21,
        "first_name": "Wyndham",
        "last_name": "Kinvan",
        "email": "wkinvank@i2i.jp",
        "gender": "Male",
        "city": "Xujiahe"
      }, {
        "id": 22,
        "first_name": "Ravi",
        "last_name": "Thackray",
        "email": "rthackrayl@hostgator.com",
        "gender": "Male",
        "city": "Pringgabaya"
      }, {
        "id": 23,
        "first_name": "Thain",
        "last_name": "Bodham",
        "email": "tbodhamm@amazon.co.jp",
        "gender": "Male",
        "city": "Bujanovac"
      }, {
        "id": 24,
        "first_name": "Abba",
        "last_name": "Suart",
        "email": "asuartn@bluehost.com",
        "gender": "Male",
        "city": "Biny Selo"
      }, {
        "id": 25,
        "first_name": "Benito",
        "last_name": "Nesby",
        "email": "bnesbyo@microsoft.com",
        "gender": "Male",
        "city": "Pashkovskiy"
      }, {
        "id": 26,
        "first_name": "Zerk",
        "last_name": "Stooders",
        "email": "zstoodersp@arstechnica.com",
        "gender": "Male",
        "city": "Naifalo"
      }, {
        "id": 27,
        "first_name": "Esmaria",
        "last_name": "Gostling",
        "email": "egostlingq@bandcamp.com",
        "gender": "Female",
        "city": "Shuangmiaojie"
      }, {
        "id": 28,
        "first_name": "Louisa",
        "last_name": "Bikker",
        "email": "lbikkerr@g.co",
        "gender": "Female",
        "city": "Sanzao"
      }, {
        "id": 29,
        "first_name": "Gwen",
        "last_name": "Stiger",
        "email": "gstigers@google.es",
        "gender": "Female",
        "city": "Baní"
      }, {
        "id": 30,
        "first_name": "Cristi",
        "last_name": "Bernardeau",
        "email": "cbernardeaut@privacy.gov.au",
        "gender": "Female",
        "city": "Horní Suchá"
      }, {
        "id": 31,
        "first_name": "Ursala",
        "last_name": "Stidson",
        "email": "ustidsonu@samsung.com",
        "gender": "Female",
        "city": "Penglai"
      }, {
        "id": 32,
        "first_name": "Eleanora",
        "last_name": "Harrie",
        "email": "eharriev@dedecms.com",
        "gender": "Female",
        "city": "Taihe"
      }, {
        "id": 33,
        "first_name": "Ofilia",
        "last_name": "Dax",
        "email": "odaxw@shutterfly.com",
        "gender": "Female",
        "city": "Manassas"
      }, {
        "id": 34,
        "first_name": "Dougie",
        "last_name": "Levee",
        "email": "dleveex@indiatimes.com",
        "gender": "Male",
        "city": "Gangtun"
      }, {
        "id": 35,
        "first_name": "Aurlie",
        "last_name": "Brazener",
        "email": "abrazenery@cargocollective.com",
        "gender": "Female",
        "city": "Pitangui"
      }, {
        "id": 36,
        "first_name": "Edlin",
        "last_name": "Corradini",
        "email": "ecorradiniz@de.vu",
        "gender": "Male",
        "city": "São Mateus do Maranhão"
      }, {
        "id": 37,
        "first_name": "Stanford",
        "last_name": "Gadeaux",
        "email": "sgadeaux10@skyrock.com",
        "gender": "Male",
        "city": "Shaydon"
      }, {
        "id": 38,
        "first_name": "Rafferty",
        "last_name": "Lynch",
        "email": "rlynch11@tiny.cc",
        "gender": "Male",
        "city": "Yulin"
      }, {
        "id": 39,
        "first_name": "Tristam",
        "last_name": "Aslum",
        "email": "taslum12@soup.io",
        "gender": "Male",
        "city": "Bobon"
      }, {
        "id": 40,
        "first_name": "Clark",
        "last_name": "Barbour",
        "email": "cbarbour13@mozilla.org",
        "gender": "Male",
        "city": "Kremenets’"
      }, {
        "id": 41,
        "first_name": "Gracia",
        "last_name": "Avent",
        "email": "gavent14@reference.com",
        "gender": "Female",
        "city": "Angoulême"
      }, {
        "id": 42,
        "first_name": "Pepita",
        "last_name": "Izat",
        "email": "pizat15@issuu.com",
        "gender": "Female",
        "city": "Changping"
      }, {
        "id": 43,
        "first_name": "Jonie",
        "last_name": "Rediers",
        "email": "jrediers16@linkedin.com",
        "gender": "Female",
        "city": "Soio"
      }, {
        "id": 44,
        "first_name": "Elbert",
        "last_name": "Becerra",
        "email": "ebecerra17@51.la",
        "gender": "Male",
        "city": "Quinta do Sobrado"
      }, {
        "id": 45,
        "first_name": "Lisabeth",
        "last_name": "Thomasen",
        "email": "lthomasen18@squarespace.com",
        "gender": "Female",
        "city": "Rymättylä"
      }, {
        "id": 46,
        "first_name": "Monica",
        "last_name": "Callam",
        "email": "mcallam19@ocn.ne.jp",
        "gender": "Female",
        "city": "Cache Creek"
      }, {
        "id": 47,
        "first_name": "Sacha",
        "last_name": "Mulloch",
        "email": "smulloch1a@people.com.cn",
        "gender": "Female",
        "city": "Banjaranyar"
      }, {
        "id": 48,
        "first_name": "Gavra",
        "last_name": "Cadwell",
        "email": "gcadwell1b@ifeng.com",
        "gender": "Female",
        "city": "Haz-Zebbug"
      }, {
        "id": 49,
        "first_name": "Wallache",
        "last_name": "Strippling",
        "email": "wstrippling1c@ebay.co.uk",
        "gender": "Male",
        "city": "Guogan"
      }, {
        "id": 50,
        "first_name": "Johnathan",
        "last_name": "Pershouse",
        "email": "jpershouse1d@discovery.com",
        "gender": "Bigender",
        "city": "Philadelphia"
      }, {
        "id": 51,
        "first_name": "Almira",
        "last_name": "Appleton",
        "email": "aappleton1e@virginia.edu",
        "gender": "Female",
        "city": "Pantai Ceuremen"
      }, {
        "id": 52,
        "first_name": "Gail",
        "last_name": "Almack",
        "email": "galmack1f@sun.com",
        "gender": "Male",
        "city": "Pingtang"
      }, {
        "id": 53,
        "first_name": "Lin",
        "last_name": "Edington",
        "email": "ledington1g@toplist.cz",
        "gender": "Male",
        "city": "Gjinoc"
      }, {
        "id": 54,
        "first_name": "Tommie",
        "last_name": "Quirk",
        "email": "tquirk1h@technorati.com",
        "gender": "Male",
        "city": "São Miguel"
      }, {
        "id": 55,
        "first_name": "Bonnee",
        "last_name": "Albisser",
        "email": "balbisser1i@flickr.com",
        "gender": "Female",
        "city": "San Pedro"
      }, {
        "id": 56,
        "first_name": "Cliff",
        "last_name": "Yoxen",
        "email": "cyoxen1j@mac.com",
        "gender": "Polygender",
        "city": "Krajanpagowan"
      }, {
        "id": 57,
        "first_name": "Fremont",
        "last_name": "Stayt",
        "email": "fstayt1k@archive.org",
        "gender": "Male",
        "city": "Votkinsk"
      }, {
        "id": 58,
        "first_name": "Mufi",
        "last_name": "Manvelle",
        "email": "mmanvelle1l@yolasite.com",
        "gender": "Female",
        "city": "Ermelo"
      }, {
        "id": 59,
        "first_name": "Nell",
        "last_name": "Shekle",
        "email": "nshekle1m@google.co.jp",
        "gender": "Female",
        "city": "Edinburgh"
      }, {
        "id": 60,
        "first_name": "Daffi",
        "last_name": "Ogers",
        "email": "dogers1n@businesswire.com",
        "gender": "Female",
        "city": "Chicago"
      }, {
        "id": 61,
        "first_name": "Cazzie",
        "last_name": "Nizard",
        "email": "cnizard1o@sina.com.cn",
        "gender": "Male",
        "city": "Delft"
      }, {
        "id": 62,
        "first_name": "Carver",
        "last_name": "Faltin",
        "email": "cfaltin1p@stanford.edu",
        "gender": "Male",
        "city": "Longzui"
      }, {
        "id": 63,
        "first_name": "Arleyne",
        "last_name": "Rollin",
        "email": "arollin1q@ucoz.ru",
        "gender": "Female",
        "city": "Val-de-Reuil"
      }, {
        "id": 64,
        "first_name": "Merell",
        "last_name": "Brockton",
        "email": "mbrockton1r@wix.com",
        "gender": "Male",
        "city": "Ilmajoki"
      }, {
        "id": 65,
        "first_name": "Frazer",
        "last_name": "Griswood",
        "email": "fgriswood1s@360.cn",
        "gender": "Male",
        "city": "Ganné Tiqwa"
      }, {
        "id": 66,
        "first_name": "Devon",
        "last_name": "Heam",
        "email": "dheam1t@theglobeandmail.com",
        "gender": "Female",
        "city": "Andkhōy"
      }, {
        "id": 67,
        "first_name": "Thornton",
        "last_name": "Kiellor",
        "email": "tkiellor1u@moonfruit.com",
        "gender": "Male",
        "city": "Bryansk"
      }, {
        "id": 68,
        "first_name": "Valera",
        "last_name": "Gwillyam",
        "email": "vgwillyam1v@wired.com",
        "gender": "Female",
        "city": "Ferreñafe"
      }, {
        "id": 69,
        "first_name": "Ethan",
        "last_name": "Sworn",
        "email": "esworn1w@biglobe.ne.jp",
        "gender": "Male",
        "city": "Darmasari"
      }, {
        "id": 70,
        "first_name": "Modestine",
        "last_name": "Oxbe",
        "email": "moxbe1x@bloglovin.com",
        "gender": "Female",
        "city": "Alvarães"
      }, {
        "id": 71,
        "first_name": "Odell",
        "last_name": "Hebblewhite",
        "email": "ohebblewhite1y@telegraph.co.uk",
        "gender": "Male",
        "city": "Bandar ‘Abbās"
      }, {
        "id": 72,
        "first_name": "Myca",
        "last_name": "Ogilvie",
        "email": "mogilvie1z@nhs.uk",
        "gender": "Male",
        "city": "Mbandaka"
      }, {
        "id": 73,
        "first_name": "Andromache",
        "last_name": "Coppens",
        "email": "acoppens20@vinaora.com",
        "gender": "Female",
        "city": "Garden Grove"
      }, {
        "id": 74,
        "first_name": "Jeanette",
        "last_name": "Brauns",
        "email": "jbrauns21@scientificamerican.com",
        "gender": "Female",
        "city": "Monkstown"
      }, {
        "id": 75,
        "first_name": "Cullin",
        "last_name": "Calliss",
        "email": "ccalliss22@berkeley.edu",
        "gender": "Genderqueer",
        "city": "Tambilil"
      }, {
        "id": 76,
        "first_name": "Dave",
        "last_name": "Torbeck",
        "email": "dtorbeck23@smh.com.au",
        "gender": "Male",
        "city": "Datian"
      }, {
        "id": 77,
        "first_name": "Sisely",
        "last_name": "Goodfellow",
        "email": "sgoodfellow24@seattletimes.com",
        "gender": "Female",
        "city": "Santiago de María"
      }, {
        "id": 78,
        "first_name": "Englebert",
        "last_name": "Hacquoil",
        "email": "ehacquoil25@wikipedia.org",
        "gender": "Male",
        "city": "Szlachta"
      }, {
        "id": 79,
        "first_name": "Bernhard",
        "last_name": "Vigurs",
        "email": "bvigurs26@blogs.com",
        "gender": "Male",
        "city": "Wufeng"
      }, {
        "id": 80,
        "first_name": "Evvie",
        "last_name": "Wudeland",
        "email": "ewudeland27@abc.net.au",
        "gender": "Female",
        "city": "Shemursha"
      }, {
        "id": 81,
        "first_name": "Berky",
        "last_name": "Lendrem",
        "email": "blendrem28@reference.com",
        "gender": "Male",
        "city": "Tournon-sur-Rhône"
      }, {
        "id": 82,
        "first_name": "Nollie",
        "last_name": "Bottom",
        "email": "nbottom29@hc360.com",
        "gender": "Female",
        "city": "Yeysk"
      }, {
        "id": 83,
        "first_name": "Ford",
        "last_name": "Rothwell",
        "email": "frothwell2a@liveinternet.ru",
        "gender": "Male",
        "city": "Ajoyani"
      }, {
        "id": 84,
        "first_name": "Pascale",
        "last_name": "Marner",
        "email": "pmarner2b@cbsnews.com",
        "gender": "Male",
        "city": "Kuching"
      }, {
        "id": 85,
        "first_name": "Den",
        "last_name": "Wilkennson",
        "email": "dwilkennson2c@github.com",
        "gender": "Male",
        "city": "Naas"
      }, {
        "id": 86,
        "first_name": "Guntar",
        "last_name": "Beagin",
        "email": "gbeagin2d@cnet.com",
        "gender": "Male",
        "city": "Wuxia"
      }, {
        "id": 87,
        "first_name": "Fransisco",
        "last_name": "Duke",
        "email": "fduke2e@cornell.edu",
        "gender": "Non-binary",
        "city": "Edosaki"
      }, {
        "id": 88,
        "first_name": "Teena",
        "last_name": "Crotty",
        "email": "tcrotty2f@is.gd",
        "gender": "Female",
        "city": "Hongshi"
      }, {
        "id": 89,
        "first_name": "Alwin",
        "last_name": "Casella",
        "email": "acasella2g@symantec.com",
        "gender": "Male",
        "city": "Joševa"
      }, {
        "id": 90,
        "first_name": "Kalil",
        "last_name": "Wimbury",
        "email": "kwimbury2h@cdbaby.com",
        "gender": "Male",
        "city": "Lingion"
      }, {
        "id": 91,
        "first_name": "Jean",
        "last_name": "Burris",
        "email": "jburris2i@infoseek.co.jp",
        "gender": "Bigender",
        "city": "Assis"
      }, {
        "id": 92,
        "first_name": "Anetta",
        "last_name": "Patise",
        "email": "apatise2j@smh.com.au",
        "gender": "Female",
        "city": "Nalsian Norte"
      }, {
        "id": 93,
        "first_name": "Johnny",
        "last_name": "Benford",
        "email": "jbenford2k@wunderground.com",
        "gender": "Male",
        "city": "Pukou"
      }, {
        "id": 94,
        "first_name": "Bettina",
        "last_name": "Gurden",
        "email": "bgurden2l@about.me",
        "gender": "Female",
        "city": "Itu"
      }, {
        "id": 95,
        "first_name": "Maggee",
        "last_name": "Greenhaugh",
        "email": "mgreenhaugh2m@yellowpages.com",
        "gender": "Female",
        "city": "Nizhniy Lomov"
      }, {
        "id": 96,
        "first_name": "Corissa",
        "last_name": "Hannabuss",
        "email": "channabuss2n@pagesperso-orange.fr",
        "gender": "Female",
        "city": "Sleman"
      }, {
        "id": 97,
        "first_name": "Doug",
        "last_name": "Abrey",
        "email": "dabrey2o@wp.com",
        "gender": "Male",
        "city": "Stěbořice"
      }, {
        "id": 98,
        "first_name": "Eduardo",
        "last_name": "Jermy",
        "email": "ejermy2p@chicagotribune.com",
        "gender": "Polygender",
        "city": "Saint-Denis"
      }, {
        "id": 99,
        "first_name": "Sadye",
        "last_name": "Wethered",
        "email": "swethered2q@bbc.co.uk",
        "gender": "Female",
        "city": "Bongued"
      }, {
        "id": 100,
        "first_name": "Garvey",
        "last_name": "Clowney",
        "email": "gclowney2r@mashable.com",
        "gender": "Male",
        "city": "Loangmaka"
      }
    ]

    const filteredUsers = userData.filter(user => user.email.startsWith(searchEmail))
  return (
    <div className=' flex flex-col justify-center items-center w-screen min-h-screen bg-gray-100'>

        <div>
            <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-[748px]"></label>
            <div class="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </div>
            <input type="text" value={searchEmail} onChange={e => setSearchEmail(e.target.value)} id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for mail" />
            </div>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            First name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Last name
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            City
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { filteredUsers.map(user => (<tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            {user.first_name}
                        </th>
                        <td class="px-6 py-4">
                        {user.last_name}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {user.email}
                        </td>
                        <td class="px-6 py-4">
                            {user.city}
                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>

            
    </div>
  )
}

export default Search