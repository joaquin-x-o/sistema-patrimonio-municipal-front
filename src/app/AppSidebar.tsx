import Sidebar from '../components/layout/sidebar/Sidebar';
import { Package, Building2, Users, ClipboardList } from 'lucide-react';

export default function AppSidebar() {
    const LOGO = import.meta.env.VITE_LOGO;
    const GOVERNMENT_NAME = import.meta.env.VITE_GOVERNMENT_NAME;

    return (
        <Sidebar>

            {/* HEADER */}
            <Sidebar.Header
                logoSrc={LOGO}
                title='Sistema de Patrimonio'
                subtitle={GOVERNMENT_NAME}
            />


            {/* ITEMS */}
            <div className='flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2 overflow-x-hidden custom-scrollbar'>

                {/* PRODUCTOS */}
                <Sidebar.Menu
                    name='productos'
                    label='Productos'
                    icon={Package}
                    items={[
                        { label: 'Crear producto', to: '/producto/crear' },
                        { label: 'Editar datos de un producto', to: '/producto/editar' },
                        { label: 'Editar estado de un producto', to: '/producto/editar-estado' },
                        { label: 'Revisar producto', to: '/producto/revisar' },
                        { label: 'Transferir producto', to: '/producto/transferir' },
                        { label: 'Acciones masivas', to: '/producto/acciones-masivas' },
                        { label: 'Ver productos', to: '/producto/gestion-productos' },
                        { label: 'Eliminar producto', to: '/producto/eliminar', danger: true },
                    ]}
                />

                {/* AREAS */}

                <Sidebar.Menu
                    name='areas'
                    label='Áreas'
                    icon={Building2}
                    items={[
                        { label: 'Crear área', to: '/area/crear' },
                        { label: 'Editar área', to: '/area/editar' },
                        { label: 'Deshabilitar área', to: '/area/deshabilitar' },
                        { label: 'Habilitar área', to: '/area/habilitar' },
                        { label: 'Ver áreas', to: '/area/gestion-areas' },
                        { label: 'Eliminar', to: '/area/eliminar', danger: true }
                    ]}
                />

                {/* REPORTES */}
                <Sidebar.Menu
                    name='reportes'
                    label='Reportes'
                    icon={ClipboardList}
                    items={[
                        { label: 'Ver reportes', to: '/reportes/gestion-reportes' }
                    ]}
                />

                {/* USUARIOS */}

                <Sidebar.Menu
                    name='usuarios'
                    label='Usuarios'
                    icon={Users}
                    items={[
                        { label: 'Crear usuario', to: '/usuario/crear' },
                        { label: 'Editar usuario', to: '/usuario/editar' },
                        { label: 'Deshabilitar usuario', to: '/usuario/deshabilitar' },
                        { label: 'Habilitar usuario', to: "/usuario/habilitar" },
                        { label: 'Ver usuarios', to: '/usuario/gestion-usuarios' },
                        { label: 'Eliminar usuarios', to: '/usuario/eliminar', danger: true }
                    ]}
                />
            </div>

            {/* DANGER */}
            <Sidebar.DangerButton
                text='Dar de baja un producto'
                to='/producto/dar-de-baja'
            />

            {/* FOOTER */}
            <Sidebar.Footer />

        </Sidebar>
    );
}