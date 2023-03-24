<template>
<!-- 
    <div class="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
        <h3 class="modal-title mt-4 text-center">회원 정보</h3>
        <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body px-sm-5 px-4">
        <form class="needs-validation" action="/member/update" method="post" novalidate>
            <input type="hidden" name="mem_id" value="${member.mem_id}">
            <div class="mb-3">
                <label class="form-label" for="id">ID <span class='text-danger'>*</span>&nbsp;&nbsp;&nbsp;&nbsp;<c:out value="${member.mem_id}"/></label>
            </div>
            <div class="mb-3">
                <label class="form-label" for="name">회원명 <span class='text-danger'>*</span>&nbsp;&nbsp;&nbsp;&nbsp;<c:out value="${member.mem_name}"/></label>
            </div> 
            <div class="mb-3">
                <label class="form-label" for="birth">생년월일 &nbsp;&nbsp;<fmt:formatDate pattern="yyyy년 MM월 dd일" value="${member.mem_birth}"/></label>
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
        <!-- Page content-->
        <!-- Page container-->
        <div class="container mt-5 pt-5 mb-md-4 py-5">
            <!-- Page content-->
            <div class="row justify-content-center pb-sm-2">
                <div class="col-lg-11 col-xl-10 mt-5">
                    <!-- Page title-->
                    <!-- <h1 class="h2 text-center pb-4 mb-3">My Page</h1> -->

                    <!-- Step 5: Review-->
                    <div class="bg-light rounded-3 pt-4 pb-0 px-4 p-md-5 mb-3">
                        <!-- Title + Action buttons-->
                        <div class="d-md-flex align-items-center mb-4 pb-md-2">
                            <h2 class="h4 mb-md-0"><i class="fi-eye-on text-primary fs-5 mt-n1 me-2 pe-1"></i>${resume.resume_title }</h2>
                            <div class="ms-md-auto">
                                <div class="dropdown d-lg-none">
                                    <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-align-justify me-1"></i>Actions</button>
                                    <div class="dropdown-menu dropdown-menu-end my-1"><a class="dropdown-item" href="#">
                                    <i class="fi-trash me-2"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Resume preview-->
                        <div class="card shadow-sm p-md-2 mx-n4 mx-md-0">
                            <div class="card-body p-4">
                                <div class="d-sm-flex justify-content-between align-items-start pb-4">
                                    <div class="order-sm-1">
                                        <h3 class="h4 mb-sm-4">이사라</h3>
                                        <h4 class="h5">기본정보</h4>
                                        <ul class="list-unstyled text-nav">

                                            <li><span class='text-muted'>생년월일:</span>19950504</li>
                                            <li><span class='text-muted'>휴대폰번호:</span>0101234555</li>
                                            <li><span class='text-muted'>주소:</span>서울</li>
                                            <li><span class='text-muted'>이메일:</span>dltkfk@naver.com</li>

                                            <li><span class='text-muted'>성별:</span> ${resume.resume_gender}</li>
                                            <li><span class='text-muted'>경력여부:</span> ${resume.resume_career}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="border-top py-4">
                                    <h4 class="h5">자기소개서</h4>
                                    <ul class="list-unstyled text-nav">
                                        <li><span class='text-muted'> ${resume.resume_cv}</span></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- Navigation-->
                        <div class="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
                            <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto" type="button" data-oper=''>수정</button>
                        </div>
                    </div>
                    <form id='operForm' action="/resume/resumeModify" method="get">
                    <input type='hidden' id= 'resume_no' name='resume_no' value='<c:out value="${resume.resume_no}"/>'>
                    <input type='hidden' id= 'mem_no' name='mem_no' value='<c:out value="${resume.mem_no}"/>'>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>