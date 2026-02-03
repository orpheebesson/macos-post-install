import { SVGProps } from 'react'

export default function CustomPlex(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='20' height='20' rx='10' fill='black' />
      <path
        d='M9.96361 10.0119L6.61487 5.17859H10.0607L13.3851 10.0119L10.0607 14.8214H6.61487L9.96361 10.0119Z'
        fill='#EBAF00'
      />
    </svg>
  )
}
