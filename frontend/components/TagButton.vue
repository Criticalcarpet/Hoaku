<template>
    <div><span>{{ name }}</span></div>
</template>

<script>
    export default {
        props: ["name"]
    }
</script>

<style scoped>
    div {
        background: var(--accent_transparent);

        font-weight: 500;

        padding: 0.571rem 1rem;

        margin-right: 0.714rem;
        margin-bottom: 0.714rem;

        border-radius: 100vw;

        user-select: none;

        cursor: pointer;
        
        display: inline-block;
    }

    div:active {
        transform: scale(0.95);
    }
</style>