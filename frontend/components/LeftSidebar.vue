<template>
    <div class="sidebar">
        <p class="hello">Hello, <span class="name">Realmy</span> <img src="../../assets/hoaku.png" /></p>

        <div></div>

        <div class="buttons">
            <div class="button">
                <div class="mdi mdi-account"></div>
                <p>Profile</p>
            </div>

            <div class="button">
                <div class="mdi mdi-logout-variant"></div>
                <p>Log Out</p>
            </div>
        </div>

        <div></div>

        <div class="button compose">
            <div class="mdi mdi-pencil"></div>
            <p>Compose</p>
        </div>
    </div>
</template>

<style scoped>
    .sidebar {
        display: grid;
        grid-template-rows: auto 2.857rem auto 1fr auto;

        padding-bottom: 13.571rem;
    }

    .hello {
        font-size: 1.714rem;

        display: flex;
        align-items: center;
        column-gap: 0.571rem;
    }

    .hello > .name {
        font-weight: 500;
    }

    .hello > img {
        height: 2rem;
        width: 2rem;

        margin-left: 0.429rem;

        border-radius: 50%;
    }

    .buttons {
        display: grid;
        row-gap: 1.429rem;
    }

    .button {
        cursor: pointer;

        background: var(--accent_transparent);

        height: 4rem;

        border-radius: 100vw;

        display: flex;
        align-items: center;

        padding: 0 1.857rem;

        user-select: none;
    }

    .button:active {
        transform: scale(0.95);
    }

    .button > .mdi {
        font-size: 1.857rem;
    }

    .button > p {
        font-weight: 500;
        font-size: 1.286rem;

        margin-left: 1rem;
    }

    .button.compose {
        background: var(--accent);
    }

    .button.compose > * {
        color: white;
    }
</style>