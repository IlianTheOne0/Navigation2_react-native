import { Css } from "../../utils/Css";

Css.create
(
	{
		container:
		{
			width: '100%',
			height: '100%',

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
			justifyContent: 'center',
			alignItems: 'center',

			width: '90%',
			marginBottom: 24,
		},
		layout__scrollView:
		{
			width: '100%',
			height: '100%'
		},
		scrollView_content:
		{	
			justifyContent: 'center',
			alignItems: 'center',

			paddingBottom: 60,
		},
		block__heading:
		{
			marginBottom: 8,

			color: '#cccf',

			fontSize: 24,
			fontWeight: 'bold',
		},
		block__sub_heading:
		{	
			color: '#8a8a8aff',
			
			fontSize: 16
		}
	}
);