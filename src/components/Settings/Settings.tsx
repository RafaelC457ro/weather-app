import { Popover, RadioGroup } from '@headlessui/react';
import { CheckIcon, GearIcon } from '../ui/Icons';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import { Unit } from '../../types';
import { useUnit } from '../../libs/hooks/use-unit';

const units: Unit[] = ['Celsius', 'Fahrenheit'];

function Options({ selected, setSelected }: { selected: Unit; setSelected: (unit: Unit) => void }) {
  return (
    <div className="w-full px-4 p-10">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Unit</RadioGroup.Label>
          <div className="space-y-2">
            {units.map((unit) => (
              <RadioGroup.Option
                key={unit}
                value={unit}
                className={({ active, checked }) =>
                  `${active ? '' : ''}
                  ${checked ? 'bg-border text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                            data-testid={`unit-${unit}`}
                            data-selected={checked}
                          >
                            {unit}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'}`}
                          ></RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export function Settings() {
  const { unit, setUnit } = useUnit();
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  return (
    <Popover className="relative">
      <Popover.Button
        ref={(ref) => setReferenceElement(ref)}
        aria-label="Settings"
        className="outline-none"
        data-testid="settings-button"
      >
        <GearIcon />
      </Popover.Button>
      <Popover.Panel
        className="absolute z-10 w-60 bg-input-background rounded-lg shadow-lg"
        ref={(ref) => setPopperElement(ref)}
        style={styles.popper}
        {...attributes.popper}
      >
        <Options selected={unit} setSelected={setUnit} />
      </Popover.Panel>
    </Popover>
  );
}
