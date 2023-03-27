<template lang="">
    <!-- Review modal-->
    <div class="modal fade" id="modal-review" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
                    <h3 class="modal-title mt-4 text-center">Leave a review</h3>
                    <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-sm-5 px-4">
                    <form class="needs-validation" action="${path}/review/insert" method="post" novalidate>
                        <div class="mb-3">
                            <label class="form-label" for="cName">회사명 <span class='text-danger'>*</span></label>
                            <!-- 변경된 부분 2 -->
                            <input class="form-control" type="text" id="cName" placeholder="회사명" required>
                            <input type="hidden" name="cno" value="1234">
                            <!-- 여기까지 -->
                            <div class="invalid-feedback">Please let us know your name.</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="reJob">직군 <span class='text-danger'>*</span></label>
                            <select class="form-control form-select" id="reJob" name="reJob" required>
                            <option value="" selected disabled hidden>직군</option>
                            <option value="개발">개발</option>
                            <option value="금융/재무">금융/재무</option>
                            <option value="기획/경영">기획/경영</option>
                            <option value="미디어/홍보">미디어/홍보</option>
                            <option value="법률/법무">법률/법무</option>
                            <option value="생산/제조">생산/제조</option>
                            <option value="생산관리/품질관리">생산관리/품질관리</option>
                            <option value="엔지니어링">엔지니어링</option>
                            <option value="연구개발">연구개발</option>
                            <option value="영업/제휴">영업/제휴</option>
                            <option value="유통/무역">유통/무역</option>
                        </select>
                        </div>
                        <div class="mb-3">
                            <!-- 변경된 부분 1 -->
                            <!--  <label class="form-label" for="reJob">직군 <span class='text-danger'>*</span></label> -->
                            <!--  <input class="form-control" type="text" id="mno" name="mno" placeholder="회원번호" required> -->
                            <input type="hidden" name="mno" value="41">
                            <!-- 여기까지!! -->
                            <!--  <div class="invalid-feedback">Please provide a valid email address.</div> -->
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="reDate">면접일 <span class='text-danger'>*</span></label>
                            <div class="input-group input-group-lg">
                                <input class="form-control date-picker rounded pe-5" type="text" id="reDate" name="reDate" placeholder="Choose date" data-datepicker-options="{&quot;altInput&quot;: true, &quot;altFormat&quot;: &quot;F j, Y&quot;, &quot;dateFormat&quot;: &quot;Y-m-d&quot;}">
                                <i
                                    class="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="row">
                                <div class="col-6">
                                    <label class="form-label" for="pnum">면접인원 <span class='text-danger'>*</span></label>
                                    <select class="form-control form-select" style="width:150px;" id="pnum" name="pnum" required>
        <option value="" selected disabled hidden>면접인원</option>
        <option value="단독면접">단독면접</option>
        <option value="개인면접">개인면접</option>
        <option value="집단면접">집단면접</option>
    </select>
                                </div>
                                <div class="col-6">
                                    <label class="form-label" for="reResult">면접결과 <span class='text-danger'>*</span></label>
                                    <select class="form-control form-select" style="width:150px;" id="reResult" name="reResult" required>
        <option value="" selected disabled hidden>면접결과</option>
        <option value="합격">합격</option>
        <option value="불합격">불합격</option>
        <option value="대기중">대기중</option>
    </select>
                                </div>

                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="reContent">후기 내용 <span class='text-danger'>*</span></label>
                            <textarea class="form-control" id="reContent" name="reContent" rows="5" placeholder="후기 내용을 적어주세요." required></textarea>
                            <div class="invalid-feedback">후기 내용을 적어주세요.</div>
                        </div>
                        <button class="btn btn-primary d-npmblock w-100 mb-4" type="submit">리뷰 등록</button>
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
<style lang="">
    
</style>