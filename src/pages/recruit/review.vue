<template>
  <main class="page-wrapper">

<!-- Page content-->


    <!-- Post content-->
    <section class="container mb-5 pb-1">

        <div class="row justify-content-center pb-sm-2">
            <div class="container col-lg-8 col-xl-7">

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

                <!-- Form group-->
                <form class="form-group d-block" name="reviewSearchFrm" id="reviewSearchFrm" action="${path}/review/reviewList" method="get">
                    <div class="row g-0">
                        <div class="col-md-10 d-sm-flex align-items-center">
                            <div class="input-group input-group-lg border-end-md"><span class="input-group-text text-muted rounded-pill ps-3"><i class="fi-search"></i></span>
                                <!-- 변경된 부분 3 -->
                                <!--  <input class="form-control" name="keyword" type="text" placeholder="회사명을 입력하세요"> -->
                                <input class="form-control" type="text" placeholder="회사명을 입력하세요">
                                <input type="hidden" name="keyword" value="1234">
                                <!-- 여기까지 -->
                            </div>
                            <hr class="d-sm-none my-2">
                            <div class="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                                <button class="btn btn-lg btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown"><i class="fi-home me-2"></i>
                <span class="dropdown-toggle-label">직종 전체</span></button>
                                <input type="hidden" name="searchJob">
                                <ul class="dropdown-menu" style="position: absolute; z-index:1;">
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">개발</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">금융/재무</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">기획/경영</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">미디어/홍보</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">법률/법무</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">생산/제조</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">생산관리/품질관리</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">엔지니어링</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">연구개발</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">영업/제휴</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">유통/무역</span></a></li>
                                </ul>
                            </div>
                            <hr class="d-sm-none my-2">
                            <div class="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                                <button class="btn btn-lg btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown"><i class="fi-map-pin me-2"></i>
                <span class="dropdown-toggle-label">면접결과 전체</span></button>
                                <input type="hidden" name="searchResult">
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">합격</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">불합격</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">대기중</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <input type="hidden" name="pageNum" value="${pageMaker.cri.pageNum}">
                        <input type="hidden" name="amount" value="${pageMaker.cri.amount}">
                        <hr class="d-md-none mt-2">
                        <div class="col-md-2 d-sm-flex align-items-center pt-3 pt-md-0">
                            <input class="btn btn-lg btn-icon btn-primary px-3 w-100" id="searchButton" type="submit" value="검색" />
                        </div>
                    </div>
                </form>


                <!-- Reviews-->
                <div class="mt-3 mb-4 pb-4 border-bottom">
                    <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between">
                        <!-- <a class="btn btn-outline-primary mb-sm-0 mb-3" href="#modal-review" data-bs-toggle="modal"><i class="fi-edit me-1"></i>리뷰 등록</a> -->
                        <button class="btn btn-outline-primary mb-sm-0 mb-3" @click="moveToCreatePage"><i class="fi-edit me-1"></i>리뷰 등록</button>
                        <div class="d-flex align-items-center ms-sm-4">
                            <p class="pt-4 mb-0">총 ${total}건</p>
                        </div>
                    </div>
                </div>
                <div v-if="!reviews.length">
                    검색 결과가 없습니다.
                </div>

                <div style="min-height:300px;">
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
              
            </div>
        </div>



        <div class="modal fade" id="myModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
                        <h6 class="modal-title mt-1 text-center">완료!</h6>
                        <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        처리가 완료되었습니다.
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>

        </section>
</main>
   
</template>

<script>
    import axios from "axios";
    import { async } from "rxjs";
    import { useRouter } from 'vue-router';

export default {


    setup() {
        const reviews = ref([]);
        const router = useRouter();

        const moveToCreatePage = () => {
        router.push({
          name: 'ReviewRegist'
        });
      }
      
      
      return{
          moveToCreatePage
      }

      const getReviews = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8082/todos"
                );
            
                reviews.value = res.data;
            
        } catch (error) {
            console.log(error);
        }
      }
    }

}
</script>

<style>

</style>