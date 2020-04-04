import Vue from "vue"
import ElementUI from 'element-ui';

Vue.use(ElementUI);
import { mount } from "@vue/test-utils";
import Create from "@/pages/auth/create";
const wrapper = mount(Create)
const vm = wrapper.vm

console.log(wrapper)