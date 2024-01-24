import { SevenDaysForecast } from '../components/SevenDaysForecast';
import { TodayForecast } from '../components/TodayForecast';
import { TodayStatus } from '../components/TodayStatus';
import { WeatherStatus } from '../components/WeatherStatus';
import { Location, WeatherData } from '../types';

export function WeatherPage({
  selectedLocation,
  weatherData,
}: {
  selectedLocation: Location;
  weatherData: WeatherData;
}) {
  return (
    <div className="flex flex-1 w-full gap-4">
      <div className="flex flex-col gap-4 w-2/3">
        <div className="flex flex-1">
          <WeatherStatus location={selectedLocation} weaterData={weatherData} />
        </div>
        <div className="flex flex-1">
          <TodayForecast weatherData={weatherData} />
        </div>
        <div className="flex flex-1">
          <TodayStatus weatherData={weatherData} />
        </div>
      </div>
      <div className="flex flex-1">
        <SevenDaysForecast weatherData={weatherData} />
      </div>
    </div>
  );
}
