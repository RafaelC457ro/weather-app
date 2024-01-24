import { WeatherData } from '../types';
import { Card } from './ui/Card';
import { HumidityIcon, TermometerIcon, WindIcon } from './ui/Icons';

interface WeatherStatusProps {
  weatherData?: WeatherData;
}

export function TodayStatus({ weatherData }: WeatherStatusProps) {
  return (
    <Card className="flex flex-1 justify-between p-4">
      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-4">
          <h1 className="font-bold text-foreground">Today Status</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-start space-x-4">
              <div className="flex items-center justify-center space-x-4">
                <TermometerIcon />
                <span>Description</span>
              </div>
              <span className="capitalize text-xl font-bold">{weatherData?.current?.weather[0].description}</span>
            </div>
            <div className="flex flex-col items-start space-x-4">
              <div className="flex items-center justify-center space-x-4">
                <HumidityIcon />
                <span>Humidity</span>
              </div>
              <span className="text-xl font-bold">{weatherData?.current?.humidity}%</span>
            </div>
            <div className="flex flex-col items-start space-x-4">
              <div className="flex items-center justify-center space-x-4">
                <WindIcon />
                <span>Wind Speed:</span>
              </div>
              <span className="text-xl font-bold">{weatherData?.current?.wind_speed} m/s</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
