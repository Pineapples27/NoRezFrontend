import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment);

const Event= [{
  title: "test",
  start: new Date(2018, 12, 25),
  end: new Date(2018, 12, 31),
  allDay: true,
}];

export default class CalenderView extends Component {

  render() {
    return (
        <BigCalendar
          localizer={localizer}
          events={Event}
          startAccessor="start"
          endAccessor="end"
          views={BigCalendar.Views.MONTH}
          step={60}
          showMultiDayTimes
        />
    );
  }
}

CalenderView.propTypes = {
};
