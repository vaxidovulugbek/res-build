import create from "zustand";

interface MyStore {
	darkTheme: boolean;
	resumeTamplate: number;
	changeStatusSlider: boolean;
	hasError: any;
	countExpirence: number | string | any;
	countEducation: number | string | any;
	idExpirence: number | string | any;
	idEducation: number | string | any;
	setHasError: (questionLength: number) => void;
	setResumeTamplate: (questionLength: number) => void;
	setDarkTheme: (questionLength: boolean) => void;
	setChangeStatusSlider: (questionLength: boolean) => void;
	setCountExpirence: (questionLength: number | any) => void;
	setCountEducation: (questionLength: number | any) => void;
	setIdExpirence: (questionLength: any) => void;
	setIdEducation: (questionLength: any) => void;
}

const useStore = create<MyStore>((set) => ({
	darkTheme: false,
	changeStatusSlider: true,
	resumeTamplate: 1,
	hasError: null,
	countExpirence: 0,
	countEducation: 0,
	idExpirence: null,
	idEducation: null,
	setHasError: (hasError) => set({ hasError }),
	setResumeTamplate: (resumeTamplate) => set({ resumeTamplate }),
	setDarkTheme: (darkTheme) => set({ darkTheme }),
	setChangeStatusSlider: (changeStatusSlider) => set({ changeStatusSlider }),
	setCountExpirence: (countExpirence) => set({ countExpirence }),
	setCountEducation: (countEducation) => set({ countEducation }),
	setIdExpirence: (idExpirence) => set({ idExpirence }),
	setIdEducation: (idEducation) => set({ idEducation }),
}));

export default useStore;
