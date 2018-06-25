import { environment } from '../environments/environment';

// Base API URL
const BASE_API_URL = environment.BASE_API_URL;

// Cars
const CAR_PREFIX = '/cars';
export const GAT_ALL_CARS_FOR_COMPANY = `${BASE_API_URL}${CAR_PREFIX}/company/`;
export const GET_CAR_DETAILS_BY_ID = `${BASE_API_URL}${CAR_PREFIX}/details/`;

// Companies
const COMPANY_PREFIX = '/companies';
export const GET_ALL_COMPANIES = `${BASE_API_URL}${COMPANY_PREFIX}/all`;

export const RequestParams = {
    COMPANY_ID: 'companyId',
    CAR_ID: 'carId',
};
