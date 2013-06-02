function buildCalendarFromSchedule(schedule) {
    var today = new Date(),
        startDay = new Date(2013, 5, 15), // 5,15 is July 15
        iDay = startDay,
        iMonth, iMonthDiv, iWeekDiv, iDate, iDateDiv, iScheduleKey,
        endDay = new Date(2013, 9, 20), // 9,20 is Oct 20
        dayLength = (24 * 60 * 60 * 1000),
        calendarDiv = $(".calendar"),
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
        console.log(day + firstDayOfSchedule + firstOfMonth + isSunday);
        return firstDayOfSchedule || firstOfMonth || isSunday;
    }


    while (iDay.getMonth() < endDay.getMonth() ||
            (iDay.getMonth() == endDay.getMonth() && iDay.getDate() <= endDay.getDate())) {
        iMonth = iDay.getMonth() + 1;
        iDate = iDay.getDate();
        iScheduleKey = "" + iMonth + "/" + iDate;
        iMonthDiv = $(".month"+iMonth);
        if (iMonthDiv.length === 0) {
            iMonthDiv = $("<div class='month" + iMonth + "'><h1>" + monthNames[iDay.getMonth()] + "</h1></div>");
            calendarDiv.append(iMonthDiv);
        }

        if (isFirstDateOfWeek(iDay)) {
            console.log("first "+ iDay.toDateString());
            iWeekDiv = $('<div class="row show-grid"></div>');
            iMonthDiv.append(iWeekDiv);
        } else {
            iWeekDiv = iMonthDiv.find(".row:last");
        }
        iDateDiv = $('<div class="span1 ' + dayClasses(iDay) + '"><div class="date">'+iDate+'</div></div>');
        itemsScheduled = schedule[iScheduleKey];

        if (itemsScheduled) {
            for (var key in itemsScheduled) {
                iEvent = $("<div class='" + key + "'></div>");
                iDateDiv.append(iEvent);
                if (key === "pr") {
                    iEvent.append("<i class='icon-time'></i> ");
                }
                iEvent.append(itemsScheduled[key]);
            }
        }

        iWeekDiv.append(iDateDiv);
        console.log(iDay);
        iDay = nextDay(iDay);
    }
}
