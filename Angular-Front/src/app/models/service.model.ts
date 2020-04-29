import { Time } from '@angular/common';

export class Service {
    serviceCode: string;
    description: string;
    smsDescription: string;
    costToOwner: number;
    departmentType: string;
    categoryType: string;
    servicePrice: number;
    totalDuration: {
        initialServiceDuration: Time;
        processingServiceDuration: Time;
        finishinServiceDuration: Time;
    };
}
