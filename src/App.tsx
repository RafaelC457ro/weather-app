import { useCallback, useState } from 'react';
import { Search } from './components/Search';
import { Sidebar } from './components/Siderbar';
import { Location, WeatherData } from './types';
import { getWeather } from './api';
import { useQuery } from '@tanstack/react-query';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { WeatherPage } from './pages/WeatherPage';
import { ErrorMessage } from './components/ErrorMessage';

const defaultLocation = {
  name: 'Los Angeles',
  lat: 34.0536909,
  lon: -118.242766,
  country: 'US',
  state: 'California',
};

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(defaultLocation);

  const {
    data: weatherData = {} as WeatherData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['weather', selectedLocation?.lat, selectedLocation?.lon],
    queryFn: async () => {
      const data = await getWeather({
        lat: selectedLocation?.lat,
        lon: selectedLocation?.lon,
      });
      return data as WeatherData;
    },
    enabled: selectedLocation !== undefined,
  });

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col h-full w-full p-4">
        <div className="flex w-full py-2">
          <Search
            onChange={useCallback((newLocation) => {
              setSelectedLocation(newLocation);
            }, [])}
          />
        </div>
        {isLoading ? (
          <LoadingSkeleton />
        ) : isError ? (
          <ErrorMessage refetch={refetch} />
        ) : (
          <WeatherPage selectedLocation={selectedLocation} weatherData={weatherData} />
        )}
      </main>
    </div>
  );
}
