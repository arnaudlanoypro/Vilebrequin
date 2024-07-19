import React from 'react'
import {Icon, keyframes, chakra} from '@chakra-ui/react'
import {useIntl} from 'react-intl'
import PropTypes from 'prop-types'

const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`

export const AlertIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 16 16" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.3" d="M8 2.35v7.6" />
            <path fill="currentColor" d="M7.35 11.95h1.3v1.3h-1.3z" />
        </Icon>
    )
}

export const Alert2Icon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 16 16" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <circle cx="8" cy="8" r="8" fill="currentColor" />
            <path stroke="#fff" strokeLinecap="square" strokeWidth="1.3" d="M8 3v7.4" />
            <path fill="#000" stroke="#fff" strokeWidth=".65" d="M7.675 12.725h.65v.65h-.65z" />
        </Icon>
    )
}

export const BasketIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 13" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path stroke="currentColor" strokeWidth="1.1" d="M.549 4.637h10.9v7.813H.549z" />
            <path
                stroke="currentColor"
                strokeWidth="1.1"
                d="M3.78 4.807v-1.98c0-2.45 4.42-2.422 4.42 0v1.98"
            />
        </Icon>
    )
}

export const BookIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 12" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <g clipPath="url(#a)">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.1"
                    d="M.999 1.5h3a2 2 0 0 1 2 2v7a1.5 1.5 0 0 0-1.5-1.5h-3.5V1.5Z"
                />
                <path
                    fill="currentColor"
                    d="M10.998 1.5h.55V.95h-.55v.55Zm-3 0V.95v.55Zm-2 2h-.55.55Zm-.55 7a.55.55 0 1 0 1.1 0h-1.1ZM7.499 9v-.55V9Zm3.5 0v.55h.55V9h-.55Zm0-8.05h-3v1.1h3V.95Zm-3 0a2.55 2.55 0 0 0-1.803.747l.778.778A1.45 1.45 0 0 1 8 2.05V.95Zm-1.803.747A2.55 2.55 0 0 0 5.45 3.5h1.1c0-.385.152-.753.424-1.025l-.778-.778ZM5.45 3.5v7h1.1v-7h-1.1Zm1.1 7c0-.252.1-.494.278-.672l-.778-.778a2.05 2.05 0 0 0-.6 1.45h1.1Zm.278-.672a.95.95 0 0 1 .672-.278v-1.1a2.05 2.05 0 0 0-1.45.6l.778.778Zm.672-.278h3.5v-1.1h-3.5v1.1Zm4.05-.55V1.5h-1.1V9h1.1Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M-.001 0h12v12h-12z" />
                </clipPath>
            </defs>
        </Icon>
    )
}

export const CheckIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 16 16" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                fill="currentColor"
                d="m13.611 3.611-7.945 7.946-3.277-3.28-.778.778 4.055 4.056 8.723-8.722Z"
            />
        </Icon>
    )
}

export const ChevronUpIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 12" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path stroke="currentColor" strokeWidth="1.1" d="M10.833 8.175 6.166 3.51 1.5 8.175" />
        </Icon>
    )
}

export const ChevronDownIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 16 16" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                fill="currentColor"
                d="M3 5.769 3.735 5 8 9.462 12.265 5l.735.769L8 11 3 5.769Z"
            />
        </Icon>
    )
}

export const ChevronLeftIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 12" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path stroke="currentColor" strokeWidth="1.1" d="M8.5 1.509 3.832 6.175l4.666 4.667" />
        </Icon>
    )
}

export const ChevronRightIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 12" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path stroke="currentColor" strokeWidth="1.1" d="M3.833 10.842 8.5 6.175 3.833 1.51" />
        </Icon>
    )
}

export const CloseIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 14 14" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path stroke="currentColor" strokeWidth="1.3" d="M12.998 1 1 13M1.001 1 13 13" />
        </Icon>
    )
}

export const CubeIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 14" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.1"
                d="m5.999 1.5 5 2.5v6l-5 2.5-5-2.5V4l5-2.5Z"
                clipRule="evenodd"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.1"
                d="m1.158 4.08 4.84 2.42 4.84-2.42M5.999 12.38V6.5"
            />
        </Icon>
    )
}

export const CustomerServiceIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 34 34" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                fill="currentColor"
                d="M28.536 19.547a5.569 5.569 0 0 0-3.95-1.636c-1.542 0-2.94.625-3.95 1.636A5.568 5.568 0 0 0 19 23.497c0 1.542.625 2.939 1.636 3.95a5.569 5.569 0 0 0 3.95 1.636c1.543 0 2.94-.625 3.95-1.636a5.568 5.568 0 0 0 1.636-3.95 5.569 5.569 0 0 0-1.636-3.95Zm-3.97 1.73a.85.85 0 0 0-.58.248.79.79 0 0 0-.237.562h-.002v.019c.014.602.528.754 1.032.904.882.261 1.746.518 1.73 1.873a1.947 1.947 0 0 1-.567 1.359h-.002c-.23.23-.517.401-.838.491l.004.551a.542.542 0 0 1-1.084.009l-.004-.575a1.922 1.922 0 0 1-1.356-1.84.544.544 0 0 1 1.088 0 .834.834 0 0 0 .837.838c.23 0 .437-.092.587-.242a.858.858 0 0 0 .252-.599c.006-.538-.468-.68-.952-.823-.881-.261-1.779-.528-1.81-1.924v-.037l-.003-.005c0-.52.215-.988.56-1.33a1.94 1.94 0 0 1 .797-.478l-.004-.567a.542.542 0 1 1 1.084-.009l.004.56c.323.09.612.262.843.493l.002.003c.348.348.564.828.564 1.359a.544.544 0 0 1-1.088 0 .836.836 0 0 0-.837-.837v-.003h-.02Zm5.26-3.02a7.388 7.388 0 0 0-5.24-2.17c-2.046 0-3.899.83-5.24 2.17a7.388 7.388 0 0 0-2.17 5.24c0 2.047.83 3.899 2.17 5.24a7.387 7.387 0 0 0 5.24 2.17c2.046 0 3.899-.83 5.24-2.17a7.386 7.386 0 0 0 2.17-5.24c0-2.046-.83-3.899-2.17-5.24Zm-.52 9.96a6.654 6.654 0 0 1-4.72 1.954 6.653 6.653 0 0 1-4.719-1.954 6.655 6.655 0 0 1-1.955-4.72c0-1.843.747-3.512 1.955-4.72a6.652 6.652 0 0 1 4.72-1.954c1.842 0 3.511.747 4.719 1.955a6.654 6.654 0 0 1 1.954 4.72 6.654 6.654 0 0 1-1.954 4.718Zm-14.32-4.295a.497.497 0 0 1 0-.995h1.385a8.255 8.255 0 0 1 2.402-5.217 8.257 8.257 0 0 1 6.327-2.412V13.36c0-.291-.119-.556-.31-.747a1.054 1.054 0 0 0-.747-.31h-2.904l4.283-2.683 3.184 5.083c.009.014.01.032.007.05a.062.062 0 0 1-.027.04l-1.416.887a8.3 8.3 0 0 1 1.13.46l.81-.508a1.052 1.052 0 0 0 .335-1.454L22.811 3.59a1.053 1.053 0 0 0-1.454-.335l-14.445 9.05h-3.85c-.29 0-.554.12-.747.31-.192.191-.311.455-.311.746v12.498c0 .292.119.556.31.747h.001c.193.191.457.31.746.31h13.991a8.243 8.243 0 0 1-.698-2.993h-1.367Zm6.895-19.829a.066.066 0 0 1 .05-.006.061.061 0 0 1 .04.026l1.557 2.485-9.107 5.706H8.776l13.105-8.21ZM7.493 23.923H5.772a.497.497 0 0 1 0-.996h1.721a.497.497 0 1 1 0 .995Zm1.88-5.349a.497.497 0 0 1-.497.498H5.117a.497.497 0 0 1-.497-.498v-3.3c0-.275.223-.497.497-.497h3.759c.274 0 .497.222.497.497v3.3Zm2.734 5.348h-1.722a.497.497 0 0 1 0-.995h1.722a.497.497 0 0 1 0 .995Zm.18-7.09c0-.275.222-.497.497-.497h4.457a.497.497 0 0 1 0 .995h-4.457a.498.498 0 0 1-.497-.498Zm-6.672-1.06h2.763v2.305H5.615V15.77Z"
            />
        </Icon>
    )
}

export const EasyReturnsIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 34 34" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m4.672 14.563-2.65 11.68c1.612.779 3.355 1.28 5.228 1.52 1.928.26 4.004.223 6.192-.037l3.096-5.821V8.889h-6.1c-.11 1.502-.778 2.856-1.78 3.875a6.128 6.128 0 0 1-3.986 1.799Zm19.801-5.674a5.156 5.156 0 0 0 1.502 3.19 5.256 5.256 0 0 0 3.17 1.501L28.09 8.89h-3.616ZM9.975 7.907h17.928V6.053H6.137v1.854h3.838Zm7.527.982v13.016l3.097 5.821c2.187.26 4.264.297 6.192.037 1.872-.24 3.615-.741 5.228-1.52l-2.651-11.68a6.143 6.143 0 0 1-4.079-1.799 6.21 6.21 0 0 1-1.798-3.875h-5.989ZM4.895 13.562c1.205-.13 2.262-.686 3.078-1.484A5.157 5.157 0 0 0 9.474 8.89H5.952l-1.057 4.673Z"
                clipRule="evenodd"
            />
        </Icon>
    )
}

export const FilterIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 12" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <g clipPath="url(#a)">
                <path
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="M10.498 2h-3.5m-2 0h-3.5m9 4h-4.5m-2 0h-2.5m9 4h-2.5m-2 0h-4.5m5.5-9v2m-3 2v2m4 2v2"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M-.001 0h12v12h-12z" />
                </clipPath>
            </defs>
        </Icon>
    )
}

export const HamburgerIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 22 14" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                stroke="currentColor"
                strokeLinecap="square"
                strokeWidth="1.3"
                d="M.999 1h20M.999 7h20M.999 13h20"
            />
        </Icon>
    )
}

export const InfoIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 16 16" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z"
                clipRule="evenodd"
            />
            <path
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M8 10.667V8"
            />
            <circle cx="8" cy="5.333" r=".667" fill="currentColor" />
        </Icon>
    )
}

export const LoaderIcon = ({svgTitle, svgDescription, ...props}) => {
    const spinAnimation = `${spin} infinite 1s linear`
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 32 34" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                d="M7.8053 18.5629C6.34444 19.6066 6.39937 20.0671 6.36424 20.6355C6.32528 21.2417 5.81299 22.6873 6.62805 22.8895C7.44248 23.0918 9.14032 21.5134 9.35047 21.2599C9.56127 21.0064 9.49292 20.4312 9.63345 19.2688C9.93175 16.8004 7.8053 18.5629 7.8053 18.5629ZM7.61686 21.388C7.5894 21.4979 7.38244 22.0292 7.36263 21.2005C7.34475 20.4454 7.45653 20.0583 7.45653 20.0583C7.45653 20.0583 7.60473 19.3983 7.66669 20.1669C7.74142 21.0819 7.64433 21.2787 7.6175 21.388H7.61686ZM8.57884 19.8399C8.56096 20.5964 8.43129 20.976 8.43129 20.976C8.43129 20.976 8.25244 21.628 8.22625 20.8573C8.19495 19.939 8.30162 19.7475 8.3342 19.6396C8.36677 19.5318 8.59865 19.0126 8.57948 19.8392L8.57884 19.8399Z"
                fill="#143A64"
            />
            <path
                d="M12.8706 23.4799L11.4149 24.5021C10.7423 24.9181 10.7793 26.1298 10.9671 27.1614C11.1734 28.2975 13.5682 26.3658 13.8626 26.1129C14.1571 25.8607 14.3015 25.7893 14.3436 24.0874C14.3864 22.3843 12.87 23.4799 12.87 23.4799H12.8706ZM12.1341 24.8534C12.7767 24.5196 13.1562 24.465 13.1562 24.465C13.1562 24.465 13.786 24.3302 13.1517 24.7125C12.3948 25.1676 12.1852 25.1568 12.0798 25.1764C11.9744 25.1959 11.4302 25.2195 12.1341 24.8534ZM13.1855 25.6942C12.4126 26.119 12.2038 26.0994 12.0977 26.1149C11.9917 26.1304 11.4475 26.1331 12.1635 25.796C12.8176 25.4872 13.199 25.4474 13.199 25.4474C13.199 25.4474 13.8333 25.3375 13.1855 25.6942Z"
                fill="#143A64"
            />
            <path
                d="M14.7698 20.7533C14.0186 19.7001 13.4833 20.7533 13.4833 20.7533C12.299 22.2967 13.5472 22.1962 14.2549 22.6587C14.9077 23.0855 15.0649 22.8826 15.5816 22.6689C16.0984 22.4558 15.5209 21.8065 14.7698 20.7526V20.7533Z"
                fill="#143A64"
            />
            <path
                d="M11.0196 20.4045C11.0969 20.6479 11.2278 20.8238 11.4463 20.9418C11.6641 21.0605 11.9037 21.1455 12.1317 21.2412C12.3208 21.3208 12.5188 21.3909 12.7053 21.2668C12.9123 21.1293 13.0605 20.8495 13.1039 20.6013C13.2112 19.9932 12.4434 20.0026 12.1387 19.6884C11.9816 19.5259 11.942 19.3048 11.8219 19.1193C11.6973 18.9265 11.4763 18.9366 11.2821 18.9872C11.0656 19.0445 10.7705 19.1652 10.6638 19.3911C10.5405 19.6527 10.8663 20.1745 10.9385 20.2588C10.9602 20.3289 10.9953 20.3269 11.019 20.4045H11.0196Z"
                fill="#143A64"
            />
            <path
                d="M15.1059 19.8943C15.1059 19.8943 15.7287 18.8835 15.0714 18.6186C13.8712 18.1365 14.3081 18.1587 13.9376 17.9733C13.5671 17.7879 13.7063 17.4939 12.8504 17.6726C12.6058 17.7238 12.4869 17.8506 12.4869 17.8506C12.2072 18.1486 12.027 19.3144 12.5099 19.489C13.8782 19.9846 14.4486 20.0669 14.4486 20.0669C15.0676 20.1336 15.1059 19.8943 15.1059 19.8943Z"
                fill="#143A64"
            />
            <path
                d="M11.1634 18.712C11.6131 18.7693 12.0513 18.0222 12.0315 17.5934C12.0117 17.1652 11.9951 17.2279 11.2043 17.1875C10.4122 17.147 10.4442 17.9575 10.4442 17.9575C9.91845 18.836 10.7137 18.6546 11.1634 18.7126V18.712Z"
                fill="#143A64"
            />
            <path
                d="M15.9009 21.6335C16.7243 22.8181 17.6837 21.4144 18.3091 20.7637C18.9344 20.1124 17.8044 19.8224 16.7722 19.1367C15.7406 18.4517 15.6262 19.4219 15.6262 19.4219C14.9345 21.2782 15.1804 20.5985 15.9009 21.6335Z"
                fill="#143A64"
            />
            <path
                d="M19.5428 18.7666C18.8146 17.919 19.2681 17.5779 17.7345 17.0425C17.3148 16.8962 16.8351 16.8598 16.6613 17.3621C16.2289 18.6149 17.6674 19.2473 18.508 19.7044C19.0235 20.1805 19.9184 19.2042 19.5422 18.7666H19.5428Z"
                fill="#143A64"
            />
            <path
                d="M11.5537 23.3354C11.5933 23.3226 11.7523 23.2822 12.7156 22.9626C13.5735 22.6787 13.0126 22.2782 12.4863 22.4036C11.8718 22.5493 11.9044 22.138 11.9044 22.138C12.036 21.5507 11.6291 21.1933 11.332 21.3673C10.9954 21.5662 10.8849 21.3012 10.7929 21.2001C10.7418 21.1441 10.5911 20.2453 10.5911 20.2453C10.5834 20.2238 10.5636 20.1901 10.554 20.1766C10.2538 19.7558 10.0807 20.2406 10.0807 20.2406L9.95932 20.7335L9.83348 21.4981L9.69232 22.082C9.31034 23.2835 9.80602 22.8466 9.80602 22.8466L9.80027 22.8783C8.6128 24.9968 10.4614 23.4157 10.4614 23.4157C10.326 24.2774 10.8306 23.8216 11.0446 23.6261C11.2369 23.4501 11.3397 23.4069 11.5537 23.3348V23.3354Z"
                fill="#143A64"
            />
            <path
                d="M15.8227 16.3636C15.7039 16.2639 15.5927 16.1546 15.4841 16.042C15.4484 16.0056 15.4036 15.9395 15.2344 15.7959C15.129 15.7069 14.9546 15.6563 14.8288 15.624C14.7304 15.5977 14.6301 15.5754 14.5285 15.5606C14.3203 15.5323 14.0967 15.5471 13.9447 15.7184C13.8636 15.8101 13.8291 15.9166 13.8182 16.0386L13.6547 16.6165C13.518 17.6366 15.2325 18.2954 15.7492 18.3749C15.8866 18.3958 15.9907 18.3095 16.059 18.2097C16.1421 18.0897 16.1555 18.0317 16.1829 17.8881C16.2168 17.7047 16.2423 17.5173 16.2347 17.3305C16.2283 17.1599 16.213 16.9786 16.1829 16.81C16.1446 16.599 15.9728 16.487 15.8233 16.3623L15.8227 16.3636Z"
                fill="#143A64"
            />
            <path
                d="M11.3283 15.2511C10.3375 16.6974 11.0364 17.05 11.3161 16.8673C11.6738 16.6327 12.0169 16.8444 12.0169 16.8444C12.7987 17.3271 12.9731 17.0069 12.9501 16.7176C12.9271 16.427 13.5033 15.8263 13.5033 15.8263C14.0762 15.0751 12.8703 15.51 12.2513 15.0718C11.6323 14.6335 11.3289 15.2504 11.3289 15.2504L11.3283 15.2511Z"
                fill="#143A64"
            />
            <path
                d="M17.3627 16.2397C18.3936 15.8392 17.8283 15.4912 17.9171 15.2094C18.0212 14.8831 17.7395 14.3045 17.3275 14.3362C16.9551 14.3652 16.9724 13.8858 16.9724 13.8858C16.9698 13.7314 17.3761 13.4031 16.4339 13.2743C15.8775 13.1994 15.6131 13.5123 15.4917 13.7807C15.4068 13.9674 15.3058 14.1421 15.3058 14.1421C15.2503 14.2385 15.3142 14.1501 15.1781 14.3322C14.5304 15.1979 16.149 16.0542 16.3157 16.1621C16.591 16.3415 16.7341 16.4851 17.3627 16.2397Z"
                fill="#143A64"
            />
            <path
                d="M20.5971 17.5326C20.9044 16.5488 20.6361 16.1861 20.3749 15.6237C20.113 15.0621 20.3174 14.9178 19.2385 14.932C18.1596 14.9454 18.2586 15.9083 18.2586 15.9083C18.1047 16.9561 18.8801 17.1455 19.4052 18.0045C19.7655 18.5938 20.2618 18.6087 20.5971 17.5326Z"
                fill="#143A64"
            />
            <path
                d="M18.2566 14.5616C18.9733 14.8515 19.5137 14.0842 19.8191 13.4491C20.3 12.4505 19.3508 12.7701 18.4483 12.2529C17.5591 11.7425 17.3828 12.2489 17.3828 12.2489C17.3828 12.2489 16.8846 12.7242 17.4959 13.6459C17.5489 13.7255 17.7296 14.0343 17.8127 14.1078C18.042 14.3114 18.0707 14.4867 18.256 14.5616H18.2566Z"
                fill="#143A64"
            />
            <path
                d="M14.6223 11.7763C13.2969 12.7014 14.3029 13.0236 14.3029 13.0236C14.4409 13.1059 15.6194 13.4545 15.6437 13.0156C15.6686 12.5773 16.1675 12.6043 16.1675 12.6043C17.0598 12.9171 17.1882 11.7176 17.1882 11.7176C17.3786 10.8236 15.9484 10.8519 14.6223 11.7763Z"
                fill="#143A64"
            />
            <path
                d="M13.862 13.2689C13.3229 12.7201 12.7294 13.246 12.7294 13.246C11.6154 13.9958 12.0849 14.5601 12.9901 14.8312C13.952 15.1191 13.9718 15.1245 14.5716 14.4893C15.1721 13.8535 14.6981 13.2999 14.4094 13.4422C14.1213 13.5851 13.8626 13.2689 13.8626 13.2689H13.862Z"
                fill="#143A64"
            />
            <path
                d="M18.265 10.9905C16.9945 11.3519 18.0401 11.6405 18.0401 11.6405C18.624 11.6688 19.3426 12.0005 19.3426 12.0005C20.2599 12.8096 20.2643 12.3667 20.2707 12.2568C20.2771 12.1475 19.5355 10.6291 18.265 10.9905Z"
                fill="#143A64"
            />
            <path
                d="M20.8161 13.7881C20.5612 12.8441 20.1684 13.6984 20.1684 13.6984C19.994 13.9256 20.0061 14.3423 20.5018 15.1865C21.1016 16.2073 21.0971 14.8277 20.8161 13.7881Z"
                fill="#143A64"
            />
            <path
                d="M9.55873 17.0341C9.62452 18.299 10.0225 17.1177 10.0225 17.1177C10.0225 17.1177 10.6996 15.3235 11.017 14.7214C11.3351 14.1193 12.2486 12.9029 13.406 11.9758C13.65 11.781 13.9094 11.6043 14.1802 11.4526C14.5833 11.2281 15.0112 11.0602 15.4482 10.924C15.8723 10.7912 16.3003 10.6442 16.7308 10.5356C17.0483 10.4547 17.374 10.4237 17.7004 10.4116C18.0339 10.3988 18.3724 10.3913 18.6995 10.4743C18.8323 10.5087 18.9646 10.5478 19.0949 10.5909C19.1875 10.6213 19.5082 10.7386 19.5739 10.6024C19.6538 10.4365 19.2929 10.2491 19.2035 10.1958C18.9786 10.0623 18.7327 9.94229 18.4855 9.86206C18.3405 9.81486 18.1897 9.79261 18.0396 9.78182C17.4826 9.74136 16.9275 9.83374 16.3731 9.87959C16.2504 9.88903 16.1252 9.92678 16.0045 9.94903C15.5369 10.0353 15.0885 10.1911 14.6459 10.3509C14.4466 10.423 14.2543 10.5141 14.0652 10.6118C13.4137 10.951 12.7328 11.2928 12.1617 11.7709C11.5363 12.2954 10.9397 12.8665 10.3636 13.4504C10.2096 13.6055 10.071 13.7768 9.95285 13.9642C9.79188 14.2204 9.65965 14.5077 9.59897 14.8097C9.54404 15.0815 9.54403 15.3431 9.55298 15.6195C9.55298 15.6472 9.55426 15.6748 9.55426 15.7024C9.55298 15.8966 9.5319 16.0881 9.53381 16.2823C9.53573 16.5331 9.54659 16.7839 9.55937 17.0341H9.55873Z"
                fill="#143A64"
            />
            <path
                d="M21.7669 17.7892C21.8461 17.5511 21.924 17.3131 21.9866 17.069C22.0115 16.9747 22.0365 16.8809 22.0575 16.7865C22.124 16.4953 22.1399 16.1568 22.1463 15.8581C22.1502 15.641 22.1355 15.2776 22.0122 15.0975C21.9598 15.0207 21.7222 14.722 21.6149 14.817C21.5421 14.8811 21.5216 15.0382 21.5037 15.1292C21.4954 15.1717 21.4884 15.2149 21.482 15.2573C21.3977 15.8102 21.4418 16.3732 21.2897 16.9187C21.2227 17.1581 21.1377 17.39 21.0528 17.6226C20.9474 17.9112 20.865 18.2065 20.7295 18.4816C20.4312 19.0898 20.0531 19.764 19.1064 20.8604C18.8669 21.1375 18.6152 21.4005 18.3399 21.6378C17.995 21.9345 17.6085 22.1516 17.2157 22.3687C16.6293 22.6923 16.0078 22.9061 15.3824 23.1265C15.2802 23.1623 14.7398 23.3578 15.0688 23.467C15.2655 23.5338 15.4751 23.5297 15.6775 23.5446C15.8883 23.5594 16.0979 23.5783 16.3086 23.5945C16.6747 23.6228 16.996 23.6073 17.3294 23.4239C17.6705 23.2351 17.9624 22.9708 18.2805 22.7469C18.4766 22.6094 18.667 22.4638 18.8509 22.3087C19.1071 22.0936 19.3524 21.8603 19.5727 21.6041C19.8027 21.3391 19.9982 21.0444 20.2051 20.7592C20.7819 19.969 20.9678 19.555 20.8145 19.8369C20.6638 20.1153 21.1103 19.2745 21.2374 18.9819C21.3594 18.6987 21.6685 18.0798 21.7656 17.7871L21.7669 17.7892Z"
                fill="#143A64"
            />
            <path
                d="M24.7134 17.9799C24.7134 17.9799 23.982 16.9321 23.3631 16.0266C23.2583 15.8728 23.1235 15.6793 22.9485 15.6112C22.7492 15.5344 22.601 15.6429 22.5071 15.8263C22.4995 15.8412 22.4924 15.856 22.4854 15.8715C22.2938 16.2848 22.3289 16.7366 22.3813 17.1802C22.518 18.3312 22.106 18.8854 22.106 18.8854C22.106 18.8854 21.303 19.9986 21.7668 20.5946C22.2305 21.19 21.8422 22.4185 21.8422 22.4185C21.7962 22.5621 21.7904 22.7529 21.7943 22.904C21.7987 23.0691 21.8185 23.2424 21.9367 23.3631C22.0421 23.471 22.2063 23.529 22.3487 23.5458C22.6004 23.5762 22.8291 23.5 23.0418 23.3604C23.2468 23.2276 23.4167 23.0429 23.5873 22.8669C23.7738 22.6754 23.9156 22.4461 24.0785 22.2297C24.4924 21.6802 24.7888 21.2278 24.8993 20.6351C25.0092 20.0438 25.0175 20.1564 25.0775 19.6601C25.1171 19.3318 25.0124 18.5867 24.8955 18.2732C24.852 18.1545 24.7811 18.0776 24.7128 17.9792L24.7134 17.9799ZM22.5927 21.1233C22.5927 21.1233 22.571 20.6054 22.4452 20.3593C22.4452 20.3593 22.6445 19.143 23.0597 19.9703C23.4742 20.7976 22.5927 21.1233 22.5927 21.1233ZM24.1775 20.3364C23.9316 20.6452 23.6761 20.0053 23.6013 19.8314C23.1421 18.764 23.0769 18.3736 23.0769 18.3736C23.0769 18.3736 22.8808 17.7183 23.2481 18.1087C23.5125 18.3905 23.6888 18.789 23.8613 19.1356C23.9999 19.4133 24.4368 20.0101 24.1775 20.3364Z"
                fill="#143A64"
            />
            <path
                d="M10.6529 9.24235C10.8611 9.38057 11.2648 9.39945 11.4973 9.33404C11.6717 9.28348 11.8378 9.20594 12.0141 9.15874C12.5404 9.02052 13.153 9.1021 13.4839 9.60442C13.6404 9.84041 13.8857 10.1216 14.1827 10.1128C14.4503 10.1054 14.6675 9.92064 14.893 9.79254C15.1293 9.65836 15.3848 9.54913 15.6391 9.47631C16.1392 9.33404 16.6656 9.27471 17.1823 9.29763C17.3912 9.30707 17.5956 9.33404 17.8013 9.37113C18.0313 9.41361 18.3494 9.48103 18.578 9.39945C19.0597 9.22819 18.2133 8.40358 18.0728 8.26872C17.8058 8.01251 17.5266 7.76708 17.2283 7.55199C16.6969 7.16834 16.113 6.89932 15.4883 6.73615C14.9645 6.5986 14.4197 6.49948 13.8774 6.48465C13.2501 6.46712 12.3066 6.69637 11.0259 7.61133C10.8643 7.72662 10.6995 7.85541 10.5673 8.00779C10.4325 8.16421 10.299 8.35705 10.2888 8.57416C10.2811 8.75082 10.3744 8.95511 10.5008 9.10345C10.5475 9.15941 10.5998 9.20661 10.6529 9.24235ZM14.9543 7.31466C15.8658 7.77854 16.136 8.01453 16.136 8.01453C16.136 8.01453 16.6439 8.35435 16.1884 8.30985C15.8607 8.27884 15.5171 8.10825 15.2079 7.97138C14.9594 7.86215 13.9821 7.71247 13.947 7.31668C13.9138 6.94179 14.8055 7.23779 14.9543 7.31398V7.31466ZM14.6522 8.53101C15.2909 9.18032 14.1284 9.04681 14.1284 9.04681C13.9387 8.85128 13.473 8.68541 13.473 8.68541C13.473 8.68541 14.0141 7.8817 14.6522 8.53101Z"
                fill="#143A64"
            />
            <path
                d="M25.7686 9.68249C25.6293 9.56382 25.4767 9.45999 25.3214 9.36357C25.2473 9.31772 25.1605 9.28198 25.0896 9.23007C25.0372 9.19163 24.9695 9.17006 24.9094 9.14848C24.7184 9.07903 24.5236 9.02442 24.3282 8.96913C24.0982 8.90373 23.7961 8.86057 23.5578 8.83832C23.1714 8.80191 22.8149 8.89361 22.4444 8.99071C22.2854 9.03251 22.127 9.08645 21.9775 9.15859C21.7846 9.25232 21.6013 9.36896 21.4473 9.52674C21.3943 9.58135 21.3458 9.64338 21.3023 9.70541C21.2436 9.78902 21.1784 9.86791 21.1286 9.95691C21.1158 9.97984 21.0915 10.0398 21.0749 10.0601C21.0194 10.1302 20.9919 10.168 20.9325 10.234C20.8386 10.3406 20.7479 10.4498 20.6629 10.5644C20.5039 10.7775 20.3506 11.0654 20.311 11.3385C20.2797 11.5448 20.3461 11.7477 20.4598 11.9149C20.576 12.0842 20.7587 12.1846 20.8737 12.3546C21.0219 12.5723 21.1024 12.8609 21.1733 13.1144C21.2174 13.2695 21.2576 13.4259 21.2902 13.5844C21.2889 13.7435 21.3068 13.9215 21.363 14.0699C21.4231 14.227 21.5502 14.3766 21.7137 14.4131C21.9583 14.4683 22.0439 14.2168 22.1442 14.0665C22.2266 13.9424 22.2867 13.8393 22.4112 13.7651C22.5268 13.6963 22.6425 13.7024 22.7696 13.7004C22.8635 13.6983 22.9618 13.6977 23.0551 13.6842C23.4083 13.635 23.7744 13.4057 24.0765 13.2109C24.3147 13.0571 24.5824 12.8656 24.7248 12.6034C24.79 12.4847 24.8788 12.3802 24.9708 12.2838C25.1509 12.0963 25.3521 11.9325 25.5597 11.7794C25.7756 11.621 25.8158 11.5171 25.9723 11.2926C26.0592 11.1672 26.1263 10.9919 26.1467 10.8368C26.2049 10.3985 26.0771 9.94882 25.7686 9.68451V9.68249ZM22.1027 10.648C22.5441 10.058 23.5431 10.1113 23.5431 10.1113C22.6469 10.1531 22.408 10.7775 22.408 10.7775C21.6939 11.3594 22.1021 10.648 22.1021 10.648H22.1027ZM22.3454 11.116C22.8769 10.4168 23.4103 10.4754 23.4103 10.4754C23.1183 10.4613 22.7792 11.236 22.7792 11.236C21.966 11.8792 22.3454 11.116 22.3454 11.116ZM23.8286 12.1051C23.8286 12.1051 23.4179 12.1469 23.4256 12.3721C23.4326 12.5966 22.8501 12.687 23.1113 12.1071C23.2991 11.6911 23.8619 11.8023 23.8619 11.8023C23.8619 11.8023 24.5875 11.9358 23.8286 12.1051Z"
                fill="#143A64"
            />

            <chakra.g animation={spinAnimation} transformOrigin="center">
                <circle
                    cx={16}
                    cy={17}
                    r={16}
                    fill="transparent"
                    stroke="#143A64"
                    strokeWidth={0.7}
                    strokeOpacity={0.15}
                />
                <path
                    fill="none"
                    stroke="#143A64"
                    strokeWidth={0.7}
                    d="M16,33 a16,16 0 0,1 -16,-16"
                />
            </chakra.g>
        </Icon>
    )
}

export const LocationIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 32 32" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <circle cx="16" cy="16" r="15.75" stroke="#D9D9D9" strokeWidth=".5" />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.5 14.727c0 3.898-6 8.273-6 8.273s-6-4.284-6-8.273c0-1.519.632-2.975 1.757-4.05A6.148 6.148 0 0 1 15.5 9c1.591 0 3.117.603 4.243 1.678a5.598 5.598 0 0 1 1.757 4.05Z"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.5 16.636c1.105 0 2-.854 2-1.909 0-1.054-.895-1.909-2-1.909s-2 .855-2 1.91c0 1.054.895 1.908 2 1.908Z"
            />
        </Icon>
    )
}

export const MinusIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 12" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path stroke="currentColor" d="M1.498 6h9" />
        </Icon>
    )
}

export const NoLocationIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 13 14" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.1"
                d="M2.817 2.818A4.5 4.5 0 0 1 10.498 6c0 1.073-.551 2.191-1.269 3.192m-1.516 1.772c-.92.93-1.714 1.536-1.714 1.536s-4.5-3.366-4.5-6.5c0-.376.047-.747.138-1.106"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.1"
                d="M7.499 6a1.5 1.5 0 0 0-2.746-.836l2.081 2.082c.401-.27.665-.727.665-1.246Z"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.1"
                d="M11.498 12 .998 1.5"
            />
        </Icon>
    )
}

export const PhoneIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 32 32" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <circle cx="16" cy="16" r="15.75" stroke="#D9D9D9" strokeWidth=".5" />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.079 17.801-2.746.532c-1.854-.93-3-2-3.666-3.666l.513-2.754-.97-2.58h-2.501c-.752 0-1.344.622-1.231 1.365.28 1.855 1.106 5.22 3.522 7.635 2.537 2.537 6.19 3.638 8.201 4.076.777.169 1.466-.437 1.466-1.232v-2.39l-2.588-.986Z"
            />
        </Icon>
    )
}

export const PlusIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 12" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path stroke="currentColor" d="M1.499 6h9M5.999 1.5v9" />
        </Icon>
    )
}

export const PrivacyIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 12" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.1"
                d="M5.999 11s4-2 4-5V2.5l-4-1.5-4 1.5V6c0 3 4 5 4 5Z"
            />
            <path
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
                strokeWidth="1.1"
                d="M6.049 7.95v-2.2"
            />
            <circle cx="6.049" cy="3.55" r=".55" fill="currentColor" />
        </Icon>
    )
}

export const RepairIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 14" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                stroke="currentColor"
                strokeWidth="1.1"
                d="M1.449 1.45h9.1v2.1h-9.1zM1.449 10.45h9.1v2.1h-9.1z"
            />
            <path fill="#D9D9D9" stroke="currentColor" d="M3.499 3.5h5v7h-5z" />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                d="m3.999 8 4 1M3.999 6l4 1M3.999 4l4 1M3.999 10l2 .5"
            />
        </Icon>
    )
}

export const RightArrowIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 17 16" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                d="M8.97998 13L8.30562 12.3186L12.1474 8.47685H3.97998V7.52315H12.1474L8.30562 3.68142L8.97998 3L13.98 8L8.97998 13Z"
                fill="currentColor"
            />
        </Icon>
    )
}

export const SearchIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 17 16" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                fill="currentColor"
                d="M5.132 10.263A5.1 5.1 0 0 0 8.273 9.18l2.82 2.82.907-.907-2.82-2.82a5.1 5.1 0 0 0 1.084-3.142A5.138 5.138 0 0 0 5.132 0 5.138 5.138 0 0 0 0 5.131a5.138 5.138 0 0 0 5.132 5.132Zm0-8.98A3.853 3.853 0 0 1 8.98 5.13a3.853 3.853 0 0 1-3.85 3.85 3.853 3.853 0 0 1-3.848-3.85 3.853 3.853 0 0 1 3.849-3.848Z"
            />
        </Icon>
    )
}

export const SecurePaymentIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 34 34" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                fill="currentColor"
                d="M12.517 9.87c.029.038.051.077.077.119a2.157 2.157 0 0 1 3.994 1.126v.135l.54.3.387-1.636a.321.321 0 0 1 .608-.054c.438 1.007 1.458 1.458 1.986 1.628a4.757 4.757 0 0 0-.19-1.429.322.322 0 0 1 .602-.225c.26.599 1.12 1.162 1.7 1.477.357-3.73-3.348-4.506-3.512-4.55-3.502-.406-5.671 2.355-6.192 3.108ZM3.588 9.821a.322.322 0 0 1 .622.164 6.736 6.736 0 0 0-.084 1.436 2.781 2.781 0 0 0 1.93-1.545.322.322 0 0 1 .323-.19.322.322 0 0 1 .273.27 8.64 8.64 0 0 0 .393 1.57 5.972 5.972 0 0 0 1.706-1.248 2.17 2.17 0 0 1 1.995-1.33h.107a5.352 5.352 0 0 0-.239-.282c-.927-1.034-2.816-2.43-5.909-1.706-.103.035-3.112 1.09-2.8 4.364.531-.245 1.43-.772 1.683-1.503Z"
            />
            <path
                fill="currentColor"
                d="M14.428 12.621a1.516 1.516 0 1 0-1.51-1.515c.004.143.027.284.069.421a2.173 2.173 0 0 1 1.441 1.095ZM25.767 21.134a24.98 24.98 0 0 0-.553-7.331 8.368 8.368 0 0 0-2.575 3.015c.119.576.82 3.08 3.128 4.316ZM21.303 20.436a27.905 27.905 0 0 0-.643 7.335l3.05.38a14.752 14.752 0 0 0 1.398-3.3c-2.025-1.039-3.258-3.183-3.805-4.415ZM25.712 21.836c-2.153-1.043-3.109-3.003-3.495-4.14a15.396 15.396 0 0 0-.644 1.716c.222.599 1.404 3.54 3.702 4.8.197-.782.343-1.576.437-2.376ZM12.275 11.105a1.516 1.516 0 1 0-1.65 1.503 2.163 2.163 0 0 1 1.686-1.13 2.228 2.228 0 0 1-.036-.373ZM12.066 9.39a8.922 8.922 0 0 1 2.5-2.317v-1.61l-.238-.389a.32.32 0 0 1-.022-.293l.251-.595a.586.586 0 0 0-.245-.419 1.004 1.004 0 0 0-.733-.013C11.75 5.01 11.299 7.79 11.229 8.4c.23.263.436.545.618.843.07.045.148.097.219.148ZM12.517 15.151a1.516 1.516 0 1 0 0-3.032 1.516 1.516 0 0 0 0 3.032ZM24.625 8.044h5.593a1.61 1.61 0 0 0 0-3.218.322.322 0 0 1-.225-.106.322.322 0 0 1-.096-.232.166.166 0 0 0 0-.039c0-.914-1.05-1.66-2.35-1.66s-2.356.746-2.356 1.667v.032a.321.321 0 0 1-.322.328h-.247a1.609 1.609 0 1 0 0 3.219l.003.01ZM17.064 24.89h.531c-.215-1.493-1.155-7.402-3.012-10.621a2.157 2.157 0 0 1-1.867 1.503 33.414 33.414 0 0 1 1.773 9.26 21.654 21.654 0 0 1 2.575-.142Z"
            />
            <path
                fill="currentColor"
                d="M31.796 30.574h-3.367c-.512-1.287-1.738-2.449-3.518-3.35-.164.347-.325.67-.512 1.01l1.137.142a.322.322 0 1 1-.042.644h-.039l-1.57-.197a.345.345 0 0 1-.084 0l-5.027-.64a.322.322 0 0 1-.273-.236.324.324 0 0 1 .353-.408l1.155.145a27.963 27.963 0 0 1-.022-1.947 20.68 20.68 0 0 0-2.923-.21c-5.445 0-10.202 2.141-11.364 5.04H2.748a.322.322 0 0 0 0 .645h29.048a.322.322 0 1 0 0-.644v.006Z"
            />
        </Icon>
    )
}

export const ShopIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 32 32" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <circle cx="16" cy="16" r="15.75" stroke="#D9D9D9" strokeWidth=".5" />
            <path
                stroke="currentColor"
                d="M9.5 14.667v6c0 .736.597 1.333 1.333 1.333h9.334c.736 0 1.333-.597 1.333-1.333v-6"
            />
            <path
                stroke="currentColor"
                strokeMiterlimit="16"
                d="M17.389 22v-4c0-.736-.597-1.333-1.333-1.333h-1.334c-.736 0-1.333.597-1.333 1.333v4"
            />
            <path
                stroke="currentColor"
                d="m22.046 14.243-1.13-3.953a.4.4 0 0 0-.384-.29h-2.699l.317 3.803c.01.124.078.236.185.3.26.155.768.442 1.165.564.677.208 1.667.133 2.23.063a.38.38 0 0 0 .316-.487Z"
            />
            <path
                stroke="currentColor"
                d="M16.833 14.667c.379-.117.859-.383 1.128-.542a.386.386 0 0 0 .186-.366L17.833 10h-4.666l-.314 3.76a.386.386 0 0 0 .186.365c.27.159.75.425 1.128.542.995.306 1.671.306 2.666 0Z"
            />
            <path
                stroke="currentColor"
                d="m10.084 10.29-1.13 3.953a.38.38 0 0 0 .315.487c.564.07 1.554.145 2.231-.063.397-.122.905-.409 1.165-.564a.385.385 0 0 0 .185-.3L13.167 10h-2.699a.4.4 0 0 0-.384.29Z"
            />
        </Icon>
    )
}

export const SuccessIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 16 16" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <circle cx="8" cy="8" r="8" fill="currentColor" />
            <path stroke="#fff" strokeWidth="1.1" d="m3 8.278 3.056 3.055L13 4.39" />
        </Icon>
    )
}

export const UltraFastDeliveryIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 34 34" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                fill="currentColor"
                d="M12.671 16.996c.858 2.407 2.298 4.925 4.32 7.555 2.03-2.619 3.477-5.128 4.341-7.529-.952-.537-4.847-2.356-8.66-.026ZM16.992 1.989a12.614 12.614 0 0 0-4.69 6.219c4.117-2.79 7.809-1.041 9.38 0a12.598 12.598 0 0 0-4.69-6.22Z"
            />
            <path
                fill="currentColor"
                d="M11.516 8.563a12.961 12.961 0 0 1 4.405-6.598c-4.657.327-8.565 2.854-10.209 6.294 2.337-1.1 4.861-.137 5.804.304ZM22.085 9.715c-.033-.17-.07-.327-.105-.497-.622-.537-4.962-3.97-9.957 0-.036.16-.072.327-.101.487-.377 2.231-.192 4.52.54 6.661 3.927-2.31 7.885-.605 9.08.017a13.67 13.67 0 0 0 .543-6.668ZM22.48 8.527c2.256-1.309 4.61-.733 5.8-.284-1.646-3.434-5.547-5.95-10.199-6.278a12.958 12.958 0 0 1 4.4 6.562ZM12.023 17.134c-1.198-.252-3.892-.56-4.978.41.397.473.835.911 1.309 1.308.187.17 4.31 3.853 5.171 5.892h2.812c-2.01-2.63-3.448-5.166-4.314-7.61Z"
            />
            <path
                fill="currentColor"
                d="M22.645 9.19c.026.132.055.263.082.394a14.213 14.213 0 0 1-.498 6.83c3.028-.605 4.553.18 5.142.632.311-.42.586-.868.822-1.335a8.314 8.314 0 0 0 .448-6.592c-.59-.282-3.44-1.516-5.996.072ZM11.794 16.424a14.234 14.234 0 0 1-.514-6.838c.023-.124.05-.245.075-.366-.798-.38-3.715-1.6-6.042.03a8.317 8.317 0 0 0-.432 2.618 8.605 8.605 0 0 0 1.755 5.155c1.305-1.116 3.99-.802 5.158-.6Z"
            />
            <path
                fill="currentColor"
                d="M21.98 17.133c-.858 2.438-2.291 4.985-4.317 7.623h2.801c.861-2.053 4.985-5.735 5.165-5.892.473-.399.911-.837 1.31-1.31-.485-.36-1.935-1.115-4.96-.421Z"
            />
            <path
                fill="currentColor"
                d="M19.63 27.788h-5.256a.327.327 0 0 1-.316-.239.327.327 0 0 1-.008-.14l.494-3.031a.327.327 0 0 1 .327-.275h4.268a.327.327 0 0 1 .328.275l.494 3.03a.328.328 0 0 1-.327.38h-.004Zm-4.873-.654h4.49l-.386-2.377h-3.722l-.382 2.377Z"
            />
            <path
                fill="currentColor"
                d="M21.132 27.46v3.194a1.384 1.384 0 0 1-1.381 1.382h-5.499a1.387 1.387 0 0 1-1.385-1.382V27.46a.327.327 0 0 1 .328-.328h7.61a.327.327 0 0 1 .327.328Z"
            />
        </Icon>
    )
}

export const UserIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 14" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.1"
                d="M5.449 5.9a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
                clipRule="evenodd"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.1"
                d="M1.049 12.5v-2.2a2.2 2.2 0 0 1 2.2-2.2h4.4c.4 0 .776.107 1.1.294"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.1"
                d="M10.948 10.3h-5.5M9.848 12.5h-4.4"
            />
        </Icon>
    )
}

export const VisibilityIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 20 20" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M.833 10S4.167 3.333 10 3.333c5.834 0 9.167 6.667 9.167 6.667S15.833 16.667 10 16.667.833 10 .833 10Z"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            />
        </Icon>
    )
}

export const VisibilityOffIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 16 16" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <g
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                clipPath="url(#a)"
            >
                <path d="M11.959 11.96a6.714 6.714 0 0 1-3.96 1.373C3.332 13.333.665 8 .665 8A12.3 12.3 0 0 1 4.04 4.04m2.56-1.213a6.08 6.08 0 0 1 1.4-.16C12.665 2.667 15.332 8 15.332 8c-.405.757-.887 1.47-1.44 2.127m-4.48-.714a2 2 0 1 1-2.827-2.826M.665.667l14.667 14.666" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M-.001 0h16v16h-16z" />
                </clipPath>
            </defs>
        </Icon>
    )
}

export const WhatsappIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 32 32" fill="none" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <circle cx="16" cy="16" r="15.75" stroke="#D9D9D9" strokeWidth=".5" />
            <path
                stroke="currentColor"
                strokeLinejoin="round"
                d="M18.833 19c-1.16 1.16-3.832.171-5.168-1.165-1.336-1.336-2.325-4.008-1.165-5.168.336-.336.799-.376 1.081-.363a.53.53 0 0 1 .4.237l.635.889a.667.667 0 0 1-.071.859l-.6.6c.11.334.466 1.134 1 1.667.532.533 1.332.89 1.666 1l.6-.6a.667.667 0 0 1 .86-.072l.888.635a.53.53 0 0 1 .237.4c.013.282-.027.745-.363 1.081Z"
            />
            <path
                stroke="currentColor"
                strokeLinejoin="round"
                d="M15.5 23a7 7 0 1 0-6.063-3.5l-.587 3.15 3.15-.587a6.968 6.968 0 0 0 3.5.937Z"
            />
        </Icon>
    )
}

export const WishlistIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 12" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                fill="currentColor"
                d="M1.999 12V1.295c0-.362.107-.668.323-.919C2.537.126 2.8 0 3.11 0h5.775c.311 0 .574.125.79.376.215.25.323.557.323.92V12l-4-1.998-4 1.998Zm.923-1.648 3.077-1.54 3.076 1.54V1.295a.228.228 0 0 0-.059-.151c-.04-.046-.083-.07-.13-.07H3.111c-.047 0-.09.024-.13.07a.228.228 0 0 0-.06.151v9.057Z"
            />
        </Icon>
    )
}

export const WishlistFilledIcon = ({svgTitle, svgDescription, ...props}) => {
    const {formatMessage} = useIntl()
    const title =
        svgTitle ||
        formatMessage({
            id: 'your.title.messageId',
            defaultMessage: 'your.default.message'
        })
    const description =
        svgDescription ||
        formatMessage({
            id: 'your.description.messageId',
            defaultMessage: 'your.default.message'
        })

    return (
        <Icon viewBox="0 0 12 12" {...props}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path
                fill="currentColor"
                d="M1.999 12V1.295c0-.362.107-.668.323-.919C2.537.126 2.8 0 3.11 0h5.775c.311 0 .574.125.79.376.215.25.323.557.323.92V12l-4-1.998-4 1.998z"
            />
        </Icon>
    )
}

AlertIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

Alert2Icon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

BasketIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

BookIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

CheckIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

ChevronUpIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

ChevronDownIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

ChevronLeftIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

ChevronRightIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

CloseIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

CubeIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

CustomerServiceIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

EasyReturnsIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

FilterIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

HamburgerIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

InfoIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

LoaderIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

LocationIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

MinusIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

NoLocationIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

PhoneIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

PlusIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

PrivacyIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

RepairIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

RightArrowIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

SearchIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

SecurePaymentIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

ShopIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

SuccessIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

UltraFastDeliveryIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

UserIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

VisibilityIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

VisibilityOffIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

WhatsappIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

WishlistIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}

WishlistFilledIcon.propTypes = {
    svgTitle: PropTypes.string,
    svgDescription: PropTypes.string
}
