<template>
<div class="container mt-5 mb-md-4 py-5">
      <div class="row justify-content-center pb-sm-2 " >
        <div class="col-lg-11 col-xl-10">
          <div class="text-center pb-4 mb-3">
            <h1 class="h2 mb-4">이력서 등록</h1>
          </div>
          <div class="bg-light rounded-3 p-4 p-md-5 mb-3">
            <h2 class="h4 mb-4">
                <i class="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>이력서
            </h2>
            <form role="form" >
              <div class="row">
                <div class="col-12 mb-4" >
                    <input  class="form-control form-control-lg" type="text"
										placeholder="
                                    이력서 제목을 입력하세요(100자까지 가능)*">
                </div>
                  <div class="order-sm-1">
                    <h4 class="h5">기본정보</h4>
                    <ul class="list-unstyled text-nav">
                      <li><span class='text-muted'>생년월일:</span><fmt:formatDate pattern="YYYY/MM/dd" /></li>
                      <li><span class='text-muted'>휴대폰번호:</span></li>
                      <li><span class='text-muted'>주소:</span></li>
                      <li><span class='text-muted'>이메일:</span></li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 mb-4">
                    <select  class="form-select form-select-lg" id="pr-country"
											name="resume_gender" required>
					    <option value="" disabled selected>성별*</option>
						<option value="여">여</option>
						<option value="남">남</option>
					</select>
                  </div>
                  <div class="col-sm-6 mb-4">
                    <select  class="form-select form-select-lg" id="pr-city"
											name="resume_career" required>
											<option value="" disabled selected>경력여부*</option>
											<option value="신입">신입</option>
											<option value="경력">경력</option>
										</select>
                  </div>
                </div>
              <div class="col-12 mb-4">
									<label class="form-label fw-bold pb-1 mb-2">보유기술 및 능력</label> <input
										 class="form-control form-control-lg" type="text"
										id="pr-address" name="resume_technology"
										placeholder="보유기술 입력(ex.문서작성능력, java 등)">
							</div>
              <div class="col-12 mb-4">
									<label class="form-label fw-bold pb-1 mb-2">자기소개서</label>
									<textarea  class="form-control form-control-lg" id="pr-address"
										name="resume_cv" cols="30" rows="10" placeholder="내용을 입력하세요 "
										style="height: 272px; resize: none;"></textarea>
							</div>
              <div class="d-md-flex align-items-center mb-4 pb-md-2">
									<h2 class="h4 mb-md-0">                      </h2>
									<div class="ms-md-auto">
										<div class="dropdown d-lg-none"></div>
										<ul
											class="list-unstyled d-none d-lg-flex flex-wrap fs-sm mb-0">
											<li class="border-end mb-0"><button type="submit"
													id="delete"
													class="btn-primary btn-lg rounded-pill ms-sm-auto"
													data-oper='delete'>
													<span class="align-middle">제출</span>
												</button></li>
											<li class="border-end mb-0"><button type="button"
													class="btn-primary btn-lg rounded-pill ms-sm-auto"
													data-oper="modify">
													<span class="align-middle">취소</span>
												</button></li>
										</ul>
									</div>
								</div>
            </form>
          </div>
        </div>
      </div>
</div>
</template>


<script>

export default {

  
  }




</script>

<style>
/* .container{
    background-color: #f5f4f8;
} */
body{
    background-color: #f5f4f8;
}
.bg-light {
    --bs-bg-opacity: 1;
    background-color: rgba(var(255, 255, 255), var(--bs-bg-opacity)) !important;
}
.col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
}
.h2 {
    line-height: 1.25;
    font-size: 2rem;
    color: #1f1b2d;
    font-weight: 700;
}
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.rounded-3 {
    border-radius: 0.75rem !important;
}
.form-select-lg {
    padding-top: 0.825rem;
    padding-bottom: 0.825rem;
    padding-left: 1.25rem;
    font-size: 1rem;
    border-radius: 0.5rem;
}
.form-select {
    display: block;
    width: 100%;
    padding: 0.575rem 2.53125rem 0.575rem 1.125rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #454056;
    background-color: #fff;
    background-size: 16px 12px;
    border: 1px solid #d5d2dc;
    border-radius: 0.5rem;
    box-shadow: inset 0 1px 2px transparent;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.form-control-lg {
    min-height: calc(1.5em + 1.65rem + 2px);
    padding: 0.825rem 1.25rem;
    font-size: 1rem;
    border-radius: 0.5rem;
}
.h4 {
    line-height: 1.35;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f1b2d;
}
.mb-md-0 {
    margin-bottom: 0 !important;
}
.align-items-center {
    align-items: center !important;
}
.btn-primary {
    color: #000;
    background-color: #fd5631;
    border-color: #fd5631;
    box-shadow: unset;
    color: #fff;
}
.pb-md-2 {
    padding-bottom: 0.5rem !important;
}
button:not(:disabled), [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled) {
    cursor: pointer;
}
</style>