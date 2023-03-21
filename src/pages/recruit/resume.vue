<template>
  <h1>Resume Page</h1>
  <ResumeForm /> 
  <!-- <ResumeList /> -->
</template>

<script>
import ResumeForm from '@/components/ResumeForm.vue';
import ResumeList from '@/components/ResumeList.vue';
export default {  
  components: {
    ResumeForm,
    ResumeList
  },

}
</script>

<style>

</style>