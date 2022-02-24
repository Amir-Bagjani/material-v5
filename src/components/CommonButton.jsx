import { Button } from "@mui/material"

const CommonButton = ({ children, ...rest}) => {
  return (
    <Button {...rest} >
      {children}
    </Button>
  )
}

export default CommonButton