// Web3Context.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useWeb3React } from 'web3-react';
import { ethers } from 'ethers';

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const context = useWeb3React();
  const { activate, active, account, library, connector } = context;
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    if (active) {
      setProvider(new ethers.providers.Web3Provider(library));
    } else {
      setProvider(null);
    }
  }, [active, library]);

  return (
    <Web3Context.Provider value={{ activate, active, account, provider, connector }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
