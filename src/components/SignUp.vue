<template>
    <div class="mt-5 pt-3">
    <div class="container mt-5">
        <div class="row d-flex justify-content-center align-items-center h-100 mt-5">
        <div class="row mx-0 align-items-center">
                <div class="col-md-6 border-end-md p-4 p-sm-5">
                    <h2 class="h3 mb-4 mb-sm-5">Join MetaJobs.<br>Get premium benefits:</h2>
                    <ul class="list-unstyled mb-4 mb-sm-5">
                        <li class="d-flex mb-2"><i class="fi-check-circle text-primary mt-1 me-2"></i><span>Add and promote your Resumes</span></li>
                        <li class="d-flex mb-2"><i class="fi-check-circle text-primary mt-1 me-2"></i><span>Easily manage your Apply List</span></li>
                        <li class="d-flex mb-0"><i class="fi-check-circle text-primary mt-1 me-2"></i><span>Leave Interview reviews</span></li>
                    </ul><img class="d-block mx-auto" src="img/signin-modal/signup.svg" width="344" alt="Illustartion">
                    <div class="mt-sm-4 pt-md-3">Already have an account? <router-link :to="{name: 'SignIn'}">Sign in</router-link></div>
                </div>
                <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"><a class="btn btn-outline-info rounded-pill w-100 mb-3" href="#"><i class="fi-google fs-lg me-1"></i>Sign in with Google</a><a class="btn btn-outline-info rounded-pill w-100 mb-3" href="#"><i class="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a>
                    <div class="d-flex align-items-center py-3 mb-3">
                        <hr class="w-100">
                        <div class="px-3">Or</div>
                        <hr class="w-100">
                    </div>
                    <form @submit.prevent="signUp" role="form">
                        <div class="mb-4">
                            <label class="form-label" for="signup-id">ID<span class='fs-sm text-muted'>&nbsp;&nbsp;영어/숫자&nbsp;조합&nbsp;4-20글자</span></label>
                            <input class="form-control" type="text" v-model="state.form.mem_id" required pattern="[A-Za-z0-9]{4,20}" autocomplete="off">
                            
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="signup-password">Password<span class='fs-sm text-muted'>&nbsp;&nbsp;최소 4글자 이상</span></label>
                            <div class="password-toggle">
                                <input class="form-control" type="password" v-model="state.form.mem_pw" id="signup-password" minlength="4" required>
                                <label class="password-toggle-btn" aria-label="Show/hide password"></label>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="signup-name">Name<span class='fs-sm text-muted'>&nbsp;&nbsp;한글&nbsp;2-10글자</span></label>
                            <input class="form-control" type="text" v-model="state.form.mem_name" id="signup-name" pattern="[가-힣]{2,10}" placeholder="이름" required>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="signup-birth">Birth</label>
                            <div class="input-group input-group-lg">
                            <input class="form-control date-picker rounded pe-5" type="text" id="signup-birth" v-model="state.form.mem_birth" placeholder="Choose date" data-datepicker-options="{&quot;altInput&quot;: true, &quot;altFormat&quot;: &quot;F j, Y&quot;, &quot;dateFormat&quot;: &quot;Y-m-d&quot;}"><i class="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="signup-address">Address</label>
                            <input class="form-control" type="text" v-model="state.form.mem_address" id="signup-address" placeholder="주소" required>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="signup-phone">Phone</label>
                            <input class="form-control" type="text" v-model="state.form.mem_phone" id="signup-phone" placeholder="전화번호" required>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="signup-email">Email</label>
                            <input class="form-control" type="email" v-model="state.form.mem_email" id="signup-email" placeholder="@gmail.com" required>
                        </div>
                        <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" id="agree-to-terms" required>
                            <label class="form-check-label" for="agree-to-terms">By joining, I agree to the <a href='#'>Terms of use</a> and <a href='#'>Privacy policy</a></label>
                        </div>
                        <button class="btn btn-primary btn-lg rounded-pill w-100" type="submit">Sign Up</button>
                        <!-- <button class="btn btn-primary btn-lg rounded-pill w-100" @click="movetoPage" type="submit">Sign Up</button> -->

                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
