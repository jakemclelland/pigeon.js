/*
* pcalendar v0.1 - a simple calendar control
* Copyright (c) 2022 Jake McLelland
* License: MIT
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const pcalendar = {
    
    options: {
        
    },

    monthArray : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

    daysArray : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

    _renderWeekline: function(weekElement) {
        weekElement.empty();
    },

    _renderCalendar: function(month, year) {

    },

    init : function(targetElementSelector) {
        let calendarElement = document.querySelector(targetElementSelector);
        console.log("calendarElement:", calendarElement);

        const headerHtml = '<div class="pcal-header"><button class="pcal-shift-mon pcal-shift-past">back</button><h2></h2><button class="pcal-shift-mon pcal-shift-future">next</div>';
        const bodyHtml = '<div class="pcal-weekdays"></div><div class"pcal-content"></div>';
        const hiddenHtml = '<input type="hidden" id="pcal-start-date" value=""><input type="hidden" id="pcal-end-date" value="">';
        calendarElement.innerHTML = headerHtml + bodyHtml + hiddenHtml;

        let today = new Date();
        this._renderCalendar(today.getFullYear(), today.getMonth());
    },

}