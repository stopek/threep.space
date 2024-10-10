import { Helmet as HelmetAsync } from "react-helmet-async";
import React, { ReactElement, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { helmetJsonLdProp } from "react-schemaorg";
import { Person } from "schema-dts";
import { useLocation } from "react-router-dom";

export interface IHelmet {
	disabled?: boolean;
	title: string | string[];
	bindings?: Record<string, ReactNode>;
	description?: string;
	type?: string;
	canonical?: string;
}

const Helmet = ({
	title,
	disabled,
	description,
	bindings,
	canonical,
	type = "article",
}: IHelmet): ReactElement | null => {
	const { t } = useTranslation();
	const location = useLocation();

	if (disabled) {
		return null;
	}

	const titleArray = typeof title === "string" ? [title] : title;

	function getText(htmlString?: string): string {
		return (
			htmlString
				?.replace(/<[^>]+>/g, " ")
				.trim()
				.replace(/\s{2,}/g, " ") || ""
		);
	}

	const outputTitle = getText(titleArray.map(item => t(item, bindings)).join(" · "));
	const outputDescription = getText(description ? t(description, bindings) : description);
	const outputCanonical = canonical || window.location.pathname;

	console.log({
		outputTitle,
		outputDescription,
		location,
		l: window.location,
	});

	// <meta name="author" content="Paweł Stopczyński" />
	// <meta name="copyright" content="Paweł Stopczyński - All Rights Reserved" />
	// <meta
	// 	name="description"
	// 	content="Hi! I’m Paweł, a fullstack developer based in Poland currently looking for a full-time remote job. Most of the projects in my portfolio are implemented end-to-end, but I also have experience working with international large teams."
	// />
	// <title>Paweł Stopczyński · Fullstack Developer</title>

	return (
		<HelmetAsync
			script={[
				helmetJsonLdProp<Person>({
					"@context": "https://schema.org",
					"@type": "Person",
					name: t("about.name"),
					alternateName: t("seo.portfolio.title"),
					jobTitle: t("about.role"),
					worksFor: {
						"@type": "Organization",
						name: t("about.company"),
					},
					url: "https://threep.space",
					sameAs: [
						"https://www.linkedin.com/in/threep",
						"https://github.com/stopek",
						"https://www.facebook.com/pawel.stopek",
					],
					email: "mailto:pawel@threep.space",
					address: {
						"@type": "PostalAddress",
						addressLocality: "Bydgoszcz",
						addressCountry: "PL",
					},
				}),
			]}
			encodeSpecialCharacters
			prioritizeSeoTags
		>
			<title>{outputTitle}</title>
			<meta name="description" content={outputDescription} />
			<link rel="canonical" href={window.location.origin + outputCanonical} />

			<meta property="og:type" content={type} />
			<meta property="og:title" content={outputTitle} />
			<meta property="og:description" content={outputDescription} />

			<meta name="twitter:creator" content={t("about.name")} />
			<meta name="twitter:card" content={type} />
			<meta name="twitter:title" content={outputTitle} />
			<meta name="twitter:description" content={outputDescription} />
		</HelmetAsync>
	);
};

export default Helmet;
