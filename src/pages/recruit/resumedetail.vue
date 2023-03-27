<template>
<ResumeDetail :resumes="resume"/> 
<!-- <input v-model="resume.resume_title" type="text" class="form-control"> -->
</template>

<script>
import ResumeDetail from '@/components/ResumeDetailForm.vue';
import {useRoute} from 'vue-router';
import axios from 'axios';
import {ref} from '@vue/reactivity';
import {reactive} from "vue";
export default {
    components: {
    ResumeDetail,
  },
    setup(){
        const route = useRoute();
        const resume = ref(null);
        // const originalResume = ref(null);
       
       const resumeId = route.params.id;

        const state = reactive({
            resumes: []
        })

       const getResume = async() => {
            const res = await axios.get(`/users/1/resumes/${resumeId}`);
            resume.value = {...res.data};
            console.log(resume.value);
        

            // originalResume.value = {...res.data};
        
    
        
       };
       getResume();
        return {
        resume,
        state,
        }
    }
   

}
</script>

<style>

</style>