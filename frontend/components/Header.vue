<template>
    <header>
        <main>
            <div class="logo">
                <img src="../../assets/site-logo.png" />

                <div class="mdi mdi-chevron-down"></div>
            </div>

            <div class="menu_search">
                <div class="search_container">
                    <div class="mdi mdi-magnify"></div>

                    <input type="text" placeholder="Search for posts or jump to a @user" />
                </div>

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

        position: sticky;
        z-index: 2;
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

    .search_container {
        height: 3.143rem;
        width: 27.286rem;

        background: var(--dark_bg_on_dark_bg);

        border-radius: 100vw;

        margin-right: 2.857rem;

        padding: 0 1.143rem;

        display: flex;
        align-items: center;
        column-gap: 0.714rem;
    }

    .search_container > .mdi {
        font-size: 1.857rem;

        color: var(--text_light_darker_bg);
    }

    .search_container > input::placeholder {
        color: var(--text_light_darker_bg);
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
    }

    .menu_button:not(.active):hover > .mdi {
        color: var(--text_light_darker_bg);
    }

    .menu_button.active > .mdi {
        color: var(--accent);
    }

    .compose_button {
        cursor: pointer;

        height: 3.571rem;
        width: 3.571rem;

        background: var(--accent);

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 1.429rem;
    }

    .compose_button:active {
        transform: scale(0.92);
    }

    .compose_button > .mdi {
        font-size: 1.714rem;

        color: white;
    }
</style>