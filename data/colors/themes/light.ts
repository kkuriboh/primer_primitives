import { merge } from '../../../src/utils'
import lightComponentVars from '../vars/component_light'
import lightDeprecatedVars from '../vars/deprecated_light'
import lightGlobalVars from '../vars/global_light'
import lightMarketingVars from '../vars/marketing_light'
import lightAppVars from '../vars/app_light'

const scale = {
	black: '#25283d',
	white: '#F5F5F5',
	gray: [
		'#CBCCD9',
		'#C3C4D2',
		'#BFBFCF',
		'#B6B7C9',
		'#A9AABF',
		'#53636B',
		'#4A5860',
		'#414E55',
		'#394449',
		'#30393E',
	],
	/*gray: [
		'#F2F2F7',
		'#E4E5EE',
		'#D7D8E6',
		'#C9CBDD',
		'#BCBFD5',
		'#AFB2CD',
		'#A1A5C4',
		'#9498BC',
		'#868BB3',
		'#797EAB',
	],*/
	blue: [
		'#7A89AB',
		'#66779E',
		'#526591',
		'#3D5384',
		'#334a7d',
		'#304677',
		'#2B3F6A',
		'#26385E',
		'#213051',
		'#1C2945',
	],
	green: [
		'#95D1B6',
		'#84C9AA',
		'#72C19E',
		'#61BA92',
		'#4fb286',
		'#4BA97F',
		'#439772',
		'#3B8665',
		'#337457',
		'#2B624A',
	],
	// green: ['#dafbe1', '#aceebb', '#6fdd8b', '#4ac26b', '#2da44e', '#1a7f37', '#116329', '#044f1e', '#003d16', '#002d11'],
	yellow: [
		'#fff8c5',
		'#fae17d',
		'#eac54f',
		'#d4a72c',
		'#bf8700',
		'#9a6700',
		'#7d4e00',
		'#633c01',
		'#4d2d00',
		'#3b2300',
	],
	orange: [
		'#fff1e5',
		'#ffd8b5',
		'#ffb77c',
		'#fb8f44',
		'#e16f24',
		'#bc4c00',
		'#953800',
		'#762c00',
		'#5c2200',
		'#471700',
	],
	red: [
		'#ffebe9',
		'#ffcecb',
		'#ffaba8',
		'#ff8182',
		'#fa4549',
		'#cf222e',
		'#a40e26',
		'#82071e',
		'#660018',
		'#4c0014',
	],
	purple: [
		'#fbefff',
		'#ecd8ff',
		'#d8b9ff',
		'#c297ff',
		'#a475f9',
		'#8250df',
		'#6639ba',
		'#512a97',
		'#3e1f79',
		'#2e1461',
	],
	pink: [
		'#FAF4F9',
		'#F5E8F3',
		'#F0DDED',
		'#EBD1E7',
		'#E7C6E2',
		'#E2BBDC',
		'#DDAFD6',
		'#D8A4D0',
		'#D398CA',
		'#CE8DC4',
	],
	coral: [
		'#F8F2F2',
		'#F1E4E5',
		'#EAD7D9',
		'#E3C9CC',
		'#DCBCBF',
		'#D4AEB2',
		'#CDA1A5',
		'#C69399',
		'#BF868C',
		'#B8787F',
	],
	// pink: ['#ffeff7', '#ffd3eb', '#ffadda', '#ff80c8', '#e85aad', '#bf3989', '#99286e', '#772057', '#611347', '#4d0336'],
	// coral: ['#fff0eb', '#ffd6cc', '#ffb4a1', '#fd8c73', '#ec6547', '#c4432b', '#9e2f1c', '#801f0f', '#691105', '#510901']
}

// const exceptions = {
//   Please avoid adding exceptions to this base theme.
//   Otherwise the exceptions will also propagate to all other extended themes.
// }

export default merge(
	lightDeprecatedVars,
	lightAppVars,
	lightMarketingVars,
	lightComponentVars,
	lightGlobalVars,
	{
		scale,
	}
)
