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
      <li class="nav-item active">
        <button class="btn btn-sm text-primary d-none d-lg-block order-lg-3" @click="moveToSignInPage"><i class="fi-user me-2"></i>Sign in</button>
      </li>
      <li class="nav-item active">
        <button class="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3" @click="moveToSignUpPage"><i class="fi-plus me-2"></i>Sign<span class='d-none d-sm-inline'> Up</span></button>
      </li>
      <li class="nav-item active">
        <button class="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3" @click="moveToMyPage"><i class="fi-plus me-2"></i>My Page</button>
      </li>
    </ul>
  </nav>

  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import SignIn from '@/components/SignIn.vue';
import SignUp from '@/components/SignUp.vue';
import MyPage from '@/components/MyPage.vue';
import { useRouter } from 'vue-router';
import axios from "axios";

export default {
  components : {
    SignIn,
    SignUp,
    MyPage,
  },

  setup() {
    const router = useRouter();

    const moveToSignInPage = () => {
      router.push({
        name: 'SignIn'
      });
    }

    const moveToSignUpPage = () => {
      router.push({
        name: 'SignUp'
      })
    }

    const moveToMyPage = () => {
      router.push({
        name: 'MyPage'
      })
    }

    return {
      moveToSignInPage,
      moveToSignUpPage,
      moveToMyPage,
    }

  }
  

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
