import { SVGProps } from 'react'

export default function CustomZoom(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M20 9.99846C20 4.47582 15.5249 0 10 0C4.47514 0 0 4.47582 0 9.99846C0 15.5211 4.47821 20 10 20C15.5218 20 20 15.5211 20 9.99846Z'
        fill='#008CFF'
      />
      <path
        d='M3.53281 6.35764H10.8962C10.8962 6.35764 12.6918 6.53876 12.7532 7.97544V13.5441H5.62919C5.62919 13.5441 3.59419 13.7836 3.53281 11.6869V6.35764Z'
        fill='white'
      />
      <path
        d='M16.3474 6.35764V13.5503L13.1737 11.4474V8.51266L16.3474 6.35764Z'
        fill='white'
      />
    </svg>
  )
}
