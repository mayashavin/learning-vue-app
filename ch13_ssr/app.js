import { createSSRApp, ref } from "vue";

const App = {
  template: `
        <h1>Digital Clock</h1>
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
    `,
  setup() {
    const date = ref("");
    const time = ref("");

    setInterval(() => {
      const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const MONTHS = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dev",
      ];

      const currDate = new Date();
      const hours = currDate.getHours();
      const minutes = currDate.getMinutes();
      const seconds = currDate.getSeconds();
      const month = MONTHS[currDate.getMonth()].toUpperCase();
      const year = currDate.getFullYear();

      const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
      };

      const formatHours = (hours) => hours;

      date.value = `${
        WEEKDAYS[currDate.getDay()]
      }, ${currDate.getDate()} ${month} ${year}`;
      time.value = `${formatHours(hours)}:${formatTime(minutes)}:${formatTime(
        seconds
      )}`;
    }, 1000);

    return {
      date,
      time,
    };
  },
};

export function createApp() {
  return createSSRApp(App);
}
