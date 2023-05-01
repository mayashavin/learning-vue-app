import { ref, onBeforeMount } from 'vue'

export const useGitHubUser = (username: string) => {
    const user = ref<User | null>(null)
    const loading = ref<boolean>(false)
    const error = ref<Error | null>(null)

    loading.value = true

    onBeforeMount(async () => {
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}`
            )
            if (!response.ok) {
                error.value = new Error('Failed to fetch user')
            } else {
                user.value = await response.json()
            }
        } catch (err) {
            error.value = err as Error
        } finally {
            loading.value = false
        }
    })
    
    return {
        user,
        loading,
        error,
    }
}