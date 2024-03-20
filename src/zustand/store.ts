import create from "zustand";

interface MyStore {
	darkTheme: boolean;
	resumeTamplate: number;
	changeStatusSlider: boolean;
	setResumeTamplate: (questionLength: number) => void;
	setDarkTheme: (questionLength: boolean) => void;
	setChangeStatusSlider: (questionLength: boolean) => void;
}

const useStore = create<MyStore>((set) => ({
	darkTheme: false,
	changeStatusSlider: true,
	resumeTamplate: 1,
	setResumeTamplate: (resumeTamplate) => set({ resumeTamplate }),
	setDarkTheme: (darkTheme) => set({ darkTheme }),
	setChangeStatusSlider: (changeStatusSlider) => set({ changeStatusSlider }),
}));

export default useStore;
