<template>
   <ResumeList :resumes="state.resumes" />  
</template>

<script>
// import axios from "axios";
import {reactive} from "vue";
// import ResumeForm from '@/components/ResumeForm.vue';
import ResumeList from '@/components/resume/ResumeList.vue';
export default {  
  components: {
    ResumeList,
  },
  setup(){
    const state = reactive({
      resumes: []
    })

    // axios.get("/users/1/resumes").then(({data}) =>{
      state.resumes = data;
      console.log(data);
    // });
    return {state}
  }
 

}
</script>

<style>
/* .card-body {
    flex: 1 1 auto;
    padding: 1.25rem 1.25rem;
}
.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1*var(--bs-gutter-y));
    margin-right: calc(-0.5*var(--bs-gutter-x));
    margin-left: calc(-0.5*var(--bs-gutter-x));
} */
</style>