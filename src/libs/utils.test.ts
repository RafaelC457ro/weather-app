import { describe, expect, test } from 'vitest';

import { cn, kelvin2celsius, kelvin2fahrenheit, selectIcon } from './utils';

describe('Utility functions', () => {
  test('cn function', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  test('kelvin2celsius function', () => {
    const result = kelvin2celsius(300);
    expect(result).toBe(26);
  });

  test('kelvin2fahrenheit function', () => {
    const result = kelvin2fahrenheit(300);
    expect(result).toBe(80);
  });

  test('returns ThunderstormIcon for weather codes 200-232', () => {
    for (let i = 200; i <= 232; i++) {
      expect(selectIcon(i)).toBe('ThunderstormIcon');
    }
  });

  test('returns CloudyIcon for weather codes 300-321', () => {
    for (let i = 300; i <= 321; i++) {
      expect(selectIcon(i)).toBe('CloudyIcon');
    }
  });

  test('returns RainyIcon for weather codes 500-531', () => {
    for (let i = 500; i <= 531; i++) {
      expect(selectIcon(i)).toBe('RainyIcon');
    }
  });

  test('returns SnowyIcon for weather codes 600-622', () => {
    for (let i = 600; i <= 622; i++) {
      expect(selectIcon(i)).toBe('SnowyIcon');
    }
  });

  test('returns AtmosphereIcon for weather codes 701-781', () => {
    for (let i = 701; i <= 781; i++) {
      expect(selectIcon(i)).toBe('AtmosphereIcon');
    }
  });

  test('returns ClearDayIcon for weather code 800', () => {
    expect(selectIcon(800)).toBe('ClearDayIcon');
  });

  test('returns CloudyIcon for weather codes 801-804', () => {
    for (let i = 801; i <= 804; i++) {
      expect(selectIcon(i)).toBe('CloudyIcon');
    }
  });

  test('returns RainyIcon for weather codes 500-531', () => {
    for (let i = 500; i <= 531; i++) {
      expect(selectIcon(i)).toBe('RainyIcon');
    }
  });

  test('returns SnowyIcon for weather codes 600-622', () => {
    for (let i = 600; i <= 622; i++) {
      expect(selectIcon(i)).toBe('SnowyIcon');
    }
  });

  test('returns ClearDayIcon for weather code 800', () => {
    expect(selectIcon(800)).toBe('ClearDayIcon');
  });

  test('returns CloudyIcon for weather codes 801-804', () => {
    for (let i = 801; i <= 804; i++) {
      expect(selectIcon(i)).toBe('CloudyIcon');
    }
  });

  test('returns ClearDayIcon for other weather codes', () => {
    expect(selectIcon(199)).toBe('ClearDayIcon');
    expect(selectIcon(233)).toBe('ClearDayIcon');
    expect(selectIcon(322)).toBe('ClearDayIcon');
    expect(selectIcon(532)).toBe('ClearDayIcon');
    expect(selectIcon(623)).toBe('ClearDayIcon');
    expect(selectIcon(782)).toBe('ClearDayIcon');
    expect(selectIcon(805)).toBe('ClearDayIcon');
    expect(selectIcon(999)).toBe('ClearDayIcon');
  });
});
