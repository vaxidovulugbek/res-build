import create from "zustand";

interface MyStore {
	darkTheme: boolean;
	resumeTamplate: number;
	setResumeTamplate: (questionLength: number) => void;
	setDarkTheme: (questionLength: boolean) => void;
}

const useStore = create<MyStore>((set) => ({
	darkTheme: false,
	resumeTamplate: 1,
	setResumeTamplate: (resumeTamplate) => set({ resumeTamplate }),
	setDarkTheme: (darkTheme) => set({ darkTheme }),
}));

export default useStore;
