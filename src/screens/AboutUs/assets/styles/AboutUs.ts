import { Css } from "../../../../utils/Css";

Css.create
(
	{
		about__textContainer:
		{
			width: '90%',

			marginBottom: 24,
			padding: 16,
			
			backgroundColor: '#1e1e1e',
			
			borderRadius: 12
		},
		about__text:
		{
			color: '#ccc',
			
			textAlign: 'center',

			fontSize: 16,
			lineHeight: 24
		},
		carousel__slide:
		{
			justifyContent: 'flex-start',
			alignItems: 'center',
			
			paddingHorizontal: 10
		},
		carousel__image:
		{
			width: 80,
			height: 80,

			marginBottom: 16
		},
		carousel__content:
		{
			width: 340,
			height: 150,
		
			alignItems: 'center',
		
			padding: 20,
		
			backgroundColor: '#1e1e1e',
			
			borderRadius: 16
		},
		carousel__title:
		{
			marginBottom: 8,
			
			color: '#fff',
			
			fontSize: 18,
			fontWeight: 'bold'
		},
		carousel__description:
		{
			textAlign: 'center',
			
			color: '#aaa',

			fontSize: 14,
			lineHeight: 20
		},
		pagination__container:
		{
			width: '100%',
			
			flexDirection: 'row',
			justifyContent: 'center',

			marginTop: 16
		},
		pagination__dot:
		{
			width: 12,
			height: 12,

			marginHorizontal: 4
		}
	}
);