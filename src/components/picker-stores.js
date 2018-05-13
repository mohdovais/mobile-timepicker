
export function getHours() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (h) {
    return {
      label: h < 10 ? "0" + h : h.toString(),
      value: h
    };
  });
}

export function getMinutes(config) {
  const step = config && parseInt(config.step) || 5;
  const minutes = [];
  let minute = 0;

  for (; minute < 60; minute = minute + step) {
    minutes.push({
      label: minute < 10 ? "0" + minute : minute.toString(),
      value: minute
    });
  }

  return minutes;
}

export function getAmPm() {
  return [{
    label: "am",
    value: "am"
  },
  {
    label: "pm",
    value: "pm"
  }
  ];
}