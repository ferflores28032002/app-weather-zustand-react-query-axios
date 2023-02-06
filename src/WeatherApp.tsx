import { useWeatherInfo } from "./hooks/useWeatherInfo"
import { useTranslation } from 'react-i18next'
import Icons from "./helpers/Icons"
import CitySlice from "./store/CitySlice"
import BtnChangesCity from "./components/BtnChangesCity"


const WeatherApp = () => {

  const { city } = CitySlice()
  const { data } = useWeatherInfo(city)
  const { t } = useTranslation('global')

  return (
    <div>
      <h1 className="text-center text-xl lg:text-lg text-gray-600 pt-2">{t('title')}</h1>
      <h1 className="text-center text-xl text-gray-600 pt-4">{data?.name}</h1>

      <div className="flex items-center justify-center gap-x-4 min-h-15rem">
        <h1 className="text-5xl text-gray-500">
          {data?.main?.temp.toFixed(0)} &deg;
        </h1>
        <img
          className="w-52 "
          src={Icons(data?.weather?.[0]?.main)}
          alt="icono"
        />
      </div>
      <div>

        <BtnChangesCity />

        <div className="bg-indigo-700 text-white text-3xl w-full min-h-[7rem] flex items-center justify-center gap-2">
          <h1>{data?.main?.temp_min.toFixed(0)}&deg; |</h1>
          <h1>{data?.main?.temp_max.toFixed(0)}&deg;</h1>
        </div>

      </div>
    </div>
  );

}

export default WeatherApp