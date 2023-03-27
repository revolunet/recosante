import React from 'react'
import styled, { keyframes } from 'styled-components'

const hover = keyframes`
  from {
    opacity: 1;
  }
  1% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
`
const Wrapper = styled.svg`
  display: block;
  width: 5.5rem;
  margin: 0.75rem;
`
const Text = styled.path`
  fill: ${(props) => props.theme.colors.title};
`
const Rectangle = styled.rect`
  fill: ${(props) => props.theme.colors.main};
  animation-delay: ${(props) => props.index * 100}ms;
  animation-duration: 1400ms;
  animation-iteration-count: infinite;
  svg:hover & {
    animation-name: ${hover};
  }
`
export default function Logo(props) {
  return (
    <Wrapper
      className={props.className}
      width='174'
      height='55'
      viewBox='0 0 174 55'
      aria-hidden='true'
    >
      <Text d='M9.90357 55C7.98077 55 6.11589 54.7482 4.30892 54.2445C2.52512 53.718 1.08881 53.0426 0 52.2184L1.91121 48.0288C2.9537 48.7843 4.19309 49.391 5.6294 49.8489C7.0657 50.3067 8.50201 50.5357 9.93832 50.5357C11.5368 50.5357 12.7183 50.3067 13.4827 49.8489C14.2472 49.3681 14.6295 48.7385 14.6295 47.9601C14.6295 47.3877 14.3978 46.9184 13.9345 46.5521C13.4943 46.1629 12.9152 45.8538 12.197 45.6249C11.502 45.396 10.5522 45.1441 9.34758 44.8694C7.49428 44.4344 5.97689 43.9994 4.79541 43.5644C3.61393 43.1294 2.59462 42.4312 1.73747 41.4696C0.903483 40.5081 0.486491 39.226 0.486491 37.6234C0.486491 36.2269 0.868734 34.9677 1.63322 33.8459C2.39771 32.7012 3.54443 31.7968 5.07341 31.1329C6.62554 30.469 8.51359 30.137 10.7376 30.137C12.2897 30.137 13.8071 30.3202 15.2897 30.6865C16.7724 31.0528 18.0697 31.5794 19.1816 32.2662L17.4442 36.4901C15.1971 35.231 12.9499 34.6014 10.7028 34.6014C9.1275 34.6014 7.9576 34.8532 7.19312 35.3569C6.4518 35.8606 6.08114 36.5245 6.08114 37.3487C6.08114 38.1729 6.50971 38.791 7.36686 39.2031C8.24718 39.5923 9.57924 39.9815 11.363 40.3707C13.2163 40.8057 14.7337 41.2407 15.9152 41.6757C17.0967 42.1106 18.1044 42.7975 18.9384 43.7361C19.7955 44.6748 20.2241 45.9454 20.2241 47.548C20.2241 48.9216 19.8303 50.1808 19.0426 51.3255C18.2782 52.4473 17.1199 53.3402 15.5677 54.0041C14.0156 54.6681 12.1275 55 9.90357 55Z' />
      <Text d='M40.0902 49.4368H28.7966L26.6422 54.5879H20.8738L31.7156 30.5491H37.2755L48.152 54.5879H42.2446L40.0902 49.4368ZM38.318 45.2128L34.4608 36.0094L30.6036 45.2128H38.318Z' />
      <Text d='M72.9848 30.5491V54.5879H68.3631L56.2356 39.9929V54.5879H50.6757V30.5491H55.3321L67.4249 45.1441V30.5491H72.9848Z' />
      <Text d='M83.7785 35.0822H75.9947V30.5491H97.1918V35.0822H89.4079V54.5879H83.7785V35.0822Z' />
      <Text d='M90.0511 24.4509L85.371 17.7544H85.0936H80.2055V24.4509H74.5894V0.412093H85.0936C87.243 0.412093 89.1035 0.766952 90.6751 1.47667C92.2698 2.18639 93.4947 3.19373 94.3499 4.49869C95.205 5.80366 95.6326 7.34901 95.6326 9.13475C95.6326 10.9205 95.1935 12.4658 94.3152 13.7708C93.4601 15.0529 92.2352 16.0373 90.6404 16.7242L96.0833 24.4509H90.0511ZM89.9471 9.13475C89.9471 7.784 89.508 6.75377 88.6297 6.04405C87.7515 5.31144 86.4688 4.94513 84.7816 4.94513H80.2055V13.3244H84.7816C86.4688 13.3244 87.7515 12.9581 88.6297 12.2255C89.508 11.4928 89.9471 10.4626 89.9471 9.13475Z' />
      <Text d='M134.954 24.863C132.481 24.863 130.24 24.3365 128.229 23.2833C126.241 22.2073 124.67 20.7306 123.514 18.8533C122.382 16.9531 121.815 14.8125 121.815 12.4315C121.815 10.0505 122.382 7.92137 123.514 6.04405C124.67 4.14384 126.241 2.66716 128.229 1.61404C130.24 0.538012 132.493 0 134.989 0C137.092 0 138.987 0.366306 140.674 1.09892C142.385 1.83153 143.818 2.88466 144.973 4.25831L141.368 7.55506C139.727 5.67774 137.693 4.73908 135.266 4.73908C133.764 4.73908 132.424 5.07105 131.245 5.73498C130.066 6.37601 129.142 7.28033 128.471 8.44793C127.824 9.61553 127.501 10.9434 127.501 12.4315C127.501 13.9196 127.824 15.2475 128.471 16.4151C129.142 17.5827 130.066 18.4984 131.245 19.1624C132.424 19.8034 133.764 20.1239 135.266 20.1239C137.693 20.1239 139.727 19.1738 141.368 17.2736L144.973 20.5704C143.818 21.9669 142.385 23.0315 140.674 23.7641C138.964 24.4967 137.057 24.863 134.954 24.863Z' />
      <Text d='M160.01 24.863C157.491 24.863 155.215 24.325 153.181 23.249C151.17 22.173 149.587 20.6963 148.431 18.819C147.299 16.9188 146.733 14.7896 146.733 12.4315C146.733 10.0734 147.299 7.95571 148.431 6.07839C149.587 4.17818 151.17 2.69006 153.181 1.61404C155.215 0.538012 157.491 0 160.01 0C162.529 0 164.794 0.538012 166.805 1.61404C168.816 2.69006 170.399 4.17818 171.555 6.07839C172.71 7.95571 173.288 10.0734 173.288 12.4315C173.288 14.7896 172.71 16.9188 171.555 18.819C170.399 20.6963 168.816 22.173 166.805 23.249C164.794 24.325 162.529 24.863 160.01 24.863ZM160.01 20.1239C161.443 20.1239 162.737 19.8034 163.893 19.1624C165.049 18.4984 165.95 17.5827 166.597 16.4151C167.267 15.2475 167.603 13.9196 167.603 12.4315C167.603 10.9434 167.267 9.61553 166.597 8.44793C165.95 7.28033 165.049 6.37601 163.893 5.73498C162.737 5.07105 161.443 4.73908 160.01 4.73908C158.577 4.73908 157.283 5.07105 156.128 5.73498C154.972 6.37601 154.059 7.28033 153.389 8.44793C152.742 9.61553 152.418 10.9434 152.418 12.4315C152.418 13.9196 152.742 15.2475 153.389 16.4151C154.059 17.5827 154.972 18.4984 156.128 19.1624C157.283 19.8034 158.577 20.1239 160.01 20.1239Z' />
      <Rectangle
        index={0}
        x='100.206'
        y='50.4795'
        width='18.8356'
        height='4.52055'
      />
      <Rectangle
        index={1}
        x='100.206'
        y='40.6849'
        width='18.8356'
        height='4.52055'
      />
      <Rectangle
        index={2}
        x='100.206'
        y='30.5514'
        width='18.8356'
        height='4.52055'
      />
      <Rectangle
        index={3}
        x='100.206'
        y='19.9281'
        width='18.8356'
        height='4.52055'
      />
      <Rectangle
        index={4}
        x='100.206'
        y='10.1335'
        width='18.8356'
        height='4.52055'
      />
      <Rectangle index={5} x='100.206' width='18.8356' height='4.52055' />
    </Wrapper>
  )
}
