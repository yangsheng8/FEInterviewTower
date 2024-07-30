import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));