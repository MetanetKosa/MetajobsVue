<template>
<!--  
    <div class="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
        <h3 class="modal-title mt-4 text-center">회원 정보</h3>
        <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body px-sm-5 px-4"
        v-for="(member, index) in members"
            :key="index">
        <form class="needs-validation" action="/member/update" method="post" novalidate>
            <input type="hidden" name="mem_id" value={{member.mem_id}}>
            <div class="mb-3">
                <label class="form-label" for="id">ID <span class='text-danger'>*</span>&nbsp;&nbsp;&nbsp;&nbsp;{{member.mem_id}}</label>
            </div>
            <div class="mb-3">
                <label class="form-label" for="name">회원명 <span class='text-danger'>*</span>&nbsp;&nbsp;&nbsp;&nbsp;{{member.mem_name}}</label>
            </div> 
            <div class="mb-3">
                <label class="form-label" for="birth">생년월일 &nbsp;&nbsp;<fmt:formatDate pattern="yyyy년 MM월 dd일" value="{{member.mem_birth}}"/></label>
                <div class="input-group input-group-lg">
                <input class="form-control date-picker rounded pe-5" type="text" id="reDate" name="mem_birth" placeholder="Choose date" data-datepicker-options="{&quot;altInput&quot;: true, &quot;altFormat&quot;: &quot;F j, Y&quot;, &quot;dateFormat&quot;: &quot;Y-m-d&quot;}"><i class="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
                </div>
            </div> 
            <div class="mb-3">
                <label class="form-label" for="phone">핸드폰번호 &nbsp;&nbsp;</label>
                <input class="form-control" type="text" id="phone" name="mem_phone" placeholder="회원 핸드폰"/> required>
            </div> 
            <div class="mb-3">
                <label class="form-label" for="address">주소 &nbsp;&nbsp;</label>
                <input class="form-control" type="text" id="address" name="mem_address" placeholder="회원 주소"/>" required>
            </div>
            <div class="mb-3">
                <label class="form-label" for="email">Email &nbsp;&nbsp;</label>
                <input class="form-control" type="text" id="email" name="mem_email" placeholder="회원 email"/>" required>
            </div>
            <button class="btn btn-primary d-block w-100 mb-4" type="submit">회원정보 수정</button>
        </form>
    </div>
      -->

     <main class="page-wrapper">
        <div class="container mt-5 pt-5 mb-md-4 py-5">
            <div class="row justify-content-center pb-sm-2">
                <div class="col-lg-11 col-xl-10 mt-5">

                        <div class="card shadow-sm p-md-2 mx-n4 mx-md-0">
                            <div class="card-body p-4">
                                <div class="d-sm-flex justify-content-between align-items-start pb-4">
                                    <div class="order-sm-1">
                                        <h3 class="h4 mb-sm-4">{{member.mem_name}}&nbsp;&nbsp;회원님&nbsp;</h3>
                                        <h4 class="h5">회원정보 확인</h4>
                                        <ul class="list-unstyled text-nav">
                                            <li><span class='text-muted'>생년월일 :&nbsp;</span>{{member.mem_birth}}</li>
                                            <li><span class='text-muted'>휴대폰번호 :&nbsp;</span>{{member.mem_phone}}</li>
                                            <li><span class='text-muted'>주소 :&nbsp;</span>{{member.mem_address}}</li>
                                            <li><span class='text-muted'>이메일 :&nbsp;</span>{{member.mem_email}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
                            <div class="row">
                                <div class="col-10">
                                    <br><br>
                                    <h3 class="h4 mb-sm-4">회원정보 수정</h3>
                                    <div class="d-flex flex-column  bg-light rounded-3 p-4 px-md-5" style="width:600px;">
                                        <form @submit.prevent="update" role="form">
                                            <input type="hidden" name="mem_id" value={{member.mem_id}}>
                                            <div class="mb-3">
                                                <label class="form-label" for="birth">생년월일 &nbsp;&nbsp;</label>
                                                <input class="form-control date-picker rounded pe-5" type="text" id="reDate" v-model="state.form.mem_birth" placeholder="Choose date" data-datepicker-options="{&quot;altInput&quot;: true, &quot;altFormat&quot;: &quot;F j, Y&quot;, &quot;dateFormat&quot;: &quot;Y-m-d&quot;}"><i class="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
                                            </div><br>
                                            <div class="mb-3">
                                                <label class="form-label" for="phone">핸드폰번호 &nbsp;&nbsp;</label>
                                                <input class="form-control" type="text" id="phone" v-model="state.form.mem_phone" placeholder="회원 핸드폰" required>
                                            </div><br>
                                            <div class="mb-3">
                                                <label class="form-label" for="address">주소 &nbsp;&nbsp;</label>
                                                <input class="form-control" type="text" id="address" v-model="state.form.mem_address" placeholder="회원 주소" required>
                                            </div><br>
                                            <div class="mb-3">
                                                <label class="form-label" for="email">Email &nbsp;&nbsp;</label>
                                                <input class="form-control" type="text" id="email" v-model="state.form.mem_email" placeholder="회원 email" required>
                                            </div>
                                            <br>
                                            <div id="btn_group" style="float:right;">                             
                                                <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto" type="submit">정보 수정</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto" type="button" @click="deleteMember">회원 탈퇴</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <!-- <div class="d-flex-end flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
                            <div style="margin-left:650px;">                             
                                <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto" type="submit">정보 수정</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto" type="button" data-oper=''>회원 탈퇴</button>
                            </div>
                        </div> -->
                    </div>                           
                </div>
            </div>
    </main>
    
</template>

<script>
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import axios from 'axios';

export default {

    // props: {
    //     members: Object,
    //     default: () => {
    //         return {mem_name: '',
    //                 mem_phone: '',
    //                 mem_birth: '',
    //                 mem_address: '',
    //                 mem_email: ''} ;
    //     }
    // }



    // props: {
    //     members: {
    //         type: Array,
    //         required: true
    //     }
    // },

    // setup(prop) {
    //     const router = useRouter();
    // }

    setup() {

    const member = ref([]);

    axios.get('api/users/member1111').then(({data}) => {
        member.value = data;
        console.log(member);
    })

    const router = useRouter();

    const state = reactive({
        members: [],
        form: {
            mem_id: "member1111",
            mem_birth: '',
            mem_phone: '',
            mem_address: '',
            mem_email: ''
        }
    })

    const update = () => {
        const args = JSON.parse(JSON.stringify(state.form));
        args.members = JSON.stringify(state.members);
        console.log(args.members);
        axios.put('/api/users/member1111', args).then(() => {
            alert("회원정보 수정 완료!");
            router.push({path: "/mypage"})
        })
    }

    const deleteMember = () => {
        if (confirm("정말 탈퇴하시겠습니까?")) {
            axios.delete("/api/users/member1111").then(() => {
                alert("탈퇴되었습니다")
                router.push({path: "/"})
            })
        }

    }

    return {
        member,
        state,
        update,
        deleteMember,
    }
    
}
    

}
</script>

<style>

</style>