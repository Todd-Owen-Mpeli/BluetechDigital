import {render} from "@react-email/components";
import {emailTransporter} from "@/config/nodemailer";
// Types
import {IBusinessEmail, ICustomerEmail} from "@/types/email";
import {getThemesOptionsContent} from "@/graphql/GetAllThemesOptions";

// Components
import CustomerEnquiryConfirmationEmail from "@/components/Emails/CustomerEnquiryConfirmationEmail";
import BusinessCustomerEnquiryConfirmationEmail from "@/components/Emails/BusinessCustomerEnquiryConfirmationEmail";

export async function POST(req: Request, res: Response) {
	const data = await req.json();

	// If any of these values are undefined
	if (
		!data?.email ||
		!data?.message ||
		!data?.subject ||
		!data?.lastName ||
		!data?.firstName ||
		!data?.phoneNumber ||
		!data?.selectedServices
	) {
		console.log("Missing Data Fields. Please try again.");
	}

	try {
		const imagesDirUrl: any = process.env.IMAGE_DIR_URL;
		const themesOptionsContent: any = await getThemesOptionsContent();

		/* Render React Customer Enquiry
			Confirmation Email Component*/
		const customerEmailHtml: string = render(
			<CustomerEnquiryConfirmationEmail
				email={`${data?.email}`}
				imagesDirUrl={imagesDirUrl}
				subject={`${data?.subject}`}
				lastName={`${data?.lastName}`}
				phoneNumber={data?.phoneNumber}
				firstName={`${data?.firstName}`}
				themesOptionsContent={themesOptionsContent}
				selectedServices={`${data?.selectedServices}`}
			/>
		);

		/* Render React Business Customer
			Enquiry Confirmation Email Component*/
		const businessEmailHtml: string = render(
			<BusinessCustomerEnquiryConfirmationEmail
				email={`${data?.email}`}
				imagesDirUrl={imagesDirUrl}
				subject={`${data?.subject}`}
				message={`${data?.message}`}
				lastName={`${data?.lastName}`}
				phoneNumber={data?.phoneNumber}
				firstName={`${data?.firstName}`}
				themesOptionsContent={themesOptionsContent}
				selectedServices={`${data?.selectedServices}`}
			/>
		);

		/* Customer Enquiry Confirmation Email */
		const customerEmail: ICustomerEmail = {
			from: `${themesOptionsContent?.email}`,
			to: `${data?.email}`,
			subject: `Thank You for Contacting Bluetech Digital Ltd`,
			html: customerEmailHtml,
		};

		/* Business Customer Enquiry Confirmation Email */
		const businessEmail: IBusinessEmail = {
			from: `${themesOptionsContent?.email}`,
			to: `${themesOptionsContent?.email}`,
			subject: `New Website Inquiry: ${data?.subject}`,
			html: businessEmailHtml,
		};

		await emailTransporter.sendMail({...customerEmail});
		await emailTransporter.sendMail({...businessEmail});
	} catch (err) {
		console.log(err);
	}

	return Response.json({res});
}
