<template>
    <div class="proslot">
        <h5>proslot子组件(具名插槽)</h5>
        <slot name="proslotdemo">proSlot插槽内容</slot>
    </div>
</template>

<script>
    export default {
        name: "ProSlot"
    }
</script>

<style scoped>

</style>
