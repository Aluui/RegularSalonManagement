export class Product {
    productId: string;
    adminId = localStorage.getItem('adminId');
    productCode: string;
    description: string;
    smsDescription?: string;
    productPrice: string;
    productImageUrl?: string;
}
