window.TNTSchedule = {}

var setupTNTSchedules = function () {
    var crosstrain = "Cross Train";

    TNTSchedule.CommonEvents = {
        "6/15": {"event": "Kick-Off event"},
    };

    TNTSchedule.HalfMarathon = {};

    TNTSchedule.FullMarathon = {
        "6/17": {fin: crosstrain},
        "6/18": {fin: "3 miles", pr: "with 3 hills"},
        "6/19": {fin: crosstrain},
        "6/20": {fin: "30 minutes", pr: "5 at tempo"},
        "6/21": {pr: "3 miles EZ"},
        "6/22": {fin: "10 miles<br/> Antrim Deck 8:00am", event: "Inspiration Dinner<br/>Greg's 5:00pm"},

        "6/24": {fin: crosstrain},
        "6/25": {fin: "3 miles", pr: "with 2x800m"},
        "6/26": {fin: crosstrain},
        "6/27": {fin: "30 minutes", pr: "5 at tempo"},
        "6/28": {pr: "3 miles EZ"},
        "6/29": {fin: "11 miles<br/> Highbanks 8:00am", deadline: "Recommitment Forms Due"},
    };

};
setupTNTSchedules();
