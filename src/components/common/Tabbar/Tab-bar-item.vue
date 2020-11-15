<template>
    <div class="tabbar" @click="itemClick">
        <slot v-if="!isActived" name="slot-img"></slot>
        <slot v-else name="slot-active-item"></slot>
        <div :style="activeStyle">
            <slot name="slot-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tab-bar-item",
        data() {
            return {
                isActive: false
            }
        },
        computed: {
            isActived() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                return this.isActived?{color:this.activeColor}:{}
            }
        },
        props: {
            path: String,
            activeColor:String
        },
        methods: {
            itemClick() {
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>

    .tabbar {
        text-align: center;
        height: 49px;
    }

</style>
