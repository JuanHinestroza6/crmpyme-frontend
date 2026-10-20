import { useContext } from 'react';
import { AuthContext } from './contexto';

export function useAuth() {
  return useContext(AuthContext);
}