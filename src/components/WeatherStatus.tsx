import { useUnit } from '../libs/hooks/use-unit';
import { kelvin2celsius, kelvin2fahrenheit } from '../libs/utils';
import { WeatherData, Location } from '../types';
import { WeatherIcon } from './WeatherIcon';

export interface WeatherStatusProps {
  location?: Location;
  weaterData?: WeatherData;
}

export function WeatherStatus({ location, weaterData }: WeatherStatusProps) {
  const { unit } = useUnit();
  return (
    <div className="flex flex-1 justify-between py-2 px-10">
      <div className="flex flex-1 flex-col justify-between py-4">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-white">{location?.name}</h1>
          <p className="text-white">
            {location?.state}, {location?.country}
          </p>
        </div>
        <div className="text-6xl">
          {weaterData?.current?.temp && (
            <span className="font-bold text-white" data-testid="weather-status">
              {unit === 'Fahrenheit'
                ? kelvin2fahrenheit(weaterData.current.temp)
                : kelvin2celsius(weaterData.current.temp)}
              ° {unit === 'Fahrenheit' ? 'F' : 'C'}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <WeatherIcon height={200} width={200} code={weaterData?.current?.weather[0].id} />
      </div>
    </div>
  );
}
