import { createContext } from 'react';

export const ContextSetting = createContext();

function ContextSettingsProvider(props) {
  return (
    <ContextSetting.Provider value={{}}>
      {props.childen}
    </ContextSetting.Provider>
  )
}

export default ContextSettingsProvider;