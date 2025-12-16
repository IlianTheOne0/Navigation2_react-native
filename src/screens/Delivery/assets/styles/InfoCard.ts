import { Css } from "../../../../utils/Css";

Css.create
(
	{
		delivery__infoCard:
		{
			flexDirection: "row",
			alignItems: "center",
			
			padding: 16,
			marginBottom: 12,

			backgroundColor: "#1e1e1e",

			borderRadius: 16
		},
		infoCard__icon:
		{
			width: 48,
			height: 48,

			marginRight: 16,

			backgroundColor: "#000",

			borderRadius: 24
		},
		infoCard__textBlock:
		{
			flex: 1
		},
		infoCard__title:
		{
			marginBottom: 4,

			color: "#fff",

			fontSize: 16,
			fontWeight: "bold"
		},
		infoCard__description:
		{
			color: "#aaa",

			fontSize: 12,
			lineHeight: 18
		}
	}
);