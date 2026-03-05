export interface DepartmentResponse {
    departmentCode: string;
    name: string;
    responsibleName: string;
    isActive: boolean;
    registrationDate: string | null;
    productCount: number;
    percentage?: number;
    createdAt: string;
    updatedAt: string;
}


