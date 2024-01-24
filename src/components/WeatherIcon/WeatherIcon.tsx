import { selectIcon } from '../../libs/utils';
import {
  ClearDayIcon,
  CloudyIcon,
  CloudyDayIcon,
  ThunderstormIcon,
  RainyIcon,
  SnowyIcon,
  AtmosphereIcon,
} from '../ui/Icons';

export interface WeatherIconProps extends React.SVGProps<SVGSVGElement> {
  code?: number;
}
export function WeatherIcon({ code = 800, ...props }: WeatherIconProps) {
  const iconMap = {
    ClearDayIcon: ClearDayIcon,
    CloudyIcon: CloudyIcon,
    CloudyDayIcon: CloudyDayIcon,
    ThunderstormIcon: ThunderstormIcon,
    RainyIcon: RainyIcon,
    SnowyIcon: SnowyIcon,
    AtmosphereIcon: AtmosphereIcon,
  };

  const key = selectIcon(code);

  const Icon = iconMap[key as keyof typeof iconMap];

  return <Icon width={100} height={100} {...props} />;
}
