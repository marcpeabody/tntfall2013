window.TNTSchedule = {}

var setupTNTSchedules = function () {
    var crosstrain = "Cross Train",
        ctOptAero = "(optional) Cross Train Aerobic",
        ctStrength = "Cross Train Strength",
        rest = "Rest";

    TNTSchedule.CommonColumbusEvents = {
        "8/22": {deadline: "Recommitment Forms Due"},
        "10/17": {deadline: "Final Balance Due"},
        "10/15": {deadline: "Mind over Marathon Meeting<br/>LLS Office"},
        "10/19": {deadline: "Inspiration Dinner"},
        "10/21": {fin: "EAT CAKE <img src='https://si0.twimg.com/profile_images/378800000139246482/d8f6127ab8ced63c801d051a33fbf696_normal.png'/>"}
    };
    TNTSchedule.CommonSavannahEvents = {
        "8/22": {deadline: "Recommitment Forms Due"},
        "8/22": {deadline: "Recommitment Forms Due"},
        "11/8": {deadline: "Inspiration Dinner"}
    };

    TNTSchedule.CommonEvents = {

        "7/4": {fin: "5K (3.1 miles)", event: "Pick a 5K race for fun!"},
        "7/10": {event: "Road Runner Gear Clinic 6-8pm"},

        "6/15": {deadline: "Season Kickoff<br/> Park of Roses 9:00am"},
        "6/22": {event: "Group Run<br/> Antrim Deck 8:00am"}, // 1
        "6/29": {event: "Group Run<br/> Antrim Deck 8:00am"}, // 2
        "7/6": {event: "Group Run<br/> Antrim Deck <b>7:00am</b>"}, //3
        "7/13": {event: "Group Run<br/> Sharon Woods 8:00am"}, // 4
        "7/20": {event: "Group Run<br/> Antrim Deck <b>7:00am</b>"}, // 5
        "7/27": {event: "Group Run<br/> Sharon Woods <b>7:00am</b>", deadline: "Road Block 10am-3pm"}, // 6
        "8/3": {event: "Group Run<br/> Antrim Deck 7:00am"}, // 7
        "8/10": {event: "Group Run<br/> Sharon Woods 7:00am"}, // 8
        "8/17": {event: "Group Run<br/> Glacier Ridge 7:00am"}, // 9
        "8/25": {event: "Emerald City Quarter and Half Trial Race"}, // 10
        "8/31": {event: "Group Run<br/> Antrim Deck 7:00am"}, // 11
        "9/7": {event: "Group Run<br/> Antrim Deck 7:00am"}, // 12
        "9/14": {event: "Group Run<br/> Antrim Deck 7:00am"}, // 13
        "9/21": {event: "Group Run<br/> Three Creeks 7:00am"}, // 14
        "9/28": {event: "Group Run<br/> Antrim Deck 7:00am"}, // 15
        "10/6": {event: "Group Run<br/> Antrim Deck 7:00am"}, // 16
        "10/13": {event: "Group Run<br/> Antrim Deck 7:00am"}, // 17
        "10/20": {event: "Columbus Half and Full Marathon"}, // 18

        // Tuesday runs
        "6/18": {event: "Group Run<br/> Sharon Woods 6:00pm"}, // 1
        "6/25": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 2
        "7/2": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 3
        "7/9": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 4
        "7/16": {event: "Group Run<br/><b>CANCELLED</b>"}, // 5
        "7/23": {event: "Group Run<br/> Sharon Woods 6:00pm"}, // 6
        "7/30": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 7
        "8/6": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 8
        "8/13": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 9
        "8/20": {event: "Group Run<br/> Sharon Woods 6:00pm"}, // 10
        "8/27": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 11
        "9/3": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 12
        "9/10": {event: "Group Run<br/> <b>CANCELLED</b>"}, // 13
        "9/17": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 14
        "9/24": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 15
        "10/1": {event: "Group Run<br/> Sharon Woods 5:30pm"}, // 16
        "10/8": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 17
        "10/15": {event: "Group Run<br/> LLS office<br/> after meeting"}, // 17

        // Thursday runs
        "6/20": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 1
        "6/27": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 2
        "7/11": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 4
        "7/18": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 5
        "7/25": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 6
        "8/1": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 7
        "8/8": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 8
        "8/15": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 9
        "8/22": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 10
        "8/29": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 11
        "9/5": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 12
        "9/12": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 13
        "9/19": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 14
        "9/26": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 15
        "10/3": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 16
        "10/10": {event: "Group Run<br/> Antrim Deck 6:00pm"}, // 17
    };

    TNTSchedule.HalfMarathon = {
        "6/15": {fin: "Group 2-4 miles"},
        // Week 1
        "6/16": {fin: ctOptAero},
        "6/17": {fin: "3 miles EZ"},
        "6/18": {fin: "2-3 miles", pr: "with 2 hills"},
        "6/19": {fin: ctStrength, pr: "and 2 miles"},
        "6/20": {fin: "30 minutes", pr: "5min at tempo"},
        "6/21": {fin: rest},
        "6/22": {fin: "2-4 miles"},

        // Week 2
        "6/23": {fin: ctOptAero},
        "6/24": {fin: "3 miles EZ"},
        "6/25": {fin: "2-3 miles", pr: "with 2x800m"},
        "6/26": {fin: ctStrength, pr: "and 2 miles"},
        "6/27": {fin: "30 minutes", pr: "5min at tempo"},
        "6/28": {fin: rest},
        "6/29": {fin: "2-4 miles"},

        // Week 3
        "6/30": {fin: ctOptAero},
        "7/1": {fin: "3 miles EZ"},
        "7/2": {fin: "30 minutes", pr: "5min at tempo"},
        "7/3": {fin: ctStrength, pr: "and 2 miles"},
        "7/5": {fin: rest},
        "7/6": {fin: "4 miles"},

        // Week 4
        "7/7": {fin: ctOptAero},
        "7/8": {fin: "3 miles EZ"},
        "7/9": {fin: "3 miles", pr: "with 4x400m"},
        "7/10": {fin: ctStrength, pr: "and 2 miles"},
        "7/11": {fin: "35 minutes", pr: "6min at tempo"},
        "7/12": {fin: rest},
        "7/13": {fin: "4 miles"},

        // Week 5
        "7/14": {fin: ctOptAero},
        "7/15": {fin: "3 miles EZ"},
        "7/16": {fin: "35 minutes", pr: "6min at tempo"},
        "7/17": {fin: ctStrength, pr: "and 2 miles"},
        "7/18": {fin: "4 miles", pr: "2 at race pace"},
        "7/19": {fin: rest},
        "7/20": {fin: "5 miles"},

        // Week 6
        "7/21": {fin: ctOptAero},
        "7/22": {fin: "30 minutes EZ"},
        "7/23": {fin: "3 miles", pr: "with 3 hills"},
        "7/24": {fin: ctStrength, pr: "and 2 miles"},
        "7/25": {fin: "35 minutes", pr: "7min at tempo"},
        "7/26": {fin: rest},
        "7/27": {fin: "5 miles"},

        // Week 7
        "7/28": {fin: ctOptAero},
        "7/29": {fin: "30 minutes EZ"},
        "7/30": {fin: "4 miles", pr: "with 3x800m"},
        "7/31": {fin: ctStrength, pr: "and 2 miles"},
        "8/1": {fin: "40 minutes", pr: "8min at tempo"},
        "8/2": {fin: rest},
        "8/3": {fin: "6 miles"},

        // Week 8
        "8/4": {fin: ctOptAero},
        "8/5": {fin: "30 minutes EZ"},
        "8/6": {fin: "40 minutes", pr: "8min at tempo"},
        "8/7": {fin: ctStrength, pr: "and 2 miles"},
        "8/8": {fin: "5 miles", pr: "3 at race pace"},
        "8/9": {fin: rest},
        "8/10": {fin: "7 miles"},

        // Week 9
        "8/11": {fin: ctOptAero},
        "8/12": {fin: "30 minutes EZ"},
        "8/13": {fin: "4 miles", pr: "with 5x400m"},
        "8/14": {fin: ctStrength, pr: "and 2 miles"},
        "8/15": {fin: "5 miles", pr: "4 at race pace"},
        "8/16": {fin: rest},
        "8/17": {fin: "8 miles"},

        // Week 10
        "8/18": {fin: ctOptAero},
        "8/19": {fin: "30 minutes EZ"},
        "8/20": {fin: "4 miles", pr: "with 4 hills"},
        "8/21": {fin: ctStrength, pr: "and 2 miles"},
        "8/22": {fin: "5 miles", pr: "4 at race pace"},
        "8/23": {fin: rest},
        "8/24": {fin: "2 miles EZ<br/>Race Tomorrow!"},
        "8/25": {fin: "Quarter Marathon Trial", event: "Emerald City Half"},

        // Week 11
        "8/26": {fin: ctOptAero},
        "8/27": {fin: "45 minutes", pr: "9min at tempo"},
        "8/28": {fin: ctStrength, pr: "and 3 miles"},
        "8/29": {fin: "6 miles", pr: "4 at race pace"},
        "8/30": {fin: rest},
        "8/31": {fin: "8 miles"},

        // Week 12
        "9/1": {fin: ctOptAero},
        "9/2": {fin: "30 minutes EZ"},
        "9/3": {fin: "4 miles", pr: "with 5x200m"},
        "9/4": {fin: ctStrength, pr: "and 3 miles"},
        "9/5": {fin: "45 minutes", pr: "10min at tempo"},
        "9/6": {fin: rest},
        "9/7": {fin: "10 miles"},

        // Week 13
        "9/8": {fin: ctOptAero},
        "9/9": {fin: "2 miles EZ"},
        "9/10": {fin: "4 miles", pr: "with 5 hills"},
        "9/11": {fin: ctStrength, pr: "and 3 miles"},
        "9/12": {fin: "45 minutes", pr: "10min at tempo"},
        "9/13": {fin: rest},
        "9/14": {fin: "12 miles"},

        // Week 14
        "9/15": {fin: ctOptAero},
        "9/16": {fin: "30 minutes EZ"},
        "9/17": {fin: "45 minutes", pr: "10min at tempo"},
        "9/18": {fin: ctStrength, pr: "and 3 miles"},
        "9/19": {fin: "5 miles", pr: "all at race pace"},
        "9/20": {fin: rest},
        "9/21": {fin: "10 miles"},

        // Week 15
        "9/22": {fin: ctOptAero},
        "9/23": {fin: "30 minutes EZ"},
        "9/24": {fin: "4 miles", pr: "with 6x400m"},
        "9/25": {fin: ctStrength, pr: "and 3 miles"},
        "9/26": {fin: "40 minutes", pr: "8min at tempo"},
        "9/27": {fin: rest},
        "9/28": {fin: "12 miles"},

        // Week 16
        "9/29": {fin: ctOptAero},
        "9/30": {fin: "30 minutes EZ"},
        "10/1": {fin: "4 miles", pr: "with 6 hills"},
        "10/2": {fin: ctStrength, pr: "and 3 miles"},
        "10/3": {fin: "30 minutes", pr: "8min at tempo"},
        "10/4": {fin: rest},
        "10/5": {fin: "30 minutes EZ"},

        // Week 17
        "10/6": {fin: "9 miles"},
        "10/7": {fin: ctOptAero},
        "10/8": {fin: "30 minutes", pr: "8min at tempo"},
        "10/9": {fin: ctStrength, pr: "and 3 miles"},
        "10/10": {fin: "4 miles", pr: "all at race pace"},
        "10/11": {fin: rest},
        "10/12": {fin: "2 miles EZ"},

        // Week 18
        "10/13": {fin: "8 miles"},
        "10/14": {fin: ctOptAero},
        "10/15": {fin: "4 miles", pr: "with 4x400m"},
        "10/16": {fin: ctStrength, pr: "and 2 miles"},
        "10/17": {fin: "3 miles"},
        "10/18": {fin: rest},
        "10/19": {fin: "2 miles EZ"},
        "10/20": {fin: "Columbus Half Marathon"}
    };

    TNTSchedule.FullMarathon = {
        "6/15": {fin: "Group 4 miles"},

        // Week 1
        "6/16": {fin: ctOptAero},
        "6/17": {fin: "3 miles EZ"},
        "6/18": {fin: "3 miles", pr: "with 3 hills"},
        "6/19": {fin: ctStrength, pr: "and 2 miles"},
        "6/20": {fin: "30 minutes", pr: "5min at tempo"},
        "6/21": {fin: rest},
        "6/22": {fin: "6 miles"},

        // Week 2
        "6/23": {fin: ctOptAero},
        "6/24": {fin: "3 miles EZ"},
        "6/25": {fin: "3 miles", pr: "with 2x800m"},
        "6/26": {fin: ctStrength, pr: "and 2 miles"},
        "6/27": {fin: "30 minutes", pr: "5min at tempo"},
        "6/28": {fin: rest},
        "6/29": {fin: "8 miles"},

        // Week 3
        "6/30": {fin: ctOptAero},
        "7/1": {fin: "3 miles EZ"},
        "7/2": {fin: "30 minutes", pr: "5min at tempo"},
        "7/3": {fin: ctStrength, pr: "and 3 miles"},
        "7/5": {fin: rest},
        "7/6": {fin: "10 miles"},

        // Week 4
        "7/7": {fin: ctOptAero},
        "7/8": {fin: "3 miles EZ"},
        "7/9": {fin: "4 miles", pr: "with 4x800m"},
        "7/10": {fin: ctStrength, pr: "and 3 miles"},
        "7/11": {fin: "35 minutes", pr: "6min at tempo"},
        "7/12": {fin: rest},
        "7/13": {fin: "8 miles"},

        // Week 5
        "7/14": {fin: ctOptAero},
        "7/15": {fin: "3 miles EZ"},
        "7/16": {fin: "35 minutes", pr: "6min at tempo"},
        "7/17": {fin: ctStrength, pr: "and 3 miles"},
        "7/18": {fin: "5 miles", pr: "at race pace"},
        "7/19": {fin: rest},
        "7/20": {fin: "12 miles"},

        // Week 6
        "7/21": {fin: ctOptAero},
        "7/22": {fin: "4 miles EZ"},
        "7/23": {fin: "4 miles", pr: "with 4 hills"},
        "7/24": {fin: ctStrength, pr: "and 3 miles"},
        "7/25": {fin: "35 minutes", pr: "7min at tempo"},
        "7/26": {fin: rest},
        "7/27": {fin: "10 miles"},

        // Week 7
        "7/28": {fin: ctOptAero},
        "7/29": {fin: "4 miles EZ"},
        "7/30": {fin: "5 miles", pr: "with 5x800m"},
        "7/31": {fin: ctStrength, pr: "and 3 miles"},
        "8/1": {fin: "40 minutes", pr: "8min at tempo"},
        "8/2": {fin: rest},
        "8/3": {fin: "14 miles"},

        // Week 8
        "8/4": {fin: ctOptAero},
        "8/5": {fin: "4 miles EZ"},
        "8/6": {fin: "40 minutes", pr: "8min at tempo"},
        "8/7": {fin: ctStrength, pr: "and 3 miles"},
        "8/8": {fin: "5 miles", pr: "at race pace"},
        "8/9": {fin: rest},
        "8/10": {fin: "12 miles"},

        // Week 9
        "8/11": {fin: ctOptAero},
        "8/12": {fin: "4 miles EZ"},
        "8/13": {fin: "6 miles", pr: "with 6x800m"},
        "8/14": {fin: ctStrength, pr: "and 3 miles"},
        "8/15": {fin: "5 miles", pr: "at race pace"},
        "8/16": {fin: rest},
        "8/17": {fin: "16 miles"},

        // Week 10
        "8/18": {fin: ctOptAero},
        "8/19": {fin: "4 miles EZ"},
        "8/20": {fin: "6 miles", pr: "with 6 hills"},
        "8/21": {fin: ctStrength, pr: "and 3 miles"},
        "8/22": {fin: "5 miles", pr: "at race pace"},
        "8/23": {fin: rest},
        "8/24": {fin: "2 miles EZ<br/>Race Tomorrow!"},
        "8/25": {fin: "Half Marathon Trial", event: "Emerald City Half"},

        // Week 11
        "8/26": {fin: ctOptAero},
        "8/27": {fin: "45 minutes", pr: "9min at tempo"},
        "8/28": {fin: ctStrength, pr: "and 3 miles"},
        "8/29": {fin: "6 miles", pr: "at race pace"},
        "8/30": {fin: rest},
        "8/31": {fin: "18 miles"},

        // Week 12
        "9/1": {fin: ctOptAero},
        "9/2": {fin: "4 miles EZ"},
        "9/3": {fin: "7 miles", pr: "with 7x800m"},
        "9/4": {fin: ctStrength, pr: "and 4 miles"},
        "9/5": {fin: "45 minutes", pr: "10min at tempo"},
        "9/6": {fin: rest},
        "9/7": {fin: "14 miles"},

        // Week 13
        "9/8": {fin: ctOptAero},
        "9/9": {fin: "5 miles EZ"},
        "9/10": {fin: "7 miles", pr: "with 7 hills"},
        "9/11": {fin: ctStrength, pr: "and 4 miles"},
        "9/12": {fin: "45 minutes", pr: "10min at tempo"},
        "9/13": {fin: rest},
        "9/14": {fin: "20 miles"},

        // Week 14
        "9/15": {fin: ctOptAero},
        "9/16": {fin: "5 miles EZ"},
        "9/17": {fin: "45 minutes", pr: "10min at tempo"},
        "9/18": {fin: ctStrength, pr: "and 4 miles"},
        "9/19": {fin: "5 miles", pr: "at race pace"},
        "9/20": {fin: rest},
        "9/21": {fin: "14 miles"},

        // Week 15
        "9/22": {fin: ctOptAero},
        "9/23": {fin: "5 miles EZ"},
        "9/24": {fin: "8 miles", pr: "with 8x800m"},
        "9/25": {fin: ctStrength, pr: "and 4 miles"},
        "9/26": {fin: "40 minutes", pr: "8min at tempo"},
        "9/27": {fin: rest},
        "9/28": {fin: "20 miles"},

        // Week 16
        "9/29": {fin: ctOptAero},
        "9/30": {fin: "5 miles EZ"},
        "10/1": {fin: "8 miles", pr: "with 8 hills"},
        "10/2": {fin: ctStrength, pr: "and 4 miles"},
        "10/3": {fin: "30 minutes", pr: "8min at tempo"},
        "10/4": {fin: rest},
        "10/5": {fin: "5 miles EZ"},

        // Week 17
        "10/6": {fin: "13 miles"},
        "10/7": {fin: ctOptAero},
        "10/8": {fin: "30 minutes", pr: "8min at tempo"},
        "10/9": {fin: ctStrength, pr: "and 3 miles"},
        "10/10": {fin: "4 miles", pr: "at race pace"},
        "10/11": {fin: rest},
        "10/12": {fin: "5 miles EZ"},

        // Week 18
        "10/13": {fin: "8 miles"},
        "10/14": {fin: ctOptAero},
        "10/15": {fin: "4 miles", pr: "with 4x400m"},
        "10/16": {fin: ctStrength, pr: "and 3 miles"},
        "10/17": {fin: rest},
        "10/18": {fin: rest},
        "10/19": {fin: "2-3 miles EZ"},
        "10/20": {fin: "Columbus Marathon"}
    };
    $.extend(true, TNTSchedule.HalfMarathon, TNTSchedule.CommonEvents, TNTSchedule.CommonColumbusEvents);
    $.extend(true, TNTSchedule.FullMarathon, TNTSchedule.CommonEvents, TNTSchedule.CommonColumbusEvents);
};
setupTNTSchedules();
