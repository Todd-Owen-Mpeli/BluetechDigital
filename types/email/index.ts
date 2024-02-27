import {IThemesOptionsContent} from "../context";

/* Customer Enquiry 
Confirmation Email */
export type ICustomerEmail = {
	from: string;
	to: string;
	subject: string;
	html: string;
};

/* Business Customer 
Enquiry Confirmation Email */
export type IBusinessEmail = {
	from: string;
	to: string;
	subject: string;
	html: string;
};

/* Types Namespace - (EMAIL HEADER)
Global Email Header (IEmailHeader) */
export namespace IEmailHeader {
	export type IEmailHeader = {
		imagesDirUrl?: string;
	};
	export type IImageSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type ILogo = {
		width: string;
		height: string;
		minHeight: string;
	};
}

/* Types Namespace - (EMAIL FOOTER)
Global Email Footer (IEmailFooter) */
export namespace IEmailFooter {
	export type IEmailFooter = {
		imagesDirUrl?: string;
		themesOptionsContent?: IThemesOptionsContent;
	};
	export type ILink = {
		color: string;
		textDecoration: string;
	};
	export type IFooter = {
		maxWidth: string;
		margin: string;
		marginBottom: string;
		backgroundColor: string;
	};
	export type IFooterLogoSection = {
		width: string;
		padding: string;
		backgroundColor: string;
	};
	export type IFooterLogo = {
		width: string;
		height: string;
		margin: string;
		maxWidth: string;
		marginBottom: string;
	};
}

/* Types Namespace - (CUSTOMER)
Customer Enquiry Confirmation Email */
export namespace ICustomerEmail {
	export type ICustomerConfirmationEmail = {
		email?: string;
		message?: string;
		subject?: string;
		lastName?: string;
		firstName?: string;
		updatedDate?: Date;
		phoneNumber?: number;
		imagesDirUrl?: string;
		selectedServices?: string;
		themesOptionsContent?: IThemesOptionsContent;
	};
	export type IMain = {
		padding: string;
		fontFamily: string;
		backgroundColor: string;
	};
	export type IIntroParagraph = {
		lineHeight: number;
		fontSize: number;
		fontWeight: string;
		padding: string;
		paddingTop: string;
	};
	export type IParagraph = {
		lineHeight: number;
		fontSize: number;
		fontWeight: string;
		padding: string;
	};
	export type IContainer = {
		maxWidth: string;
		margin: string;
		marginBottom: string;
		backgroundColor: string;
	};
	export type IContent = {
		padding: string;
	};
	export type IImageSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type ILink = {
		color: string;
		textDecoration: string;
	};
	export type ILogo = {
		width: string;
		height: string;
		minHeight: string;
	};
	export type IFooter = {
		maxWidth: string;
		margin: string;
		marginBottom: string;
		backgroundColor: string;
	};
	export type IFooterLogoSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type IFooterLogo = {
		width: string;
		height: string;
	};
}

/* Types Namespace - (BUSINESS)
Business Customer Enquiry Confirmation Email */
export namespace IBusinessEmail {
	export type IBusinessConfirmationEmail = {
		email?: string;
		message?: string;
		subject?: string;
		lastName?: string;
		firstName?: string;
		updatedDate?: Date;
		phoneNumber?: number;
		imagesDirUrl?: string;
		selectedServices?: string;
		themesOptionsContent?: IThemesOptionsContent;
	};
	export type IMain = {
		padding: string;
		fontFamily: string;
		backgroundColor: string;
	};
	export type IIntroParagraph = {
		lineHeight: number;
		fontSize: number;
		fontWeight: string;
		padding: string;
		paddingTop: string;
	};
	export type IDetailsParagraph = {
		lineHeight: number;
		fontSize: number;
		fontWeight: string;
		padding: string;
	};
	export type IParagraph = {
		lineHeight: number;
		fontSize: number;
		fontWeight: string;
		padding: string;
	};
	export type IContainer = {
		maxWidth: string;
		margin: string;
		marginBottom: string;
		backgroundColor: string;
	};
	export type IContent = {
		padding: string;
	};
	export type IImageSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type ILink = {
		color: string;
		textDecoration: string;
	};
	export type ILogo = {
		width: string;
		height: string;
		minHeight: string;
	};
	export type IFooter = {
		maxWidth: string;
		margin: string;
		marginBottom: string;
		backgroundColor: string;
	};
	export type IFooterLogoSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type IFooterLogo = {
		width: string;
		height: string;
	};
}
