<template>
<ResumeUpdate :resumes="resume"
@update-resume="updateResume"
/> 
<!-- <input v-model="resume.resume_title" type="text" class="form-control"> -->
</template>

<script>
// import ResumeUpdate from '@/components/resume/ResumeUpdate.vue';
// import {useRoute, useRouter} from 'vue-router';
// import axios from 'axios';
// import {ref} from '@vue/reactivity';
// import {reactive} from "vue";
export default {
//     components: {
//    ResumeUpdate,
//   },
//     setup(){
//         const route = useRoute();
//          const router = useRouter();
//         const resume = ref(null);
        
//        const resumeId = route.params.id;

     

//        const getResume = async() => {
//             const res = await axios.get(`/users/1/resumes/${resumeId}`);
//             resume.value = {...res.data};
//             console.log(resume.value);
        

//             // originalResume.value = {...res.data};
        
    
        
//        };
      

//        const deleteResume = async(resumeNo) => {
//         console.log(resumeNo);
//         try{
//             await axios.delete(`/users/1/resumes/${resumeNo}` );
//              router.push({path: '/resume'});
           

//         }catch(err){
//             console.log(err);
//         }
//        }
        
//         getResume();
//         return {
//         resume,
//         deleteResume,
//         }
//     }
   

}
</script>

<style>

</style>