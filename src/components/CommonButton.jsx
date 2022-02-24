import { Button } from "@mui/material"

const CommonButton = ({ children, color, size, variant, sx, disabled}) => {
  return (
    <Button
        color={color}
        size={size}
        variant={variant}
        sx={sx}
        disabled={disabled}
    >
        {children}
    </Button>
  )
}

export default CommonButton