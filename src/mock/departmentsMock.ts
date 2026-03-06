import type { DepartmentResponse } from "../interfaces/departmentResponse";

export const departmentMock: DepartmentResponse[] = [
    {
        departmentCode: "B2",
        name: "Direccion de Patrimonio",
        responsibleName: "Luís Gomez",
        productCount: 842,
        percentage: 40.4,
        isActive: true,
        registrationDate: "2026-01-01",
        createdAt: "2026-01-01",
        updatedAt: "2026-01-01"
    },
    {
        departmentCode: "C4",
        name: "Secretaría de Cultura",
        responsibleName: "Marta Sánchez",
        productCount: 654,
        percentage: 31.3,
        isActive: true,
        registrationDate: "2026-01-05",
        createdAt: "2026-01-05",
        updatedAt: "2026-01-10"
    },
    {
        departmentCode: "T1",
        name: "Dirección de Tránsito",
        responsibleName: "Ricardo Paz",
        productCount: 480,
        percentage: 23.0,
        isActive: true,
        registrationDate: "2026-01-10",
        createdAt: "2026-01-10",
        updatedAt: "2026-01-15"
    },
    {
        departmentCode: "O2",
        name: "Secretaría de Obras Públicas",
        responsibleName: "Ing. Martínez",
        productCount: 312,
        percentage: 14.9,
        isActive: true,
        registrationDate: "2026-02-10",
        createdAt: "2026-02-10",
        updatedAt: "2026-02-12"
    },
    {
        departmentCode: "H3",
        name: "Secretaría de Hacienda",
        responsibleName: "Elena Torres",
        productCount: 150,
        percentage: 7.2,
        isActive: true,
        registrationDate: "2026-01-12",
        createdAt: "2026-01-12",
        updatedAt: "2026-01-12"
    },
    {
        departmentCode: "R9",
        name: "Dirección de Rentas",
        responsibleName: "Roberto Díaz",
        productCount: 115,
        percentage: 5.5,
        isActive: true,
        registrationDate: "2026-02-20",
        createdAt: "2026-02-20",
        updatedAt: "2026-02-20"
    },
    {
        departmentCode: "S5",
        name: "Complejo municipal",
        responsibleName: "Jorge Ramírez",
        productCount: 95,
        percentage: 4.5,
        isActive: true,
        registrationDate: "2026-01-20",
        createdAt: "2026-01-20",
        updatedAt: "2026-01-22"
    },
    {
        departmentCode: "G1",
        name: "Departamento de Seguridad",
        responsibleName: "Comisario Vaca",
        productCount: 78,
        percentage: 3.7,
        isActive: true,
        registrationDate: "2026-02-01",
        createdAt: "2026-02-01",
        updatedAt: "2026-02-01"
    },
    {
        departmentCode: "A6",
        name: "Secretaría de Acción Social",
        responsibleName: "Lucía Méndez",
        productCount: 45,
        percentage: 2.1,
        isActive: true,
        registrationDate: "2026-02-05",
        createdAt: "2026-02-05",
        updatedAt: "2026-02-05"
    },
    {
        departmentCode: "A1",
        name: "Despacho Intendencia",
        responsibleName: "Ana Clara Solís",
        productCount: 24,
        percentage: 1.1,
        isActive: false,
        registrationDate: "2026-02-15",
        createdAt: "2026-02-15",
        updatedAt: "2026-02-20"
    }
];

// total productos
export const totalDepartments = departmentMock.length;

// separacion de datos en paginas
export const mockDepartmentPageOne = departmentMock.slice(0, 5)
export const mockDepartmentPageTwo = departmentMock.slice(5, 10)

// obtener todos los productos
export const allMockDepartments = [...mockDepartmentPageOne, ...mockDepartmentPageTwo]

// funcion para obtener un departamento
export const getDept = (code: string) => {
    const dept = allMockDepartments.find(d => d.departmentCode === code);
    return {
        departmentCode: code,
        name: dept ? dept.name : "Área no especificada"
    };
};
