export default {

     menuEstudiante : [
       
               {
                    header: true,
                    title: 'Colegio',
                },
                {
                    header: true,
                    title: 'ESTUDIANTE',
                },
            ],
        

     

     menuAdmin : [
        {
            header: true,
            title: 'ADMINISTRADOR',
        },
       
        {
            icon: 'pe-7s-users',
            title: 'ROL',
            child: [
                {
                    title: 'Crear',
                    
                },
                {
                    title: 'Listar',
                    href: '/elements/dropdowns',
                },
                
            ],
        },
        

        {
            icon: 'pe-7s-study',
            title: 'ESTUDIANTE',
            child: [
                {
                    title: 'Crear',
                    
                },
                {
                    title: 'Listar',
                    href: '/elements/dropdowns',
                },
                
            ],
        },
        
        {
            icon: 'pe-7s-id',
            title: 'DOCENTE',
            child: [
                {
                    title: 'Crear',
                    
                },
                {
                    title: 'Listar',
                    href: '/elements/dropdowns',
                },
                
            ],
        },
      
     ],

      routes2 : [
        
        {
          path: '/about',
          name: 'About',
          component: () => import('../views/dashboard')
        },
        
      ],

      routes1 : [
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import('../views/contacto')
          },
          {
            path: '/creditos',
            name: 'creditos',
            component: () => import('../views/creditos')
          }
      ],


 };