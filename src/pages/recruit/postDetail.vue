<template>
    <PostDetail :postDetailValue = "postDe"/>
</template>

<script>

import axios from 'axios';
import {useRoute} from 'vue-router';
import {ref} from '@vue/reactivity';
import PostDetail from '@/components/post/PostDetail.vue';
export default {
    components: {
        PostDetail,
  },
  setup(){
        const route = useRoute();
        const postDe = ref(null);
        // const originalResume = ref(null);
       
       const postNo = route.params.postNo;
       console.log("psotNo 확인 " + postNo);

       const getPost = async() => {
            const res = await axios.get(`/post/${postNo}`);
            postDe.value = {...res.data};
            console.log(postDe.value);
 
       };
       getPost();
        return {
            route,
            postDe,
        }
    }
  }

</script>

<style>

</style>