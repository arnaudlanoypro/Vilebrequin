/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const crossedOut = {
    content: '""',
    display: 'block',
    position: 'absolute',
    height: '50px',
    width: '1px',
    transform: 'rotate(45deg)',
    backgroundColor: 'gray',
    zIndex: 1
}

const blackFrame = {
    content: '""',
    display: 'block',
    position: 'absolute',
    height: '38px',
    width: '38px',
    border: '2px solid black',
    zIndex: 1
}

export default {
    baseStyle: () => ({
        swatchGroup: {
            flexDirection: 'column '
        },
        swatchLabel: {
            marginBottom: 3
        },
        swatch: {
            position: 'relative',
            backgroundColor: 'white',
            _focus: {
                outline: 'none',
                boxShadow: 'outline'
            }
        },
        swatchesWrapper: {
            flexWrap: 'wrap'
        }
    }),
    variants: {
        color: (props) => ({
            swatch: {
                height: '42px',
                width: '42px',
                borderRadius: 0,
                padding: 0,
                cursor: 'pointer',
                color: 'darkGray',
                borderWidth: ['white', '#FFF', '#FFFFFF', 'rgb(255, 255, 255)'].includes(
                    props.value
                )
                    ? '1px'
                    : 0,
                borderColor: 'borderGray',
                // color: `${props.selected ? 'black' : 'gray.200'}`,
                _hover: {
                    _before: blackFrame
                },
                _active: {
                    background: 'transparent'
                },
                _before: props.disabled ? crossedOut : props.selected && blackFrame,
                _after: !props.disabled && {
                    content: '""',
                    display: `${props.selected ? 'block' : 'none'}`,
                    position: 'absolute',
                    height: '36px',
                    width: '36px',
                    border: '1px solid white',
                    zIndex: 1
                }
            },
            swatchesWrapper: {
                gridGap: '8px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(42px, 1fr))'
            }
        }),
        size: (props) => ({
            swatch: {
                height: '37px',
                width: '37px',
                minWidth: 0,
                borderRadius: 0,
                padding: 0,
                cursor: 'pointer',
                color: props.selected && !props.disabled ? 'white' : 'darkGray',
                borderWidth: '1px',
                borderColor: props.selected ? 'fullBlack' : 'gray',
                backgroundColor: props.selected
                    ? props.disabled
                        ? 'gray'
                        : 'fullBlack'
                    : 'transparent',
                backgroundImage: `${
                    props.disabled
                        ? `${
                              props.selected
                                  ? 'linear-gradient(to top left, transparent calc(50% - 1px), black, transparent calc(50% + 1px) )'
                                  : 'linear-gradient(to top left, white calc(50% - 1px), #c9c9c9, white calc(50% + 1px) )'
                          } `
                        : ''
                }`
            },
            swatchesWrapper: {
                gridGap: '8px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(37px, 1fr))'
            }
        }),
        buttonWithChip: (props) => ({
            swatch: {
                display: 'flex',
                flexDirection: 'column',
                height: '60px',
                flex: 1,
                px: 0,
                width: 'calc(100% + 1px)',
                mt: -1,
                minWidth: ['80px', null, '74px'],
                borderColor: 'gray',
                borderStyle: 'solid',
                borderWidth: 1,
                marginRight: -1,
                _focus: {outline: 'none', zIndex: 2},
                backgroundColor: props.selected ? 'fullBlack' : 'transparent'
            },
            chip: {
                height: '15px',
                width: '15px',
                borderRadius: 'full',
                borderColor: 'gray'
            },
            text: {
                textAlign: 'center',
                fontFamily: 'body',
                color: props.selected ? 'white' : 'darkGray',
                mt: 4
            },
            swatchesWrapper: {
                gridGap: '0',
                gridTemplateColumns: [
                    'repeat(auto-fit, minmax(80px, 1fr))',
                    null,
                    'repeat(auto-fit, minmax(74px, 1fr))'
                ]
            }
        })
    },
    parts: ['swatchesWrapper', 'swatch', 'chip', 'text']
}
