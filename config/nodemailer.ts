// Imports
import nodemailer from "nodemailer";
import {IMailOptions} from "@/types/email";

const email: any = process.env.EMAIL_USER;
const pass: any = process.env.EMAIL_PASS;

export const transporter: any = nodemailer.createTransport({
	host: "gmail",
	service: "gmail",
	port: 587,
	secure: false,
	auth: {
		user: email,
		pass: pass,
	},
	tls: {rejectUnauthorized: false},
	logger: true,
	debug: true,
});

export const mailOptions: IMailOptions = {
	from: email,
	to: email,
};
