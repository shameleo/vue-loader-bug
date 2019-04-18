import Vue from 'Vue';
import Test from './Test.vue';

new Vue({
	el: '#root',
	components: { Test },
	render: h => h(Test)
});