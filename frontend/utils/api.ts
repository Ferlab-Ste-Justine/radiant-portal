import { Configuration, OccurrencesApi, InterpretationsApi, MondoApi } from '../api';
import { BASE_PATH } from '../api/base';
import { axiosClient } from './axios';

const config = new Configuration({
  basePath: '/api',
});

export const occurrencesApi = new OccurrencesApi(config, BASE_PATH, axiosClient);
export const interpretationApi = new InterpretationsApi(config, BASE_PATH, axiosClient);
export const mondoApi = new MondoApi(config, BASE_PATH, axiosClient);
