<template>
  <div class="row mx-0 align-items-center">
        <div class="col-md-6 border-end-md p-4 p-sm-5">
            <h2 class="h3 mb-4 mb-sm-5">Join MetaJobs.<br>Get premium benefits:</h2>
            <ul class="list-unstyled mb-4 mb-sm-5">
                <li class="d-flex mb-2"><i class="fi-check-circle text-primary mt-1 me-2"></i><span>Add and promote your Resumes</span></li>
                <li class="d-flex mb-2"><i class="fi-check-circle text-primary mt-1 me-2"></i><span>Easily manage your Apply List</span></li>
                <li class="d-flex mb-0"><i class="fi-check-circle text-primary mt-1 me-2"></i><span>Leave Interview reviews</span></li>
            </ul><img class="d-block mx-auto" src="img/signin-modal/signup.svg" width="344" alt="Illustartion">
            <div class="mt-sm-4 pt-md-3">Already have an account? <a href="#modal-memSingin" data-bs-toggle="modal" data-bs-dismiss="modal">Sign in</a></div>
        </div>
        <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"><a class="btn btn-outline-info rounded-pill w-100 mb-3" href="#"><i class="fi-google fs-lg me-1"></i>Sign in with Google</a><a class="btn btn-outline-info rounded-pill w-100 mb-3" href="#"><i class="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a>
            <div class="d-flex align-items-center py-3 mb-3">
                <hr class="w-100">
                <div class="px-3">Or</div>
                <hr class="w-100">
            </div>
            <form action="/member/insert" method="post" class="needs-validation" novalidate>
                <div class="mb-4">
                    <label class="form-label" for="signup-id">ID<span class='fs-sm text-muted'>&nbsp;&nbsp;영어/숫자&nbsp;조합&nbsp;4-20글자</span></label>
                    <input class="form-control" type="text" id="signup-id" name="mem_id" required pattern="[A-Za-z0-9]{4,20}" autocomplete="off">
                    
                </div>
                <div class="mb-4">
                    <label class="form-label" for="signup-password">Password<span class='fs-sm text-muted'>&nbsp;&nbsp;최소 4글자 이상</span></label>
                    <div class="password-toggle">
                        <input class="form-control" type="password" name="mem_pw" id="signup-password" minlength="4" required>
                        <label class="password-toggle-btn" aria-label="Show/hide password"></label>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label" for="signup-name">Name<span class='fs-sm text-muted'>&nbsp;&nbsp;한글&nbsp;2-10글자</span></label>
                    <input class="form-control" type="text" name="mem_name" id="signup-name" pattern="[가-힣]{2,10}" placeholder="이름" required>
                </div>
                <div class="mb-4">
                    <label class="form-label" for="signup-birth">Birth</label>
                    <div class="input-group input-group-lg">
                    <input class="form-control date-picker rounded pe-5" type="text" id="signup-birth" name="mem_birth" placeholder="Choose date" data-datepicker-options="{&quot;altInput&quot;: true, &quot;altFormat&quot;: &quot;F j, Y&quot;, &quot;dateFormat&quot;: &quot;Y-m-d&quot;}"><i class="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label" for="signup-address">Address</label>
                    <input class="form-control" type="text" name="mem_address" id="signup-address" placeholder="주소" required>
                </div>
                <div class="mb-4">
                    <label class="form-label" for="signup-phone">Phone</label>
                    <input class="form-control" type="text" name="mem_phone" id="signup-phone" placeholder="전화번호" required>
                </div>
                <div class="mb-4">
                    <label class="form-label" for="signup-email">Email</label>
                    <input class="form-control" type="email" name="mem_email" id="signup-email" placeholder="@gmail.com" required>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" id="agree-to-terms" required>
                    <label class="form-check-label" for="agree-to-terms">By joining, I agree to the <a href='#'>Terms of use</a> and <a href='#'>Privacy policy</a></label>
                </div>
                <button class="btn btn-primary btn-lg rounded-pill w-100" type="submit">Create Member</button>
            </form>
        </div>
    </div>
    
    <div class="d-flex justify-content-between mb-3">
        <h2>member page</h2>

        <button 
            class="btn btn-primary"
            @click="moveToCreatePage">
            Create Member
        </button>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>