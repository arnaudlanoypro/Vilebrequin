import LoadingSpinner from '../../overrides/app/components/loading-spinner'
import {Text} from '@salesforce/retail-react-app/app/components/shared/ui/Text'
import React from 'react'

export default {
    title: 'Molecules/LoadingOverlay',
    component: LoadingSpinner,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => (
            <>
                <Text variant="bodyBase1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam faucibus
                    consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
                    felis erat, eleifend eu ultricies cursus, consectetur nec magna. Donec quis odio
                    at tortor congue accumsan et ut lorem. Duis vel sapien condimentum, mattis
                    ligula sit amet, feugiat libero. Morbi tempor neque ac tortor volutpat suscipit
                    sed ut augue. In hac habitasse platea dictumst. In dictum venenatis dolor ac
                    fringilla. Pellentesque vehicula neque non ante convallis rhoncus. Aenean in est
                    maximus nunc viverra tincidunt. Aliquam et velit rhoncus, euismod turpis in,
                    scelerisque erat. Sed imperdiet dui tortor. Mauris in augue suscipit, accumsan
                    nisl et, faucibus velit.
                    <br />
                    <br />
                    Etiam ut ullamcorper nibh. Nullam sit amet lacus quis nulla ultrices rhoncus et
                    vitae risus. Cras aliquet tristique diam, sit amet cursus elit facilisis et.
                    Curabitur accumsan arcu nec quam semper laoreet. Nullam non ultrices ex, nec
                    feugiat augue. Vivamus in orci a turpis faucibus placerat vitae non ligula.
                    Donec odio justo, pellentesque eu luctus id, mattis nec leo. Fusce sed leo
                    consequat, pretium dui in, pulvinar ex.
                    <br />
                    <br />
                    Nullam tristique massa eu nulla tincidunt venenatis. Mauris mollis vulputate
                    commodo. Vestibulum eget risus mollis, porttitor felis eu, tempor nisi. Cras
                    faucibus pharetra semper. Praesent egestas, eros vitae congue tincidunt, augue
                    magna porttitor tortor, et gravida diam velit eu odio. Morbi nec urna sit amet
                    felis vulputate feugiat sed quis magna. Curabitur vitae dapibus nulla.
                    Suspendisse vel massa convallis, porta est ut, tempor dui. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce
                    purus diam, tristique eget ultricies mattis, condimentum ut erat.
                </Text>
                <Story />
            </>
        )
    ],
    tags: ['autodocs'],
    args: {}
}

export const Default = {
    args: {}
}
