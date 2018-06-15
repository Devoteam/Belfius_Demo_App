import { environment } from '../environments/environment';

// Base API URL
const BASE_API_URL = environment.BASE_API_URL;

// Cars
const CAR_PREFIX = '/cars';
const CAR_BRANDS_PREFIX = '/brands';
const CAR_MODELS_PREFIX = '/models';

export const GET_ALL_CAR_BRANDS = `${BASE_API_URL}${CAR_PREFIX}${CAR_BRANDS_PREFIX}/all`;
export const GET_CAR_MODELS_BY_BRAND_ID = `${BASE_API_URL}${CAR_PREFIX}${CAR_MODELS_PREFIX}?carBrandId=`;
export const GET_CAR_BY_CAR_MODEL_ID = `${BASE_API_URL}${CAR_PREFIX}?carModelId=`;
export const LOGIN = `${BASE_API_URL}/login`;

export const JWT_TOKEN_KEY = 'jwtToken';



export const RequestParams = {
    CAR_BRAND_ID: 'carBrandId',
    CAR_MODEL_ID: 'carBrandId'
};
