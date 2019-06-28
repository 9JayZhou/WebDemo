<template>
    <div class="compprops">
        <p>父--->子组件传值</p>
        <ul>
            <li v-for="(comm,index) in Commod" :key="index">{{ comm.commodity }}---{{comm.price}}---{{index}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CompProps",
        props:{
            Commod:{
                type:Array,
                required:true,
            }
        },

    }
</script>

<style scoped>

</style>
