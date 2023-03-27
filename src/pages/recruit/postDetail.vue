<template>
    <PostDetail :postDetailValue = "postDe"/>
</template>

<script>

import axios from 'axios';
import { reactive } from 'vue';
import PostDetail from '../../components/post/PostDetail.vue';
export default {
    components: {
        PostDetail,
  },
  setup(){
        const route = useRoute();
        const postDe = ref(null);
        // const originalResume = ref(null);
       
       const postNo = route.params.postNo;

       const getPost = async() => {
            const res = await axios.get(`localhost:8082/post/${postNo}`);
            postDe.value = {...res.data};
            console.log(postDe.value);
 
       };
       getPost();
        return {
            route
        }
    }
  }

</script>

<style>

</style>