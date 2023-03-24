<template>  
<Header></Header>
<!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
  </nav>  -->
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/common/header.vue"
export default {
  name: 'App',
  components:{
    Header
  }
}
// import SignIn from '@/components/SignIn.vue';
// import SignUp from '@/components/SignUp.vue';
// import MyPage from '@/components/MyPage.vue';
// import { useRouter } from 'vue-router';
// import axios from "axios";

// export default {
//   components : {
//     SignIn,
//     SignUp,
//     MyPage,
//   },

//   setup() {
//     const router = useRouter();

//     const moveToSignInPage = () => {
//       router.push({
//         name: 'SignIn'
//       });
//     }

//     const moveToSignUpPage = () => {
//       router.push({
//         name: 'SignUp'
//       })
//     }

//     const moveToMyPage = () => {
//       router.push({
//         name: 'MyPage'
//       })
//     }

//     return {
//       moveToSignInPage,
//       moveToSignUpPage,
//       moveToMyPage,
//     }

//   }
  

// }

</script>

<style>
 .page-loading {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -webkit-transition: all .4s .2s ease-in-out;
            transition: all .4s .2s ease-in-out;
            background-color: #fff;
            opacity: 0;
            visibility: hidden;
            z-index: 9999;
        }
        
        .page-loading.active {
            opacity: 1;
            visibility: visible;
        }
        
        .page-loading-inner {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            text-align: center;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            -webkit-transition: opacity .2s ease-in-out;
            transition: opacity .2s ease-in-out;
            opacity: 0;
        }
        
        .page-loading.active>.page-loading-inner {
            opacity: 1;
        }
        
        .page-loading-inner>span {
            display: block;
            font-size: 1rem;
            font-weight: normal;
            color: #666276;
            ;
        }
        
        .page-spinner {
            display: inline-block;
            width: 2.75rem;
            height: 2.75rem;
            margin-bottom: .75rem;
            vertical-align: text-bottom;
            border: .15em solid #bbb7c5;
            border-right-color: transparent;
            border-radius: 50%;
            -webkit-animation: spinner .75s linear infinite;
            animation: spinner .75s linear infinite;
        }
        
        @-webkit-keyframes spinner {
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        
        @keyframes spinner {
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
  /* .nav {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .nav li {
    display: inline-block;
    font-size: 20px;
    padding: 10px;
  } */

 
</style>
