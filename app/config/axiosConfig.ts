import axios from 'axios';
import axiosRetry from 'axios-retry';

import {AXIOS_BASE_URL, AXIOS_MAXIMUM_RETRIES} from 'react-native-dotenv';

// Set config defaults when creating the instance
const axiosClient = axios.create({
  baseURL: AXIOS_BASE_URL,
});

//Set config for total number of retries
axiosRetry(axiosClient, {retries: AXIOS_MAXIMUM_RETRIES});

export default axiosClient;
