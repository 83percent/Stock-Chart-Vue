<template>
    <nav>
        <router-link to="/" id="logo">
            <p>Beautiful</p>
            <p>Stock Chart</p>
        </router-link>
        <ul>
            <li>
                <router-link to="/mystock">
                    My Stock
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data: function() {
        return {
            menus: ["My Stock", "Search"],
            menuActive: false
        }
    }
}
</script>

<style scoped lang="scss">
    $point-color: #e85720;
    nav {
        position: fixed;
        top: 2rem;
        left: 3rem;

        > a#logo {
            all: unset;
            cursor: pointer;
            > p {
                font-size: 1.3rem;
                font-weight: 600;
                color: $point-color;
            }
        }
        > ul {
            margin-top: 1rem;
            > li {
                margin: 0.3rem 0;
                > a {
                    all: unset;
                    font-weight: 600;
                    opacity: 0.4;
                    color: #ffffff;
                    transition-duration: 0.2s;
                    cursor: pointer;
                    &:hover {
                        opacity: 1.0;
                    }
                }
            }
        }
    }
</style>