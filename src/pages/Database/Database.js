import GridWrapper from "../../components/common/GridWrapper"
import CommonCard from "../../components/common/CommonCard"
import ProgressStepper from "../../components/common/ProgressStepper"

const steps = [`Step 1`, `Step 2`, `Step 3`];
const stepDescription = [`Description 1`, `Description 2`, `Description 3`];


const Database = () => {
    return (
        <GridWrapper>
            <CommonCard  header={<ProgressStepper steps={steps} stepDescription={stepDescription} />}  />
        </GridWrapper>
    )
}

export default Database
