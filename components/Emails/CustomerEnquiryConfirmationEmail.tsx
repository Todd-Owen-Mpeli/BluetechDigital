// Imports
import {
	Head,
	Html,
	Link,
	Text,
	Body,
	Section,
	Preview,
	Container,
} from "@react-email/components";
import * as React from "react";
import {ICustomerEmail} from "@/types/email";

// Components
import EmailFooter from "./Layout/EmailFooter";
import EmailHeader from "./Layout/EmailHeader";

export const CustomerEnquiryConfirmationEmail: React.FC<
	ICustomerEmail.ICustomerConfirmationEmail
> = ({
	email,
	subject,
	lastName,
	firstName,
	updatedDate,
	phoneNumber,
	imagesDirUrl,
	selectedServices,
	themesOptionsContent,
}) => {
	const formattedDate = new Intl.DateTimeFormat("en", {
		dateStyle: "medium",
		timeStyle: "medium",
	}).format(updatedDate);

	return (
		<>
			<Html>
				<Head />
				<Preview>Thank You for Contacting Bluetech Digital Ltd</Preview>
				<Body style={main}>
					<Container style={container}>
						<EmailHeader
							imagesDirUrl={`${imagesDirUrl}/02/Bluetech-Digital-Ltd-Email-Header-Customer.png`}
						/>
						<Section style={content}>
							<Text style={introParagraph}>Hi {firstName},</Text>
							<Text style={paragraph}>
								Thank you for reaching out to Bluetech Digital Ltd regarding{" "}
								{subject} and our {selectedServices} services. We have received
								your website inquiry on {formattedDate} and are eager to assist
								you with your goals. At this moment there is no further action
								is required from you.
							</Text>
							<Text style={paragraph}>
								Our team is currently reviewing the details you provided, and we
								will get back to you as soon as possible with further
								information and to discuss your requirements in more detail. We
								will get in touch by calling you at {phoneNumber} or either
								emailing you at {email}.
							</Text>
							<Text style={paragraph}>
								In the meantime, if you have any urgent questions or additional
								information you&apos;d like to share, please feel free to reply
								to this email or give us a call at{" "}
								<Link
									href={`tel:${themesOptionsContent?.phoneNumber}`}
									style={link}
								>
									{themesOptionsContent?.phoneNumber}
								</Link>
								{themesOptionsContent?.phoneNumberTwo ? " or " : " "}
								<Link
									href={`tel:${themesOptionsContent?.phoneNumberTwo}`}
									style={link}
								>
									{themesOptionsContent?.phoneNumberTwo}
								</Link>
							</Text>
							<Text style={paragraph}>
								Thank you once again for considering Bluetech Digital Ltd for
								your {selectedServices} needs. We look forward to the
								opportunity to work with you and transform your ideas to
								reality.
							</Text>
							<Text style={paragraph}>Best regards,</Text>
							<Text style={paragraph}>
								Todd Mpeli,
								<br />
								Director,
								<br />
								Bluetech Digital Ltd
							</Text>
							<Text style={paragraph}>
								{themesOptionsContent?.phoneNumber ? "Tel: " : ""}
								<Link
									href={`tel:${themesOptionsContent?.phoneNumber}`}
									style={link}
								>
									{themesOptionsContent?.phoneNumber}
								</Link>{" "}
								{themesOptionsContent?.phoneNumberTwo ? " or " : " "}
								<Link
									href={`tel:${themesOptionsContent?.phoneNumberTwo}`}
									style={link}
								>
									{themesOptionsContent?.phoneNumberTwo}
								</Link>
								<br />
								Email:{" "}
								<Link
									href={`mailto:${themesOptionsContent?.email}`}
									style={link}
								>
									{themesOptionsContent?.email}
								</Link>
								{themesOptionsContent?.emailTwo ? " or " : " "}
								<Link
									href={`mailto:${themesOptionsContent?.emailTwo}`}
									style={link}
								>
									{themesOptionsContent?.emailTwo}
								</Link>
								<br />
								Website:{" "}
								<Link style={link} href={`https://bluetech-digital.co.uk/`}>
									bluetech-digital.co.uk
								</Link>
							</Text>
						</Section>
						<EmailFooter
							imagesDirUrl={imagesDirUrl}
							themesOptionsContent={themesOptionsContent}
						/>
					</Container>
				</Body>
			</Html>
		</>
	);
};

export default CustomerEnquiryConfirmationEmail;

const fontFamily: string = "PlusJakartaSans,Helvetica,Arial,sans-serif";

const main: ICustomerEmail.IMain = {
	fontFamily,
	padding: "0px",
	backgroundColor: "#ffffff",
};
const introParagraph: ICustomerEmail.IIntroParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "600",
	padding: "0.25rem 0.5rem",
	paddingTop: "1.5rem",
};
const paragraph: ICustomerEmail.IParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "400",
	padding: "0.25rem 0.5rem",
};
const container: ICustomerEmail.IContainer = {
	maxWidth: "580px",
	margin: "0px auto",
	marginBottom: "0px",
	backgroundColor: "#ffffff",
};
const content: ICustomerEmail.IContent = {
	padding: "10px",
};
const link: ICustomerEmail.ILink = {
	color: "#2563eb",
	textDecoration: "underline",
};
