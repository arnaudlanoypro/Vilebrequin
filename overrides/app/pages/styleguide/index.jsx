import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useIntl, FormattedMessage} from 'react-intl'
import useNavigation from '@salesforce/retail-react-app/app/hooks/use-navigation'
import Link from '@salesforce/retail-react-app/app/components/link'
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
    Spacer,
    useDisclosure,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalContent,
    ModalCloseButton,
    ModalOverlay,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter
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
import {
    VisibilityIcon,
    VisibilityOffIcon,
    ChevronDownIcon,
    FlagFRIcon,
    FlagUSIcon
} from '../../components/icons'
import {CustomIcon} from '../../components/custom-icons/index'
import {ResponsivePicture} from '../../components/responsive-picture/index'
import Breadcrumb from '../../components/breadcrumb'
import PhoneField from '../../components/phone-field'
import DateField from '../../components/date-field'
import InputWithSubmit from '../../components/input-with-submit'

// Hook form import
import {useForm} from 'react-hook-form'
import {useToast} from '../../hooks/use-toast'

import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'

const Styleguide = () => {
    const intl = useIntl()
    const navigate = useNavigation()

    // Modals
    const {
        isOpen: isSmallModalOpen,
        onOpen: onSmallModalOpen,
        onClose: onSmallModalClose
    } = useDisclosure()
    const {
        isOpen: isMediumModalOpen,
        onOpen: onMediumModalOpen,
        onClose: onMediumModalClose
    } = useDisclosure()
    const {
        isOpen: isLargeModalOpen,
        onOpen: onLargeModalOpen,
        onClose: onLargeModalClose
    } = useDisclosure()
    const {
        isOpen: isFullscreenModalOpen,
        onOpen: onFullscreenModalOpen,
        onClose: onFullscreenModalClose
    } = useDisclosure()

    // Drawer
    const {
        isOpen: isDrawerOnTopOpen,
        onOpen: onDrawerOnTopOpen,
        onClose: onDrawerOnTopClose
    } = useDisclosure()
    const {
        isOpen: isDrawerOnRightOpen,
        onOpen: onDrawerOnRightOpen,
        onClose: onDrawerOnRightClose
    } = useDisclosure()
    const {
        isOpen: isDrawerOnBottomOpen,
        onOpen: onDrawerOnBottomOpen,
        onClose: onDrawerOnBottomClose
    } = useDisclosure()
    const {
        isOpen: isDrawerOnLeftOpen,
        onOpen: onDrawerOnLeftOpen,
        onClose: onDrawerOnLeftClose
    } = useDisclosure()

    // React hook form setup
    const {
        handleSubmit,
        register,
        control,
        watch,
        formState: {errors, isSubmitting}
    } = useForm()

    const {
        handleSubmit: handleSubmit2,
        control: control2,
        formState: {errors: errors2, isSubmitting: isSubmitting2}
    } = useForm()
    const watchDate = watch('date')
    const toast = useToast()

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
                <SimpleGrid
                    columns={{sm: 1, md: 2}}
                    spacing={10}
                    mb="30px"
                    justifyItems="center"
                    alignItems="center"
                >
                    <Button type="button" variant={'primary'} align="center" maxWidth="300px">
                        Click me to submit
                    </Button>

                    <Button
                        type="button"
                        variant={'primary'}
                        align="center"
                        maxWidth="300px"
                        isDisabled
                    >
                        Click me to submit
                    </Button>
                </SimpleGrid>
                <Box my="15px"></Box>
                <SimpleGrid
                    columns={{sm: 1, md: 2}}
                    spacing={10}
                    mb="30px"
                    justifyItems="center"
                    alignItems="center"
                >
                    <Button type="button" variant={'secondary'} align="center" maxWidth="300px">
                        Click me to submit
                    </Button>

                    <Button
                        type="button"
                        variant={'secondary'}
                        align="center"
                        maxWidth="300px"
                        isDisabled
                    >
                        Click me to submit
                    </Button>
                </SimpleGrid>
                <Box my="15px"></Box>
                <SimpleGrid
                    columns={{sm: 1, md: 2}}
                    spacing={10}
                    mb="30px"
                    justifyItems="center"
                    alignItems="center"
                >
                    <Button type="button" variant={'tertiary'} align="center" maxWidth="300px">
                        Click me to submit
                    </Button>

                    <Button
                        type="button"
                        variant={'tertiary'}
                        align="center"
                        maxWidth="300px"
                        isDisabled
                    >
                        Click me to submit
                    </Button>
                </SimpleGrid>
                <Box my="15px"></Box>
                <SimpleGrid
                    columns={{sm: 1, md: 2}}
                    spacing={10}
                    mb="30px"
                    bg="fullBlack"
                    py="30px"
                    justifyItems="center"
                    alignItems="center"
                >
                    <Button
                        type="button"
                        variant={'invertedOutline'}
                        align="center"
                        maxWidth="300px"
                    >
                        Click me to submit
                    </Button>

                    <Button
                        type="button"
                        variant={'invertedOutline'}
                        align="center"
                        maxWidth="300px"
                        isDisabled
                    >
                        Click me to submit
                    </Button>
                </SimpleGrid>
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
                <SimpleGrid
                    columns={{sm: 1, md: 3}}
                    spacing={10}
                    mb="30px"
                    justifyItems="center"
                    alignItems="center"
                >
                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={() => {
                            toast({
                                title: 'Item added to wishlist!',
                                duration: 3000,
                                isClosable: true
                            })
                        }}
                    >
                        Show toast!
                    </Button>

                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={() => {
                            toast({
                                title: 'Apple Pay is currently not available in your cart. Please proceed to checkout to enjoy the convenience of Apple Pay.',
                                variant: 'warning',
                                duration: 3000,
                                isClosable: true,
                                action: <Link to={'/'}>VIEW</Link>
                            })
                        }}
                    >
                        Show warning toast!
                    </Button>

                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={() => {
                            toast({
                                title: 'Something went wrong',
                                variant: 'error',
                                duration: 3000,
                                isClosable: true
                            })
                        }}
                    >
                        Show error toast!
                    </Button>
                </SimpleGrid>
                {/* Breadcrumbs */}
                <Heading fontSize="24px" mt="50px">
                    Breadcrumbs
                </Heading>
                <Divider my="15px" />
                <Breadcrumb
                    categories={[
                        {id: 1, name: 'Shop'},
                        {id: 2, name: 'Men swimwear'}
                    ]}
                    product={{id: '3525', name: 'Men Swim Shorts Ronde des Tortues'}}
                />
                {/* Responsive Picture */}
                <Heading fontSize="24px" mt="50px">
                    Responsive Picture
                </Heading>
                <Divider my="15px" />
                <ResponsivePicture
                    src={{
                        sm: getAssetUrl('static/img/hero-sm.jpg'),
                        md: getAssetUrl('static/img/hero-md.jpg'),
                        lg: getAssetUrl('static/img/hero-lg.jpg'),
                        sm2x: getAssetUrl('static/img/hero-sm2x.jpg'),
                        md2x: getAssetUrl('static/img/hero-md2x.jpg'),
                        lg2x: getAssetUrl('static/img/hero-lg2x.jpg')
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
                <SimpleGrid
                    columns={{sm: 1, md: 4}}
                    spacing={10}
                    mb="30px"
                    justifyItems="center"
                    alignItems="center"
                >
                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={onSmallModalOpen}
                    >
                        Open `small` modal
                    </Button>

                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={onMediumModalOpen}
                    >
                        Open `Medium` modal
                    </Button>

                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={onLargeModalOpen}
                    >
                        Open `Large` modal
                    </Button>

                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={onFullscreenModalOpen}
                    >
                        Open `Fullscreen` modal
                    </Button>
                </SimpleGrid>
                <Modal
                    isOpen={isSmallModalOpen}
                    onClose={onSmallModalClose}
                    size="small"
                    isCentered
                >
                    <ModalOverlay />

                    <ModalContent p="24px">
                        <ModalHeader>
                            <Text fontWeight="bold" fontSize="2xl">
                                CONFIRM REMOVE ITEM
                            </Text>
                        </ModalHeader>

                        <ModalCloseButton />

                        <ModalBody py={20}>
                            <Text>Are you sure you want to remove this item from your cart?</Text>
                        </ModalBody>

                        <ModalFooter justify="space-between" display="block" width="full" p="0">
                            <Flex alignItems="center" justify="space-between">
                                <Button
                                    type="button"
                                    variant={'secondary'}
                                    align="center"
                                    w="170px"
                                    onClick={onSmallModalClose}
                                >
                                    NO, KEEP ITEM
                                </Button>

                                <Button type="button" variant={'primary'} align="center" w="170px">
                                    YES, REMOVE ITEM
                                </Button>
                            </Flex>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Modal
                    isOpen={isMediumModalOpen}
                    onClose={onMediumModalClose}
                    size="medium"
                    isCentered
                    scrollBehavior={'inside'}
                >
                    <ModalOverlay />

                    <ModalContent p="24px">
                        <ModalHeader>
                            <Text fontWeight="bold" fontSize="2xl">
                                Medium size modal with big content and scrollbar
                            </Text>
                        </ModalHeader>

                        <ModalCloseButton />

                        <ModalBody py={20}>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Scelerisque fermentum dui faucibus in. Vulputate odio ut enim
                                blandit volutpat maecenas. Vitae auctor eu augue ut lectus arcu
                                bibendum at varius. Suspendisse interdum consectetur libero id
                                faucibus nisl tincidunt. Odio ut sem nulla pharetra. Tortor
                                condimentum lacinia quis vel eros donec. Imperdiet nulla malesuada
                                pellentesque elit. Ultrices in iaculis nunc sed. A arcu cursus vitae
                                congue mauris rhoncus aenean vel. Facilisis volutpat est velit
                                egestas dui id. Ipsum faucibus vitae aliquet nec. Tellus cras
                                adipiscing enim eu turpis. Pellentesque habitant morbi tristique
                                senectus et netus et. Scelerisque viverra mauris in aliquam sem
                                fringilla ut. Nisl suscipit adipiscing bibendum est ultricies
                                integer. Volutpat ac tincidunt vitae semper quis. Montes nascetur
                                ridiculus mus mauris. Senectus et netus et malesuada fames ac turpis
                                egestas. Fermentum et sollicitudin ac orci phasellus egestas. Sed
                                sed risus pretium quam vulputate. Quis lectus nulla at volutpat diam
                                ut venenatis tellus in. Integer vitae justo eget magna fermentum.
                                Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.
                                Purus in massa tempor nec feugiat nisl. In arcu cursus euismod quis
                                viverra nibh cras pulvinar. Ac tortor vitae purus faucibus ornare
                                suspendisse sed nisi. Arcu cursus vitae congue mauris rhoncus aenean
                                vel elit. Velit laoreet id donec ultrices tincidunt. Massa ultricies
                                mi quis hendrerit dolor magna eget est lorem. Et tortor consequat id
                                porta nibh venenatis. Morbi blandit cursus risus at. Massa tincidunt
                                dui ut ornare. Felis imperdiet proin fermentum leo vel. Sodales
                                neque sodales ut etiam sit amet nisl. Nisl vel pretium lectus quam
                                id leo in vitae. Turpis egestas maecenas pharetra convallis posuere.
                                Turpis egestas integer eget aliquet nibh praesent tristique magna
                                sit. Diam maecenas ultricies mi eget mauris. Eu consequat ac felis
                                donec et odio pellentesque diam volutpat. Cras adipiscing enim eu
                                turpis. Consectetur adipiscing elit duis tristique sollicitudin nibh
                                sit amet commodo. Turpis egestas sed tempus urna et pharetra
                                pharetra. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Ut
                                enim blandit volutpat maecenas volutpat blandit aliquam etiam.
                                Blandit massa enim nec dui nunc mattis enim ut. Lorem dolor sed
                                viverra ipsum nunc. Viverra nibh cras pulvinar mattis nunc sed
                                blandit libero volutpat. Diam vel quam elementum pulvinar etiam non
                                quam. Diam vulputate ut pharetra sit amet aliquam id diam maecenas.
                                Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Turpis
                                egestas sed tempus urna et pharetra. Congue quisque egestas diam in
                                arcu cursus euismod. Mi sit amet mauris commodo quis imperdiet massa
                                tincidunt. Sed viverra ipsum nunc aliquet bibendum enim facilisis
                                gravida neque. Leo integer malesuada nunc vel risus commodo. Metus
                                dictum at tempor commodo ullamcorper a lacus. Diam vel quam
                                elementum pulvinar etiam non. Urna cursus eget nunc scelerisque
                                viverra mauris in. Ullamcorper velit sed ullamcorper morbi. Senectus
                                et netus et malesuada fames ac turpis. Eu turpis egestas pretium
                                aenean pharetra magna ac placerat. Curabitur vitae nunc sed velit.
                                Feugiat pretium nibh ipsum consequat nisl. Sed vulputate odio ut
                                enim blandit volutpat maecenas. Semper eget duis at tellus. Quis
                                lectus nulla at volutpat diam ut venenatis. Pellentesque nec nam
                                aliquam sem et tortor consequat id porta. Rhoncus aenean vel elit
                                scelerisque mauris pellentesque. Facilisis mauris sit amet massa
                                vitae tortor condimentum lacinia. Ac ut consequat semper viverra nam
                                libero justo laoreet sit. Ornare suspendisse sed nisi lacus sed. Sit
                                amet risus nullam eget felis eget. Auctor neque vitae tempus quam
                                pellentesque. Congue eu consequat ac felis donec.
                            </Text>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Modal
                    isOpen={isLargeModalOpen}
                    onClose={onLargeModalClose}
                    size="large"
                    isCentered
                    scrollBehavior={'inside'}
                >
                    <ModalOverlay />

                    <ModalContent p="24px">
                        <ModalHeader>
                            <Text fontWeight="bold" fontSize="2xl">
                                Large size modal with content and scrollbar
                            </Text>
                        </ModalHeader>

                        <ModalCloseButton />

                        <ModalBody py={20}>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Scelerisque fermentum dui faucibus in. Vulputate odio ut enim
                                blandit volutpat maecenas. Vitae auctor eu augue ut lectus arcu
                                bibendum at varius. Suspendisse interdum consectetur libero id
                                faucibus nisl tincidunt. Odio ut sem nulla pharetra. Tortor
                                condimentum lacinia quis vel eros donec. Imperdiet nulla malesuada
                                pellentesque elit. Ultrices in iaculis nunc sed. A arcu cursus vitae
                                congue mauris rhoncus aenean vel. Facilisis volutpat est velit
                                egestas dui id. Ipsum faucibus vitae aliquet nec. Tellus cras
                                adipiscing enim eu turpis. Pellentesque habitant morbi tristique
                                senectus et netus et. Scelerisque viverra mauris in aliquam sem
                                fringilla ut. Nisl suscipit adipiscing bibendum est ultricies
                                integer. Volutpat ac tincidunt vitae semper quis. Montes nascetur
                                ridiculus mus mauris. Senectus et netus et malesuada fames ac turpis
                                egestas. Fermentum et sollicitudin ac orci phasellus egestas. Sed
                                sed risus pretium quam vulputate. Quis lectus nulla at volutpat diam
                                ut venenatis tellus in. Integer vitae justo eget magna fermentum.
                                Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.
                                Purus in massa tempor nec feugiat nisl. In arcu cursus euismod quis
                                viverra nibh cras pulvinar. Ac tortor vitae purus faucibus ornare
                                suspendisse sed nisi. Arcu cursus vitae congue mauris rhoncus aenean
                                vel elit. Velit laoreet id donec ultrices tincidunt. Massa ultricies
                                mi quis hendrerit dolor magna eget est lorem. Et tortor consequat id
                                porta nibh venenatis. Morbi blandit cursus risus at. Massa tincidunt
                                dui ut ornare. Felis imperdiet proin fermentum leo vel. Sodales
                                neque sodales ut etiam sit amet nisl. Nisl vel pretium lectus quam
                                id leo in vitae. Turpis egestas maecenas pharetra convallis posuere.
                                Turpis egestas integer eget aliquet nibh praesent tristique magna
                                sit. Diam maecenas ultricies mi eget mauris. Eu consequat ac felis
                                donec et odio pellentesque diam volutpat. Cras adipiscing enim eu
                                turpis. Consectetur adipiscing elit duis tristique sollicitudin nibh
                                sit amet commodo. Turpis egestas sed tempus urna et pharetra
                                pharetra. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Ut
                                enim blandit volutpat maecenas volutpat blandit aliquam etiam.
                                Blandit massa enim nec dui nunc mattis enim ut. Lorem dolor sed
                                viverra ipsum nunc.
                            </Text>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Modal
                    isOpen={isFullscreenModalOpen}
                    onClose={onFullscreenModalClose}
                    size="full"
                    isCentered
                    scrollBehavior={'inside'}
                >
                    <ModalOverlay />

                    <ModalContent p="24px">
                        <ModalHeader>
                            <Text fontWeight="bold" fontSize="2xl">
                                Fullscreen size modal with content and scrollbar
                            </Text>
                        </ModalHeader>

                        <ModalCloseButton />

                        <ModalBody py={20}>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Scelerisque fermentum dui faucibus in. Vulputate odio ut enim
                                blandit volutpat maecenas. Vitae auctor eu augue ut lectus arcu
                                bibendum at varius. Suspendisse interdum consectetur libero id
                                faucibus nisl tincidunt. Odio ut sem nulla pharetra. Tortor
                                condimentum lacinia quis vel eros donec. Imperdiet nulla malesuada
                                pellentesque elit. Ultrices in iaculis nunc sed. A arcu cursus vitae
                                congue mauris rhoncus aenean vel. Facilisis volutpat est velit
                                egestas dui id. Ipsum faucibus vitae aliquet nec. Tellus cras
                                adipiscing enim eu turpis. Pellentesque habitant morbi tristique
                                senectus et netus et. Scelerisque viverra mauris in aliquam sem
                                fringilla ut. Nisl suscipit adipiscing bibendum est ultricies
                                integer. Volutpat ac tincidunt vitae semper quis. Montes nascetur
                                ridiculus mus mauris. Senectus et netus et malesuada fames ac turpis
                                egestas. Fermentum et sollicitudin ac orci phasellus egestas. Sed
                                sed risus pretium quam vulputate. Quis lectus nulla at volutpat diam
                                ut venenatis tellus in. Integer vitae justo eget magna fermentum.
                                Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.
                                Purus in massa tempor nec feugiat nisl. In arcu cursus euismod quis
                                viverra nibh cras pulvinar. Ac tortor vitae purus faucibus ornare
                                suspendisse sed nisi. Arcu cursus vitae congue mauris rhoncus aenean
                                vel elit. Velit laoreet id donec ultrices tincidunt. Massa ultricies
                                mi quis hendrerit dolor magna eget est lorem. Et tortor consequat id
                                porta nibh venenatis. Morbi blandit cursus risus at. Massa tincidunt
                                dui ut ornare. Felis imperdiet proin fermentum leo vel. Sodales
                                neque sodales ut etiam sit amet nisl. Nisl vel pretium lectus quam
                                id leo in vitae. Turpis egestas maecenas pharetra convallis posuere.
                                Turpis egestas integer eget aliquet nibh praesent tristique magna
                                sit. Diam maecenas ultricies mi eget mauris. Eu consequat ac felis
                                donec et odio pellentesque diam volutpat. Cras adipiscing enim eu
                                turpis. Consectetur adipiscing elit duis tristique sollicitudin nibh
                                sit amet commodo. Turpis egestas sed tempus urna et pharetra
                                pharetra. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Ut
                                enim blandit volutpat maecenas volutpat blandit aliquam etiam.
                                Blandit massa enim nec dui nunc mattis enim ut. Lorem dolor sed
                                viverra ipsum nunc.
                            </Text>

                            <Button
                                type="button"
                                variant={'primary'}
                                maxWidth="300px"
                                onClick={onMediumModalOpen}
                            >
                                Open `Medium` modal
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                {/* Drawer */}
                <Heading fontSize="24px" mt="50px">
                    Drawer
                </Heading>
                <Divider my="15px" />
                <SimpleGrid
                    columns={{sm: 1, md: 4}}
                    spacing={10}
                    mb="30px"
                    justifyItems="center"
                    alignItems="center"
                >
                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={onDrawerOnTopOpen}
                    >
                        Drawer from top
                    </Button>

                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={onDrawerOnRightOpen}
                    >
                        Drawer from right
                    </Button>

                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={onDrawerOnBottomOpen}
                    >
                        Drawer from bottom
                    </Button>

                    <Button
                        type="button"
                        variant={'primary'}
                        maxWidth="300px"
                        onClick={onDrawerOnLeftOpen}
                    >
                        Drawer from left
                    </Button>
                </SimpleGrid>
                <Drawer
                    isOpen={isDrawerOnTopOpen}
                    onClose={onDrawerOnTopClose}
                    placement={'top'}
                    size="sm"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Drawer opened from the top side</DrawerHeader>
                        <DrawerBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Consequat nisl vel pretium lectus quam id. Semper quis lectus nulla
                                at volutpat diam ut venenatis. Dolor morbi non arcu risus quis
                                varius quam quisque. Massa ultricies mi quis hendrerit dolor magna
                                eget est lorem. Erat imperdiet sed euismod nisi porta. Lectus
                                vestibulum mattis ullamcorper velit.
                            </p>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <Drawer
                    isOpen={isDrawerOnRightOpen}
                    onClose={onDrawerOnRightClose}
                    placement={'right'}
                    size="full"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Drawer opened from the right side</DrawerHeader>
                        <DrawerBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Consequat nisl vel pretium lectus quam id. Semper quis lectus nulla
                                at volutpat diam ut venenatis. Dolor morbi non arcu risus quis
                                varius quam quisque. Massa ultricies mi quis hendrerit dolor magna
                                eget est lorem. Erat imperdiet sed euismod nisi porta. Lectus
                                vestibulum mattis ullamcorper velit.
                            </p>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <Drawer
                    isOpen={isDrawerOnBottomOpen}
                    onClose={onDrawerOnBottomClose}
                    placement={'bottom'}
                    size="lg"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Drawer opened from the bottom side</DrawerHeader>
                        <DrawerBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Consequat nisl vel pretium lectus quam id. Semper quis lectus nulla
                                at volutpat diam ut venenatis. Dolor morbi non arcu risus quis
                                varius quam quisque. Massa ultricies mi quis hendrerit dolor magna
                                eget est lorem. Erat imperdiet sed euismod nisi porta. Lectus
                                vestibulum mattis ullamcorper velit.
                            </p>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <Drawer
                    isOpen={isDrawerOnLeftOpen}
                    onClose={onDrawerOnLeftClose}
                    placement={'left'}
                    size="md"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />

                        <DrawerHeader>Drawer opened from the left side</DrawerHeader>

                        <DrawerBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Consequat nisl vel pretium lectus quam id. Semper quis lectus nulla
                                at volutpat diam ut venenatis. Dolor morbi non arcu risus quis
                                varius quam quisque. Massa ultricies mi quis hendrerit dolor magna
                                eget est lorem. Erat imperdiet sed euismod nisi porta. Lectus
                                vestibulum mattis ullamcorper velit.
                            </p>
                        </DrawerBody>

                        <DrawerFooter>
                            <Flex justifyContent="center" alignItems="center" w="full">
                                <Button
                                    type="button"
                                    variant={'primary'}
                                    maxWidth="300px"
                                    onClick={onMediumModalOpen}
                                >
                                    Open `Medium` modal
                                </Button>
                            </Flex>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
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
                <SimpleGrid
                    columns={{sm: 1, md: 4}}
                    spacing={10}
                    mb="30px"
                    justifyItems="center"
                    alignItems="center"
                >
                    <Tooltip hasArrow label="Here is the tooltip text info - placement bottom">
                        <Button type="button" variant={'primary'} maxWidth="300px">
                            Hover me!
                        </Button>
                    </Tooltip>

                    <Tooltip
                        hasArrow={true}
                        label="Here is the tooltip text info - placement bottom"
                        placement="top"
                    >
                        <Button type="button" variant={'primary'} maxWidth="300px">
                            Hover me!
                        </Button>
                    </Tooltip>

                    <Tooltip
                        hasArrow
                        label="Here is the tooltip text info - placement left"
                        placement="left"
                    >
                        <Button type="button" variant={'primary'} maxWidth="300px">
                            Hover me!
                        </Button>
                    </Tooltip>

                    <Tooltip
                        hasArrow
                        label="Here is the tooltip text info - placement right"
                        placement="right"
                    >
                        <Button type="button" variant={'primary'} maxWidth="300px">
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
                                        size="inputElement"
                                        icon={<PasswordIcon color="fullBlack" boxSize={5} />}
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
                                icon={<ChevronDownIcon />}
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
                            <Select
                                icon={<ChevronDownIcon />}
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
                            <FormHelperText>
                                Default select, no empty value for first option, no validation
                            </FormHelperText>
                        </FormControl>

                        <FormControl variant="floating" isRequired isDisabled>
                            <Select
                                icon={<ChevronDownIcon />}
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
                                icon={<ChevronDownIcon />}
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
                                icon={<ChevronDownIcon />}
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
                        Phone
                    </Heading>

                    <SimpleGrid columns={{sm: 1, md: 2}} spacing={10} mb="30px">
                        <PhoneField
                            name="phone"
                            label="Label"
                            defaultCountry="FR"
                            isRequired
                            countries={[
                                {icon: <FlagFRIcon boxSize={8} />, value: 'FR', label: 'France'},
                                {
                                    icon: <FlagUSIcon boxSize={8} />,
                                    value: 'US',
                                    label: 'United States'
                                }
                            ]}
                            control={control}
                            error={errors.phone}
                            rules={{
                                required: intl.formatMessage({
                                    defaultMessage: 'Please enter your phone number.',
                                    id: 'fieldex.phone'
                                })
                            }}
                        />
                    </SimpleGrid>

                    <Heading fontSize="18px" mb="15px">
                        Date
                    </Heading>

                    <SimpleGrid
                        columns={{sm: 1, md: 2}}
                        spacing={10}
                        mb="30px"
                        alignItems={'center'}
                    >
                        <DateField
                            name="date"
                            label="Label"
                            control={control}
                            error={errors.date}
                            rules={{
                                required: intl.formatMessage({
                                    defaultMessage: 'Please enter your birth date.',
                                    id: 'fieldex.date'
                                })
                            }}
                        />
                        <Text fontSize={'12px'}>{`${intl.formatMessage({
                            defaultMessage: 'Selected date :',
                            id: 'fieldex.selectedDate'
                        })} ${watchDate || 'N/A'}`}</Text>
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
                            variant={'primary'}
                            align="center"
                            maxWidth="300px"
                        >
                            Click me to submit
                        </Button>
                    </Flex>
                </form>
                <form
                    id="styleguide-form2"
                    data-testid="sf-check-styleguide-form2"
                    onSubmit={handleSubmit2(onSubmit)}
                    noValidate
                >
                    <Heading fontSize="18px" mb="15px">
                        Input with submit
                    </Heading>

                    <SimpleGrid columns={{sm: 1, md: 2}} spacing={10} mb="30px">
                        <InputWithSubmit
                            name="inputwithsubmit"
                            label="Label"
                            control={control2}
                            error={errors2.inputwithsubmit}
                            rules={{
                                required: intl.formatMessage({
                                    defaultMessage: 'Please enter something',
                                    id: 'fieldex.inputwithsubmit'
                                })
                            }}
                            isSubmitting={isSubmitting2}
                        />
                    </SimpleGrid>
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
