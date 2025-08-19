"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, Mail, Phone, MapPin, User, FileText, Check } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

interface EditProfileDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function EditProfileDialog({ open, onOpenChange }: EditProfileDialogProps) {
//   const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [emailVerificationSent, setEmailVerificationSent] = useState(false)
  const [phoneVerificationSent, setPhoneVerificationSent] = useState(false)
  const [emailVerified, setEmailVerified] = useState(true) // Current email is verified
  const [phoneVerified, setPhoneVerified] = useState(true) // Current phone is verified

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Software Developer & UI/UX Enthusiast",
    location: "San Francisco, CA",
    website: "johndoe.dev",
  })

  const [originalData] = useState(formData)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Check if email or phone changed
    if (field === "email" && value !== originalData.email) {
      setEmailVerified(false)
      setEmailVerificationSent(false)
    }
    if (field === "phone" && value !== originalData.phone) {
      setPhoneVerified(false)
      setPhoneVerificationSent(false)
    }
  }

  const handleSendVerification = async (type: "email" | "phone") => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // if (type === "email") {
    //   setEmailVerificationSent(true)
    //   toast({
    //     title: "Verification Email Sent",
    //     description: "Please check your email and click the verification link.",
    //   })
    // } else {
    //   setPhoneVerificationSent(true)
    //   toast({
    //     title: "Verification Code Sent",
    //     description: "Please check your phone for the verification code.",
    //   })
    // }

    setIsLoading(false)
  }

  const handleVerify = async (type: "email" | "phone") => {
    setIsLoading(true)

    // Simulate verification process
    // await new Promise((resolve) => setTimeout(resolve, 1500))

    // if (type === "email") {
    //   setEmailVerified(true)
    //   toast({
    //     title: "Email Verified",
    //     description: "Your email address has been successfully verified.",
    //   })
    // } else {
    //   setPhoneVerified(true)
    //   toast({
    //     title: "Phone Verified",
    //     description: "Your phone number has been successfully verified.",
    //   })
    // }

    setIsLoading(false)
  }

  const handleSave = async () => {
    // Check if email or phone changes need verification
    const emailChanged = formData.email !== originalData.email
    const phoneChanged = formData.phone !== originalData.phone

    // if (emailChanged && !emailVerified) {
    //   toast({
    //     title: "Email Verification Required",
    //     description: "Please verify your new email address before saving.",
    //     variant: "destructive",
    //   })
    //   return
    // }

    // if (phoneChanged && !phoneVerified) {
    //   toast({
    //     title: "Phone Verification Required",
    //     description: "Please verify your new phone number before saving.",
    //     variant: "destructive",
    //   })
    //   return
    // }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // toast({
    //   title: "Profile Updated",
    //   description: "Your profile has been successfully updated.",
    // })

    setIsLoading(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Edit Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/professional-headshot.png" />
                <AvatarFallback className="text-xl">JD</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-green-950 hover:bg-green-900"
              >
                <Camera className="w-4 h-4 text-white" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Click the camera icon to change your profile picture</p>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                First Name
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Last Name
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email Field with Verification */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
            <div className="flex gap-2">
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email address"
                className="flex-1"
              />
              {formData.email !== originalData.email && (
                <div className="flex items-center gap-2">
                  {emailVerified ? (
                    <Badge className="bg-green-500 hover:bg-green-600">
                      <Check className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  ) : emailVerificationSent ? (
                    <Button
                      size="sm"
                      onClick={() => handleVerify("email")}
                      disabled={isLoading}
                      className="bg-green-950 hover:bg-green-900"
                    >
                      Verify
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSendVerification("email")}
                      disabled={isLoading}
                    >
                      Send Code
                    </Button>
                  )}
                </div>
              )}
            </div>
            {formData.email !== originalData.email && !emailVerified && (
              <p className="text-sm text-amber-600">New email address requires verification</p>
            )}
          </div>

          {/* Phone Field with Verification */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </Label>
            <div className="flex gap-2">
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                className="flex-1"
              />
              {formData.phone !== originalData.phone && (
                <div className="flex items-center gap-2">
                  {phoneVerified ? (
                    <Badge className="bg-green-500 hover:bg-green-600">
                      <Check className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  ) : phoneVerificationSent ? (
                    <Button
                      size="sm"
                      onClick={() => handleVerify("phone")}
                      disabled={isLoading}
                      className="bg-green-950 hover:bg-green-900"
                    >
                      Verify
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSendVerification("phone")}
                      disabled={isLoading}
                    >
                      Send Code
                    </Button>
                  )}
                </div>
              )}
            </div>
            {formData.phone !== originalData.phone && !phoneVerified && (
              <p className="text-sm text-amber-600">New phone number requires verification</p>
            )}
          </div>

          {/* Bio Field */}
          <div className="space-y-2">
            <Label htmlFor="bio" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Bio
            </Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              placeholder="Tell us about yourself..."
              rows={3}
              className="resize-none"
            />
            <p className="text-sm text-muted-foreground">{formData.bio.length}/500 characters</p>
          </div>

          {/* Location Field */}
          <div className="space-y-2">
            <Label htmlFor="location" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              placeholder="Enter your location"
            />
          </div>

          {/* Website Field */}
          <div className="space-y-2">
            <Label htmlFor="website" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Website
            </Label>
            <Input
              id="website"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              placeholder="Enter your website URL"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1" disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isLoading} className="flex-1 bg-green-950 hover:bg-green-900 dark:text-green-50">
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
