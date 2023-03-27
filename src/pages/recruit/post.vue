<template>
  <postList :postLists = "state.postLists"/>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';
import PostListVue from '@/components/post/PostList.vue';
export default {

    components: {
        PostListVue,
    },
    setup(){
        const state = reactive({
            postLists: []
        })
        axios.get("/posts").then(({data})=>{
            state.postLists = data;
            console.log(data);
        });
       
        return{
            state
        }
    }
}
</script>

<style>

</style>