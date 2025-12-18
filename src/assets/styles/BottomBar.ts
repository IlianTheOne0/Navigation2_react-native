import { Css } from "../../utils/Css";

Css.create
(
	{
		bottomBar:
		{
			width: '100%',
			height: 80,

			flexDirection: 'row',
			justifyContent: 'space-around',
			alignItems: 'center',
			
			paddingBottom: 10,
			
			backgroundColor: '#1e1e1e',
			borderTopColor: '#333',
			
			borderTopWidth: 1
		},
		bottomBar__tab:
		{
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			padding: 10
		},
		bottomBar__text:
		{
			marginTop: 4,

			fontSize: 12,
			fontWeight: '600'
		},
		bottomBar__icon:
		{
			width: 24,
			height: 24
		}
	}
);