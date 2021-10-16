import { User } from './user';
import { PackageOccurence } from './package-occurence';
import { LocationPoint } from './location-point';

export interface Packages {
    packageId: string;
    standards: string[];
    name: string;
    description: string;
    courseEndDate: Date;
    createdBy: User;
    teacher: User;
    teacherName: string;
    anyoneCanAddBatch: boolean;
    refundable: boolean;
    costPerHour: number;
    courseDiscount: number;
    weeklyCost: number;
    totalWeekHours: number;
    totalMonthHours: number;
    monthlyCost: number;
    courseDuration: number;
    fixedCourse: boolean;
    location: LocationPoint;
    mapOccurrences: Map<string,PackageOccurence[]>;
    subjects: string[];
    visibility: boolean;
    active: boolean;

}