import { useUnit } from '../libs/hooks/use-unit';
import { kelvin2celsius } from '../libs/utils';
import { WeatherDaily, WeatherData } from '../types';
import { Card } from './ui/Card';
import { WeatherIcon } from './WeatherIcon';

export interface SevenDaysForecastProps {
  weatherData?: WeatherData;
}
export function SevenDaysForecast({ weatherData }: SevenDaysForecastProps) {
  const forecast = weatherData?.daily?.map((item: WeatherDaily) => {
    return {
      day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
      temperature: item.temp.day,
      icon: item.weather[0].id,
      description: item.weather[0].description,
    };
  });

  const { unit } = useUnit();

  return (
    <Card className="flex flex-col p-4">
      <div>
        <h1 className="font-bold text-foreground">7 Days Forecast</h1>
      </div>
      {forecast?.map((item, index) => {
        return (
          <>
            <div className="flex items-center flex-1" key={item.day}>
              <div className="flex flex-1 justify-center items-center">
                <span className="flex flex-1 text-foreground ">{item.day}</span>
              </div>
              <div className="flex flex-1 justify-center items-center space-x-2">
                <WeatherIcon width={80} height={80} code={item.icon} />
                <div className="capitalize">{item.description}</div>
              </div>
              <div className="flex flex-1 justify-center items-center">
                <div className="items-center text-foreground text-xl">
                  {unit === 'Fahrenheit' ? kelvin2celsius(item.temperature) : kelvin2celsius(item.temperature)}°{' '}
                  {unit === 'Fahrenheit' ? 'F' : 'C'}
                </div>
              </div>
            </div>
            {index !== forecast?.length - 1 && <hr className="border-border" />}
          </>
        );
      })}
    </Card>
  );
}
