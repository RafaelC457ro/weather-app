import { useEffect, useState } from 'react';
import { Combobox } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';
import { getGeoLocation } from '../../api';
import type { Location } from '../../types';

export interface SearchProps {
  onChange: (place: Location) => void;
}

export function Search({ onChange }: SearchProps) {
  const [selectedPlace, setSelectedPlace] = useState<Location>();
  const [query, setQuery] = useState('');
  const search = useDebounce(query, 300);

  const {
    data: places = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['places', search],
    queryFn: async () => {
      const data = await getGeoLocation({
        search: search,
      });
      return data as Location[];
    },
    enabled: query.length > 2,
  });

  function onSelectedPlaceChange(place: Location) {
    setSelectedPlace(place);
    setQuery(`${place.name} - ${place.state} - ${place.country}`);
  }

  useEffect(() => {
    if (selectedPlace) {
      onChange?.(selectedPlace);
    }
  }, [selectedPlace, onChange]);

  return (
    <Combobox value={selectedPlace} onChange={onSelectedPlaceChange}>
      <div className="relative w-1/2">
        <Combobox.Input
          className="
            w-full h-10 
            px-4 py-1 text-sm 
            rounded-full 
            bg-input-background 
            text-input-foreground 
            focus:outline-none"
          value={query}
          data-testid="search-input"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a place"
        />
        <Combobox.Options
          className="
            absolute 
            w-full 
            py-1 mt-1 
            overflow-auto 
            text-input-foreground 
            bg-input-background
            max-h-60 
            ring-1 
            ring-black 
            ring-opacity-5 
            focus:outline-none 
            sm:text-sm"
        >
          {!isLoading && isError ? (
            <span className="block px-4 py-2 text-sm text-red-500">An error occurred.</span>
          ) : !isLoading && places.length > 0 ? (
            places?.map((place) => (
              <Combobox.Option
                className="cursor-pointer hover:bg-input-hover px-4 py-2"
                key={`${place.name}-${place.lat}-${place.lon}`}
                value={place}
              >
                {place.name} - {place.state} - {place.country}
              </Combobox.Option>
            ))
          ) : (
            <span className="block px-4 py-2 text-sm text-gray-400">No results found</span>
          )}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}
