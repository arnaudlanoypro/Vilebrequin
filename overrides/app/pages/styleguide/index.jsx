import React, { useState } from 'react'
import PropTypes from 'prop-types'
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
} from '@chakra-ui/react'
import {
    VisibilityIcon,
    VisibilityOffIcon,
    LockIcon,
    PaypalIcon
} from '@salesforce/retail-react-app/app/components/icons'

// Hook form import
import {useForm} from 'react-hook-form'

const Styleguide = () => {
    // React hook form setup
    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting}
    } = useForm();

    const [hidePassword, setHidePassword] = useState(true);
    const PasswordIcon = hidePassword ? VisibilityIcon : VisibilityOffIcon;
    const type = "password";
    const inputType = type === 'password' && hidePassword ? 'password' : type === 'password' ? 'text' : type

    const [checkboxOneState, setCheckboxOneState] = useState(true);
    const [checkboxTwoState, setCheckboxTwoState] = useState(false);

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }

    return (
        <Box data-testid="styleguide-page" bg={'gray.50'} py={[8, 16]}>
            <Heading as="h1" align="center" fontSize="38px" mb="30px">
                Styleguide
            </Heading>

            <Container
                width={['100%']}
                bg="white"
                paddingBottom={14}
            >
                <Heading fontSize="24px">
                    Forms
                </Heading>

                <Divider my="15px"/>

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
                        <FormControl
                            variant="floating"
                            isInvalid={errors.inputOne}
                            isRequired
                        >
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

                        <FormControl
                            variant="floating"
                            isInvalid={errors.inputTwo}
                            isRequired
                        >
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

                        <FormControl
                            variant="floating"
                        >
                            <Input
                                id="inputThree"
                                name="inputThree"
                                variant="basic"
                                placeholder=""
                            />
                            <FormLabel htmlFor="inputThree">Input three</FormLabel>
                            <FormHelperText>Default input, not required, not disabled, no validation, no predefined value</FormHelperText>
                        </FormControl>

                        <FormControl
                            variant="floating"
                        >
                            <Input
                                id="inputFour"
                                name="inputFour"
                                variant="basic"
                                placeholder=""
                                defaultValue="Input three value"
                            />
                            <FormLabel htmlFor="inputFour">Input four</FormLabel>
                            <FormHelperText>Default input, not required, not disabled, no validation, predefined value</FormHelperText>
                        </FormControl>

                        <FormControl
                            variant="floating"
                            isDisabled
                        >
                            <Input
                                id="inputFive"
                                name="inputFive"
                                variant="basic"
                                placeholder=""
                            />
                            <FormLabel htmlFor="inputFive">Input five</FormLabel>
                            <FormHelperText>Default input, not required, disabled, no validation, no predefined value</FormHelperText>
                        </FormControl>

                        <FormControl
                            variant="floating"
                            isDisabled
                        >
                            <Input
                                id="inputSix"
                                name="inputSix"
                                variant="basic"
                                placeholder=""
                                defaultValue="Input six value"
                            />
                            <FormLabel htmlFor="inputSix">Input six</FormLabel>
                            <FormHelperText>Default input, not required, disabled, no validation, with predefined value</FormHelperText>
                        </FormControl>
                    </SimpleGrid>

                    <Heading fontSize="18px" mb="15px">
                        Inputs - password
                    </Heading>

                    <SimpleGrid columns={{sm: 1, md: 2}} spacing={10} mb="30px">
                        <FormControl
                            variant="floating"
                            isInvalid={errors.inputOne}
                            isRequired
                        >
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
                                        variant="ghosted"
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
                        <FormControl
                            variant="floating"
                            isInvalid={errors.selectOne}
                            isRequired
                        >
                            <Select
                                id="selectOne"
                                name="selectOne"
                                placeholder=""
                                variant="basic"
                                {...register("selectOne", {
                                    required: "Choose one of the options",
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
                            <FormHelperText>Default select, empty value for first option, requierd, with validation</FormHelperText>
                        </FormControl>

                        <FormControl
                            variant="floating"
                            isRequired
                        >
                            <Select
                                id="selectTwo"
                                name="selectTwo"
                                placeholder=""
                                variant="basic"
                            >
                                <option value="fr">France</option>
                                <option value="usa">United States of America</option>
                                <option value="gb">United Kingdom</option>
                            </Select>
                            <FormLabel htmlFor="selectTwo">Select two</FormLabel>
                            <FormHelperText>Default select, no empty value for first option, no validation</FormHelperText>
                        </FormControl>

                        <FormControl
                            variant="floating"
                            isRequired
                            isDisabled
                        >
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
                            <FormHelperText>Default select, no empty value for first option, no validation, disabled</FormHelperText>
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
                                {...register("selectFour", {
                                    required: "Change selection in other form elements to enable this select",
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
                            <FormHelperText>Default select, no empty value for first option, validation, disabled</FormHelperText>
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
                                {...register("selectFive", {
                                    required: "Choose one of the options",
                                })}
                            >
                                <option value="">Select an option...</option>
                                <option value='fr'>France</option>
                                <option value='usa'>United States of America</option>
                                <option value='gb'>United Kingdom</option>
                            </Select>
                            <FormLabel htmlFor="selectFive">Select five</FormLabel>
                            <FormErrorMessage>
                                {errors.selectFive && errors.selectFive.message}
                            </FormErrorMessage>
                            <FormHelperText>Default select, empty value for first option, validation, disabled</FormHelperText>
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

                        <Checkbox
                            name="checkboxThree"
                            isDisabled
                            isChecked={false}
                        >
                            Checkbox three related text, disabled, unchecked
                        </Checkbox>

                        <Checkbox
                            name="checkboxFour"
                            isDisabled
                            isChecked={true}
                        >
                            Checkbox four related text, disabled, checked
                        </Checkbox>
                    </SimpleGrid>

                    <Heading fontSize="18px" mb="15px">
                        Radios
                    </Heading>

                    <SimpleGrid columns={{sm: 1}} spacing={10} mb="30px">
                        <RadioGroup  name="radio-one" defaultValue='1'>
                            <Grid templateColumns={{sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}} gap={6}>
                                <GridItem>
                                    <Radio value='1' isDisabled>
                                        Multiple radio - input 1 - disabled by default
                                    </Radio>
                                </GridItem>
                                <GridItem>
                                    <Radio value='2'>Multiple radio - input 2</Radio>
                                </GridItem>
                                <GridItem>
                                    <Radio value='3'>Multiple radio - input 3</Radio>
                                </GridItem>
                            </Grid>
                        </RadioGroup>

                        <RadioGroup name="radio-two">
                            <Grid templateColumns={{sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}} gap={6}>
                                <GridItem>
                                    <Radio value='1'>Multiple radio - input 1</Radio>
                                </GridItem>
                                <GridItem>
                                    <Radio value='2' isDisabled>Multiple radio - input 2</Radio>
                                </GridItem>
                                <GridItem>
                                    <Radio value='3'>Multiple radio - input 3</Radio>
                                </GridItem>
                            </Grid>
                        </RadioGroup>

                    </SimpleGrid>

                    <Flex alignItems="center" justify="center">
                        <Button
                            type="submit"
                            isLoading={isSubmitting}
                            variant={"ghost"}
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