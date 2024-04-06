// Imports
import * as React from "react";
import {IEmailFooter} from "@/types/email";
import {Img, Row, Link, Text, Column, Section} from "@react-email/components";

const EmailFooter: React.FC<IEmailFooter.IEmailFooter> = ({
	imagesDirUrl,
	themesOptionsContent,
}) => {
	return (
		<>
			<Section style={{border: "5px solid", borderColor: "#e8b042"}}></Section>
			<Section style={footer}>
				<Section style={footerLogoSection}>
					<Link href={`https://bluetech-digital.co.uk/`}>
						<Img
							width="105px"
							height="105px"
							style={footerLogo}
							alt="Bluetech Digital Logo White"
							src={`${imagesDirUrl}/01/BluetechDigital-Logo-color.png`}
						/>
					</Link>
				</Section>
				<Row>
					<Column align="right" style={{width: "33%", paddingRight: "8px"}}>
						<Link href={themesOptionsContent?.facebookLink?.url} style={link}>
							<Img
								width="100%"
								height="35px"
								style={{width: "35px", height: "35px"}}
								src={`${imagesDirUrl}/02/facebook-round-white.png`}
							/>
						</Link>
					</Column>
					<Column align="center" style={{width: "33%", paddingLeft: "8px"}}>
						<Link href={themesOptionsContent?.linkedinLink?.url} style={link}>
							<Img
								width="100%"
								height="35px"
								style={{width: "35px", height: "35px"}}
								src={`${imagesDirUrl}/02/linkedin-round-white-purple.png`}
							/>
						</Link>
					</Column>
					<Column align="left" style={{width: "33%", paddingLeft: "8px"}}>
						<Link href={themesOptionsContent?.twitterLink?.url} style={link}>
							<Img
								width="100%"
								height="35px"
								style={{width: "35px", height: "35px"}}
								src={`${imagesDirUrl}/02/twitter-round-white.png`}
							/>
						</Link>
					</Column>
				</Row>
				<Row>
					<Text
						style={{
							color: "#fafafa",
							fontSize: "0.8rem",
							textAlign: "center",
							lineHeight: "1.15rem",
							padding: "0.25rem 0.5rem",
						}}
					>
						{themesOptionsContent?.copyrightText}
					</Text>
				</Row>
			</Section>
		</>
	);
};

export default EmailFooter;

const link: IEmailFooter.ILink = {
	color: "#2563eb",
	textDecoration: "underline",
};

const footer: IEmailFooter.IFooter = {
	maxWidth: "580px",
	margin: "0 auto",
	marginBottom: "30px",
	backgroundColor: "#5125a4",
};

const footerLogoSection: IEmailFooter.IFooterLogoSection = {
	width: "100%",
	padding: "0px",
	backgroundColor: "#5125a4",
};

const footerLogo: IEmailFooter.IFooterLogo = {
	width: "100%",
	height: "90px",
	margin: "0 auto",
	maxWidth: "90px",
	marginBottom: "1rem",
};
