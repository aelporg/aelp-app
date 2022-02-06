import React from 'react';

export interface TopNavStore {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const TopNavContext = React.createContext<TopNavStore | undefined>(undefined);

export const useTopNavStore = () => {
  const value = React.useContext(TopNavContext);

  if (!value) {
    throw new Error('useTopNavStore must be used within a TopNavProvider');
  }

  return value;
};

export const TopNavProvider = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <TopNavContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </TopNavContext.Provider>
  );
};

export const TopNavConsumer = TopNavContext.Consumer;
