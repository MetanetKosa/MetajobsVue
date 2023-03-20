<template>  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="nav">
      <li class="nav-item active">
        <router-link class="navbar-brand" :to="{name: 'Home'}">Home</router-link>
      </li>
      <li>
        <router-link class="nav-link" :to="{name: 'Member'}">Member</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" :to="{name: 'Resume'}">Resume</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" :to="{name: 'Post'}">Post</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" :to="{name: 'Review'}">Review</router-link>
      </li>
    </ul>
  </nav>

  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {

}

</script>

<style>
  .nav {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .nav li {
    display: inline-block;
    font-size: 20px;
    padding: 10px;
  }
</style>
