import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

//rutas de elementos del sidebar
const routes = [{
        path: '/',
        name: 'Login',
        component: () =>
            import ('../views/iniciarSesion.vue')
    },


    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/dashboard'),
        children: [{
                path: '/dashboard/welcome/creanotice',
                mname: 'CreaNotice',
                component: () =>
                    import ('../views/crear/creaNotice.vue')
            },

            {
                name: 'DashboardWelcomeAsignaturaPeoples',
                path: '/dashboard/welcome/asignaturaPeople',
                component: () =>
                    import ('../views/listar/listarAsignaturasPeoples.vue')
            },

            {
                name: 'DashboardWelcome',
                path: '/dashboard/welcome',
                component: () =>
                    import ('../views/notice.vue'),
            },
            {
                name: 'DashboardWelcomeEstudiante',
                path: '/dashboard/welcome/actividadEstudiante',
                component: () =>
                    import ('../views/listar/actividadEstudiante.vue'),
            },
            {
                name: 'DashboardWelcomeEstudiante',
                path: '/dashboard/welcome/MicroClaseEstu',
                component: () =>
                    import ('../views/listar/microClaseEstu.vue'),
            },
            {
                name: 'creaRol',
                path: '/dashboard/creaRol',
                component: () =>
                    import ('../views/crear/creaRol.vue'),
            },
            {
                name: 'listarRol',
                path: '/dashboard/listarRol',
                component: () =>
                    import ('../views/listar/listarRol.vue'),
            },
            {
                name: 'RegistarEstudiante',
                path: '/dashboard/creaUsuario/:id',
                component: () =>
                    import ('../views/crear/creaUsuario.vue'),
            },
            {
                name: 'listaUsuario',
                path: '/dashboard/listarUsuario/:id',
                component: () =>
                    import ('../views/listar/listaUsuario.vue'),
            },
        ],
    },
    {
        path: '/dashboard/ejercicio',
        name: 'ejercicio',
        component: () =>
            import ('../views/dashboard'),
        children: [{
                name: 'creaActividades',
                path: '/Dashboard/creaActividades',
                component: () =>
                    import ('../views/crear/creaActividades.vue'),
            },
            {
                name: 'creaActividades',
                path: '/Dashboard/crearMicroClase',
                component: () =>
                    import ('../views/crear/microClaseDocen.vue'),
            },
            {
                name: 'listaEjercicio',
                path: '/Dashboard/listaEjercicio',
                component: () =>
                    import ('../views/listar/listaEjercicio.vue'),
            },
        ],
    },
    {
        path: '/dashboard/cursos',
        name: 'cursos',
        component: () =>
            import ('../views/dashboard'),
        children: [{
                name: 'creaCurso',
                path: '/Dashboard/creaCurso',
                component: () =>
                    import ('../views/crear/creaCursos.vue'),
            },
            {
                name: 'listaEjercicio',
                path: '/Dashboard/listaCurso',
                component: () =>
                    import ('../views/listar/listaCursos.vue'),
            },
        ],
    },
    {
        path: '/dashboard/areas',
        name: 'areas',
        component: () =>
            import ('../views/dashboard'),
        children: [{
                name: 'creaAsignatura',
                path: '/Dashboard/creaAsignatura',
                component: () =>
                    import ('../views/crear/creaAsignatura.vue'),
            },
            {
                name: 'listaAsignatura',
                path: '/Dashboard/listaAsignatura',
                component: () =>
                    import ('../views/listar/listaAsignatura.vue'),
            },
        ],
    },
    {
        path: '/dashboard/periodos',
        name: 'areas',
        component: () =>
            import ('../views/dashboard'),
        children: [{
                name: 'creaEscuela',
                path: '/Dashboard/creaEscuela',
                component: () =>
                    import ('../views/crear/creaEscuela.vue'),
            },
            {
                name: 'listaEscuela',
                path: '/Dashboard/listaEscuela',
                component: () =>
                    import ('../views/listar/listaEscuela.vue'),
            },
        ],
    },
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router