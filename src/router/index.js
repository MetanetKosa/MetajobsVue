import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home.vue';
import Member from '../pages/recruit/member.vue';
import Resumes from '../pages/recruit/resume.vue';
import Resume from '../pages/recruit/resumedetail.vue';
import ResumeInsert from '@/components/ResumeForm.vue';

import PostList from '../pages/recruit/post.vue';
import Review from '../pages/recruit/review.vue';
import SignUp from '@/components/SignUp.vue';
import SignIn from '@/components/SignIn.vue';
import MyPage from '@/components/MyPage.vue';

// import PostList from '@/components/post/PostList.vue';   
import PostInsert from '@/components/post/PostInsert.vue';
// import PostDetail from '@/components/post/PostDetail.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/member',
            name: 'Member',
            component: Member
        },

        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        },

        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
        },

        {
            path: '/mypage',
            name: 'MyPage',
            component: MyPage
        },

        {
            path: '/resume',
            name: 'Resumes',
            component: Resumes
        },
        {
            path: '/resume/:id',
            name: 'Resume',
            component: Resume
        },
        {
            path: '/resumeInsert',
            name: 'ResumeInsert',
            component: ResumeInsert
        },
        
        {
            path: '/postList',
            name: 'PostList',
            component: PostList
        },
        {
            path: '/postInsert',
            name: 'PostInsert',
            component: PostInsert
        },
        // {
        //     path: '/postDetail/:postNo',
        //     name: 'PostDetail',
        //     component: PostDetail
        // },
        {
            path: '/review',
            name: 'Review',
            component: Review
        },
    ]
        
});

export default router;
