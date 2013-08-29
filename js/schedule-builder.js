function buildCalendarFromSchedule(schedule) {
    var today = new Date(),
        startDay = new Date(2013, 5, 15), // 5,15 is July 15
        iDay = startDay,
        iMonth, iMonthDiv, iWeekDiv, iDate, iDateDiv, iScheduleKey,
        endDay = new Date(2013, 9, 21), // 9,20 is Oct 20
        dayLength = (24 * 60 * 60 * 1000),
        calendarDiv = $(".calendar"),
        dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayHTML = "",
        monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    function nextDay(currentDay) {
        return new Date(currentDay.getTime() + dayLength);
    }

    function offsetClass(day) {
        var isSunday = (day.getDay() === 0);
        if (!isSunday && isFirstDateOfWeek(day)) {
            return "offset" + day.getDay();
        } else {
            return "";
        }
    }

    function currentDayClass(day) {
        var sameMonth = today.getMonth() === day.getMonth(),
            sameDate = today.getDate() === day.getDate();
        if (sameMonth && sameDate) {
            return "current-day"
        } else {
            return "";
        }
    }

    function currentWeekClass(day) {
        var sameMonth = today.getMonth() === day.getMonth(),
            sameSunday = ((today.getDate() - today.getDay()) === (day.getDate() - day.getDay()));

        if (sameMonth && sameSunday) {
            return "current-week";
        } else {
            return "";
        }
    }

    function dayClasses(day) {
        return offsetClass(day) + " " + currentDayClass(day) + " " + currentWeekClass(day);
    }

    function isFirstDateOfWeek(day) {
        var firstDayOfSchedule = (day == startDay),
            firstOfMonth = (day.getDate() === 1),
            isSunday = (day.getDay() === 0);
        return firstDayOfSchedule || firstOfMonth || isSunday;
    }

    daysHTML = '<div class="row show-grid">';
    for (var key in dayNames) {
        daysHTML += "<div class='span1 dayname'>" + dayNames[key] + "</div>";
    }
    daysHTML += '</div>';

    while (iDay.getMonth() < endDay.getMonth() ||
            (iDay.getMonth() == endDay.getMonth() && iDay.getDate() <= endDay.getDate())) {
        iMonth = iDay.getMonth() + 1;
        iDate = iDay.getDate();
        iScheduleKey = "" + iMonth + "/" + iDate;
        iMonthDiv = $(".month"+iMonth);
        if (iMonthDiv.length === 0) {
            if ($('.calendar-month').length) {
                calendarDiv.append("<div class='page-break'/>");
            }
            iMonthDiv = $("<div class='month" + iMonth + " calendar-month'><h1>" + monthNames[iDay.getMonth()] + "</h1></div>");
            iMonthDiv.append(daysHTML);
            calendarDiv.append(iMonthDiv);
        }

        if (isFirstDateOfWeek(iDay)) {
            iWeekDiv = $('<div class="row show-grid"></div>');
            iMonthDiv.append(iWeekDiv);
        } else {
            iWeekDiv = iMonthDiv.find(".row:last");
        }
        iDateDiv = $('<div class="span1 ' + dayClasses(iDay) + '"><div class="date">'+iDate+'</div></div>');
        itemsScheduled = schedule[iScheduleKey];

        if (itemsScheduled) {
            for (var key in itemsScheduled) {
                iEvent = $("<div class='scheduledItem " + key + "'></div>");
                iDateDiv.append(iEvent);
                if (key === "pr") {
                    iEvent.append("PR: ");
                }
                iEvent.append(itemsScheduled[key]);
            }
        }

        iWeekDiv.append(iDateDiv);
        iDay = nextDay(iDay);
    }
}

function scrollToCurrentWeek() {
    var firstDay;
    firstDay = $('.current-day:first');
    if (firstDay.length) {
        $('html, body').animate({
            scrollTop: (firstDay.offset().top - 100)
        }, 1000);
    }
}
function scanForPhrases() {
    // scan for phrases
    $('.scheduledItem').each(function(i, item){
        var text = $(item).html();
        if (/Cross Train Aerobic/.exec(text)) {
            $(item).html("<a href='trainingDetails.html#aerobic'>" + text + "</a>")
        }
        if (/Cross Train Strength/.exec(text)) {
            $(item).html("<a href='trainingDetails.html#strength'>" + text + "</a>")
        }
        if (/with \d* hills/.exec(text)) {
            $(item).html("<a href='trainingDetails.html#hills'>" + text + "</a>")
        }
        if (/with \d*x\d00m/.exec(text)) {
            $(item).html("<a href='trainingDetails.html#intervals'>" + text + "</a>")
        }
        if (/\d* at tempo/.exec(text)) {
            $(item).html("<a href='trainingDetails.html#tempo'>" + text + "</a>")
        }
        if (/at race pace/.exec(text)) {
            $(item).html("<a href='trainingDetails.html#racepace'>" + text + "</a>")
        }
        if (/EZ/.exec(text)) {
            $(item).html("<a href='trainingDetails.html#easy'>" + text + "</a>")
        }
        if (/Sharon Woods/.exec(text)) {
            $(item).html("<a href='locations.html#sharon'>" + text + "</a>")
        }
        if (/Antrim Deck/.exec(text)) {
            $(item).html("<a href='locations.html#antrim'>" + text + "</a>")
        }
        if (/Three Creeks/.exec(text)) {
            $(item).html("<a href='locations.html#threecreeks'>" + text + "</a>")
        }
        if (/Glacier Ridge/.exec(text)) {
            $(item).html("<a href='locations.html#glacier'>" + text + "</a>")
        }
        if (/Park of Roses/.exec(text)) {
            $(item).html("<a href='locations.html#parkofroses'>" + text + "</a>")
        }
        if (/Road Runner/.exec(text)) {
            $(item).html("<a href='locations.html#roadrunner'>" + text + "</a>")
        }
        if (/5K race for fun/.exec(text)) {
            $(item).html("<a href='5k.html'>" + text + "</a>")
        }
    });
}
