import { Css } from "../../utils/Css";

Css.create
(
	{
		container:
		{
			width: '100%',
			height: '100%',

			justifyContent: 'center',
			alignItems: 'center',
			
			marginTop: 64,

			backgroundColor: '#000'
		},

		layout:
		{
			width: '100%',

			flex: 1
		},
		layout__block:
		{
			alignItems: 'center',
			marginBottom: 16
		},
		heading:
		{
			marginBottom: 8,

			color: '#ccccccff',

			fontSize: 24,
			fontWeight: 'bold',
		},
		subheading:
		{
			color: '#727272ff',

			fontSize: 16
		}
	}
);