<template>
    <body>
<!-- <script src="http://code.jquery.com/jquery-3.5.1.min.js"></script> -->
    <!-- Page loading spinner-->
    <!-- <div class="page-loading active">
        <div class="page-loading-inner">
            <div class="page-spinner"></div><span>Loading...</span>
        </div>
    </div> -->
    <main class="page-wrapper">
        <!-- Sign In Modal-->
        <div class="modal fade" id="signin-modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style="max-width: 950px;">
                <div class="modal-content">
                    <div class="modal-body px-0 py-2 py-sm-0">
                        <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
                        <div class="row mx-0 align-items-center">
                            <div class="col-md-6 border-end-md p-4 p-sm-5">
                                <h2 class="h3 mb-4 mb-sm-5">Hey there!<br>Welcome back.</h2><img class="d-block mx-auto" src="${path}/resources/img/signin-modal/signin.svg" width="344" alt="Illustartion">
                                <div class="mt-4 mt-sm-5">Don't have an account? <a href="#signup-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign up here</a></div>
                            </div>
                            <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"><a class="btn btn-outline-info w-100 rounded-pill mb-3" href="#"><i class="fi-google fs-lg me-1"></i>Sign in with Google</a><a class="btn btn-outline-info w-100 rounded-pill mb-3" href="#"><i class="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a>
                                <div class="d-flex align-items-center py-3 mb-3">
                                    <hr class="w-100">
                                    <div class="px-3">Or</div>
                                    <hr class="w-100">
                                </div>
                                <form class="needs-validation" novalidate>
                                    <div class="mb-4">
                                        <label class="form-label mb-2" for="signin-email">Email address</label>
                                        <input class="form-control" type="email" id="signin-email" placeholder="Enter your email" required>
                                    </div>
                                    <div class="mb-4">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <label class="form-label mb-0" for="signin-password">Password</label><a class="fs-sm" href="#">Forgot password?</a>
                                        </div>
                                        <div class="password-toggle">
                                            <input class="form-control" type="password" id="signin-password" placeholder="Enter password" required>
                                            <label class="password-toggle-btn" aria-label="Show/hide password">
                          <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                        </label>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary btn-lg w-100 rounded-pill" type="submit">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign Up Modal-->
        <div class="modal fade" id="signup-modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style="max-width: 734px;">
                <div class="modal-content">
                    <div class="modal-body p-sm-5">
                        <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
                        <ul class="nav nav-pills flex-column flex-sm-row border-bottom pb-4 mt-sm-n2 my-4" role="tablist">
                            <li class="nav-item me-sm-3 mb-sm-0"><a class="nav-link active" href="#job-seeker" data-bs-toggle="tab" role="tab" aria-controls="job-seeker" aria-selected="true"><i class="fi-user me-2"></i>I am job seeker</a></li>
                            <li class="nav-item mb-sm-0"><a class="nav-link" href="#employer" data-bs-toggle="tab" role="tab" aria-controls="employer" aria-selected="false"><i class="fi-briefcase me-2"></i>I am employer</a></li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="job-seeker" role="tabpanel">
                                <h3>Register to add a resume</h3>
                                <p class="pb-3">Get access to all the functions of the site that will help you find a great job.</p>
                                <div class="row gx-2 gx-md-4">
                                    <div class="col-sm-6 mb-3"><a class="btn btn-outline-info w-100 rounded-pill" href="#"><i class="fi-google fs-lg me-1"></i>Sign in with Google</a></div>
                                    <div class="col-sm-6 mb-3"><a class="btn btn-outline-info w-100 rounded-pill" href="#"><i class="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a></div>
                                </div>
                                <div class="d-flex align-items-center py-2 mb-2">
                                    <hr class="w-100">
                                    <div class="px-3">Or</div>
                                    <hr class="w-100">
                                </div>
                                <form class="needs-validation" novalidate>
                                    <div class="row gx-2 gx-md-4">
                                        <div class="col-sm-6 mb-4">
                                            <label class="form-label" for="js-fn">Full name</label>
                                            <input class="form-control" type="text" id="js-fn" placeholder="Enter your full name" required>
                                        </div>
                                        <div class="col-sm-6 mb-4">
                                            <label class="form-label" for="js-email">Emaill address</label>
                                            <input class="form-control" type="email" id="js-email" placeholder="Enter your email" required>
                                        </div>
                                        <div class="col-sm-6 mb-4">
                                            <label class="form-label" for="js-password">Password <span class='text-muted'>(min. 8 char)</span></label>
                                            <div class="password-toggle">
                                                <input class="form-control" type="password" id="js-password" minlength="8" required>
                                                <label class="password-toggle-btn" aria-label="Show/hide password">
                            <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                          </label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 mb-4">
                                            <label class="form-label" for="js-password-confirm">Confirm password</label>
                                            <div class="password-toggle">
                                                <input class="form-control" type="password" id="js-password-confirm" minlength="8" required>
                                                <label class="password-toggle-btn" aria-label="Show/hide password">
                            <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                          </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-check mb-4">
                                        <input class="form-check-input" type="checkbox" id="agree-to-terms" required>
                                        <label class="form-check-label" for="agree-to-terms">By joining, I agree to the <a href='#'>Terms of use</a> and <a href='#'>Privacy policy</a></label>
                                    </div>
                                    <button class="btn btn-primary btn-lg w-100 rounded-pill" type="submit">Sign up</button>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="employer" role="tabpanel">
                                <h3>Register to post a vacancy</h3>
                                <p class="pb-3">Get access to all special services for employers on Finder.</p>
                                <form class="needs-validation" novalidate>
                                    <div class="row gx-2 gx-md-4">
                                        <div class="col-sm-6 mb-4">
                                            <label class="form-label" for="em-fn">Full name</label>
                                            <input class="form-control" type="text" id="em-fn" placeholder="Enter your full name" required>
                                        </div>
                                        <div class="col-sm-6 mb-4">
                                            <label class="form-label" for="em-email">Emaill <span class='text-muted'>(better corporate)</span></label>
                                            <input class="form-control" type="email" id="em-email" placeholder="Enter email" required>
                                        </div>
                                        <div class="col-sm-6 mb-4">
                                            <label class="form-label" for="em-company">Company name</label>
                                            <input class="form-control" type="text" id="em-company" placeholder="Enter company name" required>
                                        </div>
                                        <div class="col-sm-6 mb-4">
                                            <label class="form-label" for="em-location">Main office location</label>
                                            <input class="form-control" type="text" id="em-location" placeholder="Country, City, Address" required>
                                        </div>
                                        <div class="col-sm-6 mb-4">
                                            <label class="form-label" for="em-password">Password <span class='text-muted'>(min. 8 char)</span></label>
                                            <div class="password-toggle">
                                                <input class="form-control" type="password" id="em-password" minlength="8" required>
                                                <label class="password-toggle-btn" aria-label="Show/hide password">
                            <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                          </label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 mb-4">
                                            <label class="form-label" for="em-password-confirm">Confirm password</label>
                                            <div class="password-toggle">
                                                <input class="form-control" type="password" id="em-password-confirm" minlength="8" required>
                                                <label class="password-toggle-btn" aria-label="Show/hide password">
                            <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                          </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-check mb-4">
                                        <input class="form-check-input" type="checkbox" id="agree-to-terms2" required>
                                        <label class="form-check-label" for="agree-to-terms2">By joining, I agree to the <a href='#'>Terms of use</a> and <a href='#'>Privacy policy</a></label>
                                    </div>
                                    <button class="btn btn-primary btn-lg w-100 rounded-pill" type="submit">Sign up</button>
                                </form>
                            </div>
                        </div>
                        <div class="pt-4 pb-3 pb-sm-0 mt-2">Already have an account? <a href="#signin-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign in</a></div>
                    </div>
                </div>
            </div>
        </div>
     
        <!-- Page header-->
        <section class="bg-dark pt-5">
            <div class="container py-5">
                <h1 class="text-light pt-1 pt-md-3 mb-4">공고 목록</h1>
                <!-- Search form-->
                    <!-- Search form-->
                 <form class="form-group form-group-light d-block rounded-lg-pill mb-4">
                    <div class="row align-items-center g-0 ms-n2">
                        <div class="col-lg-3 col-xl-4">
                            <div class="input-group input-group-lg border-end-lg border-light"><span class="input-group-text text-light rounded-pill opacity-50 ps-3"><i class="fi-search"></i></span>
                                <input class="form-control" type="text" n   ame = "keyword" id = "keyword" placeholder="검색어를 입력해주세요">
                            </div>
                        </div>
                        <hr class="hr-light d-lg-none my-2">
                        <div class="col-lg-5 d-sm-flex">
                            <div class="dropdown w-sm-50 border-end-sm border-light" data-bs-toggle="select">
                                <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-list me-2"></i><span class="dropdown-toggle-label">경력구분</span></button>
                                <input type="hidden" name = "searchCareer" id = "searchCareer">
                                <ul class="dropdown-menu dropdown-menu-dark my-3">
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">신입</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">경력</span></a></li>
                                </ul>
                            </div>
                            <hr class="hr-light d-sm-none my-2" name = "searchEmptype" id = "searchEmptype">
                            <div class="dropdown w-sm-50 border-end-lg border-light" data-bs-toggle="select">
                                <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-map-pin me-2"></i><span class="dropdown-toggle-label">고용형태</span></button>
                                <input type="hidden">
                                <ul class="dropdown-menu dropdown-menu-dark my-3">
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">정규직</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">계약직</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">인턴</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">파견직</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <hr class="hr-light d-lg-none my-2" name = "searchEdu" id = "searchEdu">
                        <div class="col-lg-4 col-xl-3 d-flex align-items-center">
                            <div class="dropdown w-50 w-lg-100" data-bs-toggle="select">
                                <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-geo me-2"></i><span class="dropdown-toggle-label">학력조건</span></button>
                                <input type="hidden">
                                <ul class="dropdown-menu dropdown-menu-dark my-3">
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">고졸</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">초대졸</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">대졸</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">대학원</span></a></li>
                                </ul>
                            </div>
                            <button class="btn btn-primary btn-lg w-50 w-lg-auto rounded-pill" type="submit">검색</button>
                        </div>
                    </div>
                </form>
                 
                <!-- Search params (dropdowns)-->
                <div class="d-sm-flex justify-content-between pt-2 pb-1 pb-md-3 pb-lg-4">
                    <div class="d-flex flex-column flex-sm-row flex-wrap">
                        <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                            <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Publication date</span></button>
                            <ul class="dropdown-menu my-1">
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Most recent</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">5 days</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">15 days</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">1 week</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">1 month</span></a></li>
                            </ul>
                        </div>
                        <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                            <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Job type</span></button>
                            <ul class="dropdown-menu my-1">
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Full-time</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Part-time</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Remote</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Temporary</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Contract</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Internship</span></a></li>
                            </ul>
                        </div>
                        <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                            <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Company</span></button>
                            <ul class="dropdown-menu my-1">
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">IT Pro TV</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Zalo Tech Company</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Elastic Inc.</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Lift Web</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Xbox Company</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Zapier</span></a></li>
                            </ul>
                        </div>
                        <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                            <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Salary range</span></button>
                            <ul class="dropdown-menu my-1">
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$500 - $1,000</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$1,000 - $2,000</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$2,000 - $5,000</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$5,000 - $10,000</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$10,000 - $20,000</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$20,000 - $50,000</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Page content-->
        <section class="position-relative bg-white rounded-xxl-4 zindex-5" style="margin-top: -30px;">
            <div class="row justify-content-center pb-sm-2">
                <div class="container col-lg-8 col-xl-7">
                    <div class="container pt-4 pb-5 mb-md-4">
                        <!-- Breadcrumb-->
                        <nav class="pb-4 my-2" aria-label="Breadcrumb">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="job-board-home-v1.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">공고 목록</li>
                            </ol>
                        </nav>
                        <div class="row">
                            <!-- List of jobs-->
                            <div class="col-lg-12 col-md-12 position-relative mb-4 mb-md-0" style="z-index: 1025;">
                                <!-- Sorting-->
                                <div class="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
                                    <div class="d-flex align-items-center">
                                        <label class="fs-sm me-2 pe-1 text-nowrap" for="sorting"><i class="fi-arrows-sort mt-n1 me-2"></i>Sort by:</label>
                                        <select class="form-select form-select-sm" id="sorting">
                    <option>Newest</option>
                    <option>Popular</option>
                    <option>Highest Salary</option>
                  </select>
                                    </div>
                                    <div class="text-muted fs-sm text-nowrap"><i class="fi-briefcase fs-base mt-n1 me-2"></i>2948 jobs</div>
                                </div>
                                
                                
                            
                  
                
     
     
     <!-- <c:forEach items = "${postList}" var = "post"> -->
     <!-- postList 공고목록-->
        <div class="card bg-secondary card-hover mb-2"  v-for = "(post,index) in posts" :key="index">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <!-- <div class="d-flex align-items-center"><img class="me-2" src="${path}/resources/img/job-board/company/it-pro.png" width="24" alt=""><span class="fs-sm text-dark opacity-80 px-1"> ~ <fmt:formatDate pattern="MM/dd" value="{{post.postFdate}}" /></span></div> -->
                    <div class="dropdown content-overlay">
                        <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fi-dots-vertical"></i></button>
                        <ul class="dropdown-menu my-1" aria-labelledby="contextMenu1">
                            <li>
                                <button class="dropdown-item" type="button"><i class="fi-heart opacity-60 me-2"></i>Add to Saved Jobs</button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button"><i class="fi-x-circle opacity-60 me-2"></i>Not interested</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 class="h6 card-title pt-1 mb-3">{{post.postTitle}} 
                   <a class="text-nav stretched-link text-decoration-none" @click="moveToPage(post.postNo)"></a>
                    <!-- <a id = "move" class="text-nav stretched-link text-decoration-none" href="/post/postDetail?post_no=${post.postNo}"> 
                    </a> -->
                </h3>
                <div class="fs-sm">
                <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>{{post.postAdd}}</span>
                <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>{{post.postJob}} </span>
                <span class="text-nowrap me-3">{{post.postEdu}}</span>
                <!-- <span class="text-nowrap me-3"> | 등록일 <fmt:formatDate pattern="MM/dd" value="{{post.postSdate}}" /></span> -->
                </div>
            </div>
        </div>
        <!-- </c:forEach> -->

     <!-- 반복문 -->


                               <!-- Pagination-->
                    <!-- <nav class="mt-2 mb-4" aria-label="Reviews pagination">
                        <ul class="pagination">
                           <c:if test="${pageMaker.prev}">
                               <li class="page-item"><a class="page-link" href="#" aria-label="Prev"><i class="fi-chevron-left"></i></a></li>
                           </c:if>
                           
                            <li class="page-item d-sm-none"><span class="page-link page-link-static">1 / 5</span></li>
                            <c:forEach var="num" begin="${pageMaker.startPage}" end="${pageMaker.endPage}"> -->
                         <!--       <li class="page-item active d-none d-sm-block" aria-current="page"> -->
                               <!--<li class="page-item ${pageMaker.cri.pageNum == num ? "active" : "" }" aria-current="page">
                                  <a class="page-link" href="${num}"><c:out value="${num}"/></a>
                                  <span class="visually-hidden">(current)</span>
                               </li> -->
                            <!-- </c:forEach>
                           <c:if test="${pageMaker.prev}">
                               <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="fi-chevron-right"></i></a></li>
                           </c:if>
                        </ul>
                        
                        <form id='actionForm' action="${path}/post/postList" method='get'>
		                     <input type='hidden' name='pageNum' value='${pageMaker.cri.pageNum}'>                        
		                     <input type='hidden' name='amount' value='${pageMaker.cri.amount}'>                        
                        </form>
                        
                    </nav> -->
						
							</div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
			<!-- <script src="http://code.jquery.com/jquery-3.5.1.min.js"></script> -->
       <!-- Main theme script-->
      <!-- <script src="${path}/resources/js/theme.min.js"></script>
		<script>
		console.log("script가 잘 실행되나요?");
			$(document).ready(function(){
				var actionForm = $("#actionForm");
				$(".page-item a").on("click", function(e) {
					
					e.preventDefault();
					
					console.log('click');
					
					actionForm.find("input[name = 'pageNum']").val($(this).attr("href"));
					actionForm.submit();
				});
				
				/* $("#move").on("click",function(e){
					e.preventDefault();
					actionForm.find("<input type = 'hidden' name='postNo' value =' "+ $(this).attr("href")+"'>");
					actionForm.attr("action","/post/postGet")
					actionForm.submit();
				} */
			});
		</script> -->
 <!-- Back to top button--><a class="btn-scroll-top" href="#top" data-scroll><span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i class="btn-scroll-top-icon fi-chevron-up">   </i></a>
	    <!-- Vendor scrits: js libraries and plugins-->
	    <!--<script src="${path}/resources/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
	    <script src="${path}/resources/vendor/simplebar/dist/simplebar.min.js"></script>
	    <script src="${path}/resources/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
	    <script src="${path}/resources/vendor/flatpickr/dist/flatpickr.min.js"></script>-->
	    <!-- Main theme script-->
		<!-- <script src="${path}/resources/js/theme.min.js"></script> -->
</body>

</template>

<script>
import { useRouter } from 'vue-router';
export default{
    props:{
        posts : Object,
        default: () =>{
            return {
                postNo:'',
                postTitle: '',
                postAdd: '',
                postJob: '',
                postEdu: ''
            };
        }
    },

    setup(props){
        const router = useRouter();
        const moveToPage = (postNo) => {
            console.log(postNo);
            //router.push('/todos/' + router);
            router.push({//경로의 복잡성을 줄일 수 있음
                name:'PostDetail',
                params:{
                    postNo:postNo
                }
            })
        }
        return {
            moveToPage,
            router,
        }
    }
}
</script>

<style>

</style>