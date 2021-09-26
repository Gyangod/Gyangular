import { User } from './user';
import { PackageOccurence } from './package-occurence';
import { LocationPoint } from './location-point';

export interface Packages {
    packageId: string;
    standards: string[];
    name: string;
    description: string;
    createdBy: User;
    teacher: User;
    costPerHour: number;
    monthlyDiscount: number;
    occurrences: number;
    weeklyCost: number;
    totalWeekHours: number;
    totalMonthHours: number;
    monthlyCost: number;
    addressLock: boolean;
    // address: CustomerAddress;
    addressPlaceName: string;
    location: LocationPoint;
    occurrencesList: PackageOccurence[];
    subjects: string[];
    topics: string[];
    visibility: boolean;
    isActive: boolean;

}