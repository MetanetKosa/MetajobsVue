<template>
  <postList :posts = "state.posts"/>
</template>

<script>
console.log("PostList 확인 :"   );
import axios from 'axios';
import { reactive } from 'vue';
import PostList from '@/components/post/PostList.vue';
export default {  
  components: {
    PostList
  },
  setup(){
    const state = reactive({
      posts: []
    })
    
    axios.get("/posts").then(({data}) =>{
      state.posts = data;
      console.log("데이터 확인 :" + data);
      console.log("posts데이터 확인 :" +  state.posts);
    });
    return {state}
  }
}
// export default {
//     components: {
//         PostList,
//     },
//     setup(){
//         const state = reactive({
//             posts: []
//         })
//         axios.get("/posts").then(({data})=>{
//             state.posts = data;
//             console.log(data);  
//         });
//         return{
//             state
//         }
//     }
// }
</script>

<style>

</style>