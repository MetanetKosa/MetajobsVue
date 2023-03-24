<template>
  <div class="modal-body px-0 py-2 py-sm-0">
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
            <form action="/company/login" method="post" class="needs-validation" novalidate>
                <div class="mb-4">
                    <label class="form-label mb-2" for="signin-id">ID</label>
                    <input class="form-control" id="signin-id" name="com_id" placeholder="Enter ID" required>
                </div>
                <div class="mb-4">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <label class="form-label mb-0" for="signin-password">Password</label><a class="fs-sm" href="#">Forgot password?</a>
                    </div>
                    <div class="password-toggle">
                        <input class="form-control" type="password" name="com_pw" id="signin-password" placeholder="Enter password" required>
                    </div>
                    </div>
                <button id="login" class="btn btn-primary btn-lg rounded-pill w-100" type="submit">Sign in</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>