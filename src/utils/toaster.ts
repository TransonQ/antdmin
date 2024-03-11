import { toast } from 'react-hot-toast'

const color = {
  critical: 'rgba(229, 28, 0, 1)',
  default: 'rgba(48, 48, 48, 1)',
}

const commonStyle = {
  borderRadius: '4px',
  color: '#fff',
}

export const toaster = {
  error: (msg: string) => {
    toast(msg, {
      duration: 4000,
      style: {
        ...commonStyle,
        background: color.critical,
      },
    })
  },
  success: (msg: string) => {
    toast(msg, {
      duration: 4000,
      style: {
        ...commonStyle,
        background: color.default,
      },
    })
  },
}
