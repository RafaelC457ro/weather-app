export type Location = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export type Unit = 'Celsius' | 'Fahrenheit';

export type WeatherAlert = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
};

export type WeatherDetails = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  pop?: number;
  precipitation?: number;
};

export type WeatherDaily = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: number;
  pop: number;
  rain?: number;
  uvi: number;
};

export type WeatherData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherDetails;
  minutely: { dt: number; precipitation: number }[];
  hourly: WeatherDetails[];
  daily: WeatherDaily[];
  alerts?: WeatherAlert[];
};
