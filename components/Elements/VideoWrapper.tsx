// Imports
import {FC} from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import {IVideoWrapper} from "@/types/components";

const VideoWrapper: FC<IVideoWrapper> = ({children}) => {
	const VimeoVideo = styled.div`
		height: auto;
		max-width: 100%;
		overflow: hidden;
		position: relative;

		iframe,
		object,
		embed {
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			position: static;
			min-height: 300px;
			max-height: 1000px;
		}

		video {
			height: 100%;
			width: 1280px;
			margin: 0 auto;
			max-height: 1080px;
		}

		@media screen and (min-width: 1024px) {
			iframe,
			object,
			embed {
				min-height: 375px;
			}
		}

		@media screen and (min-width: 1280px) {
			iframe,
			object,
			embed {
				min-height: 450px;
			}
		}

		@media screen and (min-width: 1440px) {
			iframe,
			object,
			embed {
				min-height: 500px;
			}
		}
	`;

	return (
		<>
			<VimeoVideo>{parse(`${children}`)}</VimeoVideo>
		</>
	);
};

export default VideoWrapper;