import axios from 'axios';
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
    //     signUp: function() {
    //         console.log(this.mem_id, this.mem_pw);
    //         var url = '/api/users/signup';
    //         var data = {
    //             mem_id: this.mem_id,
    //             mem_pw: this.mem_pw,
    //             mem_name: this.mem_name,
    //             mem_birth: this.mem_birth,
    //             mem_address: this.mem_address,
    //             mem_phone: this.mem_phone,
    //             mem_email: this.mem_email
    //         }

    //         axios.post(url, data).then(function(response) {
    //             console.log(response);
    //             alert("회원가입 완료!");
    //             location.href = '/users/signin'
    //         }).catch(function(error) {
    //             console.log(error);
    //         });
    //     }
    // },

    setup() {
        const router = useRouter();

        const state = reactive({
            members: [],
            form: {
                mem_id: '',
                mem_pw: '',
                mem_name: '',
                mem_birth: '',
                mem_address: '',
                mem_email: ''
            }
        })

        const signUp = () => {
            const args = JSON.parse(JSON.stringify(state.form));
            args.members = JSON.stringify(state.members);
            axios.post("/api/users/signup", args).then(() => {
                alert("회원가입 완료!");
                router.push({path: "/signin"})
            })
        }

    //     const movetoPage = () => {
    //         alert("회원가입 완료! 로그인 페이지로 이동합니다...>>")
    //         router.push({
    //             name: "SignIn"
    //         });
    //     } 
        

    //     const user = reactive({
    //         mem_id: this.mem_id,
    //         mem_pw: '',
    //         mem_name: '',
    //         mem_birth: '',
    //         mem_address: '',
    //         mem_email: ''
    //     })

    //     //console.log(joinUser);

    //     const signUp = () => {
    //         axios.post('/api/users/signup', JSON.stringify(user)
    //         .then(function(response) {
    //             console.log(response);
    //             router.push({
    //                 name: 'Home'
    //             });
    //         }).catch(function(error) {
    //             console.log(error);
    //         }));
    //     }

    //     // var url = '/api/users/signup';
    //     // joinUser = {
    //     //     mem_id: this.mem_id,
    //     //     mem_pw: this.mem_pw,
    //     //     mem_name: this.mem_name,
    //     //     mem_birth: this.mem_birth,
    //     //     mem_address: this.mem_address,
    //     //     mem_phone: this.mem_phone,
    //     //     mem_email: this.mem_email
    //     // }

    //     // const signUp = () => {
    //     //     axios.post(url, joinUser).then(function(response) {
    //     //         console.log(response);
    //     //         router.push({
    //     //             name: 'Home'
    //     //         });
    //     //     }).catch(function(error) {
    //     //         console.log(error);
    //     //     });
    //     // }

    //     // const state = reactive({
    //     //     members: []
    //     // })

    //     // axios.get("/api/users/member55").then(({data}) => {
    //     //     state.members = data;
    //     //     console.log(data);
    //     // });
        

    //     // const signUp = async() => {
    //     //     //const url = `localhost:8082/users/signup`;
    //     //     let saveData = {};
    //     //     saveData.mem_id = this.mem_id;
    //     //     saveData.mem_pw = this.mem_pw;
    //     //     saveData.mem_name = this.mem_name;
    //     //     saveData.mem_birth = this.mem_birth;
    //     //     saveData.mem_address = this.mem_address;
    //     //     saveData.mem_email = this.mem_email;

    //     //     axios.post('/api/users/signup', JSON.stringify(saveData))
    //     //         .then(res => {
    //     //             console.log(res.saveData);
    //     //         })
                

    //     //     alert("회원가입 완료!")
            

    //     //     // const body = {
    //     //     //     mem_id: state.mem_id,
    //     //     //     mem_pw: state.mem_pw,
    //     //     //     mem_name: state.mem_name,
    //     //     //     mem_birth: state.mem_birth,
    //     //     //     mem_address: state.mem_address,
    //     //     //     mem_email: state.mem_email,
    //     //     // }
    //     // }

    //     //const { data } = await.axios.post(url, body);
    //     //consolg.log(data);

        return {
            //signUp,
            //movetoPage,
            //joinUser,
            state,
            signUp,
        }
     }

}
</script>

<style>

</style>