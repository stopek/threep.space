import { Helmet as HelmetAsync } from "react-helmet-async";
import React, { ReactElement, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { helmetJsonLdProp } from "react-schemaorg";
import { Person } from "schema-dts";

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
