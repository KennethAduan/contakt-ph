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
import termsData from "../json/TermsAndCondition.json";

const AuthTermsAndCondition = () => {
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

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" checked={isChecked} required />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <span className="text-xs text-muted-foreground cursor-pointer hover:text-primary transition-colors">
            I agree to the terms of Hekaber Digital Services Privacy Notice
          </span>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {termsData.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {termsData.sections.map((section) => (
              <div key={section.id} className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">
                  {section.title}
                </h3>
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2 pt-4 border-t">
            <Checkbox
              id="dialog-terms"
              checked={isChecked}
              onCheckedChange={handleDialogCheckboxChange}
            />
            <Label htmlFor="dialog-terms" className="text-sm">
              I have read and agree to the terms of Hekaber Digital Services
              Privacy Notice
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

export default AuthTermsAndCondition;
