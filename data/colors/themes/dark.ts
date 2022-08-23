import {merge} from '../../../src/utils'
import darkComponentVars from '../vars/component_dark'
import darkDeprecatedVars from '../vars/deprecated_dark'
import darkGlobalVars from '../vars/global_dark'
import darkMarketingVars from '../vars/marketing_dark'
import darkAppVars from '../vars/app_dark'

const scale = {
  black: '#25283d',
  white: '#ffffff',
  gray: ['#E7E7E9', '#DBDBDE', '#C4C4C8', '#ACACB1', '#94949B', '#7C7C85', '#4D4D59', '#353542', '#1D1D2C', '#111121'],
  blue: ['#A1BCDB', '#91B1D5', '#81A6CF', '#729BC9', '#6290C3', '#5D89B9', '#537AA6', '#4A6C92', '#405E7F', '#364F6B'],
  green: ['#95D1B6', '#84C9AA', '#72C19E', '#61BA92', '#4fb286', '#4BA97F', '#439772', '#3B8665', '#337457', '#2B624A'],
  yellow: [
    '#f8e3a1',
    '#f2cc60',
    '#e3b341',
    '#d29922',
    '#bb8009',
    '#9e6a03',
    '#845306',
    '#693e00',
    '#4b2900',
    '#341a00'
  ],
  orange: [
    '#FFB870',
    '#FFAC58',
    '#FFA041',
    '#FF9429',
    '#ff8811',
    '#F28110',
    '#D9740E',
    '#BF660D',
    '#A6580B',
    '#8C4B09'
  ],
  red: ['#ffdcd7', '#ffc1ba', '#ffa198', '#ff7b72', '#f85149', '#da3633', '#b62324', '#8e1519', '#67060c', '#490202'],
  purple: [
    '#9789AC',
    '#85769E',
    '#746291',
    '#624F83',
    '#513B75',
    '#4D386F',
    '#453263',
    '#3D2C58',
    '#35264C',
    '#2D2040'
  ],
  pink: ['#D1BDD1', '#C9B2CA', '#C1A7C2', '#BA9CBB', '#b291b3', '#A98AAA', '#977B98', '#866D86', '#745E74', '#625062'],
  coral: ['#ffddd2', '#ffc2b2', '#ffa28b', '#f78166', '#ea6045', '#cf462d', '#ac3220', '#872012', '#640d04', '#460701']
}

// const exceptions = {
//   Please avoid adding exceptions to this base theme.
//   Otherwise the exceptions will also propagate to all other extended themes.
// }

export default merge(darkDeprecatedVars, darkAppVars, darkMarketingVars, darkComponentVars, darkGlobalVars, {scale})
