<template>
    <div class="header-wrapper">
        <header class="flex">
            <div class="flex_cell">
                <nuxt-link to="/">

                </nuxt-link>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>

.header-wrapper {
    height: 60px;
}

.flex {
    display: flex;
    z-index: 10;
    height: 60px;
    position: relative;
    background:#B1DBD2;
    align-items: center;
    justify-content: space-between;
}

</style>