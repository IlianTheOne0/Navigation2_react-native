import { Css } from "../../../../utils/Css";

Css.create
(
	{
		contacts__section:
		{
			width: '90%',

			alignItems: 'center',
			
			marginBottom: 24
		},
		contacts__row:
		{
			width: '100%',

			flexDirection: 'row',
			alignItems: 'center',
			
			marginBottom: 12,
			padding: 16,
			
			backgroundColor: '#1e1e1e',
			
			borderRadius: 12

		},
		contacts__icon:
		{
			width: 32,
			height: 32,

			marginRight: 16
		},
		contacts__text:
		{
			color: '#fff',

			fontSize: 18,
			fontWeight: '500'
		},
		contacts__socials:
		{
			flexDirection: 'row',
			justifyContent: 'center',
			gap: 24
		},
		contacts__socialIcon:
		{
			width: 48,
			height: 48,

			marginHorizontal: 12
		},
		address__header:
		{
			width: '100%',
		
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		
			backgroundColor: '#2a2a2a',
		
			padding: 16,
		
			borderRadius: 12
		},
		address__headerText:
		{
			color: '#fff',
			fontSize: 16,
			fontWeight: 'bold'
		},
		address__arrow:
		{
			width: 20,
			height: 20,
		
			tintColor: '#aaa'
		},
		address__details:
		{
			width: '100%',
		
			marginTop: 8,
			padding: 16,
		
			backgroundColor: '#1e1e1e',
		
			borderRadius: 12
		},
		address__detailText:
		{
			marginBottom: 6,

			color: '#ccc',
			
			fontSize: 14
		}
	}
);