import React from 'react'
import {
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody
} from '@salesforce/retail-react-app/app/components/shared/ui'
import {CloseIcon} from '../../overrides/app/components/icons'
import {IntlProvider} from 'react-intl'

export default {
    title: 'Molecules/Drawer',
    component: Drawer,
    decorators: [
        (Story) => (
            <IntlProvider locale="en">
                <Story />
            </IntlProvider>
        )
    ],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', 'full'],
            control: {type: 'select'}
        },
        placement: {
            options: ['top', 'bottom', 'right', 'left'],
            control: {type: 'select'}
        }
    },
    args: {
        name: 'default',
        size: 'sm',
        placement: 'right',
        title: '',
        body: ''
    }
}

const Template = (args) => {
    const {onClose: onDrawerClose} = useDisclosure()
    return (
        <Drawer onClose={onDrawerClose} placement={args.placement} size={args.size} isOpen={true}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton>
                    <CloseIcon boxSize="14px" />
                </DrawerCloseButton>
                <DrawerHeader>{args.title}</DrawerHeader>
                <DrawerBody>{args.body}</DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export const Small = Template.bind({})
Small.args = {
    size: 'sm',
    placement: 'right',
    title: 'Small Drawer',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id. Semper quis lectus nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus quis varius quam quisque. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Erat imperdiet sed euismod nisi porta. Lectus vestibulum mattis ullamcorper velit.'
}

export const Medium = Template.bind({})
Medium.args = {
    size: 'md',
    placement: 'right',
    title: 'Medium Drawer',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper urna. In et venenatis lacus. Nunc sed luctus quam. Pellentesque orci lacus, posuere lobortis tellus sit amet, lacinia ornare neque. Integer dignissim in massa convallis consequat. In mattis nibh id tristique ultrices. Quisque varius ex non sapien euismod dictum. Nam sed neque tincidunt mi rutrum posuere eget non felis. In placerat, massa sed scelerisque aliquam, sem nunc ultricies justo, nec vehicula felis nibh ut quam. Proin lobortis orci libero, ac consectetur mi dictum et. Praesent a quam libero. Nulla lacus ligula, malesuada non elit posuere, accumsan cursus sem. Aenean iaculis diam dolor, nec molestie diam placerat a. Etiam sollicitudin erat vitae tortor gravida hendrerit. Morbi vulputate vel risus id dignissim. Mauris placerat, nunc sed pretium mattis, libero nisl iaculis augue, in auctor eros nulla vel sapien. Phasellus consectetur lorem at eros fermentum finibus. Nulla sem enim, auctor ut consectetur blandit, fringilla eget lorem. Donec luctus vitae risus non convallis. Quisque tempus aliquet leo, sed mollis metus laoreet lobortis. Morbi rhoncus efficitur condimentum. Fusce varius aliquam turpis, et iaculis massa posuere posuere. Nulla pulvinar finibus interdum. Curabitur at finibus turpis, non pharetra lectus. In tristique, dui non euismod sodales, massa leo vehicula ipsum, a tempus libero urna ac neque. In porta velit nec mauris gravida iaculis. In hac habitasse platea dictumst. In sed diam sapien. Curabitur a viverra risus. Fusce condimentum malesuada ligula, ac finibus risus facilisis ac. Mauris sed sodales metus, ac euismod leo. Nam auctor rhoncus metus sed condimentum. Donec vitae vehicula diam. Donec a bibendum justo. Nullam et dignissim turpis. Sed eget odio vitae arcu facilisis suscipit vitae eu tellus. Curabitur et varius ipsum. Vivamus lacinia arcu ex, eget rhoncus ante semper sit amet. Fusce efficitur mollis nisi, id tincidunt lacus tempus id. Praesent eget interdum elit. Suspendisse elit magna, aliquet nec tellus et, consectetur rhoncus nibh. Curabitur efficitur orci sit amet massa malesuada, quis fringilla orci fringilla. Nulla ultrices neque dolor. Aenean dapibus eros nec consequat condimentum. Duis non blandit ex, nec placerat augue. Nam turpis odio, fringilla mattis placerat ac, viverra vel eros. Nam elementum eros eget mi vestibulum, vitae faucibus lacus pellentesque. Praesent egestas quam vitae lacus tristique tempus.'
}

export const Large = Template.bind({})
Large.args = {
    size: 'lg',
    placement: 'right',
    title: 'Large Drawer',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper urna. In et venenatis lacus. Nunc sed luctus quam. Pellentesque orci lacus, posuere lobortis tellus sit amet, lacinia ornare neque. Integer dignissim in massa convallis consequat. In mattis nibh id tristique ultrices. Quisque varius ex non sapien euismod dictum. Nam sed neque tincidunt mi rutrum posuere eget non felis. In placerat, massa sed scelerisque aliquam, sem nunc ultricies justo, nec vehicula felis nibh ut quam. Proin lobortis orci libero, ac consectetur mi dictum et. Praesent a quam libero. Nulla lacus ligula, malesuada non elit posuere, accumsan cursus sem. Aenean iaculis diam dolor, nec molestie diam placerat a. Etiam sollicitudin erat vitae tortor gravida hendrerit. Morbi vulputate vel risus id dignissim. Mauris placerat, nunc sed pretium mattis, libero nisl iaculis augue, in auctor eros nulla vel sapien. Phasellus consectetur lorem at eros fermentum finibus. Nulla sem enim, auctor ut consectetur blandit, fringilla eget lorem. Donec luctus vitae risus non convallis. Quisque tempus aliquet leo, sed mollis metus laoreet lobortis. Morbi rhoncus efficitur condimentum. Fusce varius aliquam turpis, et iaculis massa posuere posuere. Nulla pulvinar finibus interdum. Curabitur at finibus turpis, non pharetra lectus. In tristique, dui non euismod sodales, massa leo vehicula ipsum, a tempus libero urna ac neque. In porta velit nec mauris gravida iaculis. In hac habitasse platea dictumst. In sed diam sapien. Curabitur a viverra risus. Fusce condimentum malesuada ligula, ac finibus risus facilisis ac. Mauris sed sodales metus, ac euismod leo. Nam auctor rhoncus metus sed condimentum. Donec vitae vehicula diam. Donec a bibendum justo. Nullam et dignissim turpis. Sed eget odio vitae arcu facilisis suscipit vitae eu tellus. Curabitur et varius ipsum. Vivamus lacinia arcu ex, eget rhoncus ante semper sit amet. Fusce efficitur mollis nisi, id tincidunt lacus tempus id. Praesent eget interdum elit. Suspendisse elit magna, aliquet nec tellus et, consectetur rhoncus nibh. Curabitur efficitur orci sit amet massa malesuada, quis fringilla orci fringilla. Nulla ultrices neque dolor. Aenean dapibus eros nec consequat condimentum. Duis non blandit ex, nec placerat augue. Nam turpis odio, fringilla mattis placerat ac, viverra vel eros. Nam elementum eros eget mi vestibulum, vitae faucibus lacus pellentesque. Praesent egestas quam vitae lacus tristique tempus.'
}

export const Full = Template.bind({})
Full.args = {
    size: 'full',
    placement: 'right',
    title: 'Full Drawer',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper urna. In et venenatis lacus. Nunc sed luctus quam. Pellentesque orci lacus, posuere lobortis tellus sit amet, lacinia ornare neque. Integer dignissim in massa convallis consequat. In mattis nibh id tristique ultrices. Quisque varius ex non sapien euismod dictum. Nam sed neque tincidunt mi rutrum posuere eget non felis. In placerat, massa sed scelerisque aliquam, sem nunc ultricies justo, nec vehicula felis nibh ut quam. Proin lobortis orci libero, ac consectetur mi dictum et. Praesent a quam libero. Nulla lacus ligula, malesuada non elit posuere, accumsan cursus sem. Aenean iaculis diam dolor, nec molestie diam placerat a. Etiam sollicitudin erat vitae tortor gravida hendrerit. Morbi vulputate vel risus id dignissim. Mauris placerat, nunc sed pretium mattis, libero nisl iaculis augue, in auctor eros nulla vel sapien. Phasellus consectetur lorem at eros fermentum finibus. Nulla sem enim, auctor ut consectetur blandit, fringilla eget lorem. Donec luctus vitae risus non convallis. Quisque tempus aliquet leo, sed mollis metus laoreet lobortis. Morbi rhoncus efficitur condimentum. Fusce varius aliquam turpis, et iaculis massa posuere posuere. Nulla pulvinar finibus interdum. Curabitur at finibus turpis, non pharetra lectus. In tristique, dui non euismod sodales, massa leo vehicula ipsum, a tempus libero urna ac neque. In porta velit nec mauris gravida iaculis. In hac habitasse platea dictumst. In sed diam sapien. Curabitur a viverra risus. Fusce condimentum malesuada ligula, ac finibus risus facilisis ac. Mauris sed sodales metus, ac euismod leo. Nam auctor rhoncus metus sed condimentum. Donec vitae vehicula diam. Donec a bibendum justo. Nullam et dignissim turpis. Sed eget odio vitae arcu facilisis suscipit vitae eu tellus. Curabitur et varius ipsum. Vivamus lacinia arcu ex, eget rhoncus ante semper sit amet. Fusce efficitur mollis nisi, id tincidunt lacus tempus id. Praesent eget interdum elit. Suspendisse elit magna, aliquet nec tellus et, consectetur rhoncus nibh. Curabitur efficitur orci sit amet massa malesuada, quis fringilla orci fringilla. Nulla ultrices neque dolor. Aenean dapibus eros nec consequat condimentum. Duis non blandit ex, nec placerat augue. Nam turpis odio, fringilla mattis placerat ac, viverra vel eros. Nam elementum eros eget mi vestibulum, vitae faucibus lacus pellentesque. Praesent egestas quam vitae lacus tristique tempus.'
}
