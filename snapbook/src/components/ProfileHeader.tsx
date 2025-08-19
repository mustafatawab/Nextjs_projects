"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, LinkIcon, Calendar, Edit } from "lucide-react";
import EditProfileDialog from "./EditProfileDialog";

export default function ProfileHeader() {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  return (
    <div className="relative">
      {/* Cover Photo */}
      <div className="h-64 bg-gradient-to-r from-primary/20 to-primary/10 rounded-b-lg"></div>

      {/* Profile Info */}
      <div className="relative px-6 pb-6">
        <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-14 ">
          {/* Profile Picture */}
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-card">
              <AvatarImage src="/professional-headshot.png" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
          </div>

          {/* Profile Details */}
          <div className="flex-1 md:ml-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">John Doe</h1>
                <p className="text-muted-foreground text-lg">
                  Software Developer & UI/UX Enthusiast
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="bg-green-50 border border-green-50"
                  onClick={() => setIsEditDialogOpen(true)}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button className="bg-green-950 hover:bg-green-900 dark:text-green-50">
                  Add Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

            <EditProfileDialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} />

    </div>
  );
}
