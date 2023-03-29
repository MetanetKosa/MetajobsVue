import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home.vue';
import Member from '../pages/recruit/member.vue';
import Resumes from '../pages/recruit/resume/resume.vue';
import Resume from '../pages/recruit/resume/resumedetail.vue';
import ResumeInsert from '@/components/resume/ResumeForm.vue';
import Post from '../pages/recruit/post.vue';
import Review from '../pages/recruit/review.vue';
import SignUp from '@/components/SignUp.vue';
import SignIn from '@/components/SignIn.vue';
import MyPage from '@/components/MyPage.vue';
import ResumeModify from '@/components/resume/ResumeUpdate.vue';



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
            path: '/resume/modify/:id',
            name: 'ResumeModify',
            component: ResumeModify
        },
     
        {
            path: '/resumeInsert',
            name: 'ResumeInsert',
            component: ResumeInsert
        },
        
        {
            path: '/post',
            name: 'Post',
            component: Post
        },
        {
            path: '/review',
            name: 'Review',
            component: Review
        },
    ]
        
});

export default router;
