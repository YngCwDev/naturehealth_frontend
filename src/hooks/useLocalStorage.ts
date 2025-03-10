import { useState, useEffect } from "react";

/**
 * Hook personalizado para armazenar valores no localStorage.
 *
 * @param key - A chave do localStorage.
 * @param initialValue - O valor inicial caso não haja um valor armazenado.
 * @returns [storedValue, setStoredValue] - Estado e função para atualizar o valor.
 */
function useLocalStorage<T>(key: string, initialValue: T) {
  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Tenta obter do localStorage
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Erro ao acessar o localStorage:", error);
      return initialValue;
    }
  });

  // Atualiza o localStorage quando o estado muda
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export default useLocalStorage;
