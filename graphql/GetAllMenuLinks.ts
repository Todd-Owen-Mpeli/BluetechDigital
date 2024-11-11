import {gql} from "@apollo/client";
import {client} from "@/config/apollo";
import {ILinks} from "@/types/context";

// Navbar Menu Links
export const getNavbarMenuLinks =
	async (): Promise<ILinks.INavbarMenuLinks> => {
		try {
			const content: any = gql`
				{
					navbarMenuLinks: menuItems(where: {location: PRIMARY}) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.navbarMenuLinks?.edges;
		} catch (error) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch main menu links content"
			);
		}
	};

// Mobile Navbar links
export const getMobileLinks = async (): Promise<ILinks.IMobileLinks> => {
	try {
		const content: any = gql`
			{
				mobileLinks: menuItems(where: {location: MOBILE_LINKS}, first: 10) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.mobileLinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch mobile links content"
		);
	}
};

// Navbar Our Services Sublinks
export const getOurServicesSublinks =
	async (): Promise<ILinks.IOurServicesLinks> => {
		try {
			const content: any = gql`
				{
					ourServicesSublinks: menuItems(
						where: {location: OUR_SERVICES}
						first: 10
					) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.ourServicesSublinks?.edges;
		} catch (error) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch our services sublinks content"
			);
		}
	};

// Footer Copyright Links
export const getCopyrightLinks = async (): Promise<ILinks.ICopyrightLinks> => {
	try {
		const content: any = gql`
			{
				copyrightLinks: menuItems(
					where: {location: COPYRIGHT_LINKS}
					first: 10
				) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.copyrightLinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch copyright links content"
		);
	}
};

// Footer Menu Links
export const getFooterMenuLinks =
	async (): Promise<ILinks.IFooterMenuLinks> => {
		try {
			const content: any = gql`
				{
					footerMenuLinks: menuItems(where: {location: FOOTER}) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.footerMenuLinks?.edges;
		} catch (error) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch footer menu links content"
			);
		}
	};
