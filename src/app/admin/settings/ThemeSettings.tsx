import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import Image from "next/image";

const ThemeSettings = () => {
  return (
    <div className="flex items-center justify-start gap-5">
      <div className="flex items-center justify-center gap-2">
        <RadioGroup defaultValue="english" className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="english" id="english" />
            <Label htmlFor="english">
              <Image
              src={'/assets/english.svg'}
              alt="english"
              width={40}
              height={10}
              />
              </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="myanmar" id="myanmar" />
            <Label htmlFor="myanmar">
            <Image
              src={'/assets/myanmar.svg'}
              alt="myanmar"
              width={40}
              height={10}
              />
              </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vietnam" id="vietnam" />
            <Label htmlFor="vietnam">
            <Image
              src={'/assets/vietnam.svg'}
              alt="vietnam"
              width={40}
              height={10}
              />
              </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default ThemeSettings;
