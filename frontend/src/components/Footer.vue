<script>
export default {
    data() {
        return {
            github: 'https://github.com/Solatido143',
            linkedin: 'https://www.linkedin.com/in/mark-anthony-sol-cruz-2128052ab/',
            instagram: 'https://www.instagram.com/mopisol_/',
        }
    }
}
</script>

<template>
    <footer class="p-4 py-12 md:p-12 text-text-muted-ashen text-sm bg-cinder shadow-inner space-x-0 space-y-12">


        <div class="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0 text-center">
            <div class="flex justify-center md:justify-start mb-8 md:mb-0">
                <RouterLink to="/">
                    <img class="h-10" src="@/assets/favicon.png" alt="image">
                </RouterLink>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 justify-center">
                <RouterLink to="/" class="">
                    Build tools
                </RouterLink>
                <RouterLink to="/" class="">
                    Learn code
                </RouterLink>
                <RouterLink to="/" class="">
                    Experiments
                </RouterLink>
                <RouterLink to="/" class="">
                    Github
                </RouterLink>
                <RouterLink to="/" class="">
                    Contact
                </RouterLink>
            </div>

            <div class="flex space-x-4 justify-center md:justify-end">
                <a :href="github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <img src="@/assets/svg/github-142.svg" alt="GitHub" class="w-6 h-6" />
                </a>
                <a :href="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src="@/assets/svg/instagram-outline.svg" alt="Instagram" class="w-6 h-6" />
                </a>
                <a :href="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src="@/assets/svg/linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
                </a>
            </div>
        </div>

        <hr>

        <div class="flex flex-col md:flex-row md:justify-center md:items-center space-y-4 md:space-y-0">
            <p>&copy; 2025 Solverse. All rights reserved.</p>
            <span class="hidden md:block mx-2">|</span>
            <RouterLink to="/" class="hover:underline">
                Privacy Policy
            </RouterLink>
            <span class="hidden md:block mx-2">|</span>
            <RouterLink to="/" class="hover:underline">
                Terms of Service
            </RouterLink>
            <span class="hidden md:block mx-2">|</span>
            <RouterLink to="/" class="hover:underline">
                Cookie Policy
            </RouterLink>
        </div>
    </footer>
</template>