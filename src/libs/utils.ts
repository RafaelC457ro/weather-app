import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function kelvin2celsius(kelvin: number) {
  return Math.round(kelvin - 273.15);
}

export function kelvin2fahrenheit(kelvin: number) {
  return Math.round((kelvin - 273.15) * 1.8 + 32);
}

export function selectIcon(weatherCode: number) {
  if (weatherCode >= 200 && weatherCode <= 232) {
    return 'ThunderstormIcon';
  } else if (weatherCode >= 300 && weatherCode <= 321) {
    return 'CloudyIcon';
  } else if (weatherCode >= 500 && weatherCode <= 531) {
    return 'RainyIcon';
  } else if (weatherCode >= 600 && weatherCode <= 622) {
    return 'SnowyIcon';
  } else if (weatherCode >= 701 && weatherCode <= 781) {
    return 'AtmosphereIcon';
  } else if (weatherCode === 800) {
    return 'ClearDayIcon';
  } else if (weatherCode >= 801 && weatherCode <= 804) {
    return 'CloudyIcon';
  } else {
    return 'ClearDayIcon';
  }
}
