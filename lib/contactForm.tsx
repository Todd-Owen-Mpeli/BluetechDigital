export const sendContactForm = async (data: any) => {
	fetch("/api/email", {
		method: "POST",
		body: JSON.stringify(data),
	}).then((res) => {
		if (!res.ok) throw new Error("Failed to send message");
		return res.json();
	});
};
