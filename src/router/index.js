import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Registro from '@/components/Registro'
import VistaAlumnos from '@/components/VistaAlumnos'
import Editar from '@/components/Editar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/registroAlumno',
      name: 'Registro',
      component: Registro
    },
    {
        path: '/lista',
        name: 'VistaAlumnos',
        component: VistaAlumnos
      },
    {
        path: '/editar',
        name: 'Editar',
        component: Editar
      },
  ],
  mode:'history'
})