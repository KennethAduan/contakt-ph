"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import dataAndPrivacyData from "../json/DataAndPrivacy.json";

interface Subsection {
  id: string;
  title: string;
  content: string;
}

interface Section {
  id: string;
  title: string;
  content?: string;
  subsections?: Subsection[];
}

const DataAndPrivacy = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleAgree = () => {
    setIsChecked(true);
    setIsDialogOpen(false);
  };

  const handleDecline = () => {
    setIsChecked(false);
    setIsDialogOpen(false);
  };

  const renderSection = (section: Section) => {
    if (section.subsections) {
      return (
        <div key={section.id} className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            {section.title}
          </h3>
          {section.subsections.map((subsection: Subsection) => (
            <div key={subsection.id} className="space-y-2 ml-4">
              <h4 className="text-md font-medium text-foreground">
                {subsection.title}
              </h4>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {subsection.content}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div key={section.id} className="space-y-3">
        <h3 className="text-lg font-medium text-foreground">{section.title}</h3>
        <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
          {section.content}
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="data-privacy" checked={isChecked} required />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <span className="text-xs text-muted-foreground cursor-pointer hover:text-primary transition-colors">
            I agree to the general Data Privacy Statement and General Terms of
            Hekaber Digital Services
          </span>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {dataAndPrivacyData.title}
            </DialogTitle>
            <div className="text-sm text-muted-foreground">
              {dataAndPrivacyData.subtitle}
            </div>
            <div className="text-xs text-muted-foreground">
              {dataAndPrivacyData.company} - {dataAndPrivacyData.location},{" "}
              {dataAndPrivacyData.country}
            </div>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {dataAndPrivacyData.sections.map(renderSection)}
          </div>

          <div className="flex items-center space-x-2 pt-4 border-t">
            <Checkbox
              id="dialog-data-privacy"
              checked={isChecked}
              onCheckedChange={handleDialogCheckboxChange}
            />
            <Label htmlFor="dialog-data-privacy" className="text-sm">
              I have read and agree to the General Terms and Conditions
            </Label>
          </div>

          <DialogFooter className="flex justify-between pt-4">
            <DialogClose asChild>
              <Button variant="outline" onClick={handleDecline}>
                Decline
              </Button>
            </DialogClose>
            <Button onClick={handleAgree} disabled={!isChecked}>
              I agree
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DataAndPrivacy;
