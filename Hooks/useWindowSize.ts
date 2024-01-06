import {useState, useEffect} from "react";

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<{
		width: number | undefined;
		height: number | undefined;
	}>({
		width: undefined,
		height: undefined,
	});

	let timeoutID: ReturnType<typeof setTimeout> | null = null;

	useEffect(() => {
		const handleResize = () => {
			if (timeoutID) clearTimeout(timeoutID);

			// eslint-disable-next-line react-hooks/exhaustive-deps
			timeoutID = setTimeout(() => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}, 500);
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};

export default useWindowSize;
