<script setup>

    const navigation = {
        home: {
            link: "/",
            linktext: "Home",
        },
        about: {
            link: "/about",
            linktext: "Über mich",
        },
        projects: {
            link: "/projects",
            linktext: "Projekte"
        }
    };

    const socials = {
        instagram: {
            link: "",
            linktext: "Instagram"
        },
        github: {
            link: "",
            linktext: "Github"
        }
    };

    const legal = {
        privacy: {
            link: "/privacy",
            linktext: "Datenschutz"
        }
    };

</script>

<template>

    <footer class="site-footer">
        <div class="grid-wrap">

            <nav class="site-footer__navigation w12">
                <strong class="site-footer__navigation__subline">
                    Menü
                </strong>
                <ul class="site-footer__navigation__list">
                    <li v-for="(item, index) in navigation" :key="index">
                        <NuxtLink :to="item.link">
                            {{ item.linktext }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="site-footer__socials w12">
                <strong class="site-footer__socials__subline">
                    Socials
                </strong>
                <ul class="site-footer__socials__list">
                    <li v-for="(item, index) in socials" :key="index">
                        <NuxtLink :to="item.link" target="_blank">
                            {{ item.linktext }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="site-footer__legal w12">
                <ul class="site-footer__legal__list">
                    <li v-for="(item, index) in legal" :key="index">
                        <NuxtLink :to="item.link">
                            {{ item.linktext }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>

        </div>
    </footer>

</template>