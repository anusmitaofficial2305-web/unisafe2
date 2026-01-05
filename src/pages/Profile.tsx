import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Heart, 
  AlertCircle,
  Edit2,
  Save,
  X,
  Shield,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const initialProfile = {
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "+1 (555) 123-4567",
  dateOfBirth: "1985-06-15",
  gender: "male",
  bloodType: "O+",
  address: "123 Main Street, New York, NY 10001",
  medicalHistory: "Hypertension (controlled with medication), Type 2 Diabetes (diet controlled)",
  allergies: "Penicillin, Shellfish",
  medications: "Lisinopril 10mg daily, Metformin 500mg twice daily",
  emergencyContacts: [
    { name: "Jane Doe", relationship: "Spouse", phone: "+1 (555) 987-6543" },
    { name: "Dr. Sarah Smith", relationship: "Primary Doctor", phone: "+1 (555) 456-7890" },
  ],
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialProfile);
  const [editedProfile, setEditedProfile] = useState(initialProfile);
  const { toast } = useToast();

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const calculateAge = (dob: string) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-display font-bold text-foreground">Profile</h1>
              <p className="text-xs text-muted-foreground">Manage your personal information</p>
            </div>
          </div>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} className="gap-2">
              <Edit2 className="h-4 w-4" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleCancel} className="gap-2">
                <X className="h-4 w-4" />
                Cancel
              </Button>
              <Button onClick={handleSave} className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </div>
          )}
        </div>
      </header>

      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                    <User className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{profile.name}</h2>
                  <p className="text-sm text-muted-foreground">{profile.email}</p>
                  <div className="flex justify-center gap-2 mt-4">
                    <Badge variant="outline">{calculateAge(profile.dateOfBirth)} years</Badge>
                    <Badge variant="outline" className="capitalize">{profile.gender}</Badge>
                    <Badge variant="secondary" className="bg-emergency/10 text-emergency">
                      {profile.bloodType}
                    </Badge>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{profile.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{profile.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">
                      {new Date(profile.dateOfBirth).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="mt-6 border-emergency/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emergency">
                  <AlertCircle className="h-5 w-5" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {profile.emergencyContacts.map((contact, index) => (
                  <div key={index} className="p-3 rounded-lg bg-emergency/5">
                    <div className="font-medium text-foreground">{contact.name}</div>
                    <div className="text-xs text-muted-foreground">{contact.relationship}</div>
                    <div className="text-sm text-primary mt-1">{contact.phone}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Personal Information
                </CardTitle>
                <CardDescription>Your basic personal details</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      value={editedProfile.name}
                      onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                    />
                  ) : (
                    <p className="text-foreground py-2">{profile.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={editedProfile.email}
                      onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    />
                  ) : (
                    <p className="text-foreground py-2">{profile.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={editedProfile.phone}
                      onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                    />
                  ) : (
                    <p className="text-foreground py-2">{profile.phone}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  {isEditing ? (
                    <Input
                      id="dob"
                      type="date"
                      value={editedProfile.dateOfBirth}
                      onChange={(e) => setEditedProfile({ ...editedProfile, dateOfBirth: e.target.value })}
                    />
                  ) : (
                    <p className="text-foreground py-2">
                      {new Date(profile.dateOfBirth).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  {isEditing ? (
                    <Select
                      value={editedProfile.gender}
                      onValueChange={(value) => setEditedProfile({ ...editedProfile, gender: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="text-foreground py-2 capitalize">{profile.gender}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bloodType">Blood Type</Label>
                  {isEditing ? (
                    <Select
                      value={editedProfile.bloodType}
                      onValueChange={(value) => setEditedProfile({ ...editedProfile, bloodType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="text-foreground py-2">{profile.bloodType}</p>
                  )}
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  {isEditing ? (
                    <Input
                      id="address"
                      value={editedProfile.address}
                      onChange={(e) => setEditedProfile({ ...editedProfile, address: e.target.value })}
                    />
                  ) : (
                    <p className="text-foreground py-2">{profile.address}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Medical Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-emergency" />
                  Medical Information
                </CardTitle>
                <CardDescription>Your health and medical details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="medicalHistory">Medical History</Label>
                  {isEditing ? (
                    <Textarea
                      id="medicalHistory"
                      rows={3}
                      value={editedProfile.medicalHistory}
                      onChange={(e) => setEditedProfile({ ...editedProfile, medicalHistory: e.target.value })}
                    />
                  ) : (
                    <p className="text-foreground py-2 text-sm">{profile.medicalHistory}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="allergies" className="flex items-center gap-2">
                    Allergies
                    <Badge variant="destructive" className="text-xs">Important</Badge>
                  </Label>
                  {isEditing ? (
                    <Input
                      id="allergies"
                      value={editedProfile.allergies}
                      onChange={(e) => setEditedProfile({ ...editedProfile, allergies: e.target.value })}
                    />
                  ) : (
                    <p className="text-foreground py-2">{profile.allergies}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medications">Current Medications</Label>
                  {isEditing ? (
                    <Textarea
                      id="medications"
                      rows={2}
                      value={editedProfile.medications}
                      onChange={(e) => setEditedProfile({ ...editedProfile, medications: e.target.value })}
                    />
                  ) : (
                    <p className="text-foreground py-2 text-sm">{profile.medications}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-success" />
                  Security & Privacy
                </CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium text-foreground">Change Password</div>
                    <div className="text-sm text-muted-foreground">Update your account password</div>
                  </div>
                  <Button variant="outline">Update</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium text-foreground">Two-Factor Authentication</div>
                    <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium text-foreground">Download Medical Records</div>
                    <div className="text-sm text-muted-foreground">Get a copy of your health data</div>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
