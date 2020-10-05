import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAPIConfiguration } from './services/api.service';
import './App.scss';
import { RouterConfig } from './navigation';
import ApiConfigContext from './state/api-config.context';
import { IApiConfiguration } from './types/apiConfiguration';



function App() {
  const [configuration, setConfiguration] = useState<IApiConfiguration>({} as IApiConfiguration);

  useEffect(() => {
    async function fetchConfig() {
      const config = await getAPIConfiguration();

      setConfiguration(config);
    }

    fetchConfig()
  }, [setConfiguration])

  return (
    <ApiConfigContext.Provider value={configuration}>
      <RouterConfig />
    </ApiConfigContext.Provider>
  );
}

export default App;
