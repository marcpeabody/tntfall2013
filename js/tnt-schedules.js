window.TNTSchedule = {}

var setupTNTSchedules = function () {
    var crosstrain = "Cross Train";

    TNTSchedule.CommonEvents = {
        "6/15": {"event": "Kick-Off event"},
    };

    TNTSchedule.HalfMarathon = {};

    TNTSchedule.FullMarathon = {
        "6/15": {event: "Season Kickoff"},

        // Week 1
        "6/17": {fin: crosstrain},
        "6/18": {fin: "3 miles", pr: "with 3 hills"},
        "6/19": {fin: crosstrain},
        "6/20": {fin: "30 minutes", pr: "5 at tempo"},
        "6/21": {pr: "3 miles EZ"},
        "6/22": {fin: "10 miles<br/> Antrim Deck 8:00am"},

        // Week 2
        "6/24": {fin: crosstrain},
        "6/25": {fin: "3 miles", pr: "with 2x800m"},
        "6/26": {fin: crosstrain},
        "6/27": {fin: "30 minutes", pr: "5 at tempo"},
        "6/28": {pr: "3 miles EZ"},
        "6/29": {fin: "11 miles<br/> Flat Place 8:00am"},

        // Week 3
        "7/1": {fin: crosstrain},
        "7/2": {fin: "30 minutes", pr: "5 at tempo"},
        "7/3": {fin: crosstrain},
        "7/4": {fin: "3 miles", pr: "at race pace", event: "Colonial Hills 5K"},
        "7/5": {pr: "3 miles EZ"},
        "7/6": {fin: "8 miles<br/> Hilly Place 8:00am"},

        // Week 4
        "7/8": {fin: crosstrain},
        "7/9": {fin: "4 miles", pr: "with 4x800m"},
        "7/10": {fin: crosstrain},
        "7/11": {fin: "35 minutes", pr: "6 at tempo"},
        "7/12": {pr: "3 miles EZ"},
        "7/13": {fin: "13 miles<br/> Flat Place 8:00am"},

        // Week 5
        "7/15": {fin: crosstrain},
        "7/16": {fin: "35 minutes", pr: "6 at tempo"},
        "7/17": {fin: crosstrain},
        "7/18": {fin: "3 miles", pr: "at race pace"},
        "7/19": {pr: "3 miles EZ"},
        "7/20": {fin: "14 miles<br/> Flat Place 8:00am"},

        // Week 6
        "7/22": {fin: crosstrain},
        "7/23": {fin: "4 miles", pr: "with 4 hills"},
        "7/24": {fin: crosstrain},
        "7/25": {fin: "35 minutes", pr: "7 at tempo"},
        "7/26": {pr: "4 miles EZ"},
        "7/27": {fin: "10 miles<br/> Hilly Place 8:00am"},

        // Week 7
        "7/29": {fin: crosstrain},
        "7/30": {fin: "5 miles", pr: "with 5x800m"},
        "7/31": {fin: crosstrain},
        "8/1": {fin: "40 minutes", pr: "8 at tempo"},
        "8/2": {pr: "4 miles EZ"},
        "8/3": {fin: "16 miles<br/> Flat Place 8:00am"},

        // Week 8
        "8/5": {fin: crosstrain},
        "8/6": {fin: "40 minutes", pr: "8 at tempo"},
        "8/7": {fin: crosstrain},
        "8/8": {fin: "3 miles", pr: "at race pace"},
        "8/9": {pr: "4 miles EZ"},
        "8/10": {fin: "17 miles<br/> Flat Place 8:00am"},

        // Week 9
        "8/12": {fin: crosstrain},
        "8/13": {fin: "6 miles", pr: "with 6x800m"},
        "8/14": {fin: crosstrain},
        "8/15": {fin: "4 miles", pr: "at race pace"},
        "8/16": {pr: "4 miles EZ"},
        "8/17": {fin: "15 miles<br/> Hilly Place 8:00am"},

        // Week 10
        "8/19": {fin: crosstrain},
        "8/20": {fin: "6 miles", pr: "with 6 hills"},
        "8/21": {fin: crosstrain},
        "8/22": {fin: "3 miles", pr: "at race pace"},
        "8/23": {pr: "4 miles EZ"},
        "8/24": {pr: "2 miles EZ<br/>Race Tomorrow!"},
        "8/25": {fin: "Half Marathon Trial", event: "Emerald City Half"},

        // Week 11
        "8/26": {fin: "Rest or easy CT"},
        "8/27": {fin: "45 minutes", pr: "9 at tempo"},
        "8/28": {fin: crosstrain},
        "8/29": {fin: "4 miles", pr: "at race pace"},
        "8/30": {pr: "4 miles EZ"},
        "8/31": {fin: "16 miles<br/> Hilly Place 8:00am"},

        // Week 12
        "9/2": {fin: crosstrain},
        "9/3": {fin: "7 miles", pr: "with 7x800m"},
        "9/4": {fin: crosstrain},
        "9/5": {fin: "45 minutes", pr: "10 at tempo"},
        "9/6": {pr: "4 miles EZ"},
        "9/7": {fin: "19 miles<br/> Flat Place 8:00am"},

        // Week 13
        "9/9": {fin: crosstrain},
        "9/10": {fin: "7 miles", pr: "with 7 hills"},
        "9/11": {fin: crosstrain},
        "9/12": {fin: "45 minutes", pr: "10 at tempo"},
        "9/13": {pr: "4 miles EZ"},
        "9/14": {fin: "20 miles<br/> Flat Place 8:00am"},

        // Week 14
        "9/16": {fin: crosstrain},
        "9/17": {fin: "45 minutes", pr: "10 at tempo"},
        "9/18": {fin: crosstrain},
        "9/19": {fin: "5 miles", pr: "at race pace"},
        "9/20": {pr: "4 miles EZ"},
        "9/21": {fin: "14 miles<br/> Hilly Place 8:00am"},

        // Week 15
        "9/23": {fin: crosstrain},
        "9/24": {fin: "8 miles", pr: "with 8x800m"},
        "9/25": {fin: crosstrain},
        "9/26": {fin: "40 minutes", pr: "8 at tempo"},
        "9/27": {pr: "4 miles EZ"},
        "9/28": {fin: "20 miles<br/> Flat Place 8:00am"},

        // Week 16
        "9/30": {fin: crosstrain},
        "10/1": {fin: "8 miles", pr: "with 6 hills"},
        "10/2": {fin: crosstrain},
        "10/3": {fin: "30 minutes", pr: "8 at tempo"},
        "10/4": {pr: "4 miles EZ"},
        "10/5": {fin: "14 miles<br/> Hilly Place 8:00am"},

        // Week 17
        "10/7": {fin: crosstrain},
        "10/8": {fin: "8 miles", pr: "with 6 hills"},
        "10/9": {fin: crosstrain},
        "10/10": {fin: "30 minutes", pr: "8 at tempo"},
        "10/11": {pr: "4 miles EZ"},
        "10/12": {fin: "8 miles<br/> Hilly Place 8:00am"},

        // Week 18
        "10/14": {fin: crosstrain},
        "10/15": {fin: "4 miles", pr: "with 4x400m"},
        "10/16": {fin: crosstrain},
        "10/19": {pr: "3 miles EZ"},
        "10/20": {fin: "Columbus Marathon"},
    };

};
setupTNTSchedules();