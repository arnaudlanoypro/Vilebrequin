import {extendTheme} from '@chakra-ui/react'
import retailReactAppTheme from '@salesforce/retail-react-app/app/theme'

// Foundational style overrides
import breakpoints from '../theme/foundations/breakpoints'
import colors from '../theme/foundations/colors'
import styles from '../theme/foundations/styles'
import {fontSizes, fontWeights, lineHeights} from '../theme/foundations/typography'
import fonts from '../theme/foundations/fonts'
import space from '../theme/foundations/space'

// Base component style overrides
import Button from './components/base/button'
import Input from './components/base/input'
import Link from './components/base/link'
import Form from './components/base/form'
import Select from './components/base/select'
import Checkbox from './components/base/checkbox'
import Radio from './components/base/radio'
import FormError from './components/base/formError'
import Accordion from './components/base/accordion'
import Tooltip from './components/base/tooltip'
import Heading from './components/base/heading'
import Text from './components/base/text'
import Alert from './components/base/alert'

// Project Component style overrides
import Footer from './components/project/footer'

// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.
export const overrides = {
    ...retailReactAppTheme,

    // foundation styles
    breakpoints,
    colors,
    space,
    styles,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    components: {
        ...retailReactAppTheme.components,

        // base components
        Button,
        Input,
        Link,
        Form,
        Select,
        Checkbox,
        Radio,
        FormError,
        Accordion,
        Tooltip,
        Heading,
        Text,
        Alert,

        // project components
        Footer,
    }
}

export default extendTheme(overrides)
