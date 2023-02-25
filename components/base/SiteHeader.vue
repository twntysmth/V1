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

    function toggleNavigation(){
        let $navigation = document.querySelector(".site-header__navigation");

        $navigation.classList.toggle("site-header__navigation-open")

    };

</script>

<template>

    <header class="site-header">
        <div class="grid-wrap">

            <div class="site-header__logo w3 lw5">

            </div>

            <div class="site-header__navigation w1 w-start-11 lw8 lw-start-17">
                <button @click="toggleNavigation" class="site-header__navigation-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul class="site-header__navigation__menu">
                    <li v-for="(item, index) in navigation" :key="index">
                        <NuxtLink :to="item.link">
                            {{ item.linktext }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>

        </div>
    </header>

</template>