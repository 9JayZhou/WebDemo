<template>
    <div class="homepage" ref="HomePageRef">
        <h3>HomePage页面</h3>
        <hr/>
       <ProSlot>
           <h5 slot="proslotdemo" >插槽内容变为WeClome OK</h5>
<!--           缩写-->
<!--           <h3 #proslotdemo="参数值">插槽内容变为WeClome OK</h3>-->
       </ProSlot>
        <hr/>
        <CompProps :Commod="list">
            <p>父组件-->子组件 props</p>
            <p>子组件-->父组件 $emit</p>
        </CompProps>
        <hr/>
        <comp-props2 @HandCall="propscall">
        </comp-props2>
        <div class="CompHand">
            <ul>
                <li v-for="(hand,index) in CompHand" :key="index">
                    {{hand.id}}--->{{hand.counter}}--->{{hand.cost}}
                </li>
            </ul>
        </div>
        <hr/>
        <CompRef ref="RefDemo"></CompRef>
    </div>
</template>

<script>
    import ProSlot from '../views/ProSlot'
    import CompProps from '../views/CompProps'
    import CompProps2 from  '../views/CompProps2'
    import CompRef from  '../views/CompRef'
    export default {
        name: "HomePage",
        data(){
            return {
                list:[
                    {commodity:"鞋类",price:"$299"},
                    {commodity:"衣类",price:"$499"},
                    {commodity:"裤类",price:"$399"},
                    {commodity:"帽类",price:"$199"},
                ],
                CompHand:null,
            }
        },
        methods:{
            propscall(Props2){
                // eslint-disable-next-line no-console
               this.CompHand=Props2;
            }
        },
        components :{
            ProSlot,
            // eslint-disable-next-line vue/no-unused-components
            CompProps,
            CompProps2,
            CompRef
        },
        mounted() {
            // eslint-disable-next-line no-console
            console.log("CompRef实例",this.$refs.RefDemo)
            // eslint-disable-next-line no-console
            console.log("HomepageDom结构",this.$refs.HomePageRef)
        }
    }
</script>

<style lang="less" scoped>
.homepage{
    width: 100%;
    margin: 0 auto;
}
</style>
