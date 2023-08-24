import axios from 'axios';
import queryString from 'query-string';
import { BeanExchangeInterface, BeanExchangeGetQueryInterface } from 'interfaces/bean-exchange';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBeanExchanges = async (
  query?: BeanExchangeGetQueryInterface,
): Promise<PaginatedInterface<BeanExchangeInterface>> => {
  const response = await axios.get('/api/bean-exchanges', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBeanExchange = async (beanExchange: BeanExchangeInterface) => {
  const response = await axios.post('/api/bean-exchanges', beanExchange);
  return response.data;
};

export const updateBeanExchangeById = async (id: string, beanExchange: BeanExchangeInterface) => {
  const response = await axios.put(`/api/bean-exchanges/${id}`, beanExchange);
  return response.data;
};

export const getBeanExchangeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/bean-exchanges/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBeanExchangeById = async (id: string) => {
  const response = await axios.delete(`/api/bean-exchanges/${id}`);
  return response.data;
};
