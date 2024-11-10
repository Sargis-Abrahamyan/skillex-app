export const ArrowTopAndDownSvg = ({ rotated, size = '20px' }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    fill='#000000'
    style={{
      transform: rotated ? 'rotate(0deg)' : 'rotate(180deg)',
      transition: 'transform 0.3s ease-in-out',
    }}
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
    <g id='SVGRepo_iconCarrier'>
      <g fill='none' fillRule='evenodd'>
        <path d='m0 0h32v32h-32z'></path> <path d='m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm.0142136 11-.0209322.021-.0222136-.021-7.0710678 7.0710678 1.4142136 1.4142136 5.6790678-5.6782814 5.6777864 5.6782814 1.4142136-1.4142136z' fill='#ff4545'></path>{' '}
      </g>
    </g>
  </svg>
);
