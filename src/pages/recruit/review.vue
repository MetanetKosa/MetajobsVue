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
  
                 
  
  
                  <!-- Reviews-->
                  <div class="mt-3 mb-4 pb-4 border-bottom">
                      <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between">
                          <!-- <a class="btn btn-outline-primary mb-sm-0 mb-3" href="#modal-review" data-bs-toggle="modal"><i class="fi-edit me-1"></i>리뷰 등록</a> -->
                          <button class="btn btn-outline-primary mb-sm-0 mb-3" @click="moveToCreatePage"><i class="fi-edit me-1"></i>리뷰 등록</button>
                          <div class="d-flex align-items-center ms-sm-4">
                              <!-- <p class="pt-4 mb-0">총 ${total}건</p> -->
                          </div>
                      </div>
                  </div>
                  <!-- <div v-if="!reviews.length">
                      검색 결과가 없습니다.
                  </div> -->
                  <div style="min-height:300px;">
                      <ReviewList :reviews="reviews"
                                    @delete-review="deleteReview"/>
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
          </section>
  </main>
     
  </template>
  
  <script>
      import {ref} from 'vue';
      import axios from "axios";
      import ReviewList from '@/components/ReviewList.vue';
      import { useRouter } from 'vue-router';
  
  export default {
      components: {
          ReviewList
      },
  
      setup() {
          const reviews = ref([]);
          const router = useRouter();
  
          const moveToCreatePage = () => {
          router.push({
            name: 'ReviewRegist'
          });
        }
        
        const getReviews = async () => {
          try {
              const res = await axios.get(
                  '/reviews'
                  );
                  console.log(res.data);
                  reviews.value = res.data;
              
          } catch (error) {
              console.log(error);
          }
        }

        const deleteReview = async(index) => {
            const id = reviews.value[index].rno;
            try{
                await axios.delete('/reviews/' + id);
                getReviews(1);
            }catch(error){
                console.log(error);
            }
        }
  
        getReviews();
        
        return{
              moveToCreatePage,
              reviews,
              getReviews,
              deleteReview
        }
  
  
      }
  
  }
  </script>
  
  <style>
  
  </style>