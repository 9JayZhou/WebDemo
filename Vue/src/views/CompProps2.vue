<template>
    <div class="ProSlot2">
        <p>子--->父组件传值</p>
        <button @click="HanProp">子-->父 传值</button>
    </div>
</template>

<script>
    export default {
        name: "ProSlot2",
        data(){
            return{
                Props2:[
                    {"id":0,"counter":963,"cost":"$321"},
                    {"id":1,"counter":6589,"cost":"$121"},
                    {"id":2,"counter":256,"cost":"$229"},
                    {"id":3,"counter":641,"cost":"$109"},
                ]
            }
        },
        methods:{
            HanProp(){
                this.$emit("HandCall",this.Props2)
            }
        }
    }
</script>

<style scoped>

</style>
