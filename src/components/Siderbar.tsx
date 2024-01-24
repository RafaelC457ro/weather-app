import { Settings } from './Settings';
import { HomeIcon } from './ui/Icons';

export function Sidebar() {
  return (
    <div className="flex flex-col w-20 h-screen py-6 px-6 bg-card-background justify-between">
      <div>
        <HomeIcon />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
}
