<template>
    <!-- <MyPage :members="members"/> -->

    <div class="mt-5 pt-5">
    <div class="container mt-5 pt-5">
        <div class="row d-flex justify-content-center align-items-center h-100 mt-5 pt-5">
            <div class="col-3 modal-body px-0 py-2 py-sm-0">
                <div class="row mx-0 align-items-center">
                    <div class="col-md-6 border-end-md p-4 p-sm-5">
                        <h2 class="h3 mb-4 mb-sm-5">Hey there!<br>Welcome Metajobs back.</h2><img class="d-block mx-auto" src="img/signin-modal/signin.svg" width="344" alt="Illustartion">
                    </div>
                    <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"><a class="btn btn-outline-info rounded-pill w-100 mb-3" href="#"><i class="fi-google fs-lg me-1"></i>Sign in with Google</a><a class="btn btn-outline-info rounded-pill w-100 mb-3" href="#"><i class="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a>
                        <div class="d-flex align-items-center py-3 mb-3">
                            <hr class="w-100">
                            <div class="px-3">Or</div>
                            <hr class="w-100">
                        </div>
                        <form @submit.prevent="signIn" role="form">
                            <div class="mb-4">
                                <label class="form-label mb-2" for="signin-id">ID</label>
                                <input class="form-control" type="text" v-model="state.form.mem_id" placeholder="Enter ID" required>
                            </div>
                            <div class="mb-4">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <label class="form-label mb-0" for="signin-password">Password</label><a class="fs-sm" href="#">Forgot password?</a>
                                </div>
                                <div class="password-toggle">
                                    <input class="form-control" type="password" v-model="state.form.mem_pw" placeholder="Enter password" required>
                                </div>
                                </div>
                            <button class="btn btn-primary btn-lg rounded-pill w-100" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
import axios from 'axios';
//import MyPage from '@/components/MyPage.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
    // data: function() {
    //     return {
    //         mem_id: '',
    //         mem_pw: '',
    //         mem_name: '',
    //         mem_birth: '',
    //         mem_address: '',
    //         mem_phone: '',
    //         mem_email: ''
    //     }
    // },

    // methods: {
    //     signIn: function() {
    //         console.log(this.mem_id, this.mem_pw);
    //         var url = '/api/users/login';
    //         var data = {
    //             mem_id: this.mem_id,
    //             mem_pw: this.mem_pw
    //         }

    //         axios.post(url, data).then(function(response) {
    //             console.log(response);
    //             this.$useRouter.push({
    //                 name: "SignIn"
    //             })
    //             location.href = '/mypage'
    //             alert("로그인 완료!");
    //         }).catch(function(error) {
    //             console.log(error);
    //         });
    //     }
    // }
    // components: {
    //     MyPage
    // },

    setup() {
        
        const router = useRouter();

        const state = reactive({
            members: [],
            form: {
                mem_id: '',
                mem_pw: ''
            }
        })

        const signIn = () => {
            const args = JSON.parse(JSON.stringify(state.form));
            args.members = JSON.stringify(state.members);
            axios.post("/api/users/login", args).then(() => {
                alert("로그인 완료!");
                router.push({path: "/mypage"})
            })
        }

        // const members = ref([]);

        // axios.get("/api/users/member55").then(({data}) => {
        //     state.members = data;
        //     console.log(state.members);
        // });

        // axios.get("/api/users").then(({data}) => {
        //     members.value = data;
        //     console.log(members);
        // });

        return {
            state,
            signIn,
        }
    }

}
</script>

<style>

</style>