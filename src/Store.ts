import create from "zustand";

interface MyStore {
	darkTheme: boolean;
	setDarkTheme: (questionLength: boolean) => void;
}

const useStore = create<MyStore>((set) => ({
	darkTheme: false,
	setDarkTheme: (darkTheme) => set({ darkTheme }),
}));

export default useStore;
