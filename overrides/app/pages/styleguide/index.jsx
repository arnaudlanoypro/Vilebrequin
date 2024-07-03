import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useIntl, FormattedMessage} from 'react-intl'
import {
    Box,
    Container,
    Stack,
    Heading,
    SimpleGrid,
    Flex,
    Text,
    Grid,
    GridItem,
    Spacer
} from '@salesforce/retail-react-app/app/components/shared/ui'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    Checkbox,
    RadioGroup,
    Radio,
    Tooltip,
    Button,
    Select,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from '@chakra-ui/react'
import {MinusIcon, AddIcon} from '@chakra-ui/icons'
import {VisibilityIcon, VisibilityOffIcon} from '@salesforce/retail-react-app/app/components/icons'

import {CustomIcon} from '../../components/custom-icons/index'
import {ResponsivePicture} from '../../components/responsive-picture/index'
import Link from '@salesforce/retail-react-app/app/components/link'

// Hook form import
import {useForm} from 'react-hook-form'

import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'

const Styleguide = () => {
    const intl = useIntl()
    // React hook form setup
    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting}
    } = useForm()

    const [hidePassword, setHidePassword] = useState(true)
    const PasswordIcon = hidePassword ? VisibilityIcon : VisibilityOffIcon
    const type = 'password'
    const inputType =
        type === 'password' && hidePassword ? 'password' : type === 'password' ? 'text' : type

    const [checkboxOneState, setCheckboxOneState] = useState(true)
    const [checkboxTwoState, setCheckboxTwoState] = useState(false)

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }

    const CustomAccordionIcon = ({isExpanded}) => {
        return isExpanded ? <MinusIcon w={'10px'} h={'10px'} /> : <AddIcon w={'10px'} h={'10px'} />
    }

    return (
        <Box data-testid="styleguide-page" bg={'gray.50'} py={[8, 16]}>
            <Heading as="h1" align="center" fontSize="38px" mb="30px">
                Styleguide
            </Heading>

            <Container width={['100%']} bg="white" paddingBottom={14}>
                {/* Typography */}
                <Heading fontSize="24px">Typography</Heading>
                <Divider my="15px" />
                <Heading as="h1" fontSize="6xl">
                    {intl.formatMessage({
                        defaultMessage: 'THIS IS A H1 HEADLINE',
                        id: 'typoex.h1'
                    })}
                </Heading>
                <Heading as="h2" fontSize="5xl">
                    {intl.formatMessage({
                        defaultMessage: 'THIS IS A H2 HEADLINE',
                        id: 'typoex.h2'
                    })}
                </Heading>
                <Heading as="h3" fontSize="4xl">
                    {intl.formatMessage({
                        defaultMessage: 'THIS IS A H3 HEADLINE',
                        id: 'typoex.h3'
                    })}
                </Heading>
                <Heading as="h4" fontSize="3xl">
                    {intl.formatMessage({
                        defaultMessage: 'THIS IS A H4 HEADLINE',
                        id: 'typoex.h4'
                    })}
                </Heading>
                <Heading as="h5" fontSize="2xl">
                    {intl.formatMessage({
                        defaultMessage: 'THIS IS A H5 HEADLINE',
                        id: 'typoex.h5'
                    })}
                </Heading>
                <Heading as="h6" fontSize="xl">
                    {intl.formatMessage({
                        defaultMessage: 'THIS IS A H6 HEADLINE',
                        id: 'typoex.h6'
                    })}
                </Heading>
                {/* Fonts */}
                <Heading fontSize="24px" mt="50px">
                    Fonts
                </Heading>
                <Divider my="15px" />
                TO BE ADDED
                {/* Color palette */}
                <Heading fontSize="24px" mt="50px">
                    Color palette
                </Heading>
                <Divider my="15px" />
                TO BE ADDED
                {/* Icons */}
                <Heading fontSize="24px" mt="50px">
                    Icons
                </Heading>
                <Divider my="15px" />
                <CustomIcon
                    boxSize="50px"
                    color="blue"
                    aria-label={intl.formatMessage({
                        defaultMessage: 'Aria label for custom icon',
                        id: 'aria.label.customicon'
                    })}
                    aria-describedby={intl.formatMessage({
                        defaultMessage: 'Describe by for custom icon',
                        id: 'describeby.customicon'
                    })}
                    aria-hidden="false"
                />
                <CustomIcon svgTitle="overwrite custom title" />
                {/* Button */}
                <Heading fontSize="24px" mt="50px">
                    Button
                </Heading>
                <Divider my="15px" />
                <Flex alignItems="center" justify="center">
                    <Button type="submit" variant={'basic'} align="center" maxWidth="300px">
                        Click me to submit
                    </Button>

                    <Spacer />

                    <Button
                        type="submit"
                        variant={'basic'}
                        align="center"
                        maxWidth="300px"
                        isDisabled
                    >
                        Click me to submit
                    </Button>

                    <Spacer />

                    <Button type="submit" align="center" maxWidth="300px">
                        Click me to submit
                    </Button>
                </Flex>
                {/* Link */}
                <Heading fontSize="24px" mt="50px">
                    Link
                </Heading>
                <Divider my="15px" />
                <Link to={'/login'}>
                    <FormattedMessage
                        defaultMessage="Click here to login!"
                        id="test.link.clickherenow"
                    />
                </Link>
                {/* Toast */}
                <Heading fontSize="24px" mt="50px">
                    Toast
                </Heading>
                <Divider my="15px" />
                TO BE ADDED
                {/* Responsive Picture */}
                <Heading fontSize="24px" mt="50px">
                    Responsive Picture
                </Heading>
                <Divider my="15px" />
                <ResponsivePicture
                    src={{
                        sm: getAssetUrl('static/img/hero-sm.png'),
                        md: getAssetUrl('static/img/hero-md.png'),
                        lg: getAssetUrl('static/img/hero-lg.png'),
                        sm2x: getAssetUrl('static/img/hero-sm2x.png'),
                        md2x: getAssetUrl('static/img/hero-md2x.png'),
                        lg2x: getAssetUrl('static/img/hero-lg2x.png')
                    }}
                    loading={'auto'}
                    fetchpriority={'high'}
                    ratio={{sm: 390 / 416, md: 16 / 9, lg: 1512 / 455}}
                    alt="Banner image"
                    width={'100%'}
                    height={'auto'}
                />
                {/* Modal */}
                <Heading fontSize="24px" mt="50px">
                    Modal
                </Heading>
                <Divider my="15px" />
                TO BE ADDED
                {/* Accordion */}
                <Heading fontSize="24px" mt="50px">
                    Accordion
                </Heading>
                <Divider my="15px" />
                <Stack direction="row" spacing={[0, 0, 0, 16]}>
                    <Accordion allowMultiple maxWidth={'896px'} flex={[1, 1, 1, 5]}>
                        <AccordionItem>
                            {({isExpanded}) => (
                                <>
                                    <Heading as="h2">
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Accordion Item One - Title
                                            </Box>
                                            <CustomAccordionIcon isExpanded={isExpanded} />
                                        </AccordionButton>
                                    </Heading>
                                    <AccordionPanel>
                                        <div>
                                            Accordion Item One - Description. Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem>
                            {({isExpanded}) => (
                                <>
                                    <Heading as="h2">
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Accordion Item Two - Title
                                            </Box>
                                            <CustomAccordionIcon isExpanded={isExpanded} />
                                        </AccordionButton>
                                    </Heading>
                                    <AccordionPanel>
                                        <div>
                                            Accordion Item Two - Description. Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem>
                            {({isExpanded}) => (
                                <>
                                    <Heading as="h2">
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Accordion Item Three - Title
                                            </Box>
                                            <CustomAccordionIcon isExpanded={isExpanded} />
                                        </AccordionButton>
                                    </Heading>
                                    <AccordionPanel>
                                        <div>
                                            Accordion Item Three - Description. Lorem ipsum dolor
                                            sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>
                    <Box display={['none', 'none', 'none', 'block']} flex={4}></Box>
                </Stack>
                {/* Tooltip */}
                <Heading fontSize="24px" mt="50px">
                    Tooltip
                </Heading>
                <Divider my="15px" />
                <SimpleGrid columns={{sm: 2, md: 4}} spacing={10} mb="30px">
                    <Tooltip hasArrow label="Here is the tooltip text info - placement bottom">
                        <Button type="button" variant={'basic'} maxWidth="300px">
                            Hover me!
                        </Button>
                    </Tooltip>

                    <Tooltip
                        hasArrow={true}
                        label="Here is the tooltip text info - placement bottom"
                        placement="top"
                    >
                        <Button type="button" variant={'basic'} maxWidth="300px">
                            Hover me!
                        </Button>
                    </Tooltip>

                    <Tooltip
                        hasArrow
                        label="Here is the tooltip text info - placement left"
                        placement="left"
                    >
                        <Button type="button" variant={'basic'} maxWidth="300px">
                            Hover me!
                        </Button>
                    </Tooltip>

                    <Tooltip
                        hasArrow
                        label="Here is the tooltip text info - placement right"
                        placement="right"
                    >
                        <Button type="button" variant={'basic'} maxWidth="300px">
                            Hover me!
                        </Button>
                    </Tooltip>
                </SimpleGrid>
                {/* Forms */}
                <Heading fontSize="24px" mt="50px">
                    Forms
                </Heading>
                <Divider my="15px" />
                <form
                    id="styleguide-form"
                    data-testid="sf-check-styleguide-form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <Heading fontSize="18px" mb="15px">
                        Inputs
                    </Heading>

                    <SimpleGrid columns={{sm: 1, md: 2}} spacing={10} mb="30px">
                        <FormControl variant="floating" isInvalid={errors.inputOne} isRequired>
                            <Input
                                id="inputOne"
                                name="inputOne"
                                variant="basic"
                                placeholder=""
                                maxLength={9}
                                {...register('inputOne', {
                                    required: 'This field is required',
                                    minLength: {
                                        value: 9,
                                        message: 'Minimum length should be 9'
                                    },
                                    maxLength: {
                                        value: 9,
                                        message: 'Maximum length should be 9'
                                    }
                                })}
                            />
                            <FormLabel htmlFor="inputOne">Input one</FormLabel>
                            <FormErrorMessage>
                                {errors.inputOne && errors.inputOne.message}
                            </FormErrorMessage>
                            <FormHelperText>Required input, no prefilled value</FormHelperText>
                        </FormControl>

                        <FormControl variant="floating" isInvalid={errors.inputTwo} isRequired>
                            <Input
                                id="inputTwo"
                                name="inputTwo"
                                variant="basic"
                                placeholder=""
                                defaultValue="Field"
                                maxLength={9}
                                {...register('inputTwo', {
                                    required: 'This field is required',
                                    minLength: {
                                        value: 9,
                                        message: 'Minimum length should be 9'
                                    },
                                    maxLength: {
                                        value: 9,
                                        message: 'Maximum length should be 9'
                                    }
                                })}
                            />
                            <FormLabel htmlFor="inputTwo">Input Two</FormLabel>
                            <FormErrorMessage>
                                {errors.inputTwo && errors.inputTwo.message}
                            </FormErrorMessage>
                            <FormHelperText>Required input, with prefilled value</FormHelperText>
                        </FormControl>

                        <FormControl variant="floating">
                            <Input
                                id="inputThree"
                                name="inputThree"
                                variant="basic"
                                placeholder=""
                            />
                            <FormLabel htmlFor="inputThree">Input three</FormLabel>
                            <FormHelperText>
                                Default input, not required, not disabled, no validation, no
                                predefined value
                            </FormHelperText>
                        </FormControl>

                        <FormControl variant="floating">
                            <Input
                                id="inputFour"
                                name="inputFour"
                                variant="basic"
                                placeholder=""
                                defaultValue="Input three value"
                            />
                            <FormLabel htmlFor="inputFour">Input four</FormLabel>
                            <FormHelperText>
                                Default input, not required, not disabled, no validation, predefined
                                value
                            </FormHelperText>
                        </FormControl>

                        <FormControl variant="floating" isDisabled>
                            <Input id="inputFive" name="inputFive" variant="basic" placeholder="" />
                            <FormLabel htmlFor="inputFive">Input five</FormLabel>
                            <FormHelperText>
                                Default input, not required, disabled, no validation, no predefined
                                value
                            </FormHelperText>
                        </FormControl>

                        <FormControl variant="floating" isDisabled>
                            <Input
                                id="inputSix"
                                name="inputSix"
                                variant="basic"
                                placeholder=""
                                defaultValue="Input six value"
                            />
                            <FormLabel htmlFor="inputSix">Input six</FormLabel>
                            <FormHelperText>
                                Default input, not required, disabled, no validation, with
                                predefined value
                            </FormHelperText>
                        </FormControl>
                    </SimpleGrid>

                    <Heading fontSize="18px" mb="15px">
                        Inputs - password
                    </Heading>

                    <SimpleGrid columns={{sm: 1, md: 2}} spacing={10} mb="30px">
                        <FormControl variant="floating" isInvalid={errors.inputOne} isRequired>
                            <InputGroup>
                                <Input
                                    id="inputPasswordOne"
                                    name="inputPasswordOne"
                                    variant="basic"
                                    placeholder=""
                                    type={inputType}
                                    {...register('inputPasswordOne', {
                                        required: 'This field is required'
                                    })}
                                />
                                <InputRightElement>
                                    <IconButton
                                        variant="basiced"
                                        icon={<PasswordIcon color="fullBlack" boxSize={6} />}
                                        onClick={() => setHidePassword(!hidePassword)}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            <FormLabel htmlFor="inputPasswordOne">Input password one</FormLabel>
                            <FormErrorMessage>
                                {errors.inputPasswordOne && errors.inputPasswordOne.message}
                            </FormErrorMessage>
                            <FormHelperText>Required input, no prefilled value</FormHelperText>
                        </FormControl>
                    </SimpleGrid>

                    <Heading fontSize="18px" mb="15px">
                        Selects
                    </Heading>

                    <SimpleGrid columns={{sm: 1, md: 2}} spacing={10} mb="30px">
                        <FormControl variant="floating" isInvalid={errors.selectOne} isRequired>
                            <Select
                                id="selectOne"
                                name="selectOne"
                                placeholder=""
                                variant="basic"
                                {...register('selectOne', {
                                    required: 'Choose one of the options'
                                })}
                            >
                                <option value="">Select an option...</option>
                                <option value="fr">France</option>
                                <option value="usa">United States of America</option>
                                <option value="gb">United Kingdom</option>
                            </Select>
                            <FormLabel htmlFor="selectOne">Select one</FormLabel>
                            <FormErrorMessage>
                                {errors.selectOne && errors.selectOne.message}
                            </FormErrorMessage>
                            <FormHelperText>
                                Default select, empty value for first option, requierd, with
                                validation
                            </FormHelperText>
                        </FormControl>

                        <FormControl variant="floating" isRequired>
                            <Select id="selectTwo" name="selectTwo" placeholder="" variant="basic">
                                <option value="fr">France</option>
                                <option value="usa">United States of America</option>
                                <option value="gb">United Kingdom</option>
                            </Select>
                            <FormLabel htmlFor="selectTwo">Select two</FormLabel>
                            <FormHelperText>
                                Default select, no empty value for first option, no validation
                            </FormHelperText>
                        </FormControl>

                        <FormControl variant="floating" isRequired isDisabled>
                            <Select
                                id="selectThree"
                                name="selectThree"
                                placeholder=""
                                variant="basic"
                            >
                                <option value="fr">France</option>
                                <option value="usa">United States of America</option>
                                <option value="gb">United Kingdom</option>
                            </Select>
                            <FormLabel htmlFor="selectThree">Select three</FormLabel>
                            <FormHelperText>
                                Default select, no empty value for first option, no validation,
                                disabled
                            </FormHelperText>
                        </FormControl>

                        <FormControl
                            variant="floating"
                            isInvalid={errors.selectFour}
                            isRequired
                            isDisabled
                        >
                            <Select
                                id="selectFour"
                                name="selectFour"
                                placeholder=""
                                variant="basic"
                                {...register('selectFour', {
                                    required:
                                        'Change selection in other form elements to enable this select'
                                })}
                            >
                                <option value="fr">France</option>
                                <option value="usa">United States of America</option>
                                <option value="gb">United Kingdom</option>
                            </Select>
                            <FormLabel htmlFor="selectFour">Select four</FormLabel>
                            <FormErrorMessage>
                                {errors.selectFour && errors.selectFour.message}
                            </FormErrorMessage>
                            <FormHelperText>
                                Default select, no empty value for first option, validation,
                                disabled
                            </FormHelperText>
                        </FormControl>

                        <FormControl
                            variant="floating"
                            isInvalid={errors.selectFive}
                            isRequired
                            isDisabled
                        >
                            <Select
                                id="selectFive"
                                name="selectFive"
                                placeholder=""
                                variant="basic"
                                {...register('selectFive', {
                                    required: 'Choose one of the options'
                                })}
                            >
                                <option value="">Select an option...</option>
                                <option value="fr">France</option>
                                <option value="usa">United States of America</option>
                                <option value="gb">United Kingdom</option>
                            </Select>
                            <FormLabel htmlFor="selectFive">Select five</FormLabel>
                            <FormErrorMessage>
                                {errors.selectFive && errors.selectFive.message}
                            </FormErrorMessage>
                            <FormHelperText>
                                Default select, empty value for first option, validation, disabled
                            </FormHelperText>
                        </FormControl>
                    </SimpleGrid>

                    <Heading fontSize="18px" mb="15px">
                        Checkboxes
                    </Heading>

                    <SimpleGrid columns={{sm: 1, md: 2}} spacing={10} mb="30px">
                        <Checkbox
                            name="checkboxOne"
                            isChecked={checkboxOneState}
                            onChange={(e) => setCheckboxOneState(e.target.checked)}
                        >
                            Checkbox one related text, enabled, checked by default
                        </Checkbox>

                        <Checkbox
                            name="checkboxTwo"
                            isRequired
                            isChecked={checkboxTwoState}
                            onChange={(e) => setCheckboxTwoState(e.target.checked)}
                        >
                            Checkbox two related text, enabled, unchecked by default
                        </Checkbox>

                        <Checkbox name="checkboxThree" isDisabled isChecked={false}>
                            Checkbox three related text, disabled, unchecked
                        </Checkbox>

                        <Checkbox name="checkboxFour" isDisabled isChecked={true}>
                            Checkbox four related text, disabled, checked
                        </Checkbox>
                    </SimpleGrid>

                    <Heading fontSize="18px" mb="15px">
                        Radios
                    </Heading>

                    <SimpleGrid columns={{sm: 1}} spacing={10} mb="30px">
                        <RadioGroup name="radio-one" defaultValue="1">
                            <Grid
                                templateColumns={{sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}
                                gap={6}
                            >
                                <GridItem>
                                    <Radio value="1" isDisabled>
                                        Multiple radio - input 1 - disabled by default
                                    </Radio>
                                </GridItem>
                                <GridItem>
                                    <Radio value="2">Multiple radio - input 2</Radio>
                                </GridItem>
                                <GridItem>
                                    <Radio value="3">Multiple radio - input 3</Radio>
                                </GridItem>
                            </Grid>
                        </RadioGroup>

                        <RadioGroup name="radio-two">
                            <Grid
                                templateColumns={{sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}
                                gap={6}
                            >
                                <GridItem>
                                    <Radio value="1">Multiple radio - input 1</Radio>
                                </GridItem>
                                <GridItem>
                                    <Radio value="2" isDisabled>
                                        Multiple radio - input 2
                                    </Radio>
                                </GridItem>
                                <GridItem>
                                    <Radio value="3">Multiple radio - input 3</Radio>
                                </GridItem>
                            </Grid>
                        </RadioGroup>
                    </SimpleGrid>

                    <Flex alignItems="center" justify="center">
                        <Button
                            type="submit"
                            isLoading={isSubmitting}
                            variant={'basic'}
                            align="center"
                            maxWidth="300px"
                        >
                            Click me to submit
                        </Button>
                    </Flex>
                </form>
            </Container>
        </Box>
    )
}

Styleguide.getTemplateName = () => 'styleguide'
Styleguide.propTypes = {
    match: PropTypes.object
}

export default Styleguide
