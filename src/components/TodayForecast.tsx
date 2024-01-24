import { useUnit } from '../libs/hooks/use-unit/use-unit';
import { kelvin2celsius } from '../libs/utils';
import { WeatherData } from '../types';
import { Card } from './ui/Card';
import { WeatherIcon } from './WeatherIcon';

export interface TodayForecastProps {
  weatherData: WeatherData;
}

export function TodayForecast({ weatherData }: TodayForecastProps) {
  const { unit } = useUnit();
  const forecast = weatherData?.hourly?.map((item) => {
    return {
      hours: new Date(item.dt * 1000).getHours().toString().padStart(2, '0'),
      temperature: item.temp,
      icon: item.weather[0].id,
    };
  });

  return (
    <Card className="flex p-4">
      <div className="flex flex-col max-w-full w-full overflow-auto">
        <div className="flex flex-col mb-4">
          <h1 className="font-bold text-white">Today Forecast</h1>
        </div>
        <div className="justify-center flex space-x-5">
          {forecast?.length &&
            forecast
              // limit to 7
              .slice(0, 7)
              .map((item) => (
                <div className="flex flex-1 justify-between items-center flex-col" key={item.hours}>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col justify-center">
                      <p className="text-white">{item.hours}</p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <WeatherIcon height={80} width={80} code={item.icon} />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-white text-xl">
                      {unit === 'Fahrenheit' ? kelvin2celsius(item.temperature) : kelvin2celsius(item.temperature)}°{' '}
                      {unit === 'Fahrenheit' ? 'F' : 'C'}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </Card>
  );
}
