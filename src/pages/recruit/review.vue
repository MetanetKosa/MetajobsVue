<template>
  <h1>
    Review Page
  </h1>
  <!-- Page header-->
  <section class="container pt-5 mt-5 mb-3 border-bottom">
      <!-- Breadcrumb-->
      <nav class="mb-3 pt-md-3 " aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="real-estate-home-v1.html">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">면접 후기</li>
          </ol>
      </nav>
      <h1 class="h2 mb-2 ">면접 후기</h1>
      <p class="mb-2 pb-1 fs-lg">면접 후기를 확인하세요</p>

  </section>

  <div class="mt-3 mb-4 pb-4 border-bottom">
      <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between"><a class="btn btn-outline-primary mb-sm-0 mb-3" href="#modal-review" data-bs-toggle="modal"><i class="fi-edit me-1"></i>리뷰 등록</a>
          <div class="d-flex align-items-center ms-sm-4">
              <p class="pt-4 mb-0">총 ${total}건</p>
          </div>
      </div>
  </div>
  <c:if test="${total == 0}">
      검색 결과가 없습니다.
  </c:if>

  <div v-for="(review, index) in reviews"
      :key="review.id">
      <c:forEach items="${list}" var="review">
          <div class="mb-2 pb-4 border-bottom">
              <div class="d-flex justify-content-between mb-3">
                  <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="${path}/resources/img/avatars/13.png" width="48" alt="Avatar">
                      <div class="ps-2">
                          <!-- 변경된 부분 -->
                          <h6 class="fs-base mb-0">
                              <c:if test="${review.cno==1234}">메타넷디지털</c:if>
                              <c:if test="${review.cno==1235}">대한기업</c:if>
                              <c:if test="${review.cno==1236}">한국유통</c:if>

                          </h6>

                          <!-- 여기까지 -->
                          <h6 class="fs-sm mb-0">${review.reJob}</h6>
                      </div>
                  </div>
                  <div>
                      <span class="fs-sm"><fmt:formatDate pattern="yyyy년 MM월 dd일" value="${review.reDate}"/></span>
                          <form id="deleteForm" action="${path}/review/delete" method="post">
                              <input type="hidden" name="rno" value="${review.rno}">
                              <span><button class="btn btn-primary" type="submit">삭제</button></span>
                          </form>
                  </div>
              </div>
              <div class="row">
                  <div class="col-2">
                      <h6 class="fs-xs mb-0">면접일</h6>
                      <h6 class="fs-xs fw-light mb-0">
                          <fmt:formatDate pattern="yyyy년 MM월 dd일" value="${review.reDate}" />
                      </h6>
                      <h6 class="fs-xs pt-2 mb-0">면접인원</h6>
                      <h6 class="fs-xs fw-light mb-0">${review.pnum}</h6>
                  </div>
                  <div class="col-10">
                      <h3 class="fs-sm mb-0">면접내용</h3>
                      <p class="fs-sm" style="min-height:60px;">${review.reContent}</p>
                      <h3 class="fs-sm mb-0">면접 결과</h3>
                      <p class="fs-sm">${review.reResult}</p>

                  </div>
              </div>
          </div>
      </c:forEach>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>