import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import axios from 'axios';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const baseURL = 'https://cddev.creer-design.com/harmonize/api/';
export const client = axios.create({ baseURL, timeout: 10000 });

export { AxiosError as Error } from 'axios';
