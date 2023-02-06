import CitySlice from "../store/CitySlice"


const BtnChangesCity = () => {


    const { setCity } = CitySlice()

    return (

        <div className="flex py-2 items-center bg-indigo-700 justify-around text-white text-sm">
            <button onClick={() => setCity('Toronto')}>
                Toronto
            </button>

            <button
                className="border-x-2 px-6"
                onClick={() => setCity('Miami')}
            >
                Miami
            </button>

            <button onClick={() => setCity('Nicaragua')}>
                Nicaragua
            </button>
        </div>
    )
}

export default BtnChangesCity