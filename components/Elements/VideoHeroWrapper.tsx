// Imports
import {FC} from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import {IVideoHeroWrapper} from "@/types/components";

const VideoHeroWrapper: FC<IVideoHeroWrapper> = ({children}) => {
	const VimeoVideo = styled.div`
		width: 100%;
		height: 0px;
		overflow: hidden;
		position: relative;
		padding-top: 56.25%;

		iframe,
		object,
		embed {
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			position: absolute;
			min-height: 1075px;
			max-height: 1500px;
		}

		video {
			height: 100%;
			width: 1280px;
			margin: 0 auto;
			max-height: 1080px;
		}
	`;

	return (
		<>
			<VimeoVideo>{parse(`${children}`)}</VimeoVideo>
		</>
	);
};

export default VideoHeroWrapper;
