// Imports
import {FC} from "react";
import {useGlobalContext} from "@/context/global";

// Components
import Paragraph from "./Elements/Paragraph";
const NoticeInfoBanner: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					globalContext?.themesOptionsContent?.displayNoticeBanner
						? "w-full z-[999] p-2 bg-blue-TwoDarker"
						: "hidden"
				}
			>
				<Paragraph
					content={globalContext?.themesOptionsContent?.noticeBannerTextarea}
					tailwindStyling="w-full font-semibold lg:max-w-[50rem] mx-auto text-white text-center text-base"
				/>
			</div>
		</>
	);
};

export default NoticeInfoBanner;
