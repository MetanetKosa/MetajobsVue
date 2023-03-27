<template lang="">
    <div v-for="(review) in reviews"
        :key = "review.rno">
        <div class="mb-2 pb-4 border-bottom">
            <div class="d-flex justify-content-between mb-3">
                <div class="d-flex align-items-center pe-2"><img class="rounded-circle me-1" src="${path}/resources/img/avatars/13.png" width="48" alt="Avatar">
                    <div class="ps-2">
                        <!-- 변경된 부분 -->
                        <h6 class="fs-base mb-0">
                            <!-- <c:if test="${review.cno==1234}">메타넷디지털</c:if>
                            <c:if test="${review.cno==1235}">대한기업</c:if>
                            <c:if test="${review.cno==1236}">한국유통</c:if> -->
                            {{review.rno}}
                        </h6>

                        <!-- 여기까지 -->
                        <h6 class="fs-sm mb-0">{{review.reJob}}</h6>
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
    
    </div>
</template>
<script>
    import { useRouter } from 'vue-router';
export default {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    setup(prop){
        const router = useRouter();
    }
}
</script>
<style lang="">
</style>