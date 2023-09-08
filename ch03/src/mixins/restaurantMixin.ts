import { defineComponent}  from "vue";

export const restaurantMixin = defineComponent({
  data() {
    return {
      menu: [],
      reservations: [],
      payments: [],
      title: "Restaurant",
    };
  },
  methods: {
    makeReservation() {
      console.log("Reservation made");
    },
    acceptPayment() {
      console.log("Payment accepted");
    },
  },
  created() {
    console.log(`Welcome to ${this.title}`);
  },
});
