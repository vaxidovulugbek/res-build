import React, { useState } from "react";
import { Button } from "ui/Button/Button";
import { Logo } from "ui/Logo/Logo";
import { IoSunny, IoMoon } from "react-icons/io5";
import { GoLock } from "react-icons/go";
import "./Header.scss";
import Navbar from "./NavBar";
import useStore from "Store";
import RoutesPath from "helpers/RoutesPath";
import SigninPage from "components/RegisterPage/SigninPage";
import LoginPage from "components/RegisterPage/LoginPage";

import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import Language from "./Language";

const Header: React.FC = () => {
	const { darkTheme, setDarkTheme } = useStore();
	const {
		isOpen: isFirstModalOpen,
		onOpen: openFirstModal,
		onClose: closeFirstModal,
	} = useDisclosure();
	const {
		isOpen: isSecondModalOpen,
		onOpen: openSecondModal,
		onClose: closeSecondModal,
	} = useDisclosure();

	const handleFirstModalNext = () => {
		closeFirstModal();
		openSecondModal();
	};

	const handleSecondModalNext = () => {
		openFirstModal();
		closeSecondModal();
	};

	const handleSecondModalClose = () => {
		closeSecondModal();
	};

	const OverlayOne = () => (
		<ModalOverlay bg="blackAlpha.100" backdropFilter="blur(5px) hue-rotate(0deg)" />
	);
	const [overlay, setOverlay] = React.useState(<OverlayOne />);

	return (
		<>
			<header className="header">
				<div className="container-box">
					<div className="flex items-center justify-between">
						{/* <Logo
							className="ld h-14 w-26"
							size="sm"
							src="https://upload.wikimedia.org/wikipedia/commons/1/13/LOGO_OF_LOGO.svg"
							alt="logo"
							href="/"
							link="/"
						/> */}
						<svg viewBox="0 0 1024 768" height="40px" width="100px" version="1.1">
							<g id="logo-group">
								<g id="logo-center" transform="translate(152.75793166666654 0)">
									<g
										id="slogan"
										style={{
											fontStyle: "normal",
											fontWeight: 700,
											fontSize: 32,
											lineHeight: 1,
											fontFamily: '"Comfortaa Bold Alt1"',
											fontVariantLigatures: "none",
											textAlign: "center",
											textAnchor: "middle",
										}}
										transform="translate(0 0)"
									/>
									<g
										id="title"
										style={{
											fontStyle: "normal",
											fontWeight: 700,
											fontSize: 72,
											lineHeight: 1,
											fontFamily: '"Comfortaa Bold Alt1"',
											fontVariantLigatures: "none",
											textAlign: "center",
											textAnchor: "middle",
										}}
										transform="translate(0 0)"
									>
										<path
											id="path107249"
											style={{
												fontStyle: "normal",
												fontWeight: 700,
												fontSize: 72,
												lineHeight: 1,
												fontFamily: '"Comfortaa Bold Alt1"',
												fontVariantLigatures: "none",
												textAlign: "center",
												textAnchor: "middle",
											}}
											d="m 411.89188,-54.288 c -2.52001,-1.296 -5.40001,-1.944 -8.56801,-1.944 h -17.20799 c -1.08001,0 -2.01601,0.36 -2.66401,1.08 -0.72,0.72 -1.08,1.584 -1.08,2.664 v 48.744 c 0,1.08 0.36,1.944 1.08,2.664 0.72,0.72 1.584,1.08 2.66401,1.08 h 18.71999 c 3.528,0 6.69601,-0.72 9.504,-2.16 2.808,-1.368 4.968,-3.384 6.55201,-6.048 1.58399,-2.52 2.37599,-5.472 2.37599,-8.784 0,-3.528 -0.93599,-6.48 -2.808,-8.784 -1.872,-2.304 -4.464,-3.816 -7.704,-4.608 2.16001,-1.08 3.888,-2.592 5.18401,-4.536 1.296,-1.8 1.94399,-3.96 1.94399,-6.336 0,-2.88 -0.71999,-5.4 -2.15999,-7.704 -1.44,-2.304 -3.38401,-4.032 -5.832,-5.328 z m -1.8,19.08 c -1.72801,1.44 -3.96001,2.088 -6.76801,2.088 h -11.30399 c -0.64801,0 -1.152,-0.144 -1.58401,-0.576 -0.432,-0.432 -0.576,-0.936 -0.576,-1.584 v -11.808 c 0,-0.648 0.144,-1.152 0.576,-1.584 0.43201,-0.432 0.936,-0.648 1.58401,-0.648 h 11.30399 c 2.808,0 5.04,0.72 6.76801,2.088 1.728,1.368 2.59199,3.384 2.59199,5.976 0,2.664 -0.86399,4.68 -2.59199,6.048 z m 2.87999,25.704 c -2.088,1.728 -4.824,2.592 -8.136,2.592 h -12.81599 c -0.64801,0 -1.152,-0.144 -1.58401,-0.576 -0.432,-0.432 -0.576,-0.936 -0.576,-1.584 v -14.904 c 0,-0.648 0.144,-1.152 0.576,-1.584 0.43201,-0.432 0.936,-0.648 1.58401,-0.648 h 12.81599 c 3.384,0 6.12,0.792 8.136,2.376 2.01601,1.656 3.09601,3.888 3.09601,6.84 0,3.24 -1.08,5.76 -3.09601,7.488 z"
											strokeWidth={0}
											strokeLinejoin="miter"
											strokeMiterlimit={2}
											fill="#d7d7d9"
											stroke="#d7d7d9"
											transform="translate(0 342.65200000000004) translate(50 -24.256) scale(2.3333333333333335) translate(-382.37187 56.232)"
										/>
										<path
											id="path107251"
											style={{
												fontStyle: "normal",
												fontWeight: 700,
												fontSize: 72,
												lineHeight: 1,
												fontFamily: '"Comfortaa Bold Alt1"',
												fontVariantLigatures: "none",
												textAlign: "center",
												textAnchor: "middle",
											}}
											d="m 468.09913,-18 c 0.57599,-0.576 0.93599,-1.368 0.93599,-2.304 0,-3.744 -0.71999,-7.128 -2.15999,-10.08 -1.44001,-2.88 -3.52801,-5.184 -6.192,-6.84 -2.736,-1.584 -5.904,-2.448 -9.57601,-2.448 -3.74399,0 -7.128,0.864 -10.08,2.592 -2.95199,1.728 -5.256,4.104 -6.912,7.128 -1.656,3.024 -2.448,6.48 -2.448,10.296 0,3.888 0.864,7.272 2.592,10.296 1.728,3.024 4.176,5.4 7.344,7.128 3.096,1.728 6.624,2.52 10.584,2.52 2.16,0 4.464,-0.36 6.91201,-1.224 2.44799,-0.792 4.464,-1.872 6.12,-3.168 0.71999,-0.576 1.15199,-1.296 1.15199,-2.16 0,-0.864 -0.432,-1.728 -1.29599,-2.448 -0.57601,-0.432 -1.296,-0.72 -2.16001,-0.72 -0.936,0 -1.728,0.288 -2.37599,0.792 -1.00801,0.792 -2.30401,1.44 -3.88801,1.944 -1.584,0.576 -3.024,0.792 -4.464,0.792 -3.672,0 -6.768,-1.008 -9.28799,-3.096 -2.52001,-2.016 -4.03201,-4.752 -4.536,-8.136 h 27.35999 c 0.93601,0 1.728,-0.288 2.37601,-0.864 z m -25.56,-12.6 c 2.15999,-1.872 5.03999,-2.88 8.56799,-2.88 3.168,0 5.688,1.008 7.704,2.88 1.94401,1.944 3.168,4.536 3.6,7.704 h -23.976 c 0.576,-3.168 1.944,-5.76 4.10401,-7.704 z"
											strokeWidth={0}
											strokeLinejoin="miter"
											strokeMiterlimit={2}
											fill="#d7d7d9"
											stroke="#d7d7d9"
											transform="translate(0 342.65200000000004) translate(165.02224999999999 14.384) scale(2.3333333333333335) translate(-431.66712 39.672)"
										/>
										<path
											id="path107253"
											style={{
												fontStyle: "normal",
												fontWeight: 700,
												fontSize: 72,
												lineHeight: 1,
												fontFamily: '"Comfortaa Bold Alt1"',
												fontVariantLigatures: "none",
												textAlign: "center",
												textAnchor: "middle",
											}}
											d="m 500.57787,-38.16 c -2.448,-1.008 -5.256,-1.512 -8.352,-1.512 -2.592,0 -4.96799,0.432 -7.2,1.224 -2.304,0.864 -4.104,2.088 -5.472,3.672 -1.44,1.656 -2.088,3.672 -2.088,5.976 0,5.832 4.608,9.648 13.824,11.376 3.52801,0.72 6.048,1.512 7.56,2.52 1.44,1.008 2.23201,2.232 2.23201,3.672 0,1.584 -0.79201,2.808 -2.30401,3.672 -1.512,0.936 -3.6,1.368 -6.336,1.368 -2.08799,0 -4.032,-0.36 -5.832,-1.08 -1.872,-0.72 -3.24,-1.656 -4.104,-2.664 -0.86399,-0.864 -1.8,-1.296 -2.73599,-1.296 -0.79201,0 -1.65601,0.36 -2.52001,1.008 -1.008,0.72 -1.44,1.656 -1.44,2.808 0,0.864 0.288,1.656 0.936,2.232 1.58401,1.656 3.888,2.952 6.768,3.96 2.88,1.008 5.904,1.512 9.216,1.512 3.24,0 6.048,-0.504 8.35201,-1.512 2.30399,-1.008 4.10399,-2.448 5.32799,-4.248 1.152,-1.8 1.8,-3.816 1.8,-6.048 0,-2.952 -1.152,-5.4 -3.312,-7.272 -2.16,-1.872 -5.904,-3.312 -11.088,-4.392 -2.592,-0.504 -4.536,-1.008 -5.832,-1.584 -1.368,-0.576 -2.304,-1.152 -2.736,-1.8 -0.504,-0.648 -0.71999,-1.44 -0.71999,-2.448 0,-1.296 0.64799,-2.376 2.08799,-3.096 1.44,-0.72 3.24,-1.152 5.47201,-1.152 1.87199,0 3.52799,0.288 4.89599,0.72 1.296,0.432 2.59201,1.224 3.81601,2.304 1.00799,0.936 2.08799,1.368 3.38399,1.368 0.792,0 1.44001,-0.144 2.016,-0.576 0.79201,-0.648 1.224,-1.368 1.224,-2.232 0,-0.72 -0.36,-1.512 -0.936,-2.304 -1.44,-1.728 -3.456,-3.168 -5.904,-4.176 z"
											strokeWidth={0}
											strokeLinejoin="miter"
											strokeMiterlimit={2}
											fill="#d7d7d9"
											stroke="#d7d7d9"
											transform="translate(0 342.65200000000004) translate(268.02199999999993 14.384) scale(2.3333333333333335) translate(-475.80987 39.672)"
										/>
										<path
											id="path107255"
											style={{
												fontStyle: "normal",
												fontWeight: 700,
												fontSize: 72,
												lineHeight: 1,
												fontFamily: '"Comfortaa Bold Alt1"',
												fontVariantLigatures: "none",
												textAlign: "center",
												textAnchor: "middle",
											}}
											d="m 519.15162,-37.944 v 6.192 17.784 c 0,2.664 0.504,5.04 1.65601,7.128 1.07999,2.16 2.592,3.816 4.53599,5.04 1.94401,1.224 4.10401,1.8 6.48,1.8 h 1.29601 c 1.22399,0 2.232,-0.288 3.024,-1.008 0.79199,-0.648 1.22399,-1.512 1.22399,-2.592 0,-1.008 -0.36,-1.872 -0.936,-2.592 -0.57599,-0.648 -1.296,-1.008 -2.16,-1.008 h -2.448 c -1.58399,0 -2.88,-0.648 -3.888,-1.944 -1.07999,-1.296 -1.58399,-2.88 -1.58399,-4.824 v -17.784 h 6.12 c 1.00799,0 1.79999,-0.288 2.44799,-0.864 0.57601,-0.576 0.93601,-1.296 0.93601,-2.16 0,-0.936 -0.36,-1.728 -0.93601,-2.304 -0.648,-0.576 -1.44,-0.864 -2.44799,-0.864 h -6.12 v -10.368 c 0,-1.008 -0.36001,-1.872 -1.00801,-2.592 -0.72,-0.648 -1.58399,-1.008 -2.592,-1.008 -1.08,0 -1.94399,0.36 -2.592,1.008 -0.72,0.72 -1.008,1.584 -1.008,2.592 z"
											strokeWidth={0}
											strokeLinejoin="miter"
											strokeMiterlimit={2}
											fill="#d7d7d9"
											stroke="#d7d7d9"
											transform="translate(0 342.65200000000004) translate(369.15274999999997 -14.176000000000002) scale(2.3333333333333335) translate(-519.15162 51.912)"
										/>
										<path
											id="path107257"
											style={{
												fontStyle: "normal",
												fontWeight: 700,
												fontSize: 72,
												lineHeight: 1,
												fontFamily: '"Comfortaa Bold Alt1"',
												fontVariantLigatures: "none",
												textAlign: "center",
												textAnchor: "middle",
											}}
											d="m 581.67575,-55.512 c -2.664,-0.936 -5.832,-1.44 -9.432,-1.44 -5.184,0 -9.864,1.296 -14.112,3.888 -4.248,2.592 -7.56,6.048 -10.008,10.44 -2.448,4.392 -3.672,9.216 -3.672,14.472 0,5.328 1.224,10.224 3.672,14.616 2.448,4.464 5.76,7.92 10.008,10.44 4.248,2.592 8.928,3.816 14.112,3.816 6.552,0 12.456,-2.088 17.64,-6.264 0.72,-0.72 1.152,-1.656 1.152,-2.664 0,-1.008 -0.36,-1.872 -0.936,-2.52 -0.576,-0.648 -1.368,-1.008 -2.232,-1.008 -0.792,0 -1.584,0.288 -2.376,0.864 -4.248,3.168 -8.64,4.752 -13.248,4.752 -3.744,0 -7.2,-0.936 -10.368,-2.952 -3.168,-1.944 -5.616,-4.608 -7.488,-7.992 -1.872,-3.312 -2.736,-7.056 -2.736,-11.088 0,-3.96 0.864,-7.632 2.736,-11.016 1.872,-3.384 4.32,-6.048 7.488,-8.064 3.168,-1.944 6.624,-2.952 10.368,-2.952 2.952,0 5.4,0.432 7.272,1.152 1.872,0.72 3.744,1.944 5.76,3.6 0.72,0.648 1.584,0.936 2.52,0.936 0.864,0 1.656,-0.288 2.376,-0.936 0.72,-0.576 1.08,-1.368 1.08,-2.376 0,-0.576 -0.144,-1.152 -0.288,-1.584 -0.216,-0.432 -0.576,-0.936 -1.152,-1.368 -2.736,-2.16 -5.472,-3.744 -8.136,-4.752 z"
											strokeWidth={0}
											strokeLinejoin="miter"
											strokeMiterlimit={2}
											fill="#010101"
											stroke="#010101"
											transform="translate(0 342.65200000000004) translate(428.1863866666666 -25.936000000000007) scale(2.3333333333333335) translate(-544.45175 56.952)"
										/>
										<path
											id="path107259"
											style={{
												fontStyle: "normal",
												fontWeight: 700,
												fontSize: 72,
												lineHeight: 1,
												fontFamily: '"Comfortaa Bold Alt1"',
												fontVariantLigatures: "none",
												textAlign: "center",
												textAnchor: "middle",
											}}
											d="m 646.5005,-55.368 c -0.576,-0.576 -1.44,-0.864 -2.448,-0.864 -0.864,0 -1.584,0.216 -2.088,0.504 -0.576,0.288 -1.008,0.864 -1.296,1.728 l -16.488,38.808 c -0.36,0.864 -1.008,1.296 -1.944,1.296 -1.008,0 -1.656,-0.432 -2.016,-1.296 L 604.0925,-54 c -0.648,-1.44 -1.8,-2.232 -3.456,-2.232 -1.08,0 -1.944,0.288 -2.52,0.864 -0.576,0.576 -0.864,1.296 -0.864,2.232 0,0.72 0.144,1.512 0.576,2.52 l 21.096,48.24 c 0.72,1.584 1.8,2.376 3.384,2.376 1.584,0 2.736,-0.792 3.384,-2.376 l 21.312,-48.888 c 0.288,-0.648 0.432,-1.296 0.432,-1.872 0,-0.864 -0.36,-1.584 -0.936,-2.232 z"
											strokeWidth={0}
											strokeLinejoin="miter"
											strokeMiterlimit={2}
											fill="#010101"
											stroke="#010101"
											transform="translate(0 342.65200000000004) translate(551.3881366666669 -24.256) scale(2.3333333333333335) translate(-597.2525 56.232)"
										/>
									</g>
								</g>
							</g>
						</svg>

						<div className="flex items-center">
							<Navbar />
							<div className="flex items-center header__only-desktop">
								<div>
									<Button
										className="text-gray flex items-center flex-row-reverse ms-2"
										text="Login"
										children={<GoLock className="me-2" />}
										onClick={openFirstModal}
									/>
								</div>
								<Button
									className="ms-5 text-white bg-primary px-6 py-3 rounded-3xl shadow-xl"
									text="Get started"
									link={RoutesPath?.resume}
								/>
							</div>
							<Language />
							{/* <div className="flex item-center ms-4">
								{darkTheme ? (
									<button onClick={() => setDarkTheme(!darkTheme)}>
										<IoMoon className="header__icon header__dark" />
									</button>
								) : (
									<button onClick={() => setDarkTheme(!darkTheme)}>
										<IoSunny className="header__icon header__light" />
									</button>
								)}
							</div> */}
						</div>
					</div>
				</div>
			</header>

			<Modal onClose={closeFirstModal} isOpen={isFirstModalOpen} isCentered>
				{/* {overlay} */}
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontSize="3xl">Вход в аккаунт</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<LoginPage onClose={handleSecondModalClose} onNext={handleFirstModalNext} />
					</ModalBody>
				</ModalContent>
			</Modal>

			<Modal onClose={closeSecondModal} isOpen={isSecondModalOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontSize="3xl">Регистрация</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<SigninPage onClose={closeFirstModal} onNext={handleSecondModalNext} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Header;
