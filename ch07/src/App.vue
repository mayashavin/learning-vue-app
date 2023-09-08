<!-- <template>
  <component is="HelloWorld" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script> -->
<template>
  <div>
    <keep-alive>
      <component :is="activeComp" />
    </keep-alive>
    <div>
      <button @click="activeComp = 'StepOne'" v-if="activeComp === 'StepTwo'">
      Go to Step Two
      </button>
      <button @click="activeComp = 'StepTwo'" v-else>Back to Step One</button>
    </div>
  </div>
  <TruncatedText />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import StepOne from "./components/StepOne.vue";
import StepTwo from "./components/StepTwo.vue";
import TruncatedText from "./components/TruncatedText.vue";

export default defineComponent({
  components: { StepTwo, StepOne, TruncatedText },
  data() {
    return {
      activeComp: "StepOne",
    };
  },
});
</script>