import { ClipLoader } from "react-spinners";

const Spinner = ({loading}) => {

    const override = {
        display: "block",
        margin: "100px",
    }
    return <>
        <ClipLoader
            color={"#4A90E2"}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </>
}

export default Spinner;