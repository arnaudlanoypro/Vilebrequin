import ColorsComponent from './Colors'
import colors from '../../overrides/app/theme/foundations/colors'

export default {
    title: 'Atoms/Colors',
    component: ColorsComponent,
    parameters: {
        layout: 'centered'
    }
}

export const Colors = {
    args: {
        colors
    }
}
