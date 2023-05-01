<template>
    <FetchComponent url="https://pokeapi.co/api/v2/pokemon?limit=5000&offset=0">
        <template #default="defaultProps">
            <ul>
                <li v-for="(item, index) in defaultProps.data.results" :key="index">
                {{ index }} - {{ item.name }}
                </li>
            </ul>
        </template>
    </FetchComponent>
</template>
<script lang="ts">
import axios from "axios";
import FetchComponent from "./FetchComponent.vue";
type PokemonsData = {
  items: Array<{ name: string }>;
};

export default {
    name: "Pokemons",
    components: { FetchComponent }
};
</script>
