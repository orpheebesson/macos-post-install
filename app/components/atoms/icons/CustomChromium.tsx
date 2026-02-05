import { SVGProps } from 'react'

export default function CustomChromium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_3_103)'>
        <path
          d='M10 10.0001L14.3303 12.5L10 20C15.5229 20 20 15.5229 20 10.0001C20 8.17807 19.5103 6.47139 18.6589 5.00003H9.99992L10 10.0001Z'
          fill='url(#paint0_linear_3_103)'
        />
        <path
          d='M9.99993 0C6.29864 0 3.0695 2.0123 1.34036 5.00122L5.6697 12.5L9.99993 10.0001V5.00004H18.6589C16.9295 2.01186 13.7008 0 9.99993 0Z'
          fill='url(#paint1_linear_3_103)'
        />
        <path
          d='M5.90553e-05 10.0001C5.90553e-05 15.5229 4.47704 20 10 20L14.3303 12.5L10 10.0001L5.6698 12.5L1.34047 5.00122C0.489524 6.47216 0 8.17823 0 9.99993'
          fill='url(#paint2_linear_3_103)'
        />
        <path
          d='M15.0001 10.0001C15.0001 12.7615 12.7615 15.0001 10 15.0001C7.23861 15.0001 4.99997 12.7615 4.99997 10.0001C4.99997 7.23866 7.23861 5.00003 10 5.00003C12.7615 5.00003 15.0001 7.23866 15.0001 10.0001Z'
          fill='white'
        />
        <path
          d='M14.0626 10.0001C14.0626 12.2437 12.2437 14.0626 10 14.0626C7.75637 14.0626 5.93747 12.2437 5.93747 10.0001C5.93747 7.75642 7.75637 5.93753 10 5.93753C12.2437 5.93753 14.0626 7.75642 14.0626 10.0001Z'
          fill='url(#paint3_linear_3_103)'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_3_103'
          x1='15.0213'
          y1='4.97939'
          x2='15'
          y2='20'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#AFCCFB' />
          <stop offset='1' stopColor='#8BB5F8' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_3_103'
          x1='8.54968'
          y1='0.152357'
          x2='9.37623'
          y2='13.5907'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#1972E7' />
          <stop offset='1' stopColor='#1969D5' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_3_103'
          x1='7.16513'
          y1='5.00122'
          x2='7.16513'
          y2='20'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#659CF6' />
          <stop offset='1' stopColor='#4285F4' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_3_103'
          x1='9.9586'
          y1='5.95299'
          x2='10'
          y2='14.0626'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3680F0' />
          <stop offset='1' stopColor='#2678EC' />
        </linearGradient>
        <clipPath id='clip0_3_103'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
