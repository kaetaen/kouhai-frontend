// Main json interface
export interface IData {
    catho: IJobs[];
    programathor: IJobs[];
}

// Jobs details
export interface IJobs {
    title: string;
    url: string;
    job_details?: Array<string>;
    pay_scale?: string;
    job_updated_at?: string;
    description: string;
}

// Array of Jobs
export type JobsList = Array<IJobs>  