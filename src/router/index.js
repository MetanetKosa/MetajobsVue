import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home.vue';
import Member from '../pages/recruit/member.vue';
import Resume from '../pages/recruit/resume.vue';
import PostList from '../pages/recruit/post.vue';

import Review from '../pages/recruit/review.vue';
import SignUp from '@/components/SignUp.vue';
import SignIn from '@/components/SignIn.vue';
import MyPage from '@/components/MyPage.vue';

// import PostList from '@/components/post/PostList.vue';   
import PostInsert from '@/components/post/PostInsert.vue';
import PostDetail from '@/components/post/PostDetail.vue';


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
            name: 'Resume',
            component: Resume
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
<<<<<<< HEAD
        {
            path: '/postDetail/:postNo',
            name: 'PostDetail',
            component: PostDetail
        },
=======
>>>>>>> ceb56edee59f287b9cb8088ffcee294f5ebf9b0d
        {
            path: '/review',
            name: 'Review',
            component: Review
        },
    ]
        
});

export default router;
