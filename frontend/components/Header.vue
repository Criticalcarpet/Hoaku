<template>
    <header>
        <main>
            <div class="logo">
                <img src="../../assets/site-logo.png" />

                <div class="mdi mdi-chevron-down"></div>
            </div>

            <div class="menu_search">
                <div class="menu">
                    <div class="menu_button">
                        <div class="mdi mdi-home"></div>
                    </div>

                    <div class="menu_button">
                        <div class="mdi mdi-fire"></div>
                    </div>

                    <div class="menu_button">
                        <div class="mdi mdi-calendar-blank"></div>
                    </div>

                    <div class="compose_button">
                        <div class="mdi mdi-pencil"></div>
                    </div>
                </div>
            </div>
        </main>
    </header>
</template>

<style scoped>
    header {
        height: 5.714rem;

        display: block;

        border-bottom: 0.071rem solid var(--border);
    }

    main {
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        transition: 0.2s;

        display: flex;
        align-items: center;

        border-radius: 0.286rem;
    }

    .logo:hover {
        background: var(--dark_bg);

        padding: 0.857rem;
    }

    .logo > img {
        height: 2.143rem;
    }

    .logo > .mdi {
        font-size: 1.714rem;

        color: var(--text_light);

        margin-left: 1.286rem;
    }

    .logo > .mdi:hover {
        cursor: pointer;
    }

    .menu_search, .menu {
        display: flex;
        align-items: center;

        height: 100%;
    }

    .menu_button {
        height: 100%;
        width: 3.857rem;

        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu_button:hover {
        cursor: pointer;
    }

    .menu_button.active {
        border-bottom: 0.143rem solid var(--accent);
    }

    .menu_button > .mdi {
        font-size: 2.429rem;

        color: var(--text_light);

        transition: 0.1s;
    }

    .menu_button:not(.active):hover > .mdi {
        color: var(--text_light_darker_bg);

        transition: 0.1s;
    }

    .menu_button.active > .mdi {
        color: var(--accent);

        transition: 0.1s;
    }

    .compose_button {
        height: 3.571rem;
        width: 3.571rem;

        background: var(--accent);

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 1.429rem;

        transition: 0.2s;
    }

    .compose_button:hover {
        transform: scale(1.15);

        cursor: pointer;
    }

    .compose_button > .mdi {
        font-size: 1.714rem;

        color: white;

        transition: 0.2s;
    }

    .compose_button:hover > .mdi {
        transition: 0.2s;

        transform: rotate(1turn);
    }
</style>