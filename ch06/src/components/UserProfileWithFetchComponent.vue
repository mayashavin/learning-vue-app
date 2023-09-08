<template>
    <FetchComponent url="https://api.github.com/users/mayashavin">
        <template #default="defaultProps">
            <div class="user-profile">
                <img 
                    :src="(defaultProps.data as User).avatar_url" 
                    alt="`${defaultProps.data.name} Avatar`" 
                    width="200" 
                />
                <div>
                    <h1>{{ (defaultProps.data as User).name }}</h1>
                    <p>{{ (defaultProps.data as User).bio }}</p>
                    <p>Twitter: {{ (defaultProps.data as User).twitter_username }}</p>
                    <p>Blog: {{ (defaultProps.data as User).blog }}</p>
                </div>
            </div>
        </template>
    </FetchComponent>
</template>
<script lang="ts" setup>
import FetchComponent from "./FetchComponent.vue";
import type { User } from "../types/User.type";
</script>