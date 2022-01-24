<template>
    <div class="sidebar">
        <div class="copyright_hoaku">
            <p class="copyright">© 2022 {{ $global.instanceName }}</p>
            <p>Made with love by the <a href="https://github.com/Hoaku/Hoaku" class="hoaku_link">Hoaku</a> team.</p>
        </div>

        <p class="tags"><TagButton name="Privacy Policy" /><TagButton name="Terms of Use" /><TagButton name="Guidelines" /><TagButton name="Contribute Code" @click.native="navigate('https://github.com/Hoaku/Hoaku')" /></p>
    </div>
</template>

<script>
    export default {
        methods: {
            navigate(url) {
                window.location.href = url;
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        display: grid;
        grid-template-rows: auto auto 1fr;

        row-gap: 2.857rem;
    }

    .copyright_hoaku {
        display: grid;
        row-gap: 0.714rem;
    }

    .copyright {
        font-weight: 500;
    }
    
    .hoaku_link {
        color: #EF476F;
    }
</style>